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

The _Fiat-Shamir heuristic_ (or _Fiat-Shamir transform_) is a technique for compiling a public-coin interactive protocol into a non-interactive one by replacing the verifier's random challenges with the output of a hash function applied to the transcript so far. The transform is proven secure when the hash function is modeled as a [[random-oracle-model|random oracle]], but is known to fail in important settings when instantiated with concrete hash functions.

## Description

Given a $(2k+1)$-message public-coin interactive protocol $\Pi = (P, V)$ with messages $a_1, c_1, \ldots, a_k, c_k, a_{k+1}$ on a statement $x$, the Fiat-Shamir transform produces a non-interactive protocol $\Pi_{\mathrm{FS}}$ as follows: the prover computes each verifier challenge itself as

$$c_i := H(x, a_1, c_1, \ldots, a_{i-1}, c_{i-1}, a_i),$$

where $H$ is a hash function modeled as a random oracle. Omitting $x$ from the hash input lets a prover that chooses the statement pick a false one after computing the challenges — standard; [[rom-to-snark-mic00|ROM ⇒ SNARK]] gives an example. The resulting proof $(a_1, c_1, \ldots, a_{k+1})$ can be verified by any party who recomputes the same hash challenges.

The transform is particularly useful for constructing [[digital-signature|digital signatures]] from identification schemes (the original application of Fiat and Shamir), and for building non-interactive zero-knowledge proofs. It creates no succinctness, since the proof is the prover's transcript; applied to a PCP or a public-coin IOP whose oracles are Merkle-committed, it yields succinct non-interactive arguments in the random oracle model — [[Mic00 - Computationally Sound Proofs|Mic00]], [[BCS16 - Interactive Oracle Proofs|BCS16]] (for IOPs, given state-restoration soundness).

## Security in the ROM

For a large class of signature schemes obtained from three-move identification protocols, the forking lemma reduces security in the [[random-oracle-model|random oracle model]] to the hard problem underlying the protocol — [[PS00 - Security Arguments for Digital Signatures and Blind Signatures|PS00]]. For public-coin interactive oracle proofs, the soundness of the transform in the ROM is tightly characterized by state-restoration soundness, which is bounded tightly in terms of soundness and round complexity ([[succinct-state-restoration-iop-to-transparent-succinct-argument-bcs16|BCS transform]]) — [[BCS16 - Interactive Oracle Proofs|BCS16]]. For a $(2\mu+1)$-move public-coin protocol and $Q$ oracle queries the generic loss is approximately $Q^\mu$, which the $\mu$-fold sequential repetition of $\Sigma$-protocols attains, while for $(k_1, \ldots, k_\mu)$-special-sound protocols the knowledge error degrades only linearly in $Q$ — [[AFK22 - Fiat-Shamir Transformation of Multi-round Interactive Proofs|AFK22]].

## Correlation-intractable instantiation

With a hash family in place of the oracle that is correlation-intractable for the relations given by the protocol's bad challenges, Fiat-Shamir is sound for protocols with round-by-round soundness, a notion introduced there — [[CCH+19 - Fiat-Shamir from practice to theory|CCH+19]]. [[CJJ21 - SNARGs for P from LWE|CJJ21]] instantiate it this way for an interactive batch argument, from LWE ([[polynomial-ratio-lwe-to-barg-for-np-cjj21|LWE with polynomial ratio ⇒ BARG for NP]]).

## Known Failures

### Standard Model (GK03)

Goldwasser and Kalai showed that the Fiat-Shamir transform is uninstantiable in the standard model [[GK03 - On the (In)security of the Fiat-Shamir Paradigm|GK03]]: there is a secure 3-round public-coin identification scheme $\Pi$ whose Fiat-Shamir signature scheme is secure in the ROM, yet for every efficient $H$ there is an efficient $\calA$ with

$$\Adv^{\eufcma}_{\Pi_{\mathrm{FS}}^H,\calA}(\secpar) \ge 1 - \negl(\secpar),$$

where $\Pi_{\mathrm{FS}}^H$ is the transform of $\Pi$ with $H$ in place of the oracle. This demonstrates that the random oracle cannot always be replaced by an actual hash function, even a cryptographically strong one.

### Natural Protocols (KRS25)

Prior counterexamples to Fiat-Shamir were contrived — protocols specifically engineered to fail. Khovratovich, Rothblum, and Soukhanov gave the first counterexample for a _standard, widely-studied_ protocol [[KRS25 - How to Prove False Statements Practical Attacks on Fiat-Shamir|KRS25]]. They showed that the Fiat-Shamir transform applied to the GKR succinct interactive argument (from [[GKR15 - Delegating Computation Interactive Proofs for Muggles|GKR15]]) allows an efficient prover to prove _false_ statements for explicit families of circuits.

<!-- BEGIN GENERATED participates-in c5278dbfef0a -->

## Participates in

**Barriers**

- [[no-fiat-shamir-and-gkr-to-snark-krs25|No fixed-construction reduction from Fiat-Shamir + GKR to SNARK]]
- [[no-fiat-shamir-and-hash-function-to-ds-gk03|No fixed-construction reduction from Fiat-Shamir + Hash function to DS]]
- [[no-fiat-shamir-to-nizk-gk03|No fixed-construction reduction from Fiat-Shamir to NIZK]]

**Used via Fiat-Shamir Heuristic**

- [[circular-secure-fhe-to-nizk-argument-for-np-cch19|Circular-secure FHE ⇒ NIZK argument for NP]]
- [[dlog-and-rom-to-schnorr-signatures-sch91|DLOG ⇒ Schnorr signatures]]
- [[fiat-shamir-and-honest-verifier-zk-hvzk-to-nizk|HVZK ⇒ NIZK (Fiat–Shamir)]]
- [[fiat-shamir-and-schnorr-signatures-to-schnorr-signatures-sch91|Schnorr identification ⇒ Schnorr signatures (Fiat–Shamir)]]
- [[lpn-low-noise-and-ddh-to-nizk-argument-for-np-bkm20|Low-noise LPN + DDH ⇒ NIZK argument for NP]]
- [[lwe-to-nizk-ps19|LWE ⇒ NIZK]]
- [[polynomial-ratio-lwe-to-barg-for-np-cjj21|LWE with polynomial ratio ⇒ BARG for NP]]
- [[polynomial-ratio-lwe-to-snarg-for-p-cjj21|LWE with polynomial ratio ⇒ SNARG for P]]
- [[subexponential-ddh-to-nizk-argument-for-np-jj21|Sub-exponential DDH ⇒ NIZK argument for NP]]
- [[subexponential-ddh-to-ppad-hardness-klv23|Sub-exponential DDH ⇒ PPAD hardness]]
- [[subexponential-lwe-to-ppad-hardness-jkkz21|Sub-exponential LWE ⇒ PPAD hardness]]
- [[succinct-state-restoration-iop-to-transparent-succinct-argument-bcs16|Succinct state-restoration-sound IOP ⇒ STARK (BCS transform)]]

<!-- END GENERATED participates-in -->
