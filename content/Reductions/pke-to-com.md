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
---

# PKE ⇒ COM

[[public-key-encryption|PKE]] implies [[commitment-scheme|COM]].

## Statement

Committing to $m$ as $(\pk, c)$, where $(\sk, \pk) \gets \KeyGen(1^\secpar)$ and $c \gets \Enc(\pk, m; r)$, and opening with $(m, r)$, turns any perfectly correct CPA-secure [[public-key-encryption|PKE]] into a non-interactive [[commitment-scheme|commitment]]: hiding reduces tightly to CPA security; binding holds because perfect correctness makes $c$ determine its plaintext, so openings $(m_0, r_0), (m_1, r_1)$ of $c$ with $m_0 \ne m_1$ would force $\Dec(\sk, c)$ to equal both. Binding covers only $\pk$ in the support of $\KeyGen$; a malicious committer may choose a malformed $\pk$ unless keys are certifiable — folklore.

## Notes

`class: fully-black-box`: the commitment algorithms call $\KeyGen$ and $\Enc$ only as oracles; the hiding reduction runs any commitment distinguisher as an oracle and is a CPA adversary with the same advantage; binding is information-theoretic given perfect correctness and a well-formed key, so needs no reduction. Fixed construction, fixed reduction.

- Without perfect correctness or certifiable keys, PKE still yields commitments: PKE implies a one-way function [[IL89 - One-way Functions are Essential for Complexity Based Cryptography|IL89]], hence a [[pseudorandom-generator|PRG]] [[HILL99 - A Pseudorandom Generator from Any One-Way Function|HILL99]], hence a two-message statistically binding commitment [[Naor91 - Bit commitment using pseudorandomness|Naor91]].
