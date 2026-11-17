---
type: reduction
status: draft
title: Large-universe Fuzzy IBE ⇒ Fuzzy IBE
aliases: []
id: red-large-universe-fuzzy-ibe-to-fuzzy-ibe
kind: implication
hypotheses: [large-universe-fuzzy-ibe]
conclusion: fuzzy-ibe
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the scheme itself, and the reduction forwards any IND-FIBE-CPA adversary unchanged."
---

# Large-universe Fuzzy IBE ⇒ Fuzzy IBE

## Statement

A [[fuzzy-identity-based-encryption#large-universe-fuzzy-ibe|large-universe Fuzzy IBE]] scheme with attribute universe $\calU_\secpar$ is, for every threshold $t$ with $1 \le t \le \poly(\secpar)$, a [[fuzzy-identity-based-encryption|Fuzzy IBE]] scheme over $\calU_\secpar$ with threshold $t$ that is [[fuzzy-identity-based-encryption#ind-fibe-cpa-security|IND-FIBE-CPA-secure]], with the same algorithms and the same advantage — folklore.
