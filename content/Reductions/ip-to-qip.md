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
---

# IP ⊆ QIP

[[interactive-proof-systems|IP]] is contained in [[quantum-interactive-proofs|QIP]].

## Statement

$\classIP \subseteq \classQIP$: a classical [[interactive-proof-systems|IP]] protocol is a [[quantum-interactive-proofs|QIP]] protocol whose verifier measures each incoming message in the computational basis and otherwise runs the classical verifier — folklore.

## Sketch

Measuring each prover message in the computational basis turns any quantum prover into a randomized classical prover: the distribution of each message given the classical transcript so far is a classical strategy. Completeness and soundness of the classical protocol carry over unchanged.

## Notes

`class: free`: proven complexity-class containment; the reduction-class axis does not discriminate.

`model: quantum`: containment into a quantum class, as on [[bpp-to-bqp]], [[qip-to-ip]] and [[qip-to-pspace]].
