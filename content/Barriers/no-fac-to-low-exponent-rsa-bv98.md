---
type: barrier
status: draft
title: "No straight-line reduction from FAC to low-exponent RSA"
aliases: []
id: bar-fac-to-low-exponent-rsa-bv98
hypotheses: [fac]
conclusion: low-exponent-rsa
class: unstated
consequences:
  - kind: contradiction
    target: ""
    class: unstated
strength: conditional
conditional-on: [fac]
source:
  - "[[BV98 - Breaking RSA May Not Be Equivalent to Factoring|BV98]]"
rationale:
  class: "BV98 rule out straight-line reductions, which compute on the modulus and the oracle's answers only by ring operations and make a logarithmic number of oracle queries, and the vocabulary has no algebraic or query-bounded class."
---

# No straight-line reduction from FAC to low-exponent RSA

## Statement

If [[factoring|factoring]] is hard, there is no efficient straight-line reduction that factors $n$ while making a logarithmic number of queries to an oracle breaking [[rsa-assumption#low-exponent-rsa|low-exponent RSA]]: any such reduction, which computes on $n$ and on the oracle's answers only by ring operations modulo $n$, converts into an efficient factoring algorithm that makes no oracle queries — [[BV98 - Breaking RSA May Not Be Equivalent to Factoring|BV98]]. Reductions that use the bit representation of the oracle's answers, or make more queries, are not covered.

## Notes

- Against generic ring algorithms, which access $\ZZ_n$ only through ring operations and equality tests, breaking RSA is equivalent to factoring — [[AM09 - Breaking RSA Generically Is Equivalent to Factoring|AM09]], [[DLO24 - Breaking RSA Generically Is Equivalent to Factoring, with Preprocessing|DLO24]]. That result restricts the RSA algorithm rather than the reduction and does not get around this barrier.
