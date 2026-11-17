---
type: reduction
status: draft
title: "DS for arbitrary-length messages ⇒ DS"
aliases: []
id: red-ds-arbitrary-length-to-ds
kind: implication
hypotheses: [ds-arbitrary-length]
conclusion: ds
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on schemes, and the reduction forwards any forger unchanged."
---

# DS for arbitrary-length messages ⇒ DS

## Statement

A [[digital-signature#arbitrary-length-messages|signature scheme for arbitrary-length messages]] is a [[digital-signature|digital signature]] scheme, with the same [[digital-signature#existential-unforgeability|EUF-CMA]] advantage for every forger — folklore.
