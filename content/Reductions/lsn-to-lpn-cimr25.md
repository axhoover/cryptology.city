---
type: reduction
status: draft
title: "LSN ⇒ LPN"
aliases: []
id: red-lsn-to-lpn-cimr25
kind: implication
hypotheses: [learning-subspace-with-noise]
conclusion: lpn
class: unstated
model: standard
source:
  - "[[CIMR25 - Secret-Key PIR from Random Linear Codes|CIMR25]]"
security-loss: ""
---

# LSN ⇒ LPN

[[learning-subspace-with-noise|LSN]] implies [[learning-parity-with-noise|LPN]].

## Statement

Migrated verbatim from [[CIMR25 - Secret-Key PIR from Random Linear Codes]] § LSN facts:

> 2. For a constant code rate $\rho = k/n$ and $\eta = 1-\mu = o(1)$, $(k,n,\mu)$-LSN implies LPN with code dimension $k$, code length $k(1+\Omega(\eta))$, and noise rate $\eta$

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Parameterised reduction: (k,n,mu)-LSN at constant rate rho = k/n with eta = 1-mu = o(1) implies LPN at dimension k, length k(1+Omega(eta)), noise rate eta. The target model has no parameter field, so the entire regime survives only in this verbatim/problems text — a real modelling gap for LPN/LSN edges.
- No citation and no theorem anchor into CIMR25.
- Direction could not be verified against the paper from this repo; recorded exactly as the wiki states it (LSN hardness => LPN hardness).
- Does NOT compose with fact 3 (line 67) into an equivalence — see that record.
- Not in the existing inventory.
