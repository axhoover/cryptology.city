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

An [[homomorphic-encryption#additively-homomorphic-encryption|additively homomorphic encryption]] scheme is a [[homomorphic-encryption|homomorphic encryption]] scheme for the class of sums of $k$ of its messages, for every $k$, with the same IND-CPA advantage: $\Eval$ on a sum of $k$ messages applies the binary $\Eval$ $k - 1$ times, and since $\calC_\pk$ contains every encryption and is closed under the binary $\Eval$, each intermediate ciphertext lies in $\calC_\pk$, decrypts to the partial sum by perfect correctness, and has the fixed length $\ell(\secpar)$ — folklore.
