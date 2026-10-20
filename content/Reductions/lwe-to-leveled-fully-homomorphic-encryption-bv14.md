---
type: reduction
status: draft
title: "LWE with polynomial ratio ⇒ Leveled FHE (BV14)"
aliases: []
id: red-lwe-to-leveled-fully-homomorphic-encryption-bv14
kind: implication
hypotheses: [polynomial-ratio-lwe]
conclusion: leveled-fully-homomorphic-encryption
class: fully-black-box
model: standard
source:
  - "[[BV14 - Lattice-based FHE as secure as PKE|BV14]]"
security-loss: ""
rationale:
  class: "The construction is fixed, with a public key that is an acyclic chain of bootstrapping keys, and the proof is a hybrid over the keys of the chain in which each step runs the IND-CPA adversary only as an oracle to distinguish LWE samples from uniform."
---

# LWE with polynomial ratio ⇒ Leveled FHE (BV14)

## Statement

If [[learning-with-errors#lwe-with-polynomial-modulus-to-noise-ratio|LWE is hard with polynomial modulus-to-noise ratio]], there is a [[homomorphic-encryption#leveled-fully-homomorphic-encryption|leveled FHE]] scheme for circuits of any depth fixed at key generation. Its security therefore rests on worst-case lattice problems with the approximation factors of plain lattice-based PKE, $\tilde{O}(n^{1.5+\varepsilon})$ for GapSVP under quantum reductions and $\tilde{O}(n^{2+\varepsilon})$ under classical ones, for any constant $\varepsilon > 0$ — [[BV14 - Lattice-based FHE as secure as PKE|BV14]].

## Sketch

Fresh ciphertexts are encrypted under the first key of a chain, every piece of the evaluation key (dimension-modulus reduction and bootstrapping material) encrypts a secret of the chain under a strictly later key, and nothing encrypts the last key. A hybrid from the end of the chain replaces each piece by an encryption of $0$, each step reducing to LWE because the secret key it is encrypted under by then appears nowhere else; IND-CPA under the first key then hides the challenge message — [[BV14 - Lattice-based FHE as secure as PKE|BV14]].

## Notes

- The polynomial ratio comes from bootstrapping: decryption is evaluated as a width-5 permutation branching program (Barrington's theorem), whose sequential multiplications grow noise additively, combined with successive dimension-modulus reduction; the chain of independent keys, one per level, removes the need for circular security — [[BV14 - Lattice-based FHE as secure as PKE|BV14]].
- With circular security of the scheme itself, the same bootstrapping gives [[homomorphic-encryption#compact-fhe|compact FHE]] — [[BV14 - Lattice-based FHE as secure as PKE|BV14]].
- Without bootstrapping, the BGV12 scheme uses a ratio exponential in the depth: [[lwe-to-leveled-fully-homomorphic-encryption-bgv12|BGV12]] — [[BGV12 - Leveled fully homomorphic encryption without bootstrapping|BGV12]].
