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
  sublinear-snarg-for-np: "#snargs-for-np-with-sublinear-proofs"
  barg-for-np: "#batch-arguments-for-np"
  universal-snark: "#universalupdatable-snarks"
  fully-succinct-snark: "#fully-succinct-snarks"
  designated-verifier-snarg: "#designated-verifier-snargs"
  dv-delegation-for-p: "#designated-verifier-delegation-for-p"
---

# Succinct argument

A **succinct non-interactive argument of knowledge** (SNARK) for circuit satisfiability is a non-interactive argument, with a reference string generated from the circuit $C$, by which a prover convinces a verifier that it knows a $w$ with $C(x, w) = 1$ using a proof much shorter than $w$, checked much faster than evaluating $C$; knowledge is formalized by an extractor. A **STARK** (Scalable Transparent ARgument of Knowledge) is a SNARK variant whose setup is public-coin, with no trapdoor.

## Syntax

A preprocessing SNARK for circuit satisfiability is a tuple of efficient algorithms $(\Setup, \Prove, \Vrfy)$ in which $\Setup$ takes as input an arbitrary Boolean circuit $C$; the relation proved is $\calR_C := \{(x, w) : C(x, w) = 1\}$.

- $\Setup(1^\secpar, C) \to \crs,$ takes a security parameter and the circuit $C$, runs in time $\poly(\secpar, |C|)$, and produces a common reference string $\crs$. For transparent systems, $\Setup$ is public-coin (no trapdoor).
- $\Prove(\crs, x, w) \to \pi,$ takes the CRS, instance $x$, and witness $w$ with $(x, w) \in \calR_C$, and produces a proof $\pi$.
- $\Vrfy(\crs, x, \pi) \to \bits,$ verifies the proof.

The properties below hold for every family of circuits $C = \{C_\secpar\}$ of size $\poly(\secpar)$. Given a collision-resistant hash function, a non-interactive argument of knowledge for the universal relation $\calR_U = \{((M, x, T), w) : M \text{ accepts } (x, w) \text{ within } T \text{ steps}\}$, knowledge-sound for adaptively chosen statements, with proof size and verification time bounded by one polynomial in $\secpar + |M| + |x| + \log T$ gives a SNARK in this sense for every $C$: $\Setup(1^\secpar, C)$ samples a hash key and publishes it with the hash $h$ of $C$, and the prover proves knowledge of a circuit $C'$ with hash $h$ and a $w$ with $C'(x, w) = 1$, so that an extracted $C' \ne C$ is a collision; the setup is public-coin when the argument's setup and the hash key are — standard.

## Properties

### Completeness

For every circuit $C$, all $(x, w) \in \calR_C$ and all $\crs \gets \Setup(1^\secpar, C)$:
$$\Pr[\Vrfy(\crs, x, \Prove(\crs, x, w)) = 1] = 1.$$

### Knowledge soundness

For every family of circuits $C$ of size $\poly(\secpar)$ and all efficient $\calA$ there exists a polynomial-time extractor $\calE_\calA$ such that: if $\calA(\crs; r)$, run on coins $r$, outputs $(x, \pi)$ with $\Vrfy(\crs, x, \pi) = 1$, then $\calE_\calA(\crs, r)$ outputs $w$ with $(x, w) \in \calR_C$, except with negligible probability — [[Gro16 - On the Size of Pairing-based Non-interactive Arguments|Gro16]]. Knowledge soundness is strictly stronger than plain soundness (which only requires the prover cannot convince the verifier of a false statement).

### Succinctness

There is a polynomial $p$, fixed with the scheme and independent of $C$, such that for every circuit $C$, every $\crs$ output by $\Setup(1^\secpar, C)$, every $(x, w) \in \calR_C$ and every $\pi$ output by $\Prove(\crs, x, w)$, $|\pi| \le p(\secpar + |x| + \log |C|)$, and $\Vrfy(\crs, x, \pi)$ runs in time at most $p(\secpar + |x| + \log |C|)$ on every input $(x, \pi)$. Since $|w| \le |C|$, this is the bound $\poly(\secpar, |x|) \cdot \polylog(|w|, |C|)$ with the polynomial fixed before $C$.

### Zero-knowledge (optional)

