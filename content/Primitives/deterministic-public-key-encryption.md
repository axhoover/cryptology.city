---
type: primitive
status: draft
aliases:
  - D-PKE
  - DPKE
  - Deterministic public-key encryption
title: Deterministic public-key encryption
id: dpke
variants:
  block-source-dpke: "#security-for-block-sources"
---

# Deterministic public-key encryption

A deterministic public-key encryption (D-PKE) scheme is a [[public-key-encryption|public-key encryption]] scheme whose encryption algorithm is deterministic. Security asks that the encryptions of distinct, high-min-entropy messages, chosen independently of the public key, reveal no partial information about the messages — [[BBO07 - Deterministic and Efficiently Searchable Encryption|BBO07]].

## Syntax

A D-PKE scheme is a tuple of efficient algorithms $\Pi = (\KeyGen, \Enc, \Dec)$ with message space $\calM$ — [[BBO07 - Deterministic and Efficiently Searchable Encryption|BBO07]]:

- $\KeyGen(1^\secpar) \to (\sk, \pk)$, a randomized algorithm outputting a secret key and a public key.
- $\Enc(\pk, m) \to c$, a deterministic algorithm encrypting $m \in \calM$.
- $\Dec(\sk, c) \to m$, a deterministic algorithm outputting $m \in \calM$ or $\bot$.

For a vector $\mathbf{x} = (x[1], \ldots, x[v])$ of messages, $\Enc(\pk, \mathbf{x}) := (\Enc(\pk, x[1]), \ldots, \Enc(\pk, x[v]))$.

## Properties

### Correctness

A D-PKE scheme $\Pi$ is $(1-\varepsilon)$-**correct** if for all $\secpar \in \NN$ and $m \in \calM$,

$$
\Pr\!\left[\Dec(\sk, \Enc(\pk, m)) = m\right] \ge 1 - \varepsilon,
$$

over $(\sk, \pk) \gets \KeyGen(1^\secpar)$. When $\varepsilon = 0$, we say $\Pi$ is **perfectly correct**.

### PRIV security

The adversary is a pair $\calA = (\calA_m, \calA_g)$: a message finder $\calA_m$, which does not see $\pk$, outputs a vector $\mathbf{x}$ of $v(\secpar)$ messages and a target string $t$ about them, and a guesser $\calA_g$, given $\pk$ and the encryption of a message vector, tries to output $t$. The guesser receives the encryption of $\mathbf{x}$ in the world $b = 0$ and of an independent vector from a second run of $\calA_m$ in the world $b = 1$ — [[BBO07 - Deterministic and Efficiently Searchable Encryption|BBO07]].

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{priv}\text{-}b}_{\Pi,\calA}(\secpar)$}
\begin{algorithmic}
\State $(\sk, \pk) \gets \KeyGen(1^\secpar)$
\State $(\mathbf{x}_0, t_0) \gets \calA_m(1^\secpar)$; $(\mathbf{x}_1, t_1) \gets \calA_m(1^\secpar)$
\Comment{independent runs of an admissible $\calA_m$, which does not see $\pk$}
\State $g \gets \calA_g(\pk, \Enc(\pk, \mathbf{x}_b))$
\Return $[g = t_0]$
\end{algorithmic}
\end{algorithm}
```

The message finder $\calA_m$ is **admissible** with min-entropy $\mu$ if its vectors always have distinct components, all of the same length $n(\secpar)$, and $\Pr[x[i] = m] \le 2^{-\mu(\secpar)}$ for every $i$ and every $m \in \calM$. A D-PKE scheme $\Pi$ is **PRIV-secure** for min-entropy $\mu$ if for all efficient $\calA$ with admissible $\calA_m$,

$$
\Adv^{\mathrm{priv}}_{\Pi,\calA}(\secpar) := \Pr\!\left[\Game^{\mathrm{priv}\text{-}0}_{\Pi,\calA}(\secpar) = 1\right] - \Pr\!\left[\Game^{\mathrm{priv}\text{-}1}_{\Pi,\calA}(\secpar) = 1\right]
$$

is negligible. In the random oracle model both $\calA_m$ and $\calA_g$ query the oracle — [[BBO07 - Deterministic and Efficiently Searchable Encryption|BBO07]]. Distinct components and $\mu = \omega(\log \secpar)$ are necessary: equal messages have equal ciphertexts, and for $\mu = O(\log \secpar)$, $\calA_g$ can encrypt a likely message itself and compare; the length condition plays the role of $|m_0| = |m_1|$ in CPA security — standard.

# Variations

## Security for block sources

A vector $\mathbf{x}$ of messages is a **block source** with min-entropy $\mu$ if each $x[i]$ has min-entropy at least $\mu$ conditioned on every value of $(x[1], \ldots, x[i-1])$. PRIV security for block sources restricts $\calA_m$ to such vectors, so it is weaker than PRIV, which lets the components be arbitrarily correlated as long as each has min-entropy $\mu$ — [[BFO08 - On Notions of Security for Deterministic Encryption, and Efficient Constructions without Random Oracles|BFO08]]. BFO08 show it equivalent to single-message and indistinguishability-based formulations, and construct CPA- and CCA-secure D-PKE for block sources in the standard model, extending the [[trapdoor-permutation#lossy-trapdoor-functions|lossy-trapdoor-function]] framework of [[PW08 - Lossy trapdoor functions and their applications|PW08]], with instantiations under number-theoretic assumptions — [[BFO08 - On Notions of Security for Deterministic Encryption, and Efficient Constructions without Random Oracles|BFO08]].

# Other results

- In the random oracle model, any CPA-secure PKE yields a PRIV-secure D-PKE by deriving the encryption coins from a hash of the public key and the message ([[pke-cpa-security-to-dpke-bbo07|CPA-secure PKE ⇒ D-PKE]]) — [[BBO07 - Deterministic and Efficiently Searchable Encryption|BBO07]].
- D-PKE gives database encryption with search in time logarithmic in the size of the database, with privacy as strong as this constraint allows; BBO07 generalize it to efficiently searchable encryption, which trades privacy for search time by bucketization — [[BBO07 - Deterministic and Efficiently Searchable Encryption|BBO07]].
- BBO07's [[rsa-assumption|RSA]]-based scheme RSA-DOAEP is length-preserving: a ciphertext has the length of its message — [[BBO07 - Deterministic and Efficiently Searchable Encryption|BBO07]].

<!-- BEGIN GENERATED participates-in 813b7f9dd942 -->

## Participates in

**Produces Deterministic public-key encryption**

- [[pke-cpa-security-to-dpke-bbo07|CPA-secure PKE ⇒ D-PKE (Encrypt-with-Hash, random oracle model)]]

<!-- END GENERATED participates-in -->
