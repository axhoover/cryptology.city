# Weekly Orchestrator Report — run #14

- **Head:** `f2ff380d76ccf5de5a72f8b96fc9187a1d7569b3`
- **Previous:** `11738c847b5859982bb7bc9ff2d914e5c8b79ebb`
- **Days since last run:** 6.993409340277778
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

- Reason: no content changes in 6 days

### `todo_triage` — **RUN**

- Reason: 38 open TODOs — board refreshes; nag is delta-gated
- Scope: 38

### `microcrypt_sync` — **RUN**

- Reason: upstream microcrypt.gv hash changed since last sync
- Scope: microcrypt-map
