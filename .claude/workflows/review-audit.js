export const meta = {
  name: "review-audit",
  description:
    "Audit a cryptology.city review round's pages in batches: one auditor per batch finds concrete problems with an exact fix, findings from the review inbox join them, two independent adversarial verifiers judge every finding, and a consolidator dedupes against the open and rejected items; read-only on the wiki",
  whenToUse:
    "Step 2 of the review-round skill (.claude/skills/review-round/SKILL.md), on the batches scripts/review/select-pages.mjs printed",
  phases: [
    { title: "Audit", detail: "one auditor per batch of about eight pages" },
    {
      title: "Verify",
      detail:
        "two adversarial verifiers per finding, audit or inbox: the claim lens and the change lens",
    },
    {
      title: "Consolidate",
      detail:
        "merge duplicates, drop known and rejected items, carry the overflow; writes consolidated.json",
    },
  ],
};

// args: {
//   repo: absolute path of the checkout,
//   round: n,
//   batches: [{ batch: 'b01', pages: ['content/...'] }] as printed by select-pages.mjs,
//   paper_reachable: boolean,
//   inbox: {dir, verify: [{id, confidence}], paper: [id]} as printed by
//     round.mjs inbox (optional; omit it when that printed null),
// }
// Reads .review/work/round-<n>/known.json (round.mjs known) and the inbox
// items under inbox.dir; writes .review/work/round-<n>/audit/consolidated.json
// (through the consolidator). Inbox findings skip the auditors and go through
// the same two verifiers and the same keep/drop rule as audit findings; the
// paper checks in inbox.paper (paper hosts unreachable) skip the verifiers
// and reach the consolidator unverified, for deduplication only.
const A = args || {};
if (!A.repo || !A.round || !Array.isArray(A.batches))
  throw new Error(
    "review-audit needs args {repo, round, batches[, paper_reachable]}",
  );
const REPO = A.repo;
const WORK = `${REPO}/.review/work/round-${A.round}`;
const OUT = `${WORK}/audit/consolidated.json`;
const KNOWN = `${WORK}/known.json`;
const PROMPTS = `${REPO}/.review/prompts`;
const PAPER = A.paper_reachable
  ? "The paper hosts (eprint, arXiv, doi.org, Springer) are reachable from this environment: check claims against the papers where it matters."
  : "The paper hosts (eprint, arXiv, doi.org, Springer) are NOT reachable from this environment; do not try them.";
if (A.batches.length > 150)
  throw new Error(
    `${A.batches.length} batches: split the audit into runs of at most 150`,
  );
const IN = A.inbox || null;
const inboxId = (x) => (typeof x === "string" ? x : x && x.id);
if (
  IN &&
  (typeof IN.dir !== "string" ||
    !Array.isArray(IN.verify) ||
    !Array.isArray(IN.paper) ||
    ![...IN.verify, ...IN.paper].every(
      (x) => typeof inboxId(x) === "string" && inboxId(x),
    ))
)
  throw new Error(
    "review-audit: args.inbox must be {dir, verify: [{id, confidence}], paper: [id]} as round.mjs inbox printed it",
  );
const inboxFile = (id) => `${IN.dir}/${id}.json`;
// an inbox finding travels as its key, its file and its confidence; the
// verifiers and the consolidator read the rest from the file
const INBOX = IN
  ? IN.verify.map((x) => ({
      key: `inbox:${inboxId(x)}`,
      inbox: inboxId(x),
      file: inboxFile(inboxId(x)),
      confidence: (x && x.confidence) || "medium",
      mechanical: false,
    }))
  : [];
const INBOX_PAPER = IN
  ? IN.paper.map((x) => ({
      inbox: inboxId(x),
      file: inboxFile(inboxId(x)),
      sources: [`inbox:${inboxId(x)}`],
    }))
  : [];
// Two verifier agents per finding. A run may start at most 1000 agents,
// retries included: keep room for every auditor to be retried, for one
// verifier in ten to be retried, and for the consolidator and its fallback.
// Findings over the limit are passed on unverified, never dropped. Inbox
// findings start no auditor and claim their verification slots first.
const VERIFY_LIMIT = Math.min(
  400,
  Math.floor(((1000 - 8 - 2 * A.batches.length) * 0.9) / 2),
);

