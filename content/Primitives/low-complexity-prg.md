---
type: primitive
status: stub
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

TODO: syntax and security definition.

# Variations

## Polynomial-stretch PRG in NC0

A _polynomial-stretch_ PRG in $\mathrm{NC}^0$ is a PRG $G : \bits^n \to \bits^{m(n)}$ in $\mathrm{NC}^0$ with $m(n) = n^{1+\tau}$ for a constant $\tau > 0$.

### Sub-exponential security

A polynomial-stretch PRG in $\mathrm{NC}^0$ is **sub-exponentially secure** if there is a constant $\varepsilon > 0$ such that for all sufficiently large $n$ every distinguisher of size at most $2^{n^{\varepsilon}}$ has advantage at most $2^{-n^{\varepsilon}}$.

<!-- BEGIN GENERATED participates-in fba1f53a0ecd -->

## Participates in

**Builds on Low-complexity pseudorandom generator**

- [[ddh-and-lpn-and-lwe-and-nc1-prg-to-io-jls21|Sub-exponential SXDH + LWE + LPN + NC0-PRG ⇒ iO]] (via [[low-complexity-prg#sub-exponential-security|Sub-exponential security]])
- [[subexponential-prg-in-nc0-to-prg-in-nc0|Sub-exponentially secure NC0 PRG ⇒ NC0 PRG]] (via [[low-complexity-prg#sub-exponential-security|Sub-exponential security]])

**Produces Low-complexity pseudorandom generator**

- [[prg-in-nc1-to-low-complexity-prg-nc0-aik06|PRG in NC1 ⇒ PRG in NC0 (AIK)]]
- [[subexponential-prg-in-nc0-to-prg-in-nc0|Sub-exponentially secure NC0 PRG ⇒ NC0 PRG]] (via [[low-complexity-prg#polynomial-stretch-prg-in-nc0|Polynomial-stretch PRG in NC0]])

<!-- END GENERATED participates-in -->
