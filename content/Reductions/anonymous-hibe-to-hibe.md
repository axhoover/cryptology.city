---
type: reduction
status: draft
title: "Anonymous HIBE ⇒ HIBE"
aliases: []
id: red-anonymous-hibe-to-hibe
kind: implication
hypotheses: [anonymous-hibe]
conclusion: hibe
class: fully-black-box
model: standard
source: folklore
security-loss: ""
rationale:
  class: "The construction is the identity map on HIBE schemes, and the reduction forwards the adversary unchanged, using it only as an oracle."
---

# Anonymous HIBE ⇒ HIBE

## Statement

Every [[hierarchical-identity-based-encryption#anonymous-hibe|anonymous HIBE]] is itself a [[hierarchical-identity-based-encryption|HIBE]]: an anonymous HIBE is by definition $(1-\negl(\secpar))$-correct and IND-HIBE-CPA-secure, and ANO-HIBE-CPA security, which hides the recipient identity vector, is an additional requirement — folklore.

## Sketch

The construction is the identity; an IND-HIBE-CPA adversary against the scheme is forwarded unchanged and has the same advantage.
