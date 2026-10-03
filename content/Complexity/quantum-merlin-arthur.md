---
type: complexity-class
status: draft
aliases:
  - QMA
  - Quantum Merlin-Arthur
title: Quantum Merlin-Arthur
id: qma
variants:
  local-hamiltonian: "#notable-problems"
---

# Quantum Merlin-Arthur

The quantum analogue of [[merlin-arthur|MA]]: Merlin (an unbounded prover) sends a polynomial-size _quantum state_ as a proof to Arthur (a polynomial-time quantum verifier), who then performs a quantum measurement to decide whether to accept. We require:

1. If the answer is "yes," there exists a quantum state Merlin can send such that Arthur accepts with probability at least 2/3.
2. If the answer is "no," for every quantum state Merlin might send, Arthur rejects with probability at least 2/3.

QMA is the quantum analogue of NP (with a quantum verifier and quantum witness), just as [[merlin-arthur|MA]] is the probabilistic analogue of NP.

See the complexity zoo entry [here](https://complexityzoo.net/Complexity_Zoo:Q#qma).

## Notable problems

- **Local Hamiltonian** (k-LH): given a $k$-local Hamiltonian $H = \sum_i H_i$ on $n$ qubits with $\poly(n)$ terms, each of norm at most $\poly(n)$, and thresholds $a < b$ with $b - a \ge 1/\poly(n)$, decide whether the ground-state energy of $H$ is at most $a$ or at least $b$, promised one holds. This is QMA-complete for $k \ge 2$ — [[KKR06 - The Complexity of the Local Hamiltonian Problem|KKR06]] (for $k \ge 5$ first by Kitaev — [[KSV02 - Classical and Quantum Computation|KSV02]]). The Local Hamiltonian problem is the quantum analogue of SAT.
- **Consistency of local density matrices**: given density matrices $\rho_1, \dots, \rho_m$ on subsets $C_1, \dots, C_m$ of at most $k$ of $n$ qubits, decide whether some $n$-qubit state $\sigma$ has every reduced state $\mathrm{Tr}_{\overline{C_i}}(\sigma)$ within trace distance $\beta$ of $\rho_i$, or every $n$-qubit state $\sigma$ has some reduced state $\mathrm{Tr}_{\overline{C_i}}(\sigma)$ at trace distance at least $\alpha$ from $\rho_i$, where $\alpha - \beta \ge 1/\poly(n)$. In QMA and QMA-hard under Turing reductions — [[Liu06 - Consistency of Local Density Matrices is QMA-complete|Liu06]]; QMA-hard under Karp reductions — [[BG20 - QMA-hardness of Consistency of Local Density Matrices with Applications to Quantum Zero-Knowledge|BG20]].

## Known relationships

- $\classNP \subseteq \classMA \subseteq \classQCMA \subseteq \classQMA$: classical proofs can be checked classically, classically by a quantum machine, or quantumly by a quantum machine.
- $\classQMA \subseteq \classPP \subseteq \classPSPACE$: first proved as $\classQMA \subseteq \mathrm{A_0PP}$ — [[Vya03 - QMA=PP implies that PP contains PH|Vya03]] (stated earlier without proof in [[KW00 - Parallelization, amplification, and exponential time simulation of quantum interactive proof systems|KW00]]); a short proof via strong error reduction is in [[MW05 - Quantum Arthur-Merlin games|MW05]]; see [[qma-to-pp]].
- QMA is closed under intersection: run both error-reduced verifiers ([[MW05 - Quantum Arthur-Merlin games|MW05]]), each on its own witness register, and accept iff both accept — folklore. Closure under complement — i.e., whether $\classQMA = \mathbf{coQMA}$ — is open, analogous to the classical question of $\classMA$ vs $\mathbf{coMA}$.
- $\classQMA$ and $\classAM$ are believed incomparable.
- **QMA(2)**: the class with two unentangled quantum proofs is believed strictly more powerful than QMA. $\classQMA(2) \subseteq \mathbf{NEXP}$ (guess classical descriptions of both proofs and compute the acceptance probability) — folklore; whether $\classQMA(2) \subseteq \classEXP$ is open.

## Variants

Recent work has studied how modifications to the proof model change QMA's power:

- **QMA+** (proofs with non-negative amplitudes): restricting quantum proofs to have non-negative amplitudes (no relative phase between basis states) dramatically changes the class. With one constant completeness-soundness gap, $\classQMA+ = \mathbf{NEXP}$; with a different gap, $\classQMA+ = \classQMA$ — [[BFM24 - Quantum Merlin-Arthur and Proofs Without Relative Phase|BFM24]]. One interpretation is that Merlin's ability to cheat comes from relative phase at least as much as from entanglement, since $\classQMA(2) \subseteq \mathbf{NEXP}$ — [[BFM24 - Quantum Merlin-Arthur and Proofs Without Relative Phase|BFM24]].
- **QMA with a non-collapsing measurement**: if the verifier may apply a single measurement that does not disturb the quantum state (a "non-collapsing" measurement), then QMA equals NEXP — [[BM25 - Superposition Detection and QMA with Non-Collapsing Measurements|BM25]], resolving an open question of Aaronson.
- **QMA with internally separable proofs**: a variant where each proof must be "internally separable" (after tracing out one register, a small number of qubits are separable from the rest): $\classQMA_{\mathrm{IS}} \subseteq \classEXP$ but $\classQMA_{\mathrm{IS}}(2) = \mathbf{NEXP}$, so one such proof is strictly weaker than two unentangled ones unless EXP $=$ NEXP — [[BFL+24 - Quantum Merlin-Arthur with an Internally Separable Proof|BFL+24]]. This provides a new route toward proving QMA(2) = NEXP.

## Relevance to cryptography

For every $\gamma \ge 1$, [[shortest-vector-problem|$\mathrm{GapSVP}_\gamma$]] is in $\classNP \subseteq \classQMA$, since a short vector is a classical witness — folklore. For $\gamma \ge \sqrt{n}$, $\mathrm{GapSVP}_\gamma \in \classNP \cap \classcoNP$ — [[AR04 - Lattice Problems in NP intersect coNP|AR04]], so it is not QMA-hard under Karp reductions unless $\classQMA \subseteq \classNP \cap \classcoNP$.

<!-- BEGIN GENERATED participates-in a042e53ff89f -->

## Participates in

**Builds on Quantum Merlin-Arthur**

- [[notable-problems-to-qma|Local Hamiltonian is QMA-complete]] (via [[quantum-merlin-arthur#notable-problems|local-hamiltonian]])
- [[qma-to-pp|QMA ⊆ PP]]

**Produces Quantum Merlin-Arthur**

- [[notable-problems-to-qma|Local Hamiltonian is QMA-complete]]
- [[qcma-to-qma|QCMA ⊆ QMA]]

**Barriers**

- [[no-qcma-to-qma-ak07|No relativizing reduction from QMA to QCMA]]

<!-- END GENERATED participates-in -->
