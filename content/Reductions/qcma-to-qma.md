---
type: reduction
status: draft
title: "QCMA ⊆ QMA"
aliases: []
id: red-qcma-to-qma
kind: inclusion
hypotheses: [qcma]
conclusion: qma
class: free
model: quantum
source: folklore
security-loss: ""
---

# QCMA ⊆ QMA

[[quantum-classical-merlin-arthur|QCMA]] is contained in [[quantum-merlin-arthur|QMA]].

## Statement

$\classQCMA \subseteq \classQMA$: the QMA verifier measures the witness register in the computational basis and runs the QCMA verifier on the outcome. Completeness holds with the classical witness sent as a basis state; soundness holds because measuring any quantum witness yields a distribution over classical strings, and the acceptance probability is the average of the QCMA acceptance probabilities over it — folklore.

## Notes

`class: free`: Proven complexity-class containment; the reduction-class axis does not discriminate here (repo convention for containments).

`model: quantum`: Kept as migrated; wiki convention for containments among quantum classes.
