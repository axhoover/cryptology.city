---
aliases:
  - QSZK
  - Quantum Statistical Zero-Knowledge
title: Quantum Statistical Zero-Knowledge
---

# Quantum Statistical Zero-Knowledge

The quantum analogue of [[statistical-zero-knowledge|SZK]]: the class of decision problems that have a quantum statistical zero-knowledge proof. In such a protocol, the verifier is a polynomial-time quantum algorithm, messages are quantum states, and the zero-knowledge condition requires that a quantum polynomial-time simulator can produce a quantum state statistically indistinguishable from the verifier's view of the interaction.

See the complexity zoo entry [here](https://complexityzoo.net/Complexity_Zoo:Q#qszk).

## Notable problems

- **Quantum state distinguishability** (QSD): given two quantum circuits $Q_0$ and $Q_1$ of the same size, are their output states on the all-zeros input (a) at least $2/3$ apart in trace distance, or (b) at most $1/3$ apart? QSD is QSZK-complete — TODO citation (Watrous 2002). This is the quantum analogue of the Statistical Difference problem, which is SZK-complete.

## Known relationships

- $\classSZK \subseteq \classQSZK$: any classical SZK protocol is a special case of a quantum one.
- QSZK is closed under complement: $\mathbf{coQSZK} = \classQSZK$ — TODO citation (Watrous 2002). This mirrors the classical fact that $\classSZK$ is closed under complement.
- $\classQSZK \subseteq \classQIP = \classPSPACE$: quantum statistical zero-knowledge is contained in quantum interactive proofs, which equals PSPACE.
- It is open whether $\classSZK = \classQSZK$ — i.e., whether quantum interaction and witnesses add power to statistical zero-knowledge proofs.

## Relevance to cryptography

QSZK is the appropriate complexity class for zero-knowledge proofs that remain secure against quantum verifiers. Key points:

- A protocol in QSZK guarantees zero-knowledge even when the verifier has quantum capabilities and can store quantum information between rounds.
- The QSZK-completeness of QSD means that quantum zero-knowledge proofs are tightly connected to the problem of distinguishing quantum states — a fundamental task in quantum information.
- Post-quantum zero-knowledge proof systems should be analyzed in the QSZK model rather than the classical SZK model to ensure security against quantum adversaries.
