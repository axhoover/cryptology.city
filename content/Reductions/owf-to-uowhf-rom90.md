---
type: reduction
status: draft
title: OWF ⇒ UOWHF (Rompel)
aliases: []
id: red-owf-to-uowhf-rom90
kind: implication
hypotheses: [owf]
conclusion: uowhf
class: fully-black-box
model: standard
source:
  - "[[Rom90 - One-way functions are necessary and sufficient for secure signatures|Rom90]]"
security-loss: "polynomial"
rationale:
  class: "The hash family evaluates the one-way function only as an oracle, and the reduction inverts it using any target-collision finder only as an oracle."
---

# OWF ⇒ UOWHF (Rompel)

## Statement

Every [[hash-function#preimage-resistance-one-wayness|one-way function]] yields a [[hash-function#target-collision-resistance-universal-one-wayness|universal one-way hash function]] family compressing by any polynomial number of bits — [[Rom90 - One-way functions are necessary and sufficient for secure signatures|Rom90]].

## Notes

- With [[uowhf-and-ots-to-ds-ny89|UOWHF + one-time signature ⇒ DS]] and [[hash-function-to-hash-based-signatures-lam79|Lamport's one-time signatures]], this gives [[hash-function-to-ds|OWF ⇒ DS]] — [[Rom90 - One-way functions are necessary and sufficient for secure signatures|Rom90]].
- A complete proof of Rompel's construction is in [[KK05 - On Constructing Universal One-Way Hash Functions from Arbitrary One-Way Functions|KK05]]. A simpler construction through inaccessible entropy has substantially shorter keys and output — [[HHR+10 - Universal One-Way Hash Functions via Inaccessible Entropy|HHR+10]].
- For one-way permutations, one evaluation per bit of compression suffices: [[owp-to-uowhf-ny89|OWP ⇒ UOWHF]] — [[NY89 - Universal One-Way Hash Functions and Their Cryptographic Applications|NY89]].
- Collision resistance does not follow from one-wayness by any relativizing construction, even from a one-way permutation: [[no-owp-to-crhf-sim98|No relativizing reduction from OWP to CRHF]] — [[Sim98 - Finding Collisions on a One-Way Street Can Secure Hash Functions Be Based on General Assumptions|Sim98]].
