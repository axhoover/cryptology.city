---
type: reduction
status: draft
title: TDP over bit strings ⇒ TDP
aliases: []
id: red-bit-string-tdp-to-tdp
kind: implication
hypotheses: [bit-string-tdp]
conclusion: tdp
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the family, and the reduction forwards any inverter unchanged."
---

# TDP over bit strings ⇒ TDP

## Statement

A [[trapdoor-permutation#trapdoor-permutations-over-bit-strings|trapdoor permutation over bit strings]] is a [[trapdoor-permutation|trapdoor permutation]], with domain $\bits^{n(\secpar)}$ — folklore.
