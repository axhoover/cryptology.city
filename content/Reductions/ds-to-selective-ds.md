---
type: reduction
status: draft
title: "DS ⇒ Selectively unforgeable DS"
aliases: []
id: red-ds-to-selective-ds
kind: implication
hypotheses: [ds]
conclusion: selective-ds
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on schemes, and the reduction runs any selective forger unchanged as an EUF-CMA forger."
---

# DS ⇒ Selectively unforgeable DS

## Statement

Every [[digital-signature#existential-unforgeability|EUF-CMA-unforgeable]] [[digital-signature|signature scheme]] is [[digital-signature#selective-unforgeability|selectively unforgeable]], with the same advantage for every forger — folklore.

## Sketch

An EUF-CMA forger runs the selective forger, which fixes its target message $m^*$ before receiving $\vk$, forwards its signing queries, none of which is $m^*$, and outputs $m^*$ with the forger's signature.
