---
type: reduction
status: draft
title: LWE ⇒ Lossy TDF (Peikert–Waters)
aliases: []
id: red-lwe-to-lossy-trapdoor-function-pw08
kind: implication
hypotheses: [polynomial-ratio-lwe]
conclusion: lossy-trapdoor-function
class: fully-black-box
model: standard
source:
  - "[[PW08 - Lossy trapdoor functions and their applications|PW08]]"
security-loss: ""
rationale:
  class: "The function uses only LWE samples and linear algebra modulo q, and the mode-indistinguishability reduction runs any distinguisher only as an oracle on indices built from its LWE challenges."
---

# LWE ⇒ Lossy TDF (Peikert–Waters)

## Statement

If [[learning-with-errors#lwe-with-polynomial-modulus-to-noise-ratio|LWE is hard with polynomial modulus-to-noise ratio]], which follows from the worst-case quantum hardness of standard lattice problems to within polynomial factors — [[Reg05 - On Lattices, Learning with Errors, Random Linear Codes, and Cryptography|Reg05]] — then [[trapdoor-permutation#lossy-trapdoor-functions|lossy trapdoor functions]] exist, and they give the first IND-CCA2-secure encryption from worst-case lattice assumptions — [[PW08 - Lossy trapdoor functions and their applications|PW08]].

## Notes

- The construction parallels the [[ddh-to-lossy-trapdoor-function-pw08|DDH-based one]]: the index is an encryption of the identity or the zero matrix under an LWE-based additively homomorphic scheme — [[PW08 - Lossy trapdoor functions and their applications|PW08]].