A simulator is a pair $\Sim = (\Sim_1, \Sim_2)$ of efficient algorithms, $\Sim_1(1^\secpar, C) \to (\crs, \td)$ and $\Sim_2(\crs, \td, x) \to \pi$. In world 0 of the game below, $\calA$ gets $\crs \gets \Setup(1^\secpar, C)$ and an oracle returning honest proofs; in world 1, it gets $\crs$ from $\Sim_1$ and an oracle returning simulated proofs, which ignores the witness. Each oracle answers $\bot$ on $(x, w) \notin \calR_C$, so $\calA$ chooses every statement after seeing $\crs$ and knows its witness.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{zk}}_{C,\calA,\Sim}(\secpar)$}
\begin{algorithmic}
\State $b \getsr \bits$; $\crs_0 \gets \Setup(1^\secpar, C)$; $(\crs_1, \td) \gets \Sim_1(1^\secpar, C)$
\State $b' \gets \calA^{\calO_b}(\crs_b)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

```pseudocode
\begin{algorithm}
\algname{Oracle}
\caption{$\calO_0(x, w)$}
\begin{algorithmic}
\If{$(x, w) \notin \calR_C$}
\Return $\bot$
\EndIf
\Return $\Prove(\crs_0, x, w)$
\end{algorithmic}
\end{algorithm}
```

```pseudocode
\begin{algorithm}
\algname{Oracle}
\caption{$\calO_1(x, w)$}
\begin{algorithmic}
\If{$(x, w) \notin \calR_C$}
\Return $\bot$
\EndIf
\Return $\Sim_2(\crs_1, \td, x)$
\Comment{$w$ is ignored}
\end{algorithmic}
\end{algorithm}
```

A SNARK is **zero-knowledge** if there is a simulator $\Sim$ such that for every family of circuits $C$ of size $\poly(\secpar)$ and all efficient $\calA$,

$$
\Adv^{\mathrm{zk}}_{C,\calA,\Sim}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{zk}}_{C,\calA,\Sim}(\secpar) = 1\right] - 1\right|
$$

is negligible. In the random-oracle model, quantum or classical, $\Setup$, $\Prove$, $\Vrfy$ and $\calA$ query the oracle; in world 1, $\Sim$ also answers $\calA$'s oracle queries, keeping state shared with $\Sim_1$ and $\Sim_2$.

