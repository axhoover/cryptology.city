---
type: reduction
status: draft
title: "Additively homomorphic encryption ⇒ HE"
aliases: []
id: red-additively-homomorphic-encryption-to-he
kind: implication
hypotheses: [additively-homomorphic-encryption]
conclusion: he
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the scheme, and the reduction forwards any IND-CPA adversary unchanged."
---

# Additively homomorphic encryption ⇒ HE

## Statement

An [[homomorphic-encryption#additively-homomorphic-encryption|additively homomorphic encryption]] scheme is a [[homomorphic-encryption|homomorphic encryption]] scheme for the class of sums of its messages, with the same IND-CPA advantage — folklore.
