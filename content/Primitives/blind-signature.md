---
type: primitive
status: draft
aliases:
  - Blind signature
  - Blind signatures
title: Blind signature
id: blind-signature
variants:
  blind-schnorr-signature: "#blind-schnorr-signatures"
  blind-okamoto-schnorr-signature: "#blind-okamoto-schnorr-signatures"
---

# Blind signature

A blind signature scheme is a [[digital-signature|signature scheme]] whose signing algorithm is an interactive protocol between a signer holding the secret key and a user holding a message: the user obtains a signature on the message, while the signer learns nothing about the message or the resulting signature — [[Cha82 - Blind Signatures for Untraceable Payments|Cha82]].

## Syntax

A blind signature scheme is a tuple $(\KeyGen, S, U, \Vrfy)$, following the [[interactive-protocol|two-party protocol]] syntax:

- $\KeyGen(1^\secpar) \to (\sk, \pk)$, a randomized algorithm sampling a key pair,
- $S$ (the signer, on input $\sk$) and $U$ (the user, on input $\pk$ and a message $m \in \calM$) are interactive algorithms with $\langle S(\sk), U(\pk, m) \rangle \to (\bot, \sigma)$, where $\sigma$ is a signature or $\bot$,
- $\Vrfy(\pk, m, \sigma) \to b$, a deterministic algorithm outputting a bit $b \in \bits$.

## Properties

### Correctness

The scheme is **perfectly correct** if for all $m \in \calM$, $\Pr\!\left[\Vrfy(\pk, m, \sigma) = 1\right] = 1$, where $(\sk, \pk) \gets \KeyGen(1^\secpar)$ and $(\bot, \sigma) \gets \langle S(\sk), U(\pk, m) \rangle$.

### One-more unforgeability

