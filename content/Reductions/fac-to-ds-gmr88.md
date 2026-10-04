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
rationale:
  class: "One fixed stateful tree-based construction, generic over claw-free trapdoor permutation pairs, uses the pair only as an oracle, and one fixed reduction runs any forger as an oracle and turns its forgery into a claw, which for the factoring-based pair factors the challenge modulus."
---

# FAC ⇒ DS

## Statement

If [[factoring|FAC]] is hard, an EUF-CMA-secure [[digital-signature|DS]] scheme exists: GMR build a stateful EUF-CMA-secure scheme from any claw-free pair of trapdoor permutations and instantiate claw-free pairs from factoring — [[GMR88 - A Digital Signature Scheme Secure Against Adaptive Chosen-Message Attacks|GMR88]].

## Sketch

Signing authenticates the message and the path to a fresh leaf of an authentication tree with inverses of the claw-free pair $(f_0, f_1)$. The reduction turns any forgery into a claw $(x_0, x_1)$ with $f_0(x_0) = f_1(x_1)$, which for the factoring-based pair, built from squaring modulo $N$, reveals a nontrivial square root of $1$ modulo $N$ and hence the factorization of $N$.
