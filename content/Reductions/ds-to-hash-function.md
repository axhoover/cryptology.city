---
type: reduction
status: draft
title: "DS ⇒ Hash function"
aliases: []
id: red-ds-to-hash-function
kind: implication
hypotheses: [ds]
conclusion: hash-function
class: fully-black-box
model: standard
source:
  - "[[Rom90 - One-way functions are necessary and sufficient for secure signatures|Rom90]]"
security-loss: ""
---

# DS ⇒ Hash function

A perfectly correct [[digital-signature|DS]] scheme implies a one-way function ([[hash-function#preimage-resistance-one-wayness|OWF]]).

## Statement

If a perfectly correct EUF-CMA-secure [[digital-signature|DS]] scheme exists then so does a one-way function ([[hash-function#preimage-resistance-one-wayness|OWF]]): $f(r) := \vk$, where $(\sk, \vk) := \KeyGen(1^\secpar; r)$, is one-way — [[Rom90 - One-way functions are necessary and sufficient for secure signatures|Rom90]].

## Sketch

An inverter for $f$ returns $r'$ with $\KeyGen(1^\secpar; r') = (\sk', \vk)$; perfect correctness makes $\Sign(\sk', m)$ verify under $\vk$ for every $m$, a forgery with no signing query. The inverter's success probability therefore lower-bounds a forger's, which unforgeability makes negligible.

## Notes

`class: fully-black-box`: one fixed construction ($f$ runs $\KeyGen$ on its input coins and outputs $\vk$) uses the scheme only as an oracle; one fixed reduction runs any inverter once as an oracle and signs under the recovered key. RTV04 fully-black-box shape.
