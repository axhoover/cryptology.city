#!/usr/bin/env node
// .orchestrator/decide.mjs
//
// Weekly orchestrator for cryptology.city.
//
// 1. Builds a deterministic, rule-based plan over which content bots should
//    run this week (editor, reference-fixer, skeptical-checker,
//    refactor-simplifier, todo-triage).
// 2. Optionally asks Claude to refine the plan (set ORCHESTRATOR_LLM=true and
//    provide ANTHROPIC_API_KEY). The LLM may flip `run` flags, narrow scope,
//    or annotate reasons — it cannot add bots or invent file paths.
// 3. Writes plan.json + WEEKLY_REPORT.md + last_run.json under
//    .orchestrator/state/, and emits GitHub Actions outputs for downstream
//    jobs.
//
// Pure Node — no dependencies.

import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import {
  readFileSync,
  writeFileSync,
  appendFileSync,
  existsSync,
  mkdirSync,
  statSync,
} from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

// ----- Paths and tunables --------------------------------------------------

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(__dirname, '..');

const STATE_DIR = resolve(__dirname, 'state');
const LAST_RUN_PATH = resolve(STATE_DIR, 'last_run.json');
const PLAN_PATH = resolve(STATE_DIR, 'plan.json');
const REPORT_PATH = resolve(STATE_DIR, 'WEEKLY_REPORT.md');

const QUEUE_PATH = resolve(REPO_ROOT, '.fact-check', 'queue.json');
const TODO_PATH = resolve(REPO_ROOT, 'TODO_SUMMARY.md'); // adjust if your TODO file lives elsewhere

const MICROCRYPT_GV_PATH = resolve(REPO_ROOT, 'vendor', 'microcrypt-zoo', 'microcrypt.gv');
const MICROCRYPT_SYNC_STATE_PATH = resolve(STATE_DIR, 'microcrypt-sync.json');

const CONTENT_DIR = 'content';
const DEEP_DIRS = [
  'content/Primitives',
  'content/Complexity',
  'content/Assumptions',
  'content/Glossary',
];

const QUIET_DAYS_FOR_REFACTOR = 30;
const HUMAN_VERIFIED_REFACTOR_AGE_DAYS = 180;
const ROT_SWEEP_EVERY_N_RUNS = 4;
const TODO_TRIAGE_THRESHOLD = 25;

const BOT_KEYS = [
  'editor',
  'reference_fixer',
  'skeptical_checker',
  'refactor_simplifier',
  'todo_triage',
  'microcrypt_sync',
];

// ----- Small utilities -----------------------------------------------------

function git(args) {
  return execFileSync('git', args, { cwd: REPO_ROOT, encoding: 'utf8' }).trim();
}

function readJsonOrNull(path) {
  if (!existsSync(path)) return null;
  try {
    return JSON.parse(readFileSync(path, 'utf8'));
  } catch (err) {
    console.error(`Warning: failed to parse ${path}: ${err.message}`);
    return null;
  }
}

function ensureDir(path) {
  mkdirSync(path, { recursive: true });
}

// ----- Repository inspection ----------------------------------------------

function currentSha() {
  return git(['rev-parse', 'HEAD']);
}

function shaExists(sha) {
  try {
    git(['cat-file', '-e', `${sha}^{commit}`]);
    return true;
  } catch {
    return false;
  }
}

function changedContentMd(sinceSha) {
  if (!sinceSha) return [];
  if (!shaExists(sinceSha)) {
    console.error(
      `Warning: previous SHA ${sinceSha} not in history; treating as first run.`,
    );
    return [];
  }
  let out;
  try {
    out = git(['diff', '--name-only', `${sinceSha}..HEAD`, '--', CONTENT_DIR]);
  } catch (err) {
    console.error(`Warning: git diff failed: ${err.message}`);
    return [];
  }
  return out
    ? out.split('\n').filter((f) => f.endsWith('.md'))
    : [];
}

