---
type: reduction
status: draft
title: "TDP ⇒ OWF"
aliases: []
id: red-tdp-to-hash-function
kind: implication
hypotheses: [tdp]
conclusion: owf
class: fully-black-box
model: standard
source: folklore
security-loss: "none: the reduction preserves the inverter's advantage"
---

# TDP ⇒ OWF

[[trapdoor-permutation|TDP]] implies [[hash-function#preimage-resistance-one-wayness|OWF]].

## Statement

A [[trapdoor-permutation|trapdoor permutation]] family $(\Gen, \Eval, \Invert)$ yields a [[hash-function#preimage-resistance-one-wayness|one-way function]] $g(r, x) := (f, \Eval(f, x))$, where $(f, \td) := \Gen(1^\secpar; r)$ — folklore.

## Sketch

$g$ discards $\td$. The reduction forwards its challenge $(f, y)$ to a $g$-inverter and returns the $x$ component of the answer: any preimage of $(f, y)$ under $g$ contains the unique $x$ with $\Eval(f, x) = y$, since $\Eval(f, \cdot)$ is a bijection.

## Notes

`class: fully-black-box`: One fixed construction calls $\Gen$ and $\Eval$ as oracles; one fixed reduction runs any $g$-inverter as an oracle.
