---
type: reduction
status: stub
title: "Strong Security ⇒ PRP"
aliases: []
id: red-strong-security-to-prp
kind: implication
hypotheses: [strong-pseudorandom-permutation]
conclusion: prp
class: unstated
model: standard
source: folklore
security-loss: ""
---

# Strong Security ⇒ PRP

[[pseudorandom-permutation#strong-security|Strong Security]] implies [[pseudorandom-permutation|PRP]].

## Statement

Migrated verbatim from [[pseudorandom-permutation]] § Strong Security:

> In the **strong PRP (sPRP)** security game, the adversary additionally receives an inverse oracle. This is a strictly stronger notion than standard PRP security.

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- 'strictly stronger notion' asserts an implication AND a separation (sPRP => PRP, plus PRP does not imply sPRP); both are uncited, and the separation half needs its own record after migration.
- sPRP is an alias of this same page, so hypothesis and conclusion collide on one slug.
