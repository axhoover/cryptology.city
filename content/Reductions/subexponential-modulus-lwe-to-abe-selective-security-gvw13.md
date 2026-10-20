---
type: reduction
status: draft
title: LWE with sub-exponential ratio ⇒ Selectively secure ABE for circuits (GVW)
aliases: []
id: red-subexponential-modulus-lwe-to-abe-selective-security-gvw13
kind: implication
hypotheses: [subexponential-modulus-lwe]
conclusion: abe-selective-security
class: fully-black-box
model: standard
source:
  - "[[GVW13 - Attribute-based encryption for circuits|GVW13]]"
security-loss: ""
rationale:
  class: "The scheme is one fixed construction from LWE samples and lattice trapdoors, and the reduction runs the ABE adversary only as an oracle on public parameters built from the committed challenge attribute and its LWE challenge."
---

# LWE with sub-exponential ratio ⇒ Selectively secure ABE for circuits (GVW)

## Statement

If [[learning-with-errors#lwe-with-sub-exponential-modulus-to-noise-ratio|LWE with sub-exponential modulus-to-noise ratio]] is hard, then for every depth $d$ fixed at setup there is a [[attribute-based-encryption#selective-security|selectively secure]] key-policy [[attribute-based-encryption|ABE]] scheme for all circuits of depth $d$, whose public parameters and ciphertexts grow linearly in $d$ — [[GVW13 - Attribute-based encryption for circuits|GVW13]].

## Notes

- Earlier ABE schemes, from pairings, handle Boolean formulas, that is $\mathbf{NC}^1$ ([[bdh-to-abe-gpsw06|BDH ⇒ ABE]]); GVW13's handle arbitrary polynomial-size circuits of bounded depth — [[GVW13 - Attribute-based encryption for circuits|GVW13]].
- Secret keys whose size grows with the circuit's depth but not its size follow from the same assumption by key-homomorphic encryption — [[BGG+14 - Fully Key-Homomorphic Encryption, Arithmetic Circuit ABE and Compact Garbled Circuits|BGG+14]].
- The noise grows by a factor polynomial in the dimension $n$ at each level of the circuit, so depth $d$ needs a modulus-to-noise ratio $n^{O(d)}$, which is $2^{n^{\varepsilon}}$ once $n$ is a large enough polynomial in $d$ — [[GVW13 - Attribute-based encryption for circuits|GVW13]].
