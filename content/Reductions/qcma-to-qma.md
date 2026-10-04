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
rationale:
  model: "Both classes are defined by quantum polynomial-time verifiers."
---

# QCMA ⊆ QMA

## Statement

$\classQCMA \subseteq \classQMA$: every [[quantum-classical-merlin-arthur|QCMA]] proof system becomes a [[quantum-merlin-arthur|QMA]] proof system when the verifier first measures the witness register in the computational basis — folklore.

## Sketch

The honest classical witness is sent as a computational-basis state, so completeness is unchanged. Measuring any quantum witness yields a distribution over classical strings, and the acceptance probability is the average of the QCMA verifier's acceptance probabilities over it, hence at most $1/3$ on no-instances.
