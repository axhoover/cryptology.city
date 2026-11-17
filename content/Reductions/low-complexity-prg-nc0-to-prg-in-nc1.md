---
type: reduction
status: draft
title: "NC0 PRG ⇒ NC1 PRG"
aliases: []
id: red-low-complexity-prg-nc0-to-prg-in-nc1
kind: implication
hypotheses: [low-complexity-prg-nc0]
conclusion: prg-in-nc1
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the generator itself, and the reduction forwards the adversary unchanged."
---

# NC0 PRG ⇒ NC1 PRG

## Statement

Every [PRG in $\mathrm{NC}^0$](low-complexity-prg) is a [PRG in $\mathrm{NC}^1$](pseudorandom-generator-in-nc1), with the same stretch — folklore.

## Sketch

Each output bit of $G_n$ is a function of at most $d$ input bits, so a fan-in-2 circuit of size $2^{O(d)}$ and depth $O(d) = O(\log n)$ computes it; the $m(n)$ output bits together take size $m(n) \cdot 2^{O(d)} = \poly(n)$ and depth $O(d)$. The pseudorandomness game is the same.
