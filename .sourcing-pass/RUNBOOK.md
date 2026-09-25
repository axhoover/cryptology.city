# Sourcing pass — runbook for scheduled wakes

The user (US Eastern, UTC−4) asked for the remaining apply work to run in
set windows so it never competes with their own Claude use. Their weekly
limit resets Tuesday 13:00 UTC (9am ET).

## Hard rules

- **No Fable agents.** Every workflow agent runs with `model: 'opus'`.
- **Windows only.** Launch work only when a scheduled wake fires. If a
  workflow halts on a usage limit, do not relaunch it until the next
  scheduled wake. Never schedule extra wakes.
- **Hard stop Tue 29 Sep 11:00 UTC (7am ET).** After that, launch nothing.
- No pull request unless the user asks.

## Paths

- Scratch: `/tmp/claude-0/-home-user-cryptology-city/33793fd8-0862-5ee6-a62f-c68f25db1bbd/scratchpad` (S)
- Checkpoint on branch: `.sourcing-pass/` (a copy of everything in S that matters)
- Workflow: `$S/apply-workflow.js`; args `{chunks: [], batches, vetOnly, limit}`
- Ledger: `.sourcing-pass/progress.json` — `edited` and `vetted` batch lists

## If the container was reclaimed

    cd /home/user/cryptology.city && git pull origin claude/cryptology-results-docs-upc1hc
    mkdir -p $S && cp -r .sourcing-pass/* $S/
    git submodule update --init --recursive && npm install --no-audit --no-fund

## Slices

| Wake (UTC) | ET | Launch | limit |
| --- | --- | --- | --- |
| Sat 26 Sep 14:00 | Sat 10am | vetOnly red-00, red-01; batches red-02 … red-07 | 3 |
| Sun 27 Sep 14:00 | Sun 10am | batches red-08 … red-13 | 3 |
| Tue 29 Sep 00:00 | Mon 8pm | every batch not yet vetted (vetOnly = edited-not-vetted) | 6 |
| Tue 29 Sep 05:30 | Mon 1:30am+ | continuation: relaunch the remainder if the 00:00 run halted; else finalize if not done | 6 |
| Tue 29 Sep 11:00 | Tue 7am | hard stop: TaskStop any running workflow, checkpoint, report | — |

A slice that finishes early does NOT pull the next slice forward.
Leftovers from a weekend slice roll into the Monday-night run.

## At every wake

1. Restore if needed (above). Read `.sourcing-pass/progress.json`.
2. Compute the slice from the table, minus batches already in `vetted`;
   batches in `edited` but not `vetted` go in `vetOnly`.
3. Launch the workflow in the background. When it completes:
   - `npm run lint` over everything; fix any error in pages this pass touched.
   - Update `progress.json` from the workflow result (`done` → vetted,
     `editedNotVetted` → edited).
   - Copy `$S/verified`, instructions and scripts into `.sourcing-pass/`,
     commit (`reductions: apply the sourcing pass to <batches>`), push.
   - One short status message to the user.

## Finalize (once all 39 batches are vetted)

    node scripts/generate-relations.mjs            # regenerate participates-in + relations.json
    npm run lint && node scripts/generate-relations.mjs --check && npm test
    npx quartz build                               # CI runs it; must pass
    python3 $S/finalize_report.py $S/final-report.json $S/verified 2026-09-29
    git rm -r -q .sourcing-pass
    git add -A && git commit && git push

Fix contradiction-check failures by setting the reduction's class back to
`unstated` with a Notes line naming the barrier, never by editing the
barrier. Then report to the user: counts, the wrong-claim list location
(`.reductions/sourcing-pass.json`), and anything a human must decide.
