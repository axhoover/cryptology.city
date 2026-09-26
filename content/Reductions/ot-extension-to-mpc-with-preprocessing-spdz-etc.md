---
type: reduction
status: draft
title: "OT Extension ⇒ MPC with preprocessing (SPDZ, etc.)"
aliases: []
id: red-ot-extension-to-mpc-with-preprocessing-spdz-etc
kind: implication
hypotheses: [ot-extension]
conclusion: mpc-with-preprocessing
class: unstated
model: standard
source:
  - "[[KOS16 - MASCOT Faster Malicious Arithmetic Secure Computation with Oblivious Transfer|KOS16]]"
security-loss: ""
---

# OT Extension ⇒ MPC with preprocessing (SPDZ, etc.)

[[oblivious-transfer#ot-extension|OT Extension]] implies [[secure-multi-party-computation#mpc-with-preprocessing-spdz-etc|MPC with preprocessing (SPDZ, etc.)]].

## Statement

The MASCOT protocol generates SPDZ authenticated multiplication triples over a finite field $\FF$ from correlated [[oblivious-transfer#ot-extension|OT extension]]; with the SPDZ online phase this gives [[secure-multi-party-computation#mpc-with-preprocessing-spdz-etc|MPC with preprocessing]] for arithmetic circuits over $\FF$, secure against a malicious adversary corrupting up to $n-1$ of the $n$ parties — [[KOS16 - MASCOT Faster Malicious Arithmetic Secure Computation with Oblivious Transfer|KOS16]].

## Sketch

Each cross term $a^i b^j$ of a secret-shared triple is computed pairwise by correlated OT, with the bits of one party's share as choice bits and the other party's share as the correlation (Gilboa's oblivious product); the SPDZ MACs are the same product protocol with the MAC-key shares as the fixed correlation. Random linear combinations of candidate triples remove the leakage a malicious party can induce by selective failure, a sacrifice check enforces correctness, and the online phase consumes one triple per multiplication as in SPDZ.

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.

- The hypothesis `ot-extension` has no dedicated page (it is a section of [[oblivious-transfer]]), and the conclusion `mpc-with-preprocessing` is a section of [[secure-multi-party-computation]].
