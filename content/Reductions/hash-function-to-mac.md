---
type: reduction
status: draft
title: "Hash function ⇒ MAC"
aliases: []
id: red-hash-function-to-mac
kind: implication
hypotheses: [hash-function]
conclusion: mac
class: fully-black-box
model: standard
source:
  - "[[HILL99 - A Pseudorandom Generator from Any One-Way Function|HILL99]]"
  - "[[GGM86 - How to construct random functions|GGM86]]"
security-loss: ""
---

# Hash function ⇒ MAC

[[hash-function|Hash function]] implies [[message-authentication-code|MAC]].

## Statement

If [[hash-function|one-way functions]] exist, then UF-CMA-secure [[message-authentication-code|MACs]] exist: any one-way function yields a [[pseudorandom-generator|PRG]] [[HILL99 - A Pseudorandom Generator from Any One-Way Function|HILL99]], the GGM tree turns a length-doubling PRG into a [[pseudorandom-function|PRF]] [[GGM86 - How to construct random functions|GGM86]], and $\Tag(k, m) := \Eval(k, m)$ with canonical verification is a UF-CMA MAC — the last step is folklore.

## Sketch

A valid tag on an unqueried message $\hat{m}$ predicts $\Eval(k, \hat{m})$, which a uniformly random function into $\calR$ permits with probability $1/|\calR|$, so a forger with success probability $\varepsilon$ is a PRF distinguisher with advantage at least $\varepsilon - 1/|\calR|$.

## Notes

`class: fully-black-box`: Each link is fully black-box: HILL99's PRG evaluates the one-way function only as an oracle and its reduction runs any distinguisher as an oracle; the GGM tree and the PRF-as-MAC step likewise treat hypothesis and adversary as oracles. Fully-black-box reductions compose (RTV04).
