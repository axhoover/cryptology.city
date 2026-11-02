---
type: reduction
status: draft
title: "IND-CPA statically approximate HE ⇒ IND-CPA-D approximate HE (LMSS22)"
aliases: []
id: red-statically-approximate-homomorphic-encryption-to-approximate-he-ind-cpa-d-lmss22
kind: implication
hypotheses: [statically-approximate-homomorphic-encryption]
conclusion: approximate-he-ind-cpa-d
class: unstated
model: standard
source:
  - "[[LMSS22 - Securing Approximate Homomorphic Encryption Using Differential Privacy|LMSS22]]"
security-loss: ""
---

# IND-CPA statically approximate HE ⇒ IND-CPA-D approximate HE (LMSS22)

## Statement

Every IND-CPA-secure [[homomorphic-encryption#statically-approximate-he|statically approximate HE]] scheme can be transformed into one that is [IND-CPA$^{\mathrm{D}}$-secure](homomorphic-encryption#ind-cpa-d-security) for a number of decryption queries fixed in advance. The transformation tags each fresh ciphertext with the bound $t_e$ and each evaluated one with $\mathsf{Estimate}$'s bound computed from its circuit and the tags of its inputs, and post-processes the output of decryption with a differential-privacy mechanism that adds noise scaled to the tag — [[LMSS22 - Securing Approximate Homomorphic Encryption Using Differential Privacy|LMSS22]] (Definitions 11 and 15, Algorithm 2, Theorem 2). LMSS22 instantiate the mechanism for CKKS, adding Gaussian noise to the output of decryption — [[LMSS22 - Securing Approximate Homomorphic Encryption Using Differential Privacy|LMSS22]].

## Notes

- The added noise increases the decryption error, so reaching a target precision requires running the original scheme at a higher one, whose $\mathsf{Estimate}$ bound is smaller — folklore.
- Without such noise IND-CPA does not suffice: a passive attack recovers the key of CKKS from decryption results — [[LM21 - On the Security of Homomorphic Encryption on Approximate Numbers|LM21]].
