---
type: reduction
status: draft
title: "IND-HIBE-CPA-secure HIBE ⇔ HIBE"
aliases: []
id: red-hibe-adaptive-security-to-hibe
kind: equivalence
hypotheses: [hibe-adaptive-security]
conclusion: hibe
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity map on HIBE schemes in both directions, and the reduction forwards any adversary unchanged."
---

# IND-HIBE-CPA-secure HIBE ⇔ HIBE

## Statement

A $(1-\negl(\secpar))$-correct [[hierarchical-identity-based-encryption#ind-hibe-cpa-security|IND-HIBE-CPA-secure]] HIBE is exactly what a [[hierarchical-identity-based-encryption|HIBE]] denotes, so each is the other under the identity map on schemes, with the same advantage — folklore.
