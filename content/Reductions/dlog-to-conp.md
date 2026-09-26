---
type: reduction
status: draft
title: "DLOG ⊆ coNP"
aliases: []
id: red-dlog-to-conp
kind: inclusion
hypotheses: [dlog]
conclusion: conp
class: free
model: standard
source: folklore
security-loss: ""
---

# DLOG ⊆ coNP

The decision version of [[discrete-logarithm|DLOG]] is in [[co-nondeterministic-polynomial-time|coNP]].

## Statement

The decision version of [[discrete-logarithm|DLOG]] — given $(\GG, g, p, X, t)$, decide whether the $x \in [p]$ with $g^x = X$ satisfies $x \le t$ — is in [[co-nondeterministic-polynomial-time|coNP]]: a no-instance is certified by $x$ itself, since $g^x = X$ and $x > t$ are checkable in polynomial time and $x$ is unique once the order $p$ of $g$ is certified by its prime factorization with primality certificates — folklore.

## Notes

`class: free`: Membership of a problem in a complexity class is proved by any argument at all; free is the repo convention for proven complexity containments.
