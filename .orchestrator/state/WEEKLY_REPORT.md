# Weekly Orchestrator Report — run #18

- **Head:** `636635185585ff83203e0f2efbb7c553a633971b`
- **Previous:** `619e25fd26612e9338a61468e2c5cb14d72e3db8`
- **Days since last run:** 7.008069548611111
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
