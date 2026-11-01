---
type: reduction
status: draft
title: "IND-CPA approximate HE ⇒ IND-CPA-D approximate HE (LMSS22)"
aliases: []
id: red-approximate-homomorphic-encryption-to-approximate-he-ind-cpa-d-lmss22
kind: implication
hypotheses: [approximate-homomorphic-encryption]
conclusion: approximate-he-ind-cpa-d
class: unstated
model: standard
source:
  - "[[LMSS22 - Securing Approximate Homomorphic Encryption Using Differential Privacy|LMSS22]]"
security-loss: ""
---

# IND-CPA approximate HE ⇒ IND-CPA-D approximate HE (LMSS22)

## Statement

Every IND-CPA-secure [[homomorphic-encryption#approximate-homomorphic-encryption|approximate homomorphic encryption]] scheme can be transformed into one that is [IND-CPA$^{\mathrm{D}}$-secure](homomorphic-encryption#ind-cpa-d-security), by post-processing the output of decryption with a differential-privacy mechanism that adds noise tailored to the worst-case error growth of the homomorphic computation; for CKKS, adding Gaussian noise to the output of decryption suffices — [[LMSS22 - Securing Approximate Homomorphic Encryption Using Differential Privacy|LMSS22]].

## Notes

- The added noise increases the decryption error, so reaching a target precision requires running the original scheme at a higher one — folklore.
- Without such noise IND-CPA does not suffice: a passive attack recovers the key of CKKS from decryption results — [[LM21 - On the Security of Homomorphic Encryption on Approximate Numbers|LM21]].
