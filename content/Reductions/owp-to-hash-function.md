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
rationale:
  class: "The construction is the identity, so it uses the permutation only as an oracle, and the reduction forwards any inverter of the function unchanged as an inverter of the permutation."
---

# OWP ⇒ OWF

## Statement

Every [[one-way-permutation|one-way permutation]] $\pi$ whose input distribution $X$ is uniform on $\calD$ is a [[hash-function#preimage-resistance-one-wayness|one-way function]] with a trivial key and $\calR = \calD$: the one-wayness game, which samples $x \getsr \calD$, is then the permutation's inversion game, so an inverter for the function is an inverter for the permutation with the same advantage — folklore.

## Notes

- For $X$ sampled by an efficient $S$ from uniform coins, $r \mapsto \pi(S(r))$ is a one-way function: an $r'$ with $\pi(S(r')) = y$ gives the preimage $S(r')$ of $y$ under $\pi$ — folklore.
- Collision resistance does not follow: no relativizing construction of a [[hash-function#collision-resistance|collision-resistant hash function]] from a one-way permutation exists ([[no-owp-to-crhf-sim98|No relativizing reduction from OWP to CRHF]]) — [[Sim98 - Finding Collisions on a One-Way Street Can Secure Hash Functions Be Based on General Assumptions|Sim98]].
