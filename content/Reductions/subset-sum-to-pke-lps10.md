---
type: reduction
status: draft
title: "Subset sum ⇒ PKE"
aliases: []
id: red-subset-sum-to-pke-lps10
kind: implication
hypotheses: [subset-sum]
conclusion: pke
class: unstated
model: standard
source:
  - "[[LPS10 - Public-Key Cryptographic Primitives Provably as Secure as Subset Sum|LPS10]]"
security-loss: ""
---

# Subset sum ⇒ PKE

## Statement

If [[subset-sum|subset sum]] is hard for random instances at the parameters of LPS10, there is an IND-CPA-secure [[public-key-encryption|PKE]] whose security is polynomial-time equivalent to that hardness — [[LPS10 - Public-Key Cryptographic Primitives Provably as Secure as Subset Sum|LPS10]]. Those parameters satisfy $M^{1/n} > 10 n \log^2 n$, a density $n / \log_2 M = O(1/\log n)$ — [[KF15 - An Improved BKW Algorithm for LWE with Applications to Cryptography and Lattices|KF15]]. The required subset-sum assumption is weaker than the subset-sum assumptions behind the lattice-based encryption schemes of Ajtai–Dwork, Regev and Peikert — [[LPS10 - Public-Key Cryptographic Primitives Provably as Secure as Subset Sum|LPS10]].

## Notes

- A variant of the scheme is secure against key-leakage attacks — [[LPS10 - Public-Key Cryptographic Primitives Provably as Secure as Subset Sum|LPS10]].
- Random subset sum of density $o(1)$ is solvable in subexponential time, and the LPS10 parameters in time $2^{(\ln 2/2 + o(1))\, n / \log\log n}$ — [[KF15 - An Improved BKW Algorithm for LWE with Applications to Cryptography and Lattices|KF15]].
- A PKE whose IND-CCA security is polynomial-time equivalent to subset sum improves on the IND-CPA security of this scheme — [[FMV16 - Chosen-Ciphertext Security from Subset Sum|FMV16]].
