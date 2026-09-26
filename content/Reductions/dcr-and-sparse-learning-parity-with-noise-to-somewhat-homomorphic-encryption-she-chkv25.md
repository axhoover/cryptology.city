---
type: reduction
status: draft
title: "DCR + Sparse Learning Parity with Noise ⇒ Somewhat homomorphic encryption (SHE)"
aliases: []
id: red-dcr-and-sparse-learning-parity-with-noise-to-somewhat-homomorphic-encryption-she-chkv25
kind: implication
hypotheses: [dcr, sparse-lpn]
conclusion: somewhat-homomorphic-encryption
class: unstated
model: standard
source:
  - "[[CHKV25 - Somewhat Homomorphic Encryption from Linear Homomorphism and Sparse LPN|CHKV25]]"
security-loss: ""
---

# DCR + Sparse Learning Parity with Noise ⇒ Somewhat homomorphic encryption (SHE)

[[decisional-composite-residuosity|DCR]] together with [[learning-parity-with-noise#sparse-learning-parity-with-noise|Sparse Learning Parity with Noise]] implies [[homomorphic-encryption#somewhat-homomorphic-encryption-she|Somewhat homomorphic encryption (SHE)]].

## Statement

[[learning-parity-with-noise#sparse-learning-parity-with-noise|Sparse LPN]] together with a linearly homomorphic [[homomorphic-encryption#partially-homomorphic-encryption-phe|PKE]] (here Paillier, from [[decisional-composite-residuosity|DCR]]) yields [[homomorphic-encryption#somewhat-homomorphic-encryption-she|SHE]] supporting $O(\log \secpar / \log\log \secpar)$ homomorphic multiplications followed by $\poly(\secpar)$ additions, with ciphertexts of length a fixed polynomial in $\secpar$ before and after evaluation — [[CHKV25 - Somewhat Homomorphic Encryption from Linear Homomorphism and Sparse LPN|CHKV25]].

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.

- Instantiation edge: this page equals the generic edge [[partially-homomorphic-encryption-phe-and-sparse-learning-parity-with-noise-to-somewhat-homomorphic-encryption-she-chkv25|PHE + sparse LPN ⇒ SHE]] composed with [[dcr-to-partially-homomorphic-encryption-phe-pai99|DCR ⇒ PHE]].
