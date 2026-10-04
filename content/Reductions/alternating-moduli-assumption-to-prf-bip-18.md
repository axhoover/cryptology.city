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
rationale:
  class: "The construction is the identity on the alternating-moduli family, and the reduction runs any weak-PRF distinguisher unchanged as a weak-AM distinguisher."
---

# Weak alternating moduli ⇒ weak PRF

## Statement

The [[alternating-moduli#weak-alternating-moduli-random-input-assumption|weak alternating moduli assumption]] asserts that for $f_A(x) = B\,(Ax \bmod 2) \bmod 3$, with secret key $A \getsr \ZZ_2^{m \times n}$ and public $B \getsr \ZZ_3^{\ell \times m}$, samples $(x, f_A(x))$ for uniform $x \getsr \bits^n$ are indistinguishable from $(x, y)$ for uniform $y \getsr \ZZ_3^\ell$. Under it, the family with $\KeyGen$ sampling $A$ and $\Eval(A, x) = f_A(x)$ is a [[pseudorandom-function#weak-prfs|weak PRF]] — [[BIP+18 - Exploring Crypto Dark Matter New Simple PRF Candidates and Their Applications|BIP+18]].

## Sketch

The weak-AM game for $f_A$ and the weak-PRF game for $(\KeyGen, \Eval)$ coincide in world 0. In world 1 they differ only when a sampled input repeats: the weak-PRF oracle answers a repeated $x$ with the same $R(x)$, the weak-AM oracle with a fresh $y$. Over $q$ samples this costs an additive $q^2/2^{n+1}$, negligible for $n = \omega(\log \secpar)$.

## Notes

- BIP+18 conjecture only this random-input form — [[BIP+18 - Exploring Crypto Dark Matter New Simple PRF Candidates and Their Applications|BIP+18]]. The [[alternating-moduli#strong-alternating-moduli-chosen-input-assumption|chosen-input variant]] fails for $f_A$, since $f_A(0^n) = 0$ for every key.
