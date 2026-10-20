---
type: complexity-class
status: draft
aliases:
  - coNP
  - Co-nondeterministic polynomial-time
title: Co-nondeterministic polynomial-time
id: conp
---

# Co-nondeterministic polynomial-time

The complement class of [[nondeterministic-polynomial-time|NP]]: a decision problem is in coNP if its complement (swapping "yes" and "no" answers) is in NP. Equivalently, coNP is the class of problems for which a "no" answer can be verified in polynomial time given an appropriate certificate.

See the complexity zoo entry [here](https://complexityzoo.net/Complexity_Zoo:C#conp).

## Known relationships

- $\classP \subseteq \classcoNP$, since P is closed under complement.
- If a problem is [[nondeterministic-polynomial-time|NP]]-complete, then it is in $\classcoNP$ if and only if $\classNP = \classcoNP$.
- $\classcoNP \subseteq \classcoAM$, since $\classNP \subseteq \classAM$ — folklore. Whether $\classcoNP \subseteq \classAM$ is open; it would collapse the polynomial hierarchy to its second level ([[no-conp-to-am-bm88]]) — [[BHZ87 - Does co-NP Have Short Interactive Proofs|BHZ87]]; [[BM88 - Arthur-merlin games A randomized proof system and a hierarchy of complexity classes|BM88]].
- Integer factorization and discrete logarithm are both in $\classNP \cap \classcoNP$: there are short certificates for both "yes" and "no" answers. This is one reason these problems are considered unlikely to be NP-complete — an NP-complete problem in coNP would imply $\classNP = \classcoNP$.
- $\classcoNP \subseteq \classPSPACE$.

## Notable problems

- **Tautology**: given a Boolean formula, is every assignment satisfying? (The complement of SAT, which is NP-complete.)
- **Graph non-isomorphism**: are two graphs non-isomorphic? This problem is in coNP, in $\classSZK$ — [[GMW91 - Proofs that yield nothing but their validity or all languages in NP have zero-knowledge proof systems|GMW91]] — and in $\classAM$ — [[GS86 - Private Coins versus Public Coins in Interactive Proof Systems|GS86]].
- **Composite number**: given $n$, does $n$ have a non-trivial factor? This is in both NP and coNP (primality testing is in $\classP$ — [[AKS04 - PRIMES Is in P|AKS04]]).

<!-- BEGIN GENERATED participates-in 56ee9566ec7e -->

## Participates in

**Builds on Co-nondeterministic polynomial-time**

- [[conp-to-coam|coNP ⊆ coAM]]
- [[conp-to-pspace|coNP ⊆ PSPACE]]

**Produces Co-nondeterministic polynomial-time**

- [[dlog-to-conp|DLOG ⊆ coNP]]
- [[fac-to-conp-pra75|FAC ∈ coNP]]
- [[gapsvp-to-conp-ar04|GapSVP ∈ coNP for γ ≥ c√n]]
- [[p-to-conp|P ⊆ coNP]]

**Barriers**

- [[no-conp-to-am-bm88|coNP ⊆ AM collapses the polynomial hierarchy]]

<!-- END GENERATED participates-in -->
