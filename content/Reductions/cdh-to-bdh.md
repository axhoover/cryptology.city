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
---

# BDH ⇒ CDH

[[bilinear-map-assumptions|BDH]] implies [[computational-diffie-hellman|CDH]] in the source group of the pairing.

## Statement

If [[bilinear-map-assumptions|BDH]] is hard for a symmetric pairing-group generator, then [[computational-diffie-hellman|CDH]] is hard in its source group $\GG$: a CDH solver breaks BDH with at least its success probability — [[BF01 - Identity-Based Encryption from the Weil Pairing|BF01]]. BF01 leave the converse open.

## Sketch

Given a BDH instance $(g, g^a, g^b, g^c)$, run the CDH solver on $(g, g^a, g^b)$ to get $Z$, and output $e(Z, g^c)$, which equals $e(g,g)^{abc}$ when $Z = g^{ab}$. The pair $(g^a, g^b)$ has the same distribution as in the CDH game, so the reduction succeeds whenever the solver does.

## Notes

`class: fully-black-box`: the group generator is unchanged, and the fixed reduction calls the CDH solver once as an oracle and then evaluates the pairing once (the same reasoning as on [[ddh-to-cdh]] and [[cdh-to-dlog]]).

- This file used to record "CDH ⇒ BDH", migrated from a bullet that presented BDH's hardness against generic bilinear-group algorithms as a reduction from CDH. No reduction from CDH to BDH is known. The slug keeps the old direction because filenames are live URLs.
