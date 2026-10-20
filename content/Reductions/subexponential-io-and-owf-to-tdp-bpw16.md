---
type: reduction
status: draft
title: Sub-exponential iO + OWF ⇒ TDP (Bitansky–Paneth–Wichs)
aliases: []
id: red-subexponential-io-and-owf-to-tdp-bpw16
kind: implication
hypotheses: [subexponential-io, owf]
conclusion: tdp
class: free
model: standard
source:
  - "[[BPW16 - Perfect Structure on the Edge of Chaos Trapdoor Permutations from Indistinguishability Obfuscation|BPW16]]"
security-loss: ""
rationale:
  class: "The permutation is an obfuscation of a circuit that evaluates the one-way function, so the construction uses the function's code."
---

# Sub-exponential iO + OWF ⇒ TDP (Bitansky–Paneth–Wichs)

## Statement

If [[indistinguishability-obfuscation#sub-exponentially-secure-io|sub-exponentially secure iO]] and [[hash-function#preimage-resistance-one-wayness|one-way functions]] exist, then [[trapdoor-permutation|trapdoor permutations]] exist — [[BPW16 - Perfect Structure on the Edge of Chaos Trapdoor Permutations from Indistinguishability Obfuscation|BPW16]]. These are the first trapdoor permutations not based on the hardness of factoring. The permutations' domains depend on the sampled index, so the construction is not domain-invariant.

## Notes

- Domain dependence is necessary: no fully-black-box construction of a domain-invariant one-way permutation from iO and one-way functions exists ([[no-io-and-owf-to-owp-as16|No fully-black-box reduction from iO + OWF to OWP]]) — [[AS16 - On Constructing One-Way Permutations from Indistinguishability Obfuscation|AS16]].
- The result removes the trapdoor-permutation and injective-OWF assumptions from earlier iO-based constructions — [[BPW16 - Perfect Structure on the Edge of Chaos Trapdoor Permutations from Indistinguishability Obfuscation|BPW16]].
