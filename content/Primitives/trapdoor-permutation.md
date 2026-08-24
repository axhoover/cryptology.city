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
  enhanced-trapdoor-permutation: "#enhanced-trapdoor-permutations"
  lossy-functions: "#lossy-trapdoor-functions"
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

A TDP is **one-way** if there is some negligible function $\nu$ such that for every efficient $\calA$:
$$\Pr_{(f,\td) \gets \Gen(1^\secpar),\, x \getsr \calD}\!\left[\Eval(f, x') = \Eval(f, x) : x' \gets \calA(1^\secpar, f, \Eval(f, x))\right] \le \nu(\secpar).$$

### Easy inversion with trapdoor

Inversion with the trapdoor is efficient: $\Invert(\td, \Eval(f, x)) = x$ with probability 1 in $\poly(\secpar)$ time.

# Variations

## Enhanced trapdoor permutations

An _enhanced TDP_ additionally requires that the TDP remain hard to invert even when given a random coin $r$ and a random element $y = \Eval(f, x)$ sampled using $r$ in a specific way. This stronger property is necessary for constructing [[oblivious-transfer|OT]] from TDPs.

## Lossy trapdoor functions

A generalization where there are two modes: an injective mode (standard TDP) and a lossy mode (where the function is many-to-one and loses information). Lossy TDFs imply TDPs and are useful for constructing CCA-secure encryption.

# Other results

- [[tdp-to-pke|TDP ⇒ PKE]]
- [[enhanced-trapdoor-permutations-to-ot-gkm-00|Enhanced trapdoor permutations ⇒ OT]]
- [[rsa-to-tdp-rsa78|RSA ⇒ TDP]]
- [[no-injective-owf-to-owp-mm11|No reduction from Injective OWF to OWP]]

<!-- BEGIN GENERATED participates-in 5e85a0497ddb -->
## Participates in

**Builds on Trapdoor permutation**

- [[tdp-to-hash-function|TDP ⇒ Hash function]]
- [[tdp-to-nizk-bfm88|TDP ⇒ NIZK]]
- [[tdp-to-ot|TDP ⇔ OT]]
- [[tdp-to-pke|TDP ⇒ PKE]]

**Produces Trapdoor permutation**

- [[dlog-to-tdp|DLOG ⇒ TDP]]
- [[lossy-trapdoor-functions-to-tdp|Lossy trapdoor functions ⇒ TDP]]
- [[rsa-to-tdp-rsa78|RSA ⇒ TDP]]

**Barriers**

- [[no-tdp-to-ot|No reduction from TDP to OT]]
<!-- END GENERATED participates-in -->
