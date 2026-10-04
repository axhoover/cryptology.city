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

Every [[hierarchical-identity-based-encryption#anonymous-hibe|anonymous HIBE]] is itself a [[hierarchical-identity-based-encryption|HIBE]]: anonymity requires ciphertexts to hide the recipient identity vector $\vec{\mathit{id}}$ in addition to the payload — folklore.

## Sketch

The construction is the identity; a HIBE adversary is forwarded unchanged to the anonymous HIBE game, whose payload-indistinguishability requirement it breaks with the same advantage.
