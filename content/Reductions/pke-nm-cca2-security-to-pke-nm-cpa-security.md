---
type: reduction
status: draft
title: "NM-CCA2 ⇒ NM-CPA"
aliases: []
id: red-pke-nm-cca2-security-to-pke-nm-cpa-security
kind: implication
hypotheses: [pke-nm-cca2-security]
conclusion: pke-nm-cpa-security
class: fully-black-box
model: standard
source: folklore
security-loss: "tight — the adversary and its advantage are unchanged"
rationale:
  class: "The construction is the identity on schemes, and the fixed reduction runs the NM-CPA adversary once, unchanged."
---

# NM-CCA2 ⇒ NM-CPA

## Statement

Every [[public-key-encryption#nm-cca2|NM-CCA2-secure]] [[public-key-encryption|PKE]] scheme is [[public-key-encryption#non-malleability|NM-CPA-secure]]: an NM-CPA adversary is an NM-CCA2 adversary that makes no query to $\calD$, and admissibility is the same — folklore.
