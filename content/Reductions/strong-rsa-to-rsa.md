---
type: reduction
status: draft
title: "Strong RSA ⇒ RSA"
aliases: []
id: red-strong-rsa-to-rsa
kind: implication
hypotheses: [strong-rsa]
conclusion: rsa
class: fully-black-box
model: standard
source: folklore
security-loss: "tight: one oracle call, advantage preserved"
rationale:
  class: "The fixed reduction calls the RSA inverter once as an oracle on the strong-RSA instance and never uses its code."
---

# Strong RSA ⇒ RSA

## Statement

If [[rsa-assumption#strong-rsa|strong RSA]] is hard for $\GrGen$, then [[rsa-assumption|RSA]] is hard for $\GrGen$, provided the exponent $e$ that $\GrGen$ outputs can be sampled given $n$ alone (a fixed $e$, or a random prime, for the usual choices) — folklore.

## Sketch

On a strong-RSA challenge $(n, y)$, sample $e$ as $\GrGen$ does given $n$, run the RSA inverter on $(n, e, y)$, and output its answer $\hat{x}$ together with $e$. Since $y$ is uniform in $\ZZ_n^*$, the inverter sees a correctly distributed RSA instance, and whenever it succeeds, $(\hat{x}, e)$ with $\hat{x}^{e} \equiv y \pmod{n}$ and $e > 1$ is a strong-RSA solution.

## Notes

- Whether RSA hardness implies strong-RSA hardness is open — folklore.
