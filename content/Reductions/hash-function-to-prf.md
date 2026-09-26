---
type: reduction
status: draft
title: "Hash function ⇒ PRF"
aliases: []
id: red-hash-function-to-prf
kind: implication
hypotheses: [hash-function]
conclusion: prf
class: fully-black-box
model: standard
source:
  - "[[HILL99 - A Pseudorandom Generator from Any One-Way Function|HILL99]]"
  - "[[GGM86 - How to construct random functions|GGM86]]"
security-loss: ""
---

# Hash function ⇒ PRF

[[hash-function|Hash function]] implies [[pseudorandom-function|PRF]].

## Statement

If [[hash-function|one-way functions]] exist, then [[pseudorandom-function|PRFs]] exist: any one-way function yields a [[pseudorandom-generator|PRG]] [[HILL99 - A Pseudorandom Generator from Any One-Way Function|HILL99]], and the GGM tree turns a length-doubling PRG into a PRF [[GGM86 - How to construct random functions|GGM86]].

## Sketch

GGM defines $\Eval(k, x)$ by walking a binary tree: start from $k$ and, on bit $x_i$, keep the left or right half of the PRG's output; a hybrid over tree levels reduces any PRF distinguisher to a PRG distinguisher. HILL build the PRG from any one-way function via the Goldreich–Levin hard-core bit and pairwise-independent hashing.

## Notes

`class: fully-black-box`: Both links are fully black-box: HILL99's PRG evaluates the one-way function only as an oracle and its reduction runs any distinguisher as an oracle; the GGM tree invokes the PRG as an oracle and its hybrid reduction runs any PRF distinguisher as an oracle. Fully-black-box reductions compose (RTV04).
