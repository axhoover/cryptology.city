---
type: complexity-class
status: draft
aliases:
  - MIP
  - Multi-prover interactive proofs
title: Multi-prover interactive proofs
id: mip
---

# Multi-prover interactive proofs

MIP is the class of languages with an interactive proof in which a probabilistic polynomial-time verifier interacts with two or more computationally unbounded provers who cannot communicate with one another; MIP = NEXP — [[BFL90 - Non-Deterministic Exponential Time Has Two-Prover Interactive Protocols|BFL90]].

## Definition

A language $L$ is in $\mathbf{MIP}$ if there are a polynomial $k$ and a probabilistic polynomial-time verifier $V$ that interacts with $k(|x|)$ provers $P_1, \ldots, P_{k(|x|)}$ on common input $x$, where each prover sees only its own messages with $V$ and the provers do not communicate during the protocol, such that:

- **Completeness**: if $x \in L$, there are provers with which $V$ accepts with probability at least $2/3$;
- **Soundness**: if $x \notin L$, then for all provers $P_1^*, \ldots, P_{k}^*$, $V$ accepts with probability at most $1/3$.

The provers may agree on a strategy beforehand, and share randomness, but receive no information about each other's questions — [[BGKW88 - Multi-Prover Interactive Proofs How to Remove Intractability Assumptions|BGKW88]].

## Known relationships

- Two provers suffice: every multi-prover interactive proof can be converted into one with two provers — [[BGKW88 - Multi-Prover Interactive Proofs How to Remove Intractability Assumptions|BGKW88]]. Multi-prover interactive proofs allow perfect zero knowledge for all of $\mathbf{MIP}$ without computational assumptions — [[BGKW88 - Multi-Prover Interactive Proofs How to Remove Intractability Assumptions|BGKW88]].
- $\mathbf{MIP}$ equals the class of languages accepted by probabilistic polynomial-time oracle machines whose oracle is fixed in advance, and $\mathbf{MIP} \subseteq \mathbf{NEXP}$ — [[FRS88 - On the Power of Multi-Prover Interactive Protocols|FRS88]]; with the converse, $\mathbf{MIP} = \mathbf{NEXP}$ ([[mip-to-nexp-bfl90|MIP = NEXP]]) — [[BFL90 - Non-Deterministic Exponential Time Has Two-Prover Interactive Protocols|BFL90]].
- Two provers and one round suffice for $\mathbf{NEXP}$ — [[FL92 - Two-Prover One-Round Proof Systems Their Power and Their Problems|FL92]].
- With provers that share entanglement, the class $\mathbf{MIP}^*$ equals $\mathbf{RE}$ — [[JNVWY20 - MIP-star = RE|JNVWY20]].

<!-- BEGIN GENERATED participates-in c914b93becdb -->

## Participates in

**Builds on Multi-prover interactive proofs**

- [[mip-to-nexp-bfl90|MIP = NEXP]]

**Barriers**

- [[no-mip-to-multi-prover-extensions|No free reduction from MIP* to MIP]]

<!-- END GENERATED participates-in -->
