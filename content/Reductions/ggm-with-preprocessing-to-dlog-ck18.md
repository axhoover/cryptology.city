---
type: reduction
status: draft
title: "GGM with preprocessing ⇒ DLOG"
aliases: []
id: red-ggm-with-preprocessing-to-dlog-ck18
kind: implication
hypotheses: [ggm-with-preprocessing]
conclusion: dlog
class: free
model: generic-group
source:
  - "[[CK18 - The Discrete-Logarithm Problem with Preprocessing|CK18]]"
security-loss: "success probability $\\varepsilon = \\tilde O(ST^2/N)$ for $S$ bits of advice and $T$ online queries"
rationale:
  class: "The hypothesis is a model of computation rather than a primitive, so no black-box class applies; CK18 bound every generic algorithm with preprocessing, which is the free class scoped by the model."
  model: "The bound holds only for generic algorithms with advice; nothing is claimed in the standard model."
---

# GGM with preprocessing ⇒ DLOG

## Statement

In the [[generic-group-model#preprocessing|generic group model with preprocessing]], let a generic [[discrete-logarithm|DLOG]] algorithm in a group of prime order $N$ get $S$ bits of advice from an unbounded preprocessing phase and make $T$ online group-oracle queries. If it succeeds with probability $\varepsilon$, then $ST^2 = \tilde\Omega(\varepsilon N)$, and the bound is tight up to logarithmic factors — [[CK18 - The Discrete-Logarithm Problem with Preprocessing|CK18]]. The same techniques give lower bounds for CDH, DDH and the multiple-discrete-logarithm problem — [[CK18 - The Discrete-Logarithm Problem with Preprocessing|CK18]].

## Notes

- Generic discrete-logarithm algorithms with precomputation that store $S = \tilde O(N^{1/3})$ bits and run online in time $T = \tilde O(N^{1/3})$, after a precomputation of about $N^{2/3}$ group operations, meet the bound at constant success probability — [[BL13a - Non-uniform Cracks in the Concrete The Power of Free Precomputation|BL13a]].
- CK18 also give new generic preprocessing attacks, on the multiple-discrete-logarithm problem and on distinguishing $(g, g^x, g^{x^2})$ from random, the latter far easier for generic preprocessing algorithms than DLOG — [[CK18 - The Discrete-Logarithm Problem with Preprocessing|CK18]].
