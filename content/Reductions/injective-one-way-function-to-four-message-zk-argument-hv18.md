---
type: reduction
status: draft
title: "Injective OWF ⇒ Four-message ZK arguments for NP (fully black-box)"
aliases: []
id: red-injective-one-way-function-to-four-message-zk-argument-hv18
kind: implication
hypotheses: [injective-one-way-function]
conclusion: four-message-zk-argument
class: fully-black-box
model: standard
source:
  - "[[HV18 - Round-Optimal Fully Black-Box Zero-Knowledge Arguments from One-Way Permutations|HV18]]"
  - "[[KOS18 - Round Optimal Black-Box Commit-and-Prove|KOS18]]"
security-loss: ""
rationale:
  class: "HV18 and KOS18 build fully black-box arguments, which use the injective one-way function only as an oracle and prove zero knowledge and soundness with a simulator and a reduction that use the adversary only as an oracle."
---

# Injective OWF ⇒ Four-message ZK arguments for NP (fully black-box)

## Statement

If [[injective-one-way-function|injective one-way functions]] exist, every language in $\classNP$ has a four-message [[zero-knowledge-proof#four-message-zero-knowledge-arguments|zero-knowledge argument]] with negligible soundness error that uses the function only as a black box — [[HV18 - Round-Optimal Fully Black-Box Zero-Knowledge Arguments from One-Way Permutations|HV18]], [[KOS18 - Round Optimal Black-Box Commit-and-Prove|KOS18]], independently.

## Notes

- For an arbitrary one-way function, a fully black-box four-message construction would give $\classcoNP \subseteq \classMA$ ([[no-owf-to-four-message-zk-argument-hpv20|No fully-black-box reduction from OWF to four-message ZK arguments]]) — [[HPV20 - Which Languages Have 4-Round Fully Black-Box Zero-Knowledge Arguments from One-Way Functions|HPV20]]; four messages from any one-way function are reached by a construction that is not fully black-box ([[owf-to-four-message-zk-argument-bjy97|OWF ⇒ Four-message ZK arguments for NP]]) — [[BJY97 - Round-Optimal Zero-Knowledge Arguments Based on any One-Way Function|BJY97]].
- The same works give fully black-box five-message zero-knowledge arguments for $\classNP$ from any one-way function — [[HPV20 - Which Languages Have 4-Round Fully Black-Box Zero-Knowledge Arguments from One-Way Functions|HPV20]].
- HV18 also give a four-message perfect zero-knowledge argument for $\classNP$ from claw-free permutations by a black-box construction — [[HV18 - Round-Optimal Fully Black-Box Zero-Knowledge Arguments from One-Way Permutations|HV18]]. KOS18's commit-and-prove protocols from injective one-way functions are zero-knowledge in four rounds and witness-indistinguishable in three — [[KOS18 - Round Optimal Black-Box Commit-and-Prove|KOS18]].
