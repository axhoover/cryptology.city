---
type: primitive
status: stub
aliases:
  - NC1-PRG
  - Pseudorandom generator in $\mathrm{NC}^1$
title: Pseudorandom generator in $\mathrm{NC}^1$
id: prg-in-nc1
unlisted: true
---

# Pseudorandom generator in $\mathrm{NC}^1$

A pseudorandom generator whose output is computable by a logarithmic-depth boolean circuit family ($\mathrm{NC}^1$). The JLS21 iO construction instead assumes a Boolean PRG in $\mathrm{NC}^0$ with stretch $n^{1+\tau}$ for a constant $\tau > 0$ — [[JLS21 - Indistinguishability obfuscation from well-founded assumptions|JLS21]].

TODO: syntax and security definition.

<!-- BEGIN GENERATED participates-in 3a17f8ba55e4 -->

## Participates in

**Builds on Pseudorandom generator in $\mathrm{NC}^1$**

- [[ddh-and-lpn-and-lwe-and-nc1-prg-to-io-jls21|DDH + LPN + LWE + NC1-PRG ⇒ iO]]
- [[lpn-and-lwe-and-nc1-prg-to-io-jls21|LPN + LWE + NC1-PRG ⇒ iO]]

<!-- END GENERATED participates-in -->
