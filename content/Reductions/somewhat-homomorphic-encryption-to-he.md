---
type: reduction
status: draft
title: SHE ⇒ HE
aliases: []
id: red-somewhat-homomorphic-encryption-to-he
kind: implication
hypotheses: [somewhat-homomorphic-encryption]
conclusion: he
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the scheme, and the reduction forwards any IND-CPA adversary unchanged."
---

# SHE ⇒ HE

## Statement

A [[homomorphic-encryption#somewhat-homomorphic-encryption-she|somewhat homomorphic encryption]] scheme for a class $\calF$ of bounded-depth circuits is a [[homomorphic-encryption|homomorphic encryption]] scheme for $\calF$, with the same IND-CPA advantage — folklore.
