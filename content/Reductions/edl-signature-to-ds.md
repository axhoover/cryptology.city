---
type: reduction
status: draft
title: "EDL signatures ⇒ DS"
aliases: []
id: red-edl-signature-to-ds
kind: implication
hypotheses: [edl-signature]
conclusion: ds
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on schemes, and the reduction forwards any forger unchanged."
---

# EDL signatures ⇒ DS

## Statement

The [[digital-signature#edl-signatures|EDL signature]] scheme is a [[digital-signature|digital signature]] scheme, with the same [[digital-signature#existential-unforgeability|EUF-CMA]] advantage for every forger — folklore.
