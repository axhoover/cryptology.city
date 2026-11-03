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

A public-key encryption scheme in which a sender who is forced to reveal both the message and the randomness used to encrypt it can instead produce convincing fake randomness explaining the ciphertext as an encryption of any alternative message: the ciphertext with the fake randomness is indistinguishable from an honest encryption of that message with its true randomness — [[CDNO97 - Deniable Encryption|CDNO97]].

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

The adversary chooses a real message $m$ and a fake message $m'$. In world 0 it receives an honest encryption of $m'$ together with its coins; in world 1 it receives an encryption of $m$ together with the coins that $\mathsf{Fake}$ produces to explain it as an encryption of $m'$. An admissible adversary submits $m, m' \in \calM$ with $|m| = |m'|$.

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

Following [[CDNO97 - Deniable Encryption|CDNO97]], $\mathsf{DE}$ is $\delta$-**sender-deniable**, for a function $\delta$, if for all admissible efficient $\calA$, $\Adv^{\mathrm{deny}}_{\mathsf{DE},\calA}(\secpar) \le \delta(\secpar)$ for all sufficiently large $\secpar$. $\mathsf{DE}$ is **sender-deniable** if for all admissible efficient $\calA$, $\Adv^{\mathrm{deny}}_{\mathsf{DE},\calA}(\secpar)$ is negligible.

An adversary that outputs $1$ exactly when $\Enc(\pk, m'; \rho_b) \ne c_b$ has advantage equal to the probability that the fake coins fail to open $c_1$ to $m'$, so fake coins are consistent except with probability at most $\delta$ — standard. Ignoring $\rho_b$, the game is the [[public-key-encryption#cpa-security|CPA game]] for the pair $(m', m)$, so the CPA advantage of a $\delta$-sender-deniable scheme is at most $\delta$ and a sender-deniable scheme is CPA-secure — standard. For inverse-polynomial $\delta$, CPA security is a separate requirement.

# Variations

## Public deniability

A scheme is **publicly deniable** if $\mathsf{Fake}$ depends on $m$ and $r$ only through $c = \Enc(\pk, m; r)$, so that anyone can explain any ciphertext as an encryption of any message; [[SW14 - How to Use Indistinguishability Obfuscation Deniable Encryption, and More|SW14]] call this algorithm $\mathsf{Explain}$. Their indistinguishability of explanation requires that for every message $m$, given $\pk$, the pairs $(c, r)$ and $(c, \mathsf{Fake}(\pk, c, m))$ for $c = \Enc(\pk, m; r)$ and uniform $r$ be computationally indistinguishable. A CPA-secure scheme with indistinguishable explanations is sender-deniable — [[SW14 - How to Use Indistinguishability Obfuscation Deniable Encryption, and More|SW14]].

## Receiver deniability

A coerced receiver reveals key-generation coins. A **receiver-deniable** scheme has an algorithm that, given $\pk$, the receiver's coins $s$ with $(\sk, \pk) = \KeyGen(1^\secpar; s)$, a ciphertext $c$ and a fake message $m'$, outputs fake coins $\tilde s$, such that $(\pk, c, \tilde s)$ for $c \gets \Enc(\pk, m)$ is indistinguishable from $(\pk, c, s)$ for $c \gets \Enc(\pk, m')$. [[CDNO97 - Deniable Encryption|CDNO97]] formulate this requirement, and the one below, alongside sender deniability.

## Bi-deniability

A **bi-deniable** scheme lets sender and receiver, coerced together, reveal fake coins for encryption and for key generation that jointly explain $c$ as an encryption of $m'$, indistinguishably from the true coins of an honest encryption of $m'$ — [[CDNO97 - Deniable Encryption|CDNO97]].

In the **multi-distributional** model, parties who may later need to equivocate run alternative key-generation and encryption algorithms, and under coercion claim to have run the prescribed ones. [[OPW11 - Bi-Deniable Public-Key Encryption|OPW11]] construct non-interactive bi-deniable public-key encryption in this model, generically from simulatable encryption, and from lattices building on [[GPV08 - Trapdoors for hard lattices and new cryptographic constructions|GPV08]].

# Other results

- From [[indistinguishability-obfuscation|iO]] and one-way functions, [[SW14 - How to Use Indistinguishability Obfuscation Deniable Encryption, and More|SW14]] construct a CPA-secure publicly deniable, hence sender-deniable, scheme ([[hash-function-and-io-to-deniable-encryption-sw14|OWF + iO ⇒ Deniable encryption]]).
- [[CDNO97 - Deniable Encryption|CDNO97]] construct $\delta$-sender-deniable schemes for inverse-polynomial $\delta$ from translucent sets, which exist if [[trapdoor-permutation|trapdoor permutations]] do; the ciphertext length grows as $\delta$ decreases.
- [[BNNO11 - Lower and Upper Bounds for Deniable Public-Key Encryption|BNNO11]] prove that no non-interactive receiver-deniable public-key encryption scheme in which the parties run the prescribed algorithms has negligible deniability, hence no such bi-deniable scheme either; they bound the distinguishing advantage from below in terms of the key length, and give constructions that bound it from above.

<!-- BEGIN GENERATED participates-in 4435ddd74f94 -->

## Participates in

**Produces Deniable encryption**

- [[hash-function-and-io-to-deniable-encryption-sw14|OWF + iO ⇒ Deniable encryption]]

<!-- END GENERATED participates-in -->
