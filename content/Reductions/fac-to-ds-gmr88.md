---
type: reduction
status: draft
title: "FAC ⇒ DS"
aliases: []
id: red-fac-to-ds-gmr88
kind: implication
hypotheses: [fac]
conclusion: ds
class: unstated
model: standard
source:
  - "[[GMR88 - A Digital Signature Scheme Secure Against Adaptive Chosen-Message Attacks|GMR88]]"
security-loss: ""
---

# FAC ⇒ DS

[[factoring|FAC]] implies [[digital-signature|DS]].

## Statement

Migrated verbatim from [[digital-signature]] § Other results:

> - The foundational EUF-CMA security definition was introduced alongside the first construction of a many-time signature scheme secure under adaptive chosen-message attacks, based on factoring — [[GMR88 - A Digital Signature Scheme Secure Against Adaptive Chosen-Message Attacks|GMR88]]

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- `[[factoring]]` exists as a page but is not wikilinked.
- Simplification: GMR88's scheme is generic over claw-free trapdoor permutation pairs, instantiated from factoring — 'based on factoring' hides the intermediate object.
