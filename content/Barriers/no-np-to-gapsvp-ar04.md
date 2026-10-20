---
type: barrier
status: draft
title: "No Karp reduction from NP to GapSVP for γ ≥ c√n unless NP = coNP"
aliases: []
id: bar-np-to-gapsvp-ar04
hypotheses: [np]
conclusion: gapsvp-sqrt-n
class: unstated
consequences:
  - kind: complexity
    target: np-eq-conp
    class: unstated
strength: unconditional
source:
  - "[[AR04 - Lattice Problems in NP intersect coNP|AR04]]"
rationale:
  class: "The barrier concerns Karp reductions from an NP-complete problem to the promise problem, not constructions of one primitive from another, so no class of the vocabulary applies."
---

# No Karp reduction from NP to GapSVP for γ ≥ c√n unless NP = coNP

## Statement

For $\gamma = c\sqrt{n}$ with AR04's suitable constant $c$, $\mathrm{GapSVP}_\gamma$ ([[shortest-vector-problem#factor-square-root-of-n|GapSVP]]) and $\mathrm{GapCVP}_\gamma$ lie in $\classNP \cap \classcoNP$ ([[gapsvp-to-conp-ar04|GapSVP ∈ coNP]]) — [[AR04 - Lattice Problems in NP intersect coNP|AR04]]. A Karp reduction from an $\classNP$-complete problem to a promise problem in $\classcoNP$ places that problem in $\classcoNP$, so these problems are not $\classNP$-hard under Karp reductions unless $\classNP = \classcoNP$ — standard.

## Notes

- The consequence concerns worst-case $\classNP$-hardness of the lattice problem; it says nothing about the average-case hardness that [[gapsvp-to-lwe-reg05|LWE]] and [[gapsvp-to-sis-ajt96|SIS]] inherit from it — folklore.
