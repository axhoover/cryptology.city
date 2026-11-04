---
type: primitive
status: draft
aliases:
  - FS-PKE
  - Forward-secure PKE
  - Forward-secure public-key encryption
  - Forward-secure encryption
title: Forward-secure public-key encryption
id: forward-secure-pke
---

# Forward-secure public-key encryption

A forward-secure public-key encryption scheme is a [[public-key-encryption|public-key encryption]] scheme whose public key is fixed for $T$ time periods, whose ciphertexts are formed for a period, and whose secret key is updated at the end of each period, such that the secret key of period $i$ reveals nothing about plaintexts encrypted for any period $j < i$ — [[CHK03 - A Forward-Secure Public-Key Encryption Scheme|CHK03]].

## Syntax

A key-evolving public-key encryption scheme with $T$ periods is a tuple of efficient algorithms $\mathsf{FSPKE} = (\KeyGen, \mathsf{Update}, \Enc, \Dec)$ with message space $\calM$ and ciphertext space $\calC$ — [[CHK03 - A Forward-Secure Public-Key Encryption Scheme|CHK03]]:

- $\KeyGen(1^\secpar, T) \to (\pk, \sk_1)$, a randomized algorithm outputting a public key $\pk$ and the secret key $\sk_1$ of period $1$,
- $\mathsf{Update}(\sk_i) \to \sk_{i+1}$, a (possibly randomized) algorithm which, for $i < T$, takes the secret key of period $i$ and outputs the secret key of period $i + 1$, after which the receiver erases $\sk_i$,
- $\Enc(\pk, i, m) \to c$, a randomized algorithm which takes the public key, a period $i \in [T]$ and a message $m \in \calM$, outputting a ciphertext $c \in \calC$,
- $\Dec(\sk_i, i, c) \to m$, a deterministic algorithm which takes the secret key of period $i$ and a ciphertext, outputting $m \in \calM$ or $\bot$.

Throughout, $T = T(\secpar)$ is polynomially bounded, and $\sk_i$ denotes the key obtained from $\sk_1$ by $i - 1$ applications of $\mathsf{Update}$.

## Properties

### Correctness

A key-evolving public-key encryption scheme $\mathsf{FSPKE}$ is $(1-\varepsilon)$-**correct** if for all $\secpar \in \NN$, $i \in [T]$ and $m \in \calM$,

$$
\Pr\!\left[\Dec(\sk_i, i, \Enc(\pk, i, m)) = m\right] \ge 1 - \varepsilon,
$$

over $(\pk, \sk_1) \gets \KeyGen(1^\secpar, T)$ and the randomness of $\mathsf{Update}$ and $\Enc$. When $\varepsilon = 0$, $\mathsf{FSPKE}$ is **perfectly correct**.

### Forward security

The adversary receives $\pk$ and makes one break-in query, receiving the secret key $\sk_i$ of a period $i$ of its choice, and one challenge query, receiving an encryption of $m_0$ or $m_1$ for a period $j$ of its choice, in either order — [[CHK03 - A Forward-Secure Public-Key Encryption Scheme|CHK03]]. An admissible $\calA$ makes exactly one query to each oracle, with $j < i$, and submits $m_0, m_1 \in \calM$ with $|m_0| = |m_1|$. The challenge period must precede the break-in period because $\sk_i$ yields, through $\mathsf{Update}$, the secret key of every period $t \ge i$.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{fs\text{-}cpa}}_{\mathsf{FSPKE},T,\calA}(\secpar)$}
\begin{algorithmic}
\State $(\pk, \sk_1) \gets \KeyGen(1^\secpar, T)$; $b \getsr \bits$
\State $b' \gets \calA^{\calO_{\mathrm{brk}}, \calO_{\mathrm{ch}}}(1^\secpar, \pk)$
\Comment{one query to each oracle, in either order, with $j < i$}
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

```pseudocode
\begin{algorithm}
\algname{Oracle}
\caption{$\calO_{\mathrm{brk}}(i)$}
\begin{algorithmic}
\State $\sk_{t+1} \gets \mathsf{Update}(\sk_t)$ for $t = 1, \ldots, i - 1$
\Return $\sk_i$
\end{algorithmic}
\end{algorithm}
```

