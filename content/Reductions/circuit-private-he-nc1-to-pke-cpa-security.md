---
type: reduction
status: draft
title: Circuit-private HE for NC1 ⇒ IND-CPA PKE
aliases: []
id: red-circuit-private-he-nc1-to-pke-cpa-security
kind: implication
hypotheses: [circuit-private-he-nc1]
conclusion: pke-cpa-security
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the scheme's own key generation, encryption and decryption, and the reduction forwards any IND-CPA adversary unchanged."
---

# Circuit-private HE for NC1 ⇒ IND-CPA PKE

## Statement

Fixing the bound $L$ at key generation to any polynomial and forgetting $\Eval$, a [circuit-private homomorphic encryption scheme for $\mathrm{NC}^1$](homomorphic-encryption#circuit-private-he-for-nc1) is an IND-CPA-secure [[public-key-encryption#cpa-security|public-key encryption]] scheme, with the same correctness and the same CPA advantage — folklore.
