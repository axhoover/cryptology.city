---
type: primitive
status: draft
aliases:
  - RE
  - Rerandomizable encryption
  - Re-randomizable encryption
title: Rerandomizable encryption
id: rerandomizable-encryption
variants:
  superpolynomially-secure-rerandomizable-encryption: "#security-against-slightly-super-polynomial-adversaries"
  statistically-rerandomizable-encryption: "#statistical-rerandomization-of-honest-ciphertexts"
  rerandomizable-rcca-encryption: "#rerandomizable-rcca-encryption"
---

# Rerandomizable encryption

An IND-CPA-secure [[public-key-encryption|public-key encryption]] scheme with an efficient public algorithm $\mathsf{ReRand}$ such that for every $\pk$ output by $\KeyGen$, every message $m$ and every ciphertext $c$ in the support of $\Enc(\pk, m)$, $\mathsf{ReRand}(\pk, c)$ is distributed exactly as $\Enc(\pk, m)$.

## Syntax

A rerandomizable encryption scheme is a tuple of efficient algorithms $\mathsf{RE} = (\KeyGen, \Enc, \Dec, \mathsf{ReRand})$ such that $(\KeyGen, \Enc, \Dec)$ is a [[public-key-encryption|PKE]] scheme with message space $\calM$ and ciphertext space $\calC$, together with

- $\mathsf{ReRand}(\pk, c) \to c'$, a randomized algorithm which takes a public key $\pk$ and a ciphertext $c \in \calC$, outputting a ciphertext $c' \in \calC$.

## Properties

### Correctness

