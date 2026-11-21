---
type: reduction
status: draft
title: "MuSig2 ⇒ Multi-signature"
aliases: []
id: red-musig2-to-multi-signature
kind: implication
hypotheses: [musig2]
conclusion: multi-signature
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on schemes, and the reduction forwards any forger unchanged."
---

# MuSig2 ⇒ Multi-signature

## Statement

[[multi-signature#musig2|MuSig2]] is a [[multi-signature]] scheme. It is perfectly correct, since $g^s = g^{\sum_i \sum_j r_{i,j} b^{j-1} + c\sum_i a_i x_i} = \prod_j R_j^{b^{j-1}} \cdot \tilde X^c = R\tilde X^c$ — standard — and every forger has the same advantage in $\Game^{\text{ms-uf}}$ — folklore.
