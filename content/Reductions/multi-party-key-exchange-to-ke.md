---
type: reduction
status: draft
title: "Multi-party key exchange ⇒ KE"
aliases: []
id: red-multi-party-key-exchange-to-ke
kind: implication
hypotheses: [multi-party-key-exchange]
conclusion: ke
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the protocol for n = 2, and the reduction forwards the eavesdropper unchanged."
---

# Multi-party key exchange ⇒ KE

## Statement

If $\Pi = (\mathsf{KE}_1, \mathsf{KE}_2)$ is a [[key-exchange#multi-party-key-exchange|multi-party key exchange]] for $n = 2$, then $(\mathsf{KE}_A, \mathsf{KE}_B) := (\mathsf{KE}_1, \mathsf{KE}_2)$ is a two-party [[key-exchange|key exchange]]: a broadcast channel between two parties is a public, authenticated channel, agreement of $k_1$ and $k_2$ is the correctness of the two-party protocol, and the multi-party game with $K_0 = k_1$ is the two-party game with $k_A = k_1$ — folklore.
