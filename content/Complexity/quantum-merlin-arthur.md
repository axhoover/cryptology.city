---
aliases:
  - QMA
  - Quantum Merlin-Arthur
title: Quantum Merlin-Arthur
---

# Quantum Merlin-Arthur

The quantum analogue of [[merlin-arthur|MA]]: Merlin (an unbounded prover) sends a polynomial-size _quantum state_ as a proof to Arthur (a polynomial-time quantum verifier), who then performs a quantum measurement to decide whether to accept. We require:

1. If the answer is "yes," there exists a quantum state Merlin can send such that Arthur accepts with probability at least 2/3.
2. If the answer is "no," for every quantum state Merlin might send, Arthur rejects with probability at least 2/3.

QMA is the quantum analogue of NP (with a quantum verifier and quantum witness), just as [[merlin-arthur|MA]] is the probabilistic analogue of NP.

See the complexity zoo entry [here](https://complexityzoo.net/Complexity_Zoo:Q#qma).

## Notable problems

- **Local Hamiltonian** (k-LH): given a $k$-local Hamiltonian $H = \sum_i H_i$ on $n$ qubits and a threshold $a$, is the ground state energy of $H$ at most $a$? This is QMA-complete — TODO citation (Kitaev 1999). The Local Hamiltonian problem is the quantum analogue of SAT.
- **Consistency of local density matrices**: given a collection of local density matrices, do they arise from a global quantum state? QMA-complete — TODO citation.

## Known relationships

- $\classNP \subseteq \classMA \subseteq \classQCMA \subseteq \classQMA$: classical proofs can be checked classically, classically by a quantum machine, or quantumly by a quantum machine.
- $\classQMA \subseteq \classPP \subseteq \classPSPACE$: QMA is contained in PP (Marriott-Watrous — TODO citation), and thus in PSPACE.
- QMA is closed under complement: $\mathbf{coQMA} = \classQMA$. This uses the quantum error reduction technique (applying the swap test), and contrasts with the classical case where it is unknown whether $\classMA = \mathbf{coMA}$.
- $\classQMA$ and $\classAM$ are believed incomparable.
- **QMA(2)**: the class with two unentangled quantum proofs is believed strictly more powerful than QMA — TODO citation. It is not even known whether QMA(2) $\subseteq$ NEXP.

## Relevance to cryptography

QMA is the quantum analogue of NP-hardness. In post-quantum cryptography:

- Lattice problems such as approximate SVP are believed to be in QMA (quantum witnesses can encode short vectors), though QMA-hardness of lattice problems would give extremely strong hardness guarantees.
- A quantum reduction from a QMA-hard problem to a cryptographic assumption would mean breaking the scheme is at least as hard as Local Hamiltonian — far stronger than any known assumption.
- The question of whether lattice problems are QMA-hard (or merely in TFNP) has direct implications for the confidence we can place in post-quantum assumptions.
