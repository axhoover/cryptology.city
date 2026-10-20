---
type: reduction
status: draft
title: Polynomial-factor GapSVP ⇒ LWE (polynomial modulus)
aliases: []
id: red-gapsvp-poly-factor-to-lwe-blprs13
kind: implication
hypotheses: [gapsvp-poly-factor]
conclusion: lwe
class: fully-black-box
model: standard
source:
  - "[[BLPRS13 - Classical Hardness of Learning with Errors|BLPRS13]]"
security-loss: "polynomial"
rationale:
  class: "The classical worst-case algorithm calls an arbitrary average-case LWE solver only as an oracle, for every solver with noticeable success probability."
---

# Polynomial-factor GapSVP ⇒ LWE (polynomial modulus)

## Statement

There is a classical polynomial-time reduction from worst-case GapSVP within a polynomial factor on lattices of dimension $\Theta(\sqrt{n})$ to [[learning-with-errors|LWE]] in dimension $n$ with modulus $q = \poly(n)$ — [[BLPRS13 - Classical Hardness of Learning with Errors|BLPRS13]]. Hence if [[shortest-vector-problem#polynomial-factors|GapSVP is hard for polynomial factors]], LWE with polynomial modulus is hard, the GapSVP dimension being the square root of the LWE dimension.

## Notes

- The proof composes the exponential-modulus classical reduction of [[gapsvp-poly-factor-to-lwe-pei09|Pei09]] with a modulus–dimension switching reduction, which reduces LWE in dimension $k$ with modulus exponential in $k$ to LWE in dimension $k^2$ with modulus polynomial in $k$ — [[BLPRS13 - Classical Hardness of Learning with Errors|BLPRS13]].
- Regev's quantum reduction reaches polynomial modulus without the dimension loss ([[gapsvp-to-lwe-reg05|GapSVP ⇒ LWE]]) — [[Reg05 - On Lattices, Learning with Errors, Random Linear Codes, and Cryptography|Reg05]].
