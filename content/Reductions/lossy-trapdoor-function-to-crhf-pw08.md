---
type: reduction
status: draft
title: Lossy TDF ⇒ CRHF
aliases: []
id: red-lossy-trapdoor-function-to-crhf-pw08
kind: implication
hypotheses: [lossy-trapdoor-function]
conclusion: crhf
class: fully-black-box
model: standard
source:
  - "[[PW08 - Lossy trapdoor functions and their applications|PW08]]"
security-loss: "additive: a collision finder with success ε distinguishes the modes with advantage about ε − 2^{2(n−k)−ℓ}"
rationale:
  class: "The hash composes the lossy function, used only as an oracle, with a universal hash, and the reduction distinguishes the modes by running any collision finder once as an oracle."
---

# Lossy TDF ⇒ CRHF

## Statement

[[trapdoor-permutation#lossy-trapdoor-functions|Lossy trapdoor functions]] with sufficient lossiness yield [[hash-function#collision-resistance|collision-resistant hash functions]] — [[PW08 - Lossy trapdoor functions and their applications|PW08]].

## Notes

- The hash is $H(x) := h(f_s(x))$ for a function index $s$ and $h$ from a universal family with $\ell < n$ output bits. For a lossy index, $h$ is injective on the at most $2^{n-k}$ images of $f_s$ except with probability about $2^{2(n-k)-\ell}$, so every collision of $H$ is a collision of $f_s$, which an injective index never has; a collision finder therefore distinguishes the modes, which needs lossiness $k > n/2$ — [[PW08 - Lossy trapdoor functions and their applications|PW08]].
