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

## Statement

[[decisional-diffie-hellman|DDH]] implies [[trapdoor-hash-function|trapdoor hash functions]] for the index predicates $f_i(x) = x_i$ with one-bit hints: for every index $i$, an encoding key hides $i$, and its trapdoor recovers $x_i$ from the hash $H(x)$ and the hint — [[DGI+19 - Trapdoor Hash Functions and Their Applications|DGI+19]].

## Sketch

The hash key is a $2 \times n$ matrix of group elements $(g_{j,b})$ and $H(x) = \prod_j g_{j,x_j}$; the encoding key for index $i$ raises every entry to a secret exponent $s$ and multiplies the $(i,1)$ entry by $g$, so evaluating it on $x$ gives $H(x)^s \cdot g^{x_i}$. The trapdoor $s$ recovers $x_i$ from $H(x)$ and this value, a distributed discrete-logarithm step compresses the hint to one bit, and DDH makes the perturbed entry indistinguishable from the others, hiding $i$.

## Notes

- The same framework gives one-bit-hint trapdoor hash functions from QR, DCR and LWE ([[qr-to-tdh-dgi-19|QR ⇒ TDH]], [[dcr-to-tdh-dgi-19|DCR ⇒ TDH]], [[lwe-to-tdh-dgi-19|LWE ⇒ TDH]]) — [[DGI+19 - Trapdoor Hash Functions and Their Applications|DGI+19]].
- The DDH-based construction carries rate and correctness-error constraints, on which the polylog-communication PIR of [[tdh-to-cpir-amr25|TDH ⇒ cPIR]] depends — [[DGI+19 - Trapdoor Hash Functions and Their Applications|DGI+19]].
