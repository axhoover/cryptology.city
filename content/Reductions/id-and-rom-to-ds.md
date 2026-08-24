---
type: reduction
status: stub
title: "ID + ROM ⇒ DS"
aliases: []
id: red-id-and-rom-to-ds
kind: implication
hypotheses: [identification-scheme, rom]
conclusion: ds
class: unstated
model: rom
source: folklore
security-loss: ""
---

# ID + ROM ⇒ DS

[[identification-scheme|ID]] together with [[random-oracle-model|ROM]] implies [[digital-signature|DS]].

## Statement

Migrated verbatim from [[fiat-shamir-heuristic]] § Description:

> The transform is particularly useful for constructing [[digital-signature|digital signatures]] from identification schemes (the original application of Fiat and Shamir), and for building non-interactive zero-knowledge proofs and succinct arguments.

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- THREE CONCLUSIONS IN ONE SENTENCE (digital signatures from identification schemes; NIZK; succinct arguments). Recorded as three separate edges on line 22 — they are disjoint applications, not a conjunction, and must not be collapsed.
- No citation for any of the three (FS86 for signatures, and nothing for the NIZK/succinct-argument applications).
- 'identification scheme' has no page and no alias in the wiki.
- 'is particularly useful for constructing' is a usage phrase, not a security statement — no soundness/unforgeability notion is attached.
