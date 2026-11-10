---
type: reduction
status: draft
title: Verifiable Type 1 pairing ⇒ Type 1 pairing
aliases: []
id: red-verifiable-type-1-pairing-to-type-1-pairing
kind: implication
hypotheses: [verifiable-type-1-pairing]
conclusion: type-1-pairing
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on group generators, and the reduction forwards any adversary unchanged."
---

# Verifiable Type 1 pairing ⇒ Type 1 pairing

## Statement

A [[pairings#verifiable-type-1-pairing|verifiable Type 1 pairing]], with the same generator, is a [[pairings#type-1|Type 1 pairing]], since verifiability only adds an algorithm that checks group descriptions — folklore.
