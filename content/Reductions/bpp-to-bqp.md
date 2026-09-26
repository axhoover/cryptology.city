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
---

# BPP ⊆ BQP

[[bounded-error-probabilistic-polynomial-time|BPP]] is contained in [[bounded-error-quantum-polynomial-time|BQP]].

## Statement

A quantum Turing machine simulates any bounded-error probabilistic polynomial-time computation with polynomial overhead, so [[bounded-error-probabilistic-polynomial-time|BPP]] $\subseteq$ [[bounded-error-quantum-polynomial-time|BQP]] [[BV97 - Quantum Complexity Theory|BV97]].

## Sketch

Each deterministic step of the probabilistic machine is executed reversibly, and each coin toss is a fresh cell rotated into an equal superposition of $0$ and $1$; measuring at the end reproduces the acceptance probabilities.

## Notes

`class: free`: Proven complexity-class containment; per repo convention `class: free`.

`model: quantum`: The containment is witnessed by a quantum simulation of the probabilistic machine; sibling BQP edges (e.g. [[bqp-to-pp]]) use `model: quantum`.
