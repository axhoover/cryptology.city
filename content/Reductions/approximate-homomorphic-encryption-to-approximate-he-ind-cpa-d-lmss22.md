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

Every IND-CPA-secure [[homomorphic-encryption#statically-approximate-he|statically approximate HE]] scheme can be transformed into one that is [IND-CPA$^{\mathrm{D}}$-secure](homomorphic-encryption#ind-cpa-d-security) for a number of decryption queries fixed in advance. LMSS22's transformation tags each fresh ciphertext with the bound $t_e$ and each evaluated one with $\mathsf{Estimate}$'s bound computed from its circuit and the tags of its inputs, and post-processes the output of decryption with a differential-privacy mechanism that adds noise scaled to the tag; every efficient adversary's advantage against the result in the IND-CPA$^{\mathrm{D}}$ game is negligible — [[LMSS22 - Securing Approximate Homomorphic Encryption Using Differential Privacy|LMSS22]] (Definitions 11 and 15, Algorithm 2, Theorem 2). Applied with $\Eval$ called on one addition or multiplication at a time, with the original scheme run at a precision $p' > p$, every tag of a computation of depth at most $L$ is $t_e$ or one of the bounds the hypothesis caps, all at most $2^{-p'}$, so the transformed scheme is correct at precision $p$ once $p'$ is large enough for the tag plus the added noise to stay below $2^{-p}$ except with negligible probability, and its tags have polynomial length — folklore. Its advantage in the IND-CPA$^{\mathrm{D}}$ game stays negligible, since an adversary's query on a circuit is a sequence of admissible single-gate queries to the scheme of Algorithm 2, with the same decryption queries; with the correctness above, it is IND-CPA$^{\mathrm{D}}$-secure — folklore. LMSS22 instantiate the mechanism for CKKS, adding Gaussian noise to the output of decryption — [[LMSS22 - Securing Approximate Homomorphic Encryption Using Differential Privacy|LMSS22]].

## Notes

- Tags that $\mathsf{Estimate}$ computes for whole circuits can be large on computations that are in range: $\mathsf{Estimate}$ does not see the messages, so for $d$ rounds of $v \mapsto (v + v)(v + v)$, in range at $x = 1/8$, its bound must also cover inputs near $3/4$, where the circuit's derivative exceeds $3^{2^d}$ for $d \ge 2$ — folklore.
- Without such noise IND-CPA does not suffice: a passive attack recovers the key of CKKS from decryption results — [[LM21 - On the Security of Homomorphic Encryption on Approximate Numbers|LM21]].
