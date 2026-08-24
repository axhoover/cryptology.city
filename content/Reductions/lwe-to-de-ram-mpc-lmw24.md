---
type: reduction
status: draft
title: "LWE ⇒ DE-RAM-MPC"
aliases: []
id: red-lwe-to-de-ram-mpc-lmw24
kind: implication
hypotheses: [lwe]
conclusion: doubly-efficient-ram-mpc
class: unstated
model: standard
source:
  - "[[LMW24 - Doubly Efficient Cryptography Commitments, Arguments and RAM MPC|LMW24]]"
security-loss: ""
---

# LWE ⇒ DE-RAM-MPC

[[learning-with-errors|LWE]] implies [[doubly-efficient-ram-mpc|DE-RAM-MPC]].

## Statement

Migrated verbatim from [[secure-multi-party-computation]] § Other results:

> - Doubly-efficient RAM-MPC (computation sublinear in the database size) from [[learning-with-errors|LWE]] — [[LMW24 - Doubly Efficient Cryptography Commitments, Arguments and RAM MPC|LMW24]]

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- 'doubly-efficient-ram-mpc' has no page (closest existing page is doubly-efficient-pir); flagged non-slug identifier.
- LMW24 is (to my knowledge) stated under LWE with a preprocessing/RAM model qualifier the bullet compresses away.
