---
type: reduction
status: draft
title: "OWF inversion ∈ NP"
aliases: []
id: red-owf-to-np
kind: inclusion
hypotheses: [owf]
conclusion: np
class: free
model: standard
source: folklore
security-loss: ""
---

# OWF inversion ∈ NP

## Statement

Inverting a [[hash-function#preimage-resistance-one-wayness|one-way function]] is a problem in [[nondeterministic-polynomial-time|NP]]: for every polynomial-time computable $f$, the language $\{(1^n, y, z) : \exists x \in \bits^n \text{ with prefix } z \text{ and } f(x) = y\}$ is in $\classNP$, with $x$ as certificate, and likewise for a keyed family with the key part of the instance — folklore. The inclusion places this inversion problem inside $\classNP$; it does not place $\classNP$ inside a class built from one-way functions, as [[hash-function-to-czk|OWF ⇒ CZK]] does with $\classNP \subseteq \classCZK$. With error amplification, a $\classBPP$ algorithm for the language inverts $f$ on every image by prefix search, so one-way functions exist only if $\classNP \not\subseteq \classBPP$, and one-way functions secure against non-uniform adversaries exist only if $\classNP \not\subseteq \classPpoly$ — folklore.
