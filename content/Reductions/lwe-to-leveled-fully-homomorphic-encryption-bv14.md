---
type: reduction
status: draft
title: "LWE ⇒ Leveled FHE at polynomial ratio (BV14)"
aliases: []
id: red-lwe-to-leveled-fully-homomorphic-encryption-bv14
kind: implication
hypotheses: [lwe]
conclusion: leveled-fully-homomorphic-encryption
class: fully-black-box
model: standard
source:
  - "[[BV14 - Lattice-based FHE as secure as PKE|BV14]]"
security-loss: ""
rationale:
  class: "The construction is fixed, with a public key that is an acyclic chain of bootstrapping keys, and the proof is a hybrid over the keys of the chain in which each step runs the IND-CPA adversary only as an oracle to distinguish LWE samples from uniform."
---

# LWE ⇒ Leveled FHE at polynomial ratio (BV14)

## Statement

If [[learning-with-errors|LWE]] is hard with a polynomial modulus-to-noise ratio, there is a [[homomorphic-encryption#leveled-fully-homomorphic-encryption|leveled FHE]] scheme for circuits of any depth fixed at key generation. Its security therefore rests on worst-case lattice problems with the approximation factors of plain lattice-based PKE, $\tilde{O}(n^{1.5+\varepsilon})$ for GapSVP under quantum reductions and $\tilde{O}(n^{2+\varepsilon})$ under classical ones, for any constant $\varepsilon > 0$ — [[BV14 - Lattice-based FHE as secure as PKE|BV14]].

## Sketch

Bootstrapping evaluates the decryption circuit as a width-5 permutation branching program, by Barrington's theorem, whose sequential multiplications add noise additively rather than multiplicatively. Refreshing along a chain of independent keys, one per level, keeps the modulus-to-noise ratio polynomial without circular security — [[BV14 - Lattice-based FHE as secure as PKE|BV14]].

## Notes

- With circular security of the scheme itself, the same bootstrapping gives [[homomorphic-encryption#compact-fhe|compact FHE]] — [[BV14 - Lattice-based FHE as secure as PKE|BV14]].
- Without bootstrapping, leveled FHE needs a ratio exponential in the depth: [[lwe-to-leveled-fully-homomorphic-encryption-bgv12|BGV12]] — [[BGV12 - Leveled fully homomorphic encryption without bootstrapping|BGV12]].
