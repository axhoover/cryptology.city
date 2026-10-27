---
type: barrier
status: draft
title: "No fully-black-box reduction from OWF to four-message ZK arguments"
aliases: []
id: bar-owf-to-four-message-zk-argument-hpv20
hypotheses: [owf]
conclusion: four-message-zk-argument
class: fully-black-box
consequences:
  - kind: complexity
    target: conp-subset-am
    class: fully-black-box
  - kind: complexity
    target: ph-collapse-second-level
    class: fully-black-box
strength: unconditional
circumvented-by: [red-owf-to-four-message-zk-argument-bjy97]
source:
  - "[[HPV20 - Which Languages Have 4-Round Fully Black-Box Zero-Knowledge Arguments from One-Way Functions|HPV20]]"
rationale:
  class: "HPV20 rule out fully black-box constructions, which use the one-way function only as an oracle and prove zero knowledge and soundness with a simulator and a reduction that use the cheating verifier and prover only as oracles."
---

# No fully-black-box reduction from OWF to four-message ZK arguments

## Statement

If a language $L$ has a four-message [[zero-knowledge-proof#four-message-zero-knowledge-arguments|zero-knowledge argument]] with negligible soundness error that is fully black-box from [[hash-function#preimage-resistance-one-wayness|one-way functions]], then the complement of $L$ is in $\classMA$ — [[HPV20 - Which Languages Have 4-Round Fully Black-Box Zero-Knowledge Arguments from One-Way Functions|HPV20]]. So a fully black-box construction of four-message zero-knowledge arguments for $\classNP$ from every one-way function would give $\classcoNP \subseteq \classMA \subseteq \classAM$ ([[BM88 - Arthur-merlin games A randomized proof system and a hierarchy of complexity classes|BM88]]) and collapse the polynomial hierarchy to its second level — [[BHZ87 - Does co-NP Have Short Interactive Proofs|BHZ87]].

## Notes

- Four-message zero-knowledge arguments for $\classNP$ do follow from any one-way function ([[owf-to-four-message-zk-argument-bjy97|OWF ⇒ Four-message ZK arguments for NP]]) — [[BJY97 - Round-Optimal Zero-Knowledge Arguments Based on any One-Way Function|BJY97]]; by HPV20's theorem that construction is not fully black-box unless $\classcoNP \subseteq \classMA$.
- Fully black-box four-message arguments exist from injective one-way functions ([[injective-one-way-function-to-four-message-zk-argument-hv18|Injective OWF ⇒ Four-message ZK arguments for NP (fully black-box)]]) — [[HV18 - Round-Optimal Fully Black-Box Zero-Knowledge Arguments from One-Way Permutations|HV18]], [[KOS18 - Round Optimal Black-Box Commit-and-Prove|KOS18]] — and, as HPV20 note, the same works give fully black-box five-message ones from any one-way function — [[HPV20 - Which Languages Have 4-Round Fully Black-Box Zero-Knowledge Arguments from One-Way Functions|HPV20]].
- For proofs sound against unbounded provers, four messages with a black-box simulator put $L$ in coMA under no assumption at all ([[bb-zk-four-message-proof-to-coma-kat08|Four-message black-box ZK proofs ⊆ coMA]]) — [[Kat08 - Which Languages Have 4-Round Zero-Knowledge Proofs|Kat08]].
