---
type: reduction
status: draft
title: "Hash function ⇒ Secret-Key PIR (SK-PIR)"
aliases: []
id: red-hash-function-to-secret-key-pir-sk-pir-bm26
kind: implication
hypotheses: [hash-function]
conclusion: secret-key-pir
class: unstated
model: standard
source:
  - "[[BM26 - Secret-Key PIR from One-Way Functions|BM26]]"
security-loss: ""
---

# Hash function ⇒ Secret-Key PIR (SK-PIR)

[[hash-function|Hash function]] implies [[single-server-private-information-retrieval#secret-key-pir-sk-pir|Secret-Key PIR (SK-PIR)]].

## Statement

Migrated verbatim from [[single-server-private-information-retrieval]] § Constructions:

> - SK-PIR with online communication $\tilde{O}(\sqrt{N} \cdot \secpar)$ (server time $O(N \cdot \poly(\secpar))$ per query) follows from one-way functions alone, matching the minimal known lower bound — [[BM26 - Secret-Key PIR from One-Way Functions|BM26]]

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- The hypothesis 'one-way functions' has no wikilink here; elsewhere the wiki routes OWF to content/Primitives/hash-function.md (which also hosts CRHF) — the OWF identifier is ambiguous site-wide.
- 'matching the minimal known lower bound' is a second, uncited claim riding on the same bullet.
- 'secret-key-pir' is an in-page section, not its own slug.
