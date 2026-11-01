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

## Statement

If [[decisional-diffie-hellman|DDH]] and [[learning-parity-with-noise#sparse-learning-parity-with-noise|sparse LPN]] are both hard, there is a [[homomorphic-encryption#somewhat-homomorphic-encryption-she|somewhat homomorphic encryption]] scheme supporting $O(\log \secpar / \log \log \secpar)$ homomorphic multiplications followed by $\poly(\secpar)$ additions, whose evaluated ciphertexts have bit-length a fixed polynomial in $\secpar$, independent of the number of operations applied — [[CHKV25 - Somewhat Homomorphic Encryption from Linear Homomorphism and Sparse LPN|CHKV25]].

## Notes

- DDH supplies a linearly homomorphic PKE, exponential ElGamal, that decrypts only small messages and so does not meet the [[homomorphic-encryption#additively-homomorphic-encryption|additively homomorphic]] node; the construction needs only linear homomorphism, so the result is recorded directly and not as an instance of [[partially-homomorphic-encryption-phe-and-sparse-learning-parity-with-noise-to-somewhat-homomorphic-encryption-she-chkv25|Additively homomorphic encryption + Sparse LPN ⇒ SHE]] — [[CHKV25 - Somewhat Homomorphic Encryption from Linear Homomorphism and Sparse LPN|CHKV25]].
