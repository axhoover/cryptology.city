---
type: reduction
status: draft
title: "Schnorr signatures ⇒ DS"
aliases: []
id: red-schnorr-signature-to-ds
kind: implication
hypotheses: [schnorr-signature]
conclusion: ds
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on schemes, and the reduction forwards any forger unchanged."
---

# Schnorr signatures ⇒ DS

## Statement

The [[digital-signature#schnorr-signatures|Schnorr signature]] scheme is a [[digital-signature|digital signature]] scheme, with the same [[digital-signature#existential-unforgeability|EUF-CMA]] advantage for every forger — folklore.
