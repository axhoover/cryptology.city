---
type: reduction
status: draft
title: "Post-quantum DS ⇒ DS"
aliases: []
id: red-post-quantum-ds-to-ds
kind: implication
hypotheses: [post-quantum-ds]
conclusion: ds
class: fully-black-box
model: quantum
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the scheme, and the reduction forwards any PPT forger unchanged as an efficient quantum forger making classical queries."
  model: "The hypothesis is security against quantum forgers."
---

# Post-quantum DS ⇒ DS

## Statement

A [[digital-signature#security-against-quantum-adversaries|signature scheme that is EUF-CMA unforgeable against efficient quantum forgers making classical signing queries]] is [[digital-signature#existential-unforgeability|EUF-CMA unforgeable]], with the same advantage for every forger: a $\PPT$ forger is an efficient quantum forger whose queries are classical — folklore.