const REF_PATTERN =
  /^[+-](?!\+\+|--).*(\[\[|https?:\/\/|\\cite\{|@[\w:-]+)/m;

function looksLikeReferenceTouch(file, sinceSha) {
  try {
    const diff = git(['diff', `${sinceSha}..HEAD`, '--', file]);
    return REF_PATTERN.test(diff);
  } catch {
    return false;
  }
}

function isDeepContent(file) {
  return DEEP_DIRS.some((d) => file.startsWith(d + '/'));
}

function countOpenTodos() {
  if (!existsSync(TODO_PATH)) return 0;
  const txt = readFileSync(TODO_PATH, 'utf8');
  const matches = txt.match(/^\s*-\s*\[\s\]/gm);
  return matches ? matches.length : 0;
}

function summarizeQueue() {
  const queue = readJsonOrNull(QUEUE_PATH);
  if (!queue || !queue.entries) {
    return { exists: false, counts: {}, oldestHumanVerifiedDays: null };
  }
  const counts = {};
  let oldest = null;
  const now = Date.now();
  for (const entry of Object.values(queue.entries)) {
    counts[entry.status] = (counts[entry.status] || 0) + 1;
    if (entry.status === 'human_verified' && entry.verified_at) {
      const t = Date.parse(entry.verified_at);
      if (!Number.isNaN(t)) {
        const days = (now - t) / 86_400_000;
        if (oldest === null || days > oldest) oldest = days;
      }
    }
  }
  return { exists: true, counts, oldestHumanVerifiedDays: oldest };
}

function skepticalCheckerHasWork(queueSummary) {
  if (!queueSummary.exists) {
    // No queue yet — let the bot bootstrap if any deep content exists.
    return DEEP_DIRS.some((d) => existsSync(resolve(REPO_ROOT, d)));
  }
  const c = queueSummary.counts;
  return (c.unreviewed ?? 0) + (c.stale ?? 0) + (c.bot_flagged ?? 0) > 0;
}

function microcryptSyncShouldRun() {
  if (!existsSync(MICROCRYPT_GV_PATH)) return false;
  const cur = createHash('sha256')
    .update(readFileSync(MICROCRYPT_GV_PATH))
    .digest('hex');
  const state = readJsonOrNull(MICROCRYPT_SYNC_STATE_PATH);
  const prev = state?.microcrypt_gv_sha256 ?? null;
  return cur !== prev;
}

// ----- Plan construction ---------------------------------------------------

function buildBasePlan({
  runCount,
  headSha,
  previousSha,
  daysSinceLastRun,
  changed,
  refTouched,
  deepChanged,
  queueSummary,
  openTodos,
  doRotSweep,
  microcryptSync,
}) {
  const oldest = queueSummary.oldestHumanVerifiedDays;

  return {
    run_count: runCount,
    head_sha: headSha,
    previous_sha: previousSha,
    timestamp: new Date().toISOString(),
    days_since_last_run: daysSinceLastRun,
    changed_files: changed,
    queue_summary: queueSummary,
    open_todos: openTodos,
    bots: {
      editor: {
        run: changed.length > 0,
        scope: changed,
        reason:
          changed.length > 0
            ? `${changed.length} content file(s) changed since last run`
            : 'no content changes since last run',
      },
      reference_fixer: {
        run: refTouched.length > 0 || doRotSweep,
        mode: doRotSweep ? 'link-rot-sweep' : 'diff-scoped',
        scope: doRotSweep ? [] : refTouched,
        reason: doRotSweep
          ? `periodic link-rot sweep (run #${runCount}, every ${ROT_SWEEP_EVERY_N_RUNS} runs)`
          : refTouched.length > 0
          ? `${refTouched.length} reference-touching change(s)`
          : 'no reference-touching changes',
      },
      skeptical_checker: {
        run: deepChanged.length > 0 || skepticalCheckerHasWork(queueSummary),
        scope: deepChanged,
        reason:
          deepChanged.length > 0
            ? `${deepChanged.length} deep-content file(s) changed`
            : queueSummary.exists
            ? 'queue has unreviewed/stale/flagged entries'
            : 'bootstrapping fact-check queue',
      },
      refactor_simplifier: {
        run:
          (daysSinceLastRun !== null &&
            daysSinceLastRun >= QUIET_DAYS_FOR_REFACTOR &&
            changed.length === 0) ||
          (oldest !== null && oldest > HUMAN_VERIFIED_REFACTOR_AGE_DAYS),
        scope: 'oldest-pages',
        reason:
          oldest !== null && oldest > HUMAN_VERIFIED_REFACTOR_AGE_DAYS
            ? `oldest human_verified page is ${Math.floor(oldest)} days old`
            : daysSinceLastRun !== null && changed.length === 0
            ? `no content changes in ${Math.floor(daysSinceLastRun)} days`
            : 'recent activity and verifications are fresh',
      },
      todo_triage: {
        run: openTodos > 0,
        scope: openTodos,
        reason:
          openTodos > 0
            ? `${openTodos} open TODOs — board refreshes; nag is delta-gated`
            : 'no open TODOs',
      },
      microcrypt_sync: {
        run: microcryptSync,
        scope: 'microcrypt-map',
        reason: microcryptSync
          ? 'upstream microcrypt.gv hash changed since last sync'
          : 'microcrypt.gv hash unchanged since last sync',
      },
    },
  };
}

// ----- Optional LLM refinement --------------------------------------------

function buildRefinementPrompt(basePlan) {
  // Compact context — we don't need to send the full file list if it's huge.
  const sampleChanged = basePlan.changed_files.slice(0, 25);
  const truncated =
    basePlan.changed_files.length > sampleChanged.length
      ? ` (showing first 25 of ${basePlan.changed_files.length})`
      : '';

  return `You are the weekly orchestrator for cryptology.city — a Quartz wiki of cryptography notes. A rule-based engine has produced the plan below. Your job is to refine it conservatively. Default to accepting the rule output; only override when there's a clear reason.

# Base plan (run #${basePlan.run_count}, ${basePlan.timestamp})

\`\`\`json
${JSON.stringify(
  {
    days_since_last_run: basePlan.days_since_last_run,
    changed_files_count: basePlan.changed_files.length,
    sample_changed_files: sampleChanged,
    queue_summary: basePlan.queue_summary,
    open_todos: basePlan.open_todos,
    bots: basePlan.bots,
  },
  null,
  2,
)}
\`\`\`

Changed files${truncated}:
${sampleChanged.map((f) => `- ${f}`).join('\n') || '(none)'}

# What you can do
- Flip any bot's \`run\` from true → false or false → true.
- Narrow a bot's \`scope\` (drop files from the list — never add).
- Augment a \`reason\` with at most one extra sentence of clarification.

# What you cannot do
- Add bot keys not present in the base plan.
- Add file paths not in the base plan's \`changed_files\` list.
- Change any other fields (run_count, head_sha, timestamp, etc.).
- Output anything other than valid JSON.

# Output
Return ONLY a single JSON object with this exact shape (no prose, no markdown fences):

{
  "bots": {
    "editor": { "run": <bool>, "scope": <same-or-narrowed list>, "reason": "<text>" },
    "reference_fixer": { "run": <bool>, "mode": "<same as input>", "scope": <same-or-narrowed>, "reason": "<text>" },
    "skeptical_checker": { "run": <bool>, "scope": <same-or-narrowed list>, "reason": "<text>" },
    "refactor_simplifier": { "run": <bool>, "scope": "oldest-pages", "reason": "<text>" },
    "todo_triage": { "run": <bool>, "scope": <integer from input>, "reason": "<text>" },
    "microcrypt_sync": { "run": <bool>, "scope": "microcrypt-map", "reason": "<text>" }
  },
  "llm_notes": "<1-3 sentences explaining any changes, or confirming the rule plan>"
}`;
}

async function refineWithLlm(basePlan) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return { used: false, reason: 'ANTHROPIC_API_KEY not set' };
  }
  const model = process.env.ORCHESTRATOR_MODEL || 'claude-haiku-4-5-20251001';

  const body = {
    model,
    max_tokens: 1024,
    messages: [{ role: 'user', content: buildRefinementPrompt(basePlan) }],
  };

  let response;
  try {
    response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify(body),
    });
  } catch (err) {
    return { used: false, reason: `network error: ${err.message}` };
  }

  if (!response.ok) {
    const text = await response.text().catch(() => '');
    return {
      used: false,
      reason: `HTTP ${response.status}: ${text.slice(0, 200)}`,
    };
  }

  let data;
  try {
    data = await response.json();
  } catch (err) {
    return { used: false, reason: `bad JSON response: ${err.message}` };
  }

  const text = (data.content || [])
    .filter((b) => b.type === 'text')
    .map((b) => b.text)
    .join('')
    .trim();

  // Strip ```json fences if Claude adds them despite instructions.
  const cleaned = text.replace(/^```(?:json)?\s*/i, '').replace(/```\s*$/i, '').trim();

  let refined;
  try {
    refined = JSON.parse(cleaned);
  } catch (err) {
    return {
      used: false,
      reason: `LLM returned non-JSON: ${err.message}`,
      raw: text.slice(0, 400),
    };
  }

  const validation = validateRefinement(basePlan, refined);
  if (!validation.ok) {
    return { used: false, reason: `validation failed: ${validation.error}`, refined };
  }

  return { used: true, refined, notes: refined.llm_notes ?? null };
}

