---
type: reduction
status: draft
title: "QMA ⊆ PP"
aliases: []
id: red-qma-to-pp
kind: inclusion
hypotheses: [qma]
conclusion: pp
class: free
model: quantum
source:
  - "[[MW05 - Quantum Arthur-Merlin games|MW05]]"
security-loss: ""
---

# QMA ⊆ PP

[[quantum-merlin-arthur|QMA]] is contained in [[probabilistic-polynomial-time|PP]].

## Statement

$\classQMA \subseteq \classPP$: every language in [[quantum-merlin-arthur|QMA]] is decided by an unbounded-error probabilistic polynomial-time ([[probabilistic-polynomial-time|PP]]) machine — [[MW05 - Quantum Arthur-Merlin games|MW05]].

## Sketch

Strong error reduction drives the completeness and soundness errors of a QMA verifier to $2^{-p}$ without lengthening its $m$-qubit witness. The trace of the verifier's acceptance operator is then at least $1 - 2^{-p}$ on yes-instances and at most $2^{m-p}$ on no-instances, which separate once $p > m + 1$; the trace is a sum over witness basis states of circuit acceptance probabilities, hence computable in $\mathrm{GapP}$, and a $\classPP$ machine thresholds it.

## Notes

`class: free`: proven containment between complexity classes; the reduction-class axis does not discriminate here (repo convention).

`model: quantum`: repo convention for results about quantum classes.

- First stated, without proof, by Kitaev and Watrous — [[KW00 - Parallelization, amplification, and exponential time simulation of quantum interactive proof systems|KW00]]
- The first written proof gives the stronger $\classQMA \subseteq \mathrm{A_0PP} \subseteq \classPP$ — [[Vya03 - QMA=PP implies that PP contains PH|Vya03]]
