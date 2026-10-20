---
type: primitive
status: stub
aliases:
  - TDP
  - TDF
  - Trapdoor function
  - Trapdoor permutation
title: Trapdoor permutation
id: tdp
variants:
  lossy-trapdoor-function: "#lossy-trapdoor-functions"
  highly-lossy-trapdoor-function: "#highly-lossy-trapdoor-functions"
  enhanced-trapdoor-permutation: "#enhanced-trapdoor-permutations"
  doubly-enhanced-certified-tdp: "#doubly-enhanced-certified-trapdoor-permutations"
  injective-trapdoor-function: "#injective-trapdoor-functions"
  claw-free-permutations: "#claw-free-permutations"
---

# Trapdoor permutation

A _trapdoor permutation (TDP)_ is a permutation that is easy to compute but hard to invert without a _trapdoor_: a secret that makes inversion efficient. Trapdoor permutations are one-way functions with an additional invertibility structure, and they are associated with Impagliazzo's "Cryptomania" world. Their existence implies many public-key cryptographic primitives.

## Syntax

A _trapdoor permutation family_ is a tuple of efficient algorithms $\mathsf{TDP} = (\Gen, \Eval, \Invert)$ with respect to a domain $\calD$ and trapdoor space $\calT$:

- $\Gen(1^\secpar) \to (f, \td),$ is a randomized key generation algorithm that samples a function index $f$ and a trapdoor $\td \in \calT,$
- $\Eval(f, x) \to y,$ is a deterministic algorithm that evaluates $f : \calD \to \calD$ on input $x \in \calD$, outputting $y \in \calD,$
- $\Invert(\td, y) \to x,$ is a deterministic algorithm that inverts $f$ on input $y$ given trapdoor $\td,$ outputting $x \in \calD.$

We require that $f$ defines a bijection (permutation) on $\calD$.

## Properties

### Correctness

For all $\secpar \in \NN$ and $x \in \calD$, with $(f, \td) \gets \Gen(1^\secpar)$:
$$\Pr\!\left[\Invert(\td, \Eval(f, x)) = x\right] = 1.$$

### One-wayness

