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
  interactive-succinct-argument: "#interactive-succinct-arguments"
  snarg-for-p: "#snargs-for-p"
  barg-for-np: "#batch-arguments-for-np"
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

A **Scalable Transparent ARgument of Knowledge** achieves succinctness without any trusted setup: the $\Setup$ algorithm is public-coin (the CRS is just a random oracle / hash function). Security is proven in the [[random-oracle-model|ROM]] — [[BCS16 - Interactive Oracle Proofs|BCS16]]; the same compiler is sound in the quantum ROM when the IOP is round-by-round sound — [[CMS19 - Succinct Arguments in the Quantum Random Oracle Model|CMS19]] — so STARKs are plausibly post-quantum. Proof size is $O(\log^2 T)$ for a computation of size $T$, larger than pairing-based SNARKs but still sublinear — [[BBHR18 - Scalable, transparent, and post-quantum secure computational integrity|BBHR18a]].

The core component of STARKs is the **FRI** (Fast Reed-Solomon IOP of Proximity) protocol, an interactive oracle proof of proximity to Reed-Solomon codes — [[BBHR18b - Fast Reed-Solomon Interactive Oracle Proofs of Proximity|BBHR18b]]. Combined with Merkle-tree commitments, FRI yields a transparent (list) polynomial commitment scheme — [[KPV22 - RedShift Transparent SNARKs from List Polynomial Commitments|KPV22]].

## Universal/updatable SNARKs

Systems like Plonk and Marlin use a single universal trusted setup for all circuits up to size $N$, rather than a per-circuit setup. Plonk uses PLONKish [[arithmetization]] and KZG [[polynomial-commitment|polynomial commitments]] ([[KZG10 - Constant-size commitments to polynomials and their applications|KZG10]]) — [[GWC19 - PLONK Permutations over Lagrange-bases for Oecumenical Noninteractive arguments of Knowledge|GWC19]].

## Recursive SNARKs

_Incrementally verifiable computation (IVC)_ for a step function $F$ and an initial state $s_0$ lets a prover holding only $(s_t, \pi_t)$ compute a proof $\pi_{t+1}$ for $s_{t+1} = F(s_t)$ in time $\poly(\secpar, |F|, |s_t|)$ independent of $t$, such that the verifier accepts honest proofs of $(t, s_t)$, proof size and verification time are $\poly(\secpar)$ independent of $t$, and for every polynomial $t$ no efficient prover makes the verifier accept $(t, s)$ with $s \ne F^{t}(s_0)$, except with negligible probability — [[Val08 - Incrementally Verifiable Computation or Proofs of Knowledge Imply Time-Space Efficiency|Val08]]. A _recursive SNARK_ proves that earlier proofs verify. Extraction cost grows polynomially with each level of nesting, so such composition is proved sound only to constant depth; a depth reduction then gives IVC for any fixed polynomial bound on the number of steps — [[BCCT13 - Recursive Composition and Bootstrapping for SNARKs and Proof-Carrying Data|BCCT13]].

## Interactive succinct arguments

An interactive argument system for $\classNP$ whose total communication is $\poly(\secpar, \log T)$ for statements whose $\classNP$ verification takes time $T$, with soundness against efficient provers and no common reference string — [[Kil92 - A Note on Efficient Zero-Knowledge Proofs and Arguments (Extended Abstract)|Kil92]].

## SNARGs for P

A publicly verifiable non-interactive argument in the CRS model for deterministic computations, with no knowledge extractor. For a polynomial $T = T(\secpar)$, a statement is a pair $(M, x)$ of a deterministic Turing machine and an input, true when $M$ accepts $x$ within $T$ steps. $\Setup(1^\secpar, T)$ outputs $\crs$; $\crs$ and proofs have size $\poly(\secpar, \log T)$, and $\Vrfy$ runs in time $(|M| + |x|) \cdot \poly(\secpar, \log T)$. Soundness is adaptive: for all efficient $\calA$, the probability that $\calA(\crs)$ outputs $(M, x, \pi)$ with $\Vrfy(\crs, (M, x), \pi) = 1$ although $M$ does not accept $x$ within $T$ steps is negligible. [[CJJ21 - SNARGs for P from LWE|CJJ21]] construct one from LWE with a common random string ([[polynomial-ratio-lwe-to-snarg-for-p-cjj21|LWE with polynomial ratio ⇒ SNARG for P]]). The bound on verification time is what makes the notion non-trivial: a verifier allowed $T$ steps runs $M$ itself and needs no proof — standard.

