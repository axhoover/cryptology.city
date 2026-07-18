# Weekly Orchestrator Report — run #16

- **Head:** `0620387965f1acf8cc6b2a48cca7e67a5d7265d8`
- **Previous:** `903040ad2940cf090273a636c2725c8218bb1808`
- **Days since last run:** 6.9893104398148145
- **Changed content files:** 0
- **Open TODOs:** 37
- **LLM refinement:** no

## Bot decisions

### `editor` — skip

- Reason: no content changes since last run

### `reference_fixer` — **RUN**

- Reason: periodic link-rot sweep (run #16, every 4 runs)

### `skeptical_checker` — **RUN**

- Reason: bootstrapping fact-check queue

### `refactor_simplifier` — skip

- Reason: no content changes in 6 days

### `todo_triage` — **RUN**

- Reason: 37 open TODOs — board refreshes; nag is delta-gated
- Scope: 37

### `microcrypt_sync` — **RUN**

- Reason: upstream microcrypt.gv hash changed since last sync
- Scope: microcrypt-map
