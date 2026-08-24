---
type: reduction
status: draft
title: "MMap ⇒ iO"
aliases: []
id: red-mmap-to-io-gghrsw13
kind: implication
hypotheses: [multilinear-maps]
conclusion: io
class: unstated
model: standard
source:
  - "[[GGHRSW13 - Candidate indistinguishability obfuscation and functional encryption for all circuits|GGHRSW13]]"
security-loss: ""
---

# MMap ⇒ iO

[[multilinear-maps|MMap]] implies [[indistinguishability-obfuscation|iO]].

## Statement

Migrated verbatim from [[impagliazzos-five-worlds]] § Obfustopia:

> The first candidate iO construction was proposed in [[GGHRSW13 - Candidate indistinguishability obfuscation and functional encryption for all circuits|GGHRSW13]] based on multilinear maps. A construction from well-founded (polynomial) hardness assumptions — sub-exponential LWE, LPN, and a PRG in NC$^1$ — was given in [[JLS21 - Indistinguishability obfuscation from well-founded assumptions|JLS21]].

Migrated verbatim from [[indistinguishability-obfuscation]] § Indistinguishability Obfuscation:

> _Indistinguishability obfuscation (iO)_ is a form of program obfuscation in which the obfuscated programs for any two functionally equivalent circuits are computationally indistinguishable. It is considered a "universal" cryptographic primitive: combined with [[hash-function|one-way functions]], iO implies a vast number of cryptographic primitives. The first candidate construction was given by Garg, Gentry, Halevi, Raykova, Sahai, and Waters — [[GGHRSW13 - Candidate indistinguishability obfuscation and functional encryption for all circuits|GGHRSW13]]; the first construction from well-founded assumptions was given by Jain, Lin, and Sahai — [[JLS21 - Indistinguishability obfuscation from well-founded assumptions|JLS21]].

Migrated verbatim from [[indistinguishability-obfuscation]] § Other results:

> - First iO candidate construction (based on multilinear maps) — [[GGHRSW13 - Candidate indistinguishability obfuscation and functional encryption for all circuits|GGHRSW13]]

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

This relation is stated on 3 pages; the statements above are all of them.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- "candidate" construction — heuristic, not a reduction from a stated assumption; the hyperedge model needs a way to mark candidate/heuristic edges or this records a proof that does not exist.
- "multilinear-maps" has no wiki page (content/Assumptions/bilinear-map-assumptions.md is the nearest and is not linked).
- The hypothesis (multilinear maps) is named only in the Other results bullet at line 49, not in the intro sentence.
- It is a _candidate_ construction with no reduction to a well-founded assumption; typing it as an implication overstates it.
- No wiki page for multilinear maps.
- Candidate construction, not a proven reduction from a stated assumption; many of the underlying multilinear-map candidates have since been attacked.
