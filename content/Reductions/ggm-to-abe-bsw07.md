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
