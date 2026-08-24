---
type: reduction
status: draft
title: "Arithmetization ⇒ zk-SNARK"
aliases: []
id: red-arithmetization-to-zk-snark-gro16
kind: implication
hypotheses: [arithmetization]
conclusion: groth16
class: unstated
model: crs
source:
  - "[[Gro16 - On the Size of Pairing-based Non-interactive Arguments|Gro16]]"
security-loss: ""
---

# Arithmetization ⇒ zk-SNARK

[[arithmetization|Arithmetization]] implies [[succinct-argument#zk-snark|zk-SNARK]].

## Statement

Migrated verbatim from [[arithmetization]] § Results:

> - QAP enables the Pinocchio protocol and Groth16 — [[Gro16 - On the Size of Pairing-based Non-interactive Arguments|Gro16]]

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- TWO CONCLUSIONS: 'the Pinocchio protocol and Groth16'. Only Groth16 is covered by the Gro16 citation; the Pinocchio edge is effectively uncited (no Pinocchio/PGHR13 reference page exists).
- 'enables' is not a typed relation — no soundness notion, setup assumption, or reduction class is given. Groth16 needs a circuit-specific trusted setup and a pairing/knowledge assumption; none of that appears.
- Model recorded as 'crs' from background knowledge of Groth16, NOT from the page — the page states no model.
