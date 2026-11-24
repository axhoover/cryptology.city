---
type: complexity-class
status: draft
aliases:
  - QCMA
  - Quantum-Classical Merlin-Arthur
  - MQA
title: Quantum-Classical Merlin-Arthur
id: qcma
---

# Quantum-Classical Merlin-Arthur

The class of decision problems verifiable by a protocol where Merlin sends a _classical_ proof string, as in [[merlin-arthur|MA]], but Arthur is a polynomial-time _quantum_ algorithm, as in [[quantum-merlin-arthur|QMA]] — [[AN02 - Quantum NP - A Survey|AN02]]; also written MQA (Merlin Quantum Arthur) — [[Wat08 - Quantum Computational Complexity|Wat08]]. Formally, a language $L$ is in $\classQCMA$ if there are a polynomial-time quantum verifier $V$ and a polynomial $p$ such that:

1. If $x \in L$, there exists a classical string $w \in \bits^{p(|x|)}$ such that $V$ accepts $(x, w)$ with probability at least $2/3$.
2. If $x \notin L$, then for all $w \in \bits^{p(|x|)}$, $V$ rejects $(x, w)$ with probability at least $2/3$.

See the complexity zoo entry [here](https://complexityzoo.net/Complexity_Zoo:Q#qcma).

## Known relationships

- $\classMA \subseteq \classQCMA \subseteq \classQMA$ ([[ma-to-qcma|MA ⊆ QCMA]], [[qcma-to-qma|QCMA ⊆ QMA]]) — [[AN02 - Quantum NP - A Survey|AN02]].
- $\classQCMA \subseteq \classPP \subseteq \classPSPACE$ ([[pp-to-pspace|PP ⊆ PSPACE]]), since $\classQMA \subseteq \classPP$ ([[qma-to-pp|QMA ⊆ PP]]) — [[MW05 - Quantum Arthur-Merlin games|MW05]].

## Oracle separation from QMA

Relative to oracles, $\classQMA \not\subseteq \classQCMA$ ([[no-qcma-to-qma-ak07|No relativizing reduction from QMA to QCMA]]):

- [[AK07 - Quantum versus Classical Proofs and Advice|AK07]]: relative to a quantum unitary oracle; also separates $\classBQP/\mathrm{qpoly}$ from $\classBQP/\mathrm{poly}$ relative to a quantum oracle.
- [[BFM23 - On the Power of Nonstandard Quantum Oracles|BFM23]]: relative to a randomized in-place oracle, for deciding whether a graph has a small disconnected subset, against verifiers with $O(\log n)$ extra workspace qubits, via representation theory of the symmetric group.
- [[NN23 - A Distribution Testing Oracle Separation between QMA and QCMA|NN23]]: relative to a distribution over classical oracles, for deciding whether a regular graph given by its adjacency list has at least two connected components or is a connected expander, with the honest quantum witness and every classical witness depending only on the distribution, not the sampled oracle.
- [[BK24 - Oracle Separation of QMA and QCMA with Bounded Adaptivity|BK24]]: relative to a standard classical oracle, for verifiers of bounded adaptivity: $o(\log n / \log\log n)$ rounds of polynomially many parallel queries.
- [[BHNZ25 - Separating QMA from QCMA with a Classical Oracle|BHNZ25]]: relative to a standard classical oracle, with no restriction, via spectral Forrelation.
- [[BHV26 - Separating Quantum and Classical Advice with Good Codes|BHV26]]: a simpler proof of the BHNZ25 separation via good error-correcting codes; also the first unconditional classical-oracle separation of $\classBQP/\mathrm{qpoly}$ from $\classBQP/\mathrm{poly}$.

Unrelativized, whether $\classQCMA = \classQMA$ is open; the question is due to [[AN02 - Quantum NP - A Survey|AN02]].

## Relevance to cryptography

There is a unitary oracle relative to which [[bounded-error-quantum-polynomial-time|BQP]] equals QCMA and yet quantum-computation classical-communication (QCCC) [[commitment-scheme|commitments]] and QCCC multiparty non-interactive [[key-exchange|key exchange]] exist — [[GMMY24 - CountCrypt Quantum Cryptography between QCMA and PP|GMMY24]].

<!-- BEGIN GENERATED participates-in df0e0ad377f8 -->

## Participates in

**Builds on Quantum-Classical Merlin-Arthur**

- [[qcma-to-qma|QCMA ⊆ QMA]]

**Produces Quantum-Classical Merlin-Arthur**

- [[ma-to-qcma|MA ⊆ QCMA]]

**Barriers**

- [[no-qcma-to-qma-ak07|No relativizing reduction from QMA to QCMA]]

<!-- END GENERATED participates-in -->
