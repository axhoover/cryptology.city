---
aliases:
  - Fiat-Shamir
  - Fiat-Shamir Heuristic
title: Fiat-Shamir Heuristic
---

# Fiat-Shamir Heuristic

The _Fiat-Shamir heuristic_ (or _Fiat-Shamir transform_) is a technique for compiling a public-coin interactive protocol into a non-interactive one by replacing the verifier's random challenges with the output of a hash function applied to the transcript so far. The transform is proven secure when the hash function is modeled as a [[random-oracle-model|random oracle]], but is known to fail in important settings when instantiated with concrete hash functions.

## Description

Given a $(2k+1)$-message public-coin interactive protocol $\Pi = (P, V)$ with messages $a_1, c_1, \ldots, a_k, c_k, a_{k+1}$, the Fiat-Shamir transform produces a non-interactive protocol $\Pi_\mathsf{FS}$ as follows: the prover computes each verifier challenge itself as

$$c_i := H(a_1, c_1, \ldots, a_{i-1}, c_{i-1}, a_i),$$

where $H$ is a hash function modeled as a random oracle. The resulting proof $(a_1, c_1, \ldots, a_{k+1})$ can be verified by any party who recomputes the same hash challenges.

The transform is particularly useful for constructing [[digital-signature|digital signatures]] from identification schemes (the original application of Fiat and Shamir), and for building non-interactive zero-knowledge proofs and succinct arguments.

## Security in the ROM

In the [[random-oracle-model|random oracle model]], the Fiat-Shamir transform preserves soundness and zero-knowledge (and simulation-extractability) for a broad class of protocols. This is the primary justification for its widespread use.

## Known Failures

### Standard Model (GK03)

Goldwasser and Kalai showed that the Fiat-Shamir transform is uninstantiable in the standard model [[GK03 - On the (In)security of the Fiat-Shamir Paradigm|GK03]]. They constructed a 3-round public-coin identification scheme that is secure in the ROM, yet whose Fiat-Shamir transform is existentially forgeable under _every_ concrete hash function. This demonstrates that the random oracle cannot always be replaced by an actual hash function, even a cryptographically strong one.

$$\Adv^{\mathrm{uf}}_{\Pi_H, \calA}(\secpar) \ge 1 - \negl(\secpar) \quad \text{for all } H.$$

### Natural Protocols (KRS25)

Prior counterexamples to Fiat-Shamir were contrived — protocols specifically engineered to fail. Khovratovich, Rothblum, and Soukhanov gave the first counterexample for a _standard, widely-studied_ protocol [[KRS25 - How to Prove False Statements Practical Attacks on Fiat-Shamir|KRS25]]. They showed that the Fiat-Shamir transform applied to the GKR succinct interactive argument (from [[GKR15 - Delegating Computation Interactive Proofs for Muggles|GKR15]]) allows an efficient prover to prove _false_ statements for explicit families of circuits. This raises serious questions about the security of deployed non-interactive succinct arguments based on Fiat-Shamir.
