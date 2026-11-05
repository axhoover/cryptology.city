---
type: primitive
status: draft
aliases:
  - NC1-PRG
  - Pseudorandom generator in $\mathrm{NC}^1$
title: Pseudorandom generator in $\mathrm{NC}^1$
id: prg-in-nc1
unlisted: true
---

# Pseudorandom generator in $\mathrm{NC}^1$

A PRG in $\mathrm{NC}^1$ is a [[pseudorandom-generator|pseudorandom generator]] computable by polynomial-size Boolean circuits of bounded fan-in and logarithmic depth.

## Syntax

A PRG in $\mathrm{NC}^1$ is a [[pseudorandom-generator|PRG]] $G = \{G_n : \bits^n \to \bits^{m(n)}\}$, $m(n) > n$, computable in time $\poly(n)$ by Boolean circuits of fan-in $2$ and depth $O(\log n)$.

## Properties

### Pseudorandomness

Index the family by its seed length, $n = \secpar$.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{prg}}_{G,\calA}(\secpar)$}
\begin{algorithmic}
\State $x \getsr \bits^{\secpar}$; $b \getsr \bits$
\State $r_0 \gets G_\secpar(x)$; $r_1 \getsr \bits^{m(\secpar)}$
\State $b' \gets \calA(1^\secpar, r_b)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

$G$ is **pseudorandom** if for all efficient $\calA$,

$$
\Adv^{\mathrm{prg}}_{G,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{prg}}_{G,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible.

# Other results

- Every PRG in $\mathrm{NC}^1$, and more generally in $\oplus\mathrm{L}/\mathrm{poly}$, compiles into a PRG in $\mathrm{NC}^0$ with locality $4$ and the same additive stretch ([[prg-in-nc1-to-low-complexity-prg-nc0-aik06|PRG in NC1 ⇒ PRG in NC0]]) — [[AIK06 - Cryptography in NC0|AIK06]].
- The Naor–Reingold [[pseudorandom-function|pseudorandom function]] is computable in $\mathrm{TC}^0 \subseteq \mathrm{NC}^1$ and pseudorandom if [[decisional-diffie-hellman|DDH]] holds ([[ddh-to-prf-nr97|DDH ⇒ PRF]]) — [[NR97 - Number-Theoretic Constructions of Efficient Pseudo-Random Functions|NR97]]. PRGs in $\mathrm{NC}^1$ are implied by most number-theoretic or algebraic intractability assumptions commonly used in cryptography — [[AIK06 - Cryptography in NC0|AIK06]].

<!-- BEGIN GENERATED participates-in abd479b29d98 -->

## Participates in

**Builds on Pseudorandom generator in $\mathrm{NC}^1$**

- [[prg-in-nc1-to-low-complexity-prg-nc0-aik06|PRG in NC1 ⇒ PRG in NC0 (AIK)]]

<!-- END GENERATED participates-in -->
