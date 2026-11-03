---
type: reduction
status: draft
title: "Pure OWSG ⇒ OWSG"
aliases: []
id: red-pure-one-way-state-generator-to-one-way-state-generator
kind: implication
hypotheses: [pure-one-way-state-generator]
conclusion: one-way-state-generator
class: fully-black-box
model: quantum
source: folklore
security-loss: "none: the generator is unchanged"
rationale:
  class: "The construction is the identity on generators, and the reduction forwards any adversary unchanged."
  model: "The adversaries in both notions are quantum."
---

# Pure OWSG ⇒ OWSG

## Statement

Every [[one-way-state-generator#pure-owsgs|pure one-way state generator]] $(\KeyGen, \mathsf{StateGen}, \Vrfy)$ is a [[one-way-state-generator|one-way state generator]], with the same correctness error and, for all efficient quantum $\calA$ and all polynomials $t$, the same one-wayness advantage — folklore.

## Sketch

When $\mathsf{StateGen}(k)$ outputs the pure state $|\phi_k\rangle$, its $t+1$ independent runs give $|\phi_k\rangle^{\otimes (t+1)}$, so the one-wayness game of the general definition, run on this generator, is the game of the pure definition; correctness runs the same $\Vrfy$ on one copy and is unchanged.
