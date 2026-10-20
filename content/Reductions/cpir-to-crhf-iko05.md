---
type: reduction
status: draft
title: One-round sublinear cPIR ⇒ CRHF
aliases: []
id: red-cpir-to-crhf-iko05
kind: implication
hypotheses: [one-round-sublinear-cpir]
conclusion: crhf
class: unstated
model: standard
source:
  - "[[IKO05 - Sufficient Conditions for Collision-Resistant Hashing|IKO05]]"
security-loss: ""
---

# One-round sublinear cPIR ⇒ CRHF

## Statement

A perfectly correct, one-round [[single-server-private-information-retrieval|single-server PIR]] scheme with communication $O(n^c)$ for a constant $c < 1$, that is, a [[single-server-private-information-retrieval#one-round-sublinear-pir|one-round sublinear]] one, yields a [[hash-function#collision-resistance|collision-resistant hash function]] family — [[IKO05 - Sufficient Conditions for Collision-Resistant Hashing|IKO05]].

## Notes

- The hash outputs $t = \omega(\log k)$ answers to independent queries on an encoding of its $k$-bit input, so it compresses only when $t \cdot \beta(n) < k$ for answer length $\beta(n)$ — [[IKO05 - Sufficient Conditions for Collision-Resistant Hashing|IKO05]]. Interactive schemes, and schemes in which the server sends $n - o(n)$ bits such as [[tdp-to-cpir-ko00|the trapdoor-permutation construction]], do not meet the hypothesis — [[KO00 - One-Way Trapdoor Permutations Are Sufficient for Non-trivial Single-Server Private Information Retrieval|KO00]].
- Collision resistance does not follow from one-way permutations by relativizing constructions ([[no-owp-to-crhf-sim98|No relativizing reduction from OWP to CRHF]]) — [[Sim98 - Finding Collisions on a One-Way Street Can Secure Hash Functions Be Based on General Assumptions|Sim98]].
- The same paper derives collision-resistant hashing from homomorphic encryption: [[additively-homomorphic-encryption-to-crhf-iko05|homomorphic encryption ⇒ CRHF]] — [[IKO05 - Sufficient Conditions for Collision-Resistant Hashing|IKO05]].
