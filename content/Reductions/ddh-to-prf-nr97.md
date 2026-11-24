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
security-loss: "factor $n$ over the DDH advantage: one hybrid per input bit; hashing the output to one bit adds $\\tfrac{q}{2}\\,\\mathbb{E}[\\sqrt{2/p}]$ for $q$ queries"
rationale:
  class: "The construction uses only the group generator's output, and each hybrid step runs the PRF distinguisher only as an oracle to build a DDH distinguisher."
---

# DDH ⇒ PRF (Naor–Reingold)

## Statement

If [[decisional-diffie-hellman|DDH]] is hard for $\GrGen$, the Naor–Reingold function is pseudorandom for every polynomially bounded input length $n = n(\secpar)$ with $n = \omega(\log \secpar)$, so that the domain is superpolynomial: over $(\GG, g, p) \gets \GrGen(1^\secpar)$ with key $(a_0, a_1, \ldots, a_n) \getsr [p]^{n+1}$, it maps $x \in \bits^n$ to $g^{a_0 \prod_{i : x_i = 1} a_i} \in \GG$, and for all efficient $\calA$ with oracle access, the advantage in distinguishing it from a uniformly random function $\bits^n \to \GG$ is negligible — [[NR97 - Number-Theoretic Constructions of Efficient Pseudo-Random Functions|NR97]].

The range $\GG$ is sampled with the key, while the range $\calR_\secpar$ of a [[pseudorandom-function|PRF]] depends on $\secpar$ alone. If every output of $\GrGen(1^\secpar)$ describes the same group $\GG_\secpar$, the Naor–Reingold function is a PRF with $\calD_\secpar = \bits^n$ and $\calR_\secpar = \GG_\secpar$. For every $\GrGen$, hashing its output to one bit gives a PRF with $\calD_\secpar = \bits^n$ and $\calR_\secpar = \bits$: let $L = L(\secpar)$ be a polynomial bound on the length of the encodings of group elements and $e(y) := y \,\|\, 1 \,\|\, 0^{L - |y|} \in \bits^{L+1}$, add $v \getsr \bits^{L+1}$ to the key, and set $\Eval(k, x) := \langle v,\, e(g^{a_0 \prod_{i : x_i = 1} a_i}) \rangle \bmod 2$ — standard.

## Sketch

Hybrid $i$ answers $x$ with $g^{R_i(x_1 \cdots x_i) \prod_{j > i,\, x_j = 1} a_j}$ for a random function $R_i$ on $\bits^i$, so hybrid $0$ is the Naor–Reingold function and hybrid $n$ a random function. A distinguisher between hybrids $i$ and $i+1$ tells polynomially many DDH tuples sharing the exponent $a_{i+1}$ from random ones, and random self-reducibility derives such tuples from a single DDH instance with no further multiplicative loss.

For the hashed function, first replace the Naor–Reingold function by a uniformly random $R : \bits^n \to \GG$; the answers to $q$ distinct queries are then $\langle v, e(Y_j) \rangle \bmod 2$ for independent uniform $Y_j \in \GG$. The maps $z \mapsto \langle v, z \rangle \bmod 2$ on $\bits^{L+1}$ are 2-universal and $e$ is injective, so by the [[leftover-hash-lemma|leftover hash lemma]] with $m = 1$ and $k = \log_2 p$ each pair $(v, \langle v, e(Y_j) \rangle \bmod 2)$ is within statistical distance $\tfrac12\sqrt{2/p}$ of $(v, U_1)$, and replacing the answers by uniform bits one at a time puts all $q$ within $\tfrac{q}{2}\sqrt{2/p}$ of uniform. Over the coins of $\GrGen$ this is at most $q\sqrt{\mathbb{E}[1/p]}$ by Jensen's inequality, which is negligible because DDH hardness forces $\mathbb{E}[1/p]$ to be negligible ([[decisional-diffie-hellman#assumption|DDH]]) — standard.

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
