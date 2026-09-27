---
type: reduction
status: draft
title: "Weak alternating moduli ⇒ weak PRF"
aliases: []
id: red-alternating-moduli-assumption-to-prf-bip-18
kind: implication
hypotheses: [alternating-moduli-weak]
conclusion: weak-prf
class: fully-black-box
model: standard
source:
  - "[[BIP+18 - Exploring Crypto Dark Matter New Simple PRF Candidates and Their Applications|BIP+18]]"
security-loss: "additive $q^2/2^{n+1}$ for $q$ samples (repeated inputs)"
---

# Weak alternating moduli ⇒ weak PRF

The [[alternating-moduli#weak-alternating-moduli-random-input-assumption|weak (random-input) alternating moduli assumption]] implies [[pseudorandom-function#weak-prfs|weak PRFs]].

## Statement

The [[alternating-moduli#weak-alternating-moduli-random-input-assumption|weak alternating moduli assumption]] asserts that for $f_A(x) = B\,(Ax \bmod 2) \bmod 3$, with secret key $A \getsr \ZZ_2^{m \times n}$ and public $B \getsr \ZZ_3^{\ell \times m}$, samples $(x, f_A(x))$ for uniform $x \getsr \bits^n$ are indistinguishable from $(x, y)$ for uniform $y \getsr \ZZ_3^\ell$; the family is then a [[pseudorandom-function#weak-prfs|weak PRF]] with $\KeyGen$ sampling $A$ and $\Eval(A, x) = f_A(x)$ — [[BIP+18 - Exploring Crypto Dark Matter New Simple PRF Candidates and Their Applications|BIP+18]]. BIP+18 conjecture this random-input form only; the [[alternating-moduli#strong-alternating-moduli-chosen-input-assumption|chosen-input variant]] fails for this map, since $f_A(0^n) = 0$ for every key.

## Sketch

The weak-AM game for $f_A$ and the weak-PRF game for $(\KeyGen, \Eval)$ coincide in world 0. In world 1 they differ only when a sampled input repeats: the weak-PRF oracle answers a repeated $x$ with the same $R(x)$, the weak-AM oracle with a fresh $y$. Over $q$ samples this costs an additive $q^2/2^{n+1}$, negligible for $n = \omega(\log \secpar)$.

## Notes

`class: fully-black-box`: Degenerate: the construction is the identity on the AM family, and the reduction passes any weak-PRF distinguisher through verbatim as a weak-AM distinguisher.

- Sourcing pass (2026-09): this page previously recorded alternating moduli ⇒ PRF, with the chosen-input assumption as hypothesis. That assumption is false for $f_A$, and BIP+18 conjecture only the random-input form, so the hypothesis is now the weak variant and the conclusion the weak PRF. The slug and id are historical; filenames are live URLs and are not renamed.
