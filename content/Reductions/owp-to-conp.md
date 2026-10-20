---
type: reduction
status: draft
title: "OWP inversion ∈ NP ∩ coNP"
aliases: []
id: red-owp-to-conp
kind: inclusion
hypotheses: [owp]
conclusion: conp
class: free
model: standard
source: folklore
security-loss: ""
---

# OWP inversion ∈ NP ∩ coNP

## Statement

Inverting a [[one-way-permutation|one-way permutation]] is a problem in [[nondeterministic-polynomial-time|NP]] $\cap$ [[co-nondeterministic-polynomial-time|coNP]]: for every polynomial-time computable $f$ that permutes each $\bits^n$, the language $\{(y, i) : 1 \le i \le |y| \text{ and the } i\text{-th bit of } f^{-1}(y) \text{ is } 1\}$ is in $\classNP \cap \classcoNP$ — folklore.

## Sketch

Every $y$ has exactly one preimage $x$, and $x$ certifies membership when $x_i = 1$ and non-membership when $x_i = 0$; the condition $1 \le i \le |y|$ is checked directly.

## Notes

- With error amplification, a $\classBPP$ algorithm for the language inverts $f$ on every $y$ bit by bit, so one-way permutations exist only if $\classNP \cap \classcoNP \not\subseteq \classBPP$ — folklore.
- A deterministic polynomial-time reduction from an $\classNP$-complete language to this one gives $\classNP = \classcoNP$ ([[no-np-to-owp-bra79b|No deterministic reduction from NP to OWP]]) — [[Bra79b - A note on the complexity of cryptography|Bra79b]].
