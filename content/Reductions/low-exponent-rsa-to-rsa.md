---
type: reduction
status: draft
title: "Low-exponent RSA ⇒ RSA"
aliases: []
id: red-low-exponent-rsa-to-rsa
kind: implication
hypotheses: [low-exponent-rsa]
conclusion: rsa
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the RSA instance distribution, and the reduction forwards any inverter unchanged."
---

# Low-exponent RSA ⇒ RSA

## Statement

Hardness of [[rsa-assumption#low-exponent-rsa|low-exponent RSA]] for an exponent $e$ is hardness of [[rsa-assumption|RSA]] for one generator $\GrGen$, the one with fixed public exponent $e$, with the same advantage — folklore.
