---
aliases:
  - OT
  - Oblivious Transfer
title: Oblivious transfer
---

# Oblivious transfer

**Oblivious Transfer (OT)** is a two-party protocol between a **sender** $S$ and a **receiver** $R$. In the basic 1-out-of-2 variant, the sender holds two messages and the receiver holds a choice bit; at the end, the receiver learns the chosen message while the sender learns nothing about the choice, and the receiver learns nothing about the unchosen message.

## Syntax

A 1-out-of-2 OT is a pair $\OT = (\Setup, \langle S, R \rangle)$ with message
space $\calM$, following the [[interactive-protocol|two-party protocol]] syntax:

- $\Setup(1^\secpar) \to \pp,$ is a randomized algorithm generating public parameters,
- $S$ and $R$ are stateful interactive algorithms with:
  - $S$ input: a pair of messages $(x_0, x_1) \in \calM^2,$
  - $R$ input: a choice bit $c \in \bits,$
  - $S$ output: $\bot,$
  - $R$ output: $x_c.$

We write $\langle S(\pp, x_0, x_1), R(\pp, c) \rangle \to (\bot, x_c).$

## Properties

### Correctness

An OT $\OT$ is $(1-\varepsilon)$-**correct** if for all $x_0, x_1 \in \calM$ and $c \in \bits$,

$$
\Pr\!\left[\mathsf{out}_R = x_c\right] \ge 1 - \varepsilon,
$$

where $\pp \gets \Setup(1^\secpar)$ and $(\bot, \mathsf{out}_R) \gets \langle S(\pp, x_0, x_1), R(\pp, c) \rangle.$ When $\varepsilon = 0,$ we say $\OT$ is **perfectly correct**.

### Sender Privacy

The receiver should not learn the unchosen message $x_{1-c}$. The adversary commits to a choice bit $c$ and two sender input pairs that agree on the chosen value ($x_c = x_c'$); after observing the honest receiver's view, it tries to determine which pair the sender used.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\text{s-priv}}_{\OT,\calA}(\secpar)$}
\begin{algorithmic}
\State $\pp \gets \Setup(1^\secpar)$
\State $(c, x_0, x_1, x_0', x_1', \stA) \gets \calA(1^\secpar, \pp)$
\Comment{Admissible: $x_c = x_c'$}
\State $(x_0^{(0)}, x_1^{(0)}) := (x_0, x_1)$; $(x_0^{(1)}, x_1^{(1)}) := (x_0', x_1')$
\State $b \getsr \bits$
\State Run $\langle S(\pp, x_0^{(b)}, x_1^{(b)}), R(\pp, c) \rangle$; let $\View_R$ denote R's view
\State $b' \gets \calA(\View_R, \stA)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

An OT $\OT$ has **sender-private (or message hiding)** if for all
efficient admissible $\calA$,

$$
\Adv^{\text{s-priv}}_{\OT,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\text{s-priv}}_{\OT,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible. Because $x_c = x_c'$, the receiver's output is identical in both worlds; any distinguishing advantage must come from the view alone.

### Receiver Privacy

The sender should not learn the receiver's choice bit $c$. The adversary commits to sender inputs $(x_0, x_1)$; after observing the honest sender's view, it tries to determine which bit the receiver chose.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\text{r-priv}}_{\OT,\calA}(\secpar)$}
\begin{algorithmic}
\State $\pp \gets \Setup(1^\secpar)$
\State $(x_0, x_1, \stA) \gets \calA(1^\secpar, \pp)$
\State $c \getsr \bits$
\State Run $\langle S(\pp, x_0, x_1), R(\pp, c) \rangle$; let $\View_S$ denote S's view
\State $c' \gets \calA(\View_S, \stA)$
\Return $[c' = c]$
\end{algorithmic}
\end{algorithm}
```

An OT $\OT$ has **receiver-private (or choice-hiding)** if for all
efficient $\calA$,

$$
\Adv^{\text{r-priv}}_{\OT,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\text{r-priv}}_{\OT,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible.

### Malicious Security

The definitions above are **semi-honest**: both parties follow the protocol honestly, and security holds against a party that tries to learn extra information from its view. Under **malicious security**, the adversary may deviate from the protocol arbitrarily. Game-based definitions extend naturally to this setting (e.g., in the receiver privacy game, the adversary sends arbitrary messages rather than running the honest $S$). However, game-based definitions alone do not capture all malicious-sender attacks (e.g., forcing the receiver to output a value other than $x_c$).

# Variations

## Rabin OT

Introduced by [[Rab81]], **Rabin's OT** is a simpler variant where the sender transmits a single message $x$ and the receiver obtains it with probability $1/2$, receiving $\bot$ otherwise — without the sender learning which outcome occurred. Rabin OT and 1-out-of-2 OT are equivalent; each implies the other by efficient reductions.

## $k$-out-of-$n$ OT

A generalization where the sender holds $n$ messages $(x_1, \ldots, x_n)$ and the receiver chooses a set $S \subseteq [n]$ of size $k$, learning $\{x_i : i \in S\}$ while the sender learns nothing about $S$.

The 1-out-of-$n$ variant is equivalent to single-server [[single-server-private-information-retrieval|PIR]] with data privacy ([[single-server-private-information-retrieval#Symmetric private information retrieval (Single-server)|SPIR]]).

## OT Extension

OT from public-key primitives requires expensive operations per transfer. **OT extension** ([[IKNP03 - Extending Oblivious Transfers Efficiently|IKNP03]]) shows how to generate a large number of OTs from a small number of base OTs using only symmetric-key operations, making OT practical at scale.

## Random OT

In a **Random OT**, the parties do not choose their inputs: the sender receives uniformly random $(x_0, x_1)$ and the receiver receives a uniformly random bit $c$ and the value $x_c$. Random OT can be converted to standard OT with a single round of communication.

# Other results

- OT is implied by non-trivial [[single-server-private-information-retrieval|PIR]] — [[DMO00 - Single Database Private Information Retrieval Implies Oblivious Transfer|DMO00]]
- OT implies [[commitment-scheme|commitment schemes]]
- OT can be constructed from [[public-key-encryption|PKE]]
- OT is complete for [[multi-party-computation|secure computation]] — [[Kil88 - Founding cryptography on oblivious transfer|Kil88]]
