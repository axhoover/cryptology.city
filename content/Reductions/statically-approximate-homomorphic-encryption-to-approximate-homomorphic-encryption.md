---
type: reduction
status: draft
title: "Statically approximate HE ⇒ Approximate HE"
aliases: []
id: red-statically-approximate-homomorphic-encryption-to-approximate-homomorphic-encryption
kind: implication
hypotheses: [statically-approximate-homomorphic-encryption]
conclusion: approximate-homomorphic-encryption
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the scheme, and the reduction forwards any IND-CPA adversary unchanged."
---

# Statically approximate HE ⇒ Approximate HE

## Statement

Forgetting $\mathsf{Estimate}$ and $t_e$, a [[homomorphic-encryption#statically-approximate-he|statically approximate]] HE scheme is an [[homomorphic-encryption#approximate-homomorphic-encryption|approximate homomorphic encryption]] scheme, with the same IND-CPA advantage — folklore.
