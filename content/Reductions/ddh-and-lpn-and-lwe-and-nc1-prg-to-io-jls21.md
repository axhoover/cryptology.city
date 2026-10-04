---
type: reduction
status: draft
title: "SXDH + LWE + LPN + NC0-PRG ⇒ iO"
aliases: []
id: red-ddh-and-lpn-and-lwe-and-nc1-prg-to-io-jls21
kind: implication
hypotheses: [sxdh, lwe, lpn, prg-in-nc0]
conclusion: io
class: free
model: standard
source:
  - "[[JLS21 - Indistinguishability obfuscation from well-founded assumptions|JLS21]]"
security-loss: "requires sub-exponential hardness of all four hypotheses"
rationale:
  class: "The construction builds functional encryption from the hypotheses and applies the FE-to-iO transformation, which runs the FE encryption algorithm inside function keys, so it is not black-box in the hypotheses."
---

# SXDH + LWE + LPN + NC0-PRG ⇒ iO

## Statement

Let $\tau > 0$ and $\delta, \varepsilon \in (0,1)$ be constants, and let $k, \ell, n$ be large enough polynomials in $\secpar$. Assume sub-exponential hardness of the following: [[decisional-diffie-hellman#sxdh-symmetric-external-diffie-hellman|SXDH]] on asymmetric bilinear groups of prime order $p = O(2^\secpar)$; [[learning-with-errors|LWE]] over $\ZZ_p$ with secret dimension $k$ and modulus-to-noise ratio $2^{k^\varepsilon}$; [[learning-parity-with-noise#assumption|LPN]] over $\ZZ_p$ (the field generalization, not binary LPN) with secret dimension $\ell$, polynomially many samples and error rate $\ell^{-\delta}$; and a Boolean [[low-complexity-prg#polynomial-stretch-prg-in-nc0|PRG]] in $\mathrm{NC}^0$ with stretch $n^{1+\tau}$ on $n$-bit seeds. Then [[indistinguishability-obfuscation|iO]] for all polynomial-size circuits exists — [[JLS21 - Indistinguishability obfuscation from well-founded assumptions|JLS21]].

## Notes

- A Boolean polynomial-stretch PRG in $\mathrm{NC}^0$ is a stronger hypothesis than a [[pseudorandom-generator-in-nc1|pseudorandom generator]] in $\mathrm{NC}^1$, since it is in particular one — folklore.
