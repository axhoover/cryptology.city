---
type: reduction
status: draft
title: "GGM ⇒ ABE"
aliases: []
id: red-ggm-to-abe-bsw07
kind: implication
hypotheses: [ggm]
conclusion: abe
class: unstated
model: generic-group
source:
  - "[[BSW07 - Ciphertext-Policy Attribute-Based Encryption|BSW07]]"
security-loss: ""
---

# GGM ⇒ ABE

[[generic-group-model|GGM]] implies [[attribute-based-encryption|ABE]].

## Statement

Migrated verbatim from [[attribute-based-encryption]] § Other results:

> - BSW07 introduced CP-ABE with a construction proved secure in the generic group model — [[BSW07 - Ciphertext-Policy Attribute-Based Encryption|BSW07]]

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- The 'hypothesis' is an idealized model, not a hardness assumption — the target model needs to carry the model as a field rather than as a hypothesis node.
- content/Glossary/generic-group-model.md exists but is not wikilinked.
- Sourcing pass (2026-09), **not fixed**: claim judged incorrect as stated — GGM is an idealized model of computation, not a hardness assumption or primitive, so "GGM ⇒ ABE" is not a well-formed hyperedge; idealized models belong on the `model:` axis. The underlying fact stands — [[BSW07 - Ciphertext-Policy Attribute-Based Encryption|BSW07]] prove their CP-ABE construction over bilinear groups secure in the generic bilinear-group model — and should be re-encoded with a bilinear-group hypothesis (or none), `model: generic-group`, and `class: free`.
