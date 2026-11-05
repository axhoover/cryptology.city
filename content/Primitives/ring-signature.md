---
type: primitive
status: draft
aliases:
  - Ring signature
  - Ring signatures
  - Ring signature scheme
title: Ring signature
id: ring-signature
variants:
  fixed-ring-ring-signature: "#fixed-ring-unforgeability"
---

# Ring signature

A ring signature scheme lets a user sign on behalf of any set of public keys, a ring, that contains its own: the signature verifies under the ring and hides which of its members produced it, with no group manager, setup or cooperation from the other members — [[RST01 - How to Leak a Secret|RST01]].

## Syntax

A ring signature scheme is a tuple of efficient algorithms $\Pi = (\KeyGen, \Sign, \Vrfy)$ with respect to message space $\calM$, where a ring is a list $R = (\pk_1, \ldots, \pk_\ell)$ of public keys — [[BKM06 - Ring Signatures Stronger Definitions, and Constructions Without Random Oracles|BKM06]]:

- $\KeyGen(1^\secpar) \to (\pk, \sk)$, a randomized algorithm, run by each user independently,
- $\Sign(\sk, m, R) \to \sigma$, a randomized algorithm that outputs a signature on $m \in \calM$ with respect to a ring $R$ containing the public key of $\sk$,
- $\Vrfy(R, m, \sigma) \to b$, a deterministic algorithm outputting a bit $b \in \bits$.

## Properties

### Correctness

A ring signature scheme $\Pi$ is $(1-\varepsilon)$-**correct** if for all $\secpar, \ell \in \NN$, all key pairs $(\pk_1, \sk_1), \ldots, (\pk_\ell, \sk_\ell)$ output by $\KeyGen(1^\secpar)$ with $R = (\pk_1, \ldots, \pk_\ell)$, all $s \in [\ell]$ and $m \in \calM$,

$$
\Pr\!\left[\Vrfy(R, m, \Sign(\sk_s, m, R)) = 1\right] \ge 1 - \varepsilon,
$$

over the randomness of $\Sign$. When $\varepsilon = 0$, $\Pi$ is **perfectly correct**.

### Anonymity against full key exposure

$n$ honest users generate keys with coins $\omega_1, \ldots, \omega_n$. The adversary has a signing oracle for every honest user on rings of its choice, which may contain public keys it made up. It names two honest users $i_0, i_1$, a message $m^*$ and a ring $R^*$ containing both of their keys, and receives a signature on $m^*$ with respect to $R^*$ by user $i_b$ together with every user's coins $\omega_1, \ldots, \omega_n$, so that it holds every secret key, those of $i_0$ and $i_1$ included; it must guess $b$ — [[BKM06 - Ring Signatures Stronger Definitions, and Constructions Without Random Oracles|BKM06]].

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{anon}}_{\Pi,\calA}(\secpar, n)$}
\begin{algorithmic}
\For{$i \in [n]$}
\State $\omega_i \getsr \bits^*$; $(\pk_i, \sk_i) \gets \KeyGen(1^\secpar; \omega_i)$
\EndFor
\State $S \gets (\pk_1, \ldots, \pk_n)$; $b \getsr \bits$
\State $(i_0, i_1, m^*, R^*, \stA) \gets \calA^{\calO_{\Sign}}(1^\secpar, S)$
\Comment{$i_0 \ne i_1$ and $\pk_{i_0}, \pk_{i_1} \in R^*$}
\State $\sigma^* \gets \Sign(\sk_{i_b}, m^*, R^*)$
\State $b' \gets \calA^{\calO_{\Sign}}(\stA, \sigma^*, \omega_1, \ldots, \omega_n)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

```pseudocode
\begin{algorithm}
\algname{Oracle}
\caption{$\calO_{\Sign}(i, m, R)$}
\begin{algorithmic}
\If{$\pk_i \notin R$}
\Return $\bot$
\EndIf
\Return $\Sign(\sk_i, m, R)$
\end{algorithmic}
\end{algorithm}
```

A ring signature scheme $\Pi$ is **anonymous against full key exposure** if for every polynomial $n = n(\secpar)$ and all efficient $\calA$,

$$
\Adv^{\mathrm{anon}}_{\Pi,\calA}(\secpar, n) := \left|2\Pr\!\left[\Game^{\mathrm{anon}}_{\Pi,\calA}(\secpar, n) = 1\right] - 1\right|
$$

is negligible.

### Unforgeability with respect to insider corruption

