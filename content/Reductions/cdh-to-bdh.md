---
type: reduction
status: draft
title: "BDH ⇒ CDH"
aliases: []
id: red-bdh-to-cdh-bf01
kind: implication
hypotheses: [bdh]
conclusion: cdh
class: fully-black-box
model: standard
source:
  - "[[BF01 - Identity-Based Encryption from the Weil Pairing|BF01]]"
security-loss: "tight: one CDH call and one pairing evaluation"
rationale:
  class: "The group generator is unchanged, and the fixed reduction calls the CDH solver once as an oracle and then evaluates the pairing once."
---

# BDH ⇒ CDH

## Statement

If [[bilinear-map-assumptions|BDH]] is hard for a symmetric pairing-group generator, then [[computational-diffie-hellman|CDH]] is hard in its source group $\GG$: every CDH solver yields, with one call and one pairing evaluation, a BDH solver with at least its success probability — [[BF01 - Identity-Based Encryption from the Weil Pairing|BF01]].

## Sketch

Given a BDH instance $(g, g^a, g^b, g^c)$, run the CDH solver on $(g, g^a, g^b)$ and output $e(Z, g^c)$ for its answer $Z$. This equals $e(g,g)^{abc}$ whenever $Z = g^{ab}$, and $(g^a, g^b)$ is distributed as in the CDH game.

## Notes

- The converse, that CDH hardness implies BDH hardness, is open — [[BF01 - Identity-Based Encryption from the Weil Pairing|BF01]].
