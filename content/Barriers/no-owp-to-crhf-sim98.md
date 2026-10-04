---
type: barrier
status: draft
title: "No relativizing reduction from OWP to CRHF"
aliases: []
id: bar-owp-to-crhf-sim98
hypotheses: [owp]
conclusion: crhf
class: relativizing
consequences:
  - kind: contradiction
    target: ""
    class: relativizing
strength: unconditional
source:
  - "[[Sim98 - Finding Collisions on a One-Way Street Can Secure Hash Functions Be Based on General Assumptions|Sim98]]"
rationale:
  class: "Sim98 give an oracle relative to which one-way permutations exist and collision-resistant hash functions do not, and a construction and proof that hold relative to every oracle would hold relative to it."
---

# No relativizing reduction from OWP to CRHF

## Statement

Relative to a random permutation $\pi$ together with an oracle that finds collisions in circuits with $\pi$-gates, [[one-way-permutation|one-way permutations]] exist and [[hash-function#collision-resistance|collision-resistant hash functions]] do not, "for a suitably strong definition" of collision intractability; hence no relativizing, and in particular no fully-black-box, construction of a collision-resistant hash function from a one-way permutation exists — [[Sim98 - Finding Collisions on a One-Way Street Can Secure Hash Functions Be Based on General Assumptions|Sim98]].
