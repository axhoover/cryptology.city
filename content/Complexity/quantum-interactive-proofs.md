---
aliases:
  - QIP
  - Quantum Interactive Proofs
title: Quantum Interactive Proofs
---

# Quantum Interactive Proofs

The quantum analogue of [[interactive-proof-systems|IP]]: the class of decision problems verifiable by an interactive proof where both the verifier (a polynomial-time quantum algorithm) and the prover (unbounded) exchange _quantum_ messages over polynomially many rounds. We require:

1. If the answer is "yes," there exists a prover strategy causing the verifier to accept with probability at least 2/3.
2. If the answer is "no," for every prover strategy the verifier rejects with probability at least 2/3.

See the complexity zoo entry [here](https://complexityzoo.net/Complexity_Zoo:Q#qip).

## Known relationships

- $\classIP \subseteq \classQIP$: classical interactive proofs are a special case (restrict messages to classical strings).
- **$\classQIP = \classPSPACE$** — TODO citation (Jain, Ji, Upadhyay, Watrous 2010). Since $\classIP = \classPSPACE$ as well, quantum interactive proofs are no more powerful than classical interactive proofs. This is a striking collapse: quantum communication between prover and verifier adds no power to multi-round interactive proofs.
- $\classQIP(2)$ (two-message quantum IP: verifier sends a quantum challenge, prover responds) strictly contains $\classSZK$ and is believed to contain problems outside $\classAM$ — TODO citation.
- $\classQIP(1) = \classQMA$: a single-message quantum interactive proof is exactly Quantum Merlin-Arthur.

## Multi-prover extensions

- **$\mathbf{MIP^*}$** (multiple quantum-entangled provers): provers share arbitrary prior entanglement but cannot communicate during the protocol. Remarkably, $\mathbf{MIP^*} = \mathbf{RE}$ (the class of recursively enumerable languages) — TODO citation (Ji, Natarajan, Vidick, Wright, Yuen 2020). This means entangled provers can convince a classical verifier of undecidable statements! This result resolved the Connes embedding conjecture in the negative.
- **$\mathbf{MIP^*}$** vs **$\mathbf{MIP}$**: the classical multi-prover class $\mathbf{MIP} = \mathbf{NEXP}$, so entanglement exponentially (in fact, incomparably) increases prover power.

## Relevance to cryptography

- $\classQIP = \classPSPACE$ implies that quantum zero-knowledge protocols with multiple rounds are no more expressive than classical ones from a language-recognition standpoint.
- The $\mathbf{MIP^*} = \mathbf{RE}$ result has profound implications: it shows that quantum entanglement can be used to certify computations in ways that are fundamentally unverifiable by classical means — raising both opportunities and challenges for quantum cryptographic protocols.
