---
type: reduction
status: draft
title: "CZK = IP"
aliases: []
id: red-czk-to-ip-bgg-90
kind: equivalence
hypotheses: [czk]
conclusion: ip
class: free
model: standard
source:
  - "[[BGG+90 - Everything Provable is Provable in Zero-Knowledge|BGG+90]]"
security-loss: ""
---

# CZK = IP

[[computational-zero-knowledge|CZK]] is equal to [[interactive-proof-systems|IP]].

## Statement

Migrated verbatim from [[computational-zero-knowledge]] § Known relationships:

> - And, in fact CZK actually equals [[interactive-proof-systems|IP]] = [[polynomial-space|PSPACE]] — [[BGG+90 - Everything Provable is Provable in Zero-Knowledge|BGG+90]]

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

`class: free` because a containment between complexity classes is proved
by any argument at all; the reduction-class axis does not discriminate
here, and `unstated` would wrongly suggest the information is missing.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- THE CHAIN DOES NOT DECOMPOSE AS RECORDED: the OWF hypothesis is silently dropped; BGG+90 needs bit commitments, hence one-way functions, and as a standalone unconditional equality CZK = IP is FALSE.
- TYPING LOSS: the equality reads as a one-way inclusion once split.
- Duplicates line 27 sub-edge 1.
- Sourcing pass (2026-09), **not fixed**: claim judged incorrect as stated — [[BGG+90 - Everything Provable is Provable in Zero-Knowledge|BGG+90]] prove $\classIP \subseteq \classCZK$ only assuming a secure bit commitment (hence one-way functions), and unconditionally only the trivial $\classCZK \subseteq \classIP$ holds. Unconditional equality cannot currently be proved, since one-way functions are necessary for non-trivial CZK ([[OW93 - One-way functions are essential for non-trivial zero-knowledge|OW93]]); the correct edge takes hypotheses {OWF, IP} and conclusion CZK. See [[hash-function-to-czk]].
