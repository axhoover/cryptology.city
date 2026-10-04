---
type: reduction
status: draft
title: "IP ⊆ QIP"
aliases: []
id: red-ip-to-qip
kind: inclusion
hypotheses: [ip]
conclusion: qip
class: free
model: quantum
source: folklore
security-loss: ""
rationale:
  model: "The conclusion is a quantum complexity class."
---

# IP ⊆ QIP

## Statement

$\classIP \subseteq \classQIP$: a classical [[interactive-proof-systems|IP]] protocol is a [[quantum-interactive-proofs|QIP]] protocol whose verifier measures each incoming message in the computational basis and otherwise runs the classical verifier, with the same completeness and soundness — folklore.

## Sketch

Measuring each prover message in the computational basis turns any quantum prover into a randomized classical one: the distribution of its next message given the classical transcript so far is a classical strategy, so the soundness of the classical protocol bounds its success.
