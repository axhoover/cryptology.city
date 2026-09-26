---
type: reduction
status: draft
title: "OT ⇒ COM"
aliases: []
id: red-ot-to-com
kind: implication
hypotheses: [ot]
conclusion: com
class: fully-black-box
model: standard
source:
  - "[[Kil88 - Founding cryptography on oblivious transfer|Kil88]]"
security-loss: ""
---

# OT ⇒ COM

[[oblivious-transfer|OT]] implies [[commitment-scheme|COM]].

## Statement

[[oblivious-transfer|OT]] implies [[commitment-scheme|COM]] with no further assumption: in the OT-hybrid model there is a bit commitment that is statistically hiding and statistically binding, the first step of Kilian's proof that OT is complete for secure computation — [[Kil88 - Founding cryptography on oblivious transfer|Kil88]].

## Notes

`class: fully-black-box`: the construction invokes OT only as an ideal functionality, and hiding and binding hold statistically in the OT-hybrid model. Against a real OT protocol, the reduction runs any adversary against the composed commitment as an oracle to distinguish real from ideal OT.
