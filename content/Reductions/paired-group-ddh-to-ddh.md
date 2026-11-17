---
type: reduction
status: draft
title: Paired-group DDH ⇒ prime-order DDH
aliases: []
id: red-paired-group-ddh-to-ddh
kind: implication
hypotheses: [paired-group-ddh]
conclusion: prime-order-ddh
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction keeps the first group of the pair, and the reduction forwards any DDH distinguisher unchanged."
---

# Paired-group DDH ⇒ prime-order DDH

## Statement

If [[decisional-diffie-hellman#ddh-in-paired-groups|DDH is hard in paired groups]] for a paired group generator, then [[decisional-diffie-hellman#ddh-in-prime-order-groups|DDH is hard in prime-order groups]] for the group generator that runs it and outputs its first group $(\GG, g, p)$, with the same advantage — folklore.
