---
type: reduction
status: draft
title: "QR ⇒ TDH"
aliases: []
id: red-qr-to-tdh-dgi-19
kind: implication
hypotheses: [qr]
conclusion: tdh
class: unstated
model: standard
source:
  - "[[DGI+19 - Trapdoor Hash Functions and Their Applications|DGI+19]]"
security-loss: ""
---

# QR ⇒ TDH

[[quadratic-residuosity|QR]] implies [[trapdoor-hash-function|TDH]].

## Statement

[[quadratic-residuosity|QR]] implies [[trapdoor-hash-function|TDH]] with one-bit hints: an encoding key hides an index $i$, and its trapdoor recovers $x_i$ from $H(x)$ and the hint — [[DGI+19 - Trapdoor Hash Functions and Their Applications|DGI+19]].

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.
