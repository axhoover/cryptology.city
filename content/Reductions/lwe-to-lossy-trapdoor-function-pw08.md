---
type: reduction
status: draft
title: LWE ⇒ Lossy TDF (Peikert–Waters)
aliases: []
id: red-lwe-to-lossy-trapdoor-function-pw08
kind: implication
hypotheses: [lwe]
conclusion: lossy-trapdoor-function
class: unstated
model: standard
source:
  - "[[PW08 - Lossy trapdoor functions and their applications|PW08]]"
security-loss: ""
---

# LWE ⇒ Lossy TDF (Peikert–Waters)

## Statement

If [[learning-with-errors|LWE]] is hard for suitable parameters, which follows from the worst-case hardness of standard lattice problems, then [[trapdoor-permutation#lossy-trapdoor-functions|lossy trapdoor functions]] exist — [[PW08 - Lossy trapdoor functions and their applications|PW08]]. With the [[ddh-to-lossy-trapdoor-function-pw08|DDH-based construction]], these were the first injective trapdoor functions from assumptions unrelated to factoring, and they give the first IND-CCA2-secure encryption from worst-case lattice assumptions — [[PW08 - Lossy trapdoor functions and their applications|PW08]].

## Notes

- The construction parallels the [[ddh-to-lossy-trapdoor-function-pw08|DDH-based one]]: the index is an encryption of the identity or the zero matrix under an LWE-based additively homomorphic scheme — [[PW08 - Lossy trapdoor functions and their applications|PW08]].
