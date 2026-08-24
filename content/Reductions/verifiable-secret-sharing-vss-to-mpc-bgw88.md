---
type: reduction
status: draft
title: "Verifiable secret sharing (VSS) ⇒ MPC"
aliases: []
id: red-verifiable-secret-sharing-vss-to-mpc-bgw88
kind: implication
hypotheses: [verifiable-secret-sharing]
conclusion: mpc
class: unstated
model: standard
source:
  - "[[BGW88 - Completeness theorems for non-cryptographic fault-tolerant distributed computation|BGW88]]"
security-loss: ""
---

# Verifiable secret sharing (VSS) ⇒ MPC

[[secret-sharing#verifiable-secret-sharing-vss|Verifiable secret sharing (VSS)]] implies [[secure-multi-party-computation|MPC]].

## Statement

Migrated verbatim from [[secret-sharing]]:

> A secret sharing scheme augmented with commitments so that parties can verify their shares are consistent, even against a malicious dealer. Used in [[secure-multi-party-computation|MPC]] and distributed key generation.

Migrated verbatim from [[secret-sharing]] § Other results:

> - Verifiable secret sharing (VSS) is a sufficient primitive for [[secure-multi-party-computation|MPC]] — [[BGW88 - Completeness theorems for non-cryptographic fault-tolerant distributed computation|BGW88]]

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

This relation is stated on 2 pages; the statements above are all of them.

Citations disagree across pages: [object Object]

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- 'Used in MPC and distributed key generation' — usage, not a reduction; uncited here (cf. line 64, which cites BGW88 for the MPC direction).
- 'distributed key generation' has no page.
- 'sufficient primitive for' = implies, but BGW88's MPC also needs an honest majority (t < n/3 for malicious security) — the threshold hypothesis is omitted.
- 'verifiable-secret-sharing' has no page (variant section on this page).
