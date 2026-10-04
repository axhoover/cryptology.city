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
rationale:
  model: "The conclusion is a quantum complexity class, and the proof runs the classical verifier on a quantum computer."
---

# MA ⊆ QCMA

## Statement

$\classMA \subseteq \classQCMA$: every [[merlin-arthur|Merlin–Arthur]] proof system is a [[quantum-classical-merlin-arthur|QCMA]] proof system whose verifier computes classically, with the same classical witnesses, completeness and soundness — folklore.

## Sketch

The quantum verifier runs the classical verification circuit, drawing Arthur's coins by measuring qubits prepared in the uniform superposition, so every acceptance probability is preserved exactly.
