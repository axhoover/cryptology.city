---
type: barrier
status: draft
title: "coNP ⊆ AM collapses the polynomial hierarchy"
aliases: []
id: bar-conp-to-am-bm88
hypotheses: [conp]
conclusion: am
class: free
consequences:
  - kind: complexity
    target: "ph-collapse-second-level"
    class: free
strength: unconditional
source:
  - "[[BHZ87 - Does co-NP Have Short Interactive Proofs|BHZ87]]"
  - "[[BM88 - Arthur-merlin games A randomized proof system and a hierarchy of complexity classes|BM88]]"
rationale:
  class: "The collapse follows from the inclusion itself, whatever proof establishes it."
---

# coNP ⊆ AM collapses the polynomial hierarchy

## Statement

If [[co-nondeterministic-polynomial-time|coNP]] is contained in [[arthur-merlin|AM]], then $\mathbf{\Sigma_2^P} = \mathbf{\Pi_2^P} = \classAM$, so the [[polynomial-time-hierarchy|polynomial hierarchy]] collapses to its second level — [[BHZ87 - Does co-NP Have Short Interactive Proofs|BHZ87]]; [[BM88 - Arthur-merlin games A randomized proof system and a hierarchy of complexity classes|BM88]] derive it from the collapse theorem $\classAM[k] = \classAM$. Whether $\classcoNP \subseteq \classAM$ holds is open.

## Sketch

$\mathbf{\Sigma_2^P} = \exists \cdot \classcoNP$. If $\classcoNP \subseteq \classAM$, this is contained in $\exists \cdot \classAM = \mathbf{MAM}$, which equals $\classAM$ by the collapse theorem, and $\classAM \subseteq \mathbf{\Pi_2^P}$. Hence $\mathbf{\Sigma_2^P} \subseteq \mathbf{\Pi_2^P}$, which forces equality.
