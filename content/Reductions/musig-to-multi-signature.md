---
type: reduction
status: draft
title: "MuSig ⇒ Multi-signature"
aliases: []
id: red-musig-to-multi-signature
kind: implication
hypotheses: [musig]
conclusion: multi-signature
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on schemes, and the reduction forwards any forger unchanged."
---

# MuSig ⇒ Multi-signature

## Statement

[[multi-signature#musig|MuSig]] is a [[multi-signature]] scheme. It is perfectly correct, since $g^s = g^{\sum_i r_i + c\sum_i a_i x_i} = R\tilde X^c$ — standard — and every forger has the same advantage in $\Game^{\text{ms-uf}}$ — folklore.
