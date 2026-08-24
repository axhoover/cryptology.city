---
type: reduction
status: draft
title: "LPN + LWE + NC1-PRG ⇒ iO"
aliases: []
id: red-lpn-and-lwe-and-nc1-prg-to-io-jls21
kind: implication
hypotheses: [lpn, lwe, prg-in-nc1]
conclusion: io
class: unstated
model: standard
source:
  - "[[JLS21 - Indistinguishability obfuscation from well-founded assumptions|JLS21]]"
security-loss: ""
---

# LPN + LWE + NC1-PRG ⇒ iO

[[learning-parity-with-noise|LPN]] together with [[learning-with-errors|LWE]] together with [[pseudorandom-generator-in-nc1|NC1-PRG]] implies [[indistinguishability-obfuscation|iO]].

## Statement

Migrated verbatim from [[impagliazzos-five-worlds]] § Obfustopia:

> The first candidate iO construction was proposed in [[GGHRSW13 - Candidate indistinguishability obfuscation and functional encryption for all circuits|GGHRSW13]] based on multilinear maps. A construction from well-founded (polynomial) hardness assumptions — sub-exponential LWE, LPN, and a PRG in NC$^1$ — was given in [[JLS21 - Indistinguishability obfuscation from well-founded assumptions|JLS21]].

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Genuinely CONJUNCTIVE: {sub-exponential LWE, LPN, PRG in NC^1} => iO.
- SUSPECTED OMISSION: JLS21 also assumes SXDH on bilinear/pairing groups; the page lists only three of the four assumptions. Recorded, not fixed.
- SELF-CONTRADICTORY QUALIFIER: the sentence says "well-founded (polynomial) hardness assumptions" and then lists "sub-exponential LWE" — polynomial vs sub-exponential hardness in the same clause.
- "prg-in-nc1" has no wiki page; neither LWE nor LPN is wikilinked in this sentence.
