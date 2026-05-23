# Weekly Orchestrator Report — run #8

- **Head:** `0a13421cb94d3dd280e61c85376adcba2f395c7f`
- **Previous:** `7ded7ca9bdb65ac66393dd0d82e0e951179f4693`
- **Days since last run:** 4.5715690162037035
- **Changed content files:** 0
- **Open TODOs:** 38
- **LLM refinement:** no

## Bot decisions

### `editor` — skip

- Reason: no content changes since last run

### `reference_fixer` — **RUN**

- Reason: periodic link-rot sweep (run #8, every 4 runs)

### `skeptical_checker` — **RUN**

- Reason: bootstrapping fact-check queue

### `refactor_simplifier` — skip

- Reason: no content changes in 4 days

### `todo_triage` — **RUN**

- Reason: 38 open TODOs — board refreshes; nag is delta-gated
- Scope: 38

### `microcrypt_sync` — **RUN**

- Reason: upstream microcrypt.gv hash changed since last sync
- Scope: microcrypt-map
