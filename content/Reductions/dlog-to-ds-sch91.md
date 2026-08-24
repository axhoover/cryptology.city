---
type: reduction
status: draft
title: "DLOG ⇒ DS"
aliases: []
id: red-dlog-to-ds-sch91
kind: implication
hypotheses: [dlog]
conclusion: ds
class: unstated
model: rom
source:
  - "[[Sch91 - Efficient signature generation by smart cards|Sch91]]"
  - "[[FS86 - How to Prove Yourself Practical Solutions to Identification and Signature Problems|FS86]]"
security-loss: ""
---

# DLOG ⇒ DS

[[discrete-logarithm|DLOG]] implies [[digital-signature|DS]].

## Statement

Migrated verbatim from [[digital-signature]] § Schnorr signatures:

> Schnorr signatures are **EUF-CMA secure** under the discrete logarithm assumption in the random oracle model — [[Sch91 - Efficient signature generation by smart cards|Sch91]], [[FS86 - How to Prove Yourself Practical Solutions to Identification and Signature Problems|FS86]].

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- CITATION DOES NOT SUPPORT THE CLAIM: neither Sch91 nor FS86 proves EUF-CMA security in the ROM; that proof is Pointcheval-Stern's forking lemma (PS96), which has no reference page here.
- `[[discrete-logarithm]]` and `[[random-oracle-model]]` both exist as pages but are named in bare prose without wikilinks.
