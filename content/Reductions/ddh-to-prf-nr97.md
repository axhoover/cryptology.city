---
type: reduction
status: draft
title: DDH ⇒ PRF (Naor–Reingold)
aliases:
  - Naor-Reingold PRF
id: red-ddh-to-prf-nr97
kind: implication
hypotheses: [ddh]
conclusion: prf
class: fully-black-box
model: standard
source:
  - "[[NR97 - Number-Theoretic Constructions of Efficient Pseudo-Random Functions|NR97]]"
security-loss: "factor $n$ over the DDH advantage: one hybrid per input bit, the per-level multi-sample DDH being exact by random self-reducibility"
---

# DDH ⇒ PRF (Naor–Reingold)

[[decisional-diffie-hellman|DDH]] implies a [[pseudorandom-function|PRF]], by the
Naor–Reingold construction.

## Statement

[[decisional-diffie-hellman|DDH]] implies [[pseudorandom-function|PRF]]s: the Naor–Reingold function over $(\GG, g, p) \gets \GrGen(1^\secpar)$ with key $(a_0, a_1, \ldots, a_n) \getsr [p]^{n+1}$ maps $x \in \bits^n$ to $g^{a_0 \prod_{i : x_i = 1} a_i} \in \GG$, and is pseudorandom if DDH is hard for $\GrGen$ — [[NR97 - Number-Theoretic Constructions of Efficient Pseudo-Random Functions|NR97]].

## Sketch

A hybrid over the $n$ input bits replaces, one level at a time, the contribution of the first $i$ bits by an independent random function of the queried $i$-bit prefixes; a distinguisher between adjacent hybrids yields a DDH distinguisher, the polynomially many DDH samples needed at each level being derived from a single instance by random self-reducibility.

```pseudocode
\begin{algorithm}
\algname{Algorithm}
\caption{$\KeyGen(1^\secpar)$}
\begin{algorithmic}
\State $(\GG, g, p) \gets \GrGen(1^\secpar)$
\State $(a_0, a_1, \ldots, a_n) \getsr [p]^{n+1}$
\Return $k \gets (\GG, g, p, a_0, \ldots, a_n)$
\end{algorithmic}
\end{algorithm}

\begin{algorithm}
\algname{Algorithm}
\caption{$\Eval(k, x)$}
\begin{algorithmic}
\Return $g^{a_0 \prod_{i : x_i = 1} a_i}$
\Comment{$\calD = \bits^n$, $\calR = \GG$}
\end{algorithmic}
\end{algorithm}
```

## Notes

`class: fully-black-box`: one fixed construction from the group generator; each hybrid step (§ Sketch) turns the PRF distinguisher, used only as an oracle, into a DDH distinguisher.
