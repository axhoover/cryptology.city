---
type: reduction
status: stub
title: "OWSG ⇒ Unclonable encryption"
aliases: []
id: red-owsg-to-unclonable-encryption
kind: implication
hypotheses: [one-way-state-generator]
conclusion: unclonable-encryption
class: unstated
model: quantum
source: folklore
security-loss: ""
---

# OWSG ⇒ Unclonable encryption

[[one-way-state-generator|OWSG]] implies [[unclonable-encryption|Unclonable encryption]].

## Statement

Migrated verbatim from [[impagliazzos-five-worlds]] § Microcrypt:

> - **Quantum money** and **unclonable encryption** can be constructed from one-way state generators (OWSGs), a quantum analogue of OWFs that may be weaker

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Second half of the same bundle: OWSG => unclonable encryption.
- No citation.
- "unclonable-encryption" has no wiki page.
- Sourcing pass (2026-09), **not fixed**: claim judged incorrect as stated — no construction of unclonable encryption from OWSGs appears in the OWSG literature (Morimae–Yamakawa, eprint 2022/1336, and follow-ups) or the unclonable-encryption literature. One-time unclonable encryption is unconditional (Broadbent–Lord 2020 for the search notion; Ananth–Sahai, eprint 2026/1511, for one-bit unclonable indistinguishability), and many-time schemes are boosted from quantum symmetric-key encryption or pseudorandom unitaries (arXiv 2605.27647), not from OWSGs.
