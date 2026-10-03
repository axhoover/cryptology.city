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
---

# SXDH + LWE + LPN + NC0-PRG ⇒ iO

Sub-exponentially hard [[decisional-diffie-hellman#sxdh-symmetric-external-diffie-hellman|SXDH]], [[learning-with-errors|LWE]], [[learning-parity-with-noise|LPN]] over $\ZZ_p$, and a Boolean [[low-complexity-prg#polynomial-stretch-prg-in-nc0|polynomial-stretch PRG in $\mathrm{NC}^0$]] together imply [[indistinguishability-obfuscation|iO]].

## Statement

Let $\tau > 0$ and $\delta, \varepsilon \in (0,1)$ be constants, and let $k, \ell, n$ be large enough polynomials in $\secpar$. Assume sub-exponential hardness of the following: SXDH on asymmetric bilinear groups of prime order $p = O(2^\secpar)$; LWE over $\ZZ_p$ with secret dimension $k$ and modulus-to-noise ratio $2^{k^\varepsilon}$; LPN over $\ZZ_p$ with secret dimension $\ell$, polynomially many samples and error rate $\ell^{-\delta}$; and a Boolean PRG in $\mathrm{NC}^0$ with stretch $n^{1+\tau}$. Then iO for all polynomial-size circuits exists — [[JLS21 - Indistinguishability obfuscation from well-founded assumptions|JLS21]].

## Notes

`class: free`: records the proven implication. JLS21 do not place the construction in the RTV taxonomy. The construction builds functional encryption and applies [[fe-to-io|FE ⇒ iO]], which runs the FE encryption algorithm inside function keys, so it is not black-box in the hypotheses.

- LPN here is the $\ZZ_p$ generalization given in [[learning-parity-with-noise#assumption|LPN § Assumption]], not binary LPN.
- A Boolean PRG in $\mathrm{NC}^0$ with polynomial stretch is a stronger hypothesis than a [[pseudorandom-generator-in-nc1|PRG in $\mathrm{NC}^1$]].
- The `ddh-` and `nc1-prg` parts of the slug are historical; the frontmatter `hypotheses` are authoritative.
- Sourcing pass (2026-09): this page previously recorded {DDH, LPN, LWE, PRG in $\mathrm{NC}^1$} ⇒ iO, migrated from [[indistinguishability-obfuscation]] § Other results.
