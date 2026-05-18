# Weekly Orchestrator Report — run #7

- **Head:** `7ded7ca9bdb65ac66393dd0d82e0e951179f4693`
- **Previous:** `e849285a6f41a03be62f7f29bc5d325dd60a383f`
- **Days since last run:** 0.5999494791666666
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

- Reason: no content changes in 0 days

### `todo_triage` — **RUN**

- Reason: 38 open TODOs — board refreshes; nag is delta-gated
- Scope: 38

### `microcrypt_sync` — **RUN**

- Reason: upstream microcrypt.gv hash changed since last sync
- Scope: microcrypt-map
