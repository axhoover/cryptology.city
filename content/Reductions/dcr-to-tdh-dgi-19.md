---
type: reduction
status: draft
title: "DCR ⇒ TDH"
aliases: []
id: red-dcr-to-tdh-dgi-19
kind: implication
hypotheses: [dcr]
conclusion: tdh
class: unstated
model: standard
source:
  - "[[DGI+19 - Trapdoor Hash Functions and Their Applications|DGI+19]]"
security-loss: ""
---

# DCR ⇒ TDH

## Statement

[[decisional-composite-residuosity|DCR]] implies [[trapdoor-hash-function|trapdoor hash functions]] for the index predicates $f_i(x) = x_i$ with one-bit hints: for every index $i$, an encoding key hides $i$, and its trapdoor recovers $x_i$ from the hash $H(x)$ and the hint — [[DGI+19 - Trapdoor Hash Functions and Their Applications|DGI+19]].
