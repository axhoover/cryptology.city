---
type: reduction
status: draft
title: "Circuit-private HE for NC1 ⇒ HE"
aliases: []
id: red-circuit-private-he-nc1-to-he
kind: implication
hypotheses: [circuit-private-he-nc1]
conclusion: he
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the scheme, and the reduction forwards any IND-CPA adversary unchanged."
---

# Circuit-private HE for NC1 ⇒ HE

## Statement

A [circuit-private homomorphic encryption scheme for $\mathsf{NC}^1$](homomorphic-encryption#circuit-private-he-for-nc1) is a [[homomorphic-encryption|homomorphic encryption]] scheme for the class of $\mathsf{NC}^1$ circuits, with the same IND-CPA advantage — folklore.
