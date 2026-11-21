---
type: reduction
status: draft
title: "Adaptively zero-knowledge NIZK for NP ⇒ NIZK for NP"
aliases: []
id: red-adaptive-zk-nizk-for-np-to-nizk-for-np
kind: implication
hypotheses: [adaptive-zk-nizk-for-np]
conclusion: nizk-for-np
class: fully-black-box
model: crs
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the proof system, and the reduction runs any zero-knowledge distinguisher for a fixed statement unchanged as an adaptive adversary that ignores the reference string."
  model: "Both nodes are proof systems with a common reference string."
---

# Adaptively zero-knowledge NIZK for NP ⇒ NIZK for NP

## Statement

An [[non-interactive-zero-knowledge#adaptively-zero-knowledge-nizk-for-np|adaptively zero-knowledge NIZK proof system for NP]] is a [[non-interactive-zero-knowledge#nizk-for-np|NIZK proof system for NP]] with the same simulator: completeness and soundness are unchanged, and zero knowledge for a statement and witness fixed before $\crs$ is the case of an adaptive adversary that outputs them without reading $\crs$ — folklore.
