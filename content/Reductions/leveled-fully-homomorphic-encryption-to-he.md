---
type: reduction
status: draft
title: Leveled FHE ⇒ HE
aliases: []
id: red-leveled-fully-homomorphic-encryption-to-he
kind: implication
hypotheses: [leveled-fully-homomorphic-encryption]
conclusion: he
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction runs the leveled scheme with its depth bound fixed to the security parameter, and the reduction forwards any IND-CPA adversary unchanged."
---

# Leveled FHE ⇒ HE

## Statement

Fixing the depth bound $L = \secpar$ at key generation, a [[homomorphic-encryption#leveled-fully-homomorphic-encryption|leveled fully homomorphic encryption]] scheme is a [[homomorphic-encryption|homomorphic encryption]] scheme for the class of polynomial-size circuits of depth at most $\secpar$, which contains, for every polynomial $k$, the XOR of $k$ bits, a circuit of depth $\lceil \log k \rceil \le \secpar$ for all large enough $\secpar$, with the same IND-CPA advantage — folklore.
