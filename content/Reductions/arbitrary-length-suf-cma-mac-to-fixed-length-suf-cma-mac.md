---
type: reduction
status: draft
title: "Arbitrary-length SUF-CMA MAC ⇒ fixed-length SUF-CMA MAC"
aliases: []
id: red-arbitrary-length-suf-cma-mac-to-fixed-length-suf-cma-mac
kind: implication
hypotheses: [arbitrary-length-suf-cma-mac]
conclusion: fixed-length-suf-cma-mac
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the scheme for every message length, and the reduction forwards any forger unchanged."
---

# Arbitrary-length SUF-CMA MAC ⇒ fixed-length SUF-CMA MAC

## Statement

Let $\MAC = (\KeyGen, \Tag, \Vrfy)$ be a [[message-authentication-code#strongly-unforgeable-macs-for-arbitrary-length-messages|strongly unforgeable MAC for arbitrary-length messages]]. For every length function $n$ with $1 \le n(\secpar) \le \poly(\secpar)$, computable from $1^\secpar$ in polynomial time, $\MAC$ itself is a [strongly unforgeable MAC for messages of length $n$](message-authentication-code#strongly-unforgeable-macs-for-fixed-length-messages): its message space $\bits^*$ contains $\bits^{n(\secpar)}$ for every $\secpar$, $\Tag$ and $\Vrfy$ run in time polynomial in $\secpar$ on such messages since $n(\secpar) \le \poly(\secpar)$, its correctness bound holds for every $m \in \bits^*$, and its [[message-authentication-code#strong-unforgeability|SUF-CMA]] game, played with the same algorithms and message space, gives every forger the same advantage — folklore.
