---
type: reduction
status: draft
title: "PRG ⇒ Hash function"
aliases: []
id: red-prg-to-hash-function
kind: implication
hypotheses: [prg]
conclusion: hash-function
class: fully-black-box
model: standard
source: folklore
security-loss: ""
---

# PRG ⇒ Hash function

[[pseudorandom-generator|PRG]] implies [[hash-function|Hash function]] in the one-wayness sense only.

## Statement

Any [[pseudorandom-generator|PRG]] $G : \bits^n \to \bits^m$ with $m > n$ is a [[hash-function#preimage-resistance-one-wayness|one-way function]]: an inverter for $G$ with success probability $\varepsilon$ yields a PRG distinguisher with advantage at least $(1 - 2^{n-m})\varepsilon \ge \varepsilon/2$, since each $y$ in the image of $G$ has probability $2^{-m} \le 2^{n-m}\Pr_s[G(s) = y]$ under the uniform distribution — folklore. The conclusion is one-wayness only, not collision resistance.

## Sketch

The OWF is $G$ itself. Given an inverter $\calA$, the distinguisher $D(y)$ runs $\hat{x} \gets \calA(y)$ and outputs $1$ iff $G(\hat{x}) = y$: on $y = G(s)$ this happens with probability $\varepsilon$, on uniform $y$ with probability at most $2^{n-m}\varepsilon$.

## Notes

`class: fully-black-box`: The constructed OWF is $G$ itself, so the construction uses the hypothesis PRG only as an oracle; the security reduction runs any inverter once as an oracle and outputs $1$ iff the returned $\hat{x}$ satisfies $G(\hat{x}) = y$.
