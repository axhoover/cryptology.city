---
type: reduction
status: stub
title: "DS ⇒ Hash function"
aliases: []
id: red-ds-to-hash-function
kind: implication
hypotheses: [ds]
conclusion: hash-function
class: unstated
model: standard
source: folklore
security-loss: ""
---

# DS ⇒ Hash function

[[digital-signature|DS]] implies [[hash-function|Hash function]].

## Statement

Migrated verbatim from [[digital-signature]] § Other results:

> - Digital signatures imply [[hash-function|OWFs]]: if signing is hard to forge, the signing algorithm is a one-way function (knowing the message and signature reveals nothing useful about the key)

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- No citation and no folklore flag (the standard reference is Rompel 1990 / folklore).
- SUSPECTED ERROR IN THE SKETCH (reported, not fixed): the parenthetical 'knowing the message and signature reveals nothing useful about the key' is a secrecy statement, which is not what one-wayness of signing means and is not the argument. The real argument builds a OWF from $\KeyGen$'s randomness (or from $(\sk, m) \mapsto \Sign(\sk,m)$ for a fixed $m$) and inverts it to forge.
- Conclusion node `[[hash-function]]` again conflates OWF with CRHF.
