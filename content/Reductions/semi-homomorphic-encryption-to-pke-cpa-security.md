---
type: reduction
status: draft
title: Semi-homomorphic encryption ⇒ IND-CPA PKE
aliases: []
id: red-semi-homomorphic-encryption-to-pke-cpa-security
kind: implication
hypotheses: [semi-homomorphic-encryption]
conclusion: pke-cpa-security
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the scheme's own key generation, encryption and decryption restricted to the plaintexts 0 and 1, and the reduction forwards any IND-CPA adversary unchanged."
---

# Semi-homomorphic encryption ⇒ IND-CPA PKE

## Statement

Fixing a modulus $p \ge 2$ at key generation and restricting to the plaintexts $0$ and $1$, a [[homomorphic-encryption#semi-homomorphic-encryption|semi-homomorphic encryption]] scheme is a $(1 - \negl)$-correct, IND-CPA-secure [[public-key-encryption#cpa-security|public-key encryption]] scheme with message space $\bits$, with the same CPA advantage: fresh encryptions of $x \in \{0, \ldots, p - 1\}$ decrypt to $x$ with probability $1 - \negl(\secpar)$, and $0$ and $1$ are encoded by strings of equal length, so the pair $(0, 1)$ is admissible in the scheme's own CPA game — folklore.
