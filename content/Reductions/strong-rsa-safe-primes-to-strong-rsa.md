---
type: reduction
status: draft
title: "Strong RSA (safe-prime moduli) ⇒ Strong RSA"
aliases: []
id: red-strong-rsa-safe-primes-to-strong-rsa
kind: implication
hypotheses: [strong-rsa-safe-primes]
conclusion: strong-rsa
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The safe-prime generator is itself a GrGen of the base assumption, so the reduction is the identity and forwards any strong-RSA solver unchanged."
---

# Strong RSA (safe-prime moduli) ⇒ Strong RSA

## Statement

If [[rsa-assumption#strong-rsa-with-safe-prime-moduli|strong RSA is hard for safe-prime moduli]], then [[rsa-assumption#strong-rsa|strong RSA]] is hard for $\GrGen$, taking $\GrGen$ to be the safe-prime generator (a product of two distinct primes, admitted by the base assumption), with the same advantage — folklore.
