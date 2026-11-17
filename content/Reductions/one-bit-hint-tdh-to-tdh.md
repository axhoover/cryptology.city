---
type: reduction
status: draft
title: "TDH with one-bit hints ⇒ TDH"
aliases: []
id: red-one-bit-hint-tdh-to-tdh
kind: implication
hypotheses: [one-bit-hint-tdh]
conclusion: tdh
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the scheme, and the reduction forwards every adversary unchanged."
---

# TDH with one-bit hints ⇒ TDH

## Statement

A [[trapdoor-hash-function#one-bit-hints|trapdoor hash function with one-bit hints]] is a [[trapdoor-hash-function|trapdoor hash function]] with $\mu = 1$, with the same correctness, input privacy and index hiding — folklore.
