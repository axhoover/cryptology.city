---
type: complexity-class
status: draft
aliases:
  - QIP
  - Quantum Interactive Proofs
title: Quantum Interactive Proofs
id: qip
variants:
  mip-star: "#multi-prover-extensions"
---

# Quantum Interactive Proofs

The quantum analogue of [[interactive-proof-systems|IP]]: the class of decision problems verifiable by an interactive proof where both the verifier (a polynomial-time quantum algorithm) and the prover (unbounded) exchange _quantum_ messages over polynomially many rounds. We require:

1. If the answer is "yes," there exists a prover strategy causing the verifier to accept with probability at least 2/3.
2. If the answer is "no," for every prover strategy the verifier rejects with probability at least 2/3.

See the complexity zoo entry [here](https://complexityzoo.net/Complexity_Zoo:Q#qip).

## Known relationships

- $\classIP \subseteq \classQIP$: classical interactive proofs are a special case (restrict messages to classical strings).
- **$\classQIP = \classPSPACE$** — [[JJUW10 - QIP = PSPACE|JJUW10]]. Since $\classIP = \classPSPACE$ as well — [[Sha90 - IP = PSPACE|Sha90]] — quantum interactive proofs are no more powerful than classical interactive proofs.
- $\classQIP(2)$ (two-message quantum IP: verifier sends a quantum challenge, prover responds) contains $\classSZK$, since $\classSZK \subseteq \classAM \subseteq \classQIP(2)$ — [[AH91 - Statistical zero-knowledge languages can be recognized in two rounds|AH91]].
- $\classQIP(1) = \classQMA$: a single-message quantum interactive proof is exactly Quantum Merlin-Arthur.

## Multi-prover extensions

- **$\mathbf{MIP^*}$** (multiple quantum-entangled provers): provers share arbitrary prior entanglement but cannot communicate during the protocol. $\mathbf{MIP^*} = \mathbf{RE}$ (the class of recursively enumerable languages) — [[JNVWY20 - MIP-star = RE|JNVWY20]]. This result resolved the Connes embedding conjecture in the negative.
- $\mathbf{MIP^*} \not\subseteq \mathbf{MIP}$: $\mathbf{MIP} = \mathbf{NEXP}$ — [[BFL90 - Non-Deterministic Exponential Time Has Two-Prover Interactive Protocols|BFL90]], $\mathbf{NEEXP} \subseteq \mathbf{MIP^*}$ — [[NW19 - NEEXP is Contained in MIP-star|NW19]], and $\mathbf{NEXP} \subsetneq \mathbf{NEEXP}$ by the nondeterministic time hierarchy theorem — standard; see [[no-mip-to-multi-prover-extensions]].

## Relevance to cryptography

- $\classQIP = \classPSPACE$ implies that quantum zero-knowledge protocols with multiple rounds are no more expressive than classical ones from a language-recognition standpoint.
- The $\mathbf{MIP^*} = \mathbf{RE}$ result has profound implications: it shows that quantum entanglement can be used to certify computations in ways that are fundamentally unverifiable by classical means — raising both opportunities and challenges for quantum cryptographic protocols.

<!-- BEGIN GENERATED participates-in 12f2673f7a78 -->

## Participates in

**Builds on Quantum Interactive Proofs**

- [[qip-to-pspace|QIP = PSPACE]]

**Produces Quantum Interactive Proofs**

- [[ip-to-qip|IP ⊆ QIP]]
- [[qszk-to-qip|QSZK ⊆ QIP]]

**Barriers**

- [[no-mip-to-multi-prover-extensions|No free reduction from MIP* to MIP]] (via [[quantum-interactive-proofs#multi-prover-extensions|Multi-prover extensions]])

<!-- END GENERATED participates-in -->
