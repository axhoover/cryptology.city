---
type: primitive
status: draft
aliases:
  - SNARK
  - STARK
  - zk-SNARK
  - SNARKs
  - Succinct argument
  - Succinct non-interactive argument
title: Succinct argument
id: snark
variants:
  zk-snark: "#zk-snark"
  incremental-verifiable-computation: "#recursive-snarks"
  transparent-succinct-argument: "#stark"
---

# Succinct argument

A **succinct non-interactive argument of knowledge** (SNARK) is a proof system in which a prover can convince a verifier that a statement $x \in L$ is true using a single short message, where the proof is short relative to the witness size and verification is fast. The "knowledge" variant (SNARK) additionally requires that the prover must "know" a witness — formalized via an extractor. A **STARK** (Scalable Transparent ARgument of Knowledge) is a SNARK variant that requires no trusted setup, is secure in the random oracle model, and is plausibly post-quantum.

## Syntax

A succinct argument system for a relation $\calR$ is a tuple of efficient algorithms $(\Setup, \Prove, \Vrfy)$:

- $\Setup(1^\secpar, C) \to \crs,$ takes a security parameter and a circuit $C$ (or a bound on circuit size for universal schemes) and produces a common reference string $\crs$. For transparent systems, $\Setup$ is public-coin (no trapdoor).
- $\Prove(\crs, x, w) \to \pi,$ takes the CRS, instance $x$, and witness $w$ with $(x, w) \in \calR$, and produces a proof $\pi$.
- $\Vrfy(\crs, x, \pi) \to \bits,$ verifies the proof.

## Properties

### Completeness

For all $(x, w) \in \calR$ and all $\crs \gets \Setup(1^\secpar, C)$:
$$\Pr[\Vrfy(\crs, x, \Prove(\crs, x, w)) = 1] = 1.$$

### Knowledge soundness

For all efficient $\calA$ there exists a polynomial-time extractor $\calE_\calA$ such that: if $\calA(\crs; r)$, run on coins $r$, outputs $(x, \pi)$ with $\Vrfy(\crs, x, \pi) = 1$, then $\calE_\calA(\crs, r)$ outputs $w$ with $(x, w) \in \calR$, except with negligible probability — [[Gro16 - On the Size of Pairing-based Non-interactive Arguments|Gro16]]. Knowledge soundness is strictly stronger than plain soundness (which only requires the prover cannot convince the verifier of a false statement).

### Succinctness

The proof size $|\pi|$ and verifier runtime are $\poly(\secpar, |x|) \cdot \polylog(|w|, |C|)$ — sublinear in the witness and circuit size.

### Zero-knowledge (optional)

A **zk-SNARK** additionally satisfies zero-knowledge: there exists a simulator that produces proofs indistinguishable from real proofs without knowing the witness.

