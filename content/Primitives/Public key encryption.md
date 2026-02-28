---
aliases:
  - PKE
title: PKE
---
# Public key encryption
A **public key encryption (PKE)** scheme allows anyone to encrypt a message to a receiver using a public key, while only the holder of the corresponding secret key can decrypt. This enables secure communication over untrusted channels without a pre-shared secret, unlike [[Symmetric key encryption|SKE]].

## Syntax
A PKE scheme is a tuple of efficient algorithms $\PKE = (\Gen, \Enc, \Dec)$ with respect to secret keyspace $\calK_{\mathrm{sk}}$, public keyspace $\calK_{\mathrm{pk}}$, message space $\calM$, and ciphertext space $\calC$:
- $\Gen(1^\secpar) \to (\sk, \pk),$ is a randomized algorithm which samples a secret key $\sk \in \calK_{\mathrm{sk}}$ and public key $\pk \in \calK_{\mathrm{pk}}$,
- $\Enc(\pk, m) \to c,$ is a randomized algorithm which takes a public key $\pk \in \calK_{\mathrm{pk}}$ and message $m \in \calM$, outputting a ciphertext $c \in \calC$,
- $\Dec(\sk, c) \to m,$ is a deterministic algorithm which takes a secret key $\sk \in \calK_{\mathrm{sk}}$ and ciphertext $c \in \calC$, outputting a message $m \in \calM$ or $\bot$ to indicate an invalid ciphertext.

## Properties

### Correctness
A PKE scheme $\PKE = (\Gen, \Enc, \Dec)$ is $(1-\varepsilon)$-**correct**
if for all $\secpar \in \mathbb{N}$ and $m \in \calM$,

$$
\Pr\!\left[\Dec(\sk, \Enc(\pk, m)) = m\right] \ge 1 - \varepsilon,
$$

over the choice of $(\sk, \pk) \gets \Gen(1^\secpar)$ and randomness of $\Enc.$ When $\varepsilon = 0$, we say $\PKE$ is perfectly correct.

### CPA Security
Since $\pk$ is public, the adversary can encrypt any message on their own. The CPA game therefore takes the form of a single challenge: the adversary receives $\pk$, submits two messages, and tries to determine which was encrypted.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{cpa}}_{\PKE,\calA}(\secpar)$}
\begin{algorithmic}
\State $(\sk, \pk) \gets \Gen(1^\secpar)$; $b \getsr \bits$
\State $(m_0, m_1, \stA) \gets \calA(1^\secpar, \pk)$
\State $c^* \gets \Enc(\pk, m_b)$
\State $b' \gets \calA(c^*, \stA)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

A PKE scheme $\PKE$ is **CPA-secure** if for all efficient $\calA$,

$$
\Adv^{\mathrm{cpa}}_{\PKE,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{cpa}}_{\PKE,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible.

### CCA Security
In the **chosen-ciphertext attack (CCA, or IND-CCA2)** game, the adversary additionally has access to a decryption oracle $\calD$ in two phases: before submitting $(m_0, m_1)$, and after receiving the challenge $c^*$. To avoid a trivial win, $\calA$ is **admissible**: it may not query $\calD$ on $c^*$ itself.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{cca}}_{\PKE,\calA}(\secpar)$}
\begin{algorithmic}
\State $(\sk, \pk) \gets \Gen(1^\secpar)$; $b \getsr \bits$
\State $\calD(c) := \Dec(\sk, c)$
\State $(m_0, m_1, \stA) \gets \calA^{\calD}(1^\secpar, \pk)$
\Comment{Phase 1: $\calA$ may query $\calD$ freely}
\State $c^* \gets \Enc(\pk, m_b)$
\State $b' \gets \calA^{\calD}(c^*, \stA)$
\Comment{Phase 2: $\calA$ may not query $\calD$ on $c^*$}
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

A PKE scheme $\PKE$ is **CCA-secure** if for all admissible efficient $\calA$,

$$
\Adv^{\mathrm{cca}}_{\PKE,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{cca}}_{\PKE,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible. The admissibility restriction is necessary: without it, $\calA$ trivially wins by querying $\calD(c^*)$ to learn $m_b$.

# Variations

## CCA1 Security
**CCA1** (also called the *lunchtime attack*) is an intermediate notion between CPA and CCA2. The adversary has access to the decryption oracle only in Phase 1, before seeing the challenge ciphertext; no decryption queries are permitted after $c^*$ is revealed. CCA1 is strictly weaker than CCA2 and strictly stronger than CPA.

## Key-hiding
TODO

# Other results
- PKE implies [[One-way function|OWF]]
- [[Trapdoor function|TDF]] implies PKE
- PKE can be built assuming [[Decisional Diffie-Hellman|DDH]] is hard — [[DH76 - New Directions in Cryptography|DH76]]
- PKE can be built assuming [[Learning parity with noise#Noise Level|mid-noise LPN]]
