---
type: primitive
status: draft
aliases:
  - PRP
  - sPRP
  - Pseudorandom permutation
title: Pseudorandom permutation
id: prp
variants:
  strong-pseudorandom-permutation: "#strong-security"
---

# Pseudorandom permutation

A **pseudorandom permutation (PRP)** is a keyed family of efficiently invertible permutations $\{\Eval(k, \cdot)\}_{k \in \calK}$ of a domain $\calD$ that no efficient adversary can distinguish from a uniformly random permutation of $\calD$ given oracle access to $\Eval(k, \cdot)$; a strong PRP remains indistinguishable when the adversary also has oracle access to the inverse.

## Syntax

A PRP is a triple of efficient algorithms $\PRP = (\KeyGen, \Eval, \Invert)$ with respect to keyspace $\calK$ and domain $\calD$:

- $\KeyGen(1^\secpar) \to k,$ is a randomized algorithm that samples a key $k \in \calK,$
- $\Eval(k, x) \to y,$ is a deterministic algorithm that takes a key $k \in \calK$ and input $x \in \calD$, outputting $y \in \calD,$
- $\Invert(k, y) \to x,$ is a deterministic algorithm that takes a key $k \in \calK$ and input $y \in \calD$, outputting $x \in \calD.$

For every key $k$, $\Eval(k, \cdot)$ is a bijection on $\calD$.

## Properties

### Correctness

A PRP $\PRP$ is **correct** if for all $k \in \calK$ and $x \in \calD$,

$$
\Invert(k, \Eval(k, x)) = x.
$$

### Security

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{prp}}_{\PRP,\calA}(\secpar)$}
\begin{algorithmic}
\State $k \gets \KeyGen(1^\secpar)$; $b \getsr \bits$
\State $\pi \getsr \Perms(\calD)$
\Comment{Can be sampled lazily}
\State $\calO_0(x) := \Eval(k,x)$
\State $\calO_1(x) := \pi(x)$
\State $b' \gets \calA^{\calO_b}(1^\secpar)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

A PRP $\PRP$ is **pseudorandom** if for all efficient $\calA$,

$$
\Adv^{\mathrm{prp}}_{\PRP,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{prp}}_{\PRP,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible.

### Strong Security

In the **strong PRP (sPRP)** security game, the adversary additionally receives an inverse oracle. Assuming PRPs exist, this is a strictly stronger notion than standard PRP security: the three-round Feistel network with independently keyed PRF round functions is a PRP ([[prf-to-prp-lr88|PRF ⇒ PRP]]) but not a strong PRP — [[LR88 - How to Construct Pseudorandom Permutations from Pseudorandom Functions|LR88]].

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{sprp}}_{\PRP,\calA}(\secpar)$}
\begin{algorithmic}
\State $k \gets \KeyGen(1^\secpar)$; $b \getsr \bits$
\State $\pi \getsr \Perms(\calD)$
\Comment{Can be sampled lazily}
\State $\calO_0(x) := \Eval(k,x)$ ; $\calO_0^{-1}(y) := \Invert(k,y)$
\State $\calO_1(x) := \pi(x)$ ; $\calO_1^{-1}(y) := \pi^{-1}(y)$
\State $b' \gets \calA^{\calO_b,\calO_b^{-1}}(1^\secpar)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

A PRP $\PRP$ is **strongly pseudorandom** if for all efficient $\calA$,

$$
\Adv^{\mathrm{sprp}}_{\PRP,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{sprp}}_{\PRP,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible.

# Variations

## Small-domain PRPs

Typically, $|\calD|$ is assumed to grow super-polynomially in $\secpar$, so that a brute-force enumeration of $\calD$ is infeasible. When $|\calD|$ is instead polynomial in $\secpar$, the primitive is called a **small-domain PRP**. An efficient adversary may then make $q = |\calD|$ queries, so neither the $O(q^2/|\calD|)$ switching-lemma term of [[prp-to-prf|PRP ⇒ PRF]] ([[IR89 - Limits on the provable consequences of one-way permutations|IR89]]) nor the $O(q^2/\sqrt{|\calD|})$ birthday term of the Feistel construction of [[prf-to-prp-lr88|PRF ⇒ PRP]] ([[LR88 - How to Construct Pseudorandom Permutations from Pseudorandom Functions|LR88]]) is negligible.

## Tweakable PRPs

A [[tweakable-block-cipher|tweakable block cipher]] takes a public tweak $t$ as an extra input to $\Eval$ and $\Invert$, and is indistinguishable from an independent uniformly random permutation for each tweak — [[LRW02 - Tweakable Block Ciphers|LRW02]].

# Other results

- [[prf-to-prp-lr88|PRF ⇒ PRP]]
- [[prp-to-prf|PRP ⇒ PRF]]
- **Even–Mansour.** Let $P$ be a uniformly random permutation of $\bits^n$ that every party, the adversary included, can query in both directions. The cipher $E_{k_1,k_2}(x) := k_2 \oplus P(x \oplus k_1)$ with $k_1, k_2 \getsr \bits^n$ is broken by every attack making $q$ queries to $E_{k_1,k_2}^{\pm 1}$ and $p$ queries to $P^{\pm 1}$ with probability at most $O(pq/2^n)$ — [[EM91 - A Construction of a Cipher From a Single Pseudorandom Permutation|EM91]]. The single-key variant $E_k(x) := k \oplus P(x \oplus k)$ has the same bound — [[DKS12 - Minimalism in Cryptography The Even-Mansour Scheme Revisited|DKS12]].
- The Even–Mansour bound is tight: with $D$ queries to the cipher and $T$ evaluations of $P$, the key is recovered once $DT \approx 2^n$, from chosen plaintexts ([[Dae91 - Limitations of the Even-Mansour Construction (Rump Session)|Dae91]]) and, by the slidex attack, from known plaintexts ([[DKS12 - Minimalism in Cryptography The Even-Mansour Scheme Revisited|DKS12]]).

<!-- BEGIN GENERATED participates-in 4531b43344e3 -->

## Participates in

**Builds on Pseudorandom permutation**

- [[prp-to-invertible-prf|PRP ⇒ iPRF (large domains)]]
- [[prp-to-prf|PRP ⇒ PRF]]
- [[prp-to-tweakable-block-cipher-lrw02|PRP ⇒ TBC (LRW1)]]
- [[strong-prp-to-strong-tweakable-block-cipher-lrw02|Strong PRP ⇒ Strong TBC (LRW2)]] (via [[pseudorandom-permutation#strong-security|Strong Security]])
- [[strong-security-to-prp|sPRP ⇒ PRP]] (via [[pseudorandom-permutation#strong-security|Strong Security]])

**Produces Pseudorandom permutation**

- [[prf-to-prp-lr88|PRF ⇒ PRP]]
- [[prf-to-strong-pseudorandom-permutation-lr88|PRF ⇒ Strong PRP]] (via [[pseudorandom-permutation#strong-security|Strong Security]])
- [[strong-security-to-prp|sPRP ⇒ PRP]]

<!-- END GENERATED participates-in -->
