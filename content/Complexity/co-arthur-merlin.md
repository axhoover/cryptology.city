---
aliases:
  - coAM
  - Co-Arthur-Merlin
title: Co-Arthur-Merlin
---

# Co-Arthur-Merlin

The complement class of [[arthur-merlin|AM]]: a problem is in coAM if its complement is in AM. Equivalently, coAM is the class of problems for which a "no" answer has an Arthur-Merlin protocol — Arthur sends a random challenge, Merlin responds, and Arthur can verify "no" answers with high probability.

See the complexity zoo entry [here](https://complexityzoo.net/Complexity_Zoo:A#coam).

## Known relationships

- $\classBPP \subseteq \classcoAM$: BPP problems have a trivial one-message coAM protocol where Merlin's message is ignored (Arthur decides alone). Symmetrically, $\classBPP \subseteq \classAM$.
- $\classSZK \subseteq \classAM \cap \classcoAM$: statistical zero-knowledge problems can be argued from both sides with Arthur-Merlin protocols — TODO citation.
- $\classcoNP \subseteq \classcoAM$, since $\classNP \subseteq \classAM$ (by [[GS86 - Private Coins versus Public Coins in Interactive Proof Systems|GS86]]) and taking complements.
- If graph isomorphism is $\classNP$-complete, then the [[polynomial-time-hierarchy|polynomial hierarchy]] collapses to $\mathbf{\Sigma_2^P}$. This uses the fact that graph non-isomorphism is in $\classcoAM$, so if GI were NP-complete then $\classNP \subseteq \classcoAM$, collapsing AM to $\mathbf{\Sigma_2^P}$ — TODO citation.

## Notable problems

- **Graph non-isomorphism**: given two graphs $G_0, G_1$, are they non-isomorphic? This is in coAM: Arthur picks a random bit $b$ and a random permutation $\pi$, sends $\pi(G_b)$ to Merlin, and Merlin must identify which original graph it came from. If the graphs are non-isomorphic, Merlin (with unbounded power) can always identify $b$ correctly.
