---
type: primitive
status: draft
aliases:
  - ID
  - Identification scheme
title: Identification scheme
id: identification-scheme
variants:
  schnorr-identification-protocol: "#schnorr-identification-protocol"
  concurrent-schnorr-identification: "#schnorr-identification-under-concurrent-attack"
  okamoto-identification-protocol: "#okamoto-identification-protocol"
unlisted: true
---

# Identification scheme

A protocol in which a prover holding a secret key convinces a verifier holding the matching public key of its identity, canonically as a three-message commit-challenge-response sigma protocol such as Schnorr's proof of knowledge of a discrete logarithm.

## Syntax

An identification scheme is a tuple $\Pi = (\KeyGen, P, V)$, following the [[interactive-protocol|two-party protocol]] syntax:

- $\KeyGen(1^\secpar) \to (\sk, \pk)$, a randomized algorithm sampling a key pair,
- $P$ and $V$ are interactive algorithms, the prover on input $\sk$ and the verifier on input $\pk$; at the end $V$ outputs a bit $b \in \bits$, accepting iff $b = 1$.

We write $\langle P(\sk), V(\pk) \rangle \to (\bot, b)$. A canonical (three-move, public-coin) scheme has the prover send a commitment $a$, the verifier reply with a uniform challenge $e$ from a challenge space $C$, and the prover answer with a response $z$; $V$ accepts or rejects as a deterministic function of $(\pk, a, e, z)$.

## Properties

### Correctness

$\Pi$ is **perfectly correct** if for all $\secpar$, $\Pr\!\left[b = 1\right] = 1$, where $(\sk, \pk) \gets \KeyGen(1^\secpar)$ and $(\bot, b) \gets \langle P(\sk), V(\pk) \rangle$.

### Impersonation under passive attack

The adversary first sees transcripts of honest executions, then interacts with an honest verifier in the role of the prover.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\text{imp-pa}}_{\Pi,\calA}(\secpar)$}
\begin{algorithmic}
\State $(\sk, \pk) \gets \KeyGen(1^\secpar)$
\State $\stA \gets \calA^{\calO_{\text{tr}}}(1^\secpar, \pk)$
\Comment{Phase 1: honest transcripts}
\State Run $\langle \calA(\stA), V(\pk) \rangle$; let $b$ be the output of $V$
\Comment{Phase 2: $\calA$ acts as the prover}
\Return $b$
\end{algorithmic}
\end{algorithm}
```

```pseudocode
\begin{algorithm}
\algname{Oracle}
\caption{$\calO_{\text{tr}}()$}
\begin{algorithmic}
\State Run $\langle P(\sk), V(\pk) \rangle$ with fresh coins; let $\tau$ be its transcript
\Return $\tau$
\end{algorithmic}
\end{algorithm}
```

$\Pi$ is **secure against impersonation under passive attack** if for all efficient $\calA$,

$$
\Adv^{\text{imp-pa}}_{\Pi,\calA}(\secpar) := \Pr\!\left[\Game^{\text{imp-pa}}_{\Pi,\calA}(\secpar) = 1\right]
$$

is negligible.

### Impersonation under active and concurrent attack

In phase 1 the adversary plays the verifier, possibly dishonestly, in sessions with prover instances holding $\sk$; in phase 2 it has no prover access and must make an honest verifier accept. Under **concurrent attack** it may interleave the phase-1 sessions arbitrarily; under **active attack** it must finish each session before opening the next — [[BP02 - GQ and Schnorr Identification Schemes Proofs of Security against Impersonation under Active and Concurrent Attacks|BP02]].

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\text{imp-ca}}_{\Pi,\calA}(\secpar)$}
\begin{algorithmic}
\State $(\sk, \pk) \gets \KeyGen(1^\secpar)$
\State $\stA \gets \calA^{\calO_{\text{prov}}}(1^\secpar, \pk)$
\Comment{Phase 1: $\calA$ plays the verifier}
\State Run $\langle \calA(\stA), V(\pk) \rangle$; let $b$ be the output of $V$
\Comment{Phase 2: no prover access}
\Return $b$
\end{algorithmic}
\end{algorithm}
```

```pseudocode
\begin{algorithm}
\algname{Oracle}
\caption{$\calO_{\text{prov}}(i, M)$}
\begin{algorithmic}
\If{session $i$ is new}
\State start a prover $P_i(\sk)$ with fresh coins
\EndIf
\State feed $M$ to $P_i$; let $M'$ be its next message
\Return $M'$
\end{algorithmic}
\end{algorithm}
```

$\Pi$ is **secure against impersonation under concurrent attack** if for all efficient $\calA$,

