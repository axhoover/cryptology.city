---
type: reduction
status: draft
title: Sub-exponential iO + Rerandomizable encryption ⇒ Compact FHE (CLTV)
aliases: []
id: red-subexponential-io-and-rerandomizable-encryption-to-he-cltv15
kind: implication
hypotheses:
  [subexponential-io, superpolynomially-secure-rerandomizable-encryption]
conclusion: compact-fhe
class: free
model: standard
source:
  - "[[CLTV15 - Obfuscation of Probabilistic Circuits and Applications|CLTV15]]"
security-loss: "sub-exponential in the iO security and slightly super-polynomial in the encryption's security"
rationale:
  class: "The evaluation key is an obfuscation of circuits that decrypt, compute and re-encrypt, so the construction uses the encryption scheme's code."
---

# Sub-exponential iO + Rerandomizable encryption ⇒ Compact FHE (CLTV)

## Statement

If [[indistinguishability-obfuscation#sub-exponentially-secure-io|sub-exponentially secure iO]] and a [[rerandomizable-encryption|re-randomizable PKE]] scheme [[rerandomizable-encryption#security-against-slightly-super-polynomial-adversaries|secure against slightly super-polynomial adversaries]] exist, then [[homomorphic-encryption#compact-fhe|compact fully homomorphic encryption]] exists, with no circular-security assumption — [[CLTV15 - Obfuscation of Probabilistic Circuits and Applications|CLTV15]].

## Notes

- The evaluation key is a probabilistic-iO obfuscation of the randomized circuit that decrypts two ciphertexts, applies a gate and re-encrypts; CLTV15 build the probabilistic iO they need from sub-exponentially secure iO and one-way functions — [[CLTV15 - Obfuscation of Probabilistic Circuits and Applications|CLTV15]].
- Lattice-based unbounded-depth FHE goes through bootstrapping, whose security rests on circular security of the scheme itself ([[circular-security-and-somewhat-homomorphic-encryption-she-to-he-gen09|Circular-secure bootstrappable SHE ⇒ Compact FHE]], [[circular-security-and-lwe-to-he|LWE with sub-exponential ratio ⇒ Bootstrappable SHE (BV11)]]) — [[Gen09 - Fully homomorphic encryption using ideal lattices|Gen09]], [[BV11 - Efficient Fully Homomorphic Encryption from (Standard) LWE|BV11]].
