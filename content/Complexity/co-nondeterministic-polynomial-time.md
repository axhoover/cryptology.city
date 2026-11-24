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

The complement class of [[nondeterministic-polynomial-time|NP]]: a decision problem is in coNP if its complement (swapping "yes" and "no" answers) is in NP. Equivalently, coNP is the class of decision problems for which every "no" answer has a polynomial-length certificate verifiable in polynomial time.

See the complexity zoo entry [here](https://complexityzoo.net/Complexity_Zoo:C#conp).

## Known relationships

- [[p-to-conp|P ⊆ coNP]], [[conp-to-pspace|coNP ⊆ PSPACE]] and [[conp-to-coam|coNP ⊆ coAM]] — folklore.
- Whether $\classcoNP \subseteq \classAM$ is open; [[no-conp-to-am-bm88|it would collapse]] the [[polynomial-time-hierarchy|polynomial hierarchy]] to its second level — [[BHZ87 - Does co-NP Have Short Interactive Proofs|BHZ87]]; [[BM88 - Arthur-merlin games A randomized proof system and a hierarchy of complexity classes|BM88]].
- An $\classNP$-complete problem is in $\classcoNP$ if and only if $\classNP = \classcoNP$ — folklore.
- The decision versions of [[factoring|factoring]] ([[fac-to-np|in NP]] — folklore; [[fac-to-conp-pra75|in coNP]] — [[Pra75 - Every Prime Has a Succinct Certificate|Pra75]]) and [[discrete-logarithm|discrete logarithm]] ([[dlog-to-np|in NP]], [[dlog-to-conp|in coNP]] — folklore) are in $\classNP \cap \classcoNP$, so neither is $\classNP$-complete unless $\classNP = \classcoNP$.

## Notable problems

- **Tautology**: given a Boolean formula $\varphi$, is every assignment satisfying? $\classcoNP$-complete, since $\varphi$ is a tautology if and only if $\neg\varphi$ is unsatisfiable and SAT is $\classNP$-complete — [[Coo71 - The Complexity of Theorem-Proving Procedures|Coo71]].
- **Graph non-isomorphism**: are two graphs non-isomorphic? In $\classcoNP$, an isomorphism being a certificate for a "no" answer — folklore; in $\classSZK$ — [[GMW91 - Proofs that yield nothing but their validity or all languages in NP have zero-knowledge proof systems|GMW91]]; and in $\classAM$ — [[GS86 - Private Coins versus Public Coins in Interactive Proof Systems|GS86]], [[BM88 - Arthur-merlin games A randomized proof system and a hierarchy of complexity classes|BM88]].
- **Composite number**: given $n$, does $n$ have a non-trivial factor? In $\classNP$, such a factor being a certificate — folklore; in $\classcoNP$ — [[Pra75 - Every Prime Has a Succinct Certificate|Pra75]]; primality testing is in $\classP$ — [[AKS04 - PRIMES Is in P|AKS04]].

<!-- BEGIN GENERATED participates-in 79327685c40c -->

## Participates in

**Builds on Co-nondeterministic polynomial-time**

- [[conp-to-coam|coNP ⊆ coAM]]
- [[conp-to-pspace|coNP ⊆ PSPACE]]

**Produces Co-nondeterministic polynomial-time**

- [[dlog-to-conp|DLOG ⊆ coNP]]
- [[fac-to-conp-pra75|FAC ∈ coNP]]
- [[gapsvp-to-conp-ar04|GapSVP ∈ coNP for γ ≥ c√n]]
- [[owp-to-conp|OWP inversion ∈ NP ∩ coNP]]
- [[p-to-conp|P ⊆ coNP]]
- [[qr-to-conp|QR ∈ coNP]]

**Barriers**

- [[no-conp-to-am-bm88|coNP ⊆ AM collapses the polynomial hierarchy]]

<!-- END GENERATED participates-in -->
