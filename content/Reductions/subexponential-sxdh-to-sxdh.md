---
type: reduction
status: draft
title: "Sub-exponential SXDH ⇒ SXDH"
aliases: []
id: red-subexponential-sxdh-to-sxdh
kind: implication
hypotheses: [subexponential-sxdh]
conclusion: sxdh
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity, and the reduction forwards any adversary unchanged."
---

# Sub-exponential SXDH ⇒ SXDH

## Statement

[[decisional-diffie-hellman#sub-exponential-sxdh|Sub-exponentially hard SXDH]] is [[decisional-diffie-hellman#sxdh-symmetric-external-diffie-hellman|SXDH]]: an efficient adversary has size below $2^{\secpar^{\varepsilon}}$ for large $\secpar$, so its advantage is at most $2^{-\secpar^{\varepsilon}}$ — folklore.
