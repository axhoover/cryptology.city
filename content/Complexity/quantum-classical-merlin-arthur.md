---
aliases:
  - QCMA
  - Quantum-Classical Merlin-Arthur
  - MQA
title: Quantum-Classical Merlin-Arthur
---

# Quantum-Classical Merlin-Arthur

Also written MQA (Merlin Quantum Arthur): the class of decision problems verifiable by a protocol where Merlin sends a _classical_ proof string, but Arthur is a polynomial-time _quantum_ algorithm. Formally, a language $L \in \classQCMA$ if there exists a polynomial-time quantum verifier $V$ and polynomials $p, q$ such that:

1. If $x \in L$, there exists a classical string $w \in \{0,1\}^{p(|x|)}$ such that $V$ accepts $(x, w)$ with probability at least 2/3.
2. If $x \notin L$, then for all $w \in \{0,1\}^{p(|x|)}$, $V$ rejects $(x, w)$ with probability at least 2/3.

QCMA sits between [[merlin-arthur|MA]] (classical verifier) and [[quantum-merlin-arthur|QMA]] (quantum witness allowed) in the hierarchy of proof systems.

See the complexity zoo entry [here](https://complexityzoo.net/Complexity_Zoo:Q#qcma).

## Known relationships

- $\classMA \subseteq \classQCMA \subseteq \classQMA$: any MA protocol is a QCMA protocol (ignore the quantum capabilities of the verifier); any QCMA protocol is a QMA protocol (quantum states can encode classical strings).
- $\classQCMA \subseteq \classPP \subseteq \classPSPACE$, since $\classQMA \subseteq \classPP$.

## Oracle separation from QMA

The question of whether $\classQCMA = \classQMA$ — i.e., whether quantum proofs are strictly more powerful than classical proofs for quantum verifiers — was resolved in the oracle model through a sequence of increasingly general results:

- **[[AK07 - Quantum versus Classical Proofs and Advice|AK07]]**: First oracle separation, using a quantum unitary oracle. Also showed a corresponding separation between $\classBQP/\mathrm{qpoly}$ and $\classBQP/\mathrm{poly}$.
- **[[BFM23 - On the Power of Nonstandard Quantum Oracles|BFM23]]**: Studied the separation in the in-place quantum oracle model using representation theory of the symmetric group, showing that no classical witness suffices for a graph connectivity problem relative to such an oracle.
- **[[NN23 - A Distribution Testing Oracle Separation between QMA and QCMA|NN23]]**: First separation relative to a _classical_ oracle (distributional), testing connectivity of a random graph. A key restriction: the honest quantum witness depends only on the distribution over oracles, not the specific sample.
- **[[BK24 - Oracle Separation of QMA and QCMA with Bounded Adaptivity|BK24]]**: Separation relative to a standard classical oracle under bounded-adaptivity restrictions (polynomially many queries per round, few rounds).
- **[[BHNZ25 - Separating QMA from QCMA with a Classical Oracle|BHNZ25]]**: Unconditional separation relative to a standard classical oracle, fully resolving the oracle separation question. The separating problem is _spectral Forrelation_. The key insight: a QCMA verifier can reuse its classical witness across many verification runs to generate many samples, while a quantum witness is use-once (measuring it collapses the state); this asymmetry is formalized via a "second quantization" (bosonic) compression argument.
- **[[BHV26 - Separating Quantum and Classical Advice with Good Codes|BHV26]]**: Simpler proof of the same classical oracle separation via good error-correcting codes. Also gives the first unconditional classical oracle separation between $\classBQP/\mathrm{qpoly}$ and $\classBQP/\mathrm{poly}$.

Note that all of these are oracle separations; whether $\classQCMA = \classQMA$ holds in the unrelativized world remains open.

## Relevance to cryptography

The QCMA vs QMA question captures whether quantum witnesses are inherently more useful than classical ones for quantum verifiers. In the context of zero-knowledge proofs:

- A QCMA-complete problem has a classical proof that a quantum verifier can check, which is useful for constructing quantum zero-knowledge protocols with classical proofs.
- If QMA = QCMA (in the unrelativized world), quantum witnesses provide no extra power — simplifying the design of post-quantum proof systems. The oracle separations make this unlikely.
