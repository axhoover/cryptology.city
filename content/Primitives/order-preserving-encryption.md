---
type: primitive
status: draft
aliases:
  - OPE
  - ORE
  - Order-preserving encryption
  - Order-revealing encryption
title: Order-preserving encryption
id: ope
variants:
  best-possible-ore: "#best-possible-security"
  ore-first-differing-bit: "#leakage-of-the-first-differing-bit"
---

# Order-preserving encryption

An order-preserving encryption (OPE) scheme is a deterministic symmetric encryption scheme on an ordered plaintext space whose encryption function, under every key, is strictly increasing, so that the order of two plaintexts can be read off their ciphertexts. Security asks that encryption be indistinguishable from a uniformly random order-preserving function — [[BCLO09 - Order-Preserving Symmetric Encryption|BCLO09]].

## Syntax

For integers $1 \le M \le N$, write $[M] = \{1, \ldots, M\}$. An OPE scheme is a tuple of efficient algorithms $\Pi = (\KeyGen, \Enc, \Dec)$ with plaintext space $[M]$ and ciphertext space $[N]$ — [[BCLO09 - Order-Preserving Symmetric Encryption|BCLO09]]:

- $\KeyGen(1^\secpar) \to K$, a randomized algorithm outputting a key $K$.
- $\Enc(K, m) \to c$, a deterministic algorithm mapping $m \in [M]$ to $c \in [N]$.
- $\Dec(K, c) \to m$, a deterministic algorithm outputting $m \in [M]$ or $\bot$.

## Properties

### Correctness and order preservation

An OPE scheme $\Pi$ is **correct** if $\Dec(K, \Enc(K, m)) = m$ for every key $K$ output by $\KeyGen(1^\secpar)$ and every $m \in [M]$, and **order-preserving** if for every such $K$ and all $m, m' \in [M]$,

$$
m < m' \implies \Enc(K, m) < \Enc(K, m').
$$

Each $\Enc(K, \cdot)$ is then an order-preserving injection $[M] \to [N]$. Write $\mathrm{OPF}_{M,N}$ for the set of all such injections; each is determined by its image, so $|\mathrm{OPF}_{M,N}| = \binom{N}{M}$ — standard.

### IND-OCPA security

The adversary queries pairs of plaintexts to a left-right oracle that encrypts one side of each pair. An **admissible** adversary makes queries $(m_0^1, m_1^1), \ldots, (m_0^q, m_1^q)$ in the same relative order on both sides, $m_0^j < m_0^k \iff m_1^j < m_1^k$ for all $j, k \in [q]$; without this restriction the order of two ciphertexts reveals $b$ — [[BCLO09 - Order-Preserving Symmetric Encryption|BCLO09]].

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{ind\text{-}ocpa}}_{\Pi,\calA}(\secpar)$}
\begin{algorithmic}
\State $K \gets \KeyGen(1^\secpar)$; $b \getsr \bits$
\State $\calO_0(m_0, m_1) := \Enc(K, m_0)$
\State $\calO_1(m_0, m_1) := \Enc(K, m_1)$
\Comment{All queries have the same relative order on both sides}
\State $b' \gets \calA^{\calO_b}(1^\secpar)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

An OPE scheme $\Pi$ is **IND-OCPA-secure** if for all efficient admissible $\calA$,