const ENUM = (xs) => ({ type: "string", enum: xs });
const FINDING = {
  type: "object",
  properties: {
    page: { type: "string" },
    pages: { type: "array", items: { type: "string" } },
    edge: { type: "string" },
    kind: ENUM(["math", "cite", "edge", "contract", "style", "link", "other"]),
    severity: ENUM(["high", "medium", "low"]),
    confidence: ENUM(["high", "medium", "low"]),
    mechanical: { type: "boolean" },
    needs_paper: { type: "boolean" },
    summary: { type: "string" },
    why: { type: "string" },
    change: { type: "string" },
    check: { type: "string" },
    evidence: { type: "string" },
  },
  required: [
    "page",
    "pages",
    "kind",
    "severity",
    "confidence",
    "mechanical",
    "needs_paper",
    "summary",
    "why",
    "change",
  ],
};
const AUDIT = {
  type: "object",
  properties: {
    batch: { type: "string" },
    pages_read: { type: "number" },
    findings: { type: "array", items: FINDING },
    notes: { type: "array", items: { type: "string" } },
  },
  required: ["batch", "pages_read", "findings"],
};
const VERDICT = {
  type: "object",
  properties: {
    verdict: ENUM(["confirm", "refute", "unsure"]),
    confidence: ENUM(["high", "medium", "low"]),
    note: { type: "string" },
    corrected_change: { type: "string" },
    mechanical_ok: { type: "boolean" },
  },
  required: ["verdict", "confidence", "note"],
};
const CONS = {
  type: "object",
  properties: {
    findings: { type: "number" },
    dropped: { type: "number" },
    merged: { type: "number" },
    file: { type: "string" },
    notes: { type: "array", items: { type: "string" } },
  },
  required: ["findings", "dropped", "file"],
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

const auditPrompt = (
  b,
) => `You audit pages of the cryptology.city wiki (repo at ${REPO}) for review round ${A.round}.

Read ${PROMPTS}/audit.md FIRST and follow it exactly. Do not edit any file.

Batch ${b.batch}, ${b.pages.length} pages:
${b.pages.map((p) => `- ${p}`).join("\n")}

Known items (do not raise these again): ${KNOWN}

${PAPER}

Return the structured output (batch "${b.batch}").`;

const LENS = {
  claim: "CLAIM lens: is the problem real?",
  change: "CHANGE lens: is the proposed change right, minimal and safe?",
};
const verifyPrompt = (
  f,
  lens,
) => `You are an adversarial verifier for review round ${A.round} of the cryptology.city wiki (repo at ${REPO}). Your lens: ${LENS[lens]}

Read ${PROMPTS}/audit-verify.md FIRST and follow it exactly. Do not edit any file.

The finding (${f.key}):
${
  f.inbox
    ? `It was raised outside the audit and reached this round through the review inbox (§ Inbox findings of audit-verify.md). Read it from ${f.file}: it has the fields an auditor's finding has.`
    : JSON.stringify(f, null, 1)
}

${PAPER}