The adversary has a signing oracle for every honest user on rings of its choice and may corrupt honest users adaptively, learning their key-generation coins. It wins with a valid signature on a message $m^*$ with respect to a ring $R^*$ of uncorrupted honest users, provided it never asked for a signature on $m^*$ with respect to $R^*$ — [[BKM06 - Ring Signatures Stronger Definitions, and Constructions Without Random Oracles|BKM06]]. A ring containing a corrupted or adversarial key admits signatures by its owner, and a signing query returns a valid signature, which is why both are excluded.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{uf}}_{\Pi,\calA}(\secpar, n)$}
\begin{algorithmic}
\For{$i \in [n]$}
\State $\omega_i \getsr \bits^*$; $(\pk_i, \sk_i) \gets \KeyGen(1^\secpar; \omega_i)$
\EndFor
\State $S \gets (\pk_1, \ldots, \pk_n)$; $C \gets \{\}$; $\calQ \gets \{\}$
\State $(m^*, R^*, \sigma^*) \gets \calA^{\calO_{\Sign}, \calO_{\mathrm{Corr}}}(1^\secpar, S)$
\If{$R^* \not\subseteq \{\pk_i : i \in [n] \setminus C\}$ or $(m^*, R^*) \in \calQ$}
\Comment{$R^*$ holds only uncorrupted honest keys; $(m^*, R^*)$ never queried}
\Return $0$
\EndIf
\Return $[\Vrfy(R^*, m^*, \sigma^*)]$
\end{algorithmic}
\end{algorithm}
```

```pseudocode
\begin{algorithm}
\algname{Oracle}
\caption{$\calO_{\Sign}(i, m, R)$}
\begin{algorithmic}
\If{$\pk_i \notin R$}
\Return $\bot$
\EndIf
\State $\calQ \gets \calQ \cup \{(m, R)\}$
\Return $\Sign(\sk_i, m, R)$
\end{algorithmic}
\end{algorithm}
```

```pseudocode
\begin{algorithm}
\algname{Oracle}
\caption{$\calO_{\mathrm{Corr}}(i)$}
\begin{algorithmic}
\State $C \gets C \cup \{i\}$
\Return $\omega_i$
\end{algorithmic}
\end{algorithm}
```

A ring signature scheme $\Pi$ is **unforgeable with respect to insider corruption** if for every polynomial $n = n(\secpar)$ and all efficient $\calA$,

$$
\Adv^{\mathrm{uf}}_{\Pi,\calA}(\secpar, n) := \Pr\!\left[\Game^{\mathrm{uf}}_{\Pi,\calA}(\secpar, n) = 1\right]
$$

is negligible.

These are the strongest anonymity and unforgeability notions of [[BKM06 - Ring Signatures Stronger Definitions, and Constructions Without Random Oracles|BKM06]], who prove them strictly stronger than the notions used before. As an object, ring signatures denote correct schemes, with negligible $\varepsilon$, that are anonymous against full key exposure and unforgeable with respect to insider corruption.

# Variations

## Weaker unforgeability

### Chosen-subring unforgeability

The unforgeability game without the corruption oracle, in which every ring, in a signing query or in the forgery, consists of honest users' keys — [[BKM06 - Ring Signatures Stronger Definitions, and Constructions Without Random Oracles|BKM06]].

### Fixed-ring unforgeability

The unforgeability game without the corruption oracle, in which every ring, in a signing query or in the forgery, is the list $S$ of all honest keys, and the forgery must be on a message never submitted for signing — [[BKM06 - Ring Signatures Stronger Definitions, and Constructions Without Random Oracles|BKM06]]. As an object, ring signatures with fixed-ring unforgeability denote correct schemes, with negligible $\varepsilon$, that are anonymous against full key exposure and unforgeable against fixed-ring attacks.

## Linkable ring signatures

A linkable ring signature scheme has a further public algorithm that decides whether two signatures with respect to the same ring were produced by the same member, while still hiding which member it is — [[LWW04 - Linkable Spontaneous Anonymous Group Signature for Ad Hoc Groups (Extended Abstract)|LWW04]].

# Other results

- [[trapdoor-permutation|Trapdoor permutations]] give ring signatures with fixed-ring unforgeability when a symmetric cipher is modeled as an ideal cipher; signer ambiguity is unconditional, and each ring member costs one evaluation of a permutation and one cipher call ([[tdp-to-fixed-ring-ring-signature-rst01|TDP ⇒ Ring signatures with fixed-ring unforgeability]]) — [[RST01 - How to Leak a Secret|RST01]]. The construction paradigm is secure in the random-oracle model, without an ideal cipher — [[BSS02 - Threshold Ring Signatures and Applications to Ad-hoc Groups|BSS02]].
- Without random oracles and without setup, ring signatures that are anonymous against full key exposure and unforgeable with respect to insider corruption exist under generic assumptions, among them a semantically secure [[public-key-encryption|PKE]] scheme, a [[digital-signature|signature scheme]] and a [[zero-knowledge-proof#zaps|zap]] for $\classNP$ — [[BKM06 - Ring Signatures Stronger Definitions, and Constructions Without Random Oracles|BKM06]].
- For rings of two users, a more efficient scheme without random oracles, based on [[digital-signature#waters-signatures|Waters signatures]], is unforgeable against chosen-subring attacks and unconditionally anonymous against full key exposure — [[BKM06 - Ring Signatures Stronger Definitions, and Constructions Without Random Oracles|BKM06]].

<!-- BEGIN GENERATED participates-in 650058e7ff53 -->

## Participates in

**Builds on Ring signature**

- [[ring-signature-to-fixed-ring-ring-signature|Ring signatures ⇒ Ring signatures with fixed-ring unforgeability]]

**Produces Ring signature**

- [[ring-signature-to-fixed-ring-ring-signature|Ring signatures ⇒ Ring signatures with fixed-ring unforgeability]] (via [[ring-signature#fixed-ring-unforgeability|Fixed-ring unforgeability]])
- [[tdp-to-fixed-ring-ring-signature-rst01|TDP ⇒ Ring signatures with fixed-ring unforgeability (Rivest–Shamir–Tauman)]] (via [[ring-signature#fixed-ring-unforgeability|Fixed-ring unforgeability]])

<!-- END GENERATED participates-in -->
