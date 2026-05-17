# microcrypt-sync — wiring & operation guide

This lane pulls the dependency web from
[`sattath/microcrypt-zoo`](https://github.com/sattath/microcrypt-zoo) (the
single source file `microcrypt.gv`, Apache-2.0) into the cryptology.city
wiki without duplicating anything that already exists.

The design splits cleanly in two:

* **Deterministic core** (`scripts/microcrypt-sync.mjs`) does *all* parsing,
  diffing, dedup and idempotency. No model is involved in deciding what the
  graph says.
* **Thin bot lane** (`.orchestrator/prompts/microcrypt-sync.md`) only writes prose
  for the delta the core hands it.

The model never parses the `.gv`, never infers an edge direction, and never
decides whether something is a duplicate. Those are exactly the steps where a
language model would silently corrupt a reference wiki, so they are removed
from its reach.

## The one correctness hazard, stated up front

`microcrypt.gv` encodes **separations** (oracle/black-box impossibility
results) in a trailing block under:

```
edge [style=dashed color="red" dir="back"]
```

The upstream file's own comment documents that the back-arrow is a rendering
**hack**: an edge written `A -> B` in that block is drawn `B -> A` and is
intended to mean *"B cannot be constructed from A."* A naive parser that
treats those like the implication edges injects **reversed mathematical
claims** into a citable wiki. That is the single highest-impact failure mode
in this whole pipeline.

Mitigation, enforced in code, not in prose:

* `microcrypt-sync.mjs` classifies every edge in the separation block as
  `kind: "separation"` and emits it as **DIRECTION-UNRESOLVED**: it reports
  the two endpoints and the paper URL but **never asserts a direction** and
  **never writes an implication-style bullet** for it.
* The bot lane prompt requires the model to read the cited paper, phrase the
  separation precisely, transition the `.fact-check` queue entry to
  `bot_flagged`, and add a `TODO_SUMMARY.md` line for the
  **skeptical-checker** lane. If the model is not confident, it writes the
  TODO and **no claim at all**.

Net effect: a separation can only become an asserted directional statement
after a human (skeptical-checker) has signed off. The tool will never do it
alone.

## Files this lane ships

| Path | Role | Edited by |
|---|---|---|
| `scripts/microcrypt-sync.mjs` | deterministic parser + planner | maintainer |
| `scripts/microcrypt-graph.mjs` | embed-page / SVG generator | maintainer |
| `.orchestrator/prompts/microcrypt-sync.md` | bot lane instructions | maintainer |
| `.orchestrator/microcrypt-map.json` | **human-curated dedup boundary** | maintainer (ongoing) |
| `.orchestrator/state/microcrypt-sync.json` | idempotency ledger | script only (`--write-state`) |

Mirror these into the same paths in `axhoover/cryptology.city`.

## How the dedup boundary works

`microcrypt-map.json` is the contract. Every one of the 57 upstream nodes starts
with `status: "unmapped"`, and **the script never creates a page for an
unmapped node** — it only reports it under `unmapped_nodes`. Nothing is
duplicated because nothing is auto-created until you say so.

For each node you curate one of:

* `"mapped"` — set `slug` to an **existing** content page
  (e.g. `Primitives/one-way-function`). The lane will add cross-result
  bullets pointing at that page but will not touch the page's definition.
* `"new"` — the lane may create a **stub** (frontmatter + intro seeded from
  the upstream tooltip + `# Other results` + TODO section markers), set the
  queue entry to `unreviewed`, and leave the body for the editor lane.
* `"ignore"` — out of scope; never mentioned again.

For each of the 30 citations: once you create (or the lane creates) the
`content/References/<KEY> - <Title>.md` file, set `ref_exists: true` and, if
you have it, fill `cryptobib_key` (preferred over inline bibtex per
`CLAUDE.md`). The seed file already contains the parsed authors / title /
venue / canonicalized URL for every citation.

The recommended first curation pass is small: map the handful of nodes that
already have pages (one-way functions, PRGs, PRFs, the quantum-money family,
etc.) to their existing slugs, mark genuinely new primitives `"new"`, and
leave the long tail `"unmapped"` until they matter.

## Registering the lane in the orchestrator

### 1. Vendor the upstream graph at a pinned commit

Do **not** fetch `main` at run time — that makes runs irreproducible and
lets an upstream force-push rewrite history into your wiki. Pin it. Either
add a submodule:

```
git submodule add https://github.com/sattath/microcrypt-zoo vendor/microcrypt-zoo
```

or have the workflow `git clone --depth 1` and immediately `git rev-parse
HEAD` to capture the SHA you pass as `--microcrypt-commit`.

### 2. Wake-up decision in `.orchestrator/decide.mjs`

