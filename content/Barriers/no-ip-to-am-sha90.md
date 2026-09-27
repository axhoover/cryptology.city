---
type: barrier
status: draft
title: "IP ⊆ AM collapses the polynomial hierarchy"
aliases: []
id: bar-ip-to-am-sha90
hypotheses: [ip]
conclusion: am
class: free
consequences:
  - kind: complexity
    target: ph-collapse-second-level
    class: free
strength: unconditional
source:
  - "[[Sha90 - IP = PSPACE|Sha90]]"
  - "[[BM88 - Arthur-merlin games A randomized proof system and a hierarchy of complexity classes|BM88]]"
---

# IP ⊆ AM collapses the polynomial hierarchy

A reduction of class `free` from [[interactive-proof-systems|IP]] to [[arthur-merlin|AM]], i.e. the inclusion $\classIP \subseteq \classAM$, would collapse the [[polynomial-time-hierarchy|polynomial hierarchy]].

## Statement

If $\classIP \subseteq \classAM$, then $\classPSPACE \subseteq \mathbf{\Pi_2^P}$, and the [[polynomial-time-hierarchy|polynomial hierarchy]] collapses to its second level: $\classIP = \classPSPACE$ — [[Sha90 - IP = PSPACE|Sha90]], and $\classAM \subseteq \mathbf{\Pi_2^P}$ — [[BM88 - Arthur-merlin games A randomized proof system and a hierarchy of complexity classes|BM88]].

## Sketch

$\mathbf{\Sigma_2^P} \cup \mathbf{\Pi_2^P} \subseteq \mathbf{PH} \subseteq \classPSPACE = \classIP \subseteq \classAM \subseteq \mathbf{\Pi_2^P}$, so $\mathbf{\Sigma_2^P} = \mathbf{\Pi_2^P} = \mathbf{PH} = \classPSPACE$.

## Notes

`class: free`: the consequence follows from the inclusion itself, whatever the proof technique.

- Replaces content/Reductions/ip-to-am-gs86.md, which recorded $\classIP \subseteq \classAM$ citing [[GS86 - Private Coins versus Public Coins in Interactive Proof Systems|GS86]]. GS86 prove the round-preserving $\classIP[k] \subseteq \classAM[k+2]$, which with $\classAM[k] = \classAM$ for constant $k$ ([[BM88 - Arthur-merlin games A randomized proof system and a hierarchy of complexity classes|BM88]]) gives constant-round IP ⊆ AM; the base-class inclusion drops the round parameter.
