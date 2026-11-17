---
type: primitive
status: draft
aliases:
  - Deniable encryption
  - Sender-deniable encryption
title: Deniable encryption
id: deniable-encryption
variants:
  publicly-deniable-encryption: "#public-deniability"
  receiver-deniable-encryption: "#receiver-deniability"
  bi-deniable-encryption: "#bi-deniability"
---

# Deniable encryption

A deniable encryption scheme is a public-key encryption scheme in which a sender who is forced to reveal both the message and the randomness used to encrypt it can instead produce convincing fake randomness explaining the ciphertext as an encryption of any alternative message: the ciphertext with the fake randomness is indistinguishable from an honest encryption of that message with its true randomness — [[CDNO97 - Deniable Encryption|CDNO97]].

## Syntax

A sender-deniable encryption scheme is a tuple of efficient algorithms $\mathsf{DE} = (\KeyGen, \Enc, \Dec, \mathsf{Fake})$ such that $(\KeyGen, \Enc, \Dec)$ is a [[public-key-encryption|PKE]] scheme with message space $\calM$ whose encryption uses coins from a set $\calR$:

- $\KeyGen(1^\secpar) \to (\sk, \pk)$, a randomized algorithm sampling a key pair,
- $\Enc(\pk, m; r) \to c$, encryption of $m \in \calM$ under explicit coins $r \in \calR$, which an honest sender samples uniformly,
- $\Dec(\sk, c) \to m$, a deterministic algorithm outputting a message or $\bot$,
- $\mathsf{Fake}(\pk, m, r, m') \to \tilde r$, a randomized algorithm which takes the real message $m$, the real coins $r$ and a fake message $m' \in \calM$, outputting fake coins $\tilde r \in \calR$.

## Properties

### Correctness

$\mathsf{DE}$ is $(1-\varepsilon)$-**correct** if $(\KeyGen, \Enc, \Dec)$ is a $(1-\varepsilon)$-[[public-key-encryption#correctness|correct]] PKE scheme.

### Sender deniability

The adversary chooses a real message $m$ and a fake message $m'$. In world 0 it receives an honest encryption of $m'$ together with its coins; in world 1 it receives an encryption of $m$ together with the coins that $\mathsf{Fake}$ produces to explain it as an encryption of $m'$. An admissible adversary submits $m, m' \in \calM$ with $|m| = |m'|$; otherwise ciphertext length may reveal $b$.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{deny}}_{\mathsf{DE},\calA}(\secpar)$}
\begin{algorithmic}
\State $(\sk, \pk) \gets \KeyGen(1^\secpar)$; $b \getsr \bits$
\State $(m, m', \stA) \gets \calA(1^\secpar, \pk)$
\Comment{$m, m' \in \calM$ and $|m| = |m'|$}
\State $r \getsr \calR$
\State $c_0 \gets \Enc(\pk, m'; r)$; $\rho_0 \gets r$
\Comment{World 0: honest encryption of $m'$}
\State $c_1 \gets \Enc(\pk, m; r)$; $\rho_1 \gets \mathsf{Fake}(\pk, m, r, m')$
\Comment{World 1: encryption of $m$, explained as $m'$}
\State $b' \gets \calA(c_b, \rho_b, \stA)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

Let

$$
\Adv^{\mathrm{deny}}_{\mathsf{DE},\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{deny}}_{\mathsf{DE},\calA}(\secpar) = 1\right] - 1\right|.
$$

Following [[CDNO97 - Deniable Encryption|CDNO97]], $\mathsf{DE}$ is $\delta$-**sender-deniable**, for a function $\delta$, if $(\KeyGen, \Enc, \Dec)$ is [[public-key-encryption#cpa-security|CPA-secure]] and for all admissible efficient $\calA$, $\Adv^{\mathrm{deny}}_{\mathsf{DE},\calA}(\secpar) \le \delta(\secpar)$ for all sufficiently large $\secpar$. $\mathsf{DE}$ is **sender-deniable** if for all admissible efficient $\calA$, $\Adv^{\mathrm{deny}}_{\mathsf{DE},\calA}(\secpar)$ is negligible. As an object, deniable encryption denotes a $(1-\negl(\secpar))$-correct, sender-deniable scheme.

An adversary that outputs $1$ exactly when $\Enc(\pk, m'; \rho_b) \ne c_b$ has advantage equal to the probability that the fake coins fail to open $c_1$ to $m'$, so fake coins are consistent except with probability at most $\delta$ — standard. Ignoring $\rho_b$, the game is the [[public-key-encryption#cpa-security|CPA game]] for the pair $(m', m)$, so the CPA advantage of a $\delta$-sender-deniable scheme is at most $\delta$ and a sender-deniable scheme is CPA-secure — standard. For inverse-polynomial $\delta$, the bound gives only CPA advantage at most $\delta$, so the definition of [[CDNO97 - Deniable Encryption|CDNO97]] requires CPA security as a separate clause.

# Variations

## Public deniability

A scheme is **publicly deniable** if $\mathsf{Fake}$ sees $m$ and $r$ only through the ciphertext: $\mathsf{Fake}(\pk, m, r, m') = \mathsf{Explain}(\pk, \Enc(\pk, m; r), m')$ for an efficient randomized algorithm $\mathsf{Explain}$, so that anyone can explain any ciphertext as an encryption of any message; [[SW14 - How to Use Indistinguishability Obfuscation Deniable Encryption, and More|SW14]] call this algorithm $\mathsf{Explain}$. The scheme has **indistinguishable explanations** if for every $m \in \calM$, every efficient algorithm has negligible advantage in distinguishing $(\pk, c, r)$ from $(\pk, c, \mathsf{Explain}(\pk, c, m))$, for $(\sk, \pk) \gets \KeyGen(1^\secpar)$, $r \getsr \calR$ and $c = \Enc(\pk, m; r)$; [[SW14 - How to Use Indistinguishability Obfuscation Deniable Encryption, and More|SW14]] call the requirement indistinguishability of explanation. As an object, publicly deniable encryption denotes a $(1-\negl(\secpar))$-correct, CPA-secure, publicly deniable scheme with indistinguishable explanations.

Such a scheme is sender-deniable for $m, m'$ fixed before $\KeyGen$: CPA security replaces $\Enc(\pk, m; r)$ by $\Enc(\pk, m'; r)$ under $\mathsf{Explain}(\pk, \cdot, m')$, and indistinguishability of explanations for $m'$ then replaces the explanation by $r$ — standard. With explanations indistinguishable also for $m$ chosen after $\pk$, the same hybrids give sender deniability as defined above — standard. The fixed-message form does not suffice for that when $\bits^\secpar \subseteq \calM$: append a uniform $u \getsr \bits^\secpar$ to the public key of any such scheme and let $\mathsf{Explain}$ output a fixed $\bar r \in \calR$ on fake message $u$. Correctness, CPA security and indistinguishability of explanations for each fixed $m$ survive, the last up to an additive $2^{-\secpar}$, but the adversary that submits $m' = u$ and outputs $[\rho_b = \bar r]$ has $\Adv^{\mathrm{deny}}_{\mathsf{DE},\calA}(\secpar) = 1 - 1/|\calR|$.

## Receiver deniability

A coerced receiver reveals key-generation coins. A **receiver-deniable** scheme has an algorithm $\mathsf{Fake}_R(\pk, s, c, m') \to \tilde s$ that, given $\pk$, the receiver's coins $s \in \calS$ with $(\sk, \pk) = \KeyGen(1^\secpar; s)$, where $\calS$ is the coin set of $\KeyGen$, a ciphertext $c$ and a fake message $m'$, outputs fake coins $\tilde s \in \calS$, such that for all $m, m' \in \calM$ with $|m| = |m'|$, $(\pk, c, \tilde s)$ for $s \getsr \calS$, $c \gets \Enc(\pk, m)$ and $\tilde s \gets \mathsf{Fake}_R(\pk, s, c, m')$ is indistinguishable from $(\pk, c, s)$ for $s \getsr \calS$ and $c \gets \Enc(\pk, m')$. [[CDNO97 - Deniable Encryption|CDNO97]] formulate this requirement, and the one below, alongside sender deniability. As an object, receiver-deniable encryption denotes a $(1-\negl(\secpar))$-correct, CPA-secure scheme $(\KeyGen, \Enc, \Dec)$ with such an algorithm $\mathsf{Fake}_R$, for which every efficient distinguisher between the two distributions has negligible advantage.

## Bi-deniability

A **bi-deniable** scheme lets sender and receiver, coerced together, each compute fake coins from its own state alone (the sender for encryption, the receiver for key generation) that jointly explain $c$ as an encryption of $m'$, indistinguishably from the true coins of an honest encryption of $m'$ — [[CDNO97 - Deniable Encryption|CDNO97]]. Both parties run the prescribed $\KeyGen$ and $\Enc$; the sender fakes with $\mathsf{Fake}$ and the receiver with $\mathsf{Fake}_R$ from [[#Receiver deniability|receiver deniability]], so a bi-deniable scheme is a tuple $\mathsf{DE} = (\KeyGen, \Enc, \Dec, \mathsf{Fake}, \mathsf{Fake}_R)$. An admissible adversary submits $m, m' \in \calM$ with $|m| = |m'|$, as in the sender game.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{bi\text{-}deny}}_{\mathsf{DE},\calA}(\secpar)$}
\begin{algorithmic}
\State $s \getsr \calS$; $(\sk, \pk) \gets \KeyGen(1^\secpar; s)$; $b \getsr \bits$
\State $(m, m', \stA) \gets \calA(1^\secpar, \pk)$
\Comment{$m, m' \in \calM$ and $|m| = |m'|$}
\State $r \getsr \calR$
\State $c_0 \gets \Enc(\pk, m'; r)$; $\rho_0 \gets r$; $\sigma_0 \gets s$
\Comment{World 0: honest encryption of $m'$, true coins}
\State $c_1 \gets \Enc(\pk, m; r)$; $\rho_1 \gets \mathsf{Fake}(\pk, m, r, m')$; $\sigma_1 \gets \mathsf{Fake}_R(\pk, s, c_1, m')$
\Comment{World 1: encryption of $m$, both parties' coins faked}
\State $b' \gets \calA(c_b, \rho_b, \sigma_b, \stA)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

Let

$$
\Adv^{\mathrm{bi\text{-}deny}}_{\mathsf{DE},\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{bi\text{-}deny}}_{\mathsf{DE},\calA}(\secpar) = 1\right] - 1\right|.
$$

As an object, bi-deniable encryption denotes a $(1-\negl(\secpar))$-correct, CPA-secure scheme for which this advantage is negligible for all efficient admissible $\calA$.

## Multi-distributional bi-deniability

In the **multi-distributional** model, parties who may later need to equivocate run alternative key-generation and encryption algorithms, and under coercion claim to have run the prescribed ones. [[OPW11 - Bi-Deniable Public-Key Encryption|OPW11]] construct non-interactive bi-deniable public-key encryption in this model, generically from simulatable encryption, and from lattices building on [[GPV08 - Trapdoors for hard lattices and new cryptographic constructions|GPV08]].

TODO: the syntax and security game of [[OPW11 - Bi-Deniable Public-Key Encryption|OPW11]] (the alternative key-generation and encryption algorithms, and what the coerced parties reveal), stated from the paper, before this notion is registered as a variant.

# Other results

- From [[indistinguishability-obfuscation|iO]] and [[hash-function#preimage-resistance-one-wayness|one-way functions]], [[SW14 - How to Use Indistinguishability Obfuscation Deniable Encryption, and More|SW14]] construct a CPA-secure, publicly deniable and sender-deniable scheme ([[hash-function-and-io-to-deniable-encryption-sw14|OWF + iO ⇒ Deniable encryption]]).
- [[CDNO97 - Deniable Encryption|CDNO97]] construct $\delta$-sender-deniable schemes for inverse-polynomial $\delta$ from translucent sets, which exist if [[trapdoor-permutation|trapdoor permutations]] do; the ciphertext length grows as $\delta$ decreases.
- [[BNNO11 - Lower and Upper Bounds for Deniable Public-Key Encryption|BNNO11]] prove that no non-interactive public-key encryption scheme in which the parties run the prescribed algorithms is receiver-deniable with negligible distinguishing advantage, hence none is bi-deniable either; they bound the distinguishing advantage from below in terms of the key length, and give constructions that bound it from above.

<!-- BEGIN GENERATED participates-in 4435ddd74f94 -->

## Participates in

**Produces Deniable encryption**

- [[hash-function-and-io-to-deniable-encryption-sw14|OWF + iO ⇒ Deniable encryption]]

<!-- END GENERATED participates-in -->
