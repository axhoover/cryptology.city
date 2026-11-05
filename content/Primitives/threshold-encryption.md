---
type: primitive
status: draft
aliases:
  - TPKE
  - Threshold encryption
  - Threshold public-key encryption
title: Threshold encryption
id: threshold-encryption
variants:
  tpke-cpa-security: "#cpa-security"
  tpke-cca-security: "#cca-security"
---

# Threshold encryption

A threshold encryption scheme distributes the decryption key of a [[public-key-encryption|public-key encryption]] scheme among $n$ parties so that any $t$ of them can jointly decrypt a ciphertext, while any $t-1$ of them learn nothing about the plaintext. Each party computes a decryption share from its key share alone, and $t$ shares combine to the plaintext.

## Syntax

A $(t, n)$-threshold encryption scheme, for integers $1 \le t \le n$, is a tuple of efficient algorithms $\mathsf{TPKE} = (\KeyGen, \Enc, \mathsf{ShareDec}, \mathsf{ShareVrfy}, \Combine)$ with message space $\calM$:

- $\KeyGen(1^\secpar, n, t) \to (\pk, \vk, \sk_1, \ldots, \sk_n)$, a randomized algorithm, run by a trusted dealer, outputting a public key $\pk$, a public verification key $\vk$, and a key share $\sk_i$ for each party $i \in [n]$,
- $\Enc(\pk, m) \to c$, a randomized algorithm encrypting a message $m \in \calM$,
- $\mathsf{ShareDec}(\pk, i, \sk_i, c) \to \mu_i$, a possibly randomized algorithm outputting party $i$'s decryption share $\mu_i$ of $c$, or $\bot$,
- $\mathsf{ShareVrfy}(\pk, \vk, i, c, \mu_i) \to \beta$, a deterministic algorithm outputting a bit $\beta \in \bits$ that indicates whether $\mu_i$ is a valid decryption share of $c$ for party $i$,
- $\Combine(\pk, \vk, c, \{\mu_i\}_{i \in T}) \to m$, a deterministic algorithm which takes decryption shares from a set $T \subseteq [n]$ of $t$ parties, outputting a message $m \in \calM$ or $\bot$.

In dealerless schemes the parties generate $\pk$, $\vk$ and their key shares with a [[distributed-key-generation|distributed key generation]] protocol instead of a dealer.

## Properties

### Correctness

$\mathsf{TPKE}$ is $(1-\varepsilon)$-**correct** if for all $\secpar \in \NN$, $1 \le t \le n$, $m \in \calM$ and $T \subseteq [n]$ with $|T| = t$,

$$
\Pr\!\left[\Combine(\pk, \vk, c, \{\mu_i\}_{i \in T}) = m \text{ and } \mathsf{ShareVrfy}(\pk, \vk, i, c, \mu_i) = 1 \text{ for all } i \in T\right] \ge 1 - \varepsilon,
$$

over $(\pk, \vk, \sk_1, \ldots, \sk_n) \gets \KeyGen(1^\secpar, n, t)$, $c \gets \Enc(\pk, m)$ and $\mu_i \gets \mathsf{ShareDec}(\pk, i, \sk_i, c)$. When $\varepsilon = 0$, $\mathsf{TPKE}$ is perfectly correct.

**Robustness** asks that $t-1$ corrupted parties cannot make decryption err: a decryption share is checked with $\mathsf{ShareVrfy}$, and any $t$ accepted shares of a ciphertext combine to the message that $t$ honestly computed shares give, except with negligible probability — standard. When $n \ge 2t-1$, at least $t$ parties are honest, so the corrupted parties also cannot make decryption fail.

### CPA security

The adversary corrupts a set $S$ of $t-1$ parties before the keys are generated (static corruption) and receives their key shares. An encryption oracle $\calE$ returns honest encryptions of messages of its choice together with the decryption shares of every uncorrupted party. An admissible adversary submits $m_0, m_1 \in \calM$ with $|m_0| = |m_1|$; otherwise the length of $c^*$ can reveal $b$.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{cpa}}_{\mathsf{TPKE},\calA}(\secpar, n, t)$}
\begin{algorithmic}
\State $(S, \stA) \gets \calA(1^\secpar, n, t)$
\Comment{Static corruption: $S \subseteq [n]$, $|S| = t - 1$}
\State $(\pk, \vk, \sk_1, \ldots, \sk_n) \gets \KeyGen(1^\secpar, n, t)$; $b \getsr \bits$
\State $(m_0, m_1, \stA) \gets \calA^{\calE}(\pk, \vk, (\sk_i)_{i \in S}, \stA)$
\Comment{$m_0, m_1 \in \calM$ and $|m_0| = |m_1|$}
\State $c^* \gets \Enc(\pk, m_b)$
\State $b' \gets \calA^{\calE}(c^*, \stA)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

```pseudocode
\begin{algorithm}
\algname{Oracle}
\caption{$\calE(m)$}
\begin{algorithmic}
\State $c \gets \Enc(\pk, m)$
\State $\mu_i \gets \mathsf{ShareDec}(\pk, i, \sk_i, c)$ for each $i \notin S$
\Return $(c, (\mu_i)_{i \notin S})$
\end{algorithmic}
\end{algorithm}
```

