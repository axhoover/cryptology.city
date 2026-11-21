---
type: reference
status: stub
title: "GHKL08"
source: https://eprint.iacr.org/2008/303
authors: S. Dov Gordon, Carmit Hazay, Jonathan Katz, Yehuda Lindell
venue: STOC 2008
published: 2008
aliases:
  - GHKL08
cryptobib_key: STOC:GHKL08
---

# [GHKL08] Complete Fairness in Secure Two-Party Computation

**Authors:** S. Dov Gordon, Carmit Hazay, Jonathan Katz, Yehuda Lindell | **Venue:** STOC 2008 | [Source](https://eprint.iacr.org/2008/303)

## Abstract

In the setting of secure two-party computation, two mutually distrusting parties wish to compute some function of their inputs while preserving, to the extent possible, security properties such as privacy, correctness, and more. One desirable property is fairness which guarantees, informally, that if one party receives its output, then the other party does too. Cleve (STOC 1986) showed that complete fairness cannot be achieved, in general, without an honest majority. Since then, the accepted folklore has been that nothing non-trivial can be computed with complete fairness in the two-party setting, and the problem has been treated as closed since the late '80s.

In this paper, we demonstrate that this folklore belief is false by showing completely-fair protocols for various non-trivial functions in the two-party setting based on standard cryptographic assumptions. We first show feasibility of obtaining complete fairness when computing any function over polynomial-size domains that does not contain an “embedded XOR”; this class of functions includes boolean AND/OR as
well as Yao's “millionaires' problem”. We also demonstrate feasibility for certain functions that do contain an embedded XOR, and prove a lower bound showing that any completely-fair protocol for such functions must have round complexity super-logarithmic in the security parameter. Our results demonstrate that the question of completely-fair secure computation without an honest majority is far from closed.
