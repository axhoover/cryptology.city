---
type: barrier
status: draft
title: "No relativizing reduction from KE to TDP"
aliases: []
id: bar-ke-to-tdp-rud91
hypotheses: [ke]
conclusion: tdp
class: relativizing
consequences:
  - kind: contradiction
    target: ""
    class: relativizing
strength: unconditional
oracle: "Rudich's oracle relative to which three-message secret agreement exists and two-message secret agreement does not"
source:
  - "[[Rud91 - The Use of Interaction in Public Cryptosystems (Extended Abstract)|Rud91]]"
rationale:
  class: "A construction and security proof that hold relative to every oracle hold relative to Rud91's, under which key agreement exists and trapdoor functions do not."
---

# No relativizing reduction from KE to TDP

## Statement

There is an oracle relative to which three-message [[key-exchange|key agreement]] exists and [[trapdoor-permutation|trapdoor functions]] do not — [[Rud91 - The Use of Interaction in Public Cryptosystems (Extended Abstract)|Rud91]] — so no relativizing, and in particular no fully-black-box, construction of trapdoor permutations or trapdoor functions from key agreement exists.

## Notes

- Trapdoor permutations give PKE ([[tdp-to-pke|TDP ⇒ PKE]]) and hence two-message key agreement, so this barrier also follows from [[no-ke-to-pke-rud91|No relativizing reduction from KE to PKE]] — [[Rud91 - The Use of Interaction in Public Cryptosystems (Extended Abstract)|Rud91]].
