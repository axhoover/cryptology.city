#!/usr/bin/env node
// .orchestrator/todo-triage.mjs
//
// Maintains a single living "Contributor TODO board" GitHub issue from
// TODO_SUMMARY.md. No LLM — the TODO_SUMMARY.md grammar is regular.
//
// Properties:
//   - Idempotent: finds the existing issue via a marker comment in its body
//     and edits in place (skips the edit entirely if the body is unchanged).
//     Ensures its own labels exist via the API.
//   - Delta-gated: always refreshes the body (silent), but only posts a
//     comment (the nag) when new Critical/High items appear, the backlog
//     hits a new high-water mark, or it has been >= 4 runs and the set
//     changed. The first run after deployment never comments.
//   - Triages: buckets by priority + category, surfaces good-first items
//     and a human-review queue, links each item to its source.
//
// TODO_SUMMARY.md grammar (also documented in .orchestrator/README.md):
//
//   ## <Section>                         priority from section name:
//                                          Critical | High | Medium | Low |
//                                          "Cannot Verify"/"Needs review"
//   - [ ] [Category] description — _source: path[:line][, more]_
//
//   * checkbox [ ] open, [x] done (done items are ignored)
//   * Category is a single bracket tag right after the checkbox
//     (Navigation | Content | Math | External | FactCheck | ...)
//   * "_source:" segment is optional; trailing "(note)" after it is ignored
//   * indented lines following an item are detail/sub-items
//   * sections whose title starts with "Changes Made" are skipped
//
// Env:
//   GITHUB_TOKEN        required (unless TODO_TRIAGE_DRYRUN)
//   GITHUB_REPOSITORY   "owner/repo" (provided by Actions)
//   GITHUB_REF_NAME     branch for source links (default "main")
//   TODO_TRIAGE_DRYRUN  if set, parse + render + decide, print, no network

import {
  readFileSync,
  writeFileSync,
  existsSync,
  mkdirSync,
} from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(__dirname, '..');
const TODO_PATH = resolve(REPO_ROOT, 'TODO_SUMMARY.md');
const STATE_DIR = resolve(__dirname, 'state');
const STATE_PATH = resolve(STATE_DIR, 'todo_state.json');
const PLAN_PATH = resolve(STATE_DIR, 'plan.json');

const MARKER = '<!-- orchestrator:todo-triage v1 -->';
const ISSUE_TITLE = '📋 Contributor TODO board';
const LABELS = [
  { name: 'orchestrator', color: '0075ca', description: 'Maintained by the weekly orchestrator' },
  { name: 'triage', color: 'e4e669', description: 'Backlog / triage tracking' },
];

const CAP_START = 12;
const CAP_IMPORTANT = 20;
const CAP_REVIEW = 15;
const PERIODIC_RUNS = 4;

const PRIORITIES = {
  0: { label: 'Critical', dot: '🔴' },
  1: { label: 'High', dot: '🟠' },
  2: { label: 'Medium', dot: '🟡' },
  3: { label: 'Low', dot: '⚪' },
  4: { label: 'Needs review', dot: '🔍' },
  5: { label: 'Other', dot: '▫️' },
};

// ----- Parsing -------------------------------------------------------------

function sectionPriority(title) {
  const t = title.trim().toLowerCase();
  if (/^changes made/.test(t)) return null; // skip changelog
  if (/^critical/.test(t)) return 0;
  if (/^high/.test(t)) return 1;
  if (/^medium/.test(t)) return 2;
  if (/^low/.test(t)) return 3;
  if (/cannot verify|needs human review|needs review|human review/.test(t)) return 4;
  return 5;
}

