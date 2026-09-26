---
type: reduction
status: draft
title: "DDH + Sparse Learning Parity with Noise ⇒ Somewhat homomorphic encryption (SHE)"
aliases: []
id: red-ddh-and-sparse-learning-parity-with-noise-to-somewhat-homomorphic-encryption-she-chkv25
kind: implication
hypotheses: [ddh, sparse-lpn]
conclusion: somewhat-homomorphic-encryption
class: unstated
model: standard
source:
  - "[[CHKV25 - Somewhat Homomorphic Encryption from Linear Homomorphism and Sparse LPN|CHKV25]]"
security-loss: ""
---

# DDH + Sparse Learning Parity with Noise ⇒ Somewhat homomorphic encryption (SHE)

[[decisional-diffie-hellman|DDH]] together with [[learning-parity-with-noise#sparse-learning-parity-with-noise|Sparse Learning Parity with Noise]] implies [[homomorphic-encryption#somewhat-homomorphic-encryption-she|Somewhat homomorphic encryption (SHE)]].

## Statement

[[decisional-diffie-hellman|DDH]] and [[learning-parity-with-noise#sparse-learning-parity-with-noise|sparse LPN]] together yield [[homomorphic-encryption#somewhat-homomorphic-encryption-she|somewhat homomorphic encryption]]: sparse LPN plus any [[homomorphic-encryption#partially-homomorphic-encryption-phe|linearly homomorphic PKE]] gives SHE, and DDH instantiates the linearly homomorphic component. The scheme supports $O(\log \secpar / \log \log \secpar)$ homomorphic multiplications followed by $\poly(\secpar)$ additions, and evaluated ciphertexts have bit-length a fixed polynomial in $\secpar$, independent of the number of operations applied — [[CHKV25 - Somewhat Homomorphic Encryption from Linear Homomorphism and Sparse LPN|CHKV25]].

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.
