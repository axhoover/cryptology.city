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
rationale:
  class: "One fixed construction calls $\\Gen$ and $\\Eval$ only as oracles, and one fixed reduction runs any inverter of $g$ once as an oracle."
---

# TDP ⇒ OWF

## Statement

A [[trapdoor-permutation|trapdoor permutation]] family $(\Gen, \Eval, \Invert)$ yields a [[hash-function#preimage-resistance-one-wayness|one-way function]] $g(r, x) := (f, \Eval(f, x))$, where $(f, \td) := \Gen(1^\secpar; r)$ — folklore.

## Sketch

$g$ discards $\td$. The reduction forwards its challenge $(f, y)$ to a $g$-inverter and returns the $x$ component of the answer, which is the unique preimage of $y$ under the bijection $\Eval(f, \cdot)$.
