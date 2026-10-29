---
type: reduction
status: draft
title: "OWF ⇒ Four-message ZK arguments for NP"
aliases: []
id: red-owf-to-four-message-zk-argument-bjy97
kind: implication
hypotheses: [owf]
conclusion: four-message-zk-argument
class: unstated
model: standard
source:
  - "[[BJY97 - Round-Optimal Zero-Knowledge Arguments Based on any One-Way Function|BJY97]]"
security-loss: ""
---

# OWF ⇒ Four-message ZK arguments for NP

## Statement

If [[hash-function#preimage-resistance-one-wayness|one-way functions]] exist, every language in $\classNP$ has a four-message computational [[zero-knowledge-proof#four-message-zero-knowledge-arguments|zero-knowledge argument]] with negligible soundness error — [[BJY97 - Round-Optimal Zero-Knowledge Arguments Based on any One-Way Function|BJY97]]. Four-message zero-knowledge arguments for $\classNP$ were known before only from stronger assumptions — [[FS89 - Zero Knowledge Proofs of Knowledge in Two Rounds|FS89]].

## Notes

- Four rounds and one-way functions are each necessary for negligible-error zero-knowledge arguments for $\classNP$ — [[BJY97 - Round-Optimal Zero-Knowledge Arguments Based on any One-Way Function|BJY97]]; the round bound holds for black-box simulation, since three-message black-box zero knowledge exists only for languages in $\classBPP$ ([[bb-zk-three-message-to-bpp-gk96|Three-message black-box ZK ⊆ BPP]]) — [[GK96 - On the Composition of Zero-Knowledge Proof Systems|GK96a]].
- The construction cannot be fully black-box in the one-way function unless $\classcoNP \subseteq \classMA$ ([[no-owf-to-four-message-zk-argument-hpv20|No fully-black-box reduction from OWF to four-message ZK arguments]]) — [[HPV20 - Which Languages Have 4-Round Fully Black-Box Zero-Knowledge Arguments from One-Way Functions|HPV20]].
- Fully black-box four-message arguments follow from injective one-way functions ([[injective-one-way-function-to-four-message-zk-argument-hv18|Injective OWF ⇒ Four-message ZK arguments for NP (fully black-box)]]) — [[HV18 - Round-Optimal Fully Black-Box Zero-Knowledge Arguments from One-Way Permutations|HV18]], [[KOS18 - Round Optimal Black-Box Commit-and-Prove|KOS18]].
