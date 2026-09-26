---
type: reduction
status: draft
title: "Module-SVP ⇒ Module-SIS"
aliases: []
id: red-module-svp-to-module-sis-ls15
kind: implication
hypotheses: [worst-case-module-lattice-problems]
conclusion: module-sis
class: unstated
model: standard
source:
  - "[[LS15 - Worst-case to average-case reductions for module lattices|LS15]]"
security-loss: ""
---

# Module-SVP ⇒ Module-SIS

Worst-case hardness of [[module-lattice-problems|SIVP on module lattices]] implies, under a classical reduction, average-case hardness of [[shortest-integer-solution#module-sis|Module-SIS]].

## Statement

Solving the shortest independent vectors problem on [[module-lattice-problems|rank-$d$ module lattices]] over the ring of integers of a degree-$n$ number field, in the worst case and to within polynomial approximation factors, reduces classically to average-case [[shortest-integer-solution#module-sis|Module-SIS]] of rank $d$ — [[LS15 - Worst-case to average-case reductions for module lattices|LS15]]. Rank $d = 1$ is the [[shortest-integer-solution#ring-sis|Ring-SIS]] reduction and $n = 1$ recovers plain [[shortest-integer-solution|SIS]].

## Sketch

The reduction of [[Ajt96 - Generating hard instances of lattice problems|Ajt96]], carried over to modules: sample discrete Gaussian vectors from the worst-case module lattice, reduce them modulo $q$ relative to the current basis to obtain a uniform Module-SIS instance, and use a short solution $\mathbf{z}$ to combine the samples into a lattice vector shorter than the longest current basis vector; iterating yields short independent vectors.

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.