Return your verdict.`;

const RANK = { high: 0, medium: 1, low: 2 };
const worse = (a, b) => ((RANK[a] ?? 1) >= (RANK[b] ?? 1) ? a : b);

// Both confirm: kept. One confirms, the other is unsure (or its agent failed):
// kept at low confidence. Any refutation, or no confirmation: dropped. Both
// agents failed: nobody judged it, so it is passed on unverified.
function judge(f, v1, v2) {
  const vs = [v1, v2];
  if (!v1 && !v2) return { kept: false, unverified: true, finding: f };
  const verdicts = vs.map((v) => (v ? v.verdict : "unsure"));
  const confirms = verdicts.filter((v) => v === "confirm").length;
  const refutes = verdicts.filter((v) => v === "refute").length;
  const notes = vs.map((v, i) =>
    v
      ? `${i ? "Change" : "Claim"} lens (${v.verdict}): ${v.note}`
      : `${i ? "Change" : "Claim"} lens: no verdict (agent failed)`,
  );
  if (refutes || confirms === 0)
    return { kept: false, key: f.key, verdicts, notes };
  let confidence = f.confidence;
  for (const v of vs)
    if (v && v.verdict === "confirm")
      confidence = worse(confidence, v.confidence);
  if (confirms === 1) confidence = "low";
  const corrected = vs
    .filter((v) => v && v.verdict === "confirm" && v.corrected_change)
    .map((v) => v.corrected_change);
  return {
    kept: true,
    finding: {
      ...f,
      confidence,
      mechanical:
        !!f.mechanical && vs.every((v) => !v || v.mechanical_ok !== false),
      verifier_notes: notes,
      corrected_changes: corrected,
    },
  };
}

let verifySlots = VERIFY_LIMIT;
// the inbox rides along as a batch whose findings are already found
const UNITS = INBOX.length
  ? [{ batch: "inbox", inbox: true, pages: [] }, ...A.batches]
  : A.batches;
phase("Audit");
const perBatch = await pipeline(
  UNITS,
  (b) =>
    b.inbox
      ? Promise.resolve({ batch: "inbox", pages_read: 0, findings: INBOX })
      : attempt(`audit:${b.batch}`, () =>
          agent(auditPrompt(b), {
            label: `audit:${b.batch}`,
            phase: "Audit",
            schema: AUDIT,
          }),
        ),
  async (a, b) => {
    if (!a) {
      log(
        `audit:${b.batch} failed twice; its ${b.pages.length} pages are not audited this round: ${b.pages.join(", ")}`,
      );
      return {
        batch: b.batch,
        failed: true,
        pages: b.pages,
        kept: [],
        dropped: [],
        unverified: [],
      };
    }
    const findings = b.inbox
      ? a.findings
      : (a.findings || []).map((f, k) => ({
          ...f,
          key: `${b.batch}:${k + 1}`,
        }));
    const now = [];
    const unverified = [];
    for (const f of findings) {
      if (verifySlots > 0) {
        verifySlots--;
        now.push(f);
      } else unverified.push(f);
    }
    if (unverified.length)
      log(
        `${b.batch}: ${unverified.length} findings over the verification limit of ${VERIFY_LIMIT}; passed on unverified`,
      );
    const judged = await parallel(
      now.map(
        (f) => () =>
          parallel(
            ["claim", "change"].map(
              (lens) => () =>
                attempt(`verify:${f.key}:${lens}`, () =>
                  agent(verifyPrompt(f, lens), {
                    label: `verify:${f.key}:${lens}`,
                    phase: "Verify",
                    schema: VERDICT,
                  }),
                ),
            ),
          ).then(([v1, v2]) => judge(f, v1, v2)),
      ),
    );
    // a null entry is a judging thunk that threw: nobody judged that finding
    const ok = judged.map(
      (j, i) => j || { kept: false, unverified: true, finding: now[i] },
    );
    const kept = ok.filter((j) => j.kept).map((j) => j.finding);
    const dropped = ok.filter((j) => !j.kept && !j.unverified);
    const lost = ok.filter((j) => j.unverified).map((j) => j.finding);
    if (lost.length)
      log(
        `${b.batch}: ${lost.length} findings whose verifier agents both failed; passed on unverified`,
      );
    unverified.push(...lost);
    log(
      `${b.batch}: ${findings.length} findings, ${kept.length} kept, ${dropped.length} refuted or unconfirmed`,
    );
    return {
      batch: b.batch,
      failed: false,
      pages: b.pages,
      kept,
      dropped,
      unverified,
    };
  },
);

const done = perBatch.map(
  (r, i) =>
    r || {
      batch: UNITS[i].batch,
      failed: true,
      pages: UNITS[i].pages,
      kept: [],
      dropped: [],
      unverified: [],
    },
);
const kept = done.flatMap((r) => r.kept);
const dropped = done.flatMap((r) => r.dropped);
const unverified = done.flatMap((r) => r.unverified);
// the inbox is no batch of pages: if its stage failed, its items are simply
// not reported, and round.mjs leaves their files in the inbox
const failed = done.filter((r) => r.failed && r.batch !== "inbox");
if (done.some((r) => r.failed && r.batch === "inbox"))
  log(
    `the inbox findings could not be verified this run; their files stay in the inbox for round ${A.round + 1}`,
  );
const isInbox = (k) => String(k || "").startsWith("inbox:");
// refuted or unconfirmed inbox findings are recorded as dropped, with why
const inboxDropped = dropped
  .filter((d) => isInbox(d.key))
  .map((d) => ({
    source: d.key,
    reason: `refuted or not confirmed by the verifiers: ${(d.notes || []).join(" ")}`,
  }));
log(
  `${kept.length} findings kept, ${dropped.length} dropped by the verifiers, ${unverified.length} unverified, ${failed.length} batches failed`,
);
if (IN)
  log(
    `inbox: ${INBOX.length} verified (${kept.filter((f) => f.inbox).length} kept, ${inboxDropped.length} dropped, ${unverified.filter((f) => f.inbox).length} unverified), ${INBOX_PAPER.length} paper checks passed on unverified`,
  );

phase("Consolidate");
const consPrompt = `You consolidate the audit of review round ${A.round} of the cryptology.city wiki (repo at ${REPO}).

