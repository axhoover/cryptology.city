---
type: reduction
status: draft
title: Commitment hiding for adversarial parameters ⇒ COM
aliases: []
id: red-adversarial-pp-hiding-commitment-to-com
kind: implication
hypotheses: [adversarial-pp-hiding-commitment]
conclusion: com
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the scheme, and the reductions forward any hiding or binding adversary unchanged."
---

# Commitment hiding for adversarial parameters ⇒ COM

## Statement

A commitment scheme [[commitment-scheme#hiding-for-adversarial-public-parameters|hiding for adversarial public parameters]] is in particular hiding for honestly sampled ones, so it is a [[commitment-scheme|commitment scheme]] — folklore.