$$
\Adv^{\text{imp-ca}}_{\Pi,\calA}(\secpar) := \Pr\!\left[\Game^{\text{imp-ca}}_{\Pi,\calA}(\secpar) = 1\right]
$$

is negligible. Security against impersonation under **active attack** is the same with $\calA$ restricted to sequential sessions. A passive adversary can be simulated by an active one that plays the honest verifier, so concurrent security implies active security, which implies passive security — standard.

# Variations

## Schnorr identification protocol

For $h = g^x$ in a group of prime order $p$, the prover sends $a = g^r$ for $r \getsr \ZZ_p$, receives a uniform challenge $e$ from a challenge space $C \subseteq \ZZ_p$ with $1/|C|$ negligible, and replies $z = r + ex \bmod p$; the verifier accepts iff $g^z = a h^e$. The protocol is special sound and perfectly honest-verifier zero-knowledge — [[Sch91 - Efficient signature generation by smart cards|Sch91]]. As an object, the Schnorr identification protocol denotes this protocol with security against impersonation under passive attack.

### Schnorr identification under concurrent attack

The Schnorr identification protocol, required to be secure against impersonation under concurrent attack: an adversary that first runs arbitrarily many interleaved sessions, as verifier, with honest provers holding $x = \log_g h$ makes an honest verifier accept with negligible probability — [[BP02 - GQ and Schnorr Identification Schemes Proofs of Security against Impersonation under Active and Concurrent Attacks|BP02]]. Active attack is the special case of non-interleaved sessions.

## Okamoto identification protocol

The public parameters are independent generators $g_1, g_2$ of a group of prime order $p$. The secret key is $(x_1, x_2) \getsr \ZZ_p^2$ and the public key is $X = g_1^{x_1} g_2^{x_2}$. The prover sends $A = g_1^{r_1} g_2^{r_2}$ for $r_1, r_2 \getsr \ZZ_p$, receives $e \getsr C$ from a challenge space $C \subseteq \ZZ_p$ with $1/|C|$ negligible, and replies $z_j = r_j + e x_j \bmod p$ for $j = 1, 2$; the verifier accepts iff $g_1^{z_1} g_2^{z_2} = A X^e$ — [[Oka92 - Provably Secure and Practical Identification Schemes and Corresponding Signature Schemes|Oka92]]. Each public key has $p$ secret keys, and the transcripts of every phase-1 session are distributed independently of which one the prover holds: the protocol is perfectly witness-indistinguishable — standard. As an object, the Okamoto identification protocol denotes this protocol with security against impersonation under active attack.

<!-- BEGIN GENERATED participates-in 233d96518802 -->

## Participates in

**Builds on Identification scheme**

- [[concurrent-schnorr-identification-to-schnorr-identification-protocol|Schnorr identification under concurrent attack ⇒ Schnorr identification protocol]] (via [[identification-scheme#schnorr-identification-under-concurrent-attack|Schnorr identification under concurrent attack]])
- [[fiat-shamir-and-schnorr-signatures-to-schnorr-signatures-sch91|Schnorr identification ⇒ Schnorr signatures (Fiat–Shamir)]] (via [[identification-scheme#schnorr-identification-protocol|Schnorr identification protocol]])
- [[id-and-rom-to-ds|ID ⇒ DS]]
- [[identification-scheme-to-owf-il89|ID ⇒ OWF]]

**Produces Identification scheme**

- [[concurrent-schnorr-identification-to-schnorr-identification-protocol|Schnorr identification under concurrent attack ⇒ Schnorr identification protocol]] (via [[identification-scheme#schnorr-identification-protocol|Schnorr identification protocol]])
- [[dlog-to-schnorr-signatures-sch91|DLOG ⇒ Schnorr identification protocol]] (via [[identification-scheme#schnorr-identification-protocol|Schnorr identification protocol]])
- [[omdl-to-concurrent-schnorr-identification-bp02|OMDL ⇒ Schnorr identification under concurrent attack]] (via [[identification-scheme#schnorr-identification-under-concurrent-attack|Schnorr identification under concurrent attack]])
- [[prime-order-dlog-to-okamoto-identification-protocol-oka92|DLOG ⇒ Okamoto identification protocol]] (via [[identification-scheme#okamoto-identification-protocol|Okamoto identification protocol]])

**Barriers**

- [[no-bounded-round-assumption-to-concurrent-schnorr-identification-pas11|No fully-black-box reduction from bounded-round assumptions to Schnorr identification under concurrent attack]] (via [[identification-scheme#schnorr-identification-under-concurrent-attack|Schnorr identification under concurrent attack]])

<!-- END GENERATED participates-in -->
