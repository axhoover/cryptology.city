---
type: reduction
status: draft
title: Strongly homomorphic encryption ⇒ IND-CPA PKE
aliases: []
id: red-strongly-homomorphic-encryption-to-pke-cpa-security
kind: implication
hypotheses: [strongly-homomorphic-encryption]
conclusion: pke-cpa-security
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the scheme's own key generation, encryption and decryption, and the reduction forwards any IND-CPA adversary unchanged."
---

# Strongly homomorphic encryption ⇒ IND-CPA PKE

## Statement

Forgetting $\Eval$, a [[homomorphic-encryption#strongly-homomorphic-encryption|strongly homomorphic encryption]] scheme is an IND-CPA-secure [[public-key-encryption#cpa-security|public-key encryption]] scheme for one-bit messages, with the same correctness and the same CPA advantage — folklore.
