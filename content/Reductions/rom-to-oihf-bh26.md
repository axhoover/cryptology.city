---
type: reduction
status: draft
title: "ROM ⇒ OIHF"
aliases: []
id: red-rom-to-oihf-bh26
kind: implication
hypotheses: [rom]
conclusion: oblivious-interactive-hash-function
class: unstated
model: rom
source:
  - "[[BH26 - How to Steal Oblivious Transfer from Minicrypt|BH26]]"
security-loss: ""
---

# ROM ⇒ OIHF

[[random-oracle-model|ROM]] implies [[oblivious-interactive-hash-function|OIHF]].

## Statement

Migrated verbatim from [[random-oracle-model]] § Known Results:

> - **OIHFs bridge Minicrypt and Cryptomania non-black-box** — Barnum and Heath introduced _Oblivious Interactive Hash Functions_ (OIHFs), a primitive that can be constructed from a random oracle, yet implies [[oblivious-transfer|OT]] via a non-black-box reduction [[BH26 - How to Steal Oblivious Transfer from Minicrypt|BH26]]. This partially bridges the classical separation between Minicrypt (one-way functions, PRFs, etc.) and Cryptomania (public-key primitives including OT), though the non-black-box OT construction from a standard-model OIHF currently requires Cryptomania assumptions.

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- oblivious-interactive-hash-function has no wiki page.
- The hypothesis is a MODEL, not an object: 'a random oracle' is an idealized primitive, so this edge's hypothesis is model-shaped and duplicates the information in the model field.
- The reduction class for this link is not stated on the page.
- COMPOSITE: two links (RO => OIHF construction; OIHF => OT via a non-black-box reduction) collapsed into one bullet — must be split.
- "oblivious-interactive-hash-function" (OIHF) has no wiki page.
- The second link is explicitly non-black-box; the class must survive migration or the record contradicts the Impagliazzo–Rudich barrier.
- The bullet immediately walks the headline back ("currently requires Cryptomania assumptions" in the standard model) — recorded as a separate record.
