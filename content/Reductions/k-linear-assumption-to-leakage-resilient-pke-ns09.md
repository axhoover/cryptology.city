---
type: reduction
status: draft
title: "d-Linear ⇒ LR-PKE"
aliases: []
id: red-k-linear-assumption-to-leakage-resilient-pke-ns09
kind: implication
hypotheses: [k-linear-assumption]
conclusion: leakage-resilient-pke
class: unstated
model: standard
source:
  - "[[NS09 - Public-Key Cryptosystems Resilient to Key Leakage|NS09]]"
security-loss: ""
---

# d-Linear ⇒ LR-PKE

## Statement

For every fixed $d \ge 1$, if the [$d$-Linear assumption](bilinear-map-assumptions#k-linear-assumption) holds in prime-order groups, there is a public-key encryption scheme that is [$\ell$-leakage-resilient](leakage-resilient-public-key-encryption#leakage-resilient-cpa-security) for $\ell = L(1 - o(1))$, where $L$ is the bit length of its secret key: [[NS09 - Public-Key Cryptosystems Resilient to Key Leakage|NS09]] extend their DDH-based [[hash-proof-system|hash proof system]] to the $d$-Linear assumptions and apply their generic construction ([[universal-hash-proof-system-to-leakage-resilient-pke-ns09|Universal HPS ⇒ LR-PKE]]).

## Notes

- For $d = 1$ the assumption is DDH: [[prime-order-ddh-to-leakage-resilient-pke-ns09|DDH ⇒ LR-PKE]]. The $d$-Linear assumptions grow weaker as $d$ grows — [[Sha07 - A Cramer-Shoup Encryption Scheme from the Linear Assumption and from Progressively Weaker Linear Variants|Sha07]].
