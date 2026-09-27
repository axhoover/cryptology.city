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
  - "[[BM88 - Arthur-merlin games A randomized proof system and a hierarchy of complexity classes|BM88]]"
---

# coNP ⊆ AM collapses the polynomial hierarchy

A reduction of class `free` from [[co-nondeterministic-polynomial-time|coNP]] to [[arthur-merlin|AM]], i.e. the inclusion $\classcoNP \subseteq \classAM$, would collapse the [[polynomial-time-hierarchy|polynomial hierarchy]].

## Statement

If $\classcoNP \subseteq \classAM$, then $\mathbf{\Sigma_2^P} = \mathbf{\Pi_2^P} = \classAM$, so the [[polynomial-time-hierarchy|polynomial hierarchy]] collapses to its second level. The result is due to Boppana, Håstad and Zachos (IPL 1987); [[BM88 - Arthur-merlin games A randomized proof system and a hierarchy of complexity classes|BM88]] derive it from the collapse theorem $\classAM[k] = \classAM$. Whether $\classcoNP \subseteq \classAM$ holds is open.

## Sketch

$\mathbf{\Sigma_2^P} = \exists \cdot \classcoNP$. If $\classcoNP \subseteq \classAM$, this is contained in $\exists \cdot \classAM = \mathbf{MAM}$, which equals $\classAM$ by the collapse theorem, and $\classAM \subseteq \mathbf{\Pi_2^P}$. Hence $\mathbf{\Sigma_2^P} \subseteq \mathbf{\Pi_2^P}$, which forces equality.

## Notes

`class: free`: the consequence follows from the inclusion itself, whatever the proof technique.

- Replaces `content/Reductions/conp-to-am-gs86.md`, which asserted $\classcoNP \subseteq \classAM$ citing [[GS86 - Private Coins versus Public Coins in Interactive Proof Systems|GS86]]. GS86 prove that private-coin interactive proofs are simulated by public-coin ones with two extra rounds, and give no AM protocol for coNP.
