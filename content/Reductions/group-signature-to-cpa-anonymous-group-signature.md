---
type: reduction
status: draft
title: "Group signatures ⇒ CPA-anonymous group signatures"
aliases: []
id: red-group-signature-to-cpa-anonymous-group-signature
kind: implication
hypotheses: [group-signature]
conclusion: cpa-anonymous-group-signature
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on schemes, and the reduction runs any CPA-full-anonymity adversary as a full-anonymity adversary that never queries its opening oracle."
---

# Group signatures ⇒ CPA-anonymous group signatures

## Statement

A [[group-signature|group signature scheme]] that is [[group-signature#full-anonymity|fully anonymous]] is [[group-signature#cpa-full-anonymity|CPA-fully anonymous]], with the same advantage, so a [[group-signature#correctness|perfectly correct]], fully anonymous and fully traceable scheme is a CPA-anonymous group signature scheme — folklore.
