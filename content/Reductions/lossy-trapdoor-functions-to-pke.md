---
type: reduction
status: stub
title: "Lossy trapdoor functions ⇒ PKE"
aliases: []
id: red-lossy-trapdoor-functions-to-pke
kind: implication
hypotheses: [lossy-trapdoor-function]
conclusion: pke
class: fully-black-box
model: standard
source: folklore
security-loss: ""
---

# Lossy trapdoor functions ⇒ PKE

[[trapdoor-permutation#lossy-trapdoor-functions|Lossy trapdoor functions]] implies [[public-key-encryption|PKE]].

## Statement

Migrated verbatim from [[trapdoor-permutation]] § Lossy trapdoor functions:

> A generalization where there are two modes: an injective mode (standard TDP) and a lossy mode (where the function is many-to-one and loses information). Lossy TDFs imply TDPs and are useful for constructing CCA-secure encryption.

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- MISSING CITATION (PW08).
- 'are useful for constructing CCA-secure encryption' is hedged into uselessness — 'useful for' cannot be typed as an implication; the real theorem (lossy TDF => IND-CCA PKE) is stronger than what the page says.
- Conclusion is a security level (CCA-secure PKE) rather than the bare public-key-encryption node.
