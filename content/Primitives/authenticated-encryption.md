---
type: primitive
status: draft
aliases:
  - AE
  - Authenticated encryption
  - AEAD
  - Authenticated encryption with associated data
title: Authenticated encryption
id: authenticated-encryption
variants:
  nonce-based-aead: "#nonce-based-aead"
---

# Authenticated encryption

An **authenticated encryption (AE)** scheme is a [[symmetric-key-encryption|symmetric-key encryption]] scheme that is CPA-secure and has integrity of ciphertexts: no efficient adversary with an encryption oracle produces a ciphertext that the oracle did not output and that decrypts to a message rather than to $\bot$ — [[BN00 - Authenticated Encryption Relations among Notions and Analysis of the Generic Composition Paradigm|BN00]].

## Syntax

An AE scheme is a SKE scheme $\mathsf{AE} = (\KeyGen, \Enc, \Dec)$ with respect to keyspace $\calK$, message space $\calM$, and ciphertext space $\calC$:

- $\KeyGen(1^\secpar) \to k$, a randomized algorithm sampling a key $k \in \calK$,
- $\Enc(k, m) \to c$, a randomized algorithm taking a key $k \in \calK$ and a message $m \in \calM$, outputting a ciphertext $c \in \calC$,
- $\Dec(k, c) \to m$, a deterministic algorithm taking a key $k \in \calK$ and a string $c$, outputting a message $m \in \calM$ or $\bot$ to reject $c$.

## Properties

### Correctness

