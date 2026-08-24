---
type: reduction
status: stub
title: "IBE ⇒ PKE"
aliases: []
id: red-ibe-to-pke
kind: implication
hypotheses: [ibe]
conclusion: pke
class: unstated
model: standard
source: folklore
security-loss: ""
---

# IBE ⇒ PKE

[[identity-based-encryption|IBE]] implies [[public-key-encryption|PKE]].

## Statement

Migrated verbatim from [[identity-based-encryption]] § Other results:

> - IBE implies [[public-key-encryption|PKE]]: set the public key to $\pp$ and the per-user public key to $\mathit{id}$; the KGC plays the role of a CA but without issuing certificates

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- No citation and no folklore label.
- SUSPECT: the sketch describes the KGC-as-CA analogy rather than the actual reduction (the standard IBE => PKE reduction sets pk = pp and sk = Extract(msk, id) for a fixed id). As written, the 'per-user public key is id' construction does not obviously yield a PKE key pair. Report only.
