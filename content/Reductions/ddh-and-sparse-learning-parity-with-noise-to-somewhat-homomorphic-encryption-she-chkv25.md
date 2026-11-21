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

If [[decisional-diffie-hellman|DDH]] and [[learning-parity-with-noise#sparse-learning-parity-with-noise|sparse LPN]] are both hard, there is a [[homomorphic-encryption#somewhat-homomorphic-encryption-she|somewhat homomorphic encryption]] scheme supporting an a-priori bounded number of homomorphic operations, $O(\log \secpar / \log \log \secpar)$ multiplications followed by $\poly(\secpar)$ additions, whose ciphertexts, before and after homomorphic evaluation, have bit length a fixed polynomial in $\secpar$, independent of the number of homomorphic operations the scheme supports — [[CHKV25 - Somewhat Homomorphic Encryption from Linear Homomorphism and Sparse LPN|CHKV25]].

## Notes

- The evaluation key is large: its size scales with the complexity of the homomorphic computation performed, and it can be reused across any polynomial number of encryptions and evaluations — [[CHKV25 - Somewhat Homomorphic Encryption from Linear Homomorphism and Sparse LPN|CHKV25]].
- DDH gives a linearly homomorphic PKE, exponential ElGamal, which decrypts only small messages and so is not [[homomorphic-encryption#additively-homomorphic-encryption|additively homomorphic]]; the construction needs only linear homomorphism — [[CHKV25 - Somewhat Homomorphic Encryption from Linear Homomorphism and Sparse LPN|CHKV25]].
