---
type: primitive
status: draft
aliases:
  - VRF
  - Verifiable random function
title: Verifiable random function
id: verifiable-random-function
variants:
  key-dependent-output-vrf: "#key-dependent-output-spaces"
  vrf-selective-pseudorandomness: "#selective-pseudorandomness"
  weak-vrf: "#weak-vrfs"
  vuf: "#verifiable-unpredictable-functions"
---

# Verifiable random function

A verifiable random function is a keyed function whose secret-key holder outputs, for each input, the function value together with a proof that the value is correct with respect to a published public key, while values at unqueried inputs remain pseudorandom to anyone holding only the public key.

## Syntax

A VRF is a triple of efficient algorithms $\mathsf{VRF} = (\KeyGen, \Eval, \Vrfy)$ with respect to input space $\calX = \calX_\secpar = \bits^{a(\secpar)}$ and output space $\calY = \calY_\secpar$. Here $a$ is polynomial-time computable with $a(\secpar) = \omega(\log \secpar)$ and $a(\secpar) \le \poly(\secpar)$, so $|\calX_\secpar|$ is superpolynomial. $\calY_\secpar$ is a set of strings of length $\poly(\secpar)$ with $|\calY_\secpar| \ge 2$ and an efficient uniform sampler.

- $\KeyGen(1^\secpar) \to (\pk, \sk)$, a randomized algorithm that outputs a public key $\pk$ and a secret key $\sk$,
- $\Eval(\sk, x) \to (y, \pi)$, a deterministic algorithm that takes $\sk$ and an input $x \in \calX$ and outputs the value $y \in \calY$ and a proof $\pi$,
- $\Vrfy(\pk, x, y, \pi) \to b$, a deterministic algorithm that outputs a bit $b \in \bits$.

With $\calY_\secpar = \{y_\secpar\}$, the scheme with $\Eval(\sk, x) = (y_\secpar, \varepsilon)$ for the empty string $\varepsilon$ and $\Vrfy(\pk, x, y, \pi) = [y = y_\secpar]$ meets every notion below. With $|\calX_\secpar|$ polynomial, a public key of perfectly binding commitments under a [[one-way-permutation|one-way permutation]] to a table of uniform values, one per input, with openings as proofs, is a VRF — standard.

## Properties

### Provability

$\mathsf{VRF}$ satisfies **provability** if for all $\secpar \in \NN$, all $(\pk, \sk)$ in the support of $\KeyGen(1^\secpar)$ and all $x \in \calX$, $(y, \pi) = \Eval(\sk, x)$ implies $\Vrfy(\pk, x, y, \pi) = 1$ — [[MRV99 - Verifiable Random Functions|MRV99]].

### Unique provability

$\mathsf{VRF}$ satisfies **unique provability** if for every string $\pk$, every $x \in \calX$ and all $(y_0, \pi_0), (y_1, \pi_1)$ with $y_0 \ne y_1$,

$$
\Vrfy(\pk, x, y_0, \pi_0) = 0 \quad \text{or} \quad \Vrfy(\pk, x, y_1, \pi_1) = 0
$$

— [[MRV99 - Verifiable Random Functions|MRV99]]. A dishonest key holder therefore cannot prove two values at one input. [[MRV99 - Verifiable Random Functions|MRV99]] allow a probabilistic $\Vrfy$, with provability and unique provability holding up to error $2^{-\Omega(\secpar)}$; here $\Vrfy$ is deterministic and both conditions are perfect.

### Pseudorandomness

The adversary obtains values and proofs at inputs of its choice, then distinguishes the value at a challenge input $x^*$ from a uniform element of $\calY$.

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{vrf}}_{\mathsf{VRF},\calA}(\secpar)$}
\begin{algorithmic}
\State $(\pk, \sk) \gets \KeyGen(1^\secpar)$; $b \getsr \bits$
\State $\calO(x) := \Eval(\sk, x)$
\State $(x^*, \stA) \gets \calA^{\calO}(1^\secpar, \pk)$
\Comment{$\calA$ may not have queried $\calO(x^*)$}
\State $(y_0, \pi^*) \gets \Eval(\sk, x^*)$; $y_1 \getsr \calY$
\State $b' \gets \calA^{\calO}(y_b, \stA)$
\Comment{$\calA$ may not query $\calO(x^*)$}
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

