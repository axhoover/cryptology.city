---
type: complexity-class
status: stub
aliases:
  - NEXP
  - NEXPTIME
  - Nondeterministic exponential time
title: Nondeterministic exponential time
id: nexp
---

# Nondeterministic exponential time

The class of decision problems decided by a nondeterministic Turing machine in time $2^{\poly(n)}$ on inputs of length $n$; equivalently, the languages whose members have witnesses of length $2^{\poly(n)}$ that a deterministic machine verifies in time $2^{\poly(n)}$.

See the complexity zoo entry [here](https://complexityzoo.net/Complexity_Zoo:N#nexp).

## Notable problems

- Succinct versions of standard $\classNP$-complete problems, such as Succinct 3SAT, in which the input is a circuit describing an exponentially large formula or graph, are $\mathbf{NEXP}$-complete — [[PY86 - A Note on Succinct Representations of Graphs|PY86]].

## Known relationships

- $\classEXP \subseteq \mathbf{NEXP}$ ([[exp-to-nexp|EXP ⊆ NEXP]]) — folklore.
- $\classNP \subsetneq \mathbf{NEXP}$ by the nondeterministic time hierarchy theorem — [[Coo73 - A Hierarchy for Nondeterministic Time Complexity|Coo73]].
- $\mathbf{NEXP}$ is exactly the class of languages with [[multi-prover-interactive-proofs|multi-prover interactive proofs]]: [[mip-to-nexp-bfl90|MIP = NEXP]] — [[BFL90 - Non-Deterministic Exponential Time Has Two-Prover Interactive Protocols|BFL90]], [[FRS88 - On the Power of Multi-Prover Interactive Protocols|FRS88]].

<!-- BEGIN GENERATED participates-in 3c6eb5d787cc -->

## Participates in

**Produces Nondeterministic exponential time**

- [[exp-to-nexp|EXP ⊆ NEXP]]
- [[mip-to-nexp-bfl90|MIP = NEXP]]

<!-- END GENERATED participates-in -->
