---
type: reduction
status: draft
title: "DDH ⇒ TDH"
aliases: []
id: red-ddh-to-tdh-dgi-19
kind: implication
hypotheses: [ddh]
conclusion: tdh
class: unstated
model: standard
source:
  - "[[DGI+19 - Trapdoor Hash Functions and Their Applications|DGI+19]]"
security-loss: ""
---

# DDH ⇒ TDH

[[decisional-diffie-hellman|DDH]] implies [[trapdoor-hash-function|TDH]].

## Statement

[[decisional-diffie-hellman|DDH]] implies [[trapdoor-hash-function|trapdoor hash functions]] for the index predicates $f_i(x) = x_i$ with one-bit hints; the same framework instantiates from QR, DCR, and LWE — [[DGI+19 - Trapdoor Hash Functions and Their Applications|DGI+19]].

## Sketch

The hash key is a $2 \times n$ matrix of group elements $(g_{j,b})$ and $H(x) = \prod_j g_{j,x_j}$. The encoding key for index $i$ raises every entry to a secret exponent $s$ and additionally multiplies the $(i,1)$ entry by $g$, so evaluating on $x$ gives $H(x)^s \cdot g^{x_i}$; the trapdoor $s$ recovers $x_i$ from $H(x)$ and the encoding, a distributed discrete-logarithm step compresses the hint to a single bit, and DDH makes the perturbed entry indistinguishable from the others, hiding $i$.

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.

- DGI+19's DDH-based TDH has rate and correctness-error constraints the edge cannot record; the polylog-communication PIR on [[tdh-to-cpir-amr25|TDH ⇒ cPIR]] depends on them.
