export const meta = {
  name: "review-apply",
  description:
    "Apply one step of a cryptology.city review round (the decided items, or the audit's mechanical fixes) in file-disjoint groups: tooling groups alone in sequence, content groups in parallel, a coordinator, then sweep groups; an executor and an independent verifier per group",
  whenToUse:
    "Steps 1 and 2 of the review-round skill (.claude/skills/review-round/SKILL.md), on the group files scripts/review/round.mjs wrote",
  phases: [
    {
      title: "Tooling",
      detail:
        "groups that touch files outside content/, one at a time; the verifier commits each",
    },
    {
      title: "Content",
      detail:
        "file-disjoint content groups in parallel, executor then verifier",
    },
    {
      title: "Coordinate",
      detail:
        "cross-group edits, TODO_SUMMARY, regenerate, lint, test, one commit",
    },
    {
      title: "Sweeps",
      detail:
        "groups with many or no listed pages, one at a time; the verifier commits each",
    },
  ],
};

// args: {
//   repo: absolute path of the checkout,
//   round: n,
//   step: 'apply' (decided items) | 'fixes' (the audit's mechanical fixes),
//   groups: [{ group, mode: 'tooling' | 'parallel' | 'sweep', items }] as printed by round.mjs,
//   paper_reachable: boolean,
//   trailer: commit trailer lines (optional),
// }
const A = args || {};
if (!A.repo || !A.round || !A.step || !Array.isArray(A.groups))
  throw new Error(
    "review-apply needs args {repo, round, step, groups[, paper_reachable, trailer]}",
  );
const REPO = A.repo;
const DIR = `${REPO}/.review/work/round-${A.round}/${A.step}`;
const PROMPTS = `${REPO}/.review/prompts`;
const PAPER = A.paper_reachable
  ? "The paper hosts (eprint, arXiv, doi.org, Springer) are reachable from this environment."
  : "The paper hosts (eprint, arXiv, doi.org, Springer) are NOT reachable from this environment; do not try them.";
const TRAILER = A.trailer
  ? ` End the commit message with these trailer lines, after a blank line:\n${A.trailer}`
  : "";
const STEP_NAME = A.step === "fixes" ? "mechanical fixes" : "decisions";
const STAGE = "git add -A -- . ':!public' ':!tsconfig.tsbuildinfo' ':!.review'";

const SUM = {
  type: "object",
  properties: {
    group: { type: "string" },
    applied: { type: "number" },
    skipped: { type: "number" },
    lint_clean: { type: "boolean" },
    commit: { type: "string" },
    notes: { type: "array", items: { type: "string" } },
  },
  required: ["group", "applied", "skipped", "lint_clean", "notes"],
};
const HEAD = {
  type: "object",
  properties: {
    head: { type: "string" },
    dirty: { type: "array", items: { type: "string" } },
  },
  required: ["head", "dirty"],
};

async function attempt(label, fn, tries) {
  const n = tries || 2;
  for (let i = 1; i <= n; i++) {
    let r = null;
    try {
      r = await fn();
    } catch (e) {
      r = null;
    }
    if (r) return r;
    log(`${label}: attempt ${i} of ${n} failed`);
  }
  return null;
}

const ALONE = `This group runs ALONE: nothing else is editing the repo. You may edit any file the items require (content pages, schema/, scripts/, test/, docs/, CLAUDE.md, CONTRIBUTING.md, the city-style skill, macros.ts with content/Glossary/latex-macros.md), and you may run \`node scripts/generate-relations.mjs\`.`;
const PARALLEL = `Other groups are editing other files AT THE SAME TIME: edit only the group's \`own_files\` and files you newly create; do not run generate-relations.`;

const execPrompt = (
  g,
) => `You execute decided review items on the cryptology.city wiki (repo at ${REPO}), round ${A.round}, step "${A.step}".

Read ${PROMPTS}/apply-exec.md FIRST and follow it exactly.

Group file: ${DIR}/${g.group}.json (mode ${g.mode}). Write your report to ${DIR}/${g.group}.exec.json.

${g.mode === "parallel" ? PARALLEL : ALONE}

${PAPER}

Do not commit. Return the structured summary (group "${g.group}").`;

