---
type: barrier
status: draft
title: "No fully-black-box reduction from OIHF to OT"
aliases: []
id: bar-oihf-to-ot-bh26
hypotheses: [oblivious-interactive-hash-function]
conclusion: ot
class: fully-black-box
consequences:
  - kind: reduction
    target: "ot-from-oihf-non-black-box"
    class: fully-black-box
strength: conditional
conditional-on:
  - standard-model OIHF currently requires Cryptomania assumptions
source:
  - "[[BH26 - How to Steal Oblivious Transfer from Minicrypt|BH26]]"
---

# No fully-black-box reduction from OIHF to OT

A reduction of class `fully-black-box` from [[oblivious-interactive-hash-function|OIHF]] to [[oblivious-transfer|OT]] would imply `ot-from-oihf-non-black-box`.

## Statement

Migrated verbatim from [[random-oracle-model]] § Known Results:

> - **OIHFs bridge Minicrypt and Cryptomania non-black-box** — Barnum and Heath introduced _Oblivious Interactive Hash Functions_ (OIHFs), a primitive that can be constructed from a random oracle, yet implies [[oblivious-transfer|OT]] via a non-black-box reduction [[BH26 - How to Steal Oblivious Transfer from Minicrypt|BH26]]. This partially bridges the classical separation between Minicrypt (one-way functions, PRFs, etc.) and Cryptomania (public-key primitives including OT), though the non-black-box OT construction from a standard-model OIHF currently requires Cryptomania assumptions.

## Notes

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- This is a barrier-CIRCUMVENTION record: it says the IR89 Minicrypt/Cryptomania separation is partially bridged by a non-black-box reduction while the black-box separation stands. The data model has no edge type for 'circumvents barrier X by leaving class C'; recorded as consequenceKind 'reduction' as the closest fit.
- The correct counterpart to the erroneous content/Primitives/secure-multi-party-computation.md:63. The two must be reconciled in the same commit.
- 'the classical separation between Minicrypt ... and Cryptomania' is cited to BH26, but the separation itself is IR89's and is not wikilinked here.
- OIHF has no page and no alias; the hypothesis object does not exist.