Each weekly run, hash the current upstream file and compare to the ledger:

```js
import { createHash } from "node:crypto";
import { readFileSync, existsSync } from "node:fs";

const GV = "vendor/microcrypt-zoo/microcrypt.gv";
const STATE = ".orchestrator/state/microcrypt-sync.json";

function microcryptSyncShouldRun() {
  if (!existsSync(GV)) return false;
  const cur = createHash("sha256").update(readFileSync(GV)).digest("hex");
  const prev = existsSync(STATE)
    ? JSON.parse(readFileSync(STATE, "utf8")).microcrypt_gv_sha256
    : null;
  return cur !== prev;            // first run (prev null) or upstream changed
}
```

Add `microcrypt-sync` to the lane list the same way the existing four lanes
(editor, reference-fixer, skeptical-checker, refactor-simplifier) are
selected, gated on `microcryptSyncShouldRun()`. It respects the same
non-overlapping lane discipline: it only ever creates new `References`
files, appends `# Other results` bullets, creates authorized stubs, and
regenerates the embed page — it never edits another lane's surface.

### 3. Workflow steps in `.github/workflows/weekly-orchestrator.yml`

Add, in the orchestrator job, before the model step:

```yaml
      - name: Install GraphViz (for Microcrypt Zoo embed page)
        run: sudo apt-get update && sudo apt-get install -y graphviz

      - name: Update vendored microcrypt-zoo
        run: |
          git submodule update --remote vendor/microcrypt-zoo
          echo "MICROCRYPT_COMMIT=$(git -C vendor/microcrypt-zoo rev-parse HEAD)" >> "$GITHUB_ENV"
```

The model step runs the planner first (read-only), acts on the plan per the
lane prompt, then records state:

```yaml
      - name: Plan microcrypt-zoo sync
        run: |
          node scripts/microcrypt-sync.mjs \
            --gv vendor/microcrypt-zoo/microcrypt.gv \
            --map .orchestrator/microcrypt-map.json \
            --state .orchestrator/state/microcrypt-sync.json \
            --content content \
            --microcrypt-commit "$MICROCRYPT_COMMIT" \
            --plan-out .orchestrator/state/microcrypt-plan.json

      # ... model executes .orchestrator/prompts/microcrypt-sync.md against the plan ...

      - name: Rebuild Microcrypt Zoo embed page
        run: |
          node scripts/microcrypt-graph.mjs \
            --gv vendor/microcrypt-zoo/microcrypt.gv \
            --map .orchestrator/microcrypt-map.json \
            --out "content/Microcrypt Zoo.md"

      - name: Record sync state
        run: |
          node scripts/microcrypt-sync.mjs \
            --gv vendor/microcrypt-zoo/microcrypt.gv \
            --map .orchestrator/microcrypt-map.json \
            --state .orchestrator/state/microcrypt-sync.json \
            --content content \
            --microcrypt-commit "$MICROCRYPT_COMMIT" \
            --write-state
```

`--write-state` is run **last**, after the model has applied the plan, so a
crashed mid-run never marks edges as synced. The state file and the
regenerated embed page are committed by the orchestrator's normal commit
step.

### 4. Off-cycle runs

Keep the existing `workflow_dispatch` trigger; a manual dispatch will pick
up `microcrypt-sync` whenever the upstream hash differs, independent of the weekly
cron.

## Embed page

`scripts/microcrypt-graph.mjs` re-derives `microcrypt.gv`, injecting
`URL="/<slug>" target="_self"` onto **mapped** nodes only, dimming unmapped
ones, then runs `dot -Tsvg` and writes a responsive, Quartz-flavoured
`content/Microcrypt Zoo.md`. It is placed at the top of the content
directory and links to `[[impagliazzos-five-worlds|Impagliazzo's five
worlds]]`, mirroring that page's "single conceptual map" role. If `dot` is
absent the script degrades to a build note and exits 0 (it never fails the
run).

## Attribution obligation

`microcrypt-zoo` is Apache-2.0. The generated embed page already carries an
attribution line and a sync timestamp; keep it. If you later vendor the file
into the repo, retain the upstream `LICENSE`/`NOTICE` alongside
`vendor/microcrypt-zoo/`.

## Quick local dry run

```
node scripts/microcrypt-sync.mjs \
  --gv test/microcrypt.gv \
  --map .orchestrator/microcrypt-map.json \
  --content content \
  --plan-out /tmp/plan.json
```

With the shipped (all-unmapped) seed this proposes the 30 reference files
and **zero** primitive/implication writes — confirming the dedup boundary:
nothing about the graph's structure enters the wiki until you curate
`microcrypt-map.json`.
