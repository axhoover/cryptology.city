---
type: reduction
status: draft
title: Subexponential LPN ⇒ Polylogarithmic-dimension LPN
aliases: []
id: red-subexponential-lpn-to-polylog-dimension-lpn
kind: implication
hypotheses: [subexponential-lpn]
conclusion: polylog-dimension-lpn
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on LPN instances, and the reduction forwards any distinguisher unchanged."
---

# Subexponential LPN ⇒ Polylogarithmic-dimension LPN

## Statement

If [[learning-parity-with-noise#subexponential-lpn|subexponential LPN]] holds with noise rate $\varepsilon$, then [[learning-parity-with-noise#polylogarithmic-dimension-lpn|polylogarithmic-dimension LPN]] holds with $\eta = \varepsilon$: for every function $g(n) = \Omega(\log^2 n)$, every polynomial-time adversary distinguishes $(\mathbf{A}, \mathbf{A}\mathbf{s} + \mathbf{e})$ from $(\mathbf{A}, \mathbf{r})$, for $\mathbf{A} \getsr \FF_2^{n \times g(n)}$, $\mathbf{s} \getsr \FF_2^{g(n)}$, $\mathbf{e} \getsr \mathrm{Ber}(\varepsilon)^n$ and $\mathbf{r} \getsr \FF_2^n$, with advantage negligible in $n$ — standard.

## Sketch

Take $c > 0$ with $g(n) \ge c \log^2 n$ for all large $n$, and set $k = g(n)$, so that $k \to \infty$ and $n \le 2^{\sqrt{k/c}}$. For $f(k) = \omega(\sqrt{k})$, a distinguisher running in time $n^d$ on the $n$ samples is then within the time and sample bound $2^{f(k)}$ for all large $k$, so its advantage is at most $2^{-f(k)} = n^{-\omega(1)}$.
