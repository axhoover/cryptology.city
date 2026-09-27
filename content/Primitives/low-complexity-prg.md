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
  prg-in-nc0: "#prg-in-nc0"
unlisted: true
---

# Low-complexity pseudorandom generator

A low-complexity PRG is a [[pseudorandom-generator|pseudorandom generator]] in $\mathrm{NC}^0$: each output bit depends on a constant number of input bits. For PRGs computable in $\mathrm{NC}^1$, see [[pseudorandom-generator-in-nc1|PRG in $\mathrm{NC}^1$]]. The existence of a Boolean PRG in $\mathrm{NC}^0$ (not $\mathrm{NC}^1$) with stretch $n^{1+\tau}$ for a constant $\tau > 0$ is one of the four sub-exponentially hard assumptions from which [[JLS21 - Indistinguishability obfuscation from well-founded assumptions|JLS21]] builds indistinguishability obfuscation.

TODO: syntax and security definition.

# Variations

## PRG in NC0

A PRG $G : \bits^n \to \bits^{m(n)}$ is in $\mathrm{NC}^0$, or _local_, if each output bit depends on $O(1)$ input bits. Its stretch is polynomial if $m(n) = n^{1+\tau}$ for a constant $\tau > 0$.

<!-- BEGIN GENERATED participates-in fb3681663b85 -->

## Participates in

**Builds on Low-complexity pseudorandom generator**

- [[prg-in-nc1-to-io-jls21|PRG in NC1 ⇒ iO]]

<!-- END GENERATED participates-in -->
