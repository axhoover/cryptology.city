---
type: reduction
status: draft
title: Highly lossy TDF ⇒ Lossy TDF
aliases: []
id: red-highly-lossy-trapdoor-function-to-lossy-trapdoor-function
kind: implication
hypotheses: [highly-lossy-trapdoor-function]
conclusion: lossy-trapdoor-function
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the lossy trapdoor function, and the reduction forwards any mode distinguisher unchanged."
---

# Highly lossy TDF ⇒ Lossy TDF

## Statement

A [[trapdoor-permutation#highly-lossy-trapdoor-functions|highly lossy trapdoor function]] is a [[trapdoor-permutation#lossy-trapdoor-functions|lossy trapdoor function]] with the same parameters — folklore.
