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

The _Algebraic Group Model (AGM)_ is a model of computation between the standard model and the [[generic-group-model|Generic Group Model (GGM)]] in which every adversary is _algebraic_: with each group element it outputs, it also outputs a representation of that element as a product of powers of the group elements it has received — [[FKL18 - The Algebraic Group Model and its Applications|FKL18]].

## Definition

Let $(\GG, g, p) \gets \GrGen(1^\secpar)$. An adversary $\calA$ is **algebraic** if, for every group element $Z \in \GG$ that $\calA$ outputs, it simultaneously outputs a vector of exponents $(\alpha_1, \ldots, \alpha_k) \in \ZZ_p^k$ such that

$$
Z = \prod_{i=1}^{k} A_i^{\alpha_i},
$$

where $(A_1, \ldots, A_k)$ is the ordered list of all group elements $\calA$ has received so far, as input or in response to oracle queries. This vector is called a **representation** of $Z$.

## Key Results

The following results are due to [[FKL18 - The Algebraic Group Model and its Applications|FKL18]] for algebraic adversaries in cyclic groups:

- [[dlog-to-cdh-fkl18|DLOG ⇒ CDH]]
- [[dlog-to-bls-signatures-fkl18|DLOG ⇒ BLS signatures]]
- [[bilinear-pairing-and-q-dlog-to-zk-snark-fkl18|Bilinear pairing + q-DLOG ⇒ zk-SNARK (Groth16 in the AGM)]]

These reductions, combined with the $\Omega(\sqrt{p})$ GGM lower bound of [[Sho97 - Lower Bounds for Discrete Logarithms and Related Problems|Sho97]], yield tight concrete lower bounds for CDH and related problems against adversaries that are both algebraic and generic. Whether this gives lower bounds against all generic adversaries is disputed: under the standard formalizations, hardness in the AGM need not imply hardness in the GGM ([[KZ22 - An Analysis of the Algebraic Group Model|KZ22]]; [[no-agm-to-ggm-kz22|No reduction from AGM to GGM]]).

The AGM constrains only the group elements an adversary outputs, so it places no restriction on a [[decisional-diffie-hellman|DDH]] distinguisher, which outputs a bit. Rotem and Segev introduce _algebraic distinguishers_, a strengthening of the AGM that captures decisional problems, and show that DLOG implies DDH against them — [[RS20 - Algebraic Distinguishers From Discrete Logarithms to Decisional Uber Assumptions|RS20]].

## Comparison with the GGM

Fuchsbauer, Kiltz and Loss state that their AGM results, combined with known lower bounds for the discrete logarithm in the [[generic-group-model|GGM]], give lower bounds in the GGM — [[FKL18 - The Algebraic Group Model and its Applications|FKL18]]. [[KZ22 - An Analysis of the Algebraic Group Model|KZ22]] describe the claim behind this as the view that the AGM is (strictly) weaker than the GGM: hardness results for algebraic algorithms imply hardness results for generic algorithms, and generic reductions in the AGM imply generic reductions in the GGM.

As the two models are currently formalized, that view is not correct in general: hardness in the AGM may not imply hardness in the GGM, and a generic reduction in the AGM may not imply a similar reduction in the GGM ([[no-agm-to-ggm-kz22|No reduction from AGM to GGM]]) — [[KZ22 - An Analysis of the Algebraic Group Model|KZ22]]. Under an alternative interpretation, in frameworks for generic and algebraic models of arbitrary algebraic structures, FKL18's claim holds, and most algebraic analyses in the literature fall within those frameworks — [[JM24 - Generic and Algebraic Computation Models When AGM Proofs Transfer to the GGM|JM24]].

## Comparison with the Standard Model

In the standard model, an adversary may derive the group elements it outputs in any way. The AGM adds one constraint, a representation for every group element output, which enables tight reductions not known in the standard model. Unlike the GGM, the AGM allows algorithms that exploit the encoding of group elements; it rules out only adversaries that output group elements whose representation over their inputs they do not know, such as elements sampled obliviously or by hashing into the group — [[FKL18 - The Algebraic Group Model and its Applications|FKL18]].

<!-- BEGIN GENERATED participates-in 720e716cec7f -->

## Participates in

**Builds on Algebraic Group Model**

- [[agm-to-kea|AGM ⇒ KEA]]

**Barriers**

- [[no-agm-to-ggm-kz22|No reduction from AGM to GGM]]

**Proved in the Algebraic Group Model**

- [[bilinear-pairing-and-q-dlog-to-universal-snark-gwc19|Bilinear pairing + q-DLOG ⇒ Universal SNARK (PLONK)]]
- [[bilinear-pairing-and-q-dlog-to-zk-snark-fkl18|Bilinear pairing + q-DLOG ⇒ zk-SNARK (Groth16 in the AGM)]]
- [[dlog-to-bls-signatures-fkl18|DLOG ⇒ BLS signatures]]
- [[dlog-to-cdh-fkl18|DLOG ⇒ CDH]]
- [[omdl-and-ros-to-blind-schnorr-signature-fps20|OMDL + ROS ⇒ Blind Schnorr signatures]]
- [[prime-order-dlog-to-schnorr-signature-fps20|DLOG ⇒ Schnorr signatures (tight, AGM)]]

<!-- END GENERATED participates-in -->
