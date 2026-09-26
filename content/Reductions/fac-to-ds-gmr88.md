---
type: reduction
status: draft
title: "FAC ⇒ DS"
aliases: []
id: red-fac-to-ds-gmr88
kind: implication
hypotheses: [fac]
conclusion: ds
class: fully-black-box
model: standard
source:
  - "[[GMR88 - A Digital Signature Scheme Secure Against Adaptive Chosen-Message Attacks|GMR88]]"
security-loss: ""
---

# FAC ⇒ DS

[[factoring|FAC]] implies [[digital-signature|DS]].

## Statement

If [[factoring|FAC]] is hard then an EUF-CMA-secure [[digital-signature|DS]] scheme exists: GMR build a stateful EUF-CMA-secure scheme from any claw-free pair of trapdoor permutations and instantiate claw-free pairs from factoring — [[GMR88 - A Digital Signature Scheme Secure Against Adaptive Chosen-Message Attacks|GMR88]].

## Sketch

Signing authenticates the message and the path to a fresh leaf of an authentication tree with inverses of the claw-free pair $(f_0, f_1)$; the reduction turns any forgery into a claw $(x_0, x_1)$ with $f_0(x_0) = f_1(x_1)$, which for the factoring-based pair (squaring modulo $N$) reveals a nontrivial square root of $1$ modulo $N$, hence the factorization of $N$.

## Notes

`class: fully-black-box`: one fixed (stateful, tree-based) construction, generic over claw-free trapdoor permutation pairs, uses the pair only as an oracle; one fixed reduction runs any forger as an oracle and converts its forgery into a claw, which for the factoring-based pair yields the factorization of the challenge modulus. RTV04 fully-black-box shape.
