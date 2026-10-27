---
type: reduction
status: draft
title: "Optimally short structure-preserving signatures ⇒ Structure-preserving signatures"
aliases: []
id: red-short-structure-preserving-signature-to-structure-preserving-signature
kind: implication
hypotheses: [short-structure-preserving-signature]
conclusion: structure-preserving-signature
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on schemes, and the reduction forwards any forger unchanged."
---

# Optimally short structure-preserving signatures ⇒ Structure-preserving signatures

## Statement

An [[digital-signature#optimally-short-structure-preserving-signatures|optimally short structure-preserving signature]] scheme is a [[digital-signature#structure-preserving-signatures|structure-preserving signature]] scheme, with the same EUF-CMA advantage for every forger — folklore.
