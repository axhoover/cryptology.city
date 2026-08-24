---
type: reduction
status: stub
title: "LPN ⇒ PKE"
aliases: []
id: red-lpn-to-pke
kind: implication
hypotheses: [lpn]
conclusion: pke
class: unstated
model: standard
source: folklore
security-loss: ""
---

# LPN ⇒ PKE

[[learning-parity-with-noise|LPN]] implies [[public-key-encryption|PKE]].

## Statement

Migrated verbatim from [[public-key-encryption]] § Other results:

> - PKE can be built assuming [[learning-parity-with-noise#Noise Level|Mid-noise LPN]]

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- NO citation (the standard source, Alekhnovich 2003, has no reference page in content/References).
- Hypothesis is an anchor into a subsection (`[[learning-parity-with-noise#Noise Level|Mid-noise LPN]]`) — the noise regime is part of the assumption's identity and needs to be a first-class parameter after migration.