## Security game

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{ks}}_{\calA,\calE_\calA}(\secpar)$}
\begin{algorithmic}
\State $\crs \gets \Setup(1^\secpar, C)$
\State $r \getsr \bits^{*}$; $(x, \pi) \gets \calA(\crs; r)$
\State $w \gets \calE_{\calA}(\crs, r)$
\Comment{$\calE_\calA$ gets $\calA$'s input and coins}
\If{$\Vrfy(\crs, x, \pi) = 1$ and $(x, w) \notin \calR$}
\Return $1$
\Comment{$\calA$ wins: valid proof but extractor failed}
\EndIf
\Return $0$
\end{algorithmic}
\end{algorithm}
```

A succinct argument is **knowledge-sound** if for all efficient $\calA$ there exists a polynomial-time extractor $\calE_\calA$ such that $\Pr[\Game^{\mathrm{ks}}_{\calA, \calE_\calA}(\secpar) = 1]$ is negligible.

# Variations

## zk-SNARK

A SNARK with zero-knowledge. The verifier learns nothing about the witness beyond the validity of the statement. Groth16 is the canonical pairing-based zk-SNARK with constant proof size (3 group elements) and millisecond verification — [[Gro16 - On the Size of Pairing-based Non-interactive Arguments|Gro16]].

## STARK

A **Scalable Transparent ARgument of Knowledge** achieves succinctness without any trusted setup: the $\Setup$ algorithm is public-coin (the CRS is just a random oracle / hash function). Security is proven in the [[random-oracle-model|ROM]] — [[BCS16 - Interactive Oracle Proofs|BCS16]]; the same compiler is sound in the quantum ROM when the IOP is round-by-round sound — [[CMS19 - Succinct Arguments in the Quantum Random Oracle Model|CMS19]] — so STARKs are plausibly post-quantum. Proof size is $O(\log^2 T)$ for a computation of size $T$, larger than pairing-based SNARKs but still sublinear — [[BBHR18 - Scalable, transparent, and post-quantum secure computational integrity|BBHR18]].

The core component of STARKs is the **FRI** (Fast Reed-Solomon IOP of Proximity) protocol, an interactive oracle proof of proximity to Reed-Solomon codes (Ben-Sasson, Bentov, Horesh, Riabzev, ICALP 2018). Combined with Merkle-tree commitments, FRI yields a transparent (list) polynomial commitment scheme — [[KPV22 - RedShift Transparent SNARKs from List Polynomial Commitments|KPV22]].

## Universal/updatable SNARKs

Systems like Plonk and Marlin use a single universal trusted setup for all circuits up to size $N$, rather than a per-circuit setup. Plonk uses PLONKish [[arithmetization]] and KZG [[polynomial-commitment|polynomial commitments]] ([[KZG10 - Constant-size commitments to polynomials and their applications|KZG10]]) — [[GWC19 - PLONK Permutations over Lagrange-bases for Oecumenical Noninteractive arguments of Knowledge|GWC19]].

## Recursive SNARKs

A SNARK that can verify its own proofs, enabling incremental verifiable computation (IVC) and proof aggregation. Used in zkRollups and zkVMs.

# Other results

- [[hash-function-to-snark-bbhr18|CRHF ⇒ STARK]]
- The Fiat–Shamir transform removes interaction from a public-coin protocol but keeps its communication, so in the random oracle model it yields succinct arguments only from succinct protocols: Merkle-committed PCPs (CS proofs) — [[Mic00 - Computationally Sound Proofs|Mic00]]; public-coin IOPs with state-restoration soundness — [[BCS16 - Interactive Oracle Proofs|BCS16]]
- Many SNARKs (e.g. Plonk, Marlin) compile a polynomial IOP, obtained from an [[arithmetization]], with a [[polynomial-commitment|polynomial commitment scheme]] — [[CHM+20 - Marlin Preprocessing zkSNARKs with Universal and Updatable SRS|CHM+20]]
- [[bilinear-pairing-to-snark-gro16|Bilinear pairing ⇒ zk-SNARK]]: Groth16 is knowledge-sound in the generic bilinear group model — [[Gro16 - On the Size of Pairing-based Non-interactive Arguments|Gro16]]; in the algebraic group model its knowledge soundness reduces to a $q$-type discrete-logarithm assumption — [[FKL18 - The Algebraic Group Model and its Applications|FKL18]]
- [[no-falsifiable-assumption-to-snark-gro16|No fully-black-box reduction from Falsifiable assumption to SNARK]]

<!-- BEGIN GENERATED participates-in 4303a6070631 -->

## Participates in

**Builds on Succinct argument**

- [[snark-to-nizk|SNARK + OWF ⇒ NIZK]]
- [[snark-to-recursive-snarks|SNARK ⇒ Recursive SNARKs]]

**Produces Succinct argument**

- [[bilinear-pairing-to-snark-gro16|Bilinear pairing ⇒ zk-SNARK]] (via [[succinct-argument#zk-snark|zk-snark]])
- [[hash-function-to-snark-bbhr18|CRHF ⇒ STARK]] (via [[succinct-argument#stark|transparent-succinct-argument]])
- [[pcs-to-snark|Extractable PCS ⇒ SNARK]]
- [[snark-to-recursive-snarks|SNARK ⇒ Recursive SNARKs]] (via [[succinct-argument#recursive-snarks|incremental-verifiable-computation]])

**Barriers**

- [[no-falsifiable-assumption-to-snark-gro16|No fully-black-box reduction from Falsifiable assumption to SNARK]]
- [[no-fiat-shamir-and-gkr-to-snark-krs25|No fixed-construction reduction from Fiat-Shamir + GKR to SNARK]]

<!-- END GENERATED participates-in -->
