---
type: reduction
status: draft
title: "DLOG ⊆ NP"
aliases: []
id: red-dlog-to-np
kind: inclusion
hypotheses: [dlog]
conclusion: np
class: free
model: standard
source: folklore
security-loss: ""
---

# DLOG ⊆ NP

The decision version of [[discrete-logarithm|DLOG]] is contained in [[nondeterministic-polynomial-time|NP]].

## Statement

The decision version of [[discrete-logarithm|DLOG]] — given $(\GG, g, h, t)$, decide whether some $x \le t$ satisfies $g^x = h$ — is in [[nondeterministic-polynomial-time|NP]]: the exponent $x$ is a polynomial-size certificate, checked with one exponentiation — folklore.

## Notes

`class: free`: A containment between complexity classes is proved by any argument, so the reduction-class axis does not discriminate (repo convention for inclusions).

- Membership in $\classNP \cap \classcoNP$ additionally needs the group order and its factorization, certified by Pratt primality certificates, so that the discrete logarithm is unique and certifiable — folklore. The $\classcoNP$ side is [[dlog-to-conp]].
