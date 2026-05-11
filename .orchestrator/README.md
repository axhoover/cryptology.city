# Orchestrator

Weekly meta-bot for cryptology.city. Decides which content bots (if any)
should run each week instead of running them all unconditionally.

## Layout

```
.orchestrator/
  decide.mjs              # rule-based plan + optional LLM refinement
  README.md               # this file
  prompts/
    editor.md
    reference-fixer.md
    skeptical-checker.md  # existing fact-checker prompt, moved here
    refactor-simplifier.md
  state/                  # committed; updated each run
    last_run.json
    plan.json
    WEEKLY_REPORT.md
.github/workflows/
  weekly-orchestrator.yml
```

The skeptical-checker prompt is the existing
`cryptology-city-factcheck-prompt.md` — drop it in as
`.orchestrator/prompts/skeptical-checker.md` unchanged.

## How it works

Every Monday at 12:00 UTC (and on `workflow_dispatch`):

1. `decide.mjs` runs.
   - Reads `.orchestrator/state/last_run.json` for the previous head SHA.
   - Computes the set of content files changed in `content/` since then.
   - Looks at `.fact-check/queue.json` to see whether the skeptical
     checker has work.
   - Counts open TODOs in `TODOS.md`.
   - Applies the rules in the next section to produce a plan.
   - If `ORCHESTRATOR_LLM=true` and `ANTHROPIC_API_KEY` is set, calls
     Claude Haiku to optionally refine the plan (flip `run` flags,
     narrow scope, annotate reasons — nothing else).
   - Writes `plan.json`, `WEEKLY_REPORT.md`, and updates `last_run.json`.
   - Emits GitHub Actions outputs for each `run_<bot>` flag.
2. The workflow commits the updated `state/` directory.
3. Each bot job runs **only if** its flag is true. Each bot opens its
   own PR (or issue, for the refactor bot and TODO triage).

## Decision rules

| Bot | Runs when |
|---|---|
| `editor` | any file under `content/` changed since the last orchestrator run |
| `reference_fixer` | a changed file's diff contains a wikilink, URL, or citation pattern; OR every 4th run (link-rot sweep over all external URLs) |
| `skeptical_checker` | a file in `Primitives`/`Complexity`/`Assumptions`/`Glossary` changed; OR the queue has unreviewed/stale/bot_flagged entries |
| `refactor_simplifier` | no content changes for 30+ days; OR the oldest `human_verified` queue entry is > 180 days old |
| `todo_triage` | open TODO checkboxes in `TODOS.md` exceed 25 |

All thresholds are constants at the top of `decide.mjs`.

## Configuration

Set via repo secrets and workflow env:

- `ANTHROPIC_API_KEY` (repo secret, required): used for the LLM refinement
  step and for every Claude Code bot job.
- `ORCHESTRATOR_LLM` (workflow env, default `true`): set to `false` to run
  with pure rule logic, no LLM call. Can also be overridden per-run via
  the `workflow_dispatch` input.
- `ORCHESTRATOR_MODEL` (optional): Claude model for the refinement step.
  Default `claude-haiku-4-5-20251001`.

Path constants at the top of `decide.mjs` to adjust if needed:

- `QUEUE_PATH` — fact-check queue (default `.fact-check/queue.json`).
- `TODO_PATH` — TODO list (default `TODOS.md`).
- `DEEP_DIRS` — directories the skeptical checker cares about.

## LLM refinement: what the model can and can't do

The LLM step is a sanity-check / occasional override. The model is given the
base plan and a context summary, and is asked to return JSON in the same
schema. `validateRefinement` in `decide.mjs` enforces:

- The set of bot keys must be exactly `editor`, `reference_fixer`,
  `skeptical_checker`, `refactor_simplifier`, `todo_triage`.
- Each bot's `run` must be boolean, `reason` must be a string.
- Each bot's `scope`, if it was an array in the base plan, must be a subset
  of the base scope. The model can drop files; it cannot add them.

If validation fails, the LLM output is discarded and the base plan is used.
The `WEEKLY_REPORT.md` records whether the LLM ran and notes any reason for
skipping.

## Migration from your existing bots

The old audit bot's responsibilities split cleanly:

| Old audit-bot duty | New home |
|---|---|
| Dead-link / wikilink detection | `reference_fixer` |
| Citation key / bib integrity | `reference_fixer` |
| LaTeX macro / KaTeX syntax checks | `editor` |
| TODO aggregation | a small step inside whatever bot creates them, plus `todo_triage` for threshold-based issue creation |

The existing fact-checker prompt becomes `skeptical-checker.md` unchanged;
its state file (`.fact-check/queue.json`) is the input the orchestrator
reads to decide whether the bot has work.

When migrating: delete the old audit-bot workflow file and remove its
scheduled trigger. Keep the fact-checker workflow only if you want a
fallback path that runs it independent of the orchestrator (otherwise,
disable its schedule and let the orchestrator drive it).

## First run

The very first orchestrator run will:

- Find no `last_run.json` → no diff, so most rule-driven flags are false.
- Find no `.fact-check/queue.json` (if you haven't seeded one) → bootstrap
  the skeptical checker to populate the queue.
- Write `state/` files and exit cleanly.

Subsequent runs use the diff against the SHA recorded in `last_run.json`.

## Local testing

```sh
# From repo root:
node .orchestrator/decide.mjs
cat .orchestrator/state/plan.json
cat .orchestrator/state/WEEKLY_REPORT.md
```

`ORCHESTRATOR_LLM=true ANTHROPIC_API_KEY=sk-... node .orchestrator/decide.mjs`
to exercise the refinement step locally.
