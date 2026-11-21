---
type: reduction
status: draft
title: "d-Linear ⇒ LR-PKE"
aliases: []
id: red-k-linear-assumption-to-leakage-resilient-pke-ns09
kind: implication
hypotheses: [k-linear-assumption]
conclusion: leakage-resilient-pke
class: fully-black-box
model: standard
source:
  - "[[NS09 - Public-Key Cryptosystems Resilient to Key Leakage|NS09]]"
security-loss: ""
rationale:
  class: "The scheme is the generic hash-proof-system construction over a d-Linear hash proof system that uses only the group generator and a fixed extractor, and the fixed reduction answers leakage queries with the hash key it samples itself and runs any adversary as an oracle to get a d-Linear distinguisher."
---

# d-Linear ⇒ LR-PKE

## Statement

For every fixed $d \ge 1$, if the [$d$-Linear assumption](bilinear-map-assumptions#k-linear-assumption) holds in prime-order groups, there is a public-key encryption scheme that is [$\ell$-leakage-resilient](leakage-resilient-public-key-encryption#leakage-resilient-cpa-security) for $\ell = L(1 - o(1))$, where $L$ is the bit length of its secret key: [[NS09 - Public-Key Cryptosystems Resilient to Key Leakage|NS09]] generalize their new DDH-based [[hash-proof-system|hash proof system]] to the $d$-Linear assumptions and prove this bound for the scheme their generic construction ([[universal-hash-proof-system-to-leakage-resilient-pke-ns09|Universal HPS ⇒ LR-PKE]]) gives from it.

## Notes

- For $d = 1$ the assumption is DDH: [[prime-order-ddh-to-leakage-resilient-pke-ns09|DDH ⇒ LR-PKE]] — [[NS09 - Public-Key Cryptosystems Resilient to Key Leakage|NS09]]. The $d$-Linear assumptions grow weaker as $d$ grows — [[Sha07 - A Cramer-Shoup Encryption Scheme from the Linear Assumption and from Progressively Weaker Linear Variants|Sha07]].
