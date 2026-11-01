---
type: reduction
status: draft
title: "Multiplicatively homomorphic encryption ⇒ HE"
aliases: []
id: red-multiplicatively-homomorphic-encryption-to-he
kind: implication
hypotheses: [multiplicatively-homomorphic-encryption]
conclusion: he
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the scheme, and the reduction forwards any IND-CPA adversary unchanged."
---

# Multiplicatively homomorphic encryption ⇒ HE

## Statement

A [[homomorphic-encryption#multiplicatively-homomorphic-encryption|multiplicatively homomorphic encryption]] scheme is a [[homomorphic-encryption|homomorphic encryption]] scheme for the class of products of its messages, with the same IND-CPA advantage — folklore.
