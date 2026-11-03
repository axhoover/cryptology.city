---
type: primitive
status: draft
aliases:
  - PRE
  - Proxy re-encryption
  - Proxy reencryption
title: Proxy re-encryption
id: pre
variants:
  pre-cca: "#chosen-ciphertext-security"
---

# Proxy re-encryption

A proxy re-encryption (PRE) scheme is a multi-user [[public-key-encryption|public-key encryption]] scheme with re-encryption keys: a proxy holding a re-encryption key from user $i$ to user $j$ converts a ciphertext under $\pk_i$ into a ciphertext of the same message under $\pk_j$, and learns nothing about the message — [[BBS98 - Divertible Protocols and Atomic Proxy Cryptography|BBS98]].

## Syntax

A PRE scheme is a tuple of efficient algorithms $\mathsf{PRE} = (\Setup, \KeyGen, \mathsf{ReKeyGen}, \Enc, \mathsf{ReEnc}, \Dec)$ with message space $\calM$ and ciphertext space $\calC$; every algorithm after $\Setup$ takes $\pp$ as an implicit input:

- $\Setup(1^\secpar) \to \pp$, a randomized algorithm outputting public parameters shared by all users,
- $\KeyGen(\pp) \to (\sk, \pk)$, a randomized algorithm run by each user,
- $\mathsf{ReKeyGen}(\sk_i, \pk_j) \to \mathit{rk}_{i \to j}$, a (possibly randomized) algorithm run by user $i$, outputting a re-encryption key from $i$ to $j$; in an **interactive** scheme it also takes $\sk_j$,
- $\Enc(\pk, m) \to c$, a randomized algorithm which takes a public key and a message $m \in \calM$, outputting $c \in \calC$,
- $\mathsf{ReEnc}(\mathit{rk}_{i \to j}, c) \to c'$, a (possibly randomized) algorithm run by the proxy, outputting a ciphertext $c' \in \calC$ under $\pk_j$ or $\bot$,
- $\Dec(\sk, c) \to m$, a deterministic algorithm outputting $m \in \calM$ or $\bot$.

## Properties

### Correctness

A PRE scheme $\mathsf{PRE}$ is $(1-\varepsilon)$-**correct** if for all $\secpar \in \NN$ and $m \in \calM$,

$$
\Pr\!\left[\Dec(\sk_i, \Enc(\pk_i, m)) = m\right] \ge 1 - \varepsilon \quad\text{and}\quad \Pr\!\left[\Dec\!\left(\sk_j, \mathsf{ReEnc}(\mathit{rk}_{i \to j}, \Enc(\pk_i, m))\right) = m\right] \ge 1 - \varepsilon,
$$

over $\pp \gets \Setup(1^\secpar)$, independent $(\sk_i, \pk_i), (\sk_j, \pk_j) \gets \KeyGen(\pp)$, $\mathit{rk}_{i \to j} \gets \mathsf{ReKeyGen}(\sk_i, \pk_j)$, and the randomness of $\Enc$ and $\mathsf{ReEnc}$. When $\varepsilon = 0$, $\mathsf{PRE}$ is **perfectly correct**.

### CPA security

The adversary creates users adaptively, each either uncorrupted, in which case it receives the public key, or corrupted, in which case it receives the key pair. It obtains re-encryption keys between any two users except between an uncorrupted and a corrupted one, and must distinguish encryptions of $m_0$ and $m_1$ under an uncorrupted key of its choice. The game is the PRE-CCA game of [[CH07 - Chosen-Ciphertext Secure Proxy Re-Encryption|CH07]] without its re-encryption and decryption oracles.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{pre\text{-}cpa}}_{\mathsf{PRE},\calA}(\secpar)$}
\begin{algorithmic}
\State $\pp \gets \Setup(1^\secpar)$; $b \getsr \bits$; $n \gets 0$; $\mathit{Hon} \gets \{\}$; $\mathit{Cor} \gets \{\}$
\State $(i^*, m_0, m_1, \stA) \gets \calA^{\calO_{\mathrm{key}}, \calO_{\mathrm{rk}}}(1^\secpar, \pp)$
\Comment{$i^* \in \mathit{Hon}$; $m_0, m_1 \in \calM$ and $|m_0| = |m_1|$}
\State $c^* \gets \Enc(\pk_{i^*}, m_b)$
\State $b' \gets \calA^{\calO_{\mathrm{key}}, \calO_{\mathrm{rk}}}(c^*, \stA)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

```pseudocode
\begin{algorithm}
\algname{Oracle}
\caption{$\calO_{\mathrm{key}}(\beta)$}
\begin{algorithmic}
\State $n \gets n + 1$; $(\sk_n, \pk_n) \gets \KeyGen(\pp)$
\If{$\beta = 1$}
\State $\mathit{Cor} \gets \mathit{Cor} \cup \{n\}$
\Return $(\sk_n, \pk_n)$
\EndIf
\State $\mathit{Hon} \gets \mathit{Hon} \cup \{n\}$
\Return $\pk_n$
\end{algorithmic}
\end{algorithm}
```

