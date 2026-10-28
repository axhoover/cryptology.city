---
type: reduction
status: draft
title: "BLS signatures ⇒ DS"
aliases: []
id: red-boneh-lynn-shacham-signature-to-ds
kind: implication
hypotheses: [boneh-lynn-shacham-signature]
conclusion: ds
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on schemes, and the reduction forwards any forger unchanged."
---

# BLS signatures ⇒ DS

## Statement

The [[digital-signature#bls-signatures|BLS signature]] scheme is a [[digital-signature|digital signature]] scheme, with the same [[digital-signature#existential-unforgeability|EUF-CMA]] advantage for every forger — folklore.
