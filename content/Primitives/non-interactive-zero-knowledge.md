---
type: primitive
status: stub
aliases:
  - NIZK
  - Non-interactive zero-knowledge
  - NIZK proof
  - NIZK argument
title: Non-interactive zero-knowledge
id: nizk
variants:
  simulation-sound-nizk: "#simulation-sound-nizk-ss-nizk"
---

# Non-interactive zero-knowledge

A _non-interactive zero-knowledge (NIZK) proof_ allows a prover to convince a verifier that a statement $x \in L$ with a single message (no interaction), typically in the **common reference string (CRS) model** where both parties share a trusted public string sampled by a setup algorithm. Introduced by Blum, Feldman, and Micali — [[BFM88 - Non-interactive zero-knowledge and its applications|BFM88]].

## Syntax

A NIZK proof system for language $L$ is a tuple of efficient algorithms $\mathsf{NIZK} = (\Setup, \Prove, \Vrfy)$:

- $\Setup(1^\secpar) \to \crs,$ samples a common reference string $\crs,$
- $\Prove(\crs, x, w) \to \pi,$ takes a statement $x \in L$ with witness $w$ and outputs a proof $\pi,$
- $\Vrfy(\crs, x, \pi) \to \bits,$ deterministically verifies the proof.

## Properties

### Completeness

For all $x \in L$ with witness $w$, $\Vrfy(\crs, x, \Prove(\crs, x, w)) = 1$ with probability 1 over $\crs \gets \Setup(1^\secpar)$.

### Soundness / Argument

For all $P^*$, $\Pr\!\left[\Vrfy(\crs, x, \pi) = 1 \wedge x \notin L\right] \le \negl(\secpar)$ over $\crs \gets \Setup(1^\secpar)$ and $(x, \pi) \gets P^*(\crs)$.

If soundness holds only against efficient provers (using computational hardness), the system is called a **NIZK argument**.

### Zero-knowledge

There exists an efficient simulator $(\Sim_1, \Sim_2)$ where $\Sim_1(1^\secpar) \to (\crs, \td)$ outputs a simulated CRS and trapdoor, and $\Sim_2(\td, x) \to \pi$ simulates proofs, such that real and simulated $(crs, \pi)$ pairs are computationally indistinguishable.

# Variations

## Simulation-sound NIZK (SS-NIZK)

An SS-NIZK remains sound even against adversaries who have seen simulated proofs. This stronger notion is essential for constructing CCA-secure encryption from NIZK.

## zk-SNARK

A **Succinct Non-interactive ARgument of Knowledge (zk-SNARK)** is a NIZK argument with the additional properties that:

- The proof $\pi$ is short (polylogarithmic in the circuit size)
- Verification is fast (polynomial in $\secpar$ and $|x|$, polylogarithmic in the circuit size) — [[BCCT13 - Recursive Composition and Bootstrapping for SNARKs and Proof-Carrying Data|BCCT13]]
- The prover has knowledge soundness (a witness can be extracted)

See [[succinct-argument|SNARKs]] for more detail.

## NIZK in the random oracle model

Via the [[fiat-shamir-heuristic|Fiat-Shamir heuristic]], any [[zero-knowledge-proof|sigma protocol]] with a superpolynomial-size challenge space can be compiled to a NIZK argument in the random oracle model by replacing the verifier's random challenge with a hash of the statement and the prover's commitment — [[FS86 - How to Prove Yourself Practical Solutions to Identification and Signature Problems|FS86]].

# Other results

- [[rsa-to-tdp-rsa78|RSA ⇒ TDP]]
- [[tdp-to-nizk-bfm88|TDP ⇒ NIZK]]
- [[hash-function-and-io-to-nizk-sw14|Hash function + iO ⇒ NIZK]]
- [[rom-and-zkp-to-nizk-fs86|ROM + ZKP ⇒ NIZK]] — [[FS86 - How to Prove Yourself Practical Solutions to Identification and Signature Problems|FS86]]
- [[no-fiat-shamir-to-nizk-gk03|No fixed-construction reduction from Fiat-Shamir to NIZK]]
- [[nizk-to-com|NIZK ⇒ COM]]
- [[bdh-to-nizk-gro16|BDH ⇒ NIZK]]
- NIZK can be used to convert CPA-secure [[public-key-encryption|PKE]] to CCA-secure PKE — [[BFM88 - Non-interactive zero-knowledge and its applications|BFM88]]
- [[lwe-to-lattice-based-signatures|LWE ⇒ Lattice-based signatures]]

<!-- BEGIN GENERATED participates-in f97e90c0ebf0 -->

## Participates in

**Builds on Non-interactive zero-knowledge**

- [[arithmetization-and-nizk-and-pcs-to-snark|Arithmetization + NIZK + PCS ⇒ SNARK]]
- [[nizk-to-com|NIZK ⇒ COM]]

**Produces Non-interactive zero-knowledge**

- [[bdh-to-nizk-gro16|BDH ⇒ NIZK]]
- [[fiat-shamir-and-honest-verifier-zk-hvzk-to-nizk|HVZK ⇒ NIZK (Fiat–Shamir)]]
- [[hash-function-and-io-to-nizk-sw14|Hash function + iO ⇒ NIZK]]
- [[interactive-protocol-and-rom-to-nizk|interactive protocol + ROM ⇒ NIZK]]
- [[pcs-to-nizk|PCS ⇒ NIZK]]
- [[rom-and-zkp-to-nizk-fs86|ROM + ZKP ⇒ NIZK]]
- [[snark-to-nizk|SNARK ⇒ NIZK]]
- [[sxdh-symmetric-external-diffie-hellman-to-nizk|SXDH (Symmetric External Diffie-Hellman) ⇒ NIZK]]
- [[tdp-to-nizk-bfm88|TDP ⇒ NIZK]]
- [[zkp-to-nizk-fs86|ZKP ⇒ NIZK]]

**Barriers**

- [[no-fiat-shamir-to-nizk-gk03|No fixed-construction reduction from Fiat-Shamir to NIZK]]

<!-- END GENERATED participates-in -->
