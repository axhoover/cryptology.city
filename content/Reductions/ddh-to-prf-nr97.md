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
security-loss: "factor $n$ over the DDH advantage: one hybrid per input bit"
rationale:
  class: "The construction uses only the group generator's output, and each hybrid step runs the PRF distinguisher only as an oracle to build a DDH distinguisher."
---

# DDH ⇒ PRF (Naor–Reingold)

## Statement

If [[decisional-diffie-hellman|DDH]] is hard for $\GrGen$, the Naor–Reingold function is a [[pseudorandom-function|PRF]]: over $(\GG, g, p) \gets \GrGen(1^\secpar)$ with key $(a_0, a_1, \ldots, a_n) \getsr [p]^{n+1}$, it maps $x \in \bits^n$ to $g^{a_0 \prod_{i : x_i = 1} a_i} \in \GG$ — [[NR97 - Number-Theoretic Constructions of Efficient Pseudo-Random Functions|NR97]].

## Sketch

Hybrid $i$ answers $x$ with $g^{R_i(x_1 \cdots x_i) \prod_{j > i,\, x_j = 1} a_j}$ for a random function $R_i$ on $\bits^i$, so hybrid $0$ is the Naor–Reingold function and hybrid $n$ a random function. A distinguisher between hybrids $i$ and $i+1$ tells polynomially many DDH tuples sharing the exponent $a_{i+1}$ from random ones, and random self-reducibility derives such tuples from a single DDH instance with no further multiplicative loss.

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
