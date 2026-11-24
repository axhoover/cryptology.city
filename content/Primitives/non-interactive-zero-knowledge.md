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
  statistically-simulation-sound-nizk-for-np: "#statistically-simulation-sound-nizk-for-np"
  common-random-string-nizk-proof: "#nizk-proofs-in-the-common-random-string-model"
  nizk-for-np: "#nizk-for-np"
  adaptive-zk-nizk-for-np: "#adaptively-zero-knowledge-nizk-for-np"
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

For all computationally unbounded $P^*$, $\Pr\!\left[\Vrfy(\crs, x, \pi) = 1 \wedge x \notin L\right] \le \negl(\secpar)$ over $\crs \gets \Setup(1^\secpar)$ and $(x, \pi) \gets P^*(\crs)$; $P^*$ chooses the statement after seeing $\crs$.

If soundness holds only against efficient provers, the system is a **NIZK argument**. As an object, NIZK denotes a proof system, sound against unbounded provers.

### Zero-knowledge

A simulator $\Sim(1^\secpar, x) \to (\crs, \pi)$ receives the statement and no witness and outputs a reference string together with a proof. In the following game $R$ is the $\classNP$ relation of $L$.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{zk}}_{\mathsf{NIZK},\calA}(\secpar)$}
\begin{algorithmic}
\State $(x, w, \stA) \gets \calA(1^\secpar)$; $b \getsr \bits$
\Comment{$\calA$ must output $(x, w)$ with $R(x, w) = 1$, before $\crs$ is sampled}
\State $\crs_0 \gets \Setup(1^\secpar)$; $\pi_0 \gets \Prove(\crs_0, x, w)$
\State $(\crs_1, \pi_1) \gets \Sim(1^\secpar, x)$
\State $b' \gets \calA(\stA, \crs_b, \pi_b)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

An adversary is admissible if it always outputs $(x, w)$ with $R(x, w) = 1$; without the constraint $\Prove$ is unspecified on its input while $\Sim$ still outputs a proof. A NIZK proof system $\mathsf{NIZK}$ is **zero-knowledge** if there is an efficient simulator $\Sim$ such that for all efficient admissible $\calA$,

