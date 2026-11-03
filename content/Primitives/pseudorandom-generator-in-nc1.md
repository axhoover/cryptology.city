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

A pseudorandom generator whose output is computable by a logarithmic-depth boolean circuit family ($\mathrm{NC}^1$). The JLS21 iO construction instead assumes a Boolean PRG in $\mathrm{NC}^0$ with stretch $n^{1+\tau}$ for a constant $\tau > 0$ — [[JLS21 - Indistinguishability obfuscation from well-founded assumptions|JLS21]].

## Syntax

A PRG in $\mathrm{NC}^1$ is a [[pseudorandom-generator|PRG]] $G = \{G_n : \bits^n \to \bits^{m(n)}\}$, $m(n) > n$, computable in time $\poly(n)$ by Boolean circuits of fan-in $2$ and depth $O(\log n)$.

## Properties

### Pseudorandomness

$G$ is **pseudorandom** if for all efficient $\calA$ the advantage in the [[pseudorandom-generator#pseudorandomness|PRG game]] with seed $x \getsr \bits^n$ is negligible in $n$.

# Other results

- Every PRG in $\mathrm{NC}^1$, and more generally in $\oplus\mathrm{L}/\mathrm{poly}$, compiles into a PRG in $\mathrm{NC}^0$ with locality $4$ and the same additive stretch ([[prg-in-nc1-to-low-complexity-prg-nc0-aik06|PRG in NC1 ⇒ PRG in NC0]]) — [[AIK06 - Cryptography in NC0|AIK06]].
- The Naor–Reingold pseudorandom function is computable in $\mathrm{TC}^0 \subseteq \mathrm{NC}^1$ and pseudorandom if [[decisional-diffie-hellman|DDH]] holds — [[NR97 - Number-Theoretic Constructions of Efficient Pseudo-Random Functions|NR97]]; evaluated at fixed inputs, it gives a PRG in $\mathrm{NC}^1$ — standard.

<!-- BEGIN GENERATED participates-in abd479b29d98 -->

## Participates in

**Builds on Pseudorandom generator in $\mathrm{NC}^1$**

- [[prg-in-nc1-to-low-complexity-prg-nc0-aik06|PRG in NC1 ⇒ PRG in NC0 (AIK)]]

<!-- END GENERATED participates-in -->
