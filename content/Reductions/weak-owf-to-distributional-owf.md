---
type: reduction
status: draft
title: Weak OWF ⇒ Distributional OWF
aliases: []
id: red-weak-owf-to-distributional-owf
kind: implication
hypotheses: [weak-owf]
conclusion: distributional-owf
class: fully-black-box
model: standard
source: folklore
security-loss: "none: the function is unchanged, and an algorithm whose output pair is at statistical distance Δ from (x, f(x)) inverts f with probability at least 1 − Δ"
rationale:
  class: "The construction is the identity on functions, and the reduction forwards any candidate distributional inverter unchanged as an inverter."
---

# Weak OWF ⇒ Distributional OWF

## Statement

Every [[hash-function#weak-one-wayness|weakly one-way function]] $f$ is [[hash-function#distributional-one-wayness|distributionally one-way]] with the same polynomial $p$: if every efficient inverter fails with probability at least $1/p(n)$ for all sufficiently large $n$, then for all efficient $\calA$ and all sufficiently large $n$,

$$
\Delta\big((x, f(x)),\, (\calA(f(x)), f(x))\big) \ge 1 - \Adv^{\mathrm{pr}}_{f,\calA}(n) \ge 1/p(n), \qquad x \getsr \bits^n,
$$

with $\Delta$ the statistical distance — folklore.

## Sketch

The event that the first component is a preimage of the second has probability $1$ under $(x, f(x))$ and probability $\Adv^{\mathrm{pr}}_{f,\calA}(n)$ under $(\calA(f(x)), f(x))$.
