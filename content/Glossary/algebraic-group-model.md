---
aliases:
  - AGM
  - Algebraic Group Model
title: Algebraic Group Model
---
# Algebraic Group Model

The *Algebraic Group Model (AGM)* [[FKL18 - The Algebraic Group Model and its Applications|FKL18]] is a model of computation that lies between the standard model and the [[generic-group-model|Generic Group Model (GGM)]]. In it, adversaries are restricted to being *algebraic*: they can perform arbitrary group computations, but must be able to account for every group element they produce by explaining it as a linear combination of previously seen elements.

## Definition

Let $(\GG, g, p) \gets \GrGen(1^\secpar)$. An adversary $\calA$ is **algebraic** if, for every group element $Z \in \GG$ that $\calA$ outputs, it simultaneously outputs a vector of exponents $(\alpha_1, \ldots, \alpha_k) \in \ZZ_p^k$ such that

$$
Z = \prod_{i=1}^{k} A_i^{\alpha_i},
$$

where $(A_1, \ldots, A_k)$ is the ordered list of all group elements $\calA$ has received as inputs or as outputs of prior computations up to that point. This vector is called a **representation** of $Z$.

Informally, an algebraic adversary must "explain" every group element it uses. It cannot treat group elements as black-box tokens: any element it outputs must be derivable via known exponent arithmetic from elements it has already seen.

## Key Results

The following results are due to [[FKL18 - The Algebraic Group Model and its Applications|FKL18]] for algebraic adversaries in cyclic groups:

- **CDH $\equiv_{\mathrm{AGM}}$ DLOG:** any algebraic CDH adversary can be converted into a DLOG adversary with the same advantage and essentially the same running time.
- **DDH $\leq_{\mathrm{AGM}}$ DLOG:** DDH reduces tightly to DLOG in the AGM.
- **BLS security:** unforgeability of [[boneh-lynn-shacham-signature|BLS]] signatures reduces tightly to DLOG in the AGM.
- **Groth's SNARK:** the knowledge-soundness of Groth's zero-knowledge SNARK holds in the AGM.

These reductions, combined with the $\Omega(\sqrt{p})$ GGM lower bound of [[Sho97 - Lower Bounds for Discrete Logarithms and Related Problems|Sho97]], yield tight concrete lower bounds for CDH and related problems against algebraic-and-generic adversaries.

## Comparison with the GGM

The relationship between the AGM and the [[generic-group-model|GGM]] has been the subject of significant study.

[[FKL18 - The Algebraic Group Model and its Applications|FKL18]] claimed that the AGM is *strictly weaker* than the GGM in the sense that hardness for algebraic adversaries implies hardness for generic adversaries. Under this view, every GGM-secure scheme is AGM-secure, and AGM lower bounds lift to the GGM.

[[KZ22 - An Analysis of the Algebraic Group Model|Katz and Zhang (KZ22)]] challenged this claim: they showed that hardness in the AGM does not in general imply hardness in the GGM, and that generic reductions in the AGM need not yield analogous reductions in the GGM. The precise conditions under which AGM proofs transfer to the GGM remain an active area of research.

## Comparison with the Standard Model

In the standard model, an adversary receives group elements and may compute arbitrary group operations, with no restriction on how it uses or derives elements. The AGM adds a single constraint — the algebraic accountability condition — that enables tight reductions which are not known in the standard model. In this sense, the AGM is a *conservative idealization*: it rules out adversaries that could exploit the representation of group elements in a way that a real-world adversary plausibly cannot.
