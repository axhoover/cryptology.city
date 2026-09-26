---
type: reduction
status: draft
title: "Alternating moduli assumption ⇒ PRF"
aliases: []
id: red-alternating-moduli-assumption-to-prf-bip-18
kind: implication
hypotheses: [alternating-moduli-assumption]
conclusion: prf
class: fully-black-box
model: standard
source:
  - "[[BIP+18 - Exploring Crypto Dark Matter New Simple PRF Candidates and Their Applications|BIP+18]]"
security-loss: "none (identity reduction)"
---

# Alternating moduli assumption ⇒ PRF

[[alternating-moduli|Alternating moduli assumption]] implies [[pseudorandom-function|PRF]].

## Statement

The [[alternating-moduli|alternating moduli assumption]] asserts that the family $f_A(x) = B\,(Ax \bmod 2) \bmod 3$, with secret key $A \getsr \ZZ_2^{m \times n}$ and public $B \getsr \ZZ_3^{\ell \times m}$, is indistinguishable from a random function; the family is then itself a [[pseudorandom-function|PRF]] with $\KeyGen$ sampling $A$ and $\Eval(A, x) = f_A(x)$, by the identity reduction. [[BIP+18 - Exploring Crypto Dark Matter New Simple PRF Candidates and Their Applications|BIP+18]] conjecture this only for uniformly random inputs, i.e. the [[alternating-moduli#weak-alternating-moduli-random-input-assumption|weak variant]], under which the family is a weak PRF; the [[alternating-moduli#strong-alternating-moduli-chosen-input-assumption|chosen-input variant]] fails for this map, since $f_A(0^n) = 0$ for every key.

## Sketch

The AM game for $f_A$ and the PRF game for $(\KeyGen, \Eval)$ are the same game, so the reduction is the identity.

## Notes

`class: fully-black-box`: Degenerate: the construction is the identity on the AM family, and the reduction passes any PRF distinguisher through verbatim as an AM distinguisher (chosen-input game to chosen-input game, random-input game to weak-PRF game).