$$
\Adv^{\mathrm{zk}}_{\mathsf{NIZK},\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{zk}}_{\mathsf{NIZK},\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible. $\calA$ fixes $(x, w)$ before $\crs$ is sampled and sees one proof, and the simulated $\crs_1$ may depend on $x$: this is non-adaptive single-theorem zero knowledge, the basic notion, which asks only that the simulator's output be indistinguishable from a reference string paired with a proof — [[Gol08 - Computational Complexity A Conceptual Perspective|Gol08]] (Appendix C.4.4.2). Against [[uniform-and-non-uniform-adversaries|non-uniform]] adversaries, which can be taken deterministic, it says that $(\crs, \Prove(\crs, x, w))$ and $\Sim(1^\secpar, x)$ are computationally indistinguishable for every polynomially bounded sequence of pairs $(x, w)$ with $R(x, w) = 1$ — standard.

Stronger notions let $\calA$ choose $(x, w)$ after seeing $\crs$, with a simulator that outputs $\crs$ before it reads $x$ ([[#Adaptively zero-knowledge NIZK for NP|adaptive zero knowledge]]), or give $\calA$ proofs of several statements under one reference string (multi-theorem zero knowledge). The definitions of [[BDMP91 - Noninteractive Zero-Knowledge|BDMP91]] and of the journal version of [[FLS90 - Multiple Non-Interactive Zero Knowledge Proofs Based on a Single Random String|FLS90]] do not require the two-stage simulator explicitly — [[BMW03 - Foundations of Group Signatures Formal Definitions, Simplified Requirements, and a Construction Based on General Assumptions|BMW03]] (Section 4.1).

Zero knowledge implies witness indistinguishability under an honestly sampled reference string: for $(x, w_0, w_1)$ with $R(x, w_0) = R(x, w_1) = 1$ chosen before $\crs$ is sampled, $(\crs, \Prove(\crs, x, w_0))$ and $(\crs, \Prove(\crs, x, w_1))$ are computationally indistinguishable, each being indistinguishable from $\Sim(1^\secpar, x)$ — standard. The zap of [[nizk-to-zap-dn00|NIZK ⇒ Zaps (Dwork–Naor)]] needs no more zero knowledge than this: its prover proves one statement under each reference string $\rho_i \oplus r$, a hybrid switches the witness one proof at a time, and a distinguisher given $(\crs, \pi)$ sets $r := \crs \oplus \rho_i$ and computes the other proofs itself — standard.

TODO: read from [[MW16 - Two Round Multiparty Computation via Multi-key FHE|MW16]] which zero-knowledge notion [[subexponential-modulus-lwe-and-nizk-argument-for-np-to-two-round-mpc-mw16|LWE + NIZK ⇒ Two-round MPC in the CRS model (Mukherjee–Wichs)]] needs: whether the statements its parties prove are fixed before $\crs$ is sampled, and how many proofs share one reference string.

# Variations

## NIZK for NP

A NIZK proof system for an $\classNP$-complete language, such as circuit satisfiability, and hence, composed with Levin reductions (Karp reductions that also map witnesses in polynomial time), for every language in $\classNP$. The restriction matters for constructions that prove statements about their own algorithms: for a language in $\classP$, an empty reference string and an empty proof with a verifier that decides the language are complete, sound and zero-knowledge with no assumption — standard.

### Adaptively zero-knowledge NIZK for NP

A [[#NIZK for NP|NIZK proof system for NP]], with $R$ the $\classNP$ relation of its language $L$, that is zero-knowledge for a statement chosen after seeing $\crs$: there is an efficient simulator $(\Sim_1, \Sim_2)$, with $\Sim_1(1^\secpar) \to (\crs, \td)$ and $\Sim_2(\td, x) \to \pi$, for the following game.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{azk}}_{\mathsf{NIZK},\calA}(\secpar)$}
\begin{algorithmic}
\State $\crs_0 \gets \Setup(1^\secpar)$; $(\crs_1, \td) \gets \Sim_1(1^\secpar)$; $b \getsr \bits$
\State $(x, w, \stA) \gets \calA(1^\secpar, \crs_b)$
\Comment{$\calA$ must output $(x, w)$ with $R(x, w) = 1$}
\State $\pi_0 \gets \Prove(\crs_0, x, w)$; $\pi_1 \gets \Sim_2(\td, x)$
\State $b' \gets \calA(\stA, \pi_b)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

An adversary is admissible if it always outputs $(x, w)$ with $R(x, w) = 1$; without the constraint $\Prove$ is unspecified on $x \notin L$ while $\Sim_2$ still outputs a proof. A NIZK proof system $\mathsf{NIZK}$ for $R$ is **adaptively zero-knowledge** if for all efficient admissible $\calA$,

$$
\Adv^{\mathrm{azk}}_{\mathsf{NIZK},\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{azk}}_{\mathsf{NIZK},\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible. $\calA$ sees one proof, so this is single-theorem zero knowledge. As an object, an adaptively zero-knowledge NIZK for NP denotes a NIZK proof system for NP, complete and sound as above, that is adaptively zero-knowledge. It is a NIZK proof system for NP ([[adaptive-zk-nizk-for-np-to-nizk-for-np|Adaptively zero-knowledge NIZK for NP ⇒ NIZK for NP]]): $\Sim(1^\secpar, x)$ runs $\Sim_1$ and then $\Sim_2$, and an adversary that ignores $\crs$ fixes $(x, w)$ in advance.

### NIZK arguments for NP

A NIZK argument for an $\classNP$-complete language: soundness holds only against efficient provers, which still choose the statement after seeing $\crs$. Every [[#NIZK for NP|NIZK proof system for NP]] is one ([[nizk-for-np-to-nizk-argument-for-np|NIZK proof for NP ⇒ NIZK argument for NP]]).

#### Non-adaptively sound NIZK arguments for NP

A NIZK argument for an $\classNP$-complete language whose soundness holds only against efficient provers that fix the false statement $x$ before $\crs$ is sampled. Puncturing arguments that hard-wire the false statement $x$ into a hybrid reference string prove this notion directly; the Sahai–Waters argument was shown only non-adaptively sound ([[hash-function-and-io-to-nizk-sw14|OWF + iO ⇒ Non-adaptively sound NIZK argument]]), and WW24 give an adaptively sound [[succinct-argument|SNARG]] for NP in the plain model from sub-exponentially hard iO and one-way functions together with polynomial hardness of discrete logarithms or factoring — [[WW24 - Adaptively-Sound Succinct Arguments for NP from Indistinguishability Obfuscation|WW24]].

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

#### Statistically simulation-sound NIZK for NP

For every $\classNP$ relation $R$, an [[#Statistically simulation-sound NIZK (SSS-NIZK)|SSS-NIZK]] for $R$. [[GGHRSW13 - Candidate indistinguishability obfuscation and functional encryption for all circuits|GGHRSW13]] need it for the relation, fixed by a public-key encryption scheme, of ciphertext pairs that encrypt one message under two public keys. Unlike soundness and zero knowledge, simulation soundness does not transfer from an $\classNP$-complete relation along an arbitrary Levin reduction $f$: a false $x' \ne x$ with $f(x') = f(x)$ is accepted with the simulated proof for $x$ whenever $x$ is — standard.

## zk-SNARK

A **Succinct Non-interactive ARgument of Knowledge (zk-SNARK)** is a NIZK argument with the additional properties that:

- The proof $\pi$ is short (polylogarithmic in the circuit size)
- Verification is fast (polynomial in $\secpar$ and $|x|$, polylogarithmic in the circuit size) — [[BCCT13 - Recursive Composition and Bootstrapping for SNARKs and Proof-Carrying Data|BCCT13]]
- The prover has knowledge soundness (a witness can be extracted)

See [[succinct-argument|SNARKs]] for more detail.

## NIZK in the random oracle model

The [[fiat-shamir-heuristic|Fiat–Shamir transform]] — [[FS86 - How to Prove Yourself Practical Solutions to Identification and Signature Problems|FS86]] — makes a [[sigma-protocol|sigma protocol]] non-interactive by computing the challenge as a hash of the statement and the prover's commitment. With the hash a [[random-oracle-model|random oracle]], a challenge space of superpolynomial size and a commitment of min-entropy $\omega(\log \secpar)$ for every $(x, w)$, the result is a NIZK argument ([[fiat-shamir-and-honest-verifier-zk-hvzk-to-nizk|HVZK ⇒ NIZK (Fiat–Shamir)]]) — folklore. The simulator programs the oracle at the commitment of a simulated conversation, a point that the min-entropy condition leaves unqueried except with negligible probability; without the condition a distinguisher queries the oracle at a likely commitment before it asks for a proof — standard.

# Other results

- [[rsa-to-tdp-rsa78|RSA ⇒ TDP]]
- [[tdp-to-nizk-bfm88|Doubly enhanced certified TDP ⇒ NIZK]]
- [[hash-function-and-io-to-nizk-sw14|OWF + iO ⇒ Non-adaptively sound NIZK argument]]
- [[fiat-shamir-and-honest-verifier-zk-hvzk-to-nizk|HVZK ⇒ NIZK (Fiat–Shamir)]] — folklore, [[FKMV12 - On the Non-malleability of the Fiat-Shamir Transform|FKMV12]]
- [[no-fiat-shamir-to-nizk-gk03|No fixed-construction reduction from Fiat-Shamir to NIZK]]
- [[bdh-to-nizk-gro16|DLIN ⇒ NIZK]]
- NIZK can be used to convert CPA-secure [[public-key-encryption|PKE]] to CCA-secure PKE — [[BFM88 - Non-interactive zero-knowledge and its applications|BFM88]]
- [[lwe-to-nizk-ps19|LWE ⇒ NIZK]]

<!-- BEGIN GENERATED participates-in 4ebff839f068 -->

## Participates in

**Builds on Non-interactive zero-knowledge**

- [[adaptive-zk-nizk-for-np-to-nizk-for-np|Adaptively zero-knowledge NIZK for NP ⇒ NIZK for NP]] (via [[non-interactive-zero-knowledge#adaptively-zero-knowledge-nizk-for-np|Adaptively zero-knowledge NIZK for NP]])
- [[common-random-string-nizk-proof-to-nizk|NIZK proofs with a common random string ⇒ NIZK]] (via [[non-interactive-zero-knowledge#nizk-proofs-in-the-common-random-string-model|NIZK proofs in the common random string model]])
- [[hash-function-and-io-to-fe-sw14|iO + PKE + SS-NIZK ⇒ FE]] (via [[non-interactive-zero-knowledge#statistically-simulation-sound-nizk-for-np|Statistically simulation-sound NIZK for NP]])
- [[nizk-argument-for-np-to-nonadaptive-nizk-argument-for-np|NIZK argument for NP ⇒ Non-adaptively sound NIZK argument for NP]] (via [[non-interactive-zero-knowledge#nizk-arguments-for-np|NIZK arguments for NP]])
- [[nizk-for-np-to-nizk|NIZK for NP ⇒ NIZK]] (via [[non-interactive-zero-knowledge#nizk-for-np|NIZK for NP]])
- [[nizk-for-np-to-nizk-argument-for-np|NIZK proof for NP ⇒ NIZK argument for NP]] (via [[non-interactive-zero-knowledge#nizk-for-np|NIZK for NP]])
- [[nizk-to-zap-dn00|NIZK ⇒ Zaps (Dwork–Naor)]] (via [[non-interactive-zero-knowledge#nizk-proofs-in-the-common-random-string-model|NIZK proofs in the common random string model]])
- [[pke-cpa-security-and-nizk-to-pke-cca1-security-ny90|CPA-secure PKE + NIZK ⇒ CCA1-secure PKE (Naor–Yung)]] (via [[non-interactive-zero-knowledge#adaptively-zero-knowledge-nizk-for-np|Adaptively zero-knowledge NIZK for NP]])
- [[pke-cpa-security-and-nizk-to-pke-cca2-security-ddn91|CPA-secure PKE + NIZK ⇒ CCA2-secure PKE (DDN, Sahai)]] (via [[non-interactive-zero-knowledge#adaptively-zero-knowledge-nizk-for-np|Adaptively zero-knowledge NIZK for NP]])
- [[statistically-simulation-sound-nizk-for-np-to-statistically-simulation-sound-nizk|SSS-NIZK for NP ⇒ SSS-NIZK]] (via [[non-interactive-zero-knowledge#statistically-simulation-sound-nizk-for-np|Statistically simulation-sound NIZK for NP]])
- [[subexponential-modulus-lwe-and-nizk-argument-for-np-to-two-round-mpc-mw16|LWE + NIZK ⇒ Two-round MPC in the CRS model (Mukherjee–Wichs)]] (via [[non-interactive-zero-knowledge#nizk-arguments-for-np|NIZK arguments for NP]])

**Produces Non-interactive zero-knowledge**

- [[adaptive-zk-nizk-for-np-to-nizk-for-np|Adaptively zero-knowledge NIZK for NP ⇒ NIZK for NP]] (via [[non-interactive-zero-knowledge#nizk-for-np|NIZK for NP]])
- [[circular-secure-fhe-to-nizk-argument-for-np-cch19|Circular-secure FHE ⇒ NIZK argument for NP]] (via [[non-interactive-zero-knowledge#nizk-arguments-for-np|NIZK arguments for NP]])
- [[common-random-string-nizk-proof-to-nizk|NIZK proofs with a common random string ⇒ NIZK]] (via [[non-interactive-zero-knowledge#nizk-for-np|NIZK for NP]])
- [[bdh-to-nizk-gro16|Type 1 pairing + DLIN ⇒ NIZK]] (via [[non-interactive-zero-knowledge#nizk-for-np|NIZK for NP]])
- [[fiat-shamir-and-honest-verifier-zk-hvzk-to-nizk|HVZK ⇒ NIZK (Fiat–Shamir)]] (via [[non-interactive-zero-knowledge#nizk-arguments-for-np|NIZK arguments for NP]])
- [[hash-function-and-io-to-nizk-sw14|OWF + iO ⇒ Non-adaptively sound NIZK argument]] (via [[non-interactive-zero-knowledge#non-adaptively-sound-nizk-arguments-for-np|Non-adaptively sound NIZK arguments for NP]])
- [[lpn-low-noise-and-ddh-to-nizk-argument-for-np-bkm20|Low-noise LPN + DDH ⇒ NIZK argument for NP]] (via [[non-interactive-zero-knowledge#nizk-arguments-for-np|NIZK arguments for NP]])
- [[lwe-to-nizk-ps19|LWE ⇒ NIZK]] (via [[non-interactive-zero-knowledge#nizk-for-np|NIZK for NP]])
- [[nizk-argument-for-np-to-nonadaptive-nizk-argument-for-np|NIZK argument for NP ⇒ Non-adaptively sound NIZK argument for NP]] (via [[non-interactive-zero-knowledge#non-adaptively-sound-nizk-arguments-for-np|Non-adaptively sound NIZK arguments for NP]])
- [[nizk-for-np-to-nizk|NIZK for NP ⇒ NIZK]]
- [[nizk-for-np-to-nizk-argument-for-np|NIZK proof for NP ⇒ NIZK argument for NP]] (via [[non-interactive-zero-knowledge#nizk-arguments-for-np|NIZK arguments for NP]])
- [[qr-to-common-random-string-nizk-proof-bdmp91|QR ⇒ NIZK proofs with a common random string (Blum–De Santis–Micali–Persiano)]] (via [[non-interactive-zero-knowledge#nizk-proofs-in-the-common-random-string-model|NIZK proofs in the common random string model]])
- [[snark-to-nizk|Sublinear SNARG + OWF ⇒ NIZK argument]] (via [[non-interactive-zero-knowledge#non-adaptively-sound-nizk-arguments-for-np|Non-adaptively sound NIZK arguments for NP]])
- [[statistically-simulation-sound-nizk-for-np-to-statistically-simulation-sound-nizk|SSS-NIZK for NP ⇒ SSS-NIZK]] (via [[non-interactive-zero-knowledge#statistically-simulation-sound-nizk-sss-nizk|Statistically simulation-sound NIZK (SSS-NIZK)]])
- [[subexponential-ddh-to-nizk-argument-for-np-jj21|Sub-exponential DDH ⇒ NIZK argument for NP]] (via [[non-interactive-zero-knowledge#nizk-arguments-for-np|NIZK arguments for NP]])
- [[subgroup-decision-to-nonadaptive-nizk-argument-for-np-gos06a|Subgroup decision ⇒ Perfect NIZK arguments for NP]] (via [[non-interactive-zero-knowledge#non-adaptively-sound-nizk-arguments-for-np|Non-adaptively sound NIZK arguments for NP]])
- [[sxdh-symmetric-external-diffie-hellman-to-nizk|SXDH (Symmetric External Diffie-Hellman) ⇒ NIZK]]
- [[tdp-to-nizk-bfm88|Doubly enhanced certified TDP ⇒ NIZK]] (via [[non-interactive-zero-knowledge#nizk-proofs-in-the-common-random-string-model|NIZK proofs in the common random string model]])

**Barriers**

- [[no-fiat-shamir-to-nizk-gk03|No fixed-construction reduction from Fiat-Shamir to NIZK]]

<!-- END GENERATED participates-in -->
