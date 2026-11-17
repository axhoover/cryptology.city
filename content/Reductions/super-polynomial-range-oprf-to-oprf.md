---
type: reduction
status: draft
title: OPRF with super-polynomial range ⇒ OPRF
aliases: []
id: red-super-polynomial-range-oprf-to-oprf
kind: implication
hypotheses: [super-polynomial-range-oprf]
conclusion: oprf
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on schemes, and the reduction forwards any adversary unchanged."
---

# OPRF with super-polynomial range ⇒ OPRF

## Statement

An [[oblivious-prf#oprf-with-super-polynomial-range|OPRF with super-polynomial range]] is a [[oblivious-prf#semi-honest-security|semi-honest secure]] [[oblivious-prf|OPRF]], with the same advantages — folklore.
