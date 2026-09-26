---
type: reduction
status: stub
title: "OWSG ⇒ QM"
aliases: []
id: red-owsg-to-qm
kind: implication
hypotheses: [one-way-state-generator]
conclusion: quantum-money
class: unstated
model: quantum
source: folklore
security-loss: ""
---

# OWSG ⇒ QM

[[one-way-state-generator|OWSG]] implies [[quantum-money|QM]].

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

- DISJUNCTIVE BUNDLE: "Quantum money and unclonable encryption can be constructed from one-way state generators (OWSGs)" is two separate reductions; this record isolates OWSG => quantum money.
- No citation for either construction.
- Neither "one-way-state-generator" nor "quantum-money" has a wiki page; nothing in this bullet is wikilinked.
- Sourcing pass (2026-09), **not fixed**: claim judged incorrect as stated — no construction of quantum money from OWSGs is known, and the known implication is the converse: private-key quantum money with pure banknotes implies OWSGs (Morimae–Yamakawa, TQC 2024; eprint 2022/1336). Private-key quantum money is built from pseudorandom states (Ji–Liu–Song, CRYPTO 2018).
