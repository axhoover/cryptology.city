---
type: reduction
status: draft
title: "OWP ⇒ OWF"
aliases: []
id: red-owp-to-hash-function
kind: implication
hypotheses: [owp]
conclusion: owf
class: fully-black-box
model: standard
source: folklore
security-loss: ""
---

# OWP ⇒ OWF

[[one-way-permutation|OWP]] implies a [[hash-function#preimage-resistance-one-wayness|one-way function]].

## Statement

Every [[one-way-permutation|OWP]] is a [[hash-function#preimage-resistance-one-wayness|one-way function]]: the construction is the identity, and an inverter for the function is an inverter for the permutation with the same advantage — folklore.

## Notes

`class: fully-black-box`: Degenerate fully-black-box shape: the construction is the identity, so it uses the permutation only as an oracle, and the reduction forwards any inverter of the function unchanged as an inverter of the permutation.

- The one-wayness game at [[hash-function#preimage-resistance-one-wayness]] is keyed and samples $x \getsr \calD$ uniformly, while an [[one-way-permutation|OWP]] is unkeyed and one-way for its own input distribution $X$; the identity matches the game only for uniform $X$, with a trivial key and $\calR = \calD$.
- Collision resistance does not follow: no relativizing construction of a [[hash-function#collision-resistance|CRHF]] from an OWP exists — [[no-owp-to-crhf-sim98|No relativizing reduction from OWP to CRHF]], [[Sim98 - Finding Collisions on a One-Way Street Can Secure Hash Functions Be Based on General Assumptions|Sim98]].
