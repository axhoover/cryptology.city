---
type: reduction
status: draft
title: "iO ⇒ Statistical ZK arguments for NP"
aliases: []
id: red-io-to-statistical-zk-argument-kmnpry14
kind: implication
hypotheses: [io]
conclusion: statistical-zk-argument
class: unstated
model: standard
source:
  - "[[KMNPRY14 - One-Way Functions and (Im)perfect Obfuscation|KMNPRY14]]"
security-loss: ""
---

# iO ⇒ Statistical ZK arguments for NP

## Statement

If an efficient [[indistinguishability-obfuscation|indistinguishability obfuscator]] for all polynomial-size circuits exists, every language in $\classNP$ has an interactive argument that is [[zero-knowledge-proof#statistical-zero-knowledge-arguments|statistically zero-knowledge]] and computationally sound, with no further complexity assumption — [[KMNPRY14 - One-Way Functions and (Im)perfect Obfuscation|KMNPRY14]].

## Notes

- One-way functions alone give the same arguments ([[owf-to-statistical-zk-argument-nov06|OWF ⇒ Statistical ZK arguments for NP]]) — [[NOV06 - Statistical Zero-Knowledge Arguments for NP from Any One-Way Function|NOV06]]; iO gives one-way functions only under a complexity assumption such as $\classNP \not\subseteq \mathbf{io}\text{-}\classBPP$ ([[io-and-np-not-in-io-bpp-to-owf-kmnpry14|iO + NP ⊄ io-BPP ⇒ OWF]]) — [[KMNPRY14 - One-Way Functions and (Im)perfect Obfuscation|KMNPRY14]].