## Batch arguments for NP

A **batch argument (BARG)** for $\classNP$ is a non-interactive argument in the CRS model for statements $(C, x_1, \ldots, x_k)$, true when every $x_i$ has a witness $w_i$ with $C(x_i, w_i) = 1$, for a Boolean circuit $C$. A proof has size $\poly(\secpar, |C|, \log k)$ and $\Vrfy$ runs in polynomial time. Soundness is non-adaptive: for every false statement $(C, x_1, \ldots, x_k)$, some $x_i$ having no witness, fixed before $\crs$ is sampled, every efficient prover makes $\Vrfy$ accept with negligible probability — [[CJJ21 - SNARGs for P from LWE|CJJ21]]. Without the size bound the $k$ witnesses form a proof — standard. CJJ21 construct one from LWE ([[polynomial-ratio-lwe-to-barg-for-np-cjj21|LWE with polynomial ratio ⇒ BARG for NP]]).

# Other results

- [[hash-function-to-snark-bbhr18|CRHF ⇒ STARK]]
- The Fiat–Shamir transform removes interaction from a public-coin protocol but keeps its communication, so in the random oracle model it yields succinct arguments only from succinct protocols: Merkle-committed PCPs (CS proofs) — [[Mic00 - Computationally Sound Proofs|Mic00]]; public-coin IOPs with state-restoration soundness — [[BCS16 - Interactive Oracle Proofs|BCS16]]
- Many SNARKs (e.g. Plonk, Marlin) compile a polynomial IOP, obtained from an [[arithmetization]], with a [[polynomial-commitment|polynomial commitment scheme]] — [[CHM+20 - Marlin Preprocessing zkSNARKs with Universal and Updatable SRS|CHM+20]]
- [[bilinear-pairing-to-snark-gro16|Bilinear pairing ⇒ zk-SNARK]]: Groth16 is knowledge-sound in the generic bilinear group model — [[Gro16 - On the Size of Pairing-based Non-interactive Arguments|Gro16]]; in the algebraic group model its knowledge soundness reduces to a $q$-type discrete-logarithm assumption — [[FKL18 - The Algebraic Group Model and its Applications|FKL18]]
- [[no-falsifiable-assumption-to-snark-gro16|No fully-black-box reduction from Falsifiable assumption to SNARK]]

<!-- BEGIN GENERATED participates-in dfa0abda563c -->

## Participates in

**Builds on Succinct argument**

- [[snark-to-nizk|SNARK + OWF ⇒ NIZK argument]]
- [[snark-to-recursive-snarks|SNARK ⇒ Recursive SNARKs]]

**Produces Succinct argument**

- [[bilinear-pairing-to-snark-gro16|Bilinear pairing ⇒ zk-SNARK]] (via [[succinct-argument#zk-snark|zk-SNARK]])
- [[crhf-to-interactive-succinct-argument-kil92|CRHF ⇒ Succinct arguments for NP (Kilian)]] (via [[succinct-argument#interactive-succinct-arguments|Interactive succinct arguments]])
- [[hash-function-to-snark-bbhr18|CRHF ⇒ STARK]] (via [[succinct-argument#stark|STARK]])
- [[pcs-to-snark|Extractable PCS ⇒ SNARK]]
- [[polynomial-ratio-lwe-to-barg-for-np-cjj21|LWE with polynomial ratio ⇒ BARG for NP]] (via [[succinct-argument#batch-arguments-for-np|Batch arguments for NP]])
- [[polynomial-ratio-lwe-to-snarg-for-p-cjj21|LWE with polynomial ratio ⇒ SNARG for P]] (via [[succinct-argument#snargs-for-p|SNARGs for P]])
- [[rom-to-snark-mic00|ROM ⇒ SNARK (Micali's CS proofs)]]
- [[snark-to-recursive-snarks|SNARK ⇒ Recursive SNARKs]] (via [[succinct-argument#recursive-snarks|Recursive SNARKs]])

**Barriers**

- [[no-falsifiable-assumption-to-snark-gro16|No fully-black-box reduction from Falsifiable assumption to SNARK]]
- [[no-fiat-shamir-and-gkr-to-snark-krs25|No fixed-construction reduction from Fiat-Shamir + GKR to SNARK]]

<!-- END GENERATED participates-in -->
