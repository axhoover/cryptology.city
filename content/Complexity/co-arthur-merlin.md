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

The complement class of [[arthur-merlin|AM]]: a problem is in coAM if its complement is in AM. Equivalently, coAM is the class of problems for which a "no" answer can be verified by an Arthur-Merlin protocol.

See the complexity zoo entry [here](https://complexityzoo.net/Complexity_Zoo:A#coam).

## Known relationships

- $\classBPP \subseteq \classAM \cap \classcoAM$ ([[bpp-to-am-gs86|BPP ⊆ AM]], [[bpp-to-coam-gs86|BPP ⊆ coAM]]) — folklore.
- $\classSZK \subseteq \classAM \cap \classcoAM$ ([[szk-to-am|SZK ⊆ AM]], [[szk-to-coam|SZK ⊆ coAM]]) — [[AH91 - Statistical zero-knowledge languages can be recognized in two rounds|AH91]] ($\classAM$), [[For87 - The Complexity of Perfect Zero-Knowledge|For87]] ($\classcoAM$); [[SV03 - A Complete Problem for Statistical Zero Knowledge|SV03]] give a unified proof via Statistical Difference.
- $\classcoNP \subseteq \classcoAM$ ([[conp-to-coam|coNP ⊆ coAM]]), by taking complements in $\classNP \subseteq \classAM$ — folklore.
- Graph isomorphism is in $\classcoAM$, so if it is $\classNP$-complete then $\classNP \subseteq \classcoAM$, i.e. $\classcoNP \subseteq \classAM$, and the [[polynomial-time-hierarchy|polynomial hierarchy]] collapses to $\mathbf{\Sigma_2^P}$ ([[no-conp-to-am-bm88|coNP ⊆ AM collapses the polynomial hierarchy]]) — [[BHZ87 - Does co-NP Have Short Interactive Proofs|BHZ87]]; see also [[BM88 - Arthur-merlin games A randomized proof system and a hierarchy of complexity classes|BM88]].

## Notable problems

- **Graph non-isomorphism**: given two graphs $G_0, G_1$, are they non-isomorphic? This is in $\classAM$, so graph isomorphism is in $\classcoAM$ — [[GS86 - Private Coins versus Public Coins in Interactive Proof Systems|GS86]], [[BM88 - Arthur-merlin games A randomized proof system and a hierarchy of complexity classes|BM88]]. In the private-coin protocol of [[GMW91 - Proofs that yield nothing but their validity or all languages in NP have zero-knowledge proof systems|GMW91]], the verifier samples $b \getsr \bits$ and a uniformly random permutation $\pi$, sends $\pi(G_b)$ to the prover, and accepts if the prover returns $b$. If the graphs are non-isomorphic, an unbounded prover always returns $b$; if they are isomorphic, $\pi(G_b)$ is independent of $b$ and every prover returns $b$ with probability $1/2$. The verifier's coins must stay hidden; [[GS86 - Private Coins versus Public Coins in Interactive Proof Systems|GS86]] convert such private-coin protocols into Arthur–Merlin protocols.

<!-- BEGIN GENERATED participates-in f3f70955464b -->

## Participates in

**Produces Co-Arthur-Merlin**

- [[bpp-to-coam-gs86|BPP ⊆ coAM]]
- [[conp-to-coam|coNP ⊆ coAM]]
- [[gapsvp-to-coam-gg00|GapSVP ∈ coAM for γ ≥ √(n/log n)]]
- [[szk-to-coam|SZK ⊆ coAM]]

<!-- END GENERATED participates-in -->
