---
type: reduction
status: draft
title: "String OT ⇒ OT"
aliases: []
id: red-string-ot-to-ot
kind: implication
hypotheses: [string-ot]
conclusion: ot
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the protocol for strings of length one, and the reduction forwards any privacy adversary unchanged."
---

# String OT ⇒ OT

## Statement

Let $\OT$ be the [[oblivious-transfer#string-ot|OT for strings]] of length $\ell$ for $\ell(\secpar) := 1$. Its message space is $\calM = \bits$, with $|\calM| = 2$, and it is $(1-\negl(\secpar))$-correct with sender and receiver privacy, so $\OT$ is an [[oblivious-transfer|OT]], with the same advantage for every adversary in each privacy game — folklore.

## Notes

- Conversely, an OT on bits gives an OT for strings of every polynomial length, by one execution per bit ([[ot-to-string-ot|OT ⇒ String OT]]) — folklore.
