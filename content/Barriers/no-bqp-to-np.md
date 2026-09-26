---
type: barrier
status: draft
title: "No relativizing reduction from BQP to NP"
aliases: []
id: bar-bqp-to-np
hypotheses: [bqp]
conclusion: np
class: relativizing
consequences:
  - kind: contradiction
    target: ""
    class: relativizing
strength: unconditional
source:
  - "[[RT19 - Oracle Separation of BQP and PH|RT19]]"
---

# No relativizing reduction from BQP to NP

A reduction of class `relativizing` from [[bounded-error-quantum-polynomial-time|BQP]] to [[nondeterministic-polynomial-time|NP]] would imply a contradiction.

## Statement

There is an oracle relative to which $\classBQP \not\subseteq \mathbf{PH}$, hence one relative to which $\classBQP \not\subseteq \classNP$ — [[RT19 - Oracle Separation of BQP and PH|RT19]]. No relativizing argument places [[bounded-error-quantum-polynomial-time|BQP]] inside [[nondeterministic-polynomial-time|NP]]; unrelativized, neither containment between the two classes is known.

## Sketch

Raz and Tal exhibit a distribution over $\{\pm 1\}^{2N}$, a variant of Forrelation, that a quantum algorithm making one query distinguishes from uniform with advantage $\Omega(1/\log N)$, while no constant-depth circuit of quasi-polynomial size distinguishes it with advantage better than $\polylog(N)/\sqrt{N}$; the standard diagonalization turns this black-box separation into the oracle.

## Notes

`class: relativizing`: an oracle separation rules out exactly the relativizing class: RT19 give an oracle relative to which BQP is not contained in PH, hence not in NP, so no relativizing proof can establish the inclusion. It says nothing about non-relativizing arguments, and per the partial order it also kills any fully-black-box argument.
