---
type: reduction
status: draft
title: Quasi-polynomially hard LWE ⇒ LWE with polynomial ratio
aliases: []
id: red-quasi-polynomial-lwe-to-polynomial-ratio-lwe
kind: implication
hypotheses: [quasi-polynomial-lwe]
conclusion: polynomial-ratio-lwe
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the LWE distribution, and the reduction forwards any distinguisher unchanged."
---

# Quasi-polynomially hard LWE ⇒ LWE with polynomial ratio

## Statement

[[learning-with-errors#quasi-polynomially-hard-lwe|Quasi-polynomially hard LWE]] implies [[learning-with-errors#lwe-with-polynomial-modulus-to-noise-ratio|LWE with polynomial modulus-to-noise ratio]] with the same parameters: an adversary of size $n^k$ has size at most $2^{(\log n)^2}$ for all large $n$, so its advantage is at most $2^{-(\log n)^2}$, which is negligible — folklore.
