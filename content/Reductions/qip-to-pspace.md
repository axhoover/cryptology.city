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

## Sketch

Every quantum interactive proof can be parallelized to three messages — [[KW00 - Parallelization, amplification, and exponential time simulation of quantum interactive proof systems|KW00]]. Its maximum acceptance probability is then the optimum of a semidefinite program of exponential dimension, which JJUW10 approximate with a matrix multiplicative-weights method parallelized by circuits of depth polylogarithmic in that dimension, which is polynomial depth, and polynomial space evaluates such circuits — [[JJUW10 - QIP = PSPACE|JJUW10]].
