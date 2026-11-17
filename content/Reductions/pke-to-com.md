---
type: reduction
status: draft
title: "Perfectly correct PKE ⇒ COM"
aliases: []
id: red-pke-to-com
kind: implication
hypotheses: [perfectly-correct-pke-cpa-security]
conclusion: com
class: fully-black-box
model: standard
source: folklore
security-loss: "hiding: tight, the hiding advantage equals the CPA advantage; binding: perfect"
rationale:
  class: "The commitment algorithms call KeyGen and Enc only as oracles, the hiding reduction runs any commitment distinguisher once as a CPA adversary with the same advantage, and binding is perfect for honestly generated keys."
---

# Perfectly correct PKE ⇒ COM

## Statement

Let $\PKE = (\KeyGen, \Enc, \Dec)$ be a [[public-key-encryption#perfectly-correct-cpa-secure-pke|perfectly correct CPA-secure PKE]] with message space $\calM$. The following non-interactive scheme is a [[commitment-scheme|commitment scheme]] with message space $\calM$ — folklore:

- $\Gen(1^\secpar)$ runs $(\sk, \pk) \gets \KeyGen(1^\secpar)$, discards $\sk$, and outputs $\pp := \pk$;
- $\Com(\pp, m; r) := (\Enc(\pk, m; r), (m, r))$;
- $\Open(\pp, c, (m, r))$ returns $m$ if $c = \Enc(\pk, m; r)$, and $\bot$ otherwise.

Correctness is perfect, binding is perfect, and hiding reduces tightly to CPA security. The public parameters come from a trusted setup: a receiver that ran $\KeyGen$ itself would know $\sk$ and could decrypt the commitment.

## Sketch

Binding: perfect correctness holds for every key pair in the support of $\KeyGen$, so for $\pp = \pk$ generated honestly, with some $\sk$, openings $(m_0, r_0)$ and $(m_1, r_1)$ of one $c$ give $m_0 = \Dec(\sk, c) = m_1$. Hiding: a hiding distinguisher sees exactly $(\pk, \Enc(\pk, m_b))$, so it is a CPA adversary with the same advantage.

## Notes

- PKE without perfect correctness still yields commitments: PKE implies a [[hash-function#preimage-resistance-one-wayness|one-way function]] [[IL89 - One-way Functions are Essential for Complexity Based Cryptography|IL89]], hence a [[pseudorandom-generator|PRG]] [[HILL99 - A Pseudorandom Generator from Any One-Way Function|HILL99]], hence a two-message statistically binding commitment [[Naor91 - Bit commitment using pseudorandomness|Naor91]].
