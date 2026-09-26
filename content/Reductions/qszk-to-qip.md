---
type: reduction
status: draft
title: "QSZK ⊆ QIP"
aliases: []
id: red-qszk-to-qip
kind: inclusion
hypotheses: [qszk]
conclusion: qip
class: free
model: quantum
source: folklore
security-loss: ""
---

# QSZK ⊆ QIP

[[quantum-statistical-zero-knowledge|QSZK]] is contained in [[quantum-interactive-proofs|QIP]].

## Statement

$\classQSZK \subseteq \classQIP$, since a [[quantum-statistical-zero-knowledge|quantum statistical zero-knowledge]] proof system is a [[quantum-interactive-proofs|quantum interactive proof]] system with an additional simulation requirement — folklore.

## Notes

`class: free`: definitional containment between complexity classes; the reduction-class axis does not discriminate here (repo convention).

`model: quantum`: repo convention for results about quantum classes.