function validateRefinement(basePlan, refined) {
  if (!refined || typeof refined !== 'object' || !refined.bots) {
    return { ok: false, error: 'missing bots object' };
  }
  for (const key of BOT_KEYS) {
    const b = refined.bots[key];
    if (!b || typeof b !== 'object') {
      return { ok: false, error: `bot "${key}" missing or not an object` };
    }
    if (typeof b.run !== 'boolean') {
      return { ok: false, error: `bot "${key}".run must be boolean` };
    }
    if (typeof b.reason !== 'string') {
      return { ok: false, error: `bot "${key}".reason must be string` };
    }
  }
  // Make sure no extra bot keys snuck in.
  for (const key of Object.keys(refined.bots)) {
    if (!BOT_KEYS.includes(key)) {
      return { ok: false, error: `unexpected bot key "${key}"` };
    }
  }
  // Scopes for file-list bots must be a subset of base scope.
  const fileScopeBots = ['editor', 'reference_fixer', 'skeptical_checker'];
  for (const key of fileScopeBots) {
    const baseScope = basePlan.bots[key].scope;
    const newScope = refined.bots[key].scope;
    if (Array.isArray(baseScope)) {
      if (!Array.isArray(newScope)) {
        return { ok: false, error: `bot "${key}".scope must be an array` };
      }
      const baseSet = new Set(baseScope);
      for (const f of newScope) {
        if (!baseSet.has(f)) {
          return {
            ok: false,
            error: `bot "${key}".scope contains "${f}" which is not in the base scope`,
          };
        }
      }
    }
  }
  return { ok: true };
}

