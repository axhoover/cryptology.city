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
rationale:
  class: "KOS16 prove UC security in a hybrid model with an OT-extension functionality, a composition statement the RTV04 classes do not capture."
  model: "The proof is in a hybrid model with OT-extension and commitment functionalities, and MASCOT instantiates the commitment functionality with a hash function modelled as a random oracle."
---

# OT Extension ⇒ MPC with preprocessing (SPDZ, etc.)

## Statement

The MASCOT protocol generates SPDZ authenticated multiplication triples over a finite field $\FF$ from correlated [[oblivious-transfer#ot-extension|OT extension]]; with the SPDZ online phase of [[DPSZ12 - Multiparty Computation from Somewhat Homomorphic Encryption|DPSZ12]] this gives [[secure-multi-party-computation#mpc-with-preprocessing-spdz-etc|MPC with preprocessing]] for arithmetic circuits over $\FF$, secure with abort against a malicious adversary corrupting up to $n-1$ of the $n$ parties — [[KOS16 - MASCOT Faster Malicious Arithmetic Secure Computation with Oblivious Transfer|KOS16]].

## Sketch

Each cross term $a^i b^j$ of a secret-shared triple is computed pairwise by correlated OT, with the bits of one party's share as choice bits and the other party's share as the correlation (Gilboa's oblivious product); the SPDZ MACs are the same product with the MAC-key shares as the fixed correlation. Random linear combinations of candidate triples remove the leakage a malicious party can induce by selective failure, a sacrifice step checks correctness, and the online phase consumes one triple per multiplication gate.
