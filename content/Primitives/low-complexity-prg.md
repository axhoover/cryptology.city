---
type: primitive
status: stub
aliases:
  - PRG in NC1
  - Low-complexity pseudorandom generator
title: Low-complexity pseudorandom generator
id: low-complexity-prg-nc1
unlisted: true
---

# Low-complexity pseudorandom generator

A low-complexity PRG is a pseudorandom generator each of whose output bits is computable in $\mathrm{NC}^1$ (and, for the $\mathrm{NC}^0$ case, depends on a constant number of input bits). The existence of a Boolean PRG in $\mathrm{NC}^0$ (not $\mathrm{NC}^1$) with stretch $n^{1+\tau}$ for a constant $\tau > 0$ is one of the four sub-exponentially hard assumptions from which [[JLS21 - Indistinguishability obfuscation from well-founded assumptions|JLS21]] builds indistinguishability obfuscation.

TODO: syntax and security definition.

<!-- BEGIN GENERATED participates-in fb3681663b85 -->

## Participates in

**Builds on Low-complexity pseudorandom generator**

- [[prg-in-nc1-to-io-jls21|PRG in NC1 ⇒ iO]]

<!-- END GENERATED participates-in -->
