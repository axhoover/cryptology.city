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
security-loss: "factor $n$: one hybrid per input bit"
rationale:
  class: "The construction uses only the group generator's output, and each hybrid step runs the PRF distinguisher only as an oracle to build a DDH distinguisher."
---

# DDH ⇒ PRF (Naor–Reingold)

## Statement

If [[decisional-diffie-hellman|DDH]] is hard for $\GrGen$, the Naor–Reingold function is a [[pseudorandom-function|PRF]]: over $(\GG, g, p) \gets \GrGen(1^\secpar)$ with key $(a_0, a_1, \ldots, a_n) \getsr [p]^{n+1}$, it maps $x \in \bits^n$ to $g^{a_0 \prod_{i : x_i = 1} a_i} \in \GG$ — [[NR97 - Number-Theoretic Constructions of Efficient Pseudo-Random Functions|NR97]].

## Sketch

Hybrid $i$ replaces the contribution of the first $i$ input bits by an independent random function of the queried $i$-bit prefixes. A distinguisher between adjacent hybrids yields a DDH distinguisher, the polynomially many DDH samples sharing one exponent being derived from a single instance by random self-reducibility.

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

- The loss is a factor $n$ in the DDH advantage, one hybrid per input bit: random self-reducibility reduces the multi-sample DDH needed at each level to DDH with no further multiplicative loss — [[NR97 - Number-Theoretic Constructions of Efficient Pseudo-Random Functions|NR97]].
