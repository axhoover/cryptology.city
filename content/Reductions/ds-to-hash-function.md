---
type: reduction
status: draft
title: "DS ⇒ OWF"
aliases: []
id: red-ds-to-hash-function
kind: implication
hypotheses: [ds]
conclusion: owf
class: fully-black-box
model: standard
source:
  - "[[Rom90 - One-way functions are necessary and sufficient for secure signatures|Rom90]]"
security-loss: ""
rationale:
  class: "The one-way function runs the key generator on its input coins and outputs the verification key, using the scheme only as an oracle, and one fixed reduction runs any inverter once as an oracle and signs under the recovered key."
---

# DS ⇒ OWF

## Statement

If a perfectly correct [[digital-signature#existential-unforgeability|EUF-CMA]]-unforgeable [[digital-signature|signature scheme]] exists, so does a [[hash-function#preimage-resistance-one-wayness|one-way function]]: $f(r) := \vk$, where $(\sk, \vk) := \KeyGen(1^\secpar; r)$, is one-way — [[Rom90 - One-way functions are necessary and sufficient for secure signatures|Rom90]].

## Sketch

An inverter returns $r'$ with $\KeyGen(1^\secpar; r') = (\sk', \vk)$, and perfect correctness makes $\Sign(\sk', m)$ verify under $\vk$ for every $m$: a forgery with no signing query. A forger therefore succeeds with at least the inverter's probability, which unforgeability makes negligible.

## Notes

- Conversely, one-way functions give EUF-CMA-unforgeable signatures ([[hash-function-to-ds|OWF ⇒ DS]]) — [[Rom90 - One-way functions are necessary and sufficient for secure signatures|Rom90]].
