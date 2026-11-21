---
type: primitive
status: draft
aliases:
  - OWP
  - One-way permutation
  - One-way permutations
title: One-way permutations
id: owp
---

# One-way permutations

A one-way permutation is an efficiently computable, length-preserving permutation of each $\bits^n$ that no efficient adversary inverts on a uniform input, except with negligible probability.

## Syntax

A one-way permutation is a deterministic polynomial-time algorithm computing $\pi : \bits^* \to \bits^*$ such that for every $n$, the restriction $\pi_n : \bits^n \to \bits^n$ is a permutation.

## Properties

### One-wayness

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{owp}}_{\pi,\calA}(\secpar)$}
\begin{algorithmic}
\State $x \getsr \bits^\secpar$
\State $\hat{x} \gets \calA(1^\secpar, \pi_\secpar(x))$
\Return $[\hat{x} = x]$
\end{algorithmic}
\end{algorithm}
```

A permutation $\pi$ is **one-way** if for all efficient $\calA$,

$$
\Adv^{\mathrm{owp}}_{\pi,\calA}(\secpar) := \Pr\!\left[\Game^{\mathrm{owp}}_{\pi,\calA}(\secpar) = 1\right]
$$

is negligible — [[Gol01 - Foundations of Cryptography Basic Tools|Gol01]]. Hardness is on a uniform input over all of $\bits^\secpar$: for a one-way $\pi$, the permutation of $\bits^{2n}$ mapping $0^n \| u$ to $0^n \| \pi_n(u)$ and fixing every other input is hard to invert on $0^n \| U_n$, yet it is the identity on a $1 - 2^{-n}$ fraction of its domain, so it is not one-way — standard.

# Variations

## Weak one-way permutations

A permutation $\pi$ as in [[#Syntax|Syntax]] is **weakly one-way** if there is a polynomial $p$ such that for all efficient $\calA$, $\Adv^{\mathrm{owp}}_{\pi,\calA}(\secpar) \le 1 - 1/p(\secpar)$ for all sufficiently large $\secpar$. Since $\pi$ is injective, an inverter outputs a preimage of $\pi_\secpar(x)$ exactly when it outputs $x$, so this is [[hash-function#weak-one-wayness|weak one-wayness]] of $\pi$ as a function, as defined in [[GB08 - Lecture Notes on Cryptography|GB08]], Definition 2.8.

TODO: amplification of weak one-way permutations: the [[weak-owf-to-owf-yao82a|direct product]] of independent copies of $\pi$, which is again a permutation, and the security-preserving amplification of [[GILVZ90 - Security Preserving Amplification of Hardness|GILVZ90]], stated from the paper.

## Families of one-way permutations

A _family_ (or _collection_) _of permutations_ is a pair of efficient algorithms $\Pi = (\Gen, \Eval)$:

- $\Gen(1^\secpar) \to i$, a randomized algorithm sampling an index $i$ that describes a finite domain $\calD_i$, from which a uniform element can be sampled efficiently given $i$.
- $\Eval(i, x) \to y$, a deterministic algorithm that computes a permutation $\pi_i$ of $\calD_i$.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{owp}}_{\Pi,\calA}(\secpar)$}
\begin{algorithmic}
\State $i \gets \Gen(1^\secpar)$; $x \getsr \calD_i$
\State $\hat{x} \gets \calA(1^\secpar, i, \Eval(i, x))$
\Return $[\hat{x} = x]$
\end{algorithmic}
\end{algorithm}
```

A family $\Pi$ is **one-way** if for all efficient $\calA$,

$$
\Adv^{\mathrm{owp}}_{\Pi,\calA}(\secpar) := \Pr\!\left[\Game^{\mathrm{owp}}_{\Pi,\calA}(\secpar) = 1\right]
$$

is negligible. The definition specializes the collections of one-way functions $f_i : D_i \to R_i$ of [[GB08 - Lecture Notes on Cryptography|GB08]], Definition 2.12, to $R_i = D_i$ with each $f_i$ a permutation.

A one-way permutation as in [[#Syntax|Syntax]] is the family with $\Gen(1^\secpar) := 1^\secpar$ and $\calD_{1^\secpar} := \bits^\secpar$ — standard. In modular exponentiation the domain depends on the index: for a prime $P$ and a generator $g$ of $\ZZ_P^*$, the map $x \mapsto g^x \bmod P$ permutes $\ZZ_P^* = \{1, \ldots, P-1\}$, since $1, \ldots, P-1$ are distinct modulo the order $P-1$ of $g$, and inverting it on a uniform $x$ is computing the [discrete logarithm in $\ZZ_P^*$](discrete-logarithm#dlog-in-the-multiplicative-group-of-a-prime-field) of a uniform element — standard. The [[dlog-to-prg-bm84|Blum–Micali generator]] iterates this permutation.

## Trapdoor permutations

A [[trapdoor-permutation|trapdoor permutation]] is a one-way family of permutations whose index generator also outputs a trapdoor with which $\pi_i^{-1}$ is efficiently computable — [[GB08 - Lecture Notes on Cryptography|GB08]], Definition 2.16, where each $f_i : D_i \to D_i$ is a permutation since the trapdoor inverts it on all of $D_i$.

# Other results

- [[owp-to-hash-function|OWP ⇒ OWF]] — folklore
- [[no-injective-owf-to-owp-mm11|No fully black-box construction of OWP from length-increasing injective OWF]] — [[MM11 - On Black-Box Separations among Injective One-Way Functions|MM11a]]

<!-- BEGIN GENERATED participates-in 0dfa8db2d526 -->

## Participates in

**Builds on One-way permutations**

- [[io-and-owp-to-cls-hardness-hy17|iO + OWP ⇒ CLS hardness]]
- [[io-and-owp-to-ppad-hardness-gps16|iO + OWP ⇒ PPAD hardness]]
- [[owp-to-conp|OWP inversion ∈ NP ∩ coNP]]
- [[owp-to-hash-function|OWP ⇒ OWF]]
- [[owp-to-injective-one-way-function|OWP ⇒ Injective OWF]]
- [[owp-to-prg-yao82a-gl89|OWP ⇒ PRG (Blum–Micali–Yao)]]
- [[owp-to-size-verifiable-owf|OWP ⇒ Size-verifiable OWF]]
- [[owp-to-statistically-hiding-commitment-novy98|OWP ⇒ Statistically hiding COM (NOVY)]]
- [[owp-to-uowhf-ny89|OWP ⇒ UOWHF (Naor–Yung)]]

**Barriers**

- [[no-injective-owf-to-owp-mm11|No fully-black-box reduction from length-increasing injective OWF to OWP]]
- [[no-io-and-owf-to-owp-as16|No fully-black-box reduction from iO + OWF to domain-invariant OWP]]
- [[no-io-and-owp-to-crhf-as15|No fully-black-box reduction from iO + OWP to CRHF]]
- [[no-io-and-owp-to-szk-hardness-bdv17|No fully-black-box reduction from iO + OWP to average-case-hard SZK]]
- [[no-np-to-owp-bra79b|No deterministic reduction from NP to OWP]]
- [[no-owf-to-owp-rud88|No fully-black-box reduction from OWF to OWP]]
- [[no-owp-to-crhf-sim98|No relativizing reduction from OWP to CRHF]]
- [[no-owp-to-ke-ir89|No relativizing reduction from OWP to KE]]

<!-- END GENERATED participates-in -->
