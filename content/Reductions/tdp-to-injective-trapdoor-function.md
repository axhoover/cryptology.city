---
type: reduction
status: draft
title: TDP ⇒ Injective TDF
aliases: []
id: red-tdp-to-injective-trapdoor-function
kind: implication
hypotheses: [tdp]
conclusion: injective-trapdoor-function
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the trapdoor permutation, and the reduction forwards any inverter unchanged."
---

# TDP ⇒ Injective TDF

## Statement

Every [[trapdoor-permutation|trapdoor permutation]] is an [[trapdoor-permutation#injective-trapdoor-functions|injective trapdoor function]] with range equal to its domain, with the same one-wayness advantage — folklore.

## Notes

- Injective trapdoor functions do not follow from PKE by fully-black-box constructions: [[no-pke-to-injective-trapdoor-function-gmr01|No fully-black-box reduction from PKE to injective TDF]] — [[GMR01 - On the Impossibility of Basing Trapdoor Functions on Trapdoor Predicates|GMR01]].
