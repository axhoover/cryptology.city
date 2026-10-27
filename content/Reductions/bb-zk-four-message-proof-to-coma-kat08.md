---
type: reduction
status: draft
title: "Four-message black-box ZK proofs ⊆ coMA"
aliases: []
id: red-bb-zk-four-message-proof-to-coma-kat08
kind: inclusion
hypotheses: [bb-zk-four-message-proof]
conclusion: coma
class: free
model: standard
source:
  - "[[Kat08 - Which Languages Have 4-Round Zero-Knowledge Proofs|Kat08]]"
security-loss: ""
---

# Four-message black-box ZK proofs ⊆ coMA

## Statement

Suppose a language $L$ has a [[computational-zero-knowledge#four-message-black-box-zero-knowledge-proofs|four-message interactive proof]], sound against unbounded provers, with negligible soundness error that is computational zero-knowledge with a black-box simulator. Then the complement of $L$ is in $\classMA$, so $L$ is in [[co-merlin-arthur|coMA]] — [[Kat08 - Which Languages Have 4-Round Zero-Knowledge Proofs|Kat08]]. The theorem is unconditional and allows imperfect completeness — [[Kat08 - Which Languages Have 4-Round Zero-Knowledge Proofs|Kat08]]. An $\classNP$-complete language with such a proof would give $\classcoNP \subseteq \classMA \subseteq \classAM$ ([[BM88 - Arthur-merlin games A randomized proof system and a hierarchy of complexity classes|BM88]]), which collapses the polynomial hierarchy to its second level — [[BHZ87 - Does co-NP Have Short Interactive Proofs|BHZ87]].

## Notes

- Five-message private-coin black-box zero-knowledge proofs for $\classNP$ exist from claw-free permutations ([[claw-free-permutations-to-constant-round-zk-proof-gk96b|Claw-free permutations ⇒ Constant-round ZK proofs for NP (Goldreich–Kahan)]]) — [[GK96b - How to Construct Constant-Round Zero-Knowledge Proof Systems for NP|GK96b]] — and are therefore round-optimal for black-box simulation unless the polynomial hierarchy collapses — [[Kat08 - Which Languages Have 4-Round Zero-Knowledge Proofs|Kat08]].
- The bound does not extend to arguments: four-message zero-knowledge arguments for $\classNP$ exist from any one-way function ([[owf-to-four-message-zk-argument-bjy97|OWF ⇒ Four-message ZK arguments for NP]]) — [[BJY97 - Round-Optimal Zero-Knowledge Arguments Based on any One-Way Function|BJY97]].
- Four-message arguments built fully black-box from one-way functions also put the complement of $L$ in $\classMA$ ([[no-owf-to-four-message-zk-argument-hpv20|No fully-black-box reduction from OWF to four-message ZK arguments]]) — [[HPV20 - Which Languages Have 4-Round Fully Black-Box Zero-Knowledge Arguments from One-Way Functions|HPV20]].
- Three-message black-box zero knowledge, for proofs and arguments alike, exists only for languages in $\classBPP$ ([[bb-zk-three-message-to-bpp-gk96|Three-message black-box ZK ⊆ BPP]]) — [[GK96 - On the Composition of Zero-Knowledge Proof Systems|GK96a]].
