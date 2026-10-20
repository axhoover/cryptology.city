---
type: reduction
status: draft
title: Compact FHE ⇒ HE
aliases: []
id: red-compact-fhe-to-he
kind: implication
hypotheses: [compact-fhe]
conclusion: he
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the encryption scheme, and the reduction forwards any IND-CPA adversary unchanged."
---

# Compact FHE ⇒ HE

## Statement

A [[homomorphic-encryption#compact-fhe|compact fully homomorphic encryption]] scheme is a [[homomorphic-encryption|homomorphic encryption]] scheme for the class of all polynomial-size circuits, with the same IND-CPA advantage — folklore.
