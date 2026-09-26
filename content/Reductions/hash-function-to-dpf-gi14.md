---
type: reduction
status: draft
title: "Hash function ⇒ DPF"
aliases: []
id: red-hash-function-to-dpf-gi14
kind: implication
hypotheses: [hash-function]
conclusion: dpf
class: fully-black-box
model: standard
source:
  - "[[GI14 - Distributed Point Functions and Their Applications|GI14]]"
security-loss: ""
---

# Hash function ⇒ DPF

[[hash-function|One-way functions]] imply [[distributed-point-function|DPF]].

## Statement

Any [[pseudorandom-generator|PRG]] — hence, via [[HILL99 - A Pseudorandom Generator from Any One-Way Function|HILL99]], any [[hash-function|OWF]] — yields a two-party [[distributed-point-function|DPF]] on domain $[N]$ with key length $\poly(\secpar, \log N)$ [[GI14 - Distributed Point Functions and Their Applications|GI14]].

## Sketch

In the tree construction of [[BGI15 - Function Secret Sharing|BGI15]], the two keys define GGM-style PRG evaluation trees that agree on every node off the path to $\alpha$ and differ along it; per-level correction words keep the two evaluations equal off-path, so the parties' outputs differ exactly at leaf $\alpha$, where the difference is $\beta$.

## Notes

`class: fully-black-box`: The GI14 construction (and the improved BGI15 tree construction) invokes a length-doubling PRG only as an oracle inside a recursive key expansion, and the hybrid security proof uses any distinguisher of a single key only as an oracle to break the PRG; the OWF-to-PRG step (HILL99) is likewise fully black-box.

- Key length reduced to $O(\secpar \log N)$ via a GGM-style tree construction — [[BGI15 - Function Secret Sharing|BGI15]].
