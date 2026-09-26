---
type: barrier
status: draft
title: "No reduction from NP to Hash function"
aliases: []
id: bar-np-to-hash-function-aggm06
hypotheses: [np]
conclusion: hash-function
class: unstated
consequences:
  - kind: contradiction
    target: ""
    class: unstated
strength: unconditional
source:
  - "[[AGGM06 - On basing one-way functions on NP-hardness|AGGM06]]"
---

# No reduction from NP to Hash function

A reduction of class `unstated` from [[nondeterministic-polynomial-time|NP]] to [[hash-function|Hash function]] would imply a contradiction.

## Statement

For every polynomial-time computable $f$, a randomized non-adaptive reduction of [[nondeterministic-polynomial-time|NP]] to inverting $f$ on average implies $\classcoNP \subseteq \classAM$, hence a collapse of the [[polynomial-time-hierarchy|polynomial hierarchy]] to its second level; the [[hash-function#preimage-resistance-one-wayness|one-wayness]] of $f$ therefore cannot be based on worst-case $\classNP$-hardness by such a reduction — [[AGGM06 - On basing one-way functions on NP-hardness|AGGM06]].

## Notes

`class: unstated`: The surviving result is restricted to randomized non-adaptive reductions, and RTV04's vocabulary has no slot for an adaptivity restriction. Recording `fully-black-box` would assert a barrier against adaptive black-box reductions of NP to inverting $f$, which AGGM06 retracted (AGGM10) and which is known only for size-verifiable $f$ (BB15). `unstated` is the honest value; the restriction is carried in the statement.

- AGGM06's second theorem — the same consequence for arbitrary (adaptive) reductions whenever $|f^{-1}(y)|$ is efficiently computable — was retracted by the authors; only the non-adaptive result stands — [[AGGM10 - Erratum for On basing one-way functions on NP-hardness|AGGM10]].
- For size-verifiable one-way functions the adaptive case is recovered: a general (adaptive) reduction of $\classNP$ to inverting such an $f$ implies $\classNP \subseteq \classcoAM$ — [[BB15 - On Basing Size-Verifiable One-Way Functions on NP-Hardness|BB15]].
