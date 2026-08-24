---
type: reduction
status: stub
title: "interactive protocol + ROM ⇒ SNARK"
aliases: []
id: red-interactive-protocol-and-rom-to-snark
kind: implication
hypotheses: [interactive-protocol, rom]
conclusion: snark
class: unstated
model: rom
source: folklore
security-loss: ""
---

# interactive protocol + ROM ⇒ SNARK

[[interactive-protocol|interactive protocol]] together with [[random-oracle-model|ROM]] implies [[succinct-argument|SNARK]].

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

- Third of the three conclusions bundled at line 22 ('and succinct arguments').
- Uncited; succinct arguments not wikilinked although content/Primitives/succinct-argument.md exists.
- In direct tension with the KRS25 result at line 38, which shows FS applied to a succinct interactive argument (GKR) is broken when instantiated — the page states the application and its refutation without cross-referencing them.
