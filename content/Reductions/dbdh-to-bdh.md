---
type: reduction
status: draft
title: DBDH ⇒ BDH
aliases: []
id: red-dbdh-to-bdh
kind: implication
hypotheses: [dbdh]
conclusion: bdh
class: fully-black-box
model: standard
source: folklore
security-loss: "none: a BDH solver with success ε gives a DBDH distinguisher with advantage ε − 1/q"
rationale:
  class: "The reduction runs any BDH solver once as an oracle on the first four elements of its DBDH tuple and compares the answer with the fifth."
---

# DBDH ⇒ BDH

## Statement

If [[bilinear-map-assumptions#decisional-bdh|decisional BDH]] holds in a pairing group, then [[bilinear-map-assumptions|computational BDH]] holds in it: a solver that computes $e(g,g)^{abc}$ from $(g, g^a, g^b, g^c)$ distinguishes the DBDH tuple by comparing its output with the fifth element — folklore.
