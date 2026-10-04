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
rationale:
  class: "The collapse follows from the inclusion itself, whatever proof establishes it."
---

# IP ⊆ AM collapses the polynomial hierarchy

## Statement

If [[interactive-proof-systems|IP]] is contained in [[arthur-merlin|AM]], then $\classPSPACE \subseteq \mathbf{\Pi_2^P}$ and the [[polynomial-time-hierarchy|polynomial hierarchy]] collapses to its second level, since $\classIP = \classPSPACE$ — [[Sha90 - IP = PSPACE|Sha90]] — and $\classAM \subseteq \mathbf{\Pi_2^P}$ — [[BM88 - Arthur-merlin games A randomized proof system and a hierarchy of complexity classes|BM88]].

## Sketch

$\mathbf{\Sigma_2^P} \cup \mathbf{\Pi_2^P} \subseteq \mathbf{PH} \subseteq \classPSPACE = \classIP \subseteq \classAM \subseteq \mathbf{\Pi_2^P}$, so $\mathbf{\Sigma_2^P} = \mathbf{\Pi_2^P} = \mathbf{PH} = \classPSPACE$.

## Notes

- Constant-round interactive proofs are contained in AM: $\classIP[k] \subseteq \classAM[k+2]$ — [[GS86 - Private Coins versus Public Coins in Interactive Proof Systems|GS86]] — and $\classAM[k] = \classAM$ for constant $k$ — [[BM88 - Arthur-merlin games A randomized proof system and a hierarchy of complexity classes|BM88]]. The collapse concerns IP with polynomially many rounds.
