---
type: reduction
status: draft
title: "PRP ⇒ PRF"
aliases: []
id: red-prp-to-prf
kind: implication
hypotheses: [prp]
conclusion: prf
class: unstated
model: standard
source: folklore
security-loss: ""
---

# PRP ⇒ PRF

[[pseudorandom-permutation|PRP]] implies [[pseudorandom-function|PRF]].

## Statement

Migrated verbatim from [[pseudorandom-permutation]] § Other results:

> - PRPs imply the existence of large-domain [[pseudorandom-function|PRFs]] (and
>   in fact these are invertible PRFs) — [[switching-lemma|Switching Lemma]]

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Source is a Folklore wiki page (`[[switching-lemma]]`), not a reference citation key.
- The bullet packs a second claim in the parenthetical ('and in fact these are invertible PRFs') — that is the same statement as pseudorandom-function.md line 105 and should be a separate record.
- 'large-domain' qualifier is on the CONCLUSION here but on the hypothesis in the PRF page's version of the same fact — one of the two phrasings is imprecise (the switching lemma needs the PERMUTATION's domain to be large).
