---
type: reduction
status: stub
title: "Differing-inputs obfuscation (diO) ⇔ iO"
aliases: []
id: red-differing-inputs-obfuscation-dio-to-io
kind: equivalence
hypotheses: [differing-inputs-obfuscation]
conclusion: io
class: unstated
model: standard
source: folklore
security-loss: ""
---

# Differing-inputs obfuscation (diO) ⇔ iO

[[indistinguishability-obfuscation#differing-inputs-obfuscation-dio|Differing-inputs obfuscation (diO)]] is equivalent to [[indistinguishability-obfuscation|iO]].

## Statement

Migrated verbatim from [[indistinguishability-obfuscation]]:

> An intermediate notion between iO and VBB, which requires indistinguishability for pairs of circuits that are hard to distinguish on any input. Known to be equivalent to iO under certain conditions.

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- 'Known to be equivalent to iO under certain conditions' - vague and uncited; the conditions are not stated, so the relation cannot be typed.
- No page for diO.
