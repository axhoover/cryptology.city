---
type: reduction
status: draft
title: LWE with sub-exponential ratio ⇒ LWE with superpolynomial ratio
aliases: []
id: red-subexponential-modulus-lwe-to-superpolynomial-ratio-lwe
kind: implication
hypotheses: [subexponential-modulus-lwe]
conclusion: superpolynomial-ratio-lwe
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the LWE distribution, and the reduction forwards any distinguisher unchanged."
---

# LWE with sub-exponential ratio ⇒ LWE with superpolynomial ratio

## Statement

Hardness of [[learning-with-errors#lwe-with-sub-exponential-modulus-to-noise-ratio|LWE with sub-exponential modulus-to-noise ratio]] is hardness of [[learning-with-errors#lwe-with-superpolynomial-modulus-to-noise-ratio|LWE with superpolynomial modulus-to-noise ratio]] for the ratio $r(n) = 2^{n^{\varepsilon}} = n^{\omega(1)}$, with the same modulus and the same advantage — folklore.
