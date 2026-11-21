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

$\mathbf{MIP^*}$ is the class of languages $L$ decided by a classical probabilistic polynomial-time verifier interacting over polynomially many rounds with $k(|x|) \ge 2$ computationally unbounded provers, for a polynomial $k$. The provers cannot communicate during the protocol; they share a finite-dimensional entangled state and answer by measurements on their own tensor factors (the tensor-product model), and the value of the protocol on $x$ is the supremum of the verifier's acceptance probability over these finite-dimensional strategies, whose correlations have closure $C_{qa}$. If $x \in L$, some strategy makes the verifier accept with probability at least $2/3$; if $x \notin L$, every strategy makes it accept with probability at most $1/3$ — [[JNVWY20 - MIP-star = RE|JNVWY20]] (arXiv v4, §1.2 and §5.3). The commuting-operator class $\mathbf{MIP^{co}}$, defined with the commuting-operator correlations $C_{qc}$, is a different class: writing $(2, 1)$ for the restriction to two provers and one round, $\mathbf{MIP^{co}}(2, 1) \subseteq \mathbf{coRE}$, and since $\mathbf{RE} \neq \mathbf{coRE}$, $\mathbf{MIP^*}(2, 1) \neq \mathbf{MIP^{co}}(2, 1)$ — [[JNVWY20 - MIP-star = RE|JNVWY20]].

- $\mathbf{MIP^*} = \mathbf{RE}$, the class of recursively enumerable languages, and the result refutes Connes' embedding conjecture — [[JNVWY20 - MIP-star = RE|JNVWY20]].
- $\mathbf{MIP^*} \not\subseteq \mathbf{MIP}$: $\mathbf{MIP} = \mathbf{NEXP}$ — [[BFL90 - Non-Deterministic Exponential Time Has Two-Prover Interactive Protocols|BFL90]], $\mathbf{NEEXP} \subseteq \mathbf{MIP^*}$ — [[NW19 - NEEXP is Contained in MIP-star|NW19]], and $\mathbf{NEXP} \subsetneq \mathbf{NEEXP}$ by the nondeterministic time hierarchy theorem — standard; see [[no-mip-to-multi-prover-extensions]].

## Relevance to cryptography

- $\classQSZK \subseteq \classQIP = \classPSPACE$ ([[qszk-to-qip|QSZK ⊆ QIP]], [[qip-to-pspace|QIP = PSPACE]]).
- A classical verifier interacting with entangled provers decides every RE language — [[JNVWY20 - MIP-star = RE|JNVWY20]].

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