```pseudocode
\begin{algorithm}
\algname{Oracle}
\caption{$\calO_{\mathrm{rk}}(i, j)$}
\begin{algorithmic}
\If{$|\{i, j\} \cap \mathit{Cor}| = 1$}
\Return $\bot$
\Comment{no keys between an uncorrupted and a corrupted user}
\EndIf
\Return $\mathsf{ReKeyGen}(\sk_i, \pk_j)$
\end{algorithmic}
\end{algorithm}
```

For an interactive scheme $\calO_{\mathrm{rk}}$ also passes $\sk_j$. A re-encryption key from an uncorrupted user to a corrupted one would let $\calA$ re-encrypt $c^*$, directly or along a chain of keys between uncorrupted users, to a key it holds; in a bidirectional scheme a key in the other direction does the same. For a non-interactive scheme, $\calA$ computes keys from a corrupted user itself, so refusing them costs it nothing.

A PRE scheme $\mathsf{PRE}$ is **CPA-secure** if for all admissible efficient $\calA$,

$$
\Adv^{\mathrm{pre\text{-}cpa}}_{\mathsf{PRE},\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{pre\text{-}cpa}}_{\mathsf{PRE},\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible.

# Variations

## Unidirectional and bidirectional

A scheme is **bidirectional** if $\mathit{rk}_{j \to i}$ is efficiently computable from $\mathit{rk}_{i \to j}$, and **unidirectional** otherwise. The scheme of [[BBS98 - Divertible Protocols and Atomic Proxy Cryptography|BBS98]] is bidirectional and interactive ([[prime-order-ddh-to-pre|DDH ⇒ PRE (Blaze–Bleumer–Strauss scheme)]]). [[AFGH05 - Improved Proxy Re-Encryption Schemes with Applications to Secure Distributed Storage|AFGH05]] give unidirectional, non-interactive schemes from bilinear maps.

## Single-hop and multi-hop

A scheme is **multi-hop** if a re-encrypted ciphertext can be re-encrypted again, correctness holding along every chain of re-encryption keys, and **single-hop** if correctness is required for one re-encryption only. The schemes of [[AFGH05 - Improved Proxy Re-Encryption Schemes with Applications to Secure Distributed Storage|AFGH05]] are single-hop; those of [[BBS98 - Divertible Protocols and Atomic Proxy Cryptography|BBS98]] and [[CH07 - Chosen-Ciphertext Secure Proxy Re-Encryption|CH07]] are multi-hop.

## Chosen-ciphertext security

[[CH07 - Chosen-Ciphertext Secure Proxy Re-Encryption|CH07]] define CCA security for bidirectional schemes by adding to the CPA game a re-encryption oracle, which re-encrypts a given ciphertext from one given user to another, and a decryption oracle. After the challenge, the decryption oracle refuses $c^*$ and the ciphertexts CH07 call its derivatives, which include its re-encryptions, and the re-encryption oracle refuses to re-encrypt a derivative from an uncorrupted to a corrupted user — [[CH07 - Chosen-Ciphertext Secure Proxy Re-Encryption|CH07]]. Without these restrictions $\calA$ would decrypt $c^*$ through the decryption oracle, directly or after re-encrypting it. CH07 also give simulation-based definitions that guarantee universally composable security — [[CH07 - Chosen-Ciphertext Secure Proxy Re-Encryption|CH07]].

## Collusion resistance

A proxy colluding with a delegatee holds $\mathit{rk}_{i \to j}$ and $\sk_j$. [[AFGH05 - Improved Proxy Re-Encryption Schemes with Applications to Secure Distributed Storage|AFGH05]] require that such a coalition cannot compute $\sk_i$. The scheme of [[BBS98 - Divertible Protocols and Atomic Proxy Cryptography|BBS98]] does not meet this requirement: there $\sk_i = \sk_j / \mathit{rk}_{i \to j}$ in $\ZZ_q$.

# Other results

- If DDH is hard in prime-order groups, the bidirectional, multi-hop scheme of [[BBS98 - Divertible Protocols and Atomic Proxy Cryptography|BBS98]] is CPA-secure ([[prime-order-ddh-to-pre|DDH ⇒ PRE (Blaze–Bleumer–Strauss scheme)]]) — folklore.
- If DBDH is hard, there is a bidirectional, multi-hop, CCA-secure PRE scheme in the standard model ([[dbdh-to-pre-cca-ch07|DBDH ⇒ CCA-secure PRE (Canetti–Hohenberger)]]) — [[CH07 - Chosen-Ciphertext Secure Proxy Re-Encryption|CH07]].
- [[AFGH05 - Improved Proxy Re-Encryption Schemes with Applications to Secure Distributed Storage|AFGH05]] apply unidirectional PRE to secure distributed storage, in which a proxy re-encrypts stored ciphertexts for authorized users.

<!-- BEGIN GENERATED participates-in 91f68a01641b -->

## Participates in

**Produces Proxy re-encryption**

- [[dbdh-to-pre-cca-ch07|DBDH ⇒ CCA-secure PRE (Canetti–Hohenberger)]] (via [[proxy-re-encryption#chosen-ciphertext-security|Chosen-ciphertext security]])
- [[prime-order-ddh-to-pre|DDH ⇒ PRE (Blaze–Bleumer–Strauss scheme)]]

<!-- END GENERATED participates-in -->
