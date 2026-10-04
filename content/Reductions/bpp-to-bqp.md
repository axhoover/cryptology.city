---
type: reduction
status: draft
title: "BPP ⊆ BQP"
aliases: []
id: red-bpp-to-bqp
kind: inclusion
hypotheses: [bpp]
conclusion: bqp
class: free
model: quantum
source:
  - "[[BV97 - Quantum Complexity Theory|BV97]]"
security-loss: ""
rationale:
  model: "The conclusion is a quantum complexity class, and the proof simulates the probabilistic machine on a quantum Turing machine."
---

# BPP ⊆ BQP

## Statement

A quantum Turing machine simulates every bounded-error probabilistic polynomial-time computation with polynomial overhead, so [[bounded-error-probabilistic-polynomial-time|BPP]] $\subseteq$ [[bounded-error-quantum-polynomial-time|BQP]] — [[BV97 - Quantum Complexity Theory|BV97]].

## Sketch

Each deterministic step of the probabilistic machine is executed reversibly, and each coin toss is a fresh qubit put into an equal superposition of $0$ and $1$; measuring at the end reproduces the acceptance probabilities.
