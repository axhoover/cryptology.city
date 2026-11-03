---
type: primitive
status: draft
aliases:
  - Chameleon hash
  - Chameleon hash function
  - Chameleon hashing
title: Chameleon hash function
id: chameleon-hash-function
---

# Chameleon hash function

A chameleon hash function is a keyed, randomized hash function $\mathsf{CH}(\mathit{hk}, m; r)$ that is collision-resistant for every efficient adversary given only the hash key $\mathit{hk}$, while the holder of a trapdoor $\td$ can, for any $(m, r)$ and any $m'$, find $r'$ with $\mathsf{CH}(\mathit{hk}, m'; r') = \mathsf{CH}(\mathit{hk}, m; r)$ — [[KR00 - Chameleon Signatures|KR00]].

## Syntax

A chameleon hash function is a tuple of efficient algorithms $(\KeyGen, \mathsf{CH}, \mathsf{TCol})$ with message space $\calM$, randomness space $\calR$, and range $\calY$ — [[KR00 - Chameleon Signatures|KR00]]:

- $\KeyGen(1^\secpar) \to (\mathit{hk}, \td)$, a randomized algorithm outputting a public hash key $\mathit{hk}$ and a trapdoor $\td$,
- $\mathsf{CH}(\mathit{hk}, m; r) \to y$, a deterministic algorithm which takes the hash key, a message $m \in \calM$ and randomness $r \in \calR$, outputting $y \in \calY$; hashing samples $r \getsr \calR$,
- $\mathsf{TCol}(\td, m, r, m') \to r'$, an algorithm which takes the trapdoor, a message–randomness pair $(m, r)$ and a second message $m' \in \calM$, outputting $r' \in \calR$.

## Properties

### Correctness

A chameleon hash function is **correct** if for all $\secpar \in \NN$, all $(\mathit{hk}, \td)$ output by $\KeyGen(1^\secpar)$, all $m, m' \in \calM$ and all $r \in \calR$, the output $r' \gets \mathsf{TCol}(\td, m, r, m')$ satisfies $\mathsf{CH}(\mathit{hk}, m'; r') = \mathsf{CH}(\mathit{hk}, m; r)$. The stronger requirement that $r'$ be uniform in $\calR$ whenever $r$ is holds for both constructions under [[#Other results]], since there $\mathsf{TCol}(\td, m, \cdot, m')$ is a bijection of $\calR$.

### Collision resistance

The adversary, given only $\mathit{hk}$, must find two message–randomness pairs with distinct messages and the same hash value — [[KR00 - Chameleon Signatures|KR00]].

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{cr}}_{\mathsf{CH},\calA}(\secpar)$}
\begin{algorithmic}
\State $(\mathit{hk}, \td) \gets \KeyGen(1^\secpar)$
\State $(m, r, m', r') \gets \calA(1^\secpar, \mathit{hk})$
\Return $[m \ne m' \wedge \mathsf{CH}(\mathit{hk}, m; r) = \mathsf{CH}(\mathit{hk}, m'; r')]$
\end{algorithmic}
\end{algorithm}
```

A chameleon hash function is **collision-resistant** if for all efficient $\calA$,

$$
\Adv^{\mathrm{cr}}_{\mathsf{CH},\calA}(\secpar) := \Pr\!\left[\Game^{\mathrm{cr}}_{\mathsf{CH},\calA}(\secpar) = 1\right]
$$

is negligible. The trapdoor holder wins with probability $1$ by computing $r' \gets \mathsf{TCol}(\td, m, r, m')$, which is why $\calA$ receives only $\mathit{hk}$.

### Uniformity

For uniform $r$, the hash value is distributed independently of the message, even given the trapdoor.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{unif}}_{\mathsf{CH},\calA}(\secpar)$}
\begin{algorithmic}
\State $(\mathit{hk}, \td) \gets \KeyGen(1^\secpar)$; $b \getsr \bits$
\State $(m_0, m_1, \stA) \gets \calA(1^\secpar, \mathit{hk}, \td)$
\Comment{$m_0, m_1 \in \calM$}
\State $r \getsr \calR$
\State $b' \gets \calA(\mathsf{CH}(\mathit{hk}, m_b; r), \stA)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

Let

$$
\Adv^{\mathrm{unif}}_{\mathsf{CH},\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{unif}}_{\mathsf{CH},\calA}(\secpar) = 1\right] - 1\right|.
$$

A chameleon hash function is **uniform** if $\Adv^{\mathrm{unif}}_{\mathsf{CH},\calA}(\secpar) = 0$ for every $\calA$, efficient or not, that is, if for every hash key output by $\KeyGen$ the distribution of $\mathsf{CH}(\mathit{hk}, m; r)$ over $r \getsr \calR$ is the same for all $m \in \calM$.

# Variations

## Key exposure

In the discrete-logarithm construction ([[prime-order-dlog-to-chameleon-hash-function-kr00|DLOG ⇒ Chameleon hash (Krawczyk–Rabin)]]), any collision $(m, r), (m', r')$ with $m \ne m'$ reveals the trapdoor $x = (m - m')/(r' - r) \bmod p$, so a trapdoor holder who publishes one collision lets anyone compute further collisions. [[AdM04 - On the Key Exposure Problem in Chameleon Hashes|AdM04]] study chameleon hashes in which published collisions do not expose the trapdoor.

## Chameleon encryption

Chameleon encryption extends a chameleon hash with an encryption algorithm keyed by a hash value $y$, a position $i$ and a bit $\beta$, whose ciphertexts can be decrypted with any $(x, r)$ such that $\mathsf{CH}(\mathit{hk}, x; r) = y$ and $x_i = \beta$ — [[DG17a - Identity-Based Encryption from the Diffie-Hellman Assumption|DG17a]]. [[DG17a - Identity-Based Encryption from the Diffie-Hellman Assumption|DG17a]] build it from CDH and use it to construct IBE ([[cdh-to-ind-id-cpa-dg17a|CDH ⇒ IBE (Döttling–Garg)]]).

# Other results

- If DLOG is hard in prime-order groups, $\mathsf{CH}((g, h), m; r) = g^m h^r$ with trapdoor $\log_g h$ is a uniform chameleon hash function ([[prime-order-dlog-to-chameleon-hash-function-kr00|DLOG ⇒ Chameleon hash (Krawczyk–Rabin)]]) — [[KR00 - Chameleon Signatures|KR00]].
- A claw-free pair of trapdoor permutations gives a uniform chameleon hash function on a prefix-free message space ([[claw-free-trapdoor-permutations-to-chameleon-hash-function-kr00|Claw-free TDP ⇒ Chameleon hash (Krawczyk–Rabin)]]) — [[KR00 - Chameleon Signatures|KR00]].
- A uniform chameleon hash function is a non-interactive [[commitment-scheme#trapdoor-commitments|trapdoor commitment]]: the commitment to $m$ is $\mathsf{CH}(\mathit{hk}, m; r)$ and the opening is $r$; uniformity makes it perfectly hiding, collision resistance makes it computationally binding, and $\mathsf{TCol}$ equivocates — standard.
- Chameleon signatures: the signer signs $\mathsf{CH}(\mathit{hk}_R, m; r)$ with an ordinary signature scheme, under the hash key of the recipient $R$; $R$ can produce a valid signature on any message, so the signature does not convince a third party, while the signer can deny a forged signature by exhibiting a collision — [[KR00 - Chameleon Signatures|KR00]].
- Online/offline signatures (hash-sign-switch): offline, the signer signs $\mathsf{CH}(\mathit{hk}, m'; r')$ for random $(m', r')$ with any EUF-CMA-secure signature scheme; online, it computes $r \gets \mathsf{TCol}(\td, m', r', m)$ and outputs $r$ with the precomputed signature. The scheme is EUF-CMA-secure if the signature scheme is EUF-CMA-secure and the chameleon hash is collision-resistant — [[ST01 - Improved Online-Offline Signature Schemes|ST01]].
- [[HW09 - Short and Stateless Signatures from the RSA Assumption|HW09]] turn a weakly secure RSA-based signature scheme into an EUF-CMA-secure one with a chameleon hash ([[rsa-to-ds-hw09|RSA ⇒ DS (Hohenberger–Waters, short and stateless)]]).
- Chameleon hash functions are distinct from [[trapdoor-hash-function|trapdoor hash functions]], whose trapdoor recovers a bit of the input from a short hint.

<!-- BEGIN GENERATED participates-in bfb34ad76edf -->

## Participates in

**Produces Chameleon hash function**

- [[claw-free-trapdoor-permutations-to-chameleon-hash-function-kr00|Claw-free TDP ⇒ Chameleon hash (Krawczyk–Rabin)]]
- [[prime-order-dlog-to-chameleon-hash-function-kr00|DLOG ⇒ Chameleon hash (Krawczyk–Rabin)]]

<!-- END GENERATED participates-in -->
