---
type: reduction
status: draft
title: "Additively homomorphic encryption ⇒ HE"
aliases: []
id: red-additively-homomorphic-encryption-to-he
kind: implication
hypotheses: [additively-homomorphic-encryption]
conclusion: he
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction iterates the scheme's binary Eval, and the reduction forwards any IND-CPA adversary unchanged."
---

# Additively homomorphic encryption ⇒ HE

## Statement

An [[homomorphic-encryption#additively-homomorphic-encryption|additively homomorphic encryption]] scheme is a [[homomorphic-encryption|homomorphic encryption]] scheme for the class of sums of $k$ of its messages, for every $k$, with the same IND-CPA advantage — folklore.

## Sketch

$\Eval$ on a sum of $k$ messages applies the binary $\Eval$ $k - 1$ times. Each of the $k$ encryptions lies in $\calC_\pk$ and decrypts to its message by perfect correctness; $\calC_\pk$ is closed under the binary $\Eval$ and the homomorphism holds on all of it, so each intermediate ciphertext lies in $\calC_\pk$, has length $\ell(\secpar)$ and decrypts to the partial sum. Since $M \ge 2$, the sum of $k$ messages depends on all $k$ of them.