function mergeRefinement(basePlan, refined) {
  const merged = structuredClone(basePlan);
  for (const key of BOT_KEYS) {
    const r = refined.bots[key];
    merged.bots[key].run = r.run;
    merged.bots[key].reason = r.reason;
    if (Array.isArray(merged.bots[key].scope) && Array.isArray(r.scope)) {
      merged.bots[key].scope = r.scope;
    }
  }
  merged.llm = { used: true, notes: refined.llm_notes ?? null };
  return merged;
}

// ----- Report and outputs --------------------------------------------------

function renderReport(plan) {
  const lines = [
    `# Weekly Orchestrator Report — run #${plan.run_count}`,
    ``,
    `- **Head:** \`${plan.head_sha}\``,
    `- **Previous:** ${plan.previous_sha ? `\`${plan.previous_sha}\`` : '(first run)'}`,
    `- **Days since last run:** ${plan.days_since_last_run ?? 'n/a'}`,
    `- **Changed content files:** ${plan.changed_files.length}`,
    `- **Open TODOs:** ${plan.open_todos}`,
    `- **LLM refinement:** ${plan.llm?.used ? 'yes' : 'no'}${
      plan.llm?.notes ? ` — ${plan.llm.notes}` : ''
    }`,
    ``,
    `## Bot decisions`,
    ``,
  ];
  for (const [name, info] of Object.entries(plan.bots)) {
    lines.push(`### \`${name}\` — ${info.run ? '**RUN**' : 'skip'}`);
    lines.push(``);
    lines.push(`- Reason: ${info.reason}`);
    if (info.run && Array.isArray(info.scope) && info.scope.length) {
      lines.push(`- Scope (${info.scope.length}):`);
      for (const f of info.scope) lines.push(`  - \`${f}\``);
    } else if (info.run && info.scope && !Array.isArray(info.scope)) {
      lines.push(`- Scope: ${info.scope}`);
    }
    lines.push(``);
  }
  return lines.join('\n');
}

