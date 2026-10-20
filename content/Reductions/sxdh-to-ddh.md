---
type: reduction
status: draft
title: "SXDH ⇒ DDH"
aliases: []
id: red-sxdh-to-ddh
kind: implication
hypotheses: [sxdh]
conclusion: ddh
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction keeps only the first source group of the pairing generator's output, and the reduction forwards any DDH adversary unchanged."
---

# SXDH ⇒ DDH

## Statement

If [[decisional-diffie-hellman#sxdh-symmetric-external-diffie-hellman|SXDH]] holds for an asymmetric pairing-group generator, then [[decisional-diffie-hellman|DDH is hard]] for the group generator that runs it and outputs $(\GG_1, g_1, p)$, with the same advantage: SXDH asserts DDH hardness in $\GG_1$ by definition — folklore.
