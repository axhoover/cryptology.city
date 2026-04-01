---
aliases:
  - SNARK
  - STARK
  - zk-SNARK
  - SNARKs
  - Succinct argument
  - Succinct non-interactive argument
title: Succinct argument
---

# Succinct argument

A **succinct non-interactive argument of knowledge** (SNARK) is a proof system in which a prover can convince a verifier that a statement $x \in L$ is true using a single short message, where the proof is short relative to the witness size and verification is fast. The "knowledge" variant (SNARK) additionally requires that the prover must "know" a witness — formalized via an extractor. A **STARK** (Scalable Transparent ARgument of Knowledge) is a SNARK variant that requires no trusted setup and relies only on collision-resistant hash functions, making it post-quantum secure.

## Syntax

A succinct argument system for a relation $\mathcal{R}$ is a tuple of efficient algorithms $(\Setup, \Prove, \Vrfy)$:

- $\Setup(1^\secpar, C) \to \mathsf{crs},$ takes a security parameter and a circuit $C$ (or a bound on circuit size for universal schemes) and produces a common reference string $\mathsf{crs}$. For transparent systems, $\Setup$ is public-coin (no trapdoor).
- $\Prove(\mathsf{crs}, x, w) \to \pi,$ takes the CRS, instance $x$, and witness $w$ with $(x, w) \in \mathcal{R}$, and produces a proof $\pi$.
- $\Vrfy(\mathsf{crs}, x, \pi) \to \{0, 1\},$ verifies the proof.

## Properties

### Completeness

For all $(x, w) \in \mathcal{R}$ and all $(\mathsf{crs}) \gets \Setup(1^\secpar, C)$:
$$\Pr[\Vrfy(\mathsf{crs}, x, \Prove(\mathsf{crs}, x, w)) = 1] = 1.$$

### Knowledge soundness

There exists a polynomial-time extractor $\calE$ such that for all efficient $\calA$: if $\calA(\mathsf{crs})$ outputs $(x, \pi)$ with $\Vrfy(\mathsf{crs}, x, \pi) = 1$, then $\calE^{\calA}(\mathsf{crs})$ outputs $w$ with $(x, w) \in \mathcal{R}$, except with negligible probability. Knowledge soundness is strictly stronger than plain soundness (which only requires the prover cannot convince the verifier of a false statement).

### Succinctness

The proof size $|\pi|$ and verifier runtime are $\poly(\secpar, |x|) \cdot \mathrm{polylog}(|w|, |C|)$ — sublinear in the witness and circuit size.

### Zero-knowledge (optional)

A **zk-SNARK** additionally satisfies zero-knowledge: there exists a simulator that produces proofs indistinguishable from real proofs without knowing the witness.

## Security game

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{ks}}_{\calA,\calE}(\secpar)$}
\begin{algorithmic}
\State $\mathsf{crs} \gets \Setup(1^\secpar)$
\State $(x, \pi) \gets \calA(\mathsf{crs})$
\State $w \gets \calE^{\calA}(\mathsf{crs})$
\Comment{Extractor runs $\calA$ as a subroutine}
\If{$\Vrfy(\mathsf{crs}, x, \pi) = 1$ and $(x, w) \notin \calR$}
\Return $1$
\Comment{$\calA$ wins: valid proof but extractor failed}
\EndIf
\Return $0$
\end{algorithmic}
\end{algorithm}
```

A succinct argument is **knowledge-sound** if for all efficient $\calA$ there exists a polynomial-time extractor $\calE$ such that $\Pr[\Game^{\mathrm{ks}}_{\calA, \calE}(\secpar) = 1]$ is negligible.

# Variations

## zk-SNARK

A SNARK with zero-knowledge. The verifier learns nothing about the witness beyond the validity of the statement. Groth16 is the canonical pairing-based zk-SNARK with constant proof size (3 group elements) and millisecond verification — [[Gro16 - On the Size of Pairing-based Non-interactive Arguments|Gro16]].

## STARK

A **Scalable Transparent ARgument of Knowledge** achieves succinctness without any trusted setup: the $\Setup$ algorithm is public-coin (the CRS is just a random oracle / hash function). Security relies only on collision-resistant hash functions, so STARKs are post-quantum secure. Proof size is $O(\log^2 T)$ for a computation of size $T$, larger than pairing-based SNARKs but still sublinear — [[BBHR18 - Scalable, transparent, and post-quantum secure computational integrity|BBHR18]].

The core component of STARKs is the **FRI** (Fast Reed-Solomon IOP of Proximity) protocol, which is a transparent polynomial commitment scheme based on proximity testing to Reed-Solomon codes.

## Universal/updatable SNARKs

Systems like Plonk and Marlin use a single universal trusted setup for all circuits up to size $N$, rather than a per-circuit setup. Plonk uses PLONKish [[arithmetization]] and KZG [[polynomial-commitment|polynomial commitments]] — [[KZG10 - Constant-size commitments to polynomials and their applications|KZG10]].

## Recursive SNARKs

A SNARK that can verify its own proofs, enabling incremental verifiable computation (IVC) and proof aggregation. Used in zkRollups and zkVMs.

# Other results

- Groth16 achieves constant proof size (3 $\GG_1$ elements + 1 $\GG_2$ element) and is the most proof-size-efficient pairing-based zk-SNARK; relies on the [[knowledge-of-exponent|knowledge-of-exponent assumption]] — [[Gro16 - On the Size of Pairing-based Non-interactive Arguments|Gro16]]
- STARKs are post-quantum secure; security reduces to the collision resistance of the hash function used — [[BBHR18 - Scalable, transparent, and post-quantum secure computational integrity|BBHR18]]
- Any succinct non-interactive argument implies collision-resistant hash functions — standard
- [[non-interactive-zero-knowledge|NIZK]] proofs can be made succinct using [[polynomial-commitment|polynomial commitments]] and [[arithmetization]] — standard
- The Fiat-Shamir transform converts interactive proofs to non-interactive SNARKs in the random oracle model — [[FS86 - How to Prove Yourself|FS86]]
- SNARKs are constructed via two steps: (1) [[arithmetization]] — convert the computation to polynomial constraints; (2) a [[polynomial-commitment|polynomial commitment scheme]] — commit and open evaluations — standard
- Knowledge soundness requires non-falsifiable assumptions (like KEA) in the standard model; in the algebraic group model (AGM) or generic group model, it can be based on falsifiable assumptions — [[Gro16 - On the Size of Pairing-based Non-interactive Arguments|Gro16]]
