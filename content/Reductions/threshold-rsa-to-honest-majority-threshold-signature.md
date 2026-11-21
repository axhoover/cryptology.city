---
type: reduction
status: draft
title: "Threshold RSA signatures ⇒ Honest-majority threshold signature"
aliases: []
id: red-threshold-rsa-to-honest-majority-threshold-signature
kind: implication
hypotheses: [threshold-rsa]
conclusion: honest-majority-threshold-signature
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on schemes, dropping robustness, and the reduction forwards any forger unchanged."
---

# Threshold RSA signatures ⇒ Honest-majority threshold signature

## Statement

If [[threshold-signature#threshold-rsa|Shoup's threshold RSA scheme]] is unforgeable and robust against static corruption of $t$ parties for all polynomials $n$ and $t$ with $n \ge 2t+1$, then it is an [honest-majority threshold signature scheme ($t < n/2$)](threshold-signature#honest-majority-t--n2), with the same advantage for every forger: unforgeability for the polynomials with $1 \le t$ and $n \ge 2t+1$ is part of the hypothesis, robustness is dropped, and the scheme is perfectly correct, since honestly generated shares pass share verification and any $t+1$ of them combine into the RSA full-domain-hash signature on $m$ — folklore.
