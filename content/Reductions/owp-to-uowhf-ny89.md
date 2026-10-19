---
type: reduction
status: draft
title: OWP ⇒ UOWHF (Naor–Yung)
aliases: []
id: red-owp-to-uowhf-ny89
kind: implication
hypotheses: [owp]
conclusion: uowhf
class: fully-black-box
model: standard
source:
  - "[[NY89 - Universal One-Way Hash Functions and Their Cryptographic Applications|NY89]]"
security-loss: "none: an adversary finding a target collision with probability ε inverts the permutation with probability ε(1 - 2^{-n})"
rationale:
  class: "The hash evaluates the permutation only as an oracle, and one fixed reduction embeds its inversion challenge in the key it hands any target-collision finder, which it runs once as an oracle."
---

# OWP ⇒ UOWHF (Naor–Yung)

## Statement

Let $\pi$ be a [[one-way-permutation|one-way permutation]] on $\bits^n$, identified with $\FF_{2^n}$, and let $\mathrm{chop}$ delete the last bit of an $n$-bit string. The family

$$
\hash_{a,b}(x) := \mathrm{chop}(a \cdot \pi(x) + b), \qquad (a, b) \getsr \FF_{2^n}^{*} \times \FF_{2^n},
$$

maps $n$ bits to $n - 1$ bits and is a [[hash-function#target-collision-resistance-universal-one-wayness|universal one-way hash function]] — [[NY89 - Universal One-Way Hash Functions and Their Cryptographic Applications|NY89]]. Composing independently keyed one-bit-compressing families compresses by any polynomial number of bits — [[NY89 - Universal One-Way Hash Functions and Their Cryptographic Applications|NY89]].

## Sketch

Let $\calA$ name the target $x$ before the key, and let the reduction hold a challenge $y = \pi(z)$ for uniform $z$. It samples $w \getsr \FF_{2^n}$ and solves for the unique affine map $g(u) = au + b$ with $g(\pi(x)) = w$ and $g(y) = w + e_n$, where $e_n$ is the last unit vector; when $y \ne \pi(x)$ this gives $a = e_n / (y + \pi(x)) \ne 0$, and since $y$ is uniform and independent of $\calA$'s view, $(a, b)$ is uniform. A collision $\hat{x} \ne x$ satisfies $g(\pi(\hat{x})) \in \{w, w + e_n\}$, and injectivity of $\pi$ and $g$ excludes $w$, so $\pi(\hat{x}) = y$.

## Notes

- Any pairwise-independent family of permutations that can be sampled uniformly conditioned on two input–output pairs can replace the affine maps over $\FF_{2^n}$ — [[NY89 - Universal One-Way Hash Functions and Their Cryptographic Applications|NY89]].
- Efficiency: one evaluation of $\pi$ per bit of compression, so compressing $n$ bits to $n - k$ costs $k$ evaluations and a key of $2k$ field elements. No fully-black-box construction from a one-way permutation of security $S$ compresses by $k$ bits with $o(k / \log S)$ queries — [[GT00 - Lower Bounds on the Efficiency of Generic Cryptographic Constructions|GT00]].
- One-way functions suffice: [[owf-to-uowhf-rom90|OWF ⇒ UOWHF]] — [[Rom90 - One-way functions are necessary and sufficient for secure signatures|Rom90]].
