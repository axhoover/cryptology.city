---
type: reduction
status: draft
title: "Post-quantum DS ⇒ Nonadaptive post-quantum DS"
aliases: []
id: red-post-quantum-ds-to-nonadaptive-post-quantum-ds
kind: implication
hypotheses: [post-quantum-ds]
conclusion: nonadaptive-post-quantum-ds
class: fully-black-box
model: quantum
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the scheme, and the reduction forwards any nonadaptive quantum forger unchanged as an adaptive one that submits its list of messages as its queries."
  model: "Both notions are security against quantum forgers."
---

# Post-quantum DS ⇒ Nonadaptive post-quantum DS

## Statement

A [[digital-signature#security-against-quantum-adversaries|signature scheme that is EUF-CMA unforgeable against efficient quantum forgers making classical signing queries]] is [[digital-signature#nonadaptive-queries|secure against nonadaptive quantum chosen-message attacks]], with the same advantage for every forger: a forger that submits one classical list of messages is an adaptive forger that makes all its queries at once — folklore.
