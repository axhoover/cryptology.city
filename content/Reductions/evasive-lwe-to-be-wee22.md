---
type: reduction
status: draft
title: "Evasive LWE ⇒ BE"
aliases: []
id: red-evasive-lwe-to-be-wee22
kind: implication
hypotheses: [evasive-lwe]
conclusion: be
class: unstated
model: standard
source:
  - "[[Wee22 - Optimal Broadcast Encryption and CP-ABE from Evasive Lattice Assumptions|Wee22]]"
security-loss: ""
---

# Evasive LWE ⇒ BE

[[learning-with-errors#evasive-lwe|Evasive LWE]] implies [[broadcast-encryption|BE]].

## Statement

Migrated verbatim from [[learning-with-errors]] § Evasive LWE:

> **Evasive LWE** is a non-standard strengthening of decision LWE, introduced by Wee — [[Wee22 - Optimal Broadcast Encryption and CP-ABE from Evasive Lattice Assumptions|Wee22]] — to construct optimal [[broadcast-encryption|broadcast encryption]] and [[attribute-based-encryption|attribute-based encryption]]. Unlike a single-game hardness assumption, it is stated as an **implication** between two indistinguishability conditions, quantified over a PPT sampler.

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- One sentence packs three relations (Evasive LWE strengthens decision LWE; implies broadcast encryption; implies ABE). Recorded as three records sharing the verbatim.
- "optimal" broadcast encryption is an efficiency claim with no stated parameter.
