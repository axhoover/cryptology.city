---
type: reduction
status: draft
title: OWF ⇒ Statistical ZK arguments for NP
aliases: []
id: red-owf-to-statistical-zk-argument-nov06
kind: implication
hypotheses: [owf]
conclusion: statistical-zk-argument
class: unstated
model: standard
source:
  - "[[NOV06 - Statistical Zero-Knowledge Arguments for NP from Any One-Way Function|NOV06]]"
security-loss: "polynomial"
---

# OWF ⇒ Statistical ZK arguments for NP

## Statement

If [[hash-function#preimage-resistance-one-wayness|one-way functions]] exist, every language in $\classNP$ has an interactive argument that is [[zero-knowledge-proof#statistical-zero-knowledge-arguments|statistically zero-knowledge]] and computationally sound — [[NOV06 - Statistical Zero-Knowledge Arguments for NP from Any One-Way Function|NOV06]].

## Notes

- Statistically hiding commitments from one-way functions followed — [[HR07 - Statistically-hiding commitment from any one-way function|HR07]] — and give the same arguments through [[statistically-hiding-commitment-to-statistical-zk-argument-bcc88|statistically hiding COM ⇒ statistical ZK arguments]] — [[BCC88 - Minimum Disclosure Proofs of Knowledge|BCC88]].
- Computational zero-knowledge proofs for $\classNP$ follow from one-way functions as well ([[hash-function-to-zkp-gmw91|OWF ⇒ ZKP]]) — [[GMW91 - Proofs that yield nothing but their validity or all languages in NP have zero-knowledge proof systems|GMW91]].
