---
type: reduction
status: draft
title: HE ⇒ IND-CPA PKE
aliases: []
id: red-he-to-pke-cpa-security
kind: implication
hypotheses: [he]
conclusion: pke-cpa-security
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the scheme's own key generation, encryption and decryption, and the reduction forwards any IND-CPA adversary unchanged."
---

# HE ⇒ IND-CPA PKE

## Statement

Forgetting $\Eval$, a [[homomorphic-encryption|homomorphic encryption]] scheme $\HE = (\KeyGen, \Enc, \Dec, \Eval)$ is an IND-CPA-secure [[public-key-encryption#cpa-security|public-key encryption]] scheme $(\KeyGen, \Enc, \Dec)$, with the same correctness and the same CPA advantage — folklore.

## Notes

- If HE exists, the identity map does not give IND-CCA2 security ([[no-he-to-cca-security|No fixed-construction reduction from HE to IND-CCA2 Security]]) — standard. Without modification, additively homomorphic encryption schemes, for instance, are not IND-CCA2-secure — folklore. Nor does the identity map give IND-CCA1 security in general: a lunchtime attack recovers the key of Gentry's basic scheme — [[LMSV11 - On CCA-Secure Somewhat Homomorphic Encryption|LMSV11]].
