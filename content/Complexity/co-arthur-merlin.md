---
type: complexity-class
status: draft
aliases:
  - coAM
  - Co-Arthur-Merlin
title: Co-Arthur-Merlin
id: coam
---

# Co-Arthur-Merlin

The complement class of [[arthur-merlin|AM]]: a problem is in coAM if its complement is in AM. Equivalently, coAM is the class of problems for which a "no" answer has an Arthur-Merlin protocol — Arthur sends a random challenge, Merlin responds, and Arthur can verify "no" answers with high probability.

See the complexity zoo entry [here](https://complexityzoo.net/Complexity_Zoo:A#coam).

## Known relationships

- $\classBPP \subseteq \classcoAM$: BPP problems have a trivial one-message coAM protocol where Merlin's message is ignored (Arthur decides alone). Symmetrically, $\classBPP \subseteq \classAM$.
- $\classSZK \subseteq \classAM \cap \classcoAM$: statistical zero-knowledge problems can be argued from both sides with Arthur-Merlin protocols — TODO citation.
- $\classcoNP \subseteq \classcoAM$, since $\classNP \subseteq \classAM$ and taking complements — folklore.
- If graph isomorphism is $\classNP$-complete, then the [[polynomial-time-hierarchy|polynomial hierarchy]] collapses to $\mathbf{\Sigma_2^P}$. This uses the fact that graph isomorphism is in $\classcoAM$, so if GI were NP-complete then $\classNP \subseteq \classcoAM$, i.e. $\classcoNP \subseteq \classAM$, which collapses the hierarchy — Boppana, Håstad, and Zachos (IPL 1987); see also [[BM88 - Arthur-merlin games A randomized proof system and a hierarchy of complexity classes|BM88]].

## Notable problems

- **Graph non-isomorphism**: given two graphs $G_0, G_1$, are they non-isomorphic? This is in $\classAM$, so graph isomorphism is in $\classcoAM$ — [[BM88 - Arthur-merlin games A randomized proof system and a hierarchy of complexity classes|BM88]]. In the private-coin protocol of [[GMW91 - Proofs that yield nothing but their validity or all languages in NP have zero-knowledge proof systems|GMW91]], the verifier picks a secret random bit $b$ and a random permutation $\pi$, sends $\pi(G_b)$ to the prover, and the prover must identify which original graph it came from. If the graphs are non-isomorphic, the prover (with unbounded power) can always identify $b$ correctly. The verifier's coins must stay hidden; [[GS86 - Private Coins versus Public Coins in Interactive Proof Systems|GS86]] convert such private-coin protocols into Arthur–Merlin protocols.

<!-- BEGIN GENERATED participates-in e017f03e9d23 -->

## Participates in

**Produces Co-Arthur-Merlin**

- [[am-to-coam|AM = coAM]]
- [[bpp-to-coam-gs86|BPP ⊆ coAM]]
- [[conp-to-coam|coNP ⊆ coAM]]
- [[szk-to-coam|SZK ⊆ coAM]]

<!-- END GENERATED participates-in -->
