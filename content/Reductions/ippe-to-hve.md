---
type: reduction
status: draft
title: "IPPE ⇒ HVE"
aliases: []
id: red-ippe-to-hve
kind: implication
hypotheses: [ippe]
conclusion: hve
class: unstated
model: standard
source:
  - "[[KSW08 - Predicate Encryption Supporting Disjunctions Polynomial Equations and Inner Products|KSW08]]"
security-loss: ""
rationale:
  class: "KSW08 do not classify the reduction, and although the construction uses the IPPE scheme only as an oracle, a fully-black-box security reduction needs an extra hypothesis, a hidden key vector or selective HVE security, because an IPPE key may reveal the coefficients $r_i$."
---

# IPPE ⇒ HVE

## Statement

An attribute-hiding [[inner-product-predicate-encryption|IPPE]] scheme of dimension $2n$ over $\ZZ_p$ yields an [[hidden-vector-encryption|HVE]] scheme for patterns in $(\Sigma \cup \{*\})^n$ with $\Sigma \subseteq \ZZ_p$: a pattern $v$ with wildcard set $S$ and an attribute $x$ are encoded as vectors whose inner product is $\sum_{i \notin S} r_i (x_i - v_i)$ for uniformly random coefficients $r_i$, which vanishes when $v$ matches $x$ and otherwise with probability $1/p$. Attribute-hiding transfers whenever an HVE adversary's encoded queries stay admissible in the IPPE game, that is, unless it finds a non-matching attribute whose encoded inner product vanishes — [[KSW08 - Predicate Encryption Supporting Disjunctions Polynomial Equations and Inner Products|KSW08]].

## Sketch

Encode $x$ as $(x_1, 1, \ldots, x_n, 1)$ and $v$ as $(r_1, -r_1 v_1, \ldots, r_n, -r_n v_n)$ with $r_i = 0$ for $i \in S$ and $r_i \getsr \ZZ_p$ otherwise, sampled at key generation; $\Setup$, $\KeyGen$, $\Enc$, $\Dec$ of the HVE scheme call the IPPE algorithms once each on the encoded vectors.

## Notes

- IPPE attribute-hiding constrains ciphertexts, not keys, so a scheme may reveal its key vectors (for instance, append them in the clear). An adaptive HVE adversary can then read off the $r_i$ and choose a non-matching challenge attribute with zero encoded inner product, trivially when $\Sigma = \ZZ_p$; such a challenge is admissible in the HVE game but not in the IPPE game. The transfer therefore needs an extra hypothesis: the encoded key vectors are hidden, or HVE security is selective — folklore.
