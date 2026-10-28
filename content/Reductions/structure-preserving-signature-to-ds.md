---
type: reduction
status: draft
title: "Structure-preserving signatures ⇒ DS"
aliases: []
id: red-structure-preserving-signature-to-ds
kind: implication
hypotheses: [structure-preserving-signature]
conclusion: ds
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on schemes, and the reduction forwards any forger unchanged."
---

# Structure-preserving signatures ⇒ DS

## Statement

A [[digital-signature#structure-preserving-signatures|structure-preserving signature]] scheme is a [[digital-signature|digital signature]] scheme, with the same [[digital-signature#existential-unforgeability|EUF-CMA]] advantage for every forger — folklore.
