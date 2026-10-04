---
type: reduction
status: draft
title: "PKE ⇒ COM"
aliases: []
id: red-pke-to-com
kind: implication
hypotheses: [pke]
conclusion: com
class: fully-black-box
model: standard
source: folklore
security-loss: ""
rationale:
  class: "The commitment algorithms call KeyGen and Enc only as oracles, the hiding reduction runs any commitment distinguisher once as a CPA adversary with the same advantage, and binding is information-theoretic given perfect correctness and a well-formed key."
---

# PKE ⇒ COM

## Statement

Committing to $m$ as $(\pk, c)$, where $(\sk, \pk) \gets \KeyGen(1^\secpar)$ and $c \gets \Enc(\pk, m; r)$, and opening with $(m, r)$, turns any perfectly correct [[public-key-encryption#cpa-security|CPA-secure]] [[public-key-encryption|PKE]] into a non-interactive [[commitment-scheme|commitment]]: hiding reduces tightly to CPA security, and binding is perfect for every $\pk$ in the support of $\KeyGen$. A malicious committer may choose a malformed $\pk$ unless keys are certifiable — folklore.

## Sketch

A hiding distinguisher sees exactly $(\pk, \Enc(\pk, m_b))$, so it is a CPA adversary with the same advantage. Perfect correctness makes $c$ determine its plaintext: openings $(m_0, r_0), (m_1, r_1)$ of $c$ with $m_0 \ne m_1$ would force $\Dec(\sk, c)$ to equal both.

## Notes

- Without perfect correctness or certifiable keys, PKE still yields commitments: PKE implies a [[hash-function#preimage-resistance-one-wayness|one-way function]] [[IL89 - One-way Functions are Essential for Complexity Based Cryptography|IL89]], hence a [[pseudorandom-generator|PRG]] [[HILL99 - A Pseudorandom Generator from Any One-Way Function|HILL99]], hence a two-message statistically binding commitment [[Naor91 - Bit commitment using pseudorandomness|Naor91]].
