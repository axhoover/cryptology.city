---
type: reduction
status: draft
title: "Sub-exponential SXDH ⇒ Sub-exponential DDH"
aliases: []
id: red-subexponential-sxdh-to-subexponential-ddh
kind: implication
hypotheses: [subexponential-sxdh]
conclusion: subexponential-ddh
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction keeps only the first source group of the pairing generator's output, and the reduction forwards any DDH adversary unchanged."
---

# Sub-exponential SXDH ⇒ Sub-exponential DDH

## Statement

If [[decisional-diffie-hellman#sub-exponential-sxdh|SXDH is sub-exponentially hard]] for an asymmetric pairing-group generator, then [[decisional-diffie-hellman#sub-exponential-ddh|DDH is sub-exponentially hard]], with the same constant $\varepsilon$, for the group generator that runs it and outputs $(\GG_1, g_1, p)$: sub-exponential SXDH bounds DDH advantage in $\GG_1$ by definition — folklore.