const ITEM_RE = /^- \[([ xX])\]\s+(.*)$/;
const CAT_RE = /^\[([A-Za-z][A-Za-z /-]{0,18})\]\s+(.*)$/;
const DETAIL_PATH_RE = /`([^`]+\.(?:md|ts))(?::(\d+))?`/;

function splitSource(rest) {
  const idx = rest.indexOf('_source:');
  if (idx < 0) return { description: rest.trim(), source: null };
  let description = rest
    .slice(0, idx)
    .replace(/[—\-\s]+$/u, '')
    .trim();
  let source = rest.slice(idx + '_source:'.length);
  // Drop the closing italics underscore and any trailing "(note)".
  source = source.replace(/_\s*(\(.*\))?\s*$/u, '').trim();
  return { description, source: source || null };
}

function firstPath(str) {
  if (!str) return null;
  const chunk = str.split(/[;,]/)[0].trim();
  const m = chunk.match(/([\w./ ()+-]+\.(?:md|ts))(?::(\d+))?/);
  if (!m) return null;
  return { path: m[1].trim(), line: m[2] ? Number(m[2]) : null };
}

function parseTodoSummary(text) {
  const lines = text.split(/\r?\n/);
  const items = [];
  let priority = null;
  let skipSection = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    const sec = line.match(/^##\s+(.+?)\s*$/);
    if (sec) {
      const p = sectionPriority(sec[1]);
      skipSection = p === null;
      priority = p;
      continue;
    }
    if (skipSection || priority === null) continue;

    const it = line.match(ITEM_RE);
    if (!it) continue;
    const status = it[1].toLowerCase();
    let body = it[2];

    let category = 'Uncategorized';
    const cm = body.match(CAT_RE);
    if (cm) {
      category = cm[1].trim();
      body = cm[2];
    }

    const { description, source } = splitSource(body);

    // Capture indented detail lines.
    const detail = [];
    let j = i + 1;
    for (; j < lines.length; j++) {
      const d = lines[j];
      if (d.trim() === '') break;
      if (/^(##\s|---|\s*-\s\[)/.test(d) && !/^\s+/.test(d)) break;
      if (!/^\s+/.test(d)) break;
      detail.push(d.trim());
    }
    i = j - 1;

    let src = firstPath(source);
    if (!src) {
      for (const d of detail) {
        const dm = d.match(DETAIL_PATH_RE);
        if (dm) {
          src = { path: dm[1], line: dm[2] ? Number(dm[2]) : null };
          break;
        }
      }
    }

    if (status !== ' ') continue; // only open items count

    items.push({
      priority,
      category,
      description: description.replace(/\s+/g, ' ').trim(),
      sourceRaw: source,
      sourcePath: src ? src.path : null,
      sourceLine: src ? src.line : null,
      detailCount: detail.length,
    });
  }
  return items;
}

// ----- Classification ------------------------------------------------------

const GOOD_FIRST_RE =
  /\bstub\b|\bempty\b|bare\s+`?TODO|no content|missing (the )?required|placeholder|skips directly to|has no content|single .*TODO|empty\b.*section/i;

function isGoodFirst(item) {
  if (!['Content', 'Navigation'].includes(item.category)) return false;
  return GOOD_FIRST_RE.test(item.description);
}

function itemKey(it) {
  return [
    it.priority,
    it.category.toLowerCase(),
    it.description.toLowerCase(),
    it.sourceRaw || '',
  ].join('|');
}

function classify(items) {
  const byPriority = { 0: [], 1: [], 2: [], 3: [], 4: [], 5: [] };
  const byCategory = {};
  for (const it of items) {
    byPriority[it.priority].push(it);
    byCategory[it.category] = (byCategory[it.category] || 0) + 1;
    it.goodFirst = isGoodFirst(it);
  }
  const counts = {
    critical: byPriority[0].length,
    high: byPriority[1].length,
    medium: byPriority[2].length,
    low: byPriority[3].length,
    review: byPriority[4].length,
    other: byPriority[5].length,
    total: items.length,
    good_first: items.filter((x) => x.goodFirst).length,
  };
  const hiKeys = [...byPriority[0], ...byPriority[1]].map(itemKey).sort();
  const fingerprint = createHash('sha256')
    .update(items.map(itemKey).sort().join('\n'))
    .digest('hex')
    .slice(0, 16);
  return { byPriority, byCategory, counts, hiKeys, fingerprint };
}

// ----- Rendering -----------------------------------------------------------

function repoSlug() {
  return process.env.GITHUB_REPOSITORY || 'OWNER/REPO';
}

function sourceLink(it) {
  if (!it.sourcePath) return it.sourceRaw ? `\`${it.sourceRaw}\`` : '';
  const branch = process.env.GITHUB_REF_NAME || 'main';
  const encoded = it.sourcePath
    .split('/')
    .map((s) => encodeURIComponent(s))
    .join('/');
  const anchor = it.sourceLine ? `#L${it.sourceLine}` : '';
  const label = it.sourceLine ? `${it.sourcePath}:${it.sourceLine}` : it.sourcePath;
  return `[${label}](https://github.com/${repoSlug()}/blob/${branch}/${encoded}${anchor})`;
}

function clip(s, n = 180) {
  return s.length > n ? s.slice(0, n - 1).trimEnd() + '…' : s;
}

function renderItem(it) {
  const extra = it.detailCount > 0 ? ` _(+${it.detailCount} detail)_` : '';
  const link = sourceLink(it);
  const where = link ? ` — ${link}` : '';
  return `- **[${it.category}]** ${clip(it.description)}${where}${extra}`;
}

function renderList(arr, cap) {
  const shown = arr.slice(0, cap).map(renderItem);
  if (arr.length > cap) {
    shown.push(`- …and **${arr.length - cap} more** — see [\`TODO_SUMMARY.md\`](https://github.com/${repoSlug()}/blob/${process.env.GITHUB_REF_NAME || 'main'}/TODO_SUMMARY.md)`);
  }
  return shown.join('\n');
}

