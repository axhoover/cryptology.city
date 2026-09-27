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
---

# No relativizing reduction from OWP to CRHF

A reduction of class `relativizing` from [[one-way-permutation|OWP]] to [[hash-function#collision-resistance|CRHF]] would imply a contradiction.

## Statement

There is an oracle relative to which [[one-way-permutation|one-way permutations]] exist but [[hash-function#collision-resistance|collision-resistant hash functions]] do not; hence no relativizing, and in particular no fully-black-box, construction of a collision-resistant hash function from a one-way permutation exists — [[Sim98 - Finding Collisions on a One-Way Street Can Secure Hash Functions Be Based on General Assumptions|Sim98]].

## Notes

`class: relativizing`: a construction and proof that hold relative to every oracle would hold relative to Sim98's, so the separation rules out every relativizing reduction and, by the partial order in `schema/reduction-classes.yaml`, every fully-black-box one.

- Sim98 excludes collision-intractable hash functions "for a suitably strong definition" of collision intractability.
