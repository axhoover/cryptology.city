---
type: reduction
status: draft
title: "QIP = PSPACE"
aliases: []
id: red-qip-to-pspace
kind: equivalence
hypotheses: [qip]
conclusion: pspace
class: free
model: quantum
source:
  - "[[JJUW10 - QIP = PSPACE|JJUW10]]"
  - "[[Sha90 - IP = PSPACE|Sha90]]"
security-loss: ""
rationale:
  model: "QIP is a quantum complexity class, defined by interactive proofs with a quantum verifier and prover."
---

# QIP = PSPACE

## Statement

[[quantum-interactive-proofs|QIP]] $=$ [[polynomial-space|PSPACE]] — [[JJUW10 - QIP = PSPACE|JJUW10]], who prove $\classQIP \subseteq \classPSPACE$; the reverse inclusion follows from [[pspace-to-ip-sha90|PSPACE ⊆ IP]] — [[Sha90 - IP = PSPACE|Sha90]] — and [[ip-to-qip|IP ⊆ QIP]].
