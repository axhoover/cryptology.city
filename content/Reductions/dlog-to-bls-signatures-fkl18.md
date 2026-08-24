---
type: reduction
status: draft
title: "DLOG ⇒ BLS signatures"
aliases: []
id: red-dlog-to-bls-signatures-fkl18
kind: implication
hypotheses: [dlog]
conclusion: boneh-lynn-shacham-signature
class: unstated
model: algebraic-group
source:
  - "[[FKL18 - The Algebraic Group Model and its Applications|FKL18]]"
security-loss: ""
---

# DLOG ⇒ BLS signatures

[[discrete-logarithm|DLOG]] implies [[digital-signature#bls-signatures|BLS signatures]].

## Statement

Migrated verbatim from [[algebraic-group-model]] § Key Results:

> - **BLS security:** unforgeability of [[boneh-lynn-shacham-signature|BLS]] signatures reduces tightly to DLOG in the AGM.

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- BROKEN WIKILINK: `[[boneh-lynn-shacham-signature|BLS]]` resolves to nothing — there is no content/Primitives/boneh-lynn-shacham-signature.md and no page carries that slug as an alias. BLS signatures are described in content/Primitives/digital-signature.md (## BLS signatures, line 144) which would be the correct target.
- Model is understated: the FKL18 tight BLS proof is in the AGM _and_ the random oracle model (BLS hashes to the group); the page records only the AGM.
- No citation on the bullet; inherited from the line 28 lead-in.
