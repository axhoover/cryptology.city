---
aliases:
  - MAC
  - Message authentication code
title: Message authentication code
---

# Message authentication code

A **Message Authentication Code (MAC)** allows a user holding a secret key to authenticate messages by attaching a short tag. Anyone with the same key can verify the tag's authenticity; anyone without the key cannot forge a valid tag, even after seeing many legitimate message-tag pairs.

## Syntax

A MAC is a triple of efficient algorithms $\MAC = (\KeyGen, \Tag, \Vrfy)$ with respect to keyspace $\calK$, message space $\calM$, and tag space $\calT$:

- $\KeyGen(1^\secpar) \to k,$ is a randomized algorithm that samples a key $k \in \calK,$
- $\Tag(k, m) \to t,$ is a (possibly randomized) algorithm that takes a key $k \in \calK$ and message $m \in \calM$, outputting a tag $t \in \calT,$
- $\Vrfy(k, m, t) \to b,$ is a deterministic algorithm that takes a key $k \in \calK$, message $m \in \calM$, and tag $t \in \calT$, outputting a bit $b \in \bits$ indicating whether the tag is valid.

## Properties

### Correctness

A MAC $\MAC$ is **correct** if for all $k \in \calK$ and $m \in \calM$,

$$
\Vrfy(k, m, \Tag(k, m)) = 1.
$$

### Unforgeability

The following is the **unforgeability under chosen message attacks (UF-CMA)** game. This security notion requires that an adversary cannot produce a valid tag for any message it did not previously query, even after seeing arbitrarily many message-tag pairs.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\ufcma}_{\MAC,\calA}(\secpar)$}
\begin{algorithmic}
\State $k \gets \KeyGen(1^\secpar)$
\State $\calQ \gets \{\}$
\State $(\hat{m}, \hat{t}) \gets \calA^{\calO}(1^\secpar)$
\If{$\hat{m} \in \calQ$}
\Comment{$\hat{m}$ cannot repeat}
\Return $0$
\EndIf
\Return $[\Vrfy(k, \hat{m}, \hat{t}) = 1]$
\end{algorithmic}
\end{algorithm}
```

```pseudocode
\begin{algorithm}
\algname{Oracle}
\caption{$\calO(m)$}
\begin{algorithmic}
\State $\calQ \gets \calQ \cup \{m\}$
\State $t \gets \Tag(k, m)$
\Return $t$
\end{algorithmic}
\end{algorithm}
```

A MAC $\MAC$ is **UF-CMA secure** if for all efficient $\calA$,

$$
\Adv^{\ufcma}_{\MAC,\calA}(\secpar) := \Pr\!\left[\Game^{\ufcma}_{\MAC,\calA}(\secpar) = 1\right]
$$

is negligible.

# Variations

## Deterministic MACs

When $\Tag$ is deterministic, security still holds under the same UF-CMA game. In this case the tag is a pure function of the key and message.

## PRF-based MACs

A simple and common construction: set $\Tag(k, m) := \Eval(k, m)$ for a [[pseudorandom-function|PRF]] $(\KeyGen, \Eval)$. The UF-CMA security of the resulting MAC follows directly from the PRF's pseudorandomness.

# Other results

- MACs can be constructed from [[pseudorandom-function|PRF]]s
- CPA-secure [[symmetric-key-encryption|SKE]] can be boosted to CCA-secure SKE using a MAC (encrypt-then-MAC construction)