const verifyPrompt = (g, base, execMissing) => {
  const commit =
    g.mode === "parallel"
      ? "Other groups are editing other files concurrently: do not run generate-relations and do not commit; leave `commit` empty."
      : `${ALONE}\n\nWhen your checks pass: apply the group's \`todo_summary\` and \`fact_check_stale\` entries (apply-verify.md, rule 6); run \`node scripts/generate-relations.mjs\`, \`node scripts/lint.mjs\` (0 errors), \`node scripts/generate-relations.mjs --check\` and \`npm test\` (a failure the group's changes did not cause does not block the commit: apply-verify.md, § Checks); then COMMIT: \`${STAGE}\`, then git commit with the subject "review round ${A.round}: ${g.group}, <one-line summary of the items>".${TRAILER} Restore tsconfig.tsbuildinfo if anything touched it. Put the full hash in \`commit\` (summary and report). Do not push. If nothing is left to commit (every item already done or skipped), restore any stray edit so that \`git status --short\` shows nothing outside .review/ and public/, and leave \`commit\` empty. If you cannot make the checks pass, do not commit: leave \`commit\` empty and say why in \`notes\` (the workflow then restores the group and its items are retried next round).`;
  return `You verify decided review items just applied to the cryptology.city wiki (repo at ${REPO}), round ${A.round}, step "${A.step}".

Read ${PROMPTS}/apply-verify.md (§ Verifier) FIRST and follow it exactly; it points at apply-exec.md.

Group file: ${DIR}/${g.group}.json (mode ${g.mode}). Executor's report: ${DIR}/${g.group}.exec.json${execMissing ? " — MISSING: the executor did not finish; follow the paragraph on a missing report" : ""}. BASE commit: ${base}. Write your verified report to ${DIR}/${g.group}.verify.json.

${commit}

${PAPER}

Return the structured summary (group "${g.group}").`;
};

const restorePrompt = (g) =>
  `In the cryptology.city repo at ${REPO}, the review group ${g.group} (round ${A.round}, step "${A.step}") ran alone and did not finish: its verifier did not commit. Restore the working tree to HEAD for everything the group changed: run \`git status --short\`; for each modified or deleted tracked file outside .review/, \`git checkout HEAD -- <file>\`; delete each untracked file outside .review/ and public/. Never touch .review/ (it holds this round's bookkeeping). Then confirm \`git status --short\` shows nothing outside .review/ and public/. Then write ${DIR}/${g.group}.verify.json: if it exists, keep it and set every item whose status is applied, partial or reverted to "skipped" with "retry": true and "reason": "the group's checks did not pass; restored, retried next round" (keep the verifier's note); otherwise write {"group": "${g.group}", "mode": "${g.mode}", "commit": "", "items": [one entry per item in ${DIR}/${g.group}.json with its "id", "status": "skipped", "retry": true, "reason": "the apply group did not finish; restored, retried next round"]}. Set "commit": "". Return the structured summary (group "${g.group}", applied 0).`;

const headPrompt = `In ${REPO} run \`git rev-parse HEAD\` and \`git status --short\`. Return the full hash in \`head\` and every status line outside .review/ and public/ in \`dirty\`.`;

let halted = false;
const results = [];
const notRun = [];

async function aloneGroup(g, phaseName) {
  if (halted) {
    notRun.push(g.group);
    log(
      `not run: ${g.group} (halted); its items are carried to the next round`,
    );
    return;
  }
  const e = await attempt(`exec:${g.group}`, () =>
    agent(execPrompt(g), {
      label: `exec:${g.group}`,
      phase: phaseName,
      schema: SUM,
    }),
  );
  const v = await attempt(`verify:${g.group}`, () =>
    agent(
      verifyPrompt(
        g,
        "HEAD (nothing has been committed since the executor started)",
        !e,
      ),
      {
        label: `verify:${g.group}`,
        phase: phaseName,
        schema: SUM,
      },
    ),
  );
  if (v && (v.commit || v.applied === 0)) {
    // a commit, or nothing to commit (every item already done or skipped)
    results.push({
      group: g.group,
      mode: g.mode,
      status: "verified",
      exec: e,
      verify: v,
    });
    return;
  }
  if (v)
    log(
      `${g.group}: verifier applied ${v.applied} items but did not commit (${(v.notes || []).join("; ")}); restoring`,
    );
  const r = await attempt(`restore:${g.group}`, () =>
    agent(restorePrompt(g), {
      label: `restore:${g.group}`,
      phase: phaseName,
      schema: SUM,
    }),
  );
  results.push({
    group: g.group,
    mode: g.mode,
    status: v ? "uncommitted" : "failed",
    exec: e,
    verify: v,
    restore: r,
  });
  if (!r) {
    halted = true;
    log(
      `halting: ${g.group} failed and the tree could not be restored; later groups are carried`,
    );
  }
}

