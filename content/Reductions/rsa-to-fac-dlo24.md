---
type: reduction
status: draft
title: "RSA ⇔ FAC"
aliases: []
id: red-rsa-to-fac-dlo24
kind: equivalence
hypotheses: [rsa]
conclusion: fac
class: unstated
model: other
source:
  - "[[DLO24 - Breaking RSA Generically Is Equivalent to Factoring, with Preprocessing|DLO24]]"
security-loss: ""
---

# RSA ⇔ FAC

[[rsa-assumption|RSA]] is equivalent to [[factoring|FAC]].

## Statement

Migrated verbatim from [[rsa-assumption]] § Known Results:

> - **Generic-ring-model equivalence with preprocessing**: in the generic ring model, any adversary (even with unbounded preprocessing) that breaks RSA can be converted to a factoring adversary with polynomially related online complexity. This rules out a superpolynomial separation between RSA and factoring in the generic ring model, even with preprocessing — [[DLO24 - Breaking RSA Generically Is Equivalent to Factoring, with Preprocessing|DLO24]]

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- The model is the GENERIC RING MODEL WITH PREPROCESSING. The model enum offered here has no value for it — "generic-group" is the nearest but is a different model — so "other" is recorded and the real model is noted here.
- The bullet states both an equivalence and a barrier; recorded as two records.
- The equivalence holds only for GENERIC ring adversaries, so the edge is model-restricted and must not be read as an unconditional RSA-factoring equivalence.
