---
type: reduction
status: draft
title: "MA ⊆ QCMA"
aliases: []
id: red-ma-to-qcma
kind: inclusion
hypotheses: [ma]
conclusion: qcma
class: free
model: quantum
source: folklore
security-loss: ""
---

# MA ⊆ QCMA

[[merlin-arthur|MA]] is contained in [[quantum-classical-merlin-arthur|QCMA]].

## Statement

$\classMA \subseteq \classQCMA$: a [[merlin-arthur|Merlin–Arthur]] verifier is a [[quantum-classical-merlin-arthur|QCMA]] verifier that computes classically; the witness is already a classical string, and completeness and soundness are unchanged — folklore.

## Sketch

The quantum verifier runs the classical verification circuit, sampling Arthur's coins by measuring qubits prepared in the uniform superposition; acceptance probabilities are preserved exactly.

## Notes

`class: free`: Immediate containment between complexity classes (a probabilistic verifier is a special case of a quantum verifier); repo convention assigns class free to such inclusions.

`model: quantum`: Repo convention for inclusions among quantum proof-system classes (cf. [[qcma-to-qma]], [[qma-to-pp]], [[bpp-to-bqp]]).
