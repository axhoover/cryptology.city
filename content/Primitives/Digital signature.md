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
message attacks (EU-CMA)** game. This security notion requires that an
adversary cannot find a message signature pair $(\hat{m},\hat{\sigma})$ even
given many samples

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\eucma}_{\DS,\calA}(\secpar)$}
\begin{algorithmic}
\State $(\sk, \vk) \gets \KeyGen(1^\secpar)$; $b \getsr \bits$
\State $\calQ \gets \{\}$
\State $(\hat{m},\hat{\sigma}) \gets \calA^{\calO}(1^\secpar, \vk)$
\If{$\hat{m}\in \calQ$}
\Comment{Require $\hat{m}$ to be a new message}
\Return $0$
\EndIf
\Return $[\Vrfy(\vk,\hat{m},\sigma)]$
\end{algorithmic}
\end{algorithm}
```

```pseudocode
\begin{algorithm}
\algname{Oracle}
\caption{$\calO(m)$}
\begin{algorithmic}
\State $\calQ \gets \calQ \cup \{m\}$
\State $\sigma \gets \Sign(\sk,m)$
\Return $\sigma$
\end{algorithmic}
\end{algorithm}
```

A DS scheme $\DS$ is **EU-CMA unforgeable** if for all efficient $\calA$,

$$
\Adv^{\eucma}_{\DS,\calA}(\secpar) := \Pr[\Game^{\eucma}_{\DS,\calA}(\secpar) = 1]
$$

is negligible.


### Strong Unforgeability



## Variations




## Other results
- If [[One-way function | OWFs]] exist, then Digital Signatures exist
— Lamport signature citation