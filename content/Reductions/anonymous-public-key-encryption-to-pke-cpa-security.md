---
type: reduction
status: draft
title: Key-hiding PKE ⇒ CPA-secure PKE
aliases: []
id: red-anonymous-public-key-encryption-to-pke-cpa-security
kind: implication
hypotheses: [anonymous-public-key-encryption]
conclusion: pke-cpa-security
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the scheme, and the reduction forwards any CPA adversary unchanged."
---

# Key-hiding PKE ⇒ CPA-secure PKE

## Statement

A [[public-key-encryption#key-hiding|key-hiding]] PKE scheme, which is CPA-secure and IK-CPA-secure, is [[public-key-encryption#cpa-security|IND-CPA-secure]] — folklore.
