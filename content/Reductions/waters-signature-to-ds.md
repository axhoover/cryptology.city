---
type: reduction
status: draft
title: "Waters signatures ⇒ DS"
aliases: []
id: red-waters-signature-to-ds
kind: implication
hypotheses: [waters-signature]
conclusion: ds
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on schemes, and the reduction forwards any forger unchanged."
---

# Waters signatures ⇒ DS

## Statement

The [[digital-signature#waters-signatures|Waters signature]] scheme is a [[digital-signature|digital signature]] scheme, with the same [[digital-signature#existential-unforgeability|EUF-CMA]] advantage for every forger — folklore.
