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

The [[alternating-moduli|alternating moduli assumption]] asserts that the family $f_A(x) = B\,(Ax \bmod 2) \bmod 3$, with secret key $A \getsr \ZZ_2^{m \times n}$ and public $B \getsr \ZZ_3^{\ell \times m}$, is indistinguishable from a random function; the family is then itself a [[pseudorandom-function|PRF]] with $\KeyGen$ sampling $A$ and $\Eval(A, x) = f_A(x)$, by the identity reduction. BIP+18 conjecture this only for uniformly random inputs, i.e. the [[alternating-moduli#weak-alternating-moduli-random-input-assumption|weak variant]], under which the family is a weak PRF; the [[alternating-moduli#strong-alternating-moduli-chosen-input-assumption|chosen-input variant]] fails for this map, since $f_A(0^n) = 0$ for every key — [[BIP+18 - Exploring Crypto Dark Matter New Simple PRF Candidates and Their Applications|BIP+18]].

## Sketch

$\KeyGen(1^\secpar)$ samples $A \getsr \ZZ_2^{m \times n}$; $\Eval(A, x) = B\,(Ax \bmod 2) \bmod 3$. The AM game and the PRF game for this family are the same game, so the reduction is the identity.

## Notes

`class: fully-black-box`: Degenerate but well-defined: the assumption asserts pseudorandomness of a concrete family and the PRF is that family — $\KeyGen$ samples $A$ and $\Eval(A, x) = B\,(Ax \bmod 2) \bmod 3$. The construction is the identity and any PRF distinguisher is verbatim an AM distinguisher (chosen-input game to chosen-input game, random-input game to weak-PRF game), so construction and reduction are fixed and treat their objects as oracles.
