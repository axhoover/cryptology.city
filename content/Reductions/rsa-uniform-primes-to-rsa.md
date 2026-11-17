---
type: reduction
status: draft
title: "RSA with uniform-prime moduli ⇒ RSA"
aliases: []
id: red-rsa-uniform-primes-to-rsa
kind: implication
hypotheses: [rsa-uniform-primes]
conclusion: rsa
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the RSA instance distribution, and the reduction forwards any inverter unchanged."
---

# RSA with uniform-prime moduli ⇒ RSA

## Statement

Hardness of [[rsa-assumption#rsa-with-uniform-prime-moduli|RSA with uniform-prime moduli]] is hardness of [[rsa-assumption|RSA]] for one generator, $\GrGen_R$, with the same advantage — folklore.
