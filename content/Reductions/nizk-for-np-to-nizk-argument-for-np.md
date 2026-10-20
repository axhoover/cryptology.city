---
type: reduction
status: draft
title: "NIZK proof for NP ⇒ NIZK argument for NP"
aliases: []
id: red-nizk-for-np-to-nizk-argument-for-np
kind: implication
hypotheses: [nizk-for-np]
conclusion: nizk-argument-for-np
class: fully-black-box
model: crs
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the proof system, and the reductions forward any adversary unchanged."
  model: "Both nodes are proof systems with a common reference string."
---

# NIZK proof for NP ⇒ NIZK argument for NP

## Statement

A [[non-interactive-zero-knowledge#nizk-for-np|NIZK proof system for NP]] is a [[non-interactive-zero-knowledge#nizk-arguments-for-np|NIZK argument for NP]]: soundness against unbounded provers holds in particular against efficient ones — folklore.
