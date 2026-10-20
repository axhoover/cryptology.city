---
type: reduction
status: draft
title: "NIZK argument for NP ⇒ Non-adaptively sound NIZK argument for NP"
aliases: []
id: red-nizk-argument-for-np-to-nonadaptive-nizk-argument-for-np
kind: implication
hypotheses: [nizk-argument-for-np]
conclusion: nonadaptive-nizk-argument-for-np
class: fully-black-box
model: crs
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the proof system, and the reductions forward any adversary unchanged."
  model: "Both nodes are proof systems with a common reference string."
---

# NIZK argument for NP ⇒ Non-adaptively sound NIZK argument for NP

## Statement

A [[non-interactive-zero-knowledge#nizk-arguments-for-np|NIZK argument for NP]] is [[non-interactive-zero-knowledge#non-adaptively-sound-nizk-arguments-for-np|non-adaptively sound]]: a prover that fixes its false statement before seeing the reference string is a special adaptive prover — folklore.