$\mathsf{RE}$ is $(1-\varepsilon)$-**correct** if $(\KeyGen, \Enc, \Dec)$ is a $(1-\varepsilon)$-[[public-key-encryption#correctness|correct]] PKE scheme.

### CPA security

$\mathsf{RE}$ is required to be [[public-key-encryption#cpa-security|CPA-secure]] as a PKE scheme. $\mathsf{ReRand}$ takes only public inputs, so the CPA adversary can run it itself.

### Rerandomization

The adversary chooses a message knowing both keys, receives an encryption $c$ of it, and must tell a rerandomization of $c$ from an independent fresh encryption of the same message.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{rr}}_{\mathsf{RE},\calA}(\secpar)$}
\begin{algorithmic}
\State $(\sk, \pk) \gets \KeyGen(1^\secpar)$; $b \getsr \bits$
\State $(m, \stA) \gets \calA(1^\secpar, \pk, \sk)$
\Comment{$m \in \calM$}
\State $c \gets \Enc(\pk, m)$
\State $c_0 \gets \mathsf{ReRand}(\pk, c)$
\State $c_1 \gets \Enc(\pk, m)$
\Comment{Fresh coins, independent of $c$}
\State $b' \gets \calA(c, c_b, \stA)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

Let

$$
\Adv^{\mathrm{rr}}_{\mathsf{RE},\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{rr}}_{\mathsf{RE},\calA}(\secpar) = 1\right] - 1\right|.
$$

$\mathsf{RE}$ is **perfectly rerandomizable** if $\Adv^{\mathrm{rr}}_{\mathsf{RE},\calA}(\secpar) = 0$ for every $\calA$, efficient or not. Neither $\mathsf{ReRand}$ nor $\Enc$ takes $\sk$, so this holds if and only if the condition in the opening paragraph does — standard. $\mathsf{RE}$ is **computationally rerandomizable** if for all efficient $\calA$, $\Adv^{\mathrm{rr}}_{\mathsf{RE},\calA}(\secpar)$ is negligible; giving $\calA$ only $\pk$ in the game defines a weaker computational notion. All these notions concern ciphertexts output by $\Enc$; rerandomizing every $c$ with $\Dec(\sk, c) \ne \bot$ to a fresh encryption of $\Dec(\sk, c)$ is a stronger requirement.

A perfectly rerandomizable CPA-secure scheme with negligible decryption error is not [[public-key-encryption#cca-security|CCA-secure]]: $\calA$ submits $\mathsf{ReRand}(\pk, c^*)$ to the decryption oracle, which returns $m_b$ except with negligible probability, and $\mathsf{ReRand}(\pk, c^*)$, a fresh encryption of $m_b$, equals $c^*$ only with negligible probability — folklore. The RCCA game of [[#Rerandomizable RCCA encryption]] answers such replays with $\mathsf{test}$.

# Variations

## Statistical rerandomization of honest ciphertexts

An IND-CPA-secure public-key encryption scheme with an efficient public algorithm $\mathsf{ReRand}$ is **statistically rerandomizable** if for every $\pk$ output by $\KeyGen$ and every message $m$, the pair $(c, \mathsf{ReRand}(\pk, c))$ for $c \gets \Enc(\pk, m)$ is statistically close to $(c, c')$ for an independent $c' \gets \Enc(\pk, m)$ — [[BL13 - Limits of Provable Security for Homomorphic Encryption|BL13]].

## Security against slightly super-polynomial adversaries

A rerandomizable encryption scheme is **secure against slightly super-polynomial adversaries** if for some $T(\secpar) = \secpar^{\omega(1)}$ every adversary running in time $T(\secpar)$ has IND-CPA advantage at most $1/T(\secpar)$. It strengthens ordinary IND-CPA security; [[CLTV15 - Obfuscation of Probabilistic Circuits and Applications|CLTV15]] assume it, together with [[indistinguishability-obfuscation#sub-exponentially-secure-io|sub-exponentially secure iO]], to build [[homomorphic-encryption#compact-fhe|compact FHE]] without circular security.

## Rerandomizable RCCA encryption

In the **replayable chosen-ciphertext attack (RCCA)** game, after the challenge the decryption oracle answers $\mathsf{test}$ on every ciphertext that decrypts to $m_0$ or $m_1$, and decrypts all other ciphertexts — [[CKN03 - Relaxing Chosen-Ciphertext Security|CKN03]]. A ciphertext of the challenge plaintext other than $c^*$, such as a rerandomization of $c^*$, is therefore answered with $\mathsf{test}$ whichever of $m_0, m_1$ it encrypts. An admissible adversary submits $m_0, m_1 \in \calM$ with $|m_0| = |m_1|$.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{rcca}}_{\PKE,\calA}(\secpar)$}
\begin{algorithmic}
\State $(\sk, \pk) \gets \KeyGen(1^\secpar)$; $b \getsr \bits$
\State $\calD(c) := \Dec(\sk, c)$
\State $(m_0, m_1, \stA) \gets \calA^{\calD}(1^\secpar, \pk)$
\Comment{Phase 1: $\calD$ unrestricted; $m_0, m_1 \in \calM$, $|m_0| = |m_1|$}
\State $c^* \gets \Enc(\pk, m_b)$
\State $b' \gets \calA^{\calD^*}(c^*, \stA)$
\Comment{Phase 2: replays of $m_0, m_1$ are answered with $\mathsf{test}$}
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

```pseudocode
\begin{algorithm}
\algname{Oracle}
\caption{$\calD^*(c)$}
\begin{algorithmic}
\State $m \gets \Dec(\sk, c)$
\If{$m \in \{m_0, m_1\}$}
\Return $\mathsf{test}$
\EndIf
\Return $m$
\end{algorithmic}
\end{algorithm}
```

A PKE scheme $\PKE$ is **RCCA-secure** if for all admissible efficient $\calA$,

$$
\Adv^{\mathrm{rcca}}_{\PKE,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{rcca}}_{\PKE,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible — [[CKN03 - Relaxing Chosen-Ciphertext Security|CKN03]]. Without the $\mathsf{test}$ answers, $\calA$ would win by submitting $c^*$ itself. For perfectly correct schemes, [[public-key-encryption#cca-security|CCA security]] implies RCCA security, which implies [[public-key-encryption#cpa-security|CPA security]]; appending to every ciphertext of a perfectly correct CCA-secure scheme a bit that decryption ignores gives a scheme that is RCCA-secure but not CCA-secure — standard.

A **rerandomizable RCCA** scheme is perfectly rerandomizable and RCCA-secure. [[Gro04 - Rerandomizable and Replayable Adaptive Chosen Ciphertext Attack Secure Cryptosystems|Gro04]] constructs perfectly rerandomizable schemes whose RCCA security is proved only in an idealized group model.

# Other results

- ElGamal encryption [[ElGamal85 - A Public Key Cryptosystem and a Signature Scheme Based on Discrete Logarithms|ElGamal85]] is perfectly rerandomizable: multiply a ciphertext componentwise by a fresh encryption of the group identity — standard.
- Perfect rerandomization implies statistical rerandomization of honest ciphertexts ([[rerandomizable-encryption-to-statistically-rerandomizable-encryption|RE ⇒ Statistically rerandomizable encryption]]) — folklore.
- An IND-CPA-secure public-key bit-encryption scheme with a strong homomorphic evaluator for a boolean function $f$ is statistically rerandomizable, for essentially every $f$ other than the trivial functions, NOT, AND and OR ([[he-to-re-bl13|Strongly homomorphic encryption ⇒ Statistically rerandomizable encryption]]) — [[BL13 - Limits of Provable Security for Homomorphic Encryption|BL13]].
- Sub-exponentially secure iO and rerandomizable encryption secure against slightly super-polynomial adversaries give compact FHE without circular security ([[subexponential-io-and-rerandomizable-encryption-to-he-cltv15|Sub-exponential iO + Rerandomizable encryption ⇒ Compact FHE]]) — [[CLTV15 - Obfuscation of Probabilistic Circuits and Applications|CLTV15]].
- The Double-strand Cramer–Shoup scheme, an extension of Cramer–Shoup encryption, is perfectly rerandomizable and RCCA-secure under DDH ([[ddh-to-rerandomizable-rcca-encryption-pr07|DDH ⇒ Rerandomizable RCCA encryption]]) — [[PR07 - Rerandomizable RCCA Encryption|PR07]].

<!-- BEGIN GENERATED participates-in 69bb6d54a338 -->

## Participates in

**Builds on Rerandomizable encryption**

- [[rerandomizable-encryption-to-statistically-rerandomizable-encryption|RE ⇒ Statistically rerandomizable encryption]]
- [[subexponential-io-and-rerandomizable-encryption-to-he-cltv15|Sub-exponential iO + Rerandomizable encryption ⇒ Compact FHE (CLTV)]] (via [[rerandomizable-encryption#security-against-slightly-super-polynomial-adversaries|Security against slightly super-polynomial adversaries]])

**Produces Rerandomizable encryption**

- [[ddh-to-rerandomizable-rcca-encryption-pr07|DDH ⇒ Rerandomizable RCCA encryption (Double-strand Cramer–Shoup)]] (via [[rerandomizable-encryption#rerandomizable-rcca-encryption|Rerandomizable RCCA encryption]])
- [[he-to-re-bl13|Strongly homomorphic encryption ⇒ Statistically rerandomizable encryption]] (via [[rerandomizable-encryption#statistical-rerandomization-of-honest-ciphertexts|Statistical rerandomization of honest ciphertexts]])
- [[rerandomizable-encryption-to-statistically-rerandomizable-encryption|RE ⇒ Statistically rerandomizable encryption]] (via [[rerandomizable-encryption#statistical-rerandomization-of-honest-ciphertexts|Statistical rerandomization of honest ciphertexts]])

<!-- END GENERATED participates-in -->
