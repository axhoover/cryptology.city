---
type: reduction
status: draft
title: "CP-IND-CPA-secure CP-ABE ⇒ ABE"
aliases: []
id: red-cp-abe-adaptive-security-to-abe
kind: implication
hypotheses: [cp-abe-adaptive-security]
conclusion: abe
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the scheme itself, and the reduction forwards the adversary unchanged."
---

# CP-IND-CPA-secure CP-ABE ⇒ ABE

## Statement

A ciphertext-policy [[attribute-based-encryption|ABE]] scheme that is [[attribute-based-encryption#cp-abe-ind-cpa-security|CP-IND-CPA-secure]] is an ABE scheme in the sense of the base object, which in its ciphertext-policy flavor denotes a $(1-\negl(\secpar))$-correct, CP-IND-CPA-secure scheme with the same syntax, policy class and message-space requirements — folklore.
