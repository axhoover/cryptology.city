---
type: reduction
status: stub
title: "Factoring with known factor structure ⇒ PRG"
aliases: []
id: red-factoring-with-known-factor-structure-to-prg
kind: implication
hypotheses: [factoring-blum-integers]
conclusion: prg
class: unstated
model: standard
source: folklore
security-loss: ""
---

# Factoring with known factor structure ⇒ PRG

[[factoring#factoring-with-known-factor-structure|Factoring with known factor structure]] implies [[pseudorandom-generator|PRG]].

## Statement

Migrated verbatim from [[factoring]] § Factoring with known factor structure:

> Some protocols assume factoring is hard even given additional structural information about $N$ (e.g., $N = pq$ with $p \equiv q \equiv 3 \pmod{4}$, so-called Blum integers). Blum integers are used in the Blum-Blum-Shub PRG.

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- No citation (BBS82 missing).
- The link from Blum integers to the Blum-Blum-Shub PRG is asserted as usage, not as a reduction.
- factoring-blum-integers has no page.
