---
type: reduction
status: draft
title: "DS for fixed-length messages ⇒ DS"
aliases: []
id: red-ds-fixed-length-to-ds
kind: implication
hypotheses: [ds-fixed-length]
conclusion: ds
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the scheme for one-bit messages, and the reduction forwards any forger unchanged."
---

# DS for fixed-length messages ⇒ DS

## Statement

Let $\DS$ be the [signature scheme for messages of length $n$](digital-signature#fixed-length-messages) for $n(\secpar) := 1$. Its message space contains $\bits$ for every $\secpar$ and every key, and the two messages $0 \ne 1$ are output on input $1^\secpar$ by an efficient algorithm, so its message space is non-trivial and $\DS$ is a $(1-\negl(\secpar))$-correct, [[digital-signature#existential-unforgeability|EUF-CMA-unforgeable]] [[digital-signature|signature scheme]], with the same advantage for every forger — folklore.
