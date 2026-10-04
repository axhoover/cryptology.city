---
type: reduction
status: draft
title: "PRG ⇒ OWF"
aliases: []
id: red-prg-to-hash-function
kind: implication
hypotheses: [prg]
conclusion: owf
class: fully-black-box
model: standard
source: folklore
security-loss: ""
rationale:
  class: "The one-way function is the PRG itself, used only as an oracle, and the reduction runs any inverter once as an oracle and outputs 1 iff the returned preimage maps to its input."
---

# PRG ⇒ OWF

## Statement

Every [[pseudorandom-generator|PRG]] $G : \bits^n \to \bits^m$ with $m > n$ is a [[hash-function#preimage-resistance-one-wayness|one-way function]]: an efficient inverter for $G$ with success probability $\varepsilon$ yields an efficient PRG distinguisher with advantage at least $(1 - 2^{n-m})\varepsilon \ge \varepsilon/2$ — folklore.

## Sketch

Given an inverter $\calA$, the distinguisher $D(y)$ runs $\hat{x} \gets \calA(y)$ and outputs $1$ iff $G(\hat{x}) = y$. On $y = G(s)$ it outputs $1$ with probability $\varepsilon$; on uniform $y$ with probability at most $2^{n-m}\varepsilon$, since each $y$ in the image of $G$ has probability $2^{-m} \le 2^{n-m}\Pr_s[G(s) = y]$.

## Notes

- Conversely, every one-way function yields a PRG ([[owf-to-prg-hill99|OWF ⇒ PRG]]) — [[HILL99 - A Pseudorandom Generator from Any One-Way Function|HILL99]].
