---
type: reduction
status: draft
title: "Module-SVP ⇒ Module LWE"
aliases: []
id: red-module-svp-to-module-lwe-ls15
kind: implication
hypotheses: [worst-case-module-lattice-problems]
conclusion: module-lwe
class: unstated
model: quantum
source:
  - "[[LS15 - Worst-case to average-case reductions for module lattices|LS15]]"
security-loss: ""
---

# Module-SVP ⇒ Module LWE

Worst-case hardness of [[module-lattice-problems|SIVP on module lattices]] implies, under a quantum reduction, average-case hardness of [[learning-with-errors#module-lwe|Module LWE]].

## Statement

Solving the shortest independent vectors problem on [[module-lattice-problems|rank-$d$ module lattices]] over the ring of integers of a degree-$n$ number field, in the worst case and to within polynomial approximation factors, reduces in quantum polynomial time to average-case [[learning-with-errors#module-lwe|Module LWE]] of rank $d$, in its search form and, for suitable moduli, its decision form — [[LS15 - Worst-case to average-case reductions for module lattices|LS15]]. Rank $d = 1$ is the [[learning-with-errors#ring-lwe|Ring LWE]] reduction and $n = 1$ recovers plain [[learning-with-errors|LWE]].

## Sketch

The iterative quantum step of [[Reg05 - On Lattices, Learning with Errors, Random Linear Codes, and Cryptography|Reg05]], carried over to rank-$d$ module lattices: the Module LWE oracle solves bounded-distance decoding on the dual module lattice, a quantum Fourier step turns that solver into a sampler of shorter discrete Gaussian vectors in the primal, and iterating drives the Gaussian width down to the target approximation factor.

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.

`model: quantum`: The step turning the bounded-distance-decoding solver into a discrete Gaussian sampler is quantum; the Module-SIS reduction in the same paper ([[module-svp-to-module-sis-ls15]]) is classical.
