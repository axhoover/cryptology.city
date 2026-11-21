---
type: reduction
status: draft
title: "Statistically hiding COM ⇒ COM"
aliases: []
id: red-statistically-hiding-commitment-to-com
kind: implication
hypotheses: [statistically-hiding-commitment]
conclusion: com
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the scheme, and the reductions forward any hiding or binding adversary unchanged."
---

# Statistically hiding COM ⇒ COM

## Statement

A [[commitment-scheme#statistically-hiding-commitments|statistically hiding commitment]] is a [[commitment-scheme|commitment scheme]]: hiding against unbounded adversaries that choose $\pp$, or play the receiver in an interactive commit phase, implies computational hiding for $\pp \gets \Gen(1^\secpar)$ and an honest receiver, and correctness, the message space and computational binding are unchanged — folklore.
