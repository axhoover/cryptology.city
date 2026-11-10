---
type: reduction
status: draft
title: "Anonymous IBE for arbitrary-length identities ⇒ Anonymous IBE"
aliases: []
id: red-anonymous-ibe-unbounded-identities-to-anonymous-ibe
kind: implication
hypotheses: [anonymous-ibe-unbounded-identities]
conclusion: anonymous-ibe
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on IBE schemes, and the reduction forwards any adversary unchanged."
---

# Anonymous IBE for arbitrary-length identities ⇒ Anonymous IBE

## Statement

An [[identity-based-encryption#anonymous-ibe-for-arbitrary-length-identities|anonymous IBE for arbitrary-length identities]], with the same algorithms, is an [[identity-based-encryption#anonymous-ibe|anonymous IBE]], since $\bits^*$ contains $\bits^\secpar$ — folklore.
