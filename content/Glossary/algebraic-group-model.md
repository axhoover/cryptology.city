---
type: glossary
status: draft
aliases:
  - AGM
  - Algebraic Group Model
title: Algebraic Group Model
id: agm
---

# Algebraic Group Model

The _Algebraic Group Model (AGM)_ [[FKL18 - The Algebraic Group Model and its Applications|FKL18]] is a model of computation that lies between the standard model and the [[generic-group-model|Generic Group Model (GGM)]]. In it, adversaries are restricted to being _algebraic_: they can perform arbitrary group computations, but must be able to account for every group element they produce by explaining it as a linear combination of previously seen elements.

## Definition

Let $(\GG, g, p) \gets \GrGen(1^\secpar)$. An adversary $\calA$ is **algebraic** if, for every group element $Z \in \GG$ that $\calA$ outputs, it simultaneously outputs a vector of exponents $(\alpha_1, \ldots, \alpha_k) \in \ZZ_p^k$ such that

$$
Z = \prod_{i=1}^{k} A_i^{\alpha_i},
$$

where $(A_1, \ldots, A_k)$ is the ordered list of all group elements $\calA$ has received so far, as input or in response to oracle queries. This vector is called a **representation** of $Z$.

Informally, an algebraic adversary may compute on group elements however it likes, including via their representation, but must "explain" every group element it outputs as a known combination of the group elements it has been given.

## Key Results

The following results are due to [[FKL18 - The Algebraic Group Model and its Applications|FKL18]] for algebraic adversaries in cyclic groups:

- [[dlog-to-cdh-fkl18|DLOG ⇒ CDH]]
- [[dlog-to-bls-signatures-fkl18|DLOG ⇒ BLS signatures]]
- **Groth's SNARK:** knowledge soundness of Groth's zero-knowledge SNARK reduces to $q$-DLOG in the AGM.

These reductions, combined with the $\Omega(\sqrt{p})$ GGM lower bound of [[Sho97 - Lower Bounds for Discrete Logarithms and Related Problems|Sho97]], yield tight concrete lower bounds for CDH and related problems against adversaries that are both algebraic and generic. Whether this gives lower bounds against all generic adversaries is disputed: under the standard formalizations, hardness in the AGM need not imply hardness in the GGM ([[KZ22 - An Analysis of the Algebraic Group Model|KZ22]]).

The AGM constrains only the group elements an adversary outputs, so it places no restriction on a [[decisional-diffie-hellman|DDH]] distinguisher, which outputs a bit. Rotem and Segev introduce _algebraic distinguishers_, a strengthening of the AGM that captures decisional problems, and show that DLOG implies DDH against them — [[RS20 - Algebraic Distinguishers From Discrete Logarithms to Decisional Uber Assumptions|RS20]].

## Comparison with the GGM

The relationship between the AGM and the [[generic-group-model|GGM]] has been the subject of significant study.

[[FKL18 - The Algebraic Group Model and its Applications|FKL18]] claimed that the AGM is _strictly weaker_ than the GGM in the sense that hardness for algebraic adversaries implies hardness for generic adversaries. Under this view, every AGM-secure scheme is GGM-secure, and AGM lower bounds lift to the GGM.

[[KZ22 - An Analysis of the Algebraic Group Model|Zhang, Zhou, and Katz (KZ22)]] challenged this claim: they showed that hardness in the AGM does not in general imply hardness in the GGM, and that generic reductions in the AGM need not yield analogous reductions in the GGM. The precise conditions under which AGM proofs transfer to the GGM remain an active area of research.

## Comparison with the Standard Model

In the standard model, an adversary receives group elements and may compute arbitrary group operations, with no restriction on how it uses or derives elements. The AGM adds a single constraint — the algebraic accountability condition — that enables tight reductions which are not known in the standard model. Unlike the GGM, the AGM allows algorithms that exploit the representation of group elements; it rules out only adversaries that output group elements whose representation over their inputs they do not know, such as elements sampled obliviously or by hashing into the group — [[FKL18 - The Algebraic Group Model and its Applications|FKL18]].

<!-- BEGIN GENERATED participates-in 06ae49b460a8 -->

## Participates in

**Builds on Algebraic Group Model**

- [[agm-to-kea|AGM ⇒ KEA]]

**Barriers**

- [[no-agm-to-ggm-kz22|No reduction from AGM to GGM]]

**Proved in the Algebraic Group Model**

- [[dlog-to-bls-signatures-fkl18|DLOG ⇒ BLS signatures]]
- [[dlog-to-cdh-fkl18|DLOG ⇒ CDH]]

<!-- END GENERATED participates-in -->
