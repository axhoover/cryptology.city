# Weekly Orchestrator Report — run #6

- **Head:** `e849285a6f41a03be62f7f29bc5d325dd60a383f`
- **Previous:** `a002c948c351ae29c3fd75270f56ee220b302e81`
- **Days since last run:** 1.8415245833333334
- **Changed content files:** 0
- **Open TODOs:** 38
- **LLM refinement:** no

## Bot decisions

### `editor` — skip

- Reason: no content changes since last run

### `reference_fixer` — skip

- Reason: no reference-touching changes

### `skeptical_checker` — **RUN**

- Reason: bootstrapping fact-check queue

### `refactor_simplifier` — skip

- Reason: no content changes in 1 days

### `todo_triage` — **RUN**

- Reason: 38 open TODOs — board refreshes; nag is delta-gated
- Scope: 38

### `microcrypt_sync` — **RUN**

- Reason: upstream microcrypt.gv hash changed since last sync
- Scope: microcrypt-map
