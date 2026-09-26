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
---

# BQP ⊆ PP

[[bounded-error-quantum-polynomial-time|BQP]] is contained in [[probabilistic-polynomial-time|PP]].

## Statement

$\classBQP \subseteq \classPP$ — [[ADH97 - Quantum Computability|ADH97]].

## Sketch

For a polynomial-time quantum machine with rational amplitudes, the acceptance probability is a sum over pairs of computation paths of products of amplitudes; after clearing a common denominator it is the difference of two $\classsharpP$ functions, and comparing it with $1/2$ is a $\classPP$ predicate. ADH97 extend the argument to algebraic amplitudes.

## Notes

`class: free`: Proven complexity-class containment; per repo convention `class: free`.

`model: quantum`: Matches sibling containments of quantum classes ([[bpp-to-bqp]], [[qcma-to-pp]], [[qma-to-pp]]); the proof itself is a classical counting argument.

- Alternative proof via $\classBQP \subseteq \mathbf{PostBQP} = \classPP$ — [[Aar05 - Quantum computing, postselection, and probabilistic polynomial-time|Aar05]]
- Strengthened to $\classBQP \subseteq \mathbf{AWPP} \subseteq \classPP$, and $\classPP^{\classBQP} = \classPP$ — [[FR99 - Complexity Limitations on Quantum Computation|FR99]]
