---
type: reduction
status: draft
title: OWF ⇒ Distributional OWF
aliases: []
id: red-owf-to-distributional-owf
kind: implication
hypotheses: [owf]
conclusion: distributional-owf
class: fully-black-box
model: standard
source: folklore
security-loss: "none: the function is unchanged, and an algorithm whose output pair is at statistical distance Δ from (x, f(x)) inverts f with probability at least 1 − Δ"
rationale:
  class: "The construction is the identity on functions, and the reduction forwards any candidate distributional inverter unchanged as an inverter."
---

# OWF ⇒ Distributional OWF

## Statement

Every [[hash-function#preimage-resistance-one-wayness|one-way function]] $f$ is [[hash-function#distributional-one-wayness|distributionally one-way]] with the constant polynomial $p := 2$: for all efficient $\calA$ and all sufficiently large $n$,

$$
\Delta\big((x, f(x)),\, (\calA(f(x)), f(x))\big) \ge 1 - \Adv^{\mathrm{pr}}_{f,\calA}(n) \ge 1/2, \qquad x \getsr \bits^n,
$$

with $\Delta$ the statistical distance — folklore.

## Sketch

The event that the first component is a preimage of the second has probability $1$ under $(x, f(x))$ and probability $\Adv^{\mathrm{pr}}_{f,\calA}(n)$ under $(\calA(f(x)), f(x))$, which bounds the distance below by $1 - \Adv^{\mathrm{pr}}_{f,\calA}(n)$. The advantage is negligible, so it is at most $1/2$ for all sufficiently large $n$.

## Notes

- The argument uses only that every efficient inverter fails with probability at least $1/p(n)$ for all sufficiently large $n$, so every weakly one-way function is distributionally one-way with the same $p$ ([[weak-owf-to-distributional-owf|Weak OWF ⇒ Distributional OWF]]) — folklore.
- If a [[one-way-permutation|one-way permutation]] $\pi$ on $\bits^n$ exists, a distributionally one-way function need not be weakly one-way: let $f(x, 0) := x$ and $f(x, 1) := \pi(x)$. Every $y$ has exactly the two preimages $(y, 0)$ and $(\pi^{-1}(y), 1)$, so $f$ is inverted with probability $1$; but $y = f(x, b)$ is uniform, a uniform preimage of it is $(\pi^{-1}(y), 1)$ with probability $1/2$, and every efficient $\calA$ outputs that preimage with negligible probability, so $f$ is distributionally one-way with $p := 3$ — folklore.
- The converse holds for existence only, through a different function: [[distributional-owf-to-owf-il89|distributional one-way functions yield one-way functions]] — [[IL89 - One-way Functions are Essential for Complexity Based Cryptography|IL89]].