The adversary plays the user in signer sessions that it may interleave arbitrarily; after completing $\ell$ of them it must not output valid signatures on $\ell + 1$ distinct messages — [[PS00 - Security Arguments for Digital Signatures and Blind Signatures|PS00]].

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\text{omuf}}_{\Pi,\calA}(\secpar)$}
\begin{algorithmic}
\State $(\sk, \pk) \gets \KeyGen(1^\secpar)$ ; $\ell \gets 0$
\State $((m_1, \sigma_1), \ldots, (m_k, \sigma_k)) \gets \calA^{\calO_{S}}(1^\secpar, \pk)$
\Return $\big[k > \ell \land m_1, \ldots, m_k \text{ distinct} \land \forall_{i \in [k]}~\Vrfy(\pk, m_i, \sigma_i) = 1\big]$
\end{algorithmic}
\end{algorithm}
```

```pseudocode
\begin{algorithm}
\algname{Oracle}
\caption{$\calO_{S}(j, M)$}
\begin{algorithmic}
\If{session $j$ is new}
\State start a signer $S_j(\sk)$ with fresh coins
\EndIf
\State feed $M$ to $S_j$; let $M'$ be its next message
\If{$S_j$ has sent its last message}
\State $\ell \gets \ell + 1$
\EndIf
\Return $M'$
\end{algorithmic}
\end{algorithm}
```

The scheme is **one-more unforgeable** if for all efficient $\calA$,

$$
\Adv^{\text{omuf}}_{\Pi,\calA}(\secpar) := \Pr\!\left[\Game^{\text{omuf}}_{\Pi,\calA}(\secpar) = 1\right]
$$

is negligible. **Strong** one-more unforgeability asks only that the $k$ pairs $(m_i, \sigma_i)$ be distinct — standard.

### Blindness

The adversary plays the signer, with a public key of its choice, in two sessions with honest users on messages $m_0, m_1$ it chooses, the first session on $m_b$ and the second on $m_{1-b}$ for a hidden bit $b$; it then gets both signatures and must guess $b$ — standard.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\text{blind}}_{\Pi,\calA}(\secpar)$}
\begin{algorithmic}
\State $(\pk, m_0, m_1, \stA) \gets \calA(1^\secpar)$ ; $b \getsr \bits$
\State Run $\langle \calA(\stA), U(\pk, m_b) \rangle$ and $\langle \calA(\stA), U(\pk, m_{1-b}) \rangle$, scheduled by $\calA$
\Comment{the first session yields $\sigma_b$, the second $\sigma_{1-b}$}
\If{$\sigma_0 = \bot$ or $\sigma_1 = \bot$}
\State $(\sigma_0, \sigma_1) \gets (\bot, \bot)$
\EndIf
\State $b' \gets \calA(\stA, \sigma_0, \sigma_1)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

The scheme is **blind** if for all efficient $\calA$,

$$
\Adv^{\text{blind}}_{\Pi,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\text{blind}}_{\Pi,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible.

# Variations

## Blind Schnorr signatures

The key pair is a [[digital-signature#schnorr-signatures|Schnorr]] key pair $(x, X = g^x)$ in a group of prime order $p$, and a signature is an ordinary Schnorr signature. The signer sends $R = g^r$ for $r \getsr \ZZ_p$. The user samples $\alpha, \beta \getsr \ZZ_p$, sets $R' = R g^{\alpha} X^{\beta}$ and $c' = H(R' \| m)$, and sends $c = c' + \beta \bmod p$. The signer replies $s = r + cx \bmod p$; the user checks $g^s = R X^c$ and outputs $\sigma = (R', s + \alpha)$, which satisfies $g^{s + \alpha} = R' X^{c'}$ — [[Sch01 - Security of Blind Discrete Log Signatures against Interactive Attacks|Sch01]], [[FPS20 - Blind Schnorr Signatures and Signed ElGamal Encryption in the Algebraic Group Model|FPS20]]. Every valid signature is consistent with every signer session under exactly one choice of $(\alpha, \beta)$, so the scheme is perfectly blind — standard. As an object, blind Schnorr signatures denote the scheme with one-more unforgeability against polynomially many concurrent sessions.

Blind Schnorr signatures are not one-more unforgeable: an adversary that opens $\ell > \log p$ concurrent sessions forges $\ell + 1$ signatures in polynomial time, by solving the [[ros-problem|ROS problem]] — [[BLLOR21 - On the (in)security of ROS|BLLOR21]].

## Blind Okamoto-Schnorr signatures

The blind version of the Fiat–Shamir transform of the [[identification-scheme#okamoto-identification-protocol|Okamoto identification protocol]], with public key $X = g_1^{x_1} g_2^{x_2}$. The signer sends $A = g_1^{r_1} g_2^{r_2}$. The user samples $\alpha_1, \alpha_2, \beta \getsr \ZZ_p$, sets $A' = A g_1^{\alpha_1} g_2^{\alpha_2} X^{\beta}$ and $c' = H(A' \| m)$, and sends $c = c' + \beta \bmod p$. The signer replies $z_j = r_j + c x_j \bmod p$, and the user outputs $(A', z_1 + \alpha_1, z_2 + \alpha_2)$, which satisfies $g_1^{z_1 + \alpha_1} g_2^{z_2 + \alpha_2} = A' X^{c'}$ — [[PS00 - Security Arguments for Digital Signatures and Blind Signatures|PS00]]. As an object, blind Okamoto–Schnorr signatures denote the scheme with one-more unforgeability against a number of signer sessions logarithmic in $\secpar$, which may run in parallel.

# Other results

- A transformation of blind Okamoto–Schnorr signatures gives a scheme secure against polynomially many sequential signer interactions — [[Poi98 - Strengthened Security for Blind Signatures|Poi98]].
- Chaum's RSA blind signature is one-more unforgeable in the random-oracle model under the one-more RSA-inversion assumption — [[BNPS03 - The One-More-RSA-Inversion Problems and the Security of Chaum's Blind Signature Scheme|BNPS03]].

<!-- BEGIN GENERATED participates-in f279ce426cc2 -->

## Participates in

**Produces Blind signature**

- [[omdl-and-ros-to-blind-schnorr-signature-fps20|OMDL + ROS ⇒ Blind Schnorr signatures]] (via [[blind-signature#blind-schnorr-signatures|Blind Schnorr signatures]])
- [[prime-order-dlog-to-blind-okamoto-schnorr-signature-ps00|DLOG ⇒ Blind Okamoto–Schnorr signatures]] (via [[blind-signature#blind-okamoto-schnorr-signatures|Blind Okamoto-Schnorr signatures]])

<!-- END GENERATED participates-in -->
