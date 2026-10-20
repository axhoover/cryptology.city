---
type: barrier
status: draft
title: "No Karp reduction from NP to GapSVP for γ ≥ √(n/log n) unless coNP ⊆ AM"
aliases: []
id: bar-np-to-gapsvp-gg00
hypotheses: [np]
conclusion: gapsvp
class: unstated
consequences:
  - kind: complexity
    target: conp-subset-am
    class: unstated
strength: unconditional
source:
  - "[[GG00 - On the limits of non-approximability of lattice problems|GG00]]"
  - "[[BHZ87 - Does co-NP Have Short Interactive Proofs|BHZ87]]"
rationale:
  class: "The barrier concerns Karp reductions from an NP-complete problem to the promise problem, not constructions of one primitive from another, so no class of the vocabulary applies."
---

# No Karp reduction from NP to GapSVP for γ ≥ √(n/log n) unless coNP ⊆ AM

## Statement

For $\gamma = c\sqrt{n / \log n}$, $\mathrm{GapSVP}_\gamma$ ([[shortest-vector-problem|GapSVP]]) and $\mathrm{GapCVP}_\gamma$ lie in $\classNP \cap \classcoAM$ ([[gapsvp-to-coam-gg00|GapSVP ∈ coAM]]) — [[GG00 - On the limits of non-approximability of lattice problems|GG00]]. A Karp reduction from an $\classNP$-complete problem to them would therefore give $\classcoNP \subseteq \classAM$, which collapses the polynomial hierarchy to its second level — [[BHZ87 - Does co-NP Have Short Interactive Proofs|BHZ87]].
