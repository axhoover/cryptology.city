---
type: primitive
status: draft
aliases:
  - VRF
  - Verifiable random function
title: Verifiable random function
id: verifiable-random-function
variants:
  vrf-selective-pseudorandomness: "#selective-pseudorandomness"
  weak-vrf: "#weak-vrfs"
  vuf: "#verifiable-unpredictable-functions"
---

# Verifiable random function

A verifiable random function is a keyed function whose secret-key holder outputs, for each input, the function value together with a proof that the value is correct with respect to a published public key, while values at unqueried inputs remain pseudorandom to anyone holding only the public key. The definitions below are those of [[MRV99 - Verifiable Random Functions|MRV99]].

## Syntax

A VRF is a triple of efficient algorithms $\mathsf{VRF} = (\KeyGen, \Eval, \Vrfy)$ with respect to input space $\calX$ and output space $\calY$:

- $\KeyGen(1^\secpar) \to (\pk, \sk)$, a randomized algorithm that outputs a public key $\pk$ and a secret key $\sk$,
- $\Eval(\sk, x) \to (y, \pi)$, a deterministic algorithm that takes $\sk$ and an input $x \in \calX$ and outputs the value $y \in \calY$ and a proof $\pi$,
- $\Vrfy(\pk, x, y, \pi) \to b$, a deterministic algorithm that outputs a bit $b \in \bits$.

## Properties

### Provability

$\mathsf{VRF}$ satisfies **provability** if for all $\secpar \in \NN$, all $(\pk, \sk)$ in the support of $\KeyGen(1^\secpar)$ and all $x \in \calX$, $(y, \pi) = \Eval(\sk, x)$ implies $\Vrfy(\pk, x, y, \pi) = 1$ — [[MRV99 - Verifiable Random Functions|MRV99]].

### Unique provability

$\mathsf{VRF}$ satisfies **unique provability** if for every string $\pk$, every $x \in \calX$ and all $(y_0, \pi_0), (y_1, \pi_1)$ with $y_0 \ne y_1$,

$$
\Vrfy(\pk, x, y_0, \pi_0) = 0 \quad \text{or} \quad \Vrfy(\pk, x, y_1, \pi_1) = 0
$$

— [[MRV99 - Verifiable Random Functions|MRV99]]. The condition is perfect and quantifies over all strings $\pk$, not only the outputs of $\KeyGen$, so a dishonest key holder cannot prove two values at one input. [[HJ16 - Verifiable Random Functions from Standard Assumptions|HJ16]]'s VRFs ([[bdh-to-vrf|k-Lin ⇒ VRF]]) satisfy unique provability in this form.

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

is negligible — [[MRV99 - Verifiable Random Functions|MRV99]]. The admissibility constraint is necessary: $\calO(x^*)$ returns $y_0$.

# Variations

## Selective pseudorandomness

The adversary commits to $x^*$ before receiving $\pk$. Pseudorandomness implies selective pseudorandomness, and guessing $x^*$ converts back at a loss factor $|\calX|$ — standard.

## Weak VRFs

A **weak VRF** is pseudorandom only at random inputs: the evaluation oracle takes no input and returns $(x, \Eval(\sk, x))$ for a fresh $x \getsr \calX$, and the challenge input $x^*$ is uniform and fresh — [[BGRV09 - Weak Verifiable Random Functions|BGRV09]].

## Verifiable unpredictable functions

A **verifiable unpredictable function (VUF)** satisfies provability and unique provability, with pseudorandomness replaced by unpredictability: for all efficient $\calA$ with access to $\calO$, the probability that $\calA$ outputs $(x^*, y^*)$ with $x^*$ unqueried and $y^*$ the value of $\Eval(\sk, x^*)$ is negligible — [[MRV99 - Verifiable Random Functions|MRV99]]. A VUF is a [[digital-signature|signature scheme]] with unique signatures, and a VRF whose output space has superpolynomial size is a VUF — standard. [[MRV99 - Verifiable Random Functions|MRV99]] turn VUFs into VRFs with Goldreich–Levin [[hardcore-predicate|hardcore bits]].

# Other results

- [[bdh-to-vrf|k-Lin ⇒ VRF]]: in symmetric bilinear groups, the $k$-linear assumption for $k \ge 2$ gives a VRF with exponential-size input space and pseudorandomness as defined above — [[HJ16 - Verifiable Random Functions from Standard Assumptions|HJ16]].
- In a group with a [[pairings|bilinear map]] $e : \GG \times \GG \to \GG_T$ of prime order $p$ with generator $g$, the VRF with $\sk \getsr \ZZ_p$, $\pk = g^{\sk}$, value $e(g, g)^{1/(x + \sk)}$ and proof $g^{1/(x + \sk)}$ is pseudorandom for small input spaces under a $q$-type decisional bilinear Diffie–Hellman inversion assumption; it avoids the Goldreich–Levin step of earlier constructions — [[DY05 - A Verifiable Random Function with Short Proofs and Keys|DY05]].
- Unique signatures under a generalized computational Diffie–Hellman assumption in groups where decisional Diffie–Hellman is easy, and VRFs from them — [[Lys02 - Unique Signatures and Verifiable Random Functions from the DH-DDH Separation|Lys02]].
- VRFs with exponential-size input space and adaptive pseudorandomness under a non-interactive $q$-type assumption in bilinear groups, without complexity leveraging — [[HW10 - Constructing Verifiable Random Functions with Large Input Spaces|HW10]].
- [[no-tdp-to-verifiable-random-function-fs12|No fully-black-box reduction from TDP to VRF]] — [[FS12 - Uniqueness Is a Different Story Impossibility of Verifiable Random Functions from Trapdoor Permutations|FS12]]; VRFs follow non-uniformly from sub-exponentially hard trapdoor permutations — [[Bit17 - Verifiable Random Functions from Non-interactive Witness-Indistinguishable Proofs|Bit17]].

<!-- BEGIN GENERATED participates-in 747d3c20cc5e -->

## Participates in

**Produces Verifiable random function**

- [[bdh-to-vrf|k-Lin ⇒ VRF]]

**Barriers**

- [[no-tdp-to-verifiable-random-function-fs12|No fully-black-box reduction from TDP to VRF]]

<!-- END GENERATED participates-in -->
