---
type: reduction
status: draft
title: "Local Hamiltonian is QMA-complete"
aliases: []
id: red-notable-problems-to-qma
kind: inclusion
hypotheses: [local-hamiltonian]
conclusion: qma
class: free
model: quantum
source:
  - "[[KSV02 - Classical and Quantum Computation|KSV02]]"
security-loss: ""
rationale:
  model: "QMA is a quantum complexity class, and both halves of the proof are quantum: the containment verifier measures a quantum witness, and the hardness proof encodes quantum verifier circuits as Hamiltonians."
---

# Local Hamiltonian is QMA-complete

## Statement

For every constant $k$ and every polynomial $p$, the [[quantum-merlin-arthur#local-hamiltonian|local Hamiltonian problem]] $k\text{-LH}_p$ is in [[quantum-merlin-arthur|QMA]], and in fact the problem is in QMA even for $k = O(\log n)$ — [[KSV02 - Classical and Quantum Computation|KSV02]], as reported by [[KKR06 - The Complexity of the Local Hamiltonian Problem|KKR06]] §1. For $k \ge 5$ and some polynomial $p$ it is QMA-hard, hence QMA-complete — [[KSV02 - Classical and Quantum Computation|KSV02]].

## Sketch

Containment: the verifier picks a term $H_i$ at random and measures the witness against it, rejecting with probability proportional to its energy; the gap between the cases is inverse-polynomial, and QMA error reduction amplifies it. Hardness: the Feynman–Kitaev clock construction encodes a QMA verifier circuit into a local Hamiltonian whose low-energy states are history states, superpositions over the computation's time steps, so ground energy below the threshold certifies an accepting witness.

## Notes

- The problem remains QMA-complete for $k = 3$ — [[KR03 - 3-Local Hamiltonian is QMA-complete|KR03]] — and for $k = 2$, via perturbation-theory gadgets — [[KKR06 - The Complexity of the Local Hamiltonian Problem|KKR06]].