Read ${PROMPTS}/consolidate.md FIRST and follow it exactly. Do not edit wiki files.

Known items: ${KNOWN}. Write ${OUT}.

Findings that survived verification (${kept.length}):
${JSON.stringify(kept)}

Findings no verifier could check this run (${unverified.length}); copy them verbatim into "unverified" in the output, do not include them in "findings":
${JSON.stringify(unverified)}${
  IN
    ? `

Findings whose key starts with "inbox:" came through the review inbox; above they carry only their key, their file and the verdicts. Read each from its file and handle it as § Inbox findings of consolidate.md says.

Inbox paper checks no verifier judged, because the paper hosts are unreachable (${INBOX_PAPER.length}); drop one only as a duplicate, never for lack of verification, and write the rest into "paper_unverified" as given:
${JSON.stringify(INBOX_PAPER)}

Inbox findings the verifiers refuted or did not confirm (${inboxDropped.length}); copy them verbatim into "dropped":
${JSON.stringify(inboxDropped)}`
    : ""
}

Return the structured summary (file "${OUT}").`;
let cons = await attempt("consolidate", () =>
  agent(consPrompt, {
    label: "consolidate",
    phase: "Consolidate",
    schema: CONS,
  }),
);
let consolidated = true;
if (!cons) {
  consolidated = false;
  log(
    "the consolidator failed twice; writing the kept findings without deduplication",
  );
  cons = await attempt("consolidate:fallback", () =>
    agent(
      `In ${REPO}, write the file ${OUT} (create its directory) with exactly this JSON, adding nothing: {"findings": <the findings below, each with "sources": [its key] and "verifier_notes" as given>, "dropped": <the dropped list below>, "unverified": <the unverified list below>, "paper_unverified": <the paper list below>, "deduplicated": false}.

Findings:
${JSON.stringify(kept)}

Dropped:
${JSON.stringify(inboxDropped)}

Unverified:
${JSON.stringify(unverified)}

Paper:
${JSON.stringify(INBOX_PAPER)}

Return the structured summary (file "${OUT}", dropped ${inboxDropped.length}).`,
      { label: "consolidate:fallback", phase: "Consolidate", schema: CONS },
    ),
  );
  if (!cons)
    log(
      `could not write ${OUT}; the session must write it from this workflow's result`,
    );
}

return {
  round: A.round,
  batches: A.batches.length,
  pages: A.batches.reduce((n, b) => n + b.pages.length, 0),
  failed_batches: failed.map((r) => ({ batch: r.batch, pages: r.pages })),
  kept: kept.length,
  dropped_by_verifiers: dropped.map((d) => ({
    key: d.key,
    verdicts: d.verdicts,
    notes: d.notes,
  })),
  unverified: unverified.length,
  consolidated,
  consolidate: cons,
  file: cons ? OUT : "",
  inbox: IN
    ? {
        verified: INBOX.length,
        kept: kept.filter((f) => f.inbox).length,
        dropped: inboxDropped.length,
        unverified: unverified.filter((f) => f.inbox).length,
        paper_unverified: INBOX_PAPER.length,
      }
    : null,
  findings_if_unwritten: cons ? [] : kept,
  unverified_if_unwritten: cons ? [] : unverified,
  dropped_if_unwritten: cons ? [] : inboxDropped,
  paper_unverified_if_unwritten: cons ? [] : INBOX_PAPER,
};
