---
type: reduction
status: draft
title: OPRF with a group range ⇒ OPRF
aliases: []
id: red-group-range-oprf-to-oprf
kind: implication
hypotheses: [group-range-oprf]
conclusion: oprf
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on schemes, and the reduction forwards any adversary unchanged."
---

# OPRF with a group range ⇒ OPRF

## Statement

An [[oblivious-prf#oprf-with-a-group-range|OPRF with a group range]] is a [[oblivious-prf#semi-honest-security|semi-honest secure]] [[oblivious-prf|OPRF]], with the same advantages — folklore.
