---
type: reduction
status: draft
title: "SUF-CMA MAC ⇒ MAC"
aliases: []
id: red-suf-cma-mac-to-mac
kind: implication
hypotheses: [suf-cma-mac]
conclusion: mac
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the scheme, and the reduction runs a UF-CMA forger unchanged in the SUF-CMA game."
---

# SUF-CMA MAC ⇒ MAC

## Statement

A [[message-authentication-code#unforgeability|UF-CMA]] forgery $(\hat m, \hat t)$ has $\hat m$ never queried, so $\calO$ never returned the pair $(\hat m, \hat t)$, and it wins the [SUF-CMA game](message-authentication-code#strong-unforgeability) with the same probability. A SUF-CMA-secure [[message-authentication-code|MAC]] is therefore UF-CMA-secure with no loss, and correctness is the same requirement — folklore.
