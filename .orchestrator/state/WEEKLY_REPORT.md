# Weekly Orchestrator Report — run #12

- **Head:** `67fd7d2a4f33ac9ed0740c93ea934a408d346c30`
- **Previous:** `6bfc6226cd26bf2b58fd7750089e361829f6d000`
- **Days since last run:** 7.001750451388889
- **Changed content files:** 0
- **Open TODOs:** 38
- **LLM refinement:** no

## Bot decisions

### `editor` — skip

- Reason: no content changes since last run

### `reference_fixer` — **RUN**

- Reason: periodic link-rot sweep (run #12, every 4 runs)

### `skeptical_checker` — **RUN**

- Reason: bootstrapping fact-check queue

### `refactor_simplifier` — skip

- Reason: no content changes in 7 days

### `todo_triage` — **RUN**

- Reason: 38 open TODOs — board refreshes; nag is delta-gated
- Scope: 38

### `microcrypt_sync` — **RUN**

- Reason: upstream microcrypt.gv hash changed since last sync
- Scope: microcrypt-map
