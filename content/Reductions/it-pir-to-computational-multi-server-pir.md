---
type: reduction
status: draft
title: "IT-PIR ⇒ Computational Multi-server PIR"
aliases: []
id: red-it-pir-to-computational-multi-server-pir
kind: implication
hypotheses: [it-pir]
conclusion: computational-multi-server-pir
class: fully-black-box
model: standard
source: folklore
security-loss: "tight (distinguishing advantage is $0$)"
rationale:
  class: "The construction is the identity, using the IT-PIR scheme only as an oracle, and the reduction forwards any adversary unchanged."
---

# IT-PIR ⇒ Computational Multi-server PIR

## Statement

Every [[multi-server-private-information-retrieval|IT-PIR]] scheme, with algorithms that ignore $1^\secpar$, is a [[multi-server-private-information-retrieval#computational-multi-server-pir|computational multi-server PIR]] with the same number of servers $k$, the same exponent $c$ and the constant polynomial $p = C$: correctness carries over, and per-server query distributions that are identical for every pair of indices give every adversary advantage $0$ — folklore.
