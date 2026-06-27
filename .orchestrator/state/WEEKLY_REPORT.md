# Weekly Orchestrator Report — run #13

- **Head:** `11738c847b5859982bb7bc9ff2d914e5c8b79ebb`
- **Previous:** `67fd7d2a4f33ac9ed0740c93ea934a408d346c30`
- **Days since last run:** 6.977998877314815
- **Changed content files:** 3
- **Open TODOs:** 38
- **LLM refinement:** no

## Bot decisions

### `editor` — **RUN**

- Reason: 3 content file(s) changed since last run
- Scope (3):
  - `content/Assumptions/bilinear-map-assumptions.md`
  - `content/Glossary/pairings.md`
  - `content/References/GPS06 - Pairings for Cryptographers.md`

### `reference_fixer` — **RUN**

- Reason: 3 reference-touching change(s)
- Scope (3):
  - `content/Assumptions/bilinear-map-assumptions.md`
  - `content/Glossary/pairings.md`
  - `content/References/GPS06 - Pairings for Cryptographers.md`

### `skeptical_checker` — **RUN**

- Reason: 2 deep-content file(s) changed
- Scope (2):
  - `content/Assumptions/bilinear-map-assumptions.md`
  - `content/Glossary/pairings.md`

### `refactor_simplifier` — skip

- Reason: recent activity and verifications are fresh

### `todo_triage` — **RUN**

- Reason: 38 open TODOs — board refreshes; nag is delta-gated
- Scope: 38

### `microcrypt_sync` — **RUN**

- Reason: upstream microcrypt.gv hash changed since last sync
- Scope: microcrypt-map
