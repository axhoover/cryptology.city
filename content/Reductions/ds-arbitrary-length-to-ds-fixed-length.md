---
type: reduction
status: draft
title: "DS for arbitrary-length messages ⇒ DS for fixed-length messages"
aliases: []
id: red-ds-arbitrary-length-to-ds-fixed-length
kind: implication
hypotheses: [ds-arbitrary-length]
conclusion: ds-fixed-length
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the scheme for every message length, and the reduction forwards any forger unchanged."
---

# DS for arbitrary-length messages ⇒ DS for fixed-length messages

## Statement

Let $\DS = (\KeyGen, \Sign, \Vrfy)$ be a [[digital-signature#arbitrary-length-messages|signature scheme for arbitrary-length messages]]. For every length function $n$ with $1 \le n(\secpar) \le \poly(\secpar)$, computable from $1^\secpar$ in polynomial time, $\DS$ itself is a [signature scheme for messages of length $n$](digital-signature#fixed-length-messages): its message space $\bits^*$ contains $\bits^{n(\secpar)}$ for every key, $\Sign$ and $\Vrfy$ run in time polynomial in $\secpar$ and $n(\secpar)$ on such messages, and its correctness and [[digital-signature#existential-unforgeability|EUF-CMA]] advantage are unchanged for every forger — folklore.
