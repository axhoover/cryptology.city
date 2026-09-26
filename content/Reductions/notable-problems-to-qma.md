---
type: reduction
status: draft
title: "Notable problems = QMA"
aliases: []
id: red-notable-problems-to-qma
kind: equivalence
hypotheses: [local-hamiltonian]
conclusion: qma
class: free
model: quantum
source:
  - "[[KSV02 - Classical and Quantum Computation|KSV02]]"
security-loss: ""
---

# Notable problems = QMA

The [[quantum-merlin-arthur#notable-problems|local Hamiltonian problem]] is [[quantum-merlin-arthur|QMA]]-complete.

## Statement

The [[quantum-merlin-arthur#notable-problems|$k$-local Hamiltonian problem]] — given $H = \sum_i H_i$ on $n$ qubits with each $H_i$ acting on at most $k$ qubits, and thresholds $a < b$ with $b - a \ge 1/\poly(n)$, decide whether the ground-state energy of $H$ is at most $a$ or at least $b$ — is [[quantum-merlin-arthur|QMA]]-complete for every constant $k \ge 5$ [[KSV02 - Classical and Quantum Computation|KSV02]].

## Sketch

Containment: the verifier picks a term $H_i$ at random and measures the witness against it, rejecting with probability proportional to its energy. Hardness: the Feynman–Kitaev clock construction encodes a QMA verifier circuit into a local Hamiltonian whose low-energy states are history states — superpositions over the computation's time steps — so ground energy below the threshold certifies an accepting witness.

## Notes

`class: free`: unconditional completeness theorem (containment by an explicit verifier, hardness by the circuit-to-Hamiltonian reduction); complexity results take `free` by this repo's convention.

`model: quantum`: QMA is a quantum class and both directions of the proof are quantum.

- 3-local Hamiltonian is QMA-complete — [[KR03 - 3-Local Hamiltonian is QMA-complete|KR03]]
- 2-local Hamiltonian is QMA-complete, via perturbation-theory gadgets — [[KKR06 - The Complexity of the Local Hamiltonian Problem|KKR06]]
- Completeness claim (in-class + hard-for-class); typed as 'equivalence' because the schema has no completeness kind.
- 'Local Hamiltonian' has no wiki page; the hypothesis identifier was invented during migration and resolves through quantum-merlin-arthur.md's variants map.
