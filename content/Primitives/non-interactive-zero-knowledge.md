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
  statistically-simulation-sound-nizk: "#statistically-simulation-sound-nizk-sss-nizk"
  common-random-string-nizk-proof: "#nizk-proofs-in-the-common-random-string-model"
  nizk-for-np: "#nizk-for-np"
  nizk-argument-for-np: "#nizk-arguments-for-np"
  nonadaptive-nizk-argument-for-np: "#non-adaptively-sound-nizk-arguments-for-np"
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

## NIZK for NP

A NIZK proof system for an $\classNP$-complete language, such as circuit satisfiability, and hence, composed with Levin reductions (Karp reductions that also map witnesses in polynomial time), for every language in $\classNP$. The restriction matters for constructions that prove statements about their own algorithms: for a language in $\classP$, an empty reference string and an empty proof with a verifier that decides the language are complete, sound and zero-knowledge with no assumption — standard.

### NIZK arguments for NP

A NIZK argument for an $\classNP$-complete language: soundness holds only against efficient provers, which still choose the statement after seeing $\crs$. Every [[#NIZK for NP|NIZK proof system for NP]] is one.

#### Non-adaptively sound NIZK arguments for NP

A NIZK argument for an $\classNP$-complete language whose soundness holds only against efficient provers that fix the false statement $x$ before $\crs$ is sampled. Puncturing arguments that hard-wire the false statement $x$ into a hybrid reference string prove this notion directly; the Sahai–Waters argument was shown only non-adaptively sound, and WW24 obtain adaptive soundness for a succinct variant from sub-exponentially secure iO and one-way functions together with polynomial hardness of discrete logarithms or factoring, by complexity leveraging — [[WW24 - Adaptively-Sound Succinct Arguments for NP from Indistinguishability Obfuscation|WW24]].

## NIZK proofs in the common random string model

A [[#NIZK for NP|NIZK proof system for NP]] whose $\Setup$ outputs a uniformly random string and whose soundness holds against unbounded provers that choose the statement after seeing $\crs$ — [[FLS90 - Multiple Non-Interactive Zero Knowledge Proofs Based on a Single Random String|FLS90]].

## Simulation-sound NIZK (SS-NIZK)

An SS-NIZK remains sound even against adversaries who have seen simulated proofs. This stronger notion is essential for constructing CCA-secure encryption from NIZK.

### Statistically simulation-sound NIZK (SSS-NIZK)

A complete and statistically sound non-interactive proof system $\mathsf{NIZK} = (\Setup, \Prove, \Vrfy)$ for an $\classNP$ relation with language $L$, together with an efficient simulator whose first stage $\Sim_1(1^\secpar, x) \to (\crs, \td)$ receives the statement $x$ it simulates a proof for. Zero knowledge holds for each fixed $x \in L$ with witness $w$: the pair $(\crs, \pi)$ with $\crs \gets \Setup(1^\secpar)$ and $\pi \gets \Prove(\crs, x, w)$ is [[indistinguishability#computational-indistinguishability|computationally indistinguishable]] from the pair with $(\crs, \td) \gets \Sim_1(1^\secpar, x)$ and $\pi \gets \Sim_2(\crs, \td, x)$. Soundness holds against computationally unbounded adversaries given the simulated proof for $x$, which may be false — [[GGHRSW13 - Candidate indistinguishability obfuscation and functional encryption for all circuits|GGHRSW13]].

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{sss}}_{\mathsf{NIZK},\calA}(\secpar)$}
\begin{algorithmic}
\State $(x, \stA) \gets \calA(1^\secpar)$
\State $(\crs, \td) \gets \Sim_1(1^\secpar, x)$; $\pi \gets \Sim_2(\crs, \td, x)$
\State $(x', \pi') \gets \calA(\crs, \pi, \stA)$
\Return $[x' \ne x \wedge x' \notin L \wedge \Vrfy(\crs, x', \pi') = 1]$
\end{algorithmic}
\end{algorithm}
```

A NIZK proof system $\mathsf{NIZK}$ with simulator $(\Sim_1, \Sim_2)$ is **statistically simulation-sound** if for all computationally unbounded $\calA$,

$$
\Adv^{\mathrm{sss}}_{\mathsf{NIZK},\calA}(\secpar) := \Pr\!\left[\Game^{\mathrm{sss}}_{\mathsf{NIZK},\calA}(\secpar) = 1\right]
$$

is negligible. An unbounded $\calA$ outputs an accepting proof of a false $x' \ne x$ whenever one exists, so the condition bounds, uniformly over statements $x$, the probability over the simulator's coins that one exists, which is the form in which [[GGHRSW13 - Candidate indistinguishability obfuscation and functional encryption for all circuits|GGHRSW13]] state it. The simulated reference string depends on $x$, which is fixed before $\crs$ is sampled, and $\calA$ sees one simulated proof.

## zk-SNARK

A **Succinct Non-interactive ARgument of Knowledge (zk-SNARK)** is a NIZK argument with the additional properties that:

- The proof $\pi$ is short (polylogarithmic in the circuit size)
- Verification is fast (polynomial in $\secpar$ and $|x|$, polylogarithmic in the circuit size) — [[BCCT13 - Recursive Composition and Bootstrapping for SNARKs and Proof-Carrying Data|BCCT13]]
- The prover has knowledge soundness (a witness can be extracted)

See [[succinct-argument|SNARKs]] for more detail.

## NIZK in the random oracle model

Via the [[fiat-shamir-heuristic|Fiat-Shamir heuristic]], any [[sigma-protocol|sigma protocol]] with a superpolynomial-size challenge space can be compiled to a NIZK argument in the random oracle model by replacing the verifier's random challenge with a hash of the statement and the prover's commitment — [[FS86 - How to Prove Yourself Practical Solutions to Identification and Signature Problems|FS86]].

# Other results

- [[rsa-to-tdp-rsa78|RSA ⇒ TDP]]
- [[tdp-to-nizk-bfm88|Doubly enhanced certified TDP ⇒ NIZK]]
- [[hash-function-and-io-to-nizk-sw14|OWF + iO ⇒ Non-adaptively sound NIZK argument]]
- [[fiat-shamir-and-honest-verifier-zk-hvzk-to-nizk|HVZK ⇒ NIZK (Fiat–Shamir)]] — [[FS86 - How to Prove Yourself Practical Solutions to Identification and Signature Problems|FS86]]
- [[no-fiat-shamir-to-nizk-gk03|No fixed-construction reduction from Fiat-Shamir to NIZK]]
- [[bdh-to-nizk-gro16|DLIN ⇒ NIZK]]
- NIZK can be used to convert CPA-secure [[public-key-encryption|PKE]] to CCA-secure PKE — [[BFM88 - Non-interactive zero-knowledge and its applications|BFM88]]
- [[lwe-to-nizk-ps19|LWE ⇒ NIZK]]

<!-- BEGIN GENERATED participates-in 9825f9e47421 -->

## Participates in

**Builds on Non-interactive zero-knowledge**

- [[common-random-string-nizk-proof-to-nizk|NIZK proofs with a common random string ⇒ NIZK]] (via [[non-interactive-zero-knowledge#nizk-proofs-in-the-common-random-string-model|NIZK proofs in the common random string model]])
- [[hash-function-and-io-to-fe-sw14|iO + PKE + SS-NIZK ⇒ FE]] (via [[non-interactive-zero-knowledge#statistically-simulation-sound-nizk-sss-nizk|Statistically simulation-sound NIZK (SSS-NIZK)]])
- [[nizk-argument-for-np-to-nonadaptive-nizk-argument-for-np|NIZK argument for NP ⇒ Non-adaptively sound NIZK argument for NP]] (via [[non-interactive-zero-knowledge#nizk-arguments-for-np|NIZK arguments for NP]])
- [[nizk-for-np-to-nizk|NIZK for NP ⇒ NIZK]] (via [[non-interactive-zero-knowledge#nizk-for-np|NIZK for NP]])
- [[nizk-for-np-to-nizk-argument-for-np|NIZK proof for NP ⇒ NIZK argument for NP]] (via [[non-interactive-zero-knowledge#nizk-for-np|NIZK for NP]])
- [[nizk-to-zap-dn00|NIZK ⇒ Zaps (Dwork–Naor)]] (via [[non-interactive-zero-knowledge#nizk-proofs-in-the-common-random-string-model|NIZK proofs in the common random string model]])
- [[pke-cpa-security-and-nizk-to-pke-cca1-security-ny90|CPA-secure PKE + NIZK ⇒ CCA1-secure PKE (Naor–Yung)]] (via [[non-interactive-zero-knowledge#nizk-for-np|NIZK for NP]])
- [[pke-cpa-security-and-nizk-to-pke-cca2-security-ddn91|CPA-secure PKE + NIZK ⇒ CCA2-secure PKE (DDN, Sahai)]] (via [[non-interactive-zero-knowledge#nizk-for-np|NIZK for NP]])
- [[subexponential-modulus-lwe-and-nizk-argument-for-np-to-two-round-mpc-mw16|LWE + NIZK ⇒ Two-round MPC in the CRS model (Mukherjee–Wichs)]] (via [[non-interactive-zero-knowledge#nizk-arguments-for-np|NIZK arguments for NP]])

**Produces Non-interactive zero-knowledge**

- [[circular-secure-fhe-to-nizk-argument-for-np-cch19|Circular-secure FHE ⇒ NIZK argument for NP]] (via [[non-interactive-zero-knowledge#nizk-arguments-for-np|NIZK arguments for NP]])
- [[common-random-string-nizk-proof-to-nizk|NIZK proofs with a common random string ⇒ NIZK]] (via [[non-interactive-zero-knowledge#nizk-for-np|NIZK for NP]])
- [[bdh-to-nizk-gro16|Bilinear pairing + DLIN ⇒ NIZK]] (via [[non-interactive-zero-knowledge#nizk-for-np|NIZK for NP]])
- [[fiat-shamir-and-honest-verifier-zk-hvzk-to-nizk|HVZK ⇒ NIZK (Fiat–Shamir)]]
- [[hash-function-and-io-to-nizk-sw14|OWF + iO ⇒ Non-adaptively sound NIZK argument]] (via [[non-interactive-zero-knowledge#non-adaptively-sound-nizk-arguments-for-np|Non-adaptively sound NIZK arguments for NP]])
- [[lpn-low-noise-and-ddh-to-nizk-argument-for-np-bkm20|Low-noise LPN + DDH ⇒ NIZK argument for NP]] (via [[non-interactive-zero-knowledge#nizk-arguments-for-np|NIZK arguments for NP]])
- [[lwe-to-nizk-ps19|LWE ⇒ NIZK]] (via [[non-interactive-zero-knowledge#nizk-for-np|NIZK for NP]])
- [[nizk-argument-for-np-to-nonadaptive-nizk-argument-for-np|NIZK argument for NP ⇒ Non-adaptively sound NIZK argument for NP]] (via [[non-interactive-zero-knowledge#non-adaptively-sound-nizk-arguments-for-np|Non-adaptively sound NIZK arguments for NP]])
- [[nizk-for-np-to-nizk|NIZK for NP ⇒ NIZK]]
- [[nizk-for-np-to-nizk-argument-for-np|NIZK proof for NP ⇒ NIZK argument for NP]] (via [[non-interactive-zero-knowledge#nizk-arguments-for-np|NIZK arguments for NP]])
- [[qr-to-common-random-string-nizk-proof-bdmp91|QR ⇒ NIZK proofs with a common random string (Blum–De Santis–Micali–Persiano)]] (via [[non-interactive-zero-knowledge#nizk-proofs-in-the-common-random-string-model|NIZK proofs in the common random string model]])
- [[snark-to-nizk|Sublinear SNARG + OWF ⇒ NIZK argument]] (via [[non-interactive-zero-knowledge#non-adaptively-sound-nizk-arguments-for-np|Non-adaptively sound NIZK arguments for NP]])
- [[subexponential-ddh-to-nizk-argument-for-np-jj21|Sub-exponential DDH ⇒ NIZK argument for NP]] (via [[non-interactive-zero-knowledge#nizk-arguments-for-np|NIZK arguments for NP]])
- [[subgroup-decision-to-nonadaptive-nizk-argument-for-np-gos06a|Subgroup decision ⇒ Perfect NIZK arguments for NP]] (via [[non-interactive-zero-knowledge#non-adaptively-sound-nizk-arguments-for-np|Non-adaptively sound NIZK arguments for NP]])
- [[sxdh-symmetric-external-diffie-hellman-to-nizk|SXDH (Symmetric External Diffie-Hellman) ⇒ NIZK]]
- [[tdp-to-nizk-bfm88|Doubly enhanced certified TDP ⇒ NIZK]] (via [[non-interactive-zero-knowledge#nizk-proofs-in-the-common-random-string-model|NIZK proofs in the common random string model]])

**Barriers**

- [[no-fiat-shamir-to-nizk-gk03|No fixed-construction reduction from Fiat-Shamir to NIZK]]

<!-- END GENERATED participates-in -->
