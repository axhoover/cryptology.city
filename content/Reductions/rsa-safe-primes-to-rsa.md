---
type: reduction
status: draft
title: "RSA with safe-prime moduli ⇒ RSA"
aliases: []
id: red-rsa-safe-primes-to-rsa
kind: implication
hypotheses: [rsa-safe-primes]
conclusion: rsa
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the RSA instance distribution, and the reduction forwards any inverter unchanged."
---

# RSA with safe-prime moduli ⇒ RSA

## Statement

Hardness of [[rsa-assumption#rsa-with-safe-prime-moduli|RSA with safe-prime moduli]] and prime exponents greater than $\ell$ is hardness of [[rsa-assumption|RSA]] for one generator $\GrGen$, a safe-prime generator of that section, with the same advantage — folklore.
