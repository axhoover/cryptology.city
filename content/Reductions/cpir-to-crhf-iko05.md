---
type: reduction
status: draft
title: One-round cPIR ⇒ CRHF
aliases: []
id: red-cpir-to-crhf-iko05
kind: implication
hypotheses: [cpir]
conclusion: crhf
class: unstated
model: standard
source:
  - "[[IKO05 - Sufficient Conditions for Collision-Resistant Hashing|IKO05]]"
security-loss: ""
---

# One-round cPIR ⇒ CRHF

## Statement

A one-round (two-message) [[single-server-private-information-retrieval|single-server PIR]] scheme with non-trivial communication yields a [[hash-function#collision-resistance|collision-resistant hash function]] family — [[IKO05 - Sufficient Conditions for Collision-Resistant Hashing|IKO05]].

## Notes

- Collision resistance does not follow from one-way permutations by relativizing constructions ([[no-owp-to-crhf-sim98|No relativizing reduction from OWP to CRHF]]) — [[Sim98 - Finding Collisions on a One-Way Street Can Secure Hash Functions Be Based on General Assumptions|Sim98]].
- The same paper derives collision-resistant hashing from homomorphic encryption: [[additively-homomorphic-encryption-to-crhf-iko05|homomorphic encryption ⇒ CRHF]] — [[IKO05 - Sufficient Conditions for Collision-Resistant Hashing|IKO05]].
