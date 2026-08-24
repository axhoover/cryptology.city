---
type: reduction
status: draft
title: "Zero-bit PRC ⇒ Watermarking"
aliases: []
id: red-zero-bit-prc-to-watermarking-cg24
kind: implication
hypotheses: [zero-bit-prc]
conclusion: language-model-watermarking
class: unstated
model: standard
source:
  - "[[CG24 - Pseudorandom Error-Correcting Codes|CG24]]"
security-loss: ""
---

# Zero-bit PRC ⇒ Watermarking

[[pseudorandom-error-correcting-code#zero-bit-prc|Zero-bit PRC]] implies [[language-model-watermarking|Watermarking]].

## Statement

Migrated verbatim from [[pseudorandom-error-correcting-code]] § Other results:

> - Zero-bit PRCs give a watermarking scheme for language model outputs that is undetectable (codewords look like random tokens) and robust to paraphrasing attacks — [[CG24 - Pseudorandom Error-Correcting Codes|CG24]]

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Conclusion object ('watermarking scheme for language model outputs') has no page; robustness-to-paraphrasing is a property claim bundled into the same bullet.
- Duplicates the Variations bullet on line 53.
