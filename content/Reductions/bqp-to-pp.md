---
type: reduction
status: draft
title: "BQP ⊆ PP"
aliases: []
id: red-bqp-to-pp
kind: inclusion
hypotheses: [bqp]
conclusion: pp
class: free
model: quantum
source:
  - "[[ADH97 - Quantum Computability|ADH97]]"
security-loss: ""
rationale:
  model: "The hypothesis is a quantum complexity class; the proof itself is a classical counting argument."
---

# BQP ⊆ PP

## Statement

[[bounded-error-quantum-polynomial-time|BQP]] $\subseteq$ [[probabilistic-polynomial-time|PP]]: every language decided with bounded error by a polynomial-time quantum machine is decided by an unbounded-error probabilistic polynomial-time machine — [[ADH97 - Quantum Computability|ADH97]].

## Sketch

With rational amplitudes, the acceptance probability of a polynomial-time quantum machine is a sum, over pairs of computation paths, of products of amplitudes; after clearing a common denominator it is the difference of two $\classsharpP$ functions, and comparing it with $1/2$ is a $\classPP$ predicate. ADH97 extend the argument to algebraic amplitudes.

## Notes

- Alternative proof via $\classBQP \subseteq \mathbf{PostBQP} = \classPP$ — [[Aar05 - Quantum computing, postselection, and probabilistic polynomial-time|Aar05]].
- Strengthened to $\classBQP \subseteq \mathbf{AWPP} \subseteq \classPP$, and $\classPP^{\classBQP} = \classPP$ — [[FR99 - Complexity Limitations on Quantum Computation|FR99]].
