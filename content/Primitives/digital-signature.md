---
aliases:
  - DS
  - Signature
title: Digital Signatures
---
# Digital signature

TODO: high level description

## Syntax
A Digital Signature scheme is a tuple of efficient algorithms
$\DS = (\KeyGen, \Sign, \Vrfy)$ with respect to signing keyspace
$\calK_{\mathrm{sk}}$, verification (or public) keyspace $\calK_{\mathrm{pk}}$,
message space $\calM$, and signature space $\calS$:
- $\KeyGen(1^\secpar) \to (\sk, \vk),$ is a randomized algorithm which samples
a signing key $\sk \in \calK_{\mathrm{sk}}$ and verification (or public)
key $\vk \in \calK_{\mathrm{pk}}$,
- $\Sign(\sk, m) \to c,$ is a (possibly) randomized algorithm which takes a
signing key $\sk \in \calK_{\mathrm{sk}}$ and message $m \in \calM$,
outputting signature $\sigma \in \calS$,
- $\Vrfy(\vk, m, \sigma) \to b,$ is a deterministic algorithm which takes a
verification key $\vk \in \calK_{\mathrm{vk}},$ a message $m\in \calM,$ and
a signature $\sigma\in\calS$, outputting a bit $b \in \bits$ indicating
whether the signature is valid or not.

## Properties

### Correctness
A Digital Signature scheme $\DS = (\KeyGen, \Sign, \Vrfy)$ is
$(1-\varepsilon)$**-correct** if for all $m \in \calM$,

$$
  \Pr[\Vrfy(\vk, m, \Sign(\sk, m)) = 1] \ge 1-\varepsilon,
$$

over the randomness of $(\sk, \vk) \leftarrow \KeyGen(1^\secpar)$ and
possibly $\Sign.$


### Existential Unforgeability
The following is the **existential unforgeability under chosen
message attacks (EUF-CMA)** game. This security notion requires that an
adversary cannot find a message signature pair $(\hat{m},\hat{\sigma})$ even
given many samples

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\eufcma}_{\DS,\calA}(\secpar)$}
\begin{algorithmic}
\State $(\sk, \vk) \gets \KeyGen(1^\secpar)$; $b \getsr \bits$
\State $\calQ \gets \{\}$
\State $(\hat{m},\hat{\sigma}) \gets \calA^{\calO}(1^\secpar, \vk)$
\If{$\hat{m}\in \calQ$}
\Comment{$\hat{m}$ cannot repeat}
\Return $0$
\EndIf
\Return $[\Vrfy(\vk,\hat{m},\hat{\sigma})]$
\end{algorithmic}
\end{algorithm}
```

```pseudocode
\begin{algorithm}
\algname{Oracle}
\caption{$\calO(m)$}
\begin{algorithmic}
\State $\sigma \gets \Sign(\sk,m)$
\State $\calQ \gets \calQ \cup \{m\}$
\Return $\sigma$
\end{algorithmic}
\end{algorithm}
```

A DS scheme $\DS$ is **EUF-CMA unforgeable** if for all efficient $\calA$,

$$
\Adv^{\eufcma}_{\DS,\calA}(\secpar) := \Pr[\Game^{\eufcma}_{\DS,\calA}(\secpar) = 1]
$$

is negligible.


### Strong Unforgeability
The following is the **strongly unforgeability under chosen
message attacks (SUF-CMA)** game. This security notion strenghtens the above
EUF-CMA notation and requires $\DS$ to prevent an adversary from "mauling"
the signature to produce a new signature for the same message. For example,
by rerandomizing the signature into another valid signature.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\sufcma}_{\DS,\calA}(\secpar)$}
\begin{algorithmic}
\State $(\sk, \vk) \gets \KeyGen(1^\secpar)$; $b \getsr \bits$
\State $\calQ \gets \{\}$
\State $(\hat{m},\hat{\sigma}) \gets \calA^{\calO}(1^\secpar, \vk)$
\If{$(\hat{m},\hat{\sigma})\in \calQ$}
\Comment{$(\hat{m},\hat{\sigma})$ cannot repeat}
\Return $0$
\EndIf
\Return $[\Vrfy(\vk,\hat{m},\hat{\sigma})]$
\end{algorithmic}
\end{algorithm}
```

```pseudocode
\begin{algorithm}
\algname{Oracle}
\caption{$\calO(m)$}
\begin{algorithmic}
\State $\sigma \gets \Sign(\sk,m)$
\State $\calQ \gets \calQ \cup \{(m, \sigma)\}$
\Return $\sigma$
\end{algorithmic}
\end{algorithm}
```

A DS scheme $\DS$ is **SU-CMA unforgeable** if for all efficient $\calA$,

$$
\Adv^{\sufcma}_{\DS,\calA}(\secpar) := \Pr[\Game^{\sufcma}_{\DS,\calA}(\secpar) = 1]
$$

is negligible.


# Variations




# Other results
- If [[One-way function | OWFs]] exist, then Digital Signatures exist
— Lamport signature citation