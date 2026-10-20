---
type: reduction
status: draft
title: Sub-exponential iO + Sub-exponential OWF ⇒ TDP (Bitansky–Paneth–Wichs)
aliases: []
id: red-subexponential-io-and-owf-to-tdp-bpw16
kind: implication
hypotheses: [subexponential-io, subexponential-owf]
conclusion: tdp
class: free
model: standard
source:
  - "[[BPW16 - Perfect Structure on the Edge of Chaos Trapdoor Permutations from Indistinguishability Obfuscation|BPW16]]"
security-loss: ""
rationale:
  class: "The permutation is an obfuscation of a circuit that evaluates the one-way function, so the construction uses the function's code."
---

# Sub-exponential iO + Sub-exponential OWF ⇒ TDP (Bitansky–Paneth–Wichs)

## Statement

If [[indistinguishability-obfuscation#sub-exponentially-secure-io|sub-exponentially secure iO]] and [[hash-function#sub-exponential-one-wayness|sub-exponentially secure one-way functions]] exist, then [[trapdoor-permutation|trapdoor permutations]] exist — [[BPW16 - Perfect Structure on the Edge of Chaos Trapdoor Permutations from Indistinguishability Obfuscation|BPW16]]. These are the first trapdoor permutations not based on the hardness of factoring. The construction is not domain-invariant. Domain invariance allows a domain to depend on the permutation index, but here the domain is defined through a pseudorandom function built from the one-way function, so replacing that function changes the domain even under the same key — [[AS16 - On Constructing One-Way Permutations from Indistinguishability Obfuscation|AS16]].

## Notes

- Domain dependence is unavoidable for constructions that use the obfuscator as an oracle on circuits calling the one-way function, a class containing this construction ([[no-io-and-owf-to-owp-as16|No fully-black-box reduction from iO + OWF to domain-invariant OWP]]) — [[AS16 - On Constructing One-Way Permutations from Indistinguishability Obfuscation|AS16]].
- The result removes the trapdoor-permutation and injective-OWF assumptions from many earlier iO-based constructions — [[BPW16 - Perfect Structure on the Edge of Chaos Trapdoor Permutations from Indistinguishability Obfuscation|BPW16]].
