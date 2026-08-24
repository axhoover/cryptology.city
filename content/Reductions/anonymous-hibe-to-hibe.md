---
type: reduction
status: stub
title: "Anonymous HIBE ⇒ HIBE"
aliases: []
id: red-anonymous-hibe-to-hibe
kind: implication
hypotheses: [anonymous-hibe]
conclusion: hibe
class: unstated
model: standard
source: folklore
security-loss: ""
---

# Anonymous HIBE ⇒ HIBE

[[hierarchical-identity-based-encryption#anonymous-hibe|Anonymous HIBE]] implies [[hierarchical-identity-based-encryption|HIBE]].

## Statement

Migrated verbatim from [[hierarchical-identity-based-encryption]] § Anonymous HIBE:

> An anonymous HIBE additionally hides the recipient identity $\vec{\mathit{id}}$ from the ciphertext, so an eavesdropper learns neither the payload nor the intended recipient.

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Variation section: anonymous HIBE is a strengthening of HIBE; the implication (anonymous HIBE => HIBE) is implicit, never asserted.
- No slug 'anonymous-hibe' exists in content/.
- No citation.