A TDP is **one-way** if for all efficient $\calA$,
$$\Pr\!\left[\Eval(f, x') = \Eval(f, x) : (f,\td) \gets \Gen(1^\secpar),\ x \getsr \calD,\ x' \gets \calA(1^\secpar, f, \Eval(f, x))\right]$$
is negligible.

### Easy inversion with trapdoor

Inversion with the trapdoor is efficient: $\Invert(\td, \Eval(f, x)) = x$ with probability 1 in $\poly(\secpar)$ time.

# Variations

## Enhanced trapdoor permutations

An _enhanced TDP_ comes with a domain sampler and remains hard to invert on a sampled image $y$ even given the sampler's coins $r$. The [[EGL85 - A randomized protocol for signing contracts|EGL85]] construction of [[oblivious-transfer|OT]] is proved secure under this stronger property, since its receiver samples an image obliviously and holds the sampling coins — [[Gol04 - Foundations of Cryptography Basic Applications|Gol04]], [[GR13 - Enhancements of Trapdoor Permutations|GR13]]. No fully black-box construction of an enhanced TDP from a standard TDP exists — [[Haj18 - Enhancements Are Blackbox Non-Trivial Impossibility of Enhanced Trapdoor Permutations from Standard Trapdoor Permutations|Haj18]].

### Doubly enhanced certified trapdoor permutations

An enhanced TDP is _doubly enhanced_ if, given the index alone, one can efficiently sample a pair $(x, r)$ with $x$ uniform in the domain and $r$ uniform among the domain sampler's coins that output $f(x)$ — [[GR13 - Enhancements of Trapdoor Permutations|GR13]]. It is _certified_ if its indices, and the domains they describe, are efficiently recognizable, so that a verifier can check that an index describes a permutation — [[BY96 - Certifying Permutations Noninteractive Zero-Knowledge Based on Any Trapdoor Permutation|BY96]], [[CL18 - Certifying Trapdoor Permutations, Revisited|CL18]]. These are the properties the hidden-bits compilation of NIZK proofs uses — [[GR13 - Enhancements of Trapdoor Permutations|GR13]], [[CL18 - Certifying Trapdoor Permutations, Revisited|CL18]].

## Injective trapdoor functions

An _injective trapdoor function_ has the syntax above with $\Eval(f, \cdot) : \calD \to \calR$ injective rather than a permutation of $\calD$, and the same one-wayness and inversion requirements. Every trapdoor permutation is one — folklore.

## Claw-free permutations

A _claw-free pair_ is a pair of permutations $f_0, f_1$ of a common domain $\calD$, sampled together by $\Gen$, such that no efficient $\calA$ given $(f_0, f_1)$ outputs a claw $(x_0, x_1)$ with $f_0(x_0) = f_1(x_1)$, except with negligible probability — [[GMR88 - A Digital Signature Scheme Secure Against Adaptive Chosen-Message Attacks|GMR88]]. Each $f_b$ is then one-way, since inverting $f_0$ on $f_1(x_1)$ for uniform $x_1$ yields a claw — standard. GMR88 use claw-free pairs with trapdoors for $f_0^{-1}$ and $f_1^{-1}$.

## Lossy trapdoor functions

An $(n, k)$-_lossy trapdoor function_ samples a function index $s$ in one of two computationally indistinguishable modes: in the injective mode $f_s : \bits^n \to \calR$ is injective and inverted by $\Invert$ with the trapdoor, one-wayness not being assumed, and in the lossy mode $f_s$ has at most $2^{n-k}$ images, so it loses at least $k$ bits of its input — [[PW08 - Lossy trapdoor functions and their applications|PW08]]. A _lossy trapdoor function_ is an $(n, k)$-lossy one with $k = \omega(\log \secpar)$; without a lower bound on $k$, every injective trapdoor function is an $(n, 0)$-lossy one, with the same index in both modes. $r := n - k$ is the _residual leakage_. Lossy TDFs imply injective trapdoor functions — [[PW08 - Lossy trapdoor functions and their applications|PW08]] — and IND-CCA-secure encryption — [[MY10 - Chosen-Ciphertext Security from Slightly Lossy Trapdoor Functions|MY10]].

### Highly lossy trapdoor functions

An $(n, k)$-lossy trapdoor function is _highly lossy_ if its residual leakage is $r \le \rho n$ for a constant $\rho < 1/2$, the regime in which it yields collision-resistant hashing — [[PW08 - Lossy trapdoor functions and their applications|PW08]].

# Other results

- [[tdp-to-pke|TDP ⇒ PKE]]
- [[enhanced-trapdoor-permutations-to-ot-gkm-00|Enhanced trapdoor permutations ⇒ OT]]
- [[rsa-to-tdp-rsa78|RSA ⇒ TDP]]

<!-- BEGIN GENERATED participates-in 559cc35ab4d5 -->

## Participates in

**Builds on Trapdoor permutation**

- [[claw-free-permutations-to-constant-round-zk-proof-gk96b|Claw-free permutations ⇒ Constant-round ZK proofs for NP (Goldreich–Kahan)]] (via [[trapdoor-permutation#claw-free-permutations|Claw-free permutations]])
- [[claw-free-permutations-to-crhf-dam87|Claw-free permutations ⇒ CRHF (Damgård)]] (via [[trapdoor-permutation#claw-free-permutations|Claw-free permutations]])
- [[doubly-enhanced-certified-tdp-to-enhanced-trapdoor-permutation|Doubly enhanced certified TDP ⇒ Enhanced TDP]] (via [[trapdoor-permutation#doubly-enhanced-certified-trapdoor-permutations|Doubly enhanced certified trapdoor permutations]])
- [[enhanced-trapdoor-permutations-to-ot-gkm-00|Enhanced trapdoor permutations ⇒ OT]] (via [[trapdoor-permutation#enhanced-trapdoor-permutations|Enhanced trapdoor permutations]])
- [[highly-lossy-trapdoor-function-to-lossy-trapdoor-function|Highly lossy TDF ⇒ Lossy TDF]] (via [[trapdoor-permutation#highly-lossy-trapdoor-functions|Highly lossy trapdoor functions]])
- [[lossy-trapdoor-function-to-crhf-pw08|Highly lossy TDF ⇒ CRHF]] (via [[trapdoor-permutation#highly-lossy-trapdoor-functions|Highly lossy trapdoor functions]])
- [[lossy-trapdoor-function-to-injective-trapdoor-function-pw08|Lossy TDF ⇒ Injective TDF]] (via [[trapdoor-permutation#lossy-trapdoor-functions|Lossy trapdoor functions]])
- [[lossy-trapdoor-function-to-ot-pw08|Lossy TDF ⇒ OT]] (via [[trapdoor-permutation#lossy-trapdoor-functions|Lossy trapdoor functions]])
- [[lossy-trapdoor-functions-to-pke|Lossy trapdoor functions ⇒ IND-CCA PKE]] (via [[trapdoor-permutation#lossy-trapdoor-functions|Lossy trapdoor functions]])
- [[tdp-to-cpir-ko00|TDP ⇒ Non-trivial cPIR (Kushilevitz–Ostrovsky)]]
- [[tdp-to-hash-function|TDP ⇒ OWF]]
- [[tdp-to-injective-trapdoor-function|TDP ⇒ Injective TDF]]
- [[tdp-to-nizk-bfm88|Doubly enhanced certified TDP ⇒ NIZK]] (via [[trapdoor-permutation#doubly-enhanced-certified-trapdoor-permutations|Doubly enhanced certified trapdoor permutations]])
- [[tdp-to-pke|TDP ⇒ PKE]]

**Produces Trapdoor permutation**

- [[ddh-to-lossy-trapdoor-function-pw08|DDH ⇒ Highly lossy TDF (Peikert–Waters)]] (via [[trapdoor-permutation#highly-lossy-trapdoor-functions|Highly lossy trapdoor functions]])
- [[doubly-enhanced-certified-tdp-to-enhanced-trapdoor-permutation|Doubly enhanced certified TDP ⇒ Enhanced TDP]] (via [[trapdoor-permutation#enhanced-trapdoor-permutations|Enhanced trapdoor permutations]])
- [[factoring-blum-integers-to-claw-free-permutations-gmr88|Factoring ⇒ Claw-free permutations (GMR)]] (via [[trapdoor-permutation#claw-free-permutations|Claw-free permutations]])
- [[factoring-blum-integers-to-tdp-rab79|Factoring ⇒ TDP (Rabin)]]
- [[highly-lossy-trapdoor-function-to-lossy-trapdoor-function|Highly lossy TDF ⇒ Lossy TDF]] (via [[trapdoor-permutation#lossy-trapdoor-functions|Lossy trapdoor functions]])
- [[lossy-trapdoor-function-to-injective-trapdoor-function-pw08|Lossy TDF ⇒ Injective TDF]] (via [[trapdoor-permutation#injective-trapdoor-functions|Injective trapdoor functions]])
- [[lwe-to-lossy-trapdoor-function-pw08|LWE ⇒ Lossy TDF (Peikert–Waters)]] (via [[trapdoor-permutation#lossy-trapdoor-functions|Lossy trapdoor functions]])
- [[rsa-to-tdp-rsa78|RSA ⇒ TDP]]
- [[subexponential-io-and-owf-to-tdp-bpw16|Sub-exponential iO + Sub-exponential OWF ⇒ TDP (Bitansky–Paneth–Wichs)]]
- [[tdp-to-injective-trapdoor-function|TDP ⇒ Injective TDF]] (via [[trapdoor-permutation#injective-trapdoor-functions|Injective trapdoor functions]])

**Barriers**

- [[no-ke-to-tdp-rud91|No relativizing reduction from KE to TDP]]
- [[no-ot-to-tdp-gkm-00|No fully-black-box reduction from OT to TDP]]
- [[no-pke-to-injective-trapdoor-function-gmr01|No fully-black-box reduction from PKE to injective TDF]] (via [[trapdoor-permutation#injective-trapdoor-functions|Injective trapdoor functions]])
- [[no-pke-to-tdp-gkm-00|No fully-black-box reduction from PKE to TDP]]
- [[no-tdp-to-ot|No fully-black-box reduction from TDP to enhanced TDP]]

<!-- END GENERATED participates-in -->
