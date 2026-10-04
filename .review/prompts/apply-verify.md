# Review round, apply step — verifier and coordinator

## Verifier

An executor just applied one group of decided review items to
cryptology.city. `apply-exec.md` next to this file has the rules it followed.
You check its work and fix what is wrong. You check that the items were
EXECUTED faithfully and correctly, not whether they should have been: the
maintainer decided that, and nobody re-litigates it.

Inputs (paths in your prompt): the group file, the executor's report and a
BASE commit. `git diff <BASE> -- <file>` shows every change to a file since
the group started; other groups may be editing other files at the same time
and never touch yours. `git status --short` shows new and removed files.

If the prompt says the executor's report is missing (the executor failed):
inspect `git diff <BASE>` on the group's files and `git status`. Finish the
items yourself when the partial work is sound; otherwise restore the group's
files (`git checkout <BASE> -- <own file>`, delete files it created) and
report those items `skipped` with `"retry": true` and the reason "executor
did not finish" (their decisions stay live and they are retried next
round). In a parallel group restore only files in `own_files`.

For each item:

1. Does the diff do what the item asks (the exact change with the `note`
   applied; the amendment; the revert; the mechanical fix, and only if it is
   clear-cut), on the right files, no more and no less? Were `already-done`
   and `skipped` claims true? A `skipped` item that is in fact executable:
   execute it (`verified: "executed-skipped"`). A `skipped` item for want of
   a paper must say exactly what to check.
2. Is the result correct? Mathematics, direction, quantifiers, citations
   (check new citations against `content/References/` and
   `vendor/cryptobib/crypto.bib`; cryptobib keys must exist there),
   frontmatter validity, endpoints that resolve, the page contract of
   `schema/README.md` on reduction and barrier pages. Fix mistakes in place.
3. House style (`CLAUDE.md` § Writing Style): tighten wording the edit
   introduced; do not rewrite untouched prose.
4. Ownership: in a parallel group the executor may only have touched
   `own_files` plus files it newly created. Revert any other change by hand
   (never `git checkout` a file another group may be editing) and move it to
   `coordinator_todo`.
5. Check the `coordinator_todo`, `todo_summary` and `fact_check_stale`
   entries: each exact, needed and correct. Add any the executor missed.
6. Never edit GENERATED regions or `.orchestrator/state/`. In a parallel
   group never edit `TODO_SUMMARY.md` or `.fact-check/queue.json` either:
   the coordinator applies those entries. In a group that runs alone, apply
   the group's `todo_summary` entries to `TODO_SUMMARY.md` (keep the grammar
   in its header comment) and set each `fact_check_stale` page's entry in
   `.fact-check/queue.json` to `stale` when it is `human_verified`, before
   you commit; mark them `"applied": true` in the report. Follow your
   prompt on whether to run generate-relations and whether to commit.

Run `node scripts/lint.mjs` and `npx prettier --check` on the group's files
(same expected-error exceptions as the executor; `npx prettier --write` the
ones it reports). Write your verified report to the path in your
prompt: the executor's report with every item carrying
`verified: "ok" | "fixed" | "reverted" | "executed-skipped"` and a
`verifier_note` (one or two sentences: what you checked, what you fixed),
its final `status`, plus the checked `coordinator_todo`, `todo_summary` and
`fact_check_stale`, `"mode"` from the group file, and `"commit"` (the full
hash when you committed, else ""). Return the structured summary.

## Coordinator

Runs once, after every parallel group of the step, before any sweep
group. The verified reports of the parallel groups are in the step's
directory (path in your prompt); a group listed as missing has no verified
report. Groups that ran alone applied their own TODO_SUMMARY and fact-check
entries.

1. For each missing group, restore its `own_files` to BASE
   (`git checkout <BASE> -- <file>`) and delete files it created that no
   other group lists; its items are carried to the next round. If the group
   left a `<group>.verify.json`, set each of its items whose status is
   `applied`, `partial` or `reverted` to `skipped` with `"retry": true` and
   the reason "restored by the coordinator; retried next round". List every
   group you restore in `restored_groups`.
2. Apply every `coordinator_todo` entry: each is an exact edit to a file the
   group did not own. Check it against the current file first; skip and note
   any that no longer fits.
3. Apply every parallel group's `todo_summary` entry to `TODO_SUMMARY.md`
   (keep the grammar in its header comment), and set each
   `fact_check_stale` page's entry in `.fact-check/queue.json` to `stale`
   when it is `human_verified` (the one edit to that file the pipeline
   makes, per `CLAUDE.md` § State files).
4. Run `node scripts/generate-relations.mjs`, then `node scripts/lint.mjs`.
   Fix any lint error the groups' changes caused (an unresolved endpoint, a
   link to a deleted page) with the smallest correct edit, and note each.
5. Run `node scripts/generate-relations.mjs --check` and `npm test`; both
   must pass (§ Checks).
6. Commit everything the step changed (the session running this round is the
   only writer) with the staging command, message and trailer your prompt
   gives. The staging command leaves out `public/`, `tsconfig.tsbuildinfo`
   and all of `.review/` (the session commits the round's bookkeeping
   itself). Restore `tsconfig.tsbuildinfo` if anything touched it. Do not
   push. If the checks cannot be made to pass, do not commit: restore every
   file the step changed outside `.review/` to BASE (delete the files it
   created), mark every group's report as in rule 1, write
   `coordinate.json` with `"commit": ""`, and say why.

Write `coordinate.json` in the step's directory:
`{"commit": "<full hash>", "restored_groups": [...], "applied_todo": [...],
"skipped_todo": [...], "todo_summary_applied": n, "fact_check_stale": [...],
"lint_fixes": [...], "checks": {...}}`. Return the structured summary.

## Checks

Lint, `generate-relations.mjs --check` and `npm test` gate every commit the
apply step makes. A failure the step's changes caused (it names a file the
step changed, or a page, id or test an item bears on) is fixed with the
smallest correct edit, or the offending item is reverted and reported
`skipped` with the reason. A failure the step did not cause (it names only
files and tests nothing in the step touched, and the failing check reads
the same without the step's changes) does not block the commit: name it in
`notes` and in `checks`; the session's validation step deals with it.
