---
type: reduction
status: draft
title: "Katz–Wang signatures ⇒ DS"
aliases: []
id: red-katz-wang-signature-to-ds
kind: implication
hypotheses: [katz-wang-signature]
conclusion: ds
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on schemes, and the reduction forwards any forger unchanged."
---

# Katz–Wang signatures ⇒ DS

## Statement

The [[digital-signature#katz-wang-signatures|Katz–Wang signature]] scheme is a [[digital-signature|digital signature]] scheme, with the same [[digital-signature#existential-unforgeability|EUF-CMA]] advantage for every forger — folklore.
