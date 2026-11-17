---
type: reduction
status: draft
title: Claw-free TDP ⇒ Claw-free permutations
aliases: []
id: red-claw-free-trapdoor-permutations-to-claw-free-permutations
kind: implication
hypotheses: [claw-free-trapdoor-permutations]
conclusion: claw-free-permutations
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the pair, and the reduction forwards any claw finder unchanged."
---

# Claw-free TDP ⇒ Claw-free permutations

## Statement

A [[trapdoor-permutation#claw-free-trapdoor-permutations|claw-free pair of trapdoor permutations]] $(f_0, f_1)$, with its trapdoors $\td_0, \td_1$ dropped and the same domain sampler, is a [[trapdoor-permutation#claw-free-permutations|claw-free pair]] — folklore.