A threshold encryption scheme $\mathsf{TPKE}$ is **CPA-secure** if for all polynomially bounded $n = n(\secpar)$ and $t = t(\secpar)$ with $1 \le t \le n$ and all admissible efficient $\calA$,

$$
\Adv^{\mathrm{cpa}}_{\mathsf{TPKE},\calA}(\secpar, n, t) := \left|2\Pr\!\left[\Game^{\mathrm{cpa}}_{\mathsf{TPKE},\calA}(\secpar, n, t) = 1\right] - 1\right|
$$

is negligible. Without $\calE$ the game is the [[public-key-encryption#cpa-security|CPA game]] of $(\KeyGen, \Enc)$ with $t-1$ key shares revealed; $\calE$ also reveals the decryption shares of honestly generated ciphertexts, as published when such ciphertexts are decrypted — standard.

### CCA security

In a chosen-ciphertext game following [[SG98 - Securing Threshold Cryptosystems against Chosen Ciphertext Attack|SG98]], stated here without its labels, $\calA$ instead has an oracle $\calD$ that returns the decryption shares of every uncorrupted party on any ciphertext of its choice. An admissible adversary submits equal-length messages in $\calM$ and, after receiving $c^*$, may not query $\calD$ on $c^*$: one uncorrupted share of $c^*$ together with the $t-1$ corrupted key shares decrypts it.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{cca}}_{\mathsf{TPKE},\calA}(\secpar, n, t)$}
\begin{algorithmic}
\State $(S, \stA) \gets \calA(1^\secpar, n, t)$
\Comment{Static corruption: $S \subseteq [n]$, $|S| = t - 1$}
\State $(\pk, \vk, \sk_1, \ldots, \sk_n) \gets \KeyGen(1^\secpar, n, t)$; $b \getsr \bits$
\State $\calD(c) := (\mathsf{ShareDec}(\pk, i, \sk_i, c))_{i \notin S}$
\State $(m_0, m_1, \stA) \gets \calA^{\calD}(\pk, \vk, (\sk_i)_{i \in S}, \stA)$
\Comment{Phase 1: $\calD$ unrestricted; $m_0, m_1 \in \calM$, $|m_0| = |m_1|$}
\State $c^* \gets \Enc(\pk, m_b)$
\State $b' \gets \calA^{\calD}(c^*, \stA)$
\Comment{Phase 2: $\calA$ may not query $\calD$ on $c^*$}
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

A threshold encryption scheme $\mathsf{TPKE}$ is **CCA-secure** if for all polynomially bounded $n = n(\secpar)$ and $t = t(\secpar)$ with $1 \le t \le n$ and all admissible efficient $\calA$,

$$
\Adv^{\mathrm{cca}}_{\mathsf{TPKE},\calA}(\secpar, n, t) := \left|2\Pr\!\left[\Game^{\mathrm{cca}}_{\mathsf{TPKE},\calA}(\secpar, n, t) = 1\right] - 1\right|
$$

is negligible. CCA security implies CPA security ([[tpke-cca-security-to-tpke-cpa-security|TPKE CCA ⇒ TPKE CPA]]): an adversary in the CCA game answers its own $\calE$ queries by encrypting and querying $\calD$ — folklore.

# Variations

## Threshold FHE

In [[homomorphic-encryption#threshold-fhe|threshold FHE]] the decryption shares are computed on evaluated ciphertexts of a fully homomorphic scheme, and combine to the plaintext while revealing nothing beyond it. A threshold FHE scheme gives a universal thresholdizer, which turns other schemes into threshold schemes — [[BGG+18 - Threshold Cryptosystems from Threshold Fully Homomorphic Encryption|BGG+18]].

# Other results

- Threshold cryptosystems originate with [[DF89 - Threshold Cryptosystems|DF89]].
- Threshold Paillier encryption, with a trusted dealer and decryption shares carrying non-interactive proofs of correctness, is CPA-secure against an active, static adversary under [[decisional-composite-residuosity|DCR]] in the random oracle model ([[dkg-and-he-to-tpke|DCR ⇒ TPKE]]) — [[FPS00 - Sharing Decryption in the Context of Voting or Lotteries|FPS00]]; [[DJ01 - A Generalisation, a Simplification and Some Applications of Paillier's Probabilistic Public-Key System|DJ01]] give a threshold variant of their generalisation of Paillier's scheme.
- [[SG98 - Securing Threshold Cryptosystems against Chosen Ciphertext Attack|SG98]] give two non-interactive threshold schemes in prime-order groups, TDH1 and TDH2, and prove them CCA-secure against static corruption in the random oracle model.

<!-- BEGIN GENERATED participates-in a60f7e6791fd -->

## Participates in

**Builds on Threshold encryption**

- [[tpke-cca-security-to-tpke-cpa-security|TPKE CCA Security ⇒ TPKE CPA Security]] (via [[threshold-encryption#cca-security|CCA security]])

**Produces Threshold encryption**

- [[dkg-and-he-to-tpke|DCR ⇒ TPKE]]
- [[tpke-cca-security-to-tpke-cpa-security|TPKE CCA Security ⇒ TPKE CPA Security]] (via [[threshold-encryption#cpa-security|CPA security]])

<!-- END GENERATED participates-in -->
