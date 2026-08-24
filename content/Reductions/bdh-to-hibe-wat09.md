---
type: reduction
status: draft
title: "BDH ⇒ HIBE"
aliases: []
id: red-bdh-to-hibe-wat09
kind: implication
hypotheses: [bdh]
conclusion: hibe
class: unstated
model: standard
source:
  - "[[Wat09 - Dual System Encryption Realizing Fully Secure IBE and HIBE under Simple Assumptions|Wat09]]"
security-loss: ""
---

# BDH ⇒ HIBE

[[bilinear-map-assumptions|BDH]] implies [[hierarchical-identity-based-encryption|HIBE]].

## Statement

Migrated verbatim from [[attribute-based-encryption]] § Other results:

> - The dual system encryption technique of Wat09 gives adaptively secure IBE, HIBE, and ABE under simple pairing-based assumptions — [[Wat09 - Dual System Encryption Realizing Fully Secure IBE and HIBE under Simple Assumptions|Wat09]]

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Same umbrella-hypothesis problem as the IBE sub-edge.
- HIBE is not wikilinked on this bullet although the page exists.
- Multi-conclusion bullet (IBE, HIBE, ABE) rather than a chain — must still be split into three reductions, one per conclusion. 'isComposite' is used here in that sense.
- 'simple pairing-based assumptions' is vague and unlinked (Wat09 uses decisional bilinear Diffie-Hellman and decisional linear); the hypothesis cannot be pinned to a specific assumption node.
- IBE and HIBE targets are not wikilinked on this bullet even though both pages exist.
