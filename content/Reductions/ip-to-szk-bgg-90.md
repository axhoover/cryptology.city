---
type: reduction
status: draft
title: "IP ⊆ SZK"
aliases: []
id: red-ip-to-szk-bgg-90
kind: inclusion
hypotheses: [ip]
conclusion: szk
class: free
model: standard
source:
  - "[[BGG+90 - Everything Provable is Provable in Zero-Knowledge|BGG+90]]"
security-loss: ""
---

# IP ⊆ SZK

[[interactive-proof-systems|IP]] is contained in [[statistical-zero-knowledge|SZK]].

## Statement

Migrated verbatim from [[zero-knowledge-proof]] § Other results:

> - All languages in IP (= [[polynomial-space|PSPACE]]) have statistical ZK proofs — [[BGG+90 - Everything Provable is Provable in Zero-Knowledge|BGG+90]]

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

`class: free` because a containment between complexity classes is proved
by any argument at all; the reduction-class axis does not discriminate
here, and `unstated` would wrongly suggest the information is missing.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- SUSPECTED MATHEMATICAL ERROR (reported, not fixed): as written this says IP = PSPACE is contained in SZK. But SZK is contained in AM \cap coAM, so SZK = PSPACE would collapse the polynomial hierarchy. The actual BGG+90 result is that every language in IP has a COMPUTATIONAL zero-knowledge proof ASSUMING one-way functions exist (with statistical/perfect ZK obtained only in the multi-prover or argument settings). The bullet drops the OWF hypothesis AND upgrades computational ZK to statistical ZK.
- Consequently the hypothesis set is also wrong: the real edge is conjunctive {interactive-proof-systems, hash-function(OWF)} => computational-zero-knowledge (content/Complexity/computational-zero-knowledge.md exists).
- This is the single most serious claim-level defect found in this chunk; the page is status: stub and its .fact-check queue entry should be checked.
