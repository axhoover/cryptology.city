---
type: reduction
status: stub
title: "KE ⇒ Multi-party key exchange"
aliases: []
id: red-ke-to-multi-party-key-exchange
kind: implication
hypotheses: [ke]
conclusion: multi-party-key-exchange
class: unstated
model: standard
source: folklore
security-loss: ""
---

# KE ⇒ Multi-party key exchange

[[key-exchange|KE]] implies [[key-exchange#multi-party-key-exchange|Multi-party key exchange]].

## Statement

Migrated verbatim from [[key-exchange]] § Multi-party key exchange:

> Generalizes two-party KE to $n$ parties. Requires additional rounds or structure (e.g., Burmester-Desmedt, pairing-based constructions).

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Vague: 'Requires additional rounds or structure' asserts a cost, not a reduction.
- Burmester-Desmedt and 'pairing-based constructions' (Joux) are named in prose with no reference pages and no citations.
