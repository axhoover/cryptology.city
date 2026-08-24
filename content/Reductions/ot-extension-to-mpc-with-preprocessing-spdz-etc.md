---
type: reduction
status: stub
title: "OT Extension ⇒ MPC with preprocessing (SPDZ, etc.)"
aliases: []
id: red-ot-extension-to-mpc-with-preprocessing-spdz-etc
kind: implication
hypotheses: [ot-extension]
conclusion: mpc-with-preprocessing
class: unstated
model: standard
source: folklore
security-loss: ""
---

# OT Extension ⇒ MPC with preprocessing (SPDZ, etc.)

[[oblivious-transfer#ot-extension|OT Extension]] implies [[secure-multi-party-computation#mpc-with-preprocessing-spdz-etc|MPC with preprocessing (SPDZ, etc.)]].

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

- Disjunctive bullet ('OT extension OR homomorphic encryption') — split into two records; this is the OT-extension branch.
- No citation (SPDZ is DPSZ12; the wikilink points only at oblivious-transfer, not at an OT-extension page, which does not exist).
- 'mpc-with-preprocessing' has no page slug (it is a section of this page).
