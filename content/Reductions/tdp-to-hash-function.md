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
security-loss: "additive: the sampler's statistical distance ν"
rationale:
  class: "One fixed construction calls $\\Gen$, $\\mathsf{Samp}$ and $\\Eval$ only as oracles, and one fixed reduction runs any inverter of $g$ once as an oracle and applies $\\mathsf{Samp}$ to its answer."
---

# TDP ⇒ OWF

## Statement

A [[trapdoor-permutation|trapdoor permutation]] family $(\Gen, \mathsf{Samp}, \Eval, \Invert)$ yields a [[hash-function#preimage-resistance-one-wayness|one-way function]] $g(r, s) := (f, \Eval(f, \mathsf{Samp}(f; s)))$, where $(f, \td) := \Gen(1^\secpar; r)$ — folklore.

## Sketch

$g$ discards $\td$. The reduction forwards its challenge $(f, y)$ to a $g$-inverter, receives $(r', s')$, and returns $\mathsf{Samp}(f; s')$, which is the unique preimage of $y$ under the bijection $\Eval(f, \cdot)$ whenever $g(r', s') = (f, y)$. The challenge $y = \Eval(f, x)$ for uniform $x \in \calD$ is within $\nu$ of $\Eval(f, \mathsf{Samp}(f; s))$ for uniform $s$, so the reduction succeeds with probability at least the inverter's success minus $\nu$.
