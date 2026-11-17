---
type: reduction
status: draft
title: "Threshold signature ⇒ Honest-majority threshold signature"
aliases: []
id: red-threshold-signature-to-honest-majority-threshold-signature
kind: implication
hypotheses: [threshold-signature]
conclusion: honest-majority-threshold-signature
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "Identity map: a scheme secure for every pair 1 ≤ t < n is secure for the pairs with n ≥ 2t+1, and the reduction forwards any forger unchanged."
---

# Threshold signature ⇒ Honest-majority threshold signature

## Statement

A [[threshold-signature|threshold signature scheme]], perfectly correct and unforgeable against static corruption of $t$ parties for all polynomials $n$ and $t$ with $1 \le t < n$, is an [honest-majority threshold signature scheme ($t < n/2$)](threshold-signature#honest-majority-t--n2), which asks the same for the polynomials with $1 \le t$ and $n \ge 2t+1$, with the same advantage for every forger — folklore.
