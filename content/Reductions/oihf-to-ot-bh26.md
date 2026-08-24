---
type: reduction
status: draft
title: "OIHF ⇒ OT"
aliases: []
id: red-oihf-to-ot-bh26
kind: implication
hypotheses: [oblivious-interactive-hash-function]
conclusion: ot
class: free
model: standard
source:
  - "[[BH26 - How to Steal Oblivious Transfer from Minicrypt|BH26]]"
security-loss: ""
---

# OIHF ⇒ OT

[[oblivious-interactive-hash-function|OIHF]] implies [[oblivious-transfer|OT]].

## Statement

Migrated verbatim from [[random-oracle-model]] § Known Results:

> - **OIHFs bridge Minicrypt and Cryptomania non-black-box** — Barnum and Heath introduced _Oblivious Interactive Hash Functions_ (OIHFs), a primitive that can be constructed from a random oracle, yet implies [[oblivious-transfer|OT]] via a non-black-box reduction [[BH26 - How to Steal Oblivious Transfer from Minicrypt|BH26]]. This partially bridges the classical separation between Minicrypt (one-way functions, PRFs, etc.) and Cryptomania (public-key primitives including OT), though the non-black-box OT construction from a standard-model OIHF currently requires Cryptomania assumptions.

## Notes

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- CLASS IS LOAD-BEARING: dropping class:'non-black-box' would put this edge in direct conflict with the Impagliazzo-Rudich black-box separation of OT from symmetric primitives.
- The bullet immediately qualifies the headline — a standard-model OIHF 'currently requires Cryptomania assumptions' — a side condition the sub-edge cannot carry, and which was recorded as a separate record.
- oblivious-interactive-hash-function has no wiki page.
- COMPOSITE: two links (RO => OIHF construction; OIHF => OT via a non-black-box reduction) collapsed into one bullet — must be split.
- "oblivious-interactive-hash-function" (OIHF) has no wiki page.
- The second link is explicitly non-black-box; the class must survive migration or the record contradicts the Impagliazzo–Rudich barrier.
- The bullet immediately walks the headline back ("currently requires Cryptomania assumptions" in the standard model) — recorded as a separate record.
