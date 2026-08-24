---
type: reduction
status: draft
title: "$k$-Linear assumption ⇒ ABE"
aliases: []
id: red-k-linear-assumption-to-abe-rw13
kind: implication
hypotheses: [k-linear-assumption]
conclusion: abe
class: unstated
model: standard
source:
  - "[[RW13 - New Constructions and Proof Methods for Large Universe Attribute-Based Encryption|RW13]]"
security-loss: ""
---

# $k$-Linear assumption ⇒ ABE

[[bilinear-map-assumptions#k-linear-assumption|$k$-Linear assumption]] implies [[attribute-based-encryption|ABE]].

## Statement

Migrated verbatim from [[attribute-based-encryption]] § Other results:

> - RW13 gives large-universe KP-ABE and CP-ABE constructions for any monotone formula under variants of the $k$-linear assumption — [[RW13 - New Constructions and Proof Methods for Large Universe Attribute-Based Encryption|RW13]]

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- 'variants of the $k$-linear assumption' is vague — 'variants of' cannot be typed as a hypothesis node.
- k-Lin has no page of its own: content/Assumptions/decisional-diffie-hellman.md has a '## k-Lin' section that is a bare TODO, and content/Assumptions/bilinear-map-assumptions.md discusses k-Lin/DLIN. Nothing is wikilinked here.
- Two conclusions (KP-ABE and CP-ABE) collapse into one slug because both are aliases of attribute-based-encryption.
