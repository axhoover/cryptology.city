---
type: reduction
status: draft
title: "Subset sum ⇒ OT"
aliases: []
id: red-subset-sum-to-ot-lps10
kind: implication
hypotheses: [subset-sum]
conclusion: ot
class: unstated
model: standard
source:
  - "[[LPS10 - Public-Key Cryptographic Primitives Provably as Secure as Subset Sum|LPS10]]"
security-loss: ""
---

# Subset sum ⇒ OT

## Statement

If [[subset-sum|subset sum]] is hard for $(n, M)$ at the parameters of LPS10, there is an [[oblivious-transfer|oblivious transfer]] protocol secure against semi-honest adversaries — [[LPS10 - Public-Key Cryptographic Primitives Provably as Secure as Subset Sum|LPS10]]. Those parameters have density $O(1/\log n)$, with $M^{1/n} > 10 n \log^2 n$ — [[KF15 - An Improved BKW Algorithm for LWE with Applications to Cryptography and Lattices|KF15]].

## Notes

- The same assumption gives IND-CPA-secure [[public-key-encryption#cpa-security|PKE]] ([[subset-sum-to-pke-lps10|Subset sum ⇒ PKE]]) — [[LPS10 - Public-Key Cryptographic Primitives Provably as Secure as Subset Sum|LPS10]].
