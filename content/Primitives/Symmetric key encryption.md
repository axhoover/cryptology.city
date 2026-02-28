---
aliases:
  - SKE
  - SE
title: SKE
---
# Symmetric key encryption
A **symmetric key encryption (SKE)** scheme allows a sender and receiver sharing a secret key to encrypt and decrypt messages, such that an adversary who does not know the key cannot learn anything about the plaintext from the ciphertext.

## Syntax
A SKE scheme is a tuple of efficient algorithms $\SKE = (\Gen, \Enc, \Dec)$ with respect to keyspace $\calK,$ message space $\calM,$ and ciphertext space $\calC$:
- $\Gen(1^\secpar) \to k,$ is a randomized algorithm which
samples a key $k \in \calK$,
- $\Enc(k, m) \to c,$ is a randomized algorithm which takes a
key $k \in \calK$ and message $m \in \calM$, outputting a ciphertext
$c \in \calC$,
- $\Dec(k, c) \to m,$ is a deterministic algorith which
takes a key $k \in \calK$ and ciphertext $c \in \calC$,
outputting a message $m \in \calM$ or $\bot$ to indicate an invalid ciphertext.

## Properties

### Correctness
A SKE scheme $\SKE = (\Gen, \Enc, \Dec)$ is
$(1-\varepsilon)$-**correct** if for all
$\secpar \in \mathbb{N}$ and $m \in \calM$,

$$
\Pr\!\left[\Dec(k, \Enc(k, m)) = m\right] \ge 1 - \varepsilon,
$$
over the choice of $k \gets \Gen(1^\secpar)$ and randomness of $\Enc.$ When
$\varepsilon=0$, we say $\SKE$ is perfectly correct.

### CPA Security
In the **chosen-plaintext attack (CPA)** game, the adversary adaptively queries a left-right encryption oracle: it submits message pairs $(m_0, m_1)$ and receives an encryption of $m_b$, where $b$ is a hidden bit. The adversary wins by guessing $b$.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{cpa}}_{\SKE,\calA}(\secpar)$}
\begin{algorithmic}
\State $k \gets \Gen(1^\secpar)$; $b \getsr \bits$
\State $\calO_0(m_0, m_1) := \Enc(k, m_0)$
\State $\calO_1(m_0, m_1) := \Enc(k, m_1)$
\State $b' \gets \calA^{\calO_b}(1^\secpar)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

A SKE scheme $\SKE$ is **CPA-secure** if for all efficient $\calA$,

$$
\Adv^{\mathrm{cpa}}_{\SKE,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{cpa}}_{\SKE,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible.

### IND$-CPA Security
**Indistinguishability from random (IND$-CPA)** is a stronger notion where the adversary must distinguish real encryptions from uniformly random ciphertexts, rather than encryptions of two chosen messages. The oracle in world 0 encrypts the query; in world 1 it returns a fresh uniform random ciphertext regardless of the input.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{ind\$\text{-}cpa}}_{\SKE,\calA}(\secpar)$}
\begin{algorithmic}
\State $k \gets \Gen(1^\secpar)$; $b \getsr \bits$
\State $\calO_0(m) := \Enc(k, m)$
\State $\calO_1(m) \getsr \calC$
\Comment{Each $m$ is a uniform random ciphertext}
\State $b' \gets \calA^{\calO_b}(1^\secpar)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

A SKE scheme $\SKE$ is **IND\$-CPA-secure** if for all efficient $\calA$,

$$
\Adv^{\mathrm{ind\$\text{-}cpa}}_{\SKE,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{ind\$cpa}}_{\SKE,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible. IND\$-CPA implies CPA security, but not vice versa.

### CCA Security
In the **chosen-ciphertext attack (CCA)** game, the adversary additionally has access to a decryption oracle. To avoid a trivial win, $\calA$ is *admissible*: it may not query $\calD$ on any ciphertext output by the encryption oracle $\calO_b$.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{cca}}_{\SKE,\calA}(\secpar)$}
\begin{algorithmic}
\State $k \gets \Gen(1^\secpar)$; $b \getsr \bits$
\State $\calO_b(m_0, m_1) := \Enc(k, m_b)$
\State $\calD(c) := \Dec(k, c)$
\Comment{$\calA$ may not query $\calD$ on outputs of $\calO_b$}
\State $b' \gets \calA^{\calO_b, \calD}(1^\secpar)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

A SKE scheme $\SKE$ is **CCA-secure** if for all admissible efficient $\calA$,

$$
\Adv^{\mathrm{cca}}_{\SKE,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{cca}}_{\SKE,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible. The admissibility restriction is necessary: without it, $\calA$ could query $\calO_b(0,1)$ and then decrypt the result to trivially learn $b$.

# Other results
- (Both [[#CPA Security|CPA]] and [[#CCA Security|CCA]]) SKE can be built in a black-box way from a [[One-way function]] — Folklore?
- CPA-secure SKE can be boosted to CCA-secure SKE using a [[Message authentication code|MAC]]
