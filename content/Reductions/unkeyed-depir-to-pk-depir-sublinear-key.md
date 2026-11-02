---
type: reduction
status: draft
title: "Unkeyed DEPIR ⇒ PK-DEPIR with a sublinear key"
aliases: []
id: red-unkeyed-depir-to-pk-depir-sublinear-key
kind: implication
hypotheses: [unkeyed-depir]
conclusion: pk-depir-sublinear-key
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity, and any public-key privacy adversary runs unchanged, as an oracle, as an unkeyed privacy adversary."
---

# Unkeyed DEPIR ⇒ PK-DEPIR with a sublinear key

## Statement

Every [[doubly-efficient-pir#unkeyed-depir|unkeyed DEPIR]] scheme is, unchanged, a [[doubly-efficient-pir#pk-depir-with-a-sublinear-key|public-key DEPIR scheme with a sublinear key]]: its $\Setup$ outputs $k = \bot$, of length $0 = o(n)$, and with $k = \bot$ the public-key privacy game is the unkeyed one — folklore.
