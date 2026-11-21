---
type: reduction
status: draft
title: Bit-compressing SIS ⇒ SIS
aliases: []
id: red-bit-compressing-sis-to-sis
kind: implication
hypotheses: [bit-compressing-sis]
conclusion: sis
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on parameters, and the reduction forwards any SIS solver unchanged."
---

# Bit-compressing SIS ⇒ SIS

## Statement

If [[shortest-integer-solution#bit-compressing-sis|bit-compressing SIS]] is hard for $(n, m, q, \beta)$, with $m \ge n \log q + 1$ and $\sqrt{m} \le \beta < q$, then [[shortest-integer-solution|SIS]] is hard for the same parameters, which lie in its regime $m > n \log q$, with the same advantage — folklore.
