---
type: glossary
status: draft
aliases:
  - Fiat-Shamir
  - Fiat-Shamir Heuristic
title: Fiat-Shamir Heuristic
id: fiat-shamir
---

# Fiat-Shamir Heuristic

The _Fiat-Shamir heuristic_ (or _Fiat-Shamir transform_) is a technique for compiling a public-coin interactive protocol into a non-interactive one by replacing the verifier's random challenges with the output of a hash function applied to the transcript so far. With $H$ a [[random-oracle-model|random oracle]], the transform is sound for public-coin protocols with a constant number of rounds and negligible soundness error, since the loss is polynomial in the number of oracle queries; in general its soundness error is tightly characterized by the protocol's state-restoration soundness error, and it fails for protocols such as the many-fold sequential repetition of a protocol with a small challenge space — [[BCS16 - Interactive Oracle Proofs|BCS16]], [[AFK22 - Fiat-Shamir Transformation of Multi-round Interactive Proofs|AFK22]]. It is known to fail in important settings when instantiated with concrete hash functions.

## Description

Given a $(2k+1)$-message public-coin interactive protocol $\Pi = (P, V)$ with messages $a_1, c_1, \ldots, a_k, c_k, a_{k+1}$ on a statement $x$, the Fiat-Shamir transform produces a non-interactive protocol $\Pi_{\mathrm{FS}}$ as follows: the prover computes each verifier challenge itself as

$$c_i := H(x, a_1, c_1, \ldots, a_{i-1}, c_{i-1}, a_i),$$

where $H$ is either a [[random-oracle-model|random oracle]] or $h_s$ for a public key $s$ of an efficient keyed hash family. A reduction records the random oracle in its `model` (rom); a barrier that lists no rom node concerns the transform instantiated with efficient keyed hash families, and states that it fails for every such family. Omitting $x$ from the hash input lets a prover that chooses the statement pick a false one after computing the challenges — standard; [[rom-to-snark-mic00|ROM ⇒ SNARK]] gives an example. The resulting proof $(a_1, c_1, \ldots, a_{k+1})$ can be verified by any party who recomputes the same hash challenges.

The transform is particularly useful for constructing [[digital-signature|digital signatures]] from identification schemes (the original application of Fiat and Shamir; [[id-and-rom-to-ds|ID ⇒ DS]]), and for building non-interactive zero-knowledge proofs ([[fiat-shamir-and-honest-verifier-zk-hvzk-to-nizk|HVZK ⇒ NIZK (Fiat–Shamir)]]). It creates no succinctness, since the proof is the prover's transcript; applied to a PCP or a public-coin IOP whose oracles are Merkle-committed, it yields succinct non-interactive arguments in the random oracle model — [[Mic00 - Computationally Sound Proofs|Mic00]], [[BCS16 - Interactive Oracle Proofs|BCS16]] (for IOPs, given state-restoration soundness).

### Signatures from identification schemes

Let $\Pi = (\KeyGen, P, V)$ be a canonical [[identification-scheme|identification scheme]] with challenge space $C$: the prover sends a commitment $a$, receives a challenge $e \in C$ and answers with a response $z$, and $V(\pk, a, e, z)$ is the verifier's deterministic decision. For a hash function $H : \bits^* \to C$, the Fiat-Shamir signature scheme $\Pi_{\mathrm{FS}}$ keeps the key generation of $\Pi$, with $\pk$ as verification key, and replaces the verifier's challenge by the hash of the commitment and the message — the transform of [[FS86 - How to Prove Yourself Practical Solutions to Identification and Signature Problems|FS86]], as credited by [[BN06 - Multi-Signatures in the Plain Public-Key Model and a General Forking Lemma|BN06]] (Section 1):

