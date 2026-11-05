---
type: primitive
status: draft
aliases:
  - PRG in NC0
  - NC0-PRG
  - Local PRG
  - Low-complexity pseudorandom generator
title: Low-complexity pseudorandom generator
id: low-complexity-prg-nc0
variants:
  prg-in-nc0: "#polynomial-stretch-prg-in-nc0"
  subexponential-prg-in-nc0: "#sub-exponential-security"
unlisted: true
---

# Low-complexity pseudorandom generator

A low-complexity PRG is a [[pseudorandom-generator|pseudorandom generator]] in $\mathrm{NC}^0$: each output bit depends on a constant number of input bits. For PRGs computable in $\mathrm{NC}^1$, see [PRG in $\mathrm{NC}^1$](pseudorandom-generator-in-nc1). The existence of a Boolean PRG in $\mathrm{NC}^0$ (not $\mathrm{NC}^1$) with stretch $n^{1+\tau}$ for a constant $\tau > 0$ is one of the four sub-exponentially hard assumptions from which [[JLS21 - Indistinguishability obfuscation from well-founded assumptions|JLS21]] builds indistinguishability obfuscation.

## Syntax

A PRG in $\mathrm{NC}^0$ with locality $d$ is a family $G = \{G_n : \bits^n \to \bits^{m(n)}\}$ of functions, $m(n) > n$, computable in time $\poly(n)$, such that every output bit of $G_n$ depends on at most $d$ input bits for a constant $d$ independent of $n$. Its **stretch** is $m(n)$.

## Properties

### Pseudorandomness

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{prg}}_{G,\calA}(n)$}
\begin{algorithmic}
\State $x \getsr \bits^n$; $b \getsr \bits$
\State $r_0 \gets G_n(x)$; $r_1 \getsr \bits^{m(n)}$
\State $b' \gets \calA(1^n, r_b)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

$G$ is **pseudorandom** if for all efficient $\calA$,

$$
\Adv^{\mathrm{prg}}_{G,\calA}(n) := \left|2\Pr\!\left[\Game^{\mathrm{prg}}_{G,\calA}(n) = 1\right] - 1\right|
$$

is negligible in $n$.

# Variations

## Polynomial-stretch PRG in NC0

A _polynomial-stretch_ PRG in $\mathrm{NC}^0$ is a PRG $G : \bits^n \to \bits^{m(n)}$ in $\mathrm{NC}^0$ with $m(n) = n^{1+\tau}$ for a constant $\tau > 0$.

### Sub-exponential security

A polynomial-stretch PRG in $\mathrm{NC}^0$ is **sub-exponentially secure** if there is a constant $\varepsilon > 0$ such that for all sufficiently large $n$ every distinguisher of size at most $2^{n^{\varepsilon}}$ has advantage at most $2^{-n^{\varepsilon}}$.

# Other results

- Goldreich's candidate: a sequence of $d$-tuples $S_1, \ldots, S_m \in [n]^d$ and a predicate $P : \bits^d \to \bits$ define $G(x)_i = P(x_{S_i})$, with $x_{S_i} \in \bits^d$ the bits of $x$ at the indices of $S_i$, in order; for $m = n$, a highly expanding set system and a non-degenerate $P$, it was proposed as a candidate one-way function — [[Gol00 - Candidate One-Way Functions Based on Expander Graphs|Gol00]].
- Conditional on the claimed algorithm of [[Ope26 - The Exponential Time Hypothesis is False|Ope26]] (see [[exponential-time-hypothesis#attacks|ETH]]): for every fixed $d$, every $G : \bits^n \to \bits^m$ whose output bits each depend on at most $d$ input bits can be inverted on every point of its image, and $|G^{-1}(y)|$ computed exactly, in deterministic time $(n + m)^{O_d(1)} 2^{O_d(n (\log\log n)^2 / \sqrt{\log n})}$ and space $(n + m)^{O_d(1)}$ — [[Ope26 - The Exponential Time Hypothesis is False|Ope26]] (Corollary C.2). For $m > n$, testing $|G^{-1}(y)| > 0$ distinguishes $G(x)$ from uniform $y$ with advantage at least $1 - 2^{n-m} \ge 1/2$, so no PRG in $\mathrm{NC}^0$ is secure against distinguishers running in time $2^{\varepsilon n}$ for a constant $\varepsilon > 0$. The running time is $2^{n^{1-o(1)}}$, so sub-exponential security as defined above is unaffected.

<!-- BEGIN GENERATED participates-in fba1f53a0ecd -->

## Participates in

**Builds on Low-complexity pseudorandom generator**

- [[ddh-and-lpn-and-lwe-and-nc1-prg-to-io-jls21|Sub-exponential SXDH + LWE + LPN + NC0-PRG ⇒ iO]] (via [[low-complexity-prg#sub-exponential-security|Sub-exponential security]])
- [[subexponential-prg-in-nc0-to-prg-in-nc0|Sub-exponentially secure NC0 PRG ⇒ NC0 PRG]] (via [[low-complexity-prg#sub-exponential-security|Sub-exponential security]])

**Produces Low-complexity pseudorandom generator**

- [[prg-in-nc1-to-low-complexity-prg-nc0-aik06|PRG in NC1 ⇒ PRG in NC0 (AIK)]]
- [[subexponential-prg-in-nc0-to-prg-in-nc0|Sub-exponentially secure NC0 PRG ⇒ NC0 PRG]] (via [[low-complexity-prg#polynomial-stretch-prg-in-nc0|Polynomial-stretch PRG in NC0]])

<!-- END GENERATED participates-in -->
