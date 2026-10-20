---
type: barrier
status: draft
title: "No fully-black-box reduction from iO + OWP to average-case-hard SZK"
aliases: []
id: bar-io-and-owp-to-szk-hardness-bdv17
hypotheses: [io, owp]
conclusion: szk-hardness
class: fully-black-box
consequences:
  - kind: contradiction
    target: ""
    class: fully-black-box
strength: unconditional
source:
  - "[[BDV17 - Structure vs Hardness Through the Obfuscation Lens|BDV17]]"
rationale:
  class: "BDV17 rule out constructions that may obfuscate circuits with one-way-permutation gates, a class containing every construction that uses the obfuscator and the permutation only as oracles, with proofs that use the adversary only as an oracle."
---

# No fully-black-box reduction from iO + OWP to average-case-hard SZK

## Statement

There is no fully-black-box construction, from a [[one-way-permutation|one-way permutation]] and [[indistinguishability-obfuscation|iO]] for circuits that call the permutation, of a promise problem in [[statistical-zero-knowledge|SZK]] that no efficient algorithm decides on every instance — [[BDV17 - Structure vs Hardness Through the Obfuscation Lens|BDV17]]. BDV17 take the problem to be [[statistical-zero-knowledge#statistical-difference|Statistical Difference]] on instances given by circuits that call the primitives, and give an oracle $\Psi$ implementing a one-way permutation and an obfuscator for circuits with permutation gates, together with an adversary $\calA$ that decides Statistical Difference relative to $\Psi$ on every instance, such that the permutation and the obfuscator stay secure against efficient adversaries with oracle access to $\calA$. An algorithm that decides a promise problem on every instance decides it under every distribution, so constructions of [[statistical-zero-knowledge#average-case-hardness|average-case-hard SZK]] problems are ruled out as well — standard. The same holds for every primitive with a fully-black-box construction from one-way permutations and iO for circuits that call the permutation, among them [[public-key-encryption|public-key encryption]], [[oblivious-transfer|oblivious transfer]], [[deniable-encryption|deniable encryption]] and [[functional-encryption|functional encryption]] — [[BDV17 - Structure vs Hardness Through the Obfuscation Lens|BDV17]].

## Notes

- For [[nondeterministic-polynomial-time|NP]] $\cap$ [[co-nondeterministic-polynomial-time|coNP]], BDV17 prove the analogue with an [[injective-one-way-function|injective one-way function]] in place of the permutation: there is no fully-black-box construction, from an injective one-way function and iO for circuits that call it, of a language in $\classNP \cap \classcoNP$ that no efficient algorithm decides on every input, nor from any primitive with a fully-black-box construction from these, among them public-key encryption, oblivious transfer, deniable encryption and functional encryption — [[BDV17 - Structure vs Hardness Through the Obfuscation Lens|BDV17]].
- That separation cannot be strengthened to one-way permutations: [[owp-to-conp|inverting a one-way permutation is in NP ∩ coNP]] — folklore — so one-way permutations give hard problems in $\classNP \cap \classcoNP$, while even together with iO they give none in $\classSZK$ by a fully-black-box construction — [[BDV17 - Structure vs Hardness Through the Obfuscation Lens|BDV17]].
- Strongly homomorphic encryption does give hard problems in $\classSZK$: for a public-key bit-encryption scheme with a [[homomorphic-encryption#strongly-homomorphic-encryption|strong]] homomorphic evaluator for a suitable function, [[he-to-re-bl13|statistical rerandomizability]] places distinguishing encryptions of $0$ from encryptions of $1$ in $\classSZK$ — [[BL13 - Limits of Provable Security for Homomorphic Encryption|BL13]].
