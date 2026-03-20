---
aliases:
  - GGM
  - Generic Group Model
title: Generic Group Model
---
# Generic Group Model

The *Generic Group Model (GGM)* is a model for analyzing the security of group-based cryptographic assumptions. It restricts adversaries to those that cannot exploit any special properties of how group elements are represented, interacting with the group only through an oracle. The model was independently proposed by Shoup [[Sho97 - Lower Bounds for Discrete Logarithms and Related Problems|Sho97]] and Maurer [[Mau05 - Abstract Models of Computation in Cryptography|Mau05]]; the two formulations differ in important ways.

## Shoup's Formulation

Let $(\GG, g, p) \gets \GrGen(1^\secpar)$ be a cyclic group of prime order $p$. A **handle function** is a random injection $\sigma: \GG \to \{0,1\}^n$, which assigns each group element a unique opaque bit-string called a *handle*. The adversary is only ever given handles — never actual group elements — and must compute via oracle queries:

- **Group operation:** $\calO_{\mathsf{op}}(\sigma(X), \sigma(Y)) \to \sigma(X \cdot Y)$
- **Inversion:** $\calO_{\mathsf{inv}}(\sigma(X)) \to \sigma(X^{-1})$

Equality of group elements is implicit: since $\sigma$ is injective, two handles are equal iff the underlying elements are. An algorithm is **generic** (in Shoup's sense) if it succeeds at a computational task for every choice of injection $\sigma$.

The key result of [[Sho97 - Lower Bounds for Discrete Logarithms and Related Problems|Shoup97]] is that any generic algorithm solving [[discrete-logarithm|DLOG]], [[computational-diffie-hellman|CDH]], or [[decisional-diffie-hellman|DDH]] in a group of prime order $p$ must issue $\Omega(\sqrt{p})$ oracle queries. Combined with the Baby-step Giant-step algorithm, this is tight.

## Maurer's Formulation

In [[Mau05 - Abstract Models of Computation in Cryptography|Maurer's]] formulation, genericity is captured algebraically rather than via random encodings. A group of order $p$ is presented to the adversary via a surjective group homomorphism $\phi: \ZZ_p^n \to \GG$, where $\ZZ_p^n$ is the "label space." The adversary sees only labels (elements of $\ZZ_p^n$), and queries a group operation oracle that computes $\phi(\mathbf{u}) \cdot \phi(\mathbf{v}) = \phi(\mathbf{u} + \mathbf{v})$. An algorithm is **generic** if it succeeds for every such homomorphism $\phi$.

This captures a different notion of independence from the group representation, and connects more naturally to the algebraic structure of $\ZZ_p$.

## Comparing the Two Formulations

Jager and Schwenk [[JS08 - On the Equivalence of Generic Group Models|JS08]] argued that Shoup's and Maurer's formulations are equivalent for standard cyclic groups. However, Maurer, Portmann, and Zhu [[MPZ20 - Unifying Generic Group Models|MPZ20]] showed this is not generally true. They identify a key source of divergence: in Shoup's model, the adversary can test equality of handles (implicitly, across *all* known elements at once), whereas Maurer's label-based approach encodes equality differently. MPZ20 establish a precise hierarchy of GGM variants — parameterized by the set of available queries — and show that the two original models occupy different positions in this hierarchy.

## The Structured GGM

Corrigan-Gibbs, Henzinger, and Wu [[CHW26 - The Structured Generic-Group Model|CHW26]] extend Shoup's model to capture algorithms that exploit non-generic structure in a controlled way. In the **structured GGM**, the adversary may exploit special structure for at most a $\delta$ fraction of group elements while remaining fully generic on the rest. The main result is that any DLOG algorithm in a group of prime order $p$ that exploits structure on at most a $\delta$ fraction of elements requires time

$$
\Omega\!\left(\min\!\left(\sqrt{p},\; \frac{1}{\delta}\right)\right).
$$

This yields tight subexponential lower bounds applicable to index-calculus algorithms, bridging the gap between fully generic lower bounds and structured algorithm analyses.

## Comparison with the AGM

The [[algebraic-group-model|Algebraic Group Model (AGM)]] is a strictly *weaker* idealization: every generic algorithm (in Shoup's or Maurer's sense) satisfies the AGM's algebraic accountability condition, but not conversely. Security proven only in the AGM does not automatically imply security in the GGM.
