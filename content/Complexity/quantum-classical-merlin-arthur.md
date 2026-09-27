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

Also written MQA (Merlin Quantum Arthur): the class of decision problems verifiable by a protocol where Merlin sends a _classical_ proof string, but Arthur is a polynomial-time _quantum_ algorithm. Formally, a language $L \in \classQCMA$ if there exists a polynomial-time quantum verifier $V$ and polynomials $p, q$ such that:

1. If $x \in L$, there exists a classical string $w \in \bits^{p(|x|)}$ such that $V$ accepts $(x, w)$ with probability at least 2/3.
2. If $x \notin L$, then for all $w \in \bits^{p(|x|)}$, $V$ rejects $(x, w)$ with probability at least 2/3.

QCMA sits between [[merlin-arthur|MA]] (classical verifier) and [[quantum-merlin-arthur|QMA]] (quantum witness allowed) in the hierarchy of proof systems.

See the complexity zoo entry [here](https://complexityzoo.net/Complexity_Zoo:Q#qcma).

## Known relationships

- $\classMA \subseteq \classQCMA \subseteq \classQMA$: any MA protocol is a QCMA protocol (ignore the quantum capabilities of the verifier); any QCMA protocol is a QMA protocol (quantum states can encode classical strings).
- $\classQCMA \subseteq \classPP \subseteq \classPSPACE$, since $\classQMA \subseteq \classPP$ — [[MW05 - Quantum Arthur-Merlin games|MW05]].

## Oracle separation from QMA

Relative to oracles, $\classQMA \not\subseteq \classQCMA$ ([[no-qcma-to-qma-ak07]]):

- [[AK07 - Quantum versus Classical Proofs and Advice|AK07]]: relative to a quantum unitary oracle; also separates $\classBQP/\mathrm{qpoly}$ from $\classBQP/\mathrm{poly}$ relative to a quantum oracle.
- [[BFM23 - On the Power of Nonstandard Quantum Oracles|BFM23]]: relative to an in-place quantum oracle, for a graph connectivity problem, via representation theory of the symmetric group.
- [[NN23 - A Distribution Testing Oracle Separation between QMA and QCMA|NN23]]: relative to a distributional classical oracle (connectivity of a random graph), with the honest quantum witness depending only on the oracle distribution, not the sampled oracle.
- [[BK24 - Oracle Separation of QMA and QCMA with Bounded Adaptivity|BK24]]: relative to a standard classical oracle, for verifiers of bounded adaptivity (polynomially many queries per round, few rounds).
- [[BHNZ25 - Separating QMA from QCMA with a Classical Oracle|BHNZ25]]: relative to a standard classical oracle, with no restriction, via spectral Forrelation.
- [[BHV26 - Separating Quantum and Classical Advice with Good Codes|BHV26]]: a simpler proof of the BHNZ25 separation via good error-correcting codes; also the first classical-oracle separation of $\classBQP/\mathrm{qpoly}$ from $\classBQP/\mathrm{poly}$.

All of these are oracle separations; whether $\classQCMA = \classQMA$ holds in the unrelativized world remains open.

## Relevance to cryptography

The QCMA vs QMA question captures whether quantum witnesses are inherently more useful than classical ones for quantum verifiers. In the context of zero-knowledge proofs:

- A QCMA-complete problem has a classical proof that a quantum verifier can check, which is useful for constructing quantum zero-knowledge protocols with classical proofs.
- If QMA = QCMA (in the unrelativized world), quantum witnesses provide no extra power — simplifying the design of post-quantum proof systems. The oracle separations make this unlikely.

<!-- BEGIN GENERATED participates-in 835302ab2678 -->

## Participates in

**Builds on Quantum-Classical Merlin-Arthur**

- [[qcma-to-pp|QCMA ⊆ PP]]
- [[qcma-to-qma|QCMA ⊆ QMA]]

**Produces Quantum-Classical Merlin-Arthur**

- [[ma-to-qcma|MA ⊆ QCMA]]

**Barriers**

- [[no-qcma-to-qma-ak07|No reduction from QCMA to QMA]]

<!-- END GENERATED participates-in -->
