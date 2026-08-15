# Weekly Orchestrator Report — run #20

- **Head:** `0a0a473d79468e582976c2918ed3198b271c6cdb`
- **Previous:** `69d4d2a2e98206d0a10ca84ef8b58dc95cf2b4a4`
- **Days since last run:** 6.977099976851852
- **Changed content files:** 0
- **Open TODOs:** 37
- **LLM refinement:** no

## Bot decisions

### `editor` — skip

- Reason: no content changes since last run

### `reference_fixer` — **RUN**

- Reason: periodic link-rot sweep (run #20, every 4 runs)

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
