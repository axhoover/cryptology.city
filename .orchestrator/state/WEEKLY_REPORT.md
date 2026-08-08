# Weekly Orchestrator Report — run #19

- **Head:** `69d4d2a2e98206d0a10ca84ef8b58dc95cf2b4a4`
- **Previous:** `636635185585ff83203e0f2efbb7c553a633971b`
- **Days since last run:** 6.927977650462963
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

- Reason: no content changes in 6 days

### `todo_triage` — **RUN**

- Reason: 37 open TODOs — board refreshes; nag is delta-gated
- Scope: 37

### `microcrypt_sync` — **RUN**

- Reason: upstream microcrypt.gv hash changed since last sync
- Scope: microcrypt-map