$\mathsf{AE}$ is $(1-\varepsilon)$-**correct** if it is a $(1-\varepsilon)$-[[symmetric-key-encryption#correctness|correct]] SKE scheme. When $\varepsilon = 0$, $\mathsf{AE}$ is perfectly correct.

### Privacy

Privacy is [[symmetric-key-encryption#cpa-security|CPA security]] of $\mathsf{AE}$ as a SKE scheme: $\calA$ queries a left-right encryption oracle and has no access to $\Dec$.

### Integrity of plaintexts

In the **INT-PTXT** game, $\calA$ has an encryption oracle $\calE$ and a verification oracle $\calV$ that reports whether a string decrypts, and wins if it submits to $\calV$ a string that decrypts to a message it never submitted to $\calE$ — [[BN00 - Authenticated Encryption Relations among Notions and Analysis of the Generic Composition Paradigm|BN00]].

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{int\text{-}ptxt}}_{\mathsf{AE},\calA}(\secpar)$}
\begin{algorithmic}
\State $k \gets \KeyGen(1^\secpar)$; $\calQ \gets \{\}$; $\mathit{win} \gets 0$
\State $\calA^{\calE, \calV}(1^\secpar)$
\Return $\mathit{win}$
\end{algorithmic}
\end{algorithm}
```

```pseudocode
\begin{algorithm}
\algname{Oracle}
\caption{$\calE(m)$}
\begin{algorithmic}
\State $\calQ \gets \calQ \cup \{m\}$
\Return $\Enc(k, m)$
\end{algorithmic}
\end{algorithm}
```

```pseudocode
\begin{algorithm}
\algname{Oracle}
\caption{$\calV(c)$}
\begin{algorithmic}
\State $m \gets \Dec(k, c)$
\If{$m \ne \bot$ and $m \notin \calQ$}
\State $\mathit{win} \gets 1$
\Comment{$m$ was never encrypted by $\calE$}
\EndIf
\Return $[m \ne \bot]$
\end{algorithmic}
\end{algorithm}
```

An AE scheme $\mathsf{AE}$ is **INT-PTXT-secure** if for all efficient $\calA$,

$$
\Adv^{\mathrm{int\text{-}ptxt}}_{\mathsf{AE},\calA}(\secpar) := \Pr\!\left[\Game^{\mathrm{int\text{-}ptxt}}_{\mathsf{AE},\calA}(\secpar) = 1\right]
$$

is negligible.

### Integrity of ciphertexts

The **INT-CTXT** game records ciphertexts instead of messages: $\calA$ wins if it submits to $\calV$ a string that decrypts to a message and that $\calE$ did not output — [[BN00 - Authenticated Encryption Relations among Notions and Analysis of the Generic Composition Paradigm|BN00]].

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{int\text{-}ctxt}}_{\mathsf{AE},\calA}(\secpar)$}
\begin{algorithmic}
\State $k \gets \KeyGen(1^\secpar)$; $\calQ \gets \{\}$; $\mathit{win} \gets 0$
\State $\calA^{\calE, \calV}(1^\secpar)$
\Return $\mathit{win}$
\end{algorithmic}
\end{algorithm}
```

```pseudocode
\begin{algorithm}
\algname{Oracle}
\caption{$\calE(m)$}
\begin{algorithmic}
\State $c \gets \Enc(k, m)$; $\calQ \gets \calQ \cup \{c\}$
\Return $c$
\end{algorithmic}
\end{algorithm}
```

```pseudocode
\begin{algorithm}
\algname{Oracle}
\caption{$\calV(c)$}
\begin{algorithmic}
\State $m \gets \Dec(k, c)$
\If{$m \ne \bot$ and $c \notin \calQ$}
\State $\mathit{win} \gets 1$
\Comment{$c$ was never output by $\calE$}
\EndIf
\Return $[m \ne \bot]$
\end{algorithmic}
\end{algorithm}
```

An AE scheme $\mathsf{AE}$ is **INT-CTXT-secure** if for all efficient $\calA$,

$$
\Adv^{\mathrm{int\text{-}ctxt}}_{\mathsf{AE},\calA}(\secpar) := \Pr\!\left[\Game^{\mathrm{int\text{-}ctxt}}_{\mathsf{AE},\calA}(\secpar) = 1\right]
$$

is negligible. An **authenticated encryption scheme** is a SKE scheme that is CPA-secure and INT-CTXT-secure — [[BN00 - Authenticated Encryption Relations among Notions and Analysis of the Generic Composition Paradigm|BN00]].

For a perfectly correct scheme INT-CTXT security implies INT-PTXT security, since every output of $\calE$ decrypts to a message submitted to $\calE$ — [[BN00 - Authenticated Encryption Relations among Notions and Analysis of the Generic Composition Paradigm|BN00]]. CPA security and INT-CTXT security together imply [[symmetric-key-encryption#cca-security|CCA security]] ([[authenticated-encryption-to-cca-secure-symmetric-key-encryption-bn00|AE ⇒ CCA-secure SKE]]) — [[BN00 - Authenticated Encryption Relations among Notions and Analysis of the Generic Composition Paradigm|BN00]]. Concurrently and independently, [[KY00 - Unforgeable Encryption and Chosen Ciphertext Secure Modes of Operation|KY00]] define _unforgeable_ encryption, in which no efficient adversary with an encryption oracle outputs a valid ciphertext that the oracle did not return, and prove that unforgeability together with CPA security implies CCA security.

# Variations

## Nonce-based AEAD

A **nonce-based authenticated encryption scheme with associated data (AEAD)** encrypts deterministically under a nonce and authenticates, without hiding, a string of associated data — [[Rog02 - Authenticated-Encryption with Associated-Data|Rog02]]. It is a tuple $\Pi = (\KeyGen, \Enc, \Dec)$ with respect to keyspace $\calK$, nonce space $\calN$, message space $\calM$ and associated data in $\bits^*$:

- $\KeyGen(1^\secpar) \to k$, a randomized algorithm sampling a key $k \in \calK$,
- $\Enc(k, N, a, m) \to c$, a deterministic algorithm taking a nonce $N \in \calN$, associated data $a$ and a message $m \in \calM$, outputting a ciphertext $c$,
- $\Dec(k, N, a, c) \to m$, a deterministic algorithm outputting a message $m \in \calM$ or $\bot$.

Correctness requires $\Dec(k, N, a, \Enc(k, N, a, m)) = m$ for every $k$ output by $\KeyGen$ and all $N$, $a$ and $m$. Assume $|\Enc(k, N, a, m)| = \ell(|m|)$ for a fixed function $\ell$.

An adversary is **nonce-respecting** if it never repeats a nonce across its queries to the encryption oracle. Without this restriction, $\calA$ wins the privacy game by repeating a query, since $\Enc$ is deterministic and the world-1 oracle is not.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{priv}}_{\Pi,\calA}(\secpar)$}
\begin{algorithmic}
\State $k \gets \KeyGen(1^\secpar)$; $b \getsr \bits$
\State $\calO_0(N, a, m) := \Enc(k, N, a, m)$
\State $\calO_1(N, a, m) \getsr \bits^{\ell(|m|)}$
\Comment{$\calA$ is nonce-respecting; $\calO_1$ uses fresh coins on each query}
\State $b' \gets \calA^{\calO_b}(1^\secpar)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

In the authenticity game $\calA$ outputs a forgery $(N^*, a^*, c^*)$, which may reuse a nonce of an earlier query, and wins if it decrypts and was not an answer of the oracle.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{auth}}_{\Pi,\calA}(\secpar)$}
\begin{algorithmic}
\State $k \gets \KeyGen(1^\secpar)$; $\calQ \gets \{\}$
\State $(N^*, a^*, c^*) \gets \calA^{\calE}(1^\secpar)$
\Comment{$\calA$ is nonce-respecting in its queries to $\calE$}
\If{$(N^*, a^*, c^*) \in \calQ$}
\Return $0$
\EndIf
\Return $[\Dec(k, N^*, a^*, c^*) \ne \bot]$
\end{algorithmic}
\end{algorithm}
```

```pseudocode
\begin{algorithm}
\algname{Oracle}
\caption{$\calE(N, a, m)$}
\begin{algorithmic}
\State $c \gets \Enc(k, N, a, m)$; $\calQ \gets \calQ \cup \{(N, a, c)\}$
\Return $c$
\end{algorithmic}
\end{algorithm}
```

A nonce-based AEAD scheme $\Pi$ is **secure** if for all efficient nonce-respecting $\calA$,

$$
\Adv^{\mathrm{priv}}_{\Pi,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{priv}}_{\Pi,\calA}(\secpar) = 1\right] - 1\right| \quad\text{and}\quad \Adv^{\mathrm{auth}}_{\Pi,\calA}(\secpar) := \Pr\!\left[\Game^{\mathrm{auth}}_{\Pi,\calA}(\secpar) = 1\right]
$$

are negligible — [[Rog02 - Authenticated-Encryption with Associated-Data|Rog02]].

# Other results

## Generic composition

For a SKE scheme $\SKE$ and a [[message-authentication-code|MAC]] $\MAC$ under independent keys $k_e$ and $k_m$, the three generic compositions encrypt $m$ as follows, and decryption outputs $\bot$ whenever the tag does not verify — [[BN00 - Authenticated Encryption Relations among Notions and Analysis of the Generic Composition Paradigm|BN00]]:

- _Encrypt-then-MAC_ (EtM): $c \gets \Enc(k_e, m)$, output $(c, \Tag(k_m, c))$;
- _MAC-then-Encrypt_ (MtE): output $\Enc(k_e, m \| \Tag(k_m, m))$;
- _Encrypt-and-MAC_ (E&M): output $(\Enc(k_e, m), \Tag(k_m, m))$.

For a [[symmetric-key-encryption#cpa-security|CPA-secure]] $\SKE$ and a [[message-authentication-code#strong-unforgeability|SUF-CMA-secure]] $\MAC$, EtM is an authenticated encryption scheme ([[cpa-security-and-suf-cma-mac-to-authenticated-encryption-bn00|CPA-secure SKE + SUF-CMA MAC ⇒ AE]]), hence CCA-secure ([[mac-and-ske-to-cca-security|SUF-CMA MAC + CPA-secure SKE ⇒ CCA-secure SKE]]) — [[BN00 - Authenticated Encryption Relations among Notions and Analysis of the Generic Composition Paradigm|BN00]]. For a perfectly correct CPA-secure $\SKE$ and a [[message-authentication-code#unforgeability|UF-CMA-secure]] $\MAC$, all three compositions are INT-PTXT-secure, and EtM is CPA-secure — [[BN00 - Authenticated Encryption Relations among Notions and Analysis of the Generic Composition Paradigm|BN00]]. MtE and E&M are not generically secure: assuming CPA-secure SKE schemes and SUF-CMA-secure MACs exist, some such pair makes MtE neither INT-CTXT-secure nor CCA-secure, and some such pair makes E&M not CPA-secure — [[BN00 - Authenticated Encryption Relations among Notions and Analysis of the Generic Composition Paradigm|BN00]].

<!-- BEGIN GENERATED participates-in 0b8fd1b89846 -->

## Participates in

**Builds on Authenticated encryption**

- [[authenticated-encryption-to-cca-secure-symmetric-key-encryption-bn00|AE ⇒ CCA-secure SKE]]

**Produces Authenticated encryption**

- [[cpa-security-and-suf-cma-mac-to-authenticated-encryption-bn00|CPA-secure SKE + SUF-CMA MAC ⇒ AE (Encrypt-then-MAC)]]

<!-- END GENERATED participates-in -->
