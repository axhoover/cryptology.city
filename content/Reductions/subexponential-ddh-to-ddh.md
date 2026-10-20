---
type: reduction
status: draft
title: "Sub-exponential DDH ⇒ DDH"
aliases: []
id: red-subexponential-ddh-to-ddh
kind: implication
hypotheses: [subexponential-ddh]
conclusion: ddh
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on group generators, and the reduction forwards any adversary unchanged."
---

# Sub-exponential DDH ⇒ DDH

## Statement

If [[decisional-diffie-hellman#sub-exponential-ddh|DDH is sub-exponentially hard]] for a group generator $\GrGen$, then [[decisional-diffie-hellman|DDH]] is hard for $\GrGen$: an efficient adversary has size below $2^{\secpar^{\varepsilon}}$ for large $\secpar$, so its advantage is at most $2^{-\secpar^{\varepsilon}}$ — folklore.