function renderBody(model, meta) {
  const { byPriority, byCategory, counts, fingerprint } = model;
  const p = PRIORITIES;

  const goodFirst = [...byPriority[0], ...byPriority[1], ...byPriority[2]]
    .filter((x) => x.goodFirst);
  const important = [...byPriority[0], ...byPriority[1]];
  const review = byPriority[4];

  const snapshot =
    `**${counts.total} open** · ${p[0].dot} ${counts.critical} Critical · ` +
    `${p[1].dot} ${counts.high} High · ${p[2].dot} ${counts.medium} Medium · ` +
    `${p[3].dot} ${counts.low} Low · ${p[4].dot} ${counts.review} need review · ` +
    `🚀 ${counts.good_first} good first.\n\n` +
    `_Updated ${meta.date} (orchestrator run #${meta.run}). ` +
    `This issue is auto-maintained — do not edit by hand._`;

  const catRows = Object.entries(byCategory)
    .sort((a, b) => b[1] - a[1])
    .map(([c, n]) => `| ${c} | ${n} |`)
    .join('\n');

  const sections = [];

  sections.push(`### 🚀 Start here — good first contributions
Mostly filling stubs and empty sections. Pick one, open a PR, and check off
its box in \`TODO_SUMMARY.md\` in the same PR.

${goodFirst.length ? renderList(goodFirst, CAP_START) : '_None right now._'}`);

  sections.push(`### 🔴 Most important
${important.length ? renderList(important, CAP_IMPORTANT) : '_None right now._'}`);

  sections.push(`### 🔍 Needs human review
These can't be auto-resolved by a bot — a maintainer needs to look.

${review.length ? renderList(review, CAP_REVIEW) : '_None right now._'}`);

  sections.push(`### By category
| Category | Open |
|---|---|
${catRows || '| — | 0 |'}

Full list: [\`TODO_SUMMARY.md\`](https://github.com/${repoSlug()}/blob/${process.env.GITHUB_REF_NAME || 'main'}/TODO_SUMMARY.md)`);

  const footer =
    `---\n_To clear an item: check its box (\`- [x]\`) or delete the line in ` +
    `\`TODO_SUMMARY.md\` via a PR — the board refreshes on the next weekly run._\n` +
    `<!-- fp:${fingerprint} total:${counts.total} -->`;

  return [
    MARKER,
    snapshot,
    sections.join('\n\n'),
    footer,
  ].join('\n\n');
}

// ----- GitHub API ----------------------------------------------------------

const API = 'https://api.github.com';

function gh(path, init = {}) {
  return fetch(`${API}${path}`, {
    ...init,
    headers: {
      authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      accept: 'application/vnd.github+json',
      'x-github-api-version': '2022-11-28',
      'user-agent': 'cryptology-city-orchestrator',
      ...(init.body ? { 'content-type': 'application/json' } : {}),
      ...(init.headers || {}),
    },
  });
}

async function ensureLabels() {
  for (const l of LABELS) {
    const r = await gh(`/repos/${repoSlug()}/labels`, {
      method: 'POST',
      body: JSON.stringify(l),
    });
    if (!r.ok && r.status !== 422) {
      console.error(`Warning: could not ensure label "${l.name}": HTTP ${r.status}`);
    }
  }
}

async function findIssue() {
  const r = await gh(
    `/repos/${repoSlug()}/issues?state=open&labels=orchestrator&per_page=100`,
  );
  if (!r.ok) throw new Error(`list issues failed: HTTP ${r.status}`);
  const arr = await r.json();
  const matches = arr
    .filter((x) => !x.pull_request && (x.body || '').includes(MARKER))
    .sort((a, b) => a.number - b.number);
  return matches[0] || null;
}

async function createIssue(body) {
  const r = await gh(`/repos/${repoSlug()}/issues`, {
    method: 'POST',
    body: JSON.stringify({
      title: ISSUE_TITLE,
      body,
      labels: LABELS.map((l) => l.name),
    }),
  });
  if (!r.ok) throw new Error(`create issue failed: HTTP ${r.status}`);
  return r.json();
}

async function updateIssue(number, body) {
  const r = await gh(`/repos/${repoSlug()}/issues/${number}`, {
    method: 'PATCH',
    body: JSON.stringify({ body, state: 'open' }),
  });
  if (!r.ok) throw new Error(`update issue failed: HTTP ${r.status}`);
}

async function addComment(number, text) {
  const r = await gh(`/repos/${repoSlug()}/issues/${number}/comments`, {
    method: 'POST',
    body: JSON.stringify({ body: text }),
  });
  if (!r.ok) throw new Error(`comment failed: HTTP ${r.status}`);
}