$$
\Adv^{\mathrm{ind\text{-}ocpa}}_{\Pi,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{ind\text{-}ocpa}}_{\Pi,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible. IND-OCPA leaks only equality and order among the queried plaintexts, which every order-preserving deterministic scheme reveals. No OPE scheme with a ciphertext space of practical size achieves it: IND-OCPA security forces $N$ to be exponential in $M$ — [[BCLO09 - Order-Preserving Symmetric Encryption|BCLO09]].

### POPF-CCA security

The adversary has encryption and decryption oracles, which in world $0$ run the scheme and in world $1$ evaluate a uniformly random order-preserving injection $g$ and its inverse, with $g^{-1}(c) := \bot$ for $c$ outside the image of $g$ — [[BCLO09 - Order-Preserving Symmetric Encryption|BCLO09]].

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{popf\text{-}cca}}_{\Pi,\calA}(\secpar)$}
\begin{algorithmic}
\State $K \gets \KeyGen(1^\secpar)$; $g \getsr \mathrm{OPF}_{M,N}$; $b \getsr \bits$
\State $\calO_0(m) := \Enc(K, m)$; $\calD_0(c) := \Dec(K, c)$
\State $\calO_1(m) := g(m)$; $\calD_1(c) := g^{-1}(c)$
\Comment{$g$ can be sampled lazily}
\State $b' \gets \calA^{\calO_b, \calD_b}(1^\secpar)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

An OPE scheme $\Pi$ is **POPF-CCA-secure** if for all efficient $\calA$,

$$
\Adv^{\mathrm{popf\text{-}cca}}_{\Pi,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{popf\text{-}cca}}_{\Pi,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible. As an object, OPE denotes a correct, order-preserving and POPF-CCA-secure scheme. A uniformly random $g \in \mathrm{OPF}_{M,N}$ is sampled lazily by binary search over $[N]$: the number of plaintexts that $g$ maps into $\{1, \ldots, y\}$ follows a hypergeometric distribution — [[BCLO09 - Order-Preserving Symmetric Encryption|BCLO09]].

# Variations

## Order-revealing encryption

An order-revealing encryption (ORE) scheme drops the requirement that ciphertexts be ordered integers and compares them with a public algorithm instead — [[BLR+15 - Semantically Secure Order-Revealing Encryption Multi-input Functional Encryption Without Obfuscation|BLR+15]]. An ORE scheme on $\bits^n$ is a tuple of efficient algorithms $\Pi = (\KeyGen, \Enc, \mathsf{Cmp})$ — [[CLWW16 - Practical Order-Revealing Encryption with Limited Leakage|CLWW16]]:

- $\KeyGen(1^\secpar) \to \sk$, a randomized algorithm outputting a secret key.
- $\Enc(\sk, m) \to \mathit{ct}$, a possibly randomized algorithm encrypting $m \in \bits^n$, read as an integer.
- $\mathsf{Cmp}(\mathit{ct}, \mathit{ct}') \to \beta \in \bits$, a deterministic algorithm that uses no key.

$\Pi$ is **correct** if $\mathsf{Cmp}(\Enc(\sk, m), \Enc(\sk, m')) = [m < m']$ for all $m, m' \in \bits^n$, except with negligible probability over $\KeyGen$ and $\Enc$. An OPE scheme, with $\mathsf{Cmp}$ comparing ciphertexts as integers, is an ORE scheme — standard.

Security is relative to a leakage function $\calL$ of the sequence of queried plaintexts: in world $1$ a stateful simulator produces each ciphertext from the leakage of the queries so far — [[CLWW16 - Practical Order-Revealing Encryption with Limited Leakage|CLWW16]].

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{ore}}_{\Pi,\calA,\Sim,\calL}(\secpar)$}
\begin{algorithmic}
\State $\sk \gets \KeyGen(1^\secpar)$; $\stS \gets \Sim(1^\secpar)$; $b \getsr \bits$
\State $\calO_0(m) := \Enc(\sk, m)$
\State $\calO_1(m) := \Sim(\stS, \calL(m_1, \ldots, m_i))$
\Comment{$m_1, \ldots, m_i$ are the queries so far, $m_i = m$; $\Sim$ updates $\stS$}
\State $b' \gets \calA^{\calO_b}(1^\secpar)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

An ORE scheme $\Pi$ is **$\calL$-secure** if for all efficient $\calA$ there is an efficient $\Sim$ such that

$$
\Adv^{\mathrm{ore}}_{\Pi,\calA,\Sim,\calL}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{ore}}_{\Pi,\calA,\Sim,\calL}(\secpar) = 1\right] - 1\right|
$$

