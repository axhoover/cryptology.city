---
type: reduction
status: draft
title: "Strong RSA ⇒ RSA"
aliases: []
id: red-strong-rsa-to-rsa
kind: implication
hypotheses: [strong-rsa-assumption]
conclusion: rsa
class: fully-black-box
model: standard
source: folklore
security-loss: "tight: one oracle call, advantage preserved"
---

# Strong RSA ⇒ RSA

[[rsa-assumption#strong-rsa|Strong RSA]] implies [[rsa-assumption|RSA]].

## Statement

If [[rsa-assumption#strong-rsa|strong RSA]] is hard for $\GrGen$, then [[rsa-assumption|RSA]] is hard for $\GrGen$: the strong-RSA adversary receives $(n, y)$ and may output any $(\hat{x}, \hat{e})$ with $\hat{e} > 1$ and $\hat{x}^{\hat{e}} \equiv y \pmod{n}$, so an inverter for the exponent $e$ that $\GrGen$ outputs is already a strong-RSA solver; the converse is not known — folklore.

## Sketch

On a strong-RSA challenge $(n, y)$, sample $e$ as $\GrGen$ does given $n$ — a fixed $e$ or a random prime, for the usual choices — run the RSA inverter on $(n, e, y)$ to get $\hat{x}$ with $\hat{x}^{e} \equiv y \pmod{n}$, and output $(\hat{x}, e)$.

## Notes

`class: fully-black-box`: The construction is the identity on instances, and the one fixed reduction (§ Sketch) calls the RSA inverter once, as an oracle.