// ----- State + decision ----------------------------------------------------

function loadState() {
  if (!existsSync(STATE_PATH)) return null;
  try {
    return JSON.parse(readFileSync(STATE_PATH, 'utf8'));
  } catch {
    return null;
  }
}

function runNumber(prev) {
  if (existsSync(PLAN_PATH)) {
    try {
      const plan = JSON.parse(readFileSync(PLAN_PATH, 'utf8'));
      if (Number.isInteger(plan.run_count)) return plan.run_count;
    } catch {
      /* fall through */
    }
  }
  return (prev?.runs ?? 0) + 1;
}

function decideComment(prev, model, run, isCreate) {
  // Silent on first deployment and on issue creation.
  if (!prev || isCreate) return { comment: false, reasons: [] };

  const reasons = [];
  const prevHi = new Set(prev.hi_keys || []);
  const newHi = model.hiKeys.filter((k) => !prevHi.has(k));
  if (newHi.length > 0) reasons.push(`${newHi.length} new high-priority item(s)`);

  if (model.counts.total > (prev.high_water_total ?? 0)) {
    reasons.push(`backlog reached a new high (${model.counts.total})`);
  }

  const since = run - (prev.last_comment_run ?? 0);
  if (
    since >= PERIODIC_RUNS &&
    model.fingerprint !== prev.fingerprint &&
    model.fingerprint !== prev.last_comment_fingerprint
  ) {
    reasons.push(`periodic update (${since} runs since last)`);
  }

  return { comment: reasons.length > 0, reasons };
}

function commentText(model, reasons, run) {
  const c = model.counts;
  return (
    `📋 **TODO board updated** (run #${run}): ${reasons.join('; ')}.\n\n` +
    `${c.total} open — ${c.critical} critical, ${c.high} high, ` +
    `${c.good_first} good-first, ${c.review} need human review. ` +
    `See the board above for the worklist.`
  );
}

// ----- Main ----------------------------------------------------------------

async function main() {
  if (!existsSync(TODO_PATH)) {
    console.log('No TODO_SUMMARY.md; nothing to triage.');
    return;
  }
  const text = readFileSync(TODO_PATH, 'utf8');
  const items = parseTodoSummary(text);
  const model = classify(items);

  const prev = loadState();
  const run = runNumber(prev);
  const meta = { date: new Date().toISOString().slice(0, 10), run };
  const body = renderBody(model, meta);

  const dryRun = !!process.env.TODO_TRIAGE_DRYRUN;

  if (dryRun) {
    const { comment, reasons } = decideComment(prev, model, run, !prev);
    console.log('--- DRY RUN ---');
    console.log('counts:', JSON.stringify(model.counts));
    console.log('fingerprint:', model.fingerprint);
    console.log('would comment:', comment, reasons);
    console.log('--- ISSUE BODY ---');
    console.log(body);
    return;
  }

  if (!process.env.GITHUB_TOKEN) {
    console.error('GITHUB_TOKEN not set; cannot reach the API.');
    process.exit(1);
  }

  await ensureLabels();
  const existing = await findIssue();
  const isCreate = !existing;

  let number;
  if (isCreate) {
    const created = await createIssue(body);
    number = created.number;
    console.log(`Created board issue #${number}.`);
  } else {
    number = existing.number;
    if ((existing.body || '') !== body) {
      await updateIssue(number, body);
      console.log(`Refreshed board issue #${number}.`);
    } else {
      console.log(`Board issue #${number} already current; no edit.`);
    }
  }

  const { comment, reasons } = decideComment(prev, model, run, isCreate);
  if (comment) {
    await addComment(number, commentText(model, reasons, run));
    console.log(`Posted nag comment: ${reasons.join('; ')}`);
  } else {
    console.log('No comment (delta gate closed or first run).');
  }

  mkdirSync(STATE_DIR, { recursive: true });
  const next = {
    version: 1,
    issue: number,
    fingerprint: model.fingerprint,
    counts: model.counts,
    hi_keys: model.hiKeys,
    high_water_total: Math.max(prev?.high_water_total ?? 0, model.counts.total),
    last_comment_run: comment ? run : prev?.last_comment_run ?? 0,
    last_comment_fingerprint: comment
      ? model.fingerprint
      : prev?.last_comment_fingerprint ?? null,
    runs: run,
    updated_at: new Date().toISOString(),
  };
  writeFileSync(STATE_PATH, JSON.stringify(next, null, 2) + '\n');
  console.log('Wrote .orchestrator/state/todo_state.json');
}

main().catch((err) => {
  console.error(err.stack || String(err));
  process.exit(1);
});
