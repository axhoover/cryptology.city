---
type: reduction
status: stub
title: "Zero-bit PRC ⇒ Trapdoor pseudorandom generators"
aliases: []
id: red-zero-bit-prc-to-trapdoor-pseudorandom-generators
kind: implication
hypotheses: [zero-bit-prc]
conclusion: trapdoor-pseudorandom-generator
class: unstated
model: standard
source: folklore
security-loss: ""
---

# Zero-bit PRC ⇒ Trapdoor pseudorandom generators

[[pseudorandom-error-correcting-code#zero-bit-prc|Zero-bit PRC]] implies [[pseudorandom-generator#trapdoor-pseudorandom-generators|Trapdoor pseudorandom generators]].

## Statement

Migrated verbatim from [[pseudorandom-generator]] § Trapdoor pseudorandom generators:

> Note that a [[pseudorandom-error-correcting-code|zero-bit Pseudorandom Code]] can be viewed as a trapdoor pseudorandom
> generator with the additional property that its completeness is actually
> robust to noise.

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- 'can be viewed as' — a viewpoint claim, not a proved reduction; uncited.
- Hypothesis is the zero-bit variant of `[[pseudorandom-error-correcting-code]]`, which has no slug of its own.