## Security game

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{ks}}_{C,\calA,\calE_\calA}(\secpar)$}
\begin{algorithmic}
\State $\crs \gets \Setup(1^\secpar, C)$
\State $r \getsr \bits^{*}$; $(x, \pi) \gets \calA(\crs; r)$
\State $w \gets \calE_{\calA}(\crs, r)$
\Comment{$\calE_\calA$ gets $\calA$'s input and coins}
\If{$\Vrfy(\crs, x, \pi) = 1$ and $(x, w) \notin \calR_C$}
\Return $1$
\Comment{$\calA$ wins: valid proof but extractor failed}
\EndIf
\Return $0$
\end{algorithmic}
\end{algorithm}
```

A succinct argument is **knowledge-sound** if for every family of circuits $C$ of size $\poly(\secpar)$ and all efficient $\calA$ there exists a polynomial-time extractor $\calE_\calA$ such that $\Pr[\Game^{\mathrm{ks}}_{C, \calA, \calE_\calA}(\secpar) = 1]$ is negligible.

# Variations

## zk-SNARK

As an object, a zk-SNARK is a SNARK in the sense above, complete, knowledge-sound and succinct, that is zero-knowledge in the sense of [[#Zero-knowledge (optional)|the game above]]. Groth16 is the canonical pairing-based zk-SNARK with constant proof size (3 group elements) and millisecond verification ([[bilinear-pairing-to-snark-gro16|Bilinear pairing ⇒ zk-SNARK]]) — [[Gro16 - On the Size of Pairing-based Non-interactive Arguments|Gro16]].

Two-move linear interactive proofs cannot have a linear decision procedure, so SNARGs whose prover and verifier use only generic asymmetric bilinear-group operations cannot consist of a single group element; whether two elements suffice, which would make the three-element construction optimal, is open — [[Gro16 - On the Size of Pairing-based Non-interactive Arguments|Gro16]]. The impossibility of a linear decision procedure answers an open question of [[BCIOP13 - Succinct Non-interactive Arguments via Linear Interactive Proofs|BCIOP13]] — [[Gro16 - On the Size of Pairing-based Non-interactive Arguments|Gro16]].

Pinocchio is a publicly verifiable preprocessing verifiable-computation scheme for arithmetic circuits built on the quadratic arithmetic programs of [[GGPR13 - Quadratic Span Programs and Succinct NIZKs without PCPs|GGPR13]], sound under the $d$-PKE, $q$-PDH and $2q$-SDH assumptions with $q = 4d + 4$ for QAP degree $d$. A proof is 288 bytes whatever the computation and the size of its input and output, verification takes a fixed 10 ms plus 0.4–15 μs per input or output element in the authors' implementation, and the scheme extends to zero-knowledge proofs at negligible extra cost — [[PHGR13 - Pinocchio Nearly Practical Verifiable Computation|PHGR13]]. GGPR13's NIZK argument for Circuit-SAT, from quadratic span programs under $q$-PDH and [[knowledge-of-exponent#q-power-kea|q-PKE]], has 7 group elements with CRS size and prover computation quasi-linear in the circuit size; [[Gro10 - Short Pairing-Based Non-interactive Zero-Knowledge Arguments|Gro10]]'s had 42 group elements with CRS and prover computation quadratic in it, and Lipmaa reduced the CRS to quasi-linear size with prover computation still quadratic — [[GGPR13 - Quadratic Span Programs and Succinct NIZKs without PCPs|GGPR13]]. A modified Pinocchio protocol implemented in libsnark is unsound: the lemma justifying the modification is false, and a cheating prover makes the verifier accept false statements — [[Parno15 - A Note on the Unsoundness of vnTinyRAM's SNARK|Parno15]].

## STARK

A **transparent succinct argument** is a SNARK, in the sense above, whose $\Setup$ is public-coin, with no trapdoor. The notion bounds the prover's running time only by $\poly(\secpar, |C|)$. The name STARK, for scalable transparent argument of knowledge, is from [[BBHR18 - Scalable, transparent, and post-quantum secure computational integrity|BBHR18a]], whose ZK-STARK is a transparent zero-knowledge system in which verification scales exponentially faster than the size of the data the computation runs on — [[BBHR18 - Scalable, transparent, and post-quantum secure computational integrity|BBHR18a]]. Security is proven in the [[random-oracle-model|ROM]] by the [[succinct-state-restoration-iop-to-transparent-succinct-argument-bcs16|BCS transform]], which preserves the time complexity of the IOP it compiles, so that known IOPs give zero-knowledge proofs in the ROM with quasilinear prover and polylogarithmic verifier — [[BCS16 - Interactive Oracle Proofs|BCS16]]; the same compiler is sound in the quantum ROM when the IOP is round-by-round sound — [[CMS19 - Succinct Arguments in the Quantum Random Oracle Model|CMS19]] — so STARKs are plausibly post-quantum. Proof size is $O(\log^2 T)$ for a computation of size $T$, larger than pairing-based SNARKs but still sublinear — [[BBHR18 - Scalable, transparent, and post-quantum secure computational integrity|BBHR18a]].

The core component of STARKs is the **FRI** (Fast Reed-Solomon IOP of Proximity) protocol, an interactive oracle proof of proximity to Reed-Solomon codes — [[BBHR18b - Fast Reed-Solomon Interactive Oracle Proofs of Proximity|BBHR18b]]. Combined with Merkle-tree commitments, FRI yields a transparent (list) polynomial commitment scheme — [[KPV22 - RedShift Transparent SNARKs from List Polynomial Commitments|KPV22]].

Other transparent arguments trade proof size against verification time. Ligero is a zero-knowledge argument for $\classNP$ whose communication is proportional to the square root of the verification circuit size, from any collision-resistant hash function, and non-interactive in the ROM with no trusted setup or public-key cryptography; for a SHA-256 preimage at soundness error $2^{-40}$ it communicates about 44 KB, with 140 ms proving and 62 ms verification in the CCS 2017 version — [[AHIV17 - Ligero Lightweight Sublinear Arguments Without a Trusted Setup|AHIV17]]. Aurora is a transparent zero-knowledge SNARG for R1CS, built on an IOP for a univariate sumcheck, whose proofs for $n$ constraints have size $O(\log^2 n)$, produced with $O(n \log n)$ field operations and verified with $O(n)$ — [[BCR+19 - Aurora Transparent Succinct Arguments for R1CS|BCR+19]]. Spartan gives transparent zkSNARKs for R1CS whose verification is sublinear after a one-time public preprocessing of the statement (computation commitments), with proof size and verifier cost from $O(\log^2 n)$ to $O(\sqrt{n})$ depending on the polynomial commitment used — [[Set20 - Spartan Efficient and General-Purpose zkSNARKs Without Trusted Setup|Set20]].

## Universal/updatable SNARKs

A **universal SNARK** has a setup $\Setup(1^\secpar, N)$ that depends only on a bound $N$ on circuit size and outputs a structured reference string $\mathsf{srs}$, together with a deterministic public algorithm that derives from $\mathsf{srs}$ and any circuit $C$ of size at most $N$ the proving and verification keys of $C$; $\Setup(1^\secpar, N)$ and the key derivation run in time $\poly(\secpar, N)$. For every circuit $C$ of size at most $N$, fixed before $\mathsf{srs}$ is sampled, the scheme with $C$'s derived keys is complete and knowledge-sound, and one polynomial $p$, fixed with the scheme and independent of $N$ and $C$, bounds $|\pi|$ and the running time of $\Vrfy$ by $p(\secpar + |x| + \log N)$ for every $C$ of size at most $N$. Deriving the keys of $C$ from a fresh $\mathsf{srs}$ for $N = |C|$ gives a SNARK in the sense above ([[universal-snark-to-snark|Universal SNARK ⇒ SNARK]]) — folklore.

Systems like Plonk and Marlin use a single universal trusted setup for all circuits up to size $N$, rather than a per-circuit setup. Plonk uses PLONKish [[arithmetization]] and KZG [[polynomial-commitment|polynomial commitments]] ([[KZG10 - Constant-size commitments to polynomials and their applications|KZG10]]) — [[GWC19 - PLONK Permutations over Lagrange-bases for Oecumenical Noninteractive arguments of Knowledge|GWC19]]; in the [[algebraic-group-model|algebraic group model]], with challenges from a random oracle, it is knowledge-sound under a $q$-type discrete-logarithm assumption ([[bilinear-pairing-and-q-dlog-to-universal-snark-gwc19|Bilinear pairing + q-DLOG ⇒ Universal SNARK]]) — [[GWC19 - PLONK Permutations over Lagrange-bases for Oecumenical Noninteractive arguments of Knowledge|GWC19]].

An SRS is **updatable** if any party can update it, with security as long as at least one of the parties updating it is honest. A zk-SNARK whose SRS contains private secret-dependent polynomials cannot be updatable; GKM+18 build one whose SRS consists only of secret-dependent monomials, universal, updatable and of quadratic size, which can be specialized into linear-size relation-dependent SRSs with linear-time proving — [[GKM+18 - Updatable and Universal Common Reference Strings with Applications to zk-SNARKs|GKM+18]]. Sonic is a zk-SNARK with a universal, continually updatable SRS of linear size and constant-size proofs — [[MBKM19 - Sonic Zero-Knowledge SNARKs from Linear-Size Universal and Updatable Structured Reference Strings|MBKM19]].

## Recursive SNARKs

_Incrementally verifiable computation (IVC)_ was introduced by [[Val08 - Incrementally Verifiable Computation or Proofs of Knowledge Imply Time-Space Efficiency|Val08]]. As an object, IVC is a tuple of algorithms $(\Setup, \Prove, \Vrfy)$ such that for every deterministic step function $F$ computable by circuits of size $\poly(\secpar)$, every initial state $s_0$ and every polynomial bound $B$:

- $\Setup(1^\secpar, F, s_0, B) \to \crs$;
- $\Prove(\crs, t, s_t, \pi_t) \to \pi_{t+1}$, given the state $s_t$ after $t$ steps and its proof ($\pi_0$ empty), outputs a proof for $s_{t+1} = F(s_t)$ in time $\poly(\secpar, |F|, |s_t|)$, independent of $t$;
- $\Vrfy(\crs, t, s, \pi) \to \bits$.

It is complete if for every $t \le B(\secpar)$, $\Vrfy(\crs, t, F^t(s_0), \pi_t) = 1$ for the honest proof $\pi_t$, computed by $t$ calls to $\Prove$ from $\pi_0$, except with negligible probability. It is succinct if there is a polynomial $p$, fixed with the scheme and independent of $t$, $F$, $s_0$ and $B$, such that $|\pi|$ and the running time of $\Vrfy(\crs, t, s, \pi)$ are at most $p(\secpar + |s| + \log |F| + \log B(\secpar))$; the term $\log B$ absorbs the constant composition depth $\log_\secpar B$. It is sound if for all efficient $\calA$,

$$
\Pr\!\left[\Vrfy(\crs, t, s, \pi) = 1 \wedge t \le B(\secpar) \wedge s \ne F^t(s_0) : \crs \gets \Setup(1^\secpar, F, s_0, B),\ (t, s, \pi) \gets \calA(\crs)\right]
$$

is negligible. Since $p$ is independent of $F$ and $B$, and $|F|$ enters only through $\log |F|$, a verifier that recomputes $F^t(s_0)$, in time about $B(\secpar) \cdot |F|$, does not meet the bound, which makes the notion non-trivial — standard. A _recursive SNARK_ proves that earlier proofs verify. Extraction cost grows polynomially with each level of nesting, so such composition is proved sound only to constant depth; a depth reduction then gives IVC for any fixed polynomial bound on the number of steps ([[snark-to-recursive-snarks|SNARK ⇒ Recursive SNARKs]]) — [[BCCT13 - Recursive Composition and Bootstrapping for SNARKs and Proof-Carrying Data|BCCT13]].

## Fully succinct SNARKs

A **fully succinct SNARK** is a publicly verifiable SNARK for the universal relation $\calR_U = \{((M, x, t), w) : M \text{ accepts } (x, w) \text{ within } t \text{ steps}\}$ whose $\Setup(1^\secpar)$ runs in time $\poly(\secpar)$ and outputs a $\crs$ independent of the computation. For every polynomial $t$, proofs have size $\poly(\secpar)$, verification takes time $\poly(\secpar, |M|, |x|, \log t)$, and proving takes time $\poly(\secpar, |M|, |x|, t)$ — [[BCCT13 - Recursive Composition and Bootstrapping for SNARKs and Proof-Carrying Data|BCCT13]]. As an object, the bound is uniform: there is a polynomial $p$, fixed with the scheme, with $|\pi| \le p(\secpar + \log t)$ for every statement $(M, x, t)$. Knowledge soundness is for running times polynomial in the instance length: for every constant $c$ and every efficient $\calA$ there is an efficient $\calE_\calA$ such that, for $\crs \gets \Setup(1^\secpar)$, the probability that $\calA(\crs; r)$ outputs $((M, x, t), \pi)$ with $t \le |x|^c$ and $\Vrfy(\crs, (M, x, t), \pi) = 1$ while $\calE_\calA(\crs, r)$ outputs no $w$ with $((M, x, t), w) \in \calR_U$ is negligible. One scheme serves every $c$. A preprocessing SNARK, as in the syntax above, may instead have a $\crs$ and a setup time that grow with the circuit; BCCT13 bootstrap such SNARKs into fully succinct ones ([[snark-and-crhf-to-fully-succinct-snark-bcct13|SNARK + CRHF ⇒ Fully succinct SNARK]]) — [[BCCT13 - Recursive Composition and Bootstrapping for SNARKs and Proof-Carrying Data|BCCT13]].

## Interactive succinct arguments

An interactive argument system $(P, V)$ for every language $L \in \classNP$, whose prover–verifier communication is $\poly(\secpar, \log T)$ for statements whose $\classNP$ verification takes time $T$, with either no setup or public parameters of length $\poly(\secpar, T)$ sampled by an honest setup (a common random string, or uniformly random group elements whose discrete-logarithm relations no party knows), not counted in the communication. It is complete if for every true statement $x$ with its witness $w$, fixed before the public parameters are sampled, $V$ accepts its interaction with the honest prover holding $w$ with probability at least $1 - \negl(\secpar)$, over the coins of the public parameters and of both parties, and sound if for every $x \notin L$ fixed before the public parameters are sampled and every efficient prover $P^*$, $\Pr[V \text{ accepts}]$ is negligible. Kilian's protocol needs no setup ([[crhf-to-interactive-succinct-argument-kil92|CRHF ⇒ Succinct arguments for NP (Kilian)]]) — [[Kil92 - A Note on Efficient Zero-Knowledge Proofs and Arguments (Extended Abstract)|Kil92]]; the argument of Bootle et al. uses uniformly random group elements as public parameters ([[prime-order-dlog-to-interactive-succinct-argument-bccgp16|DLOG ⇒ Succinct arguments for NP]]) — [[BCCGP16 - Efficient Zero-Knowledge Arguments for Arithmetic Circuits in the Discrete Log Setting|BCCGP16]].

## SNARGs for P

A publicly verifiable non-interactive argument in the CRS model for deterministic computations, with no knowledge extractor. A statement is a pair $(M, x)$ of a deterministic Turing machine and an input, true for a time bound $T$ when $M$ accepts $x$ within $T$ steps. The scheme consists of $\Setup(1^\secpar, T) \to \crs$, $\Prove(\crs, M, x) \to \pi$ and $\Vrfy(\crs, (M, x), \pi) \to \bits$, and there is a polynomial $p$, fixed with the scheme and independent of $T$, such that for every polynomial $T = T(\secpar)$: $|\crs|$ and $|\pi|$ are at most $p(\secpar + \log T)$; $\Vrfy$ runs in time at most $(|M| + |x|) \cdot p(\secpar + \log T)$; $\Prove$ runs in time $\poly(\secpar, |M|, |x|, T)$; for every true statement, fixed before the setup runs, $\Vrfy$ accepts the honest proof with probability at least $1 - \negl(\secpar)$, over the coins of the setup and of the prover (completeness); and for all efficient $\calA$, the probability that $\calA(\crs)$ outputs $(M, x, \pi)$ with $\Vrfy(\crs, (M, x), \pi) = 1$ although $M$ does not accept $x$ within $T$ steps is negligible (adaptive soundness). [[CJJ21 - SNARGs for P from LWE|CJJ21]] construct one from LWE with a common random string ([[polynomial-ratio-lwe-to-snarg-for-p-cjj21|LWE with polynomial ratio ⇒ SNARG for P]]). Since $p$ is fixed before $T$, for $T = \secpar^c$ with $c$ above the degree of $p$ the verifier cannot run $M$ for $T$ steps, which is what makes the notion non-trivial — standard.

## SNARGs for NP with sublinear proofs

For an $\classNP$ relation $\calR$ with language $L_\calR = \{x : \exists w,\ (x, w) \in \calR\}$, a publicly verifiable non-interactive argument for $\calR$ in the CRS model is a tuple of efficient algorithms $(\Setup, \Prove, \Vrfy)$ with $\Setup(1^\secpar) \to \crs$, $\Prove(\crs, x, w) \to \pi$ and $\Vrfy(\crs, x, \pi) \to \bits$. $\Setup$ takes no other input, so $\crs$ depends on neither the statement length nor a circuit; the $\Setup(1^\secpar, C)$ syntax above and its quantifier over circuits of size $\poly(\secpar)$ do not apply. The argument is complete if $\Vrfy(\crs, x, \Prove(\crs, x, w)) = 1$ for every $\crs$ output by $\Setup(1^\secpar)$ and every $(x, w) \in \calR$, and adaptively sound if for all efficient $\calA$, the probability that $\calA(\crs)$, for $\crs \gets \Setup(1^\secpar)$, outputs $(x, \pi)$ with $x \notin L_\calR$ and $\Vrfy(\crs, x, \pi) = 1$ is negligible. Its proofs have exponent $\delta$ if there is a polynomial $p$, fixed with the scheme, such that for every $\secpar$, every $(x, w) \in \calR$ of any lengths and every $\pi$ output by $\Prove(\crs, x, w)$, $|\pi| \le p(\secpar) \cdot (|x| + |w|)^{\delta}$. A **SNARG for NP with sublinear proofs** is, for a constant $\delta < 1$ independent of $\calR$, a complete and adaptively sound argument with proofs of exponent $\delta$ for every $\classNP$ relation $\calR$. No knowledge extractor is required, and verification time is not bounded. This is the succinctness [[KMY20 - NIZK from SNARG|KMY20]] require, with neither knowledge soundness nor efficient verification — [[KMY20 - NIZK from SNARG|KMY20]].

## Designated-verifier delegation for P

A **designated-verifier delegation scheme for P** is an argument $(\Gen, \Prove, \Vrfy)$ for statements $(M, x)$, true for a time bound $T$ when the deterministic machine $M$ accepts $x$ within $T$ steps, with $\Gen(1^\secpar, T) \to (\pk, \sk)$, $\Prove(\pk, M, x) \to \pi$ and $\Vrfy(\sk, M, x, \pi) \to \bits$. There is a polynomial $p$, fixed with the scheme and independent of $T$, such that for every polynomial $T = T(\secpar)$: $\Gen$ runs in time at most $p(\secpar + \log T)$, so $\pk$ is independent of the statement, and $|\pk|$ and $|\pi|$ are at most $p(\secpar + \log T)$; $\Prove$ runs in time $\poly(\secpar, T)$; $\Vrfy$ runs in time at most $(|M| + |x|) \cdot p(\secpar + \log T)$; for every true statement, fixed before $\Gen$ runs, $\Vrfy$ accepts the honest proof with probability at least $1 - \negl(\secpar)$, over the coins of $\Gen$ and of the prover (completeness); and for every false statement fixed before $\pk$ is sampled, every efficient prover given $\pk$ makes $\Vrfy$ accept with negligible probability (non-adaptive soundness). Since $p$ is fixed before $T$, for $T = \secpar^c$ with $c$ above the degree of $p$ the verifier cannot run $M$ for $T$ steps, which is what makes the notion non-trivial — standard. From PIR with polylogarithmic communication, a scheme exists whose public key is reusable and whose soundness is adaptive ([[polylog-cpir-to-dv-delegation-for-p-bhk17|PIR with polylogarithmic communication ⇒ Designated-verifier delegation for P]]) — [[BHK17 - Non-interactive delegation and batch NP verification from standard computational assumptions|BHK17]]; from sub-exponentially secure PIR, 1-round delegation exists for every language computable in time $t$, with prover time $\poly(t)$ and verifier time $n \cdot \polylog(t)$ — [[KRR14 - How to delegate computations the power of no-signaling proofs|KRR14]].

## Designated-verifier SNARGs

A **designated-verifier SNARG** is a preprocessing argument $(\Setup, \Prove, \Vrfy)$ for circuit satisfiability in which $\Setup(1^\secpar, C)$ outputs a reference string $\crs$ and a secret verification state $\tau$, $\Prove(\crs, x, w) \to \pi$, and $\Vrfy(\tau, x, \pi) \to \bits$; a statement $x$ is true when $C(x, w) = 1$ for some $w$. For a polynomial $p$ independent of $C$, proofs have size at most $p(\secpar)$ and $\Vrfy$ runs in time at most $p(\secpar + |x|)$, while $\Setup$ may take time $\poly(\secpar, |C|)$. It is complete if for every $(x, w)$ with $C(x, w) = 1$, fixed before the setup runs, $\Vrfy(\tau, x, \Prove(\crs, x, w)) = 1$ with probability at least $1 - \negl(\secpar)$, over the coins of the setup and of the prover. Soundness is non-adaptive and without a verification oracle: for every false $x$ fixed before $\crs$ is sampled and every efficient prover $\tilde P$, $\Pr[\Vrfy(\tau, x, \tilde P(\crs)) = 1]$ is negligible. A publicly verifiable SNARK with these size and time bounds is one, with $\tau = \crs$, since knowledge soundness implies soundness — standard. Linear-only encryption gives one whose proofs are a constant number of ciphertexts ([[linear-only-encryption-to-designated-verifier-snarg-bciop13|Linear-only encryption ⇒ Designated-verifier SNARG]]) — [[BCIOP13 - Succinct Non-interactive Arguments via Linear Interactive Proofs|BCIOP13]], and linear-only vector encryption, which BISW17 conjecture variants of Regev encryption satisfy, gives a lattice-based one ([[linear-only-vector-encryption-to-designated-verifier-snarg-bisw17|Linear-only vector encryption ⇒ Designated-verifier SNARG]]) — [[BISW17 - Lattice-Based SNARGs and Their Application to More Efficient Obfuscation|BISW17]]. For an $\classNP$ language with a sub-exponentially hard subset-membership problem, a reduction that uses the prover only as an oracle proves adaptive soundness of a designated-verifier SNARG from a falsifiable assumption only if the assumption is false ([[no-falsifiable-assumption-to-snark-gro16|No fully-black-box reduction from Falsifiable assumption to fully succinct SNARKs]]) — [[GW11 - Separating Succinct Non-Interactive Arguments From All Falsifiable Assumptions|GW11]].

## Batch arguments for NP

A **batch argument (BARG)** for $\classNP$ is a non-interactive argument in the CRS model for statements $(C, x_1, \ldots, x_k)$, true when every $x_i$ has a witness $w_i$ with $C(x_i, w_i) = 1$, for a Boolean circuit $C$. It consists of $\Setup(1^\secpar, k, |C|) \to \crs$, where a construction may ignore $k$ or $|C|$, $\Prove(\crs, C, x_1, \ldots, x_k, w_1, \ldots, w_k) \to \pi$ and $\Vrfy(\crs, C, x_1, \ldots, x_k, \pi) \to \bits$. A proof has size $\poly(\secpar, |C|, \log k)$ and $\Vrfy$ runs in polynomial time. It is complete if for every true statement with its witnesses $w_1, \ldots, w_k$, fixed before the setup runs, $\Vrfy$ accepts the honest proof with probability at least $1 - \negl(\secpar)$, over the coins of the setup and of the prover. Soundness is non-adaptive: for every false statement $(C, x_1, \ldots, x_k)$, some $x_i$ having no witness, fixed before $\crs$ is sampled, every efficient prover makes $\Vrfy$ accept with negligible probability — [[CJJ21 - SNARGs for P from LWE|CJJ21]]. Without the size bound the $k$ witnesses form a proof — standard. CJJ21 construct one from LWE ([[polynomial-ratio-lwe-to-barg-for-np-cjj21|LWE with polynomial ratio ⇒ BARG for NP]]).

# Other results

- [[hash-function-to-snark-bbhr18|ROM ⇒ STARK]]
- The Fiat–Shamir transform removes interaction from a public-coin protocol but keeps its communication, so in the random oracle model it yields succinct arguments only from succinct protocols: Merkle-committed PCPs (CS proofs) — [[Mic00 - Computationally Sound Proofs|Mic00]]; public-coin IOPs with state-restoration soundness — [[BCS16 - Interactive Oracle Proofs|BCS16]]
- Many SNARKs (e.g. Plonk, Marlin) compile a polynomial IOP, obtained from an [[arithmetization]], with a [[polynomial-commitment|polynomial commitment scheme]] — [[CHM+20 - Marlin Preprocessing zkSNARKs with Universal and Updatable SRS|CHM+20]]
- [[bilinear-pairing-to-snark-gro16|Bilinear pairing ⇒ zk-SNARK]]: Groth16 is knowledge-sound in the generic bilinear group model — [[Gro16 - On the Size of Pairing-based Non-interactive Arguments|Gro16]]; in the algebraic group model its knowledge soundness reduces tightly to the $q$-DLOG assumption ([[bilinear-pairing-and-q-dlog-to-zk-snark-fkl18|Bilinear pairing + q-DLOG ⇒ zk-SNARK]]) — [[FKL18 - The Algebraic Group Model and its Applications|FKL18]]
- [[no-falsifiable-assumption-to-snark-gro16|No fully-black-box reduction from Falsifiable assumption to SNARK]]

<!-- BEGIN GENERATED participates-in 466461f25bf8 -->

## Participates in

**Builds on Succinct argument**

- [[fully-succinct-snark-to-sublinear-snarg-for-np|Fully succinct SNARK ⇒ SNARG for NP with sublinear proofs]] (via [[succinct-argument#fully-succinct-snarks|Fully succinct SNARKs]])
- [[snark-and-crhf-to-fully-succinct-snark-bcct13|SNARK + CRHF ⇒ Fully succinct SNARK (bootstrapping)]]
- [[snark-to-nizk|Sublinear SNARG + OWF ⇒ NIZK argument]] (via [[succinct-argument#snargs-for-np-with-sublinear-proofs|SNARGs for NP with sublinear proofs]])
- [[snark-to-recursive-snarks|SNARK ⇒ Recursive SNARKs]]
- [[transparent-succinct-argument-to-snark|STARK ⇒ SNARK]] (via [[succinct-argument#stark|STARK]])
- [[universal-snark-to-snark|Universal SNARK ⇒ SNARK]] (via [[succinct-argument#universalupdatable-snarks|Universal/updatable SNARKs]])
- [[zk-snark-to-snark|zk-SNARK ⇒ SNARK]] (via [[succinct-argument#zk-snark|zk-SNARK]])

**Produces Succinct argument**

- [[bilinear-pairing-and-k-linear-assumption-to-barg-for-np-ww22|Bilinear pairing + k-Lin ⇒ BARG for NP]] (via [[succinct-argument#batch-arguments-for-np|Batch arguments for NP]])
- [[bilinear-pairing-and-q-dlog-to-universal-snark-gwc19|Bilinear pairing + q-DLOG ⇒ Universal SNARK (PLONK)]] (via [[succinct-argument#universalupdatable-snarks|Universal/updatable SNARKs]])
- [[bilinear-pairing-and-q-dlog-to-zk-snark-fkl18|Bilinear pairing + q-DLOG ⇒ zk-SNARK (Groth16 in the AGM)]] (via [[succinct-argument#zk-snark|zk-SNARK]])
- [[bilinear-pairing-to-snark-gro16|Bilinear pairing ⇒ zk-SNARK]] (via [[succinct-argument#zk-snark|zk-SNARK]])
- [[crhf-to-interactive-succinct-argument-kil92|CRHF ⇒ Succinct arguments for NP (Kilian)]] (via [[succinct-argument#interactive-succinct-arguments|Interactive succinct arguments]])
- [[fully-succinct-snark-to-sublinear-snarg-for-np|Fully succinct SNARK ⇒ SNARG for NP with sublinear proofs]] (via [[succinct-argument#snargs-for-np-with-sublinear-proofs|SNARGs for NP with sublinear proofs]])
- [[hash-function-to-snark-bbhr18|ROM ⇒ STARK]] (via [[succinct-argument#stark|STARK]])
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
- [[transparent-succinct-argument-to-snark|STARK ⇒ SNARK]]
- [[universal-snark-to-snark|Universal SNARK ⇒ SNARK]]
- [[zk-snark-to-snark|zk-SNARK ⇒ SNARK]]

**Barriers**

- [[no-falsifiable-assumption-to-snark-gro16|No fully-black-box reduction from Falsifiable assumption to fully succinct SNARKs]] (via [[succinct-argument#fully-succinct-snarks|Fully succinct SNARKs]])
- [[no-fiat-shamir-and-gkr-to-snark-krs25|No fixed-construction reduction from Fiat-Shamir + GKR to SNARK]]

<!-- END GENERATED participates-in -->
