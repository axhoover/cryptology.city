---
type: barrier
status: draft
title: "No fully-black-box reduction from iO + OWF to OWP"
aliases: []
id: bar-io-and-owf-to-owp-as16
hypotheses: [io, owf]
conclusion: owp
class: fully-black-box
consequences:
  - kind: contradiction
    target: ""
    class: fully-black-box
strength: unconditional
source:
  - "[[AS16 - On Constructing One-Way Permutations from Indistinguishability Obfuscation|AS16]]"
rationale:
  class: "AS16 rule out domain-invariant constructions that may obfuscate circuits calling the one-way function, a class containing every domain-invariant construction that uses the obfuscator and the function only as oracles, with proofs that use the adversary only as an oracle."
---

# No fully-black-box reduction from iO + OWF to OWP

## Statement

There is no fully-black-box construction of a domain-invariant [[one-way-permutation|one-way permutation]] family, in which the permutations' domains do not depend on the underlying primitives, from a [[hash-function#preimage-resistance-one-wayness|one-way function]] and [[indistinguishability-obfuscation|iO]] for circuits that call the function — [[AS16 - On Constructing One-Way Permutations from Indistinguishability Obfuscation|AS16]].

## Notes

- Without domain invariance the barrier does not apply: [[subexponential-io-and-owf-to-tdp-bpw16|sub-exponential iO + OWF ⇒ TDP]] gives trapdoor permutations whose domains depend on the index — [[BPW16 - Perfect Structure on the Edge of Chaos Trapdoor Permutations from Indistinguishability Obfuscation|BPW16]].
- Without iO this is Rudich's barrier: [[no-owf-to-owp-rud88|No fully-black-box reduction from OWF to OWP]] — [[Rud88 - Limits on the Provable Consequences of One-way Functions|Rud88]].
