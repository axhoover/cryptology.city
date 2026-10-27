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
  universal-snark: "#universalupdatable-snarks"
  fully-succinct-snark: "#fully-succinct-snarks"
  designated-verifier-snarg: "#designated-verifier-snargs"
  dv-delegation-for-p: "#designated-verifier-delegation-for-p"
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

Two-move linear interactive proofs cannot have a linear decision procedure, so SNARGs whose prover and verifier use only generic asymmetric bilinear-group operations cannot consist of a single group element; whether two elements suffice, which would make the three-element construction optimal, is open — [[Gro16 - On the Size of Pairing-based Non-interactive Arguments|Gro16]]. The impossibility of a linear decision procedure answers an open question of [[BCIOP13 - Succinct Non-interactive Arguments via Linear Interactive Proofs|BCIOP13]] — [[Gro16 - On the Size of Pairing-based Non-interactive Arguments|Gro16]].

Pinocchio is a publicly verifiable preprocessing verifiable-computation scheme for arithmetic circuits built on the quadratic arithmetic programs of [[GGPR13 - Quadratic Span Programs and Succinct NIZKs without PCPs|GGPR13]], sound under the $d$-PKE, $q$-PDH and $2q$-SDH assumptions with $q = 4d + 4$ for QAP degree $d$. A proof is 288 bytes whatever the computation and the size of its input and output, verification takes a fixed 10 ms plus 0.4–15 μs per input or output element in the authors' implementation, and the scheme extends to zero-knowledge proofs at negligible extra cost — [[PHGR13 - Pinocchio Nearly Practical Verifiable Computation|PHGR13]]. GGPR13's NIZK argument for Circuit-SAT, from quadratic span programs under $q$-PDH and [[knowledge-of-exponent#q-power-kea|q-PKE]], has 7 group elements with CRS size and prover computation quasi-linear in the circuit size; [[Gro10 - Short Pairing-Based Non-interactive Zero-Knowledge Arguments|Gro10]]'s had 42 group elements with CRS and prover computation quadratic in it, and Lipmaa reduced the CRS to quasi-linear size with prover computation still quadratic — [[GGPR13 - Quadratic Span Programs and Succinct NIZKs without PCPs|GGPR13]]. A modified Pinocchio protocol implemented in libsnark is unsound: the lemma justifying the modification is false, and a cheating prover makes the verifier accept false statements — [[Parno15 - A Note on the Unsoundness of vnTinyRAM's SNARK|Parno15]].

## STARK

A **Scalable Transparent ARgument of Knowledge** achieves succinctness without any trusted setup: the $\Setup$ algorithm is public-coin (the CRS is just a random oracle / hash function). Security is proven in the [[random-oracle-model|ROM]] by the [[succinct-state-restoration-iop-to-transparent-succinct-argument-bcs16|BCS transform]] — [[BCS16 - Interactive Oracle Proofs|BCS16]]; the same compiler is sound in the quantum ROM when the IOP is round-by-round sound — [[CMS19 - Succinct Arguments in the Quantum Random Oracle Model|CMS19]] — so STARKs are plausibly post-quantum. Proof size is $O(\log^2 T)$ for a computation of size $T$, larger than pairing-based SNARKs but still sublinear — [[BBHR18 - Scalable, transparent, and post-quantum secure computational integrity|BBHR18a]].

The core component of STARKs is the **FRI** (Fast Reed-Solomon IOP of Proximity) protocol, an interactive oracle proof of proximity to Reed-Solomon codes — [[BBHR18b - Fast Reed-Solomon Interactive Oracle Proofs of Proximity|BBHR18b]]. Combined with Merkle-tree commitments, FRI yields a transparent (list) polynomial commitment scheme — [[KPV22 - RedShift Transparent SNARKs from List Polynomial Commitments|KPV22]].

Other transparent arguments trade proof size against verification time. Ligero is a zero-knowledge argument for $\classNP$ whose communication is proportional to the square root of the verification circuit size, from any collision-resistant hash function, and non-interactive in the ROM with no trusted setup or public-key cryptography; for a SHA-256 preimage at soundness error $2^{-40}$ it communicates about 44 KB, with 140 ms proving and 62 ms verification in the CCS 2017 version — [[AHIV17 - Ligero Lightweight Sublinear Arguments Without a Trusted Setup|AHIV17]]. Aurora is a transparent zero-knowledge SNARG for R1CS, built on an IOP for a univariate sumcheck, whose proofs for $n$ constraints have size $O(\log^2 n)$, produced with $O(n \log n)$ field operations and verified with $O(n)$ — [[BCR+19 - Aurora Transparent Succinct Arguments for R1CS|BCR+19]]. Spartan gives transparent zkSNARKs for R1CS whose verification is sublinear after a one-time public preprocessing of the statement (computation commitments), with proof size and verifier cost from $O(\log^2 n)$ to $O(\sqrt{n})$ depending on the polynomial commitment used — [[Set20 - Spartan Efficient and General-Purpose zkSNARKs Without Trusted Setup|Set20]].

## Universal/updatable SNARKs

A **universal SNARK** has a setup $\Setup(1^\secpar, N)$ that depends only on a bound $N$ on circuit size and outputs a structured reference string $\mathsf{srs}$, together with a deterministic public algorithm that derives from $\mathsf{srs}$ and any circuit $C$ of size at most $N$ the proving and verification keys of $C$. For every circuit $C$ of size at most $N$, fixed before $\mathsf{srs}$ is sampled, the scheme with $C$'s derived keys is complete, knowledge-sound and succinct, with verification time $\poly(\secpar, |x|, \log N)$. Deriving the keys of $C$ from a fresh $\mathsf{srs}$ for $N = |C|$ gives a SNARK in the sense above ([[universal-snark-to-snark|Universal SNARK ⇒ SNARK]]) — folklore.

Systems like Plonk and Marlin use a single universal trusted setup for all circuits up to size $N$, rather than a per-circuit setup. Plonk uses PLONKish [[arithmetization]] and KZG [[polynomial-commitment|polynomial commitments]] ([[KZG10 - Constant-size commitments to polynomials and their applications|KZG10]]) — [[GWC19 - PLONK Permutations over Lagrange-bases for Oecumenical Noninteractive arguments of Knowledge|GWC19]]; in the [[algebraic-group-model|algebraic group model]], with challenges from a random oracle, it is knowledge-sound under a $q$-type discrete-logarithm assumption ([[bilinear-pairing-and-q-dlog-to-universal-snark-gwc19|Bilinear pairing + q-DLOG ⇒ Universal SNARK]]) — [[GWC19 - PLONK Permutations over Lagrange-bases for Oecumenical Noninteractive arguments of Knowledge|GWC19]].

An SRS is **updatable** if any party can update it, with security as long as at least one of the parties updating it is honest. A zk-SNARK whose SRS contains private secret-dependent polynomials cannot be updatable; GKM+18 build one whose SRS consists only of secret-dependent monomials, universal, updatable and of quadratic size, which can be specialized into linear-size relation-dependent SRSs with linear-time proving — [[GKM+18 - Updatable and Universal Common Reference Strings with Applications to zk-SNARKs|GKM+18]]. Sonic is a zk-SNARK with a universal, continually updatable SRS of linear size and constant-size proofs — [[MBKM19 - Sonic Zero-Knowledge SNARKs from Linear-Size Universal and Updatable Structured Reference Strings|MBKM19]].

## Recursive SNARKs

_Incrementally verifiable computation (IVC)_ for a step function $F$ and an initial state $s_0$ lets a prover holding only $(s_t, \pi_t)$ compute a proof $\pi_{t+1}$ for $s_{t+1} = F(s_t)$ in time $\poly(\secpar, |F|, |s_t|)$ independent of $t$, such that the verifier accepts honest proofs of $(t, s_t)$, proof size and verification time are $\poly(\secpar)$ independent of $t$, and for every polynomial $t$ no efficient prover makes the verifier accept $(t, s)$ with $s \ne F^{t}(s_0)$, except with negligible probability — [[Val08 - Incrementally Verifiable Computation or Proofs of Knowledge Imply Time-Space Efficiency|Val08]]. A _recursive SNARK_ proves that earlier proofs verify. Extraction cost grows polynomially with each level of nesting, so such composition is proved sound only to constant depth; a depth reduction then gives IVC for any fixed polynomial bound on the number of steps — [[BCCT13 - Recursive Composition and Bootstrapping for SNARKs and Proof-Carrying Data|BCCT13]].

## Fully succinct SNARKs

A **fully succinct SNARK** is a publicly verifiable SNARK for the universal relation $\calR_U = \{((M, x, t), w) : M \text{ accepts } (x, w) \text{ within } t \text{ steps}\}$ whose $\Setup(1^\secpar)$ runs in time $\poly(\secpar)$ and outputs a $\crs$ independent of the computation. For every polynomial $t$, proofs have size $\poly(\secpar)$, verification takes time $\poly(\secpar, |M|, |x|, \log t)$, and proving takes time $\poly(\secpar, |M|, |x|, t)$ — [[BCCT13 - Recursive Composition and Bootstrapping for SNARKs and Proof-Carrying Data|BCCT13]]. A preprocessing SNARK, as in the syntax above, may instead have a $\crs$ and a setup time that grow with the circuit; BCCT13 bootstrap such SNARKs into fully succinct ones ([[snark-and-crhf-to-fully-succinct-snark-bcct13|SNARK + CRHF ⇒ Fully succinct SNARK]]) — [[BCCT13 - Recursive Composition and Bootstrapping for SNARKs and Proof-Carrying Data|BCCT13]].

## Interactive succinct arguments

An interactive argument system for $\classNP$ whose prover–verifier communication is $\poly(\secpar, \log T)$ for statements whose $\classNP$ verification takes time $T$, with soundness against efficient provers, and either no setup or public parameters of length $\poly(\secpar, T)$ sampled by an honest setup (a common random string, or uniformly random group elements whose discrete-logarithm relations no party knows), not counted in the communication. Kilian's protocol needs no setup — [[Kil92 - A Note on Efficient Zero-Knowledge Proofs and Arguments (Extended Abstract)|Kil92]]; the argument of Bootle et al. uses uniformly random group elements as public parameters ([[prime-order-dlog-to-interactive-succinct-argument-bccgp16|DLOG ⇒ Succinct arguments for NP]]) — [[BCCGP16 - Efficient Zero-Knowledge Arguments for Arithmetic Circuits in the Discrete Log Setting|BCCGP16]].

## SNARGs for P

A publicly verifiable non-interactive argument in the CRS model for deterministic computations, with no knowledge extractor. For a polynomial $T = T(\secpar)$, a statement is a pair $(M, x)$ of a deterministic Turing machine and an input, true when $M$ accepts $x$ within $T$ steps. $\Setup(1^\secpar, T)$ outputs $\crs$; $\crs$ and proofs have size $\poly(\secpar, \log T)$, and $\Vrfy$ runs in time $(|M| + |x|) \cdot \poly(\secpar, \log T)$. Soundness is adaptive: for all efficient $\calA$, the probability that $\calA(\crs)$ outputs $(M, x, \pi)$ with $\Vrfy(\crs, (M, x), \pi) = 1$ although $M$ does not accept $x$ within $T$ steps is negligible. [[CJJ21 - SNARGs for P from LWE|CJJ21]] construct one from LWE with a common random string ([[polynomial-ratio-lwe-to-snarg-for-p-cjj21|LWE with polynomial ratio ⇒ SNARG for P]]). The bound on verification time is what makes the notion non-trivial: a verifier allowed $T$ steps runs $M$ itself and needs no proof — standard.

## Designated-verifier delegation for P

For a polynomial $T = T(\secpar)$, a **designated-verifier delegation scheme for P** is an argument $(\Gen, \Prove, \Vrfy)$ for statements $(M, x)$, true when the deterministic machine $M$ accepts $x$ within $T$ steps. $\Gen(1^\secpar, T) \to (\pk, \sk)$ runs in time $\poly(\secpar, \log T)$, so $\pk$ is independent of the statement; $\Prove(\pk, M, x) \to \pi$ runs in time $\poly(\secpar, T)$; $\Vrfy(\sk, M, x, \pi) \to \bits$ runs in time $(|M| + |x|) \cdot \poly(\secpar, \log T)$; $\pk$ and $\pi$ have size $\poly(\secpar, \log T)$. Soundness is non-adaptive: for every false statement fixed before $\pk$ is sampled, every efficient prover given $\pk$ makes $\Vrfy$ accept with negligible probability. The bound on verification time is what makes the notion non-trivial — standard. From PIR with polylogarithmic communication, a scheme exists whose public key is reusable and whose soundness is adaptive ([[polylog-cpir-to-dv-delegation-for-p-bhk17|PIR with polylogarithmic communication ⇒ Designated-verifier delegation for P]]) — [[BHK17 - Non-interactive delegation and batch NP verification from standard computational assumptions|BHK17]]; from sub-exponentially secure PIR, 1-round delegation exists for every language computable in time $t$, with prover time $\poly(t)$ and verifier time $n \cdot \polylog(t)$ — [[KRR14 - How to delegate computations the power of no-signaling proofs|KRR14]].

## Designated-verifier SNARGs

A **designated-verifier SNARG** is a preprocessing argument $(\Setup, \Prove, \Vrfy)$ for circuit satisfiability in which $\Setup(1^\secpar, C)$ outputs a reference string $\crs$ and a secret verification state $\tau$, $\Prove(\crs, x, w) \to \pi$, and $\Vrfy(\tau, x, \pi) \to \bits$; a statement $x$ is true when $C(x, w) = 1$ for some $w$. For a polynomial $p$ independent of $C$, proofs have size at most $p(\secpar)$ and $\Vrfy$ runs in time at most $p(\secpar + |x|)$, while $\Setup$ may take time $\poly(\secpar, |C|)$. Soundness is non-adaptive and without a verification oracle: for every false $x$ fixed before $\crs$ is sampled and every efficient prover $\tilde P$, $\Pr[\Vrfy(\tau, x, \tilde P(\crs)) = 1]$ is negligible. A publicly verifiable SNARK with these size and time bounds is one, with $\tau = \crs$, since knowledge soundness implies soundness — standard. Linear-only encryption gives one whose proofs are a constant number of ciphertexts ([[linear-only-encryption-to-designated-verifier-snarg-bciop13|Linear-only encryption ⇒ Designated-verifier SNARG]]) — [[BCIOP13 - Succinct Non-interactive Arguments via Linear Interactive Proofs|BCIOP13]], and linear-only vector encryption, which BISW17 conjecture variants of Regev encryption satisfy, gives a lattice-based one ([[linear-only-vector-encryption-to-designated-verifier-snarg-bisw17|Linear-only vector encryption ⇒ Designated-verifier SNARG]]) — [[BISW17 - Lattice-Based SNARGs and Their Application to More Efficient Obfuscation|BISW17]]. For an $\classNP$ language with a sub-exponentially hard subset-membership problem, a reduction that uses the prover only as an oracle proves adaptive soundness of a designated-verifier SNARG from a falsifiable assumption only if the assumption is false ([[no-falsifiable-assumption-to-snark-gro16|No reduction from falsifiable assumptions to SNARKs]]) — [[GW11 - Separating Succinct Non-Interactive Arguments From All Falsifiable Assumptions|GW11]].

## Batch arguments for NP

A **batch argument (BARG)** for $\classNP$ is a non-interactive argument in the CRS model for statements $(C, x_1, \ldots, x_k)$, true when every $x_i$ has a witness $w_i$ with $C(x_i, w_i) = 1$, for a Boolean circuit $C$. A proof has size $\poly(\secpar, |C|, \log k)$ and $\Vrfy$ runs in polynomial time. Soundness is non-adaptive: for every false statement $(C, x_1, \ldots, x_k)$, some $x_i$ having no witness, fixed before $\crs$ is sampled, every efficient prover makes $\Vrfy$ accept with negligible probability — [[CJJ21 - SNARGs for P from LWE|CJJ21]]. Without the size bound the $k$ witnesses form a proof — standard. CJJ21 construct one from LWE ([[polynomial-ratio-lwe-to-barg-for-np-cjj21|LWE with polynomial ratio ⇒ BARG for NP]]).

# Other results

- [[hash-function-to-snark-bbhr18|CRHF ⇒ STARK]]
- The Fiat–Shamir transform removes interaction from a public-coin protocol but keeps its communication, so in the random oracle model it yields succinct arguments only from succinct protocols: Merkle-committed PCPs (CS proofs) — [[Mic00 - Computationally Sound Proofs|Mic00]]; public-coin IOPs with state-restoration soundness — [[BCS16 - Interactive Oracle Proofs|BCS16]]
- Many SNARKs (e.g. Plonk, Marlin) compile a polynomial IOP, obtained from an [[arithmetization]], with a [[polynomial-commitment|polynomial commitment scheme]] — [[CHM+20 - Marlin Preprocessing zkSNARKs with Universal and Updatable SRS|CHM+20]]
- [[bilinear-pairing-to-snark-gro16|Bilinear pairing ⇒ zk-SNARK]]: Groth16 is knowledge-sound in the generic bilinear group model — [[Gro16 - On the Size of Pairing-based Non-interactive Arguments|Gro16]]; in the algebraic group model its knowledge soundness reduces tightly to the $q$-DLOG assumption ([[bilinear-pairing-and-q-dlog-to-zk-snark-fkl18|Bilinear pairing + q-DLOG ⇒ zk-SNARK]]) — [[FKL18 - The Algebraic Group Model and its Applications|FKL18]]
- [[no-falsifiable-assumption-to-snark-gro16|No fully-black-box reduction from Falsifiable assumption to SNARK]]

<!-- BEGIN GENERATED participates-in e73533d34909 -->

## Participates in

**Builds on Succinct argument**

- [[snark-and-crhf-to-fully-succinct-snark-bcct13|SNARK + CRHF ⇒ Fully succinct SNARK (bootstrapping)]]
- [[snark-to-nizk|SNARK + OWF ⇒ NIZK argument]]
- [[snark-to-recursive-snarks|SNARK ⇒ Recursive SNARKs]]
- [[universal-snark-to-snark|Universal SNARK ⇒ SNARK]] (via [[succinct-argument#universalupdatable-snarks|Universal/updatable SNARKs]])

**Produces Succinct argument**

- [[bilinear-pairing-and-k-linear-assumption-to-barg-for-np-ww22|Bilinear pairing + k-Lin ⇒ BARG for NP]] (via [[succinct-argument#batch-arguments-for-np|Batch arguments for NP]])
- [[bilinear-pairing-and-q-dlog-to-universal-snark-gwc19|Bilinear pairing + q-DLOG ⇒ Universal SNARK (PLONK)]] (via [[succinct-argument#universalupdatable-snarks|Universal/updatable SNARKs]])
- [[bilinear-pairing-and-q-dlog-to-zk-snark-fkl18|Bilinear pairing + q-DLOG ⇒ zk-SNARK (Groth16 in the AGM)]] (via [[succinct-argument#zk-snark|zk-SNARK]])
- [[bilinear-pairing-to-snark-gro16|Bilinear pairing ⇒ zk-SNARK]] (via [[succinct-argument#zk-snark|zk-SNARK]])
- [[crhf-to-interactive-succinct-argument-kil92|CRHF ⇒ Succinct arguments for NP (Kilian)]] (via [[succinct-argument#interactive-succinct-arguments|Interactive succinct arguments]])
- [[hash-function-to-snark-bbhr18|CRHF ⇒ STARK]] (via [[succinct-argument#stark|STARK]])
- [[linear-only-encryption-to-designated-verifier-snarg-bciop13|Linear-only encryption ⇒ Designated-verifier SNARG]] (via [[succinct-argument#designated-verifier-snargs|Designated-verifier SNARGs]])
- [[linear-only-vector-encryption-to-designated-verifier-snarg-bisw17|Linear-only vector encryption ⇒ Designated-verifier SNARG (lattice-based)]] (via [[succinct-argument#designated-verifier-snargs|Designated-verifier SNARGs]])
- [[pcs-to-snark|Extractable PCS ⇒ SNARK]]
- [[polylog-cpir-to-dv-delegation-for-p-bhk17|PIR with polylogarithmic communication ⇒ Designated-verifier delegation for P]] (via [[succinct-argument#designated-verifier-delegation-for-p|Designated-verifier delegation for P]])
- [[polynomial-ratio-lwe-to-barg-for-np-cjj21|LWE with polynomial ratio ⇒ BARG for NP]] (via [[succinct-argument#batch-arguments-for-np|Batch arguments for NP]])
- [[polynomial-ratio-lwe-to-snarg-for-p-cjj21|LWE with polynomial ratio ⇒ SNARG for P]] (via [[succinct-argument#snargs-for-p|SNARGs for P]])
- [[prime-order-dlog-to-interactive-succinct-argument-bccgp16|DLOG ⇒ Succinct arguments for NP (Bootle et al.)]] (via [[succinct-argument#interactive-succinct-arguments|Interactive succinct arguments]])
- [[qrom-to-zk-snark-cms19|QROM ⇒ zk-SNARK (Micali's construction in the QROM)]] (via [[succinct-argument#zk-snark|zk-SNARK]])
- [[rom-to-snark-mic00|ROM ⇒ SNARK (Micali's CS proofs)]]
- [[snark-and-crhf-to-fully-succinct-snark-bcct13|SNARK + CRHF ⇒ Fully succinct SNARK (bootstrapping)]] (via [[succinct-argument#fully-succinct-snarks|Fully succinct SNARKs]])
- [[snark-to-recursive-snarks|SNARK ⇒ Recursive SNARKs]] (via [[succinct-argument#recursive-snarks|Recursive SNARKs]])
- [[subgroup-decision-to-barg-for-np-ww22|Subgroup decision ⇒ BARG for NP]] (via [[succinct-argument#batch-arguments-for-np|Batch arguments for NP]])
- [[succinct-state-restoration-iop-to-transparent-succinct-argument-bcs16|Succinct state-restoration-sound IOP ⇒ STARK (BCS transform)]] (via [[succinct-argument#stark|STARK]])
- [[universal-snark-to-snark|Universal SNARK ⇒ SNARK]]

**Barriers**

- [[no-falsifiable-assumption-to-snark-gro16|No fully-black-box reduction from Falsifiable assumption to SNARK]]
- [[no-fiat-shamir-and-gkr-to-snark-krs25|No fixed-construction reduction from Fiat-Shamir + GKR to SNARK]]

<!-- END GENERATED participates-in -->
