# Weekly Orchestrator Report — run #9

- **Head:** `3e48048c197481c0749cb75d4f97c1bac8e9eb61`
- **Previous:** `0a13421cb94d3dd280e61c85376adcba2f395c7f`
- **Days since last run:** 7.007704479166667
- **Changed content files:** 4
- **Open TODOs:** 38
- **LLM refinement:** no

## Bot decisions

### `editor` — **RUN**

- Reason: 4 content file(s) changed since last run
- Scope (4):
  - `content/Primitives/attribute-based-encryption.md`
  - `content/Primitives/single-server-private-information-retrieval.md`
  - `content/References/BM26 - Secret-Key PIR from One-Way Functions.md`
  - `content/References/LS26 - Symmetric Attribute-Based Encryption from Minimal Hardness Assumptions.md`

### `reference_fixer` — **RUN**

- Reason: 4 reference-touching change(s)
- Scope (4):
  - `content/Primitives/attribute-based-encryption.md`
  - `content/Primitives/single-server-private-information-retrieval.md`
  - `content/References/BM26 - Secret-Key PIR from One-Way Functions.md`
  - `content/References/LS26 - Symmetric Attribute-Based Encryption from Minimal Hardness Assumptions.md`

### `skeptical_checker` — **RUN**

- Reason: 2 deep-content file(s) changed
- Scope (2):
  - `content/Primitives/attribute-based-encryption.md`
  - `content/Primitives/single-server-private-information-retrieval.md`

### `refactor_simplifier` — skip

- Reason: recent activity and verifications are fresh

### `todo_triage` — **RUN**

- Reason: 38 open TODOs — board refreshes; nag is delta-gated
- Scope: 38

### `microcrypt_sync` — **RUN**

- Reason: upstream microcrypt.gv hash changed since last sync
- Scope: microcrypt-map
