---
type: reduction
status: draft
title: "Multiplicatively homomorphic encryption ⇒ HE"
aliases: []
id: red-multiplicatively-homomorphic-encryption-to-he
kind: implication
hypotheses: [multiplicatively-homomorphic-encryption]
conclusion: he
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction iterates the scheme's binary Eval, and the reduction forwards any IND-CPA adversary unchanged."
---

# Multiplicatively homomorphic encryption ⇒ HE

## Statement

A [[homomorphic-encryption#multiplicatively-homomorphic-encryption|multiplicatively homomorphic encryption]] scheme is a [[homomorphic-encryption|homomorphic encryption]] scheme for the class of products of $k$ of its messages, for every $k$, with the same IND-CPA advantage: $\Eval$ on a product of $k$ messages applies the binary $\Eval$ $k - 1$ times, and since $\calC_\pk$ contains every encryption and is closed under the binary $\Eval$, each intermediate ciphertext lies in $\calC_\pk$, decrypts to the partial product by perfect correctness, and has the fixed length $\ell(\secpar)$ — folklore.