$\mathsf{VRF}$ is **pseudorandom** if for all efficient admissible $\calA$,

$$
\Adv^{\mathrm{vrf}}_{\mathsf{VRF},\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{vrf}}_{\mathsf{VRF},\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible — [[MRV99 - Verifiable Random Functions|MRV99]]. $\calA$ is admissible if it never queries $\calO$ on $x^*$; the constraint is necessary because $\calO(x^*)$ returns $(y_0, \pi^*)$, and comparing $y_0$ with $y_b$ wins with advantage $1 - 1/|\calY|$.

As an object, a VRF denotes a scheme with provability, unique provability and pseudorandomness.

# Variations

## Key-dependent output spaces

A VRF whose output space $\calY = \calY_{\pk}$ is determined by the public key, as when $\KeyGen$ samples the parameters of a group and publishes them in $\pk$: for every $\pk$ in the support of $\KeyGen(1^\secpar)$, $\calY_{\pk}$ is a set of strings of length $\poly(\secpar)$ with $|\calY_{\pk}| \ge 2$, and an efficient algorithm given $\pk$ samples uniformly from $\calY_{\pk}$. The input space, provability and unique provability are as above with $y \in \calY_{\pk}$, and the pseudorandomness game draws $y_1 \getsr \calY_{\pk}$. As an object, a VRF with key-dependent outputs denotes such a scheme with provability, unique provability and this pseudorandomness. A VRF with a fixed output space $\calY_\secpar$ is one, with $\calY_{\pk} := \calY_\secpar$ ([[verifiable-random-function-to-key-dependent-output-vrf|VRF ⇒ VRF with key-dependent outputs]]) — folklore. The converse fails for the fixed-space game: when $\calY_{\pk}$ ranges over sets that the public key tells apart, a uniform element of their union is not distributed as an output, and membership in $\calY_{\pk}$ distinguishes them. The $k$-Lin VRF of [[HJ16 - Verifiable Random Functions from Standard Assumptions|HJ16]] has key-dependent outputs ([[bdh-to-vrf|k-Lin ⇒ VRF with key-dependent outputs]]).

## Selective pseudorandomness

The adversary commits to $x^*$ before receiving $\pk$: the game is $\Game^{\mathrm{vrf}}$ except that $\calA$ outputs $x^*$ on input $1^\secpar$ before $\KeyGen$ runs, and its first phase then runs on $\pk$ with $x^*$ fixed. $\mathsf{VRF}$ is **selectively pseudorandom** if for all efficient admissible $\calA$ the advantage in this game, defined as for $\Game^{\mathrm{vrf}}$, is negligible. As an object, a selectively secure VRF denotes a scheme with provability, unique provability and selective pseudorandomness. Pseudorandomness implies selective pseudorandomness ([[verifiable-random-function-to-vrf-selective-pseudorandomness|VRF ⇒ selectively secure VRF]]), and guessing $x^*$ converts back at a loss factor $|\calX|$ — standard.

## Weak VRFs

A **weak VRF** is pseudorandom only at random inputs: the evaluation oracle takes no input and returns $(x, \Eval(\sk, x))$ for a fresh $x \getsr \calX$, and $\calA$ receives a uniform fresh challenge input $x^*$ together with $y_b$ — [[BGRV09 - Weak Verifiable Random Functions|BGRV09]]. A pseudorandom VRF is a weak VRF, up to an additive $2q/|\calX|$ for $q$ oracle queries ([[verifiable-random-function-to-weak-vrf|VRF ⇒ weak VRF]]) — standard.

## Verifiable unpredictable functions

A **verifiable unpredictable function (VUF)** satisfies provability and unique provability, with pseudorandomness replaced by unpredictability: for all efficient $\calA$ given $\pk$ and access to $\calO$, the probability that $\calA$ outputs $(x^*, y^*)$ with $x^*$ unqueried and $\Eval(\sk, x^*) = (y^*, \pi)$ for some $\pi$ is negligible — [[MRV99 - Verifiable Random Functions|MRV99]]. A [[digital-signature|signature scheme]] with unique signatures is a VUF with empty proofs, and a VRF whose output space has superpolynomial size is a VUF — standard. [[MRV99 - Verifiable Random Functions|MRV99]] turn VUFs into VRFs with Goldreich–Levin [[hardcore-predicate|hardcore bits]].

# Other results

- Forgetting $\pk$ and the proofs leaves a [[pseudorandom-function|PRF]] $\calX \to \calY$ with key $\sk$, at a loss factor $q$ for $q$ distinct queries ([[verifiable-random-function-to-prf|VRF ⇒ PRF]]) — standard.
- [[bdh-to-vrf|k-Lin ⇒ VRF with key-dependent outputs]]: in symmetric bilinear groups, the [$k$-linear assumption](bilinear-map-assumptions#k-linear-assumption) for $k \ge 2$ gives a VRF with exponential-size input space, and unique provability and pseudorandomness as defined above — [[HJ16 - Verifiable Random Functions from Standard Assumptions|HJ16]].
- In a group with a [[pairings|bilinear map]] $e : \GG \times \GG \to \GG_T$ of prime order $p$ with generator $g$, the VRF with $\sk \getsr \ZZ_p$, $\pk = g^{\sk}$, value $e(g, g)^{1/(x + \sk)}$ and proof $g^{1/(x + \sk)}$ is pseudorandom for small input spaces under a $q$-type decisional bilinear Diffie–Hellman inversion assumption; it avoids the Goldreich–Levin step of earlier constructions — [[DY05 - A Verifiable Random Function with Short Proofs and Keys|DY05]].
- Unique signatures under a generalized [[computational-diffie-hellman|computational Diffie–Hellman]] assumption in groups where [[decisional-diffie-hellman|decisional Diffie–Hellman]] is easy, and VRFs from them — [[Lys02 - Unique Signatures and Verifiable Random Functions from the DH-DDH Separation|Lys02]].
- VRFs with exponential-size input space and adaptive pseudorandomness in bilinear groups under the decisional Diffie–Hellman exponent assumption, a non-interactive $q$-type assumption, in the standard model without a common reference string; earlier VRFs with such input spaces needed an interactive assumption or one tolerating a security loss $2^n$ on $n$-bit inputs — [[HW10 - Constructing Verifiable Random Functions with Large Input Spaces|HW10]].
- [[no-tdp-to-verifiable-random-function-fs12|No fully-black-box reduction from TDP to VRF]] — [[FS12 - Uniqueness Is a Different Story Impossibility of Verifiable Random Functions from Trapdoor Permutations|FS12]]; VRFs follow non-uniformly from sub-exponentially hard [[trapdoor-permutation|trapdoor permutations]] — [[Bit17 - Verifiable Random Functions from Non-interactive Witness-Indistinguishable Proofs|Bit17]].

<!-- BEGIN GENERATED participates-in 358bedff89ad -->

## Participates in

**Builds on Verifiable random function**

- [[verifiable-random-function-to-key-dependent-output-vrf|VRF ⇒ VRF with key-dependent outputs]]
- [[verifiable-random-function-to-prf|VRF ⇒ PRF]]
- [[verifiable-random-function-to-vrf-selective-pseudorandomness|VRF ⇒ selectively secure VRF]]
- [[verifiable-random-function-to-weak-vrf|VRF ⇒ weak VRF]]

**Produces Verifiable random function**

- [[bdh-to-vrf|k-Lin ⇒ VRF with key-dependent outputs]] (via [[verifiable-random-function#key-dependent-output-spaces|Key-dependent output spaces]])
- [[verifiable-random-function-to-key-dependent-output-vrf|VRF ⇒ VRF with key-dependent outputs]] (via [[verifiable-random-function#key-dependent-output-spaces|Key-dependent output spaces]])
- [[verifiable-random-function-to-vrf-selective-pseudorandomness|VRF ⇒ selectively secure VRF]] (via [[verifiable-random-function#selective-pseudorandomness|Selective pseudorandomness]])
- [[verifiable-random-function-to-weak-vrf|VRF ⇒ weak VRF]] (via [[verifiable-random-function#weak-vrfs|Weak VRFs]])

**Barriers**

- [[no-tdp-to-verifiable-random-function-fs12|No fully-black-box reduction from TDP to VRF]]

<!-- END GENERATED participates-in -->