function emitGhOutputs(plan) {
  const outPath = process.env.GITHUB_OUTPUT;
  if (!outPath) return;
  const lines = [];
  for (const key of BOT_KEYS) {
    lines.push(`run_${key}=${plan.bots[key].run ? 'true' : 'false'}`);
  }
  lines.push(`head_sha=${plan.head_sha}`);
  lines.push(`run_count=${plan.run_count}`);
  appendFileSync(outPath, lines.join('\n') + '\n');
}

// ----- Main ----------------------------------------------------------------

async function main() {
  ensureDir(STATE_DIR);

  const lastRun = readJsonOrNull(LAST_RUN_PATH);
  const previousSha = lastRun?.sha ?? null;
  const runCount = (lastRun?.run_count ?? 0) + 1;
  const daysSinceLastRun = lastRun?.timestamp
    ? (Date.now() - Date.parse(lastRun.timestamp)) / 86_400_000
    : null;

  const headSha = currentSha();
  const changed = changedContentMd(previousSha);
  const refTouched = previousSha
    ? changed.filter((f) => looksLikeReferenceTouch(f, previousSha))
    : [];
  const deepChanged = changed.filter(isDeepContent);

  const queueSummary = summarizeQueue();
  const openTodos = countOpenTodos();
  const doRotSweep = runCount % ROT_SWEEP_EVERY_N_RUNS === 0;
  const microcryptSync = microcryptSyncShouldRun();

  const basePlan = buildBasePlan({
    runCount,
    headSha,
    previousSha,
    daysSinceLastRun,
    changed,
    refTouched,
    deepChanged,
    queueSummary,
    openTodos,
    doRotSweep,
    microcryptSync,
  });
  basePlan.llm = { used: false, notes: null };

  // Optional LLM pass.
  let finalPlan = basePlan;
  const llmEnabled = ['1', 'true', 'on', 'yes'].includes(
    (process.env.ORCHESTRATOR_LLM ?? '').toLowerCase(),
  );
  if (llmEnabled) {
    const result = await refineWithLlm(basePlan);
    if (result.used) {
      finalPlan = mergeRefinement(basePlan, result.refined);
      console.log(`LLM refinement applied. Notes: ${result.notes ?? '(none)'}`);
    } else {
      finalPlan.llm = { used: false, notes: `skipped: ${result.reason}` };
      console.error(`LLM refinement skipped: ${result.reason}`);
    }
  }

  writeFileSync(PLAN_PATH, JSON.stringify(finalPlan, null, 2) + '\n');
  writeFileSync(REPORT_PATH, renderReport(finalPlan));
  writeFileSync(
    LAST_RUN_PATH,
    JSON.stringify(
      { sha: headSha, timestamp: finalPlan.timestamp, run_count: runCount },
      null,
      2,
    ) + '\n',
  );
  emitGhOutputs(finalPlan);

  const running = BOT_KEYS.filter((k) => finalPlan.bots[k].run);
  console.log(
    running.length > 0
      ? `Planned to run: ${running.join(', ')}`
      : 'No bots scheduled this run.',
  );
}

main().catch((err) => {
  console.error(err.stack || err.message);
  process.exit(1);
});
