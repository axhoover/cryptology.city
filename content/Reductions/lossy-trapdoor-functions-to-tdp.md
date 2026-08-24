---
type: reduction
status: stub
title: "Lossy trapdoor functions ⇒ TDP"
aliases: []
id: red-lossy-trapdoor-functions-to-tdp
kind: implication
hypotheses: [lossy-trapdoor-function]
conclusion: tdp
class: fully-black-box
model: standard
source: folklore
security-loss: ""
---

# Lossy trapdoor functions ⇒ TDP

[[trapdoor-permutation#lossy-trapdoor-functions|Lossy trapdoor functions]] implies [[trapdoor-permutation|TDP]].

## Statement

Migrated verbatim from [[trapdoor-permutation]] § Lossy trapdoor functions:

> A generalization where there are two modes: an injective mode (standard TDP) and a lossy mode (where the function is many-to-one and loses information). Lossy TDFs imply TDPs and are useful for constructing CCA-secure encryption.

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- MISSING CITATION (lossy TDFs are Peikert-Waters PW08).
- SUSPECTED IMPRECISION: lossy TDFs yield injective trapdoor FUNCTIONS, not trapdoor PERMUTATIONS (the injective branch need not be a bijection on the domain). 'Lossy TDFs imply TDPs' is likely wrong as stated. Reported, not fixed.
- 'lossy-trapdoor-function' has no page; it lives only as a section of this page.