is negligible.

### Best-possible security

$\mathsf{Cmp}$ reveals the order of every pair of ciphertexts, so the least possible leakage is $\calL_{\mathrm{ord}}(m_1, \ldots, m_i) := ([m_j < m_k])_{j, k \in [i]}$, and an $\calL_{\mathrm{ord}}$-secure scheme has **best-possible** security. BLR+15 construct ORE that reveals only this order from [[multilinear-maps|multilinear maps]], with security proved in a generic model of multilinear maps — [[BLR+15 - Semantically Secure Order-Revealing Encryption Multi-input Functional Encryption Without Obfuscation|BLR+15]].

### Leakage of the first differing bit

For $m, m' \in \bits^n$, let $\mathrm{ind}_{\mathrm{diff}}(m, m')$ be the least index $\ell$ with $m_\ell \ne m'_\ell$, counting from the most significant bit, and $n + 1$ if $m = m'$. The leakage

$$
\calL_{\mathrm{f}}(m_1, \ldots, m_i) := \left([m_j < m_k],\ \mathrm{ind}_{\mathrm{diff}}(m_j, m_k)\right)_{j, k \in [i]}
$$

adds the position of the first differing bit to the order — [[CLWW16 - Practical Order-Revealing Encryption with Limited Leakage|CLWW16]]. CLWW16 construct $\calL_{\mathrm{f}}$-secure ORE from any PRF ([[prf-to-ore-first-differing-bit-clww16|PRF ⇒ ORE]]).

## Mutable order-preserving encoding

In mutable OPE (mOPE), the client and server run an interactive protocol in which the server stores an order-preserving encoding of the encrypted values, and inserting a value may change the encodings of values inserted earlier; mOPE achieves IND-OCPA, which stateless OPE does not — [[PLZ13 - An Ideal-Security Protocol for Order-Preserving Encoding|PLZ13]].

## Modular OPE

Modular OPE prepends a secret shift modulo $M$ to an OPE scheme, so that ciphertexts reveal no information about the location of a plaintext in $[M]$ — [[BCO11 - Order-Preserving Encryption Revisited Improved Security Analysis and Alternative Solutions|BCO11]].

# Other results

- Given an efficient sampler for the hypergeometric distribution, any PRF yields a POPF-CCA-secure OPE ([[prf-to-ope-bclo09|PRF ⇒ OPE]]) — [[BCLO09 - Order-Preserving Symmetric Encryption|BCLO09]].
- For uniformly distributed plaintexts and suitable parameters, encryption under a uniformly random order-preserving function hides the exact value of each plaintext and the exact distance between two plaintexts, but reveals both to within a range of size roughly $\sqrt{M}$ — [[BCO11 - Order-Preserving Encryption Revisited Improved Security Analysis and Alternative Solutions|BCO11]].
- Against database columns encrypted under deterministic or order-preserving encryption, auxiliary data on the plaintext distribution recovers a large fraction of the plaintexts: frequency analysis and $\ell_p$-optimization attack deterministic encryption, and the sorting and cumulative attacks attack OPE; the sorting attack recovers every plaintext of a dense column, in which every value of the domain occurs — [[NKW15 - Inference Attacks on Property-Preserving Encrypted Databases|NKW15]].

<!-- BEGIN GENERATED participates-in 9ff6460014dd -->

## Participates in

**Produces Order-preserving encryption**

- [[prf-to-ope-bclo09|PRF ⇒ OPE (BCLO09)]]
- [[prf-to-ore-first-differing-bit-clww16|PRF ⇒ ORE leaking the first differing bit (CLWW16)]] (via [[order-preserving-encryption#leakage-of-the-first-differing-bit|Leakage of the first differing bit]])

<!-- END GENERATED participates-in -->
