---
type: reduction
status: draft
title: "CLR-PKE ⇒ LR-PKE"
aliases: []
id: red-continual-leakage-resilient-pke-to-leakage-resilient-pke
kind: implication
hypotheses: [continual-leakage-resilient-pke]
conclusion: leakage-resilient-pke
class: fully-black-box
model: standard
source: folklore
security-loss: "tight: the adversary and its advantage are unchanged"
rationale:
  class: "The construction drops the update algorithm and keeps the other algorithms, and the fixed reduction runs any bounded-leakage adversary unchanged as a continual-leakage adversary that triggers no update."
---

# CLR-PKE ⇒ LR-PKE

## Statement

If $(\KeyGen, \Enc, \Dec, \mathsf{Update})$ is resilient to [[leakage-resilient-public-key-encryption#continual-memory-leakage|continual memory leakage]] of $\ell$ bits per period, then $(\KeyGen, \Enc, \Dec)$ is [$\ell$-leakage-resilient](leakage-resilient-public-key-encryption#leakage-resilient-cpa-security): an adversary in the bounded-leakage game is an adversary in the continual-leakage game that triggers no update, so all of its leakage falls in the first period — folklore.
