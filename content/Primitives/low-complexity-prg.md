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
unlisted: true
---

# Low-complexity pseudorandom generator

A low-complexity PRG is a [[pseudorandom-generator|pseudorandom generator]] in $\mathrm{NC}^0$: each output bit depends on a constant number of input bits. For PRGs computable in $\mathrm{NC}^1$, see [[pseudorandom-generator-in-nc1|PRG in $\mathrm{NC}^1$]]. The existence of a Boolean PRG in $\mathrm{NC}^0$ (not $\mathrm{NC}^1$) with stretch $n^{1+\tau}$ for a constant $\tau > 0$ is one of the four sub-exponentially hard assumptions from which [[JLS21 - Indistinguishability obfuscation from well-founded assumptions|JLS21]] builds indistinguishability obfuscation.

TODO: syntax and security definition.

# Variations

## Polynomial-stretch PRG in NC0

A _polynomial-stretch_ PRG in $\mathrm{NC}^0$ is a PRG $G : \bits^n \to \bits^{m(n)}$ in $\mathrm{NC}^0$ with $m(n) = n^{1+\tau}$ for a constant $\tau > 0$.

<!-- BEGIN GENERATED participates-in 168ffc4796bf -->

## Participates in

**Builds on Low-complexity pseudorandom generator**

- [[ddh-and-lpn-and-lwe-and-nc1-prg-to-io-jls21|SXDH + LWE + LPN + NC0-PRG ⇒ iO]] (via [[low-complexity-prg#polynomial-stretch-prg-in-nc0|prg-in-nc0]])

<!-- END GENERATED participates-in -->
