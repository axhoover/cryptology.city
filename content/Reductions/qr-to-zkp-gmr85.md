---
type: reduction
status: stub
title: "QR ⇒ ZKP"
aliases: []
id: red-qr-to-zkp-gmr85
kind: implication
hypotheses: [qr]
conclusion: zkp
class: unstated
model: standard
source:
  - "[[GMR85 - The knowledge complexity of interactive proof-systems|GMR85]]"
security-loss: ""
---

# QR ⇒ ZKP

[[quadratic-residuosity|QR]] implies [[zero-knowledge-proof|ZKP]].

## Statement

Migrated verbatim from [[zero-knowledge-proof]] § Other results:

> - ZK proofs were introduced and shown for quadratic residuosity — [[GMR85 - The knowledge complexity of interactive proof-systems|GMR85]]

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- 'quadratic residuosity' here is a LANGUAGE that has a ZK proof, not the hardness ASSUMPTION — but the only wiki node with that name is content/Assumptions/quadratic-residuosity.md, so the edge will be mis-typed as assumption => primitive. Flagged as a modelling hazard.
- The QR language is unlinked in the bullet.
- This is a historical/attribution bullet more than a relation.