```pseudocode
\begin{algorithm}
\algname{Oracle}
\caption{$\calO_{\mathrm{ch}}(j, m_0, m_1)$}
\begin{algorithmic}
\Return $\Enc(\pk, j, m_b)$
\end{algorithmic}
\end{algorithm}
```

A key-evolving public-key encryption scheme $\mathsf{FSPKE}$ is **forward-secure** if for all polynomially bounded $T = T(\secpar)$ and all admissible efficient $\calA$,

$$
\Adv^{\mathrm{fs\text{-}cpa}}_{\mathsf{FSPKE},T,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{fs\text{-}cpa}}_{\mathsf{FSPKE},T,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible.

# Variations

## Chosen-ciphertext forward security

In the chosen-ciphertext game the adversary also has a decryption oracle $\calD(t, c) := \Dec(\sk_t, t, c)$ for every period $t \in [T]$, and may not query it on $(j, c^*)$ for the challenge period $j$ and challenge ciphertext $c^*$, since by correctness $\Dec(\sk_j, j, c^*) = m_b$ — [[CHK03 - A Forward-Secure Public-Key Encryption Scheme|CHK03]]. The CHK03 scheme extends to chosen-ciphertext security — [[CHK03 - A Forward-Secure Public-Key Encryption Scheme|CHK03]]. Securing binary tree encryption against chosen-ciphertext attacks gives more efficient such schemes in the standard model — [[CHK04 - Chosen-Ciphertext Security from Identity-Based Encryption|CHK04]].

## Key-insulated encryption

In a $(t, N)$-key-insulated scheme with $N$ periods, the receiver's key update also takes a message from a helper device that stores a master key, and exposure of the receiver's secret keys for any $t$ periods leaves every other period secure, earlier or later — [[DKXY02 - Key-Insulated Public Key Cryptosystems|DKXY02]]. A forward-secure scheme needs no helper, and exposure of $\sk_i$ breaks every period from $i$ on.

## Forward-secure signatures

The analogous notion for signatures is [[forward-secure-signature|forward-secure signature]], in which the signing key of period $i$ does not allow forging signatures for earlier periods — [[BM99 - A Forward-Secure Digital Signature Scheme|BM99]].

# Other results

- CPA-secure public-key encryption exists if and only if forward-secure public-key encryption does, for every polynomially bounded $T \ge 2$; the construction from PKE uses $T$ independent key pairs, so its public key grows linearly in $T$, and conversely the period-$1$ algorithms of a forward-secure scheme form a [[public-key-encryption#cpa-security|CPA-secure]] PKE scheme ([[pke-cpa-security-to-forward-secure-pke|PKE ⇔ Forward-secure PKE]]) — folklore.
- A selective-node-secure binary tree encryption scheme of depth $\ell$, for instance one obtained from a selectively secure [[hierarchical-identity-based-encryption|HIBE]] of depth $\ell + 1$ whose delegated keys are distributed as directly extracted ones, gives a forward-secure scheme with $T = 2^{\ell + 1} - 1$ periods, keys and ciphertexts of size polynomial in $\ell$ and $\secpar$ ([[hibe-selective-security-to-forward-secure-pke-chk03|Selectively secure HIBE ⇒ Forward-secure PKE (Canetti–Halevi–Katz)]]) — [[CHK03 - A Forward-Secure Public-Key Encryption Scheme|CHK03]].
- If [[bilinear-map-assumptions#decisional-bdh|DBDH]] is hard, a forward-secure scheme exists in the standard model ([[dbdh-to-forward-secure-pke-chk03|DBDH ⇒ Forward-secure PKE (Canetti–Halevi–Katz)]]) — [[CHK03 - A Forward-Secure Public-Key Encryption Scheme|CHK03]].

<!-- BEGIN GENERATED participates-in 862124dbe79c -->

## Participates in

**Produces Forward-secure public-key encryption**

- [[dbdh-to-forward-secure-pke-chk03|DBDH ⇒ Forward-secure PKE (Canetti–Halevi–Katz)]]
- [[hibe-selective-security-to-forward-secure-pke-chk03|Selectively secure HIBE ⇒ Forward-secure PKE (Canetti–Halevi–Katz)]]
- [[pke-cpa-security-to-forward-secure-pke|CPA-secure PKE ⇔ Forward-secure PKE]]

<!-- END GENERATED participates-in -->
