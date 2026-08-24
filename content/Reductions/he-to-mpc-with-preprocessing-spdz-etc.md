---
type: reduction
status: stub
title: "HE ⇒ MPC with preprocessing (SPDZ, etc.)"
aliases: []
id: red-he-to-mpc-with-preprocessing-spdz-etc
kind: implication
hypotheses: [he]
conclusion: mpc-with-preprocessing
class: unstated
model: standard
source: folklore
security-loss: ""
---

# HE ⇒ MPC with preprocessing (SPDZ, etc.)

[[homomorphic-encryption|HE]] implies [[secure-multi-party-computation#mpc-with-preprocessing-spdz-etc|MPC with preprocessing (SPDZ, etc.)]].

## Statement

Migrated verbatim from [[secure-multi-party-computation]]:

> A correlated randomness or "preprocessing" phase generates reusable correlated randomness offline; the online phase is highly efficient. Preprocessing can be instantiated from [[oblivious-transfer|OT]] extension or homomorphic encryption.

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Second (disjunctive) branch of the same sentence.
- 'homomorphic encryption' is written as plain prose here even though content/Primitives/homomorphic-encryption.md exists — missing wikilink.
- No citation.
