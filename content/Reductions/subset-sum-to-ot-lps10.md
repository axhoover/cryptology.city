---
type: reduction
status: draft
title: "Subset sum at the LPS10 parameters ⇒ OT"
aliases: []
id: red-subset-sum-to-ot-lps10
kind: implication
hypotheses: [lps10-subset-sum]
conclusion: ot
class: unstated
model: standard
source:
  - "[[LPS10 - Public-Key Cryptographic Primitives Provably as Secure as Subset Sum|LPS10]]"
security-loss: ""
---

# Subset sum at the LPS10 parameters ⇒ OT

## Statement

If [[subset-sum#subset-sum-at-the-lps10-parameters|subset sum is hard at the LPS10 parameters]], there is an [[oblivious-transfer|oblivious transfer]] protocol secure against semi-honest adversaries — [[LPS10 - Public-Key Cryptographic Primitives Provably as Secure as Subset Sum|LPS10]].

## Notes

- Subset sum at the LPS10 parameters also gives IND-CPA-secure [[public-key-encryption#cpa-security|PKE]] ([[subset-sum-to-pke-lps10|Subset sum at the LPS10 parameters ⇒ PKE]]) — [[LPS10 - Public-Key Cryptographic Primitives Provably as Secure as Subset Sum|LPS10]]. That encryption scheme uses $M^{1/n} > 10 n \log^2 n$, a density $O(1/\log n)$ — [[KF15 - An Improved BKW Algorithm for LWE with Applications to Cryptography and Lattices|KF15]].
