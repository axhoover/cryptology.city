---
type: reduction
status: draft
title: IND-CPA-D approximate HE ⇒ Approximate HE
aliases: []
id: red-approximate-he-ind-cpa-d-to-approximate-homomorphic-encryption
kind: implication
hypotheses: [approximate-he-ind-cpa-d]
conclusion: approximate-homomorphic-encryption
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction runs the scheme with the query bound fixed to 1, and the reduction forwards any IND-CPA adversary's challenge pair to the encryption oracle unchanged."
---

# IND-CPA-D approximate HE ⇒ Approximate HE

## Statement

Fixing the query bound $q = 1$ at key generation, an [IND-CPA$^{\mathrm{D}}$-secure approximate HE](homomorphic-encryption#ind-cpa-d-security) scheme is an IND-CPA-secure [[homomorphic-encryption#approximate-homomorphic-encryption|approximate homomorphic encryption]] scheme, with the same advantage: correctness and compactness hold by definition, and an IND-CPA adversary becomes an IND-CPA$^{\mathrm{D}}$ adversary that makes one $\calE$ query, on its pair of messages of equal length, makes no $\calD$ query and runs $\Eval$ itself — folklore.
