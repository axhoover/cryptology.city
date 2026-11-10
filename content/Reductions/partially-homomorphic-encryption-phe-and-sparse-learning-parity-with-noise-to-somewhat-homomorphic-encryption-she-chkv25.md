---
type: reduction
status: draft
title: "Additively homomorphic encryption + Sparse LPN ⇒ SHE"
aliases: []
id: red-partially-homomorphic-encryption-phe-and-sparse-learning-parity-with-noise-to-somewhat-homomorphic-encryption-she-chkv25
kind: implication
hypotheses: [additively-homomorphic-encryption, sparse-lpn]
conclusion: somewhat-homomorphic-encryption
class: unstated
model: standard
source:
  - "[[CHKV25 - Somewhat Homomorphic Encryption from Linear Homomorphism and Sparse LPN|CHKV25]]"
security-loss: ""
---

# Additively homomorphic encryption + Sparse LPN ⇒ SHE

## Statement

If [[learning-parity-with-noise#sparse-learning-parity-with-noise|sparse LPN]] is hard, any linearly homomorphic PKE, such as an [[homomorphic-encryption#additively-homomorphic-encryption|additively homomorphic encryption]] scheme like Paillier's from [[decisional-composite-residuosity|DCR]], yields a [[homomorphic-encryption#somewhat-homomorphic-encryption-she|somewhat homomorphic encryption]] scheme supporting an a-priori bounded number of homomorphic operations, $O(\log \secpar / \log\log \secpar)$ multiplications followed by $\poly(\secpar)$ additions, whose ciphertexts, before and after homomorphic evaluation, have bit length a fixed polynomial in $\secpar$, independent of the number of homomorphic operations the scheme supports — [[CHKV25 - Somewhat Homomorphic Encryption from Linear Homomorphism and Sparse LPN|CHKV25]].

## Notes

- The evaluation key is large: its size scales with the complexity of the homomorphic computation performed, and it can be reused across any polynomial number of encryptions and evaluations — [[CHKV25 - Somewhat Homomorphic Encryption from Linear Homomorphism and Sparse LPN|CHKV25]].
