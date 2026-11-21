---
type: reduction
status: draft
title: "DDH ⇒ LR-PKE"
aliases: []
id: red-prime-order-ddh-to-leakage-resilient-pke-ns09
kind: implication
hypotheses: [prime-order-ddh]
conclusion: leakage-resilient-pke
class: fully-black-box
model: standard
source:
  - "[[NS09 - Public-Key Cryptosystems Resilient to Key Leakage|NS09]]"
security-loss: ""
rationale:
  class: "The scheme uses only the group generator's output, the group operations and a fixed extractor, and the reduction samples the secret key itself to answer leakage queries and runs any adversary once as an oracle on a challenge built from its DDH instance."
---

# DDH ⇒ LR-PKE

## Statement

If [[decisional-diffie-hellman#ddh-in-prime-order-groups|DDH]] holds in prime-order groups, there is a public-key encryption scheme that is [$\ell$-leakage-resilient](leakage-resilient-public-key-encryption#leakage-resilient-cpa-security) for $\ell = L(1 - o(1))$, where $L$ is the bit length of its secret key: [[NS09 - Public-Key Cryptosystems Resilient to Key Leakage|NS09]] construct a new DDH-based [[hash-proof-system|hash proof system]] and prove this bound for the scheme their generic construction ([[universal-hash-proof-system-to-leakage-resilient-pke-ns09|Universal HPS ⇒ LR-PKE]]) gives from it. [[NS09 - Public-Key Cryptosystems Resilient to Key Leakage|NS09]] also prove that the [[circular-security|circular-secure]] scheme of [[BHHO08 - Circular-Secure Encryption from Decision Diffie-Hellman|BHHO08]] is $L'(1 - o(1))$-leakage-resilient under DDH, for $L'$ the bit length of its secret key.

## Notes

- The same holds under the $d$-Linear assumptions, which for $d \ge 2$ are weaker than DDH ([[Sha07 - A Cramer-Shoup Encryption Scheme from the Linear Assumption and from Progressively Weaker Linear Variants|Sha07]]): [$d$-Linear ⇒ LR-PKE](k-linear-assumption-to-leakage-resilient-pke-ns09) — [[NS09 - Public-Key Cryptosystems Resilient to Key Leakage|NS09]].
- Regev's LWE-based scheme tolerates leakage of a large fraction of its secret key without modification: [[lwe-to-leakage-resilient-pke-agv09|LWE ⇒ LR-PKE (Regev)]] — [[AGV09 - Simultaneous Hardcore Bits and Cryptography against Memory Attacks|AGV09]].
