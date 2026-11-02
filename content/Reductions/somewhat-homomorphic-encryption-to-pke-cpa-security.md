---
type: reduction
status: draft
title: SHE ⇒ IND-CPA PKE
aliases: []
id: red-somewhat-homomorphic-encryption-to-pke-cpa-security
kind: implication
hypotheses: [somewhat-homomorphic-encryption]
conclusion: pke-cpa-security
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the scheme's own key generation, encryption and decryption, and the reduction forwards any IND-CPA adversary unchanged."
---

# SHE ⇒ IND-CPA PKE

## Statement

Fixing the bound $T = 1$ at key generation and forgetting $\Eval$, a [[homomorphic-encryption#somewhat-homomorphic-encryption-she|somewhat homomorphic encryption]] scheme is an IND-CPA-secure [[public-key-encryption#cpa-security|public-key encryption]] scheme, with the same correctness and the same CPA advantage — folklore.
