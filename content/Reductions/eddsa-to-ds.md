---
type: reduction
status: draft
title: "EdDSA ⇒ DS"
aliases: []
id: red-eddsa-to-ds
kind: implication
hypotheses: [eddsa]
conclusion: ds
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on schemes, and the reduction forwards any forger unchanged."
---

# EdDSA ⇒ DS

## Statement

[[digital-signature#eddsa|EdDSA]] is a [[digital-signature|digital signature]] scheme, with the same [[digital-signature#existential-unforgeability|EUF-CMA]] advantage for every forger — folklore.
