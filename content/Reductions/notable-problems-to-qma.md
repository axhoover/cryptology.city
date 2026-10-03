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
---

# Local Hamiltonian is QMA-complete

The [[quantum-merlin-arthur#notable-problems|local Hamiltonian problem]] is [[quantum-merlin-arthur|QMA]]-complete.

## Statement

The [[quantum-merlin-arthur#notable-problems|$k$-local Hamiltonian problem]] — given $H = \sum_i H_i$ on $n$ qubits with each $H_i$ acting on at most $k$ qubits, and thresholds $a < b$ with $b - a \ge 1/\poly(n)$, decide whether the ground-state energy of $H$ is at most $a$ or at least $b$ — is [[quantum-merlin-arthur|QMA]]-complete for every constant $k \ge 5$ [[KSV02 - Classical and Quantum Computation|KSV02]].

## Sketch

Containment: the verifier picks a term $H_i$ at random and measures the witness against it, rejecting with probability proportional to its energy. Hardness: the Feynman–Kitaev clock construction encodes a QMA verifier circuit into a local Hamiltonian whose low-energy states are history states — superpositions over the computation's time steps — so ground energy below the threshold certifies an accepting witness.

## Notes

`class: free`: an unconditional containment of a problem in a complexity class; the reduction-class axis does not apply.

`model: quantum`: QMA is a quantum class and both halves of the proof are quantum.

- 3-local Hamiltonian is QMA-complete — [[KR03 - 3-Local Hamiltonian is QMA-complete|KR03]]
- 2-local Hamiltonian is QMA-complete, via perturbation-theory gadgets — [[KKR06 - The Complexity of the Local Hamiltonian Problem|KKR06]]
- local-hamiltonian has no page of its own; it resolves through quantum-merlin-arthur.md's variants map.
