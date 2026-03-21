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
- **QCMA vs QMA is open**: it is not known whether $\classQCMA = \classQMA$. A separation would show that quantum witnesses provide extra power over classical witnesses even when the verifier is quantum. Oracle separations between QCMA and QMA exist — TODO citation.
- $\classQCMA \subseteq \classPP \subseteq \classPSPACE$, since $\classQMA \subseteq \classPP$.

## Relevance to cryptography

The QCMA vs QMA question captures whether quantum witnesses are inherently more useful than classical ones for quantum verifiers. In the context of zero-knowledge proofs:

- A QCMA-complete problem has a classical proof that a quantum verifier can check, which is useful for constructing quantum zero-knowledge protocols with classical proofs.
- If QMA = QCMA, then quantum witnesses provide no extra power — simplifying the design of post-quantum proof systems.
