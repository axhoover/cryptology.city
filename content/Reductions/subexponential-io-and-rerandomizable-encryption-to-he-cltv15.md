---
type: reduction
status: draft
title: Sub-exponential iO + Rerandomizable encryption ⇒ FHE (CLTV)
aliases: []
id: red-subexponential-io-and-rerandomizable-encryption-to-he-cltv15
kind: implication
hypotheses: [subexponential-io, rerandomizable-encryption]
conclusion: he
class: free
model: standard
source:
  - "[[CLTV15 - Obfuscation of Probabilistic Circuits and Applications|CLTV15]]"
security-loss: "sub-exponential in the iO security and slightly super-polynomial in the encryption's security"
rationale:
  class: "The evaluation key is an obfuscation of circuits that decrypt, compute and re-encrypt, so the construction uses the encryption scheme's code."
---

# Sub-exponential iO + Rerandomizable encryption ⇒ FHE (CLTV)

## Statement

If [[indistinguishability-obfuscation#sub-exponentially-secure-io|sub-exponentially secure iO]] and a [[rerandomizable-encryption|re-randomizable PKE]] scheme secure against slightly super-polynomial adversaries exist, then [[homomorphic-encryption|fully homomorphic encryption]] exists, with no circular-security assumption — [[CLTV15 - Obfuscation of Probabilistic Circuits and Applications|CLTV15]].

## Notes

- The main tool is iO for probabilistic circuits, whose obfuscations of the decrypt-compute-reencrypt circuits must hide the randomness of re-encryption — [[CLTV15 - Obfuscation of Probabilistic Circuits and Applications|CLTV15]].
- Lattice-based unbounded-depth FHE goes through bootstrapping, whose security rests on a circular-security assumption ([[circular-security-and-lwe-to-he|circular security + LWE ⇒ FHE]]) — [[BV11 - Efficient Fully Homomorphic Encryption from (Standard) LWE|BV11]].
