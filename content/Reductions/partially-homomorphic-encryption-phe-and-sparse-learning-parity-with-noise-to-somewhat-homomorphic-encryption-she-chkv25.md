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

[[homomorphic-encryption#additively-homomorphic-encryption|Additively homomorphic encryption]] together with [[learning-parity-with-noise#sparse-learning-parity-with-noise|Sparse Learning Parity with Noise]] implies [[homomorphic-encryption#somewhat-homomorphic-encryption-she|Somewhat homomorphic encryption (SHE)]].

## Statement

Any linearly homomorphic PKE ([[homomorphic-encryption#additively-homomorphic-encryption|additively homomorphic encryption]], e.g. from [[decisional-diffie-hellman|DDH]] or [[decisional-composite-residuosity|DCR]]) together with the [[learning-parity-with-noise#sparse-learning-parity-with-noise|sparse LPN]] assumption yields [[homomorphic-encryption#somewhat-homomorphic-encryption-she|somewhat homomorphic encryption]] supporting $O(\log \secpar / \log\log \secpar)$ homomorphic multiplications followed by $\poly(\secpar)$ additions [[CHKV25 - Somewhat Homomorphic Encryption from Linear Homomorphism and Sparse LPN|CHKV25]].

## Sketch

Ciphertexts are matrices: homomorphic addition is matrix addition and homomorphic multiplication is matrix multiplication.

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.

- GENUINELY CONJUNCTIVE: sparse LPN and the linearly homomorphic PKE are both required; the parenthetical DDH/DCR is an illustrative instantiation of the second hypothesis, not a decomposition.
- COLLIDING IDENTIFIERS: hypothesis and conclusion both wikilink into homomorphic-encryption (PHE and SHE are sections of one page), and sparse-lpn is a section of learning-parity-with-noise; the hyperedge cannot distinguish these without sub-object pages.
