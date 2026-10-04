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

## Statement

The decision version of [[discrete-logarithm|DLOG]], which given $(\GG, g, p, X, t)$ asks whether the $x \in [p]$ with $g^x = X$ satisfies $x \le t$, is in [[co-nondeterministic-polynomial-time|coNP]] — folklore.

## Sketch

A no-instance is certified by $x$ itself: $g^x = X$ and $x > t$ are checkable in polynomial time, and $x$ is unique once the order $p$ of $g$ is certified by its prime factorization with primality certificates.