const tooling = A.groups.filter((g) => g.mode === "tooling");
const content = A.groups.filter((g) => g.mode === "parallel");
const sweeps = A.groups.filter((g) => g.mode === "sweep");
const unknown = A.groups.filter(
  (g) => !["tooling", "parallel", "sweep"].includes(g.mode),
);
for (const g of unknown) {
  notRun.push(g.group);
  log(`not run: ${g.group} has unknown mode ${g.mode}`);
}
log(
  `round ${A.round}, step ${A.step}: ${tooling.length} tooling, ${content.length} content, ${sweeps.length} sweep groups`,
);

if (tooling.length) {
  phase("Tooling");
  for (const g of tooling) await aloneGroup(g, "Tooling");
}

let coordinate = null;
if (content.length && !halted) {
  phase("Content");
  const h = await attempt("base", () =>
    agent(headPrompt, {
      label: "base",
      phase: "Content",
      schema: HEAD,
      effort: "low",
    }),
  );
  if (!h || !h.head) {
    halted = true;
    log("halting: could not read HEAD before the content groups");
  } else {
    if (h.dirty.length)
      log(
        `working tree not clean before the content groups: ${h.dirty.join(", ")}`,
      );
    const base = h.head;
    log(`content groups diff against ${base}`);
    const out = await pipeline(
      content,
      (g) =>
        attempt(`exec:${g.group}`, () =>
          agent(execPrompt(g), {
            label: `exec:${g.group}`,
            phase: "Content",
            schema: SUM,
          }),
        ).then((e) => ({ e })),
      (prev, g) =>
        attempt(`verify:${g.group}`, () =>
          agent(verifyPrompt(g, base, !prev.e), {
            label: `verify:${g.group}`,
            phase: "Content",
            schema: SUM,
          }),
        ).then((v) => ({
          group: g.group,
          mode: g.mode,
          status: v ? "verified" : "failed",
          exec: prev.e,
          verify: v,
        })),
    );
    const done = out.map(
      (r, i) =>
        r || { group: content[i].group, mode: "parallel", status: "failed" },
    );
    results.push(...done);
    const missing = done
      .filter((r) => r.status !== "verified")
      .map((r) => r.group);
    if (missing.length)
      log(
        `content groups without a verified report (restored and carried by the coordinator): ${missing.join(", ")}`,
      );

    phase("Coordinate");
    coordinate = await attempt("coordinate", () =>
      agent(
        `You coordinate the cryptology.city wiki (repo at ${REPO}) after the parallel content groups of review round ${A.round}, step "${A.step}".

Read ${PROMPTS}/apply-verify.md (§ Coordinator) FIRST and follow it exactly; apply-exec.md has the rules the groups followed.

Step directory: ${DIR}. Parallel groups: ${content.map((g) => g.group).join(", ")}. Groups without a verified report: ${missing.length ? missing.join(", ") : "none"}. BASE commit: ${base}.

Commit subject: "review round ${A.round}: ${STEP_NAME}, content groups ${content.map((g) => g.group).join(", ")}".${TRAILER} Stage with \`${STAGE}\` (never commit .review/: the session commits the round's bookkeeping itself). Write ${DIR}/coordinate.json. Return the structured summary (group "coordinate", the full hash in \`commit\`).`,
        { label: "coordinate", phase: "Coordinate", schema: SUM },
      ),
    );
    if (!coordinate || !coordinate.commit) {
      halted = true;
      log(
        "halting: the coordinator did not commit; the content groups' changes are uncommitted and the sweep groups are carried",
      );
    }
  }
} else if (content.length) {
  for (const g of content) notRun.push(g.group);
  log(`not run (halted): ${content.map((g) => g.group).join(", ")}`);
}

if (sweeps.length) {
  phase("Sweeps");
  for (const g of sweeps) await aloneGroup(g, "Sweeps");
}

const summary = {
  round: A.round,
  step: A.step,
  halted,
  groups: results.map((r) => ({
    group: r.group,
    mode: r.mode,
    status: r.status,
    commit: (r.verify && r.verify.commit) || "",
    applied: r.verify ? r.verify.applied : 0,
    skipped: r.verify ? r.verify.skipped : 0,
    notes: (r.verify && r.verify.notes) || (r.restore && r.restore.notes) || [],
  })),
  coordinate: coordinate
    ? { commit: coordinate.commit || "", notes: coordinate.notes || [] }
    : null,
  not_run: notRun,
};
const ok = summary.groups.filter((g) => g.status === "verified").length;
log(
  `${ok}/${A.groups.length} groups verified${notRun.length ? `; not run: ${notRun.join(", ")}` : ""}${halted ? " (halted)" : ""}`,
);
return summary;
