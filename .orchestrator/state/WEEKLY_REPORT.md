# Weekly Orchestrator Report — run #17

- **Head:** `619e25fd26612e9338a61468e2c5cb14d72e3db8`
- **Previous:** `0620387965f1acf8cc6b2a48cca7e67a5d7265d8`
- **Days since last run:** 7.0120041782407405
- **Changed content files:** 0
- **Open TODOs:** 37
- **LLM refinement:** no

## Bot decisions

### `editor` — skip

- Reason: no content changes since last run

### `reference_fixer` — skip

- Reason: no reference-touching changes

### `skeptical_checker` — **RUN**

- Reason: bootstrapping fact-check queue

### `refactor_simplifier` — skip

- Reason: no content changes in 7 days

### `todo_triage` — **RUN**

- Reason: 37 open TODOs — board refreshes; nag is delta-gated
- Scope: 37

### `microcrypt_sync` — **RUN**

- Reason: upstream microcrypt.gv hash changed since last sync
- Scope: microcrypt-map
