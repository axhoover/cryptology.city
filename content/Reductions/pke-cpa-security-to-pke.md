---
type: reduction
status: draft
title: "IND-CPA PKE ⇒ PKE"
aliases: []
id: red-pke-cpa-security-to-pke
kind: implication
hypotheses: [pke-cpa-security]
conclusion: pke
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the encryption algorithms, and the reduction forwards any adversary unchanged."
---

# IND-CPA PKE ⇒ PKE

## Statement

An [[public-key-encryption#cpa-security|IND-CPA-secure]] [[public-key-encryption|public-key encryption]] scheme, with the same algorithms, is a public-key encryption scheme: the named notion only adds a security guarantee — folklore.
