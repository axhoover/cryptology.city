---
type: reduction
status: draft
title: "SXDH, LWE and LPN over a common prime ⇒ Sub-exponential SXDH"
aliases: []
id: red-jls21-common-prime-assumptions-to-subexponential-sxdh
kind: implication
hypotheses: [jls21-common-prime-assumptions]
conclusion: subexponential-sxdh
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the bilinear group generator, and the reduction forwards any DDH adversary in either source group unchanged."
---

# SXDH, LWE and LPN over a common prime ⇒ Sub-exponential SXDH

## Statement

If [[decisional-diffie-hellman#sxdh-lwe-and-lpn-over-a-common-prime|SXDH, LWE and LPN are sub-exponentially hard over a common prime]] for a bilinear group generator, with constant $c$, then [[decisional-diffie-hellman#sub-exponential-sxdh|SXDH is sub-exponentially hard]] for the same generator with $\varepsilon = c$: the first of its three problems is DDH in each source group, with size bound $2^{\secpar^{c}}$ and advantage bound $2^{-\secpar^{c}}$, by definition — folklore.
