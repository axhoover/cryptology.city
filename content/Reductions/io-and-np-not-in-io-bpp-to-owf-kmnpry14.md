---
type: reduction
status: draft
title: "iO + NP ⊄ io-BPP ⇒ OWF"
aliases: []
id: red-io-and-np-not-in-io-bpp-to-owf-kmnpry14
kind: implication
hypotheses: [io, np-not-in-io-bpp]
conclusion: owf
class: unstated
model: standard
source:
  - "[[KMNPRY14 - One-Way Functions and (Im)perfect Obfuscation|KMNPRY14]]"
security-loss: ""
rationale:
  class: "One hypothesis is a worst-case complexity separation rather than an RTV04 primitive."
---

# iO + NP ⊄ io-BPP ⇒ OWF

## Statement

If [[nondeterministic-polynomial-time#hardness-at-almost-every-input-length|NP ⊄ io-BPP]] and an efficient [[indistinguishability-obfuscation|indistinguishability obfuscator]] for all polynomial-size circuits exists, even one that is only approximately correct, then [[hash-function#preimage-resistance-one-wayness|one-way functions]] exist — [[KMNPRY14 - One-Way Functions and (Im)perfect Obfuscation|KMNPRY14]]. The complexity hypothesis cannot be dropped: if $\classP = \classNP$, iO exists, by outputting the lexicographically first circuit of the same size computing the same function — [[KMNPRY14 - One-Way Functions and (Im)perfect Obfuscation|KMNPRY14]] — while one-way functions do not ([[owf-to-np|OWF inversion ∈ NP]]) — folklore.

## Notes

- With no complexity assumption, iO yields statistical zero-knowledge arguments for $\classNP$ ([[io-to-statistical-zk-argument-kmnpry14|iO ⇒ Statistical ZK arguments for NP]]) — [[KMNPRY14 - One-Way Functions and (Im)perfect Obfuscation|KMNPRY14]].
- An alternative version replaces $\classNP \not\subseteq \mathbf{io}\text{-}\classBPP$ by the assumption that some $\classNP$ problem is hard on average — [[KMNPRY14 - One-Way Functions and (Im)perfect Obfuscation|KMNPRY14]].
