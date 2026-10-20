---
type: barrier
status: draft
title: "No non-adaptive reduction from NP to average-case NP hardness"
aliases: []
id: bar-np-to-np-average-case-hardness-bt03
hypotheses: [np]
conclusion: np-average-case-hardness
class: unstated
consequences:
  - kind: complexity
    target: ph-collapse
    class: unstated
strength: unconditional
source:
  - "[[BT03 - On Worst-Case to Average-Case Reductions for NP Problems|BT03]]"
rationale:
  class: "BT03 rule out only non-adaptive reductions, and the vocabulary has no class for an adaptivity restriction."
---

# No non-adaptive reduction from NP to average-case NP hardness

## Statement

Let $L' \in \classNP$ and let $D$ be a polynomial-time samplable distribution. If a randomized polynomial-time non-adaptive reduction decides an [[nondeterministic-polynomial-time|NP]]-complete language on every input, given oracle access to any algorithm that decides $L'$ on $x \gets D$ with inverse-polynomial error, then $\classcoNP \subseteq \classNP/\mathrm{poly}$ and the [[polynomial-time-hierarchy|polynomial hierarchy]] collapses to its third level — [[BT03 - On Worst-Case to Average-Case Reductions for NP Problems|BT03]]. [[nondeterministic-polynomial-time#average-case-hardness|Average-case hardness of NP]] over samplable distributions therefore cannot be based on worst-case $\classNP$-hardness by a non-adaptive reduction unless the polynomial hierarchy collapses.

## Notes

- The result generalizes the same conclusion for non-adaptive random self-reductions, whose queries are distributed according to $D$ independently of the input — [[FF93 - Random-Self-Reducibility of Complete Sets|FF93]].
- BT03 draw the same conclusion for non-adaptive reductions basing the security of a [[hash-function#preimage-resistance-one-wayness|one-way function]] on worst-case $\classNP$-hardness — [[BT03 - On Worst-Case to Average-Case Reductions for NP Problems|BT03]]; for one-way functions the consequence improves to $\classcoNP \subseteq \classAM$ ([[no-np-to-hash-function-aggm06|No reduction from NP to OWF]]) — [[AGGM06 - On basing one-way functions on NP-hardness|AGGM06]].
