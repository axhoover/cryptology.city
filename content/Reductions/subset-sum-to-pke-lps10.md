---
type: reduction
status: draft
title: "Subset sum at the LPS10 parameters ⇒ PKE"
aliases: []
id: red-subset-sum-to-pke-lps10
kind: implication
hypotheses: [lps10-subset-sum]
conclusion: pke
class: unstated
model: standard
source:
  - "[[LPS10 - Public-Key Cryptographic Primitives Provably as Secure as Subset Sum|LPS10]]"
security-loss: ""
---

# Subset sum at the LPS10 parameters ⇒ PKE

## Statement

If [[subset-sum#subset-sum-at-the-lps10-parameters|subset sum is hard at the LPS10 parameters]], there is an IND-CPA-secure [[public-key-encryption|PKE]] whose security is polynomial-time equivalent to that hardness — [[LPS10 - Public-Key Cryptographic Primitives Provably as Secure as Subset Sum|LPS10]]. Those parameters satisfy $M^{1/n} > 10 n \log^2 n$, a density $n / \log_2 M = O(1/\log n)$ — [[KF15 - An Improved BKW Algorithm for LWE with Applications to Cryptography and Lattices|KF15]].

## Notes

- The required subset-sum assumption is weaker than the subset-sum assumptions behind the lattice-based encryption schemes of Ajtai–Dwork, Regev and Peikert — [[LPS10 - Public-Key Cryptographic Primitives Provably as Secure as Subset Sum|LPS10]].
- A variant of the scheme is secure against [[leakage-resilient-public-key-encryption|key-leakage attacks]] — [[LPS10 - Public-Key Cryptographic Primitives Provably as Secure as Subset Sum|LPS10]].
- Random subset sum of density $o(1)$ is solvable in subexponential time, and the LPS10 parameters in time $2^{(\ln 2/2 + o(1))\, n / \log\log n}$ — [[KF15 - An Improved BKW Algorithm for LWE with Applications to Cryptography and Lattices|KF15]].
- A PKE whose IND-CCA security is polynomial-time equivalent to subset sum improves on the IND-CPA security of this scheme — [[FMV16 - Chosen-Ciphertext Security from Subset Sum|FMV16]].
