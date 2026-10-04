---
type: reduction
status: draft
title: "Module-SIVP ⇒ Module-SIS"
aliases: []
id: red-module-svp-to-module-sis-ls15
kind: implication
hypotheses: [worst-case-module-lattice-problems]
conclusion: module-sis
class: fully-black-box
model: standard
source:
  - "[[LS15 - Worst-case to average-case reductions for module lattices|LS15]]"
security-loss: ""
rationale:
  class: "The worst-case algorithm builds random Module-SIS instances from its input module lattice and calls an arbitrary Module-SIS solver only as an oracle, for every solver with noticeable success probability."
---

# Module-SIVP ⇒ Module-SIS

## Statement

Solving the shortest independent vectors problem on [[module-lattice-problems|module lattices]] of rank $d$ over the ring of integers of a degree-$n$ number field, in the worst case and to within polynomial approximation factors, reduces classically to average-case [[shortest-integer-solution#module-sis|Module-SIS]] of rank $d$ — [[LS15 - Worst-case to average-case reductions for module lattices|LS15]]. Rank $d = 1$ is the [[shortest-integer-solution#ring-sis|Ring-SIS]] reduction and $n = 1$ recovers plain [[shortest-integer-solution|SIS]].

## Sketch

Ajtai's iterative basis shortening ([[Ajt96 - Generating hard instances of lattice problems|Ajt96]]) over modules: discrete Gaussian vectors of the worst-case module lattice, with their coordinates with respect to the current basis reduced mod $q$, form a nearly uniform Module-SIS instance, and a short solution $\mathbf{z}$ combines the samples into a lattice vector shorter than the longest current basis vector; iterating yields short independent vectors.
