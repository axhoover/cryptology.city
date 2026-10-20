---
type: reduction
status: draft
title: One-round sublinear cPIR ⇒ cPIR with total communication below n
aliases: []
id: red-one-round-sublinear-cpir-to-total-nontrivial-cpir
kind: implication
hypotheses: [one-round-sublinear-cpir]
conclusion: total-nontrivial-cpir
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the scheme, run on databases of a fixed polynomial size, and the reduction forwards any privacy adversary unchanged."
---

# One-round sublinear cPIR ⇒ cPIR with total communication below n

## Statement

A [[single-server-private-information-retrieval#one-round-sublinear-pir|one-round sublinear]] PIR scheme with $|q| + |a| \le p(\secpar) \cdot n^c$ for a polynomial $p$ and a constant $c < 1$ has [total communication below $n$](single-server-private-information-retrieval#pir-with-total-communication-below-n) on databases of $n(\secpar) > p(\secpar)^{1/(1-c)}$ bits, a polynomial size — folklore.