```pseudocode
\begin{algorithm}
\algname{Algorithm}
\caption{$\Pi_{\mathrm{FS}}.\KeyGen(1^\secpar)$}
\begin{algorithmic}
\State $(\sk, \pk) \gets \Pi.\KeyGen(1^\secpar)$
\Return $(\sk, \pk)$
\end{algorithmic}
\end{algorithm}

\begin{algorithm}
\algname{Algorithm}
\caption{$\Pi_{\mathrm{FS}}.\Sign(\sk, m)$}
\begin{algorithmic}
\State $(a, \st) \gets P(\sk)$
\Comment{Commitment, with fresh coins}
\State $e \gets H(a, m)$
\Comment{In place of the verifier's challenge}
\State $z \gets P(\st, e)$
\Return $\sigma := (a, z)$
\end{algorithmic}
\end{algorithm}

\begin{algorithm}
\algname{Algorithm}
\caption{$\Pi_{\mathrm{FS}}.\Vrfy(\pk, m, \sigma)$}
\begin{algorithmic}
\State $(a, z) \gets \sigma$
\State $e \gets H(a, m)$
\Comment{Recompute the challenge}
\Return $V(\pk, a, e, z)$
\end{algorithmic}
\end{algorithm}
```

If $\Pi$ is perfectly correct, $V$ accepts the honest response to every challenge, so $\Pi_{\mathrm{FS}}$ is perfectly correct for every $H$ — standard. Two variants are common. The key-prefixed variant also hashes $\pk$, as [[digital-signature#eddsa|EdDSA]] does with the challenge $H(R \| A \| m)$ — [[JL17 - Edwards-Curve Digital Signature Algorithm (EdDSA)|JL17]] (Section 3.3). When the verification equation determines $a$ from $(\pk, e, z)$, as $a = g^z h^{-e}$ does for the [[identification-scheme#schnorr-identification-protocol|Schnorr protocol]], the signature can be $(e, z)$ instead, and $\Vrfy$ recomputes $a$ and checks $e = H(a, m)$ — standard. In the [[random-oracle-model|random-oracle model]], $\Pi_{\mathrm{FS}}$ is EUF-CMA-unforgeable if and only if $\Pi$ is secure against impersonation under passive attack, for [[identification-scheme#non-trivial-canonical-identification-schemes|non-trivial]] $\Pi$, whose commitments have super-logarithmic min-entropy ([[id-and-rom-to-ds|ID ⇒ DS]]) — [[AABN02 - From Identification to Signatures via the Fiat-Shamir Transform Minimizing Assumptions for Security and Forward-Security|AABN02]].

## Security in the ROM

For a large class of signature schemes obtained from three-move identification protocols, the [[forking-lemma|forking lemma]] reduces security in the [[random-oracle-model|random oracle model]] to the hard problem underlying the protocol — [[PS00 - Security Arguments for Digital Signatures and Blind Signatures|PS00]]. For public-coin interactive oracle proofs, the soundness of the transform in the ROM is tightly characterized by state-restoration soundness, which is bounded tightly in terms of soundness and round complexity ([[succinct-state-restoration-iop-to-transparent-succinct-argument-bcs16|BCS transform]]) — [[BCS16 - Interactive Oracle Proofs|BCS16]]. For a $(2\mu+1)$-move public-coin protocol and $Q$ oracle queries the generic loss is approximately $Q^\mu$, which the $\mu$-fold sequential repetition of $\Sigma$-protocols attains, while for $(k_1, \ldots, k_\mu)$-special-sound protocols the knowledge error degrades only linearly in $Q$ — [[AFK22 - Fiat-Shamir Transformation of Multi-round Interactive Proofs|AFK22]].

## Correlation-intractable instantiation

With a hash family in place of the oracle that is correlation-intractable for the relations given by the protocol's bad challenges, Fiat-Shamir is sound for protocols with round-by-round soundness, a notion introduced there — [[CCH+19 - Fiat-Shamir from practice to theory|CCH+19]]. [[CJJ21 - SNARGs for P from LWE|CJJ21]] instantiate it this way for an interactive batch argument, from LWE ([[polynomial-ratio-lwe-to-barg-for-np-cjj21|LWE with polynomial ratio ⇒ BARG for NP]]).

## Known Failures

### Standard Model (GK03)

If one-way functions exist, there is a secure 3-round public-coin identification scheme $\Pi$ whose Fiat-Shamir signature scheme is secure in the ROM, yet for every efficient $H$ the scheme $\Pi_{\mathrm{FS}}^H$ is not EUF-CMA-secure: some efficient $\calA$ has $\Adv^{\eufcma}_{\Pi_{\mathrm{FS}}^H,\calA}(\secpar)$ not negligible, where $\Pi_{\mathrm{FS}}^H$ is the transform of $\Pi$ with $H$ in place of the oracle — [[GK03 - On the (In)security of the Fiat-Shamir Paradigm|GK03]] ([[no-fiat-shamir-and-hash-function-to-ds-gk03|No fixed-construction reduction from Fiat-Shamir + Hash function to DS]]). This demonstrates that the random oracle cannot always be replaced by an actual hash function, even a cryptographically strong one.

### Natural Protocols (KRS25)

Prior counterexamples to Fiat-Shamir were contrived — protocols specifically engineered to fail. Khovratovich, Rothblum, and Soukhanov gave the first counterexample for a _standard, widely-studied_ protocol [[KRS25 - How to Prove False Statements Practical Attacks on Fiat-Shamir|KRS25]]. They showed that, for every hash function, the Fiat-Shamir transform applied to a corresponding instantiation of the [[gkr-protocol#gkr-based-succinct-arguments|GKR-based succinct interactive argument]] for non-deterministic bounded-depth computation lets an efficient prover prove a _false_ statement for an explicit circuit — [[KRS25 - How to Prove False Statements Practical Attacks on Fiat-Shamir|KRS25]]. Unlike the interactive proof of [[GKR15 - Delegating Computation Interactive Proofs for Muggles|GKR15]] for deterministic computation, this argument relies on cryptographic primitives — [[KRS25 - How to Prove False Statements Practical Attacks on Fiat-Shamir|KRS25]].

<!-- BEGIN GENERATED participates-in de3477f857d8 -->

## Participates in

**Barriers**

- [[no-fiat-shamir-and-hash-function-to-ds-gk03|No fixed-construction reduction from Fiat-Shamir + Hash function to DS]]
- [[no-fiat-shamir-to-nizk-gk03|No fixed-construction reduction from Fiat-Shamir to NIZK]]

**Used via Fiat-Shamir Heuristic**

- [[bilinear-pairing-q-sdh-and-dlin-to-cpa-anonymous-group-signature-bbs04|Bilinear pairing + q-SDH + DLIN ⇒ CPA-anonymous group signatures (Boneh–Boyen–Shacham)]]
- [[circular-secure-fhe-to-nizk-argument-for-np-cch19|Circular-secure FHE ⇒ NIZK argument for NP]]
- [[dlog-and-rom-to-schnorr-signatures-sch91|DLOG ⇒ Schnorr signatures]]
- [[factoring-blum-integers-to-forward-secure-signature-bm99|Factoring ⇒ Forward-secure signature (Bellare–Miner)]]
- [[fiat-shamir-and-honest-verifier-zk-hvzk-to-nizk|HVZK ⇒ NIZK (Fiat–Shamir)]]
- [[id-and-rom-to-ds|ID ⇒ DS]]
- [[lpn-low-noise-and-ddh-to-nizk-argument-for-np-bkm20|Low-noise LPN + DDH ⇒ NIZK argument for NP]]
- [[lwe-to-nizk-ps19|LWE ⇒ NIZK]]
- [[polynomial-ratio-lwe-to-barg-for-np-cjj21|LWE with polynomial ratio ⇒ BARG for NP]]
- [[polynomial-ratio-lwe-to-snarg-for-p-cjj21|LWE with polynomial ratio ⇒ SNARG for P]]
- [[rsa-to-threshold-rsa-sho00|RSA (safe-prime moduli) ⇒ Threshold RSA signatures (Shoup)]]
- [[fiat-shamir-and-schnorr-signatures-to-schnorr-signatures-sch91|Schnorr identification ⇒ Schnorr signatures (Fiat–Shamir)]]
- [[subexponential-ddh-to-nizk-argument-for-np-jj21|Sub-exponential DDH ⇒ NIZK argument for NP]]
- [[subexponential-ddh-to-ppad-hardness-klv23|Sub-exponential DDH ⇒ PPAD hardness]]
- [[subexponential-lwe-to-ppad-hardness-jkkz21|Sub-exponential LWE ⇒ PPAD hardness]]
- [[succinct-state-restoration-iop-to-transparent-succinct-argument-bcs16|Succinct state-restoration-sound IOP ⇒ STARK (BCS transform)]]

<!-- END GENERATED participates-in -->
