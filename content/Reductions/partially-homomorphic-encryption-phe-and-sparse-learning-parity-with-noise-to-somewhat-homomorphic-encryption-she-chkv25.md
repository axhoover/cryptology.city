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

If [[learning-parity-with-noise#sparse-learning-parity-with-noise|sparse LPN]] is hard, any linearly homomorphic PKE ([[homomorphic-encryption#additively-homomorphic-encryption|additively homomorphic encryption]], e.g. from [[decisional-diffie-hellman|DDH]] or [[decisional-composite-residuosity|DCR]]) yields a [[homomorphic-encryption#somewhat-homomorphic-encryption-she|somewhat homomorphic encryption]] scheme supporting $O(\log \secpar / \log\log \secpar)$ homomorphic multiplications followed by $\poly(\secpar)$ additions, whose evaluated ciphertexts have bit-length a fixed polynomial in $\secpar$, independent of the number of operations applied — [[CHKV25 - Somewhat Homomorphic Encryption from Linear Homomorphism and Sparse LPN|CHKV25]].
