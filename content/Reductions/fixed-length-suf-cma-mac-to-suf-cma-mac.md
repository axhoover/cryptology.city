---
type: reduction
status: draft
title: "Fixed-length SUF-CMA MAC ⇒ SUF-CMA MAC"
aliases: []
id: red-fixed-length-suf-cma-mac-to-suf-cma-mac
kind: implication
hypotheses: [fixed-length-suf-cma-mac]
conclusion: suf-cma-mac
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the scheme for messages of length λ, and the reduction forwards any forger unchanged."
---

# Fixed-length SUF-CMA MAC ⇒ SUF-CMA MAC

## Statement

Let $\MAC = (\KeyGen, \Tag, \Vrfy)$ be a [strongly unforgeable MAC for messages of length $n$](message-authentication-code#strongly-unforgeable-macs-for-fixed-length-messages) for $n(\secpar) := \secpar$. Its message space $\calM_\secpar$ contains $\bits^\secpar$, so $|\calM_\secpar| \ge 2^\secpar$ is superpolynomial in $\secpar$, and it contains $0^\secpar$, which an efficient algorithm outputs on input $1^\secpar$. It therefore meets the message-space condition of [[message-authentication-code#syntax|MAC syntax]], and $\MAC$ is a $(1-\negl(\secpar))$-correct, [[message-authentication-code#strong-unforgeability|SUF-CMA-secure]] [[message-authentication-code|MAC]], with the same advantage for every forger — folklore.

## Notes

- Any allowed length $n = \omega(\log \secpar)$ serves in place of $\secpar$. For $n(\secpar) = O(\log \secpar)$ the message space may have polynomially many messages, and the table MAC of [[message-authentication-code#syntax|MAC syntax]] is SUF-CMA-secure on $\bits^{n(\secpar)}$ unconditionally — standard.
