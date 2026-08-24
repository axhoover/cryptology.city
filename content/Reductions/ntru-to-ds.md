---
type: reduction
status: stub
title: "NTRU ⇒ DS"
aliases: []
id: red-ntru-to-ds
kind: implication
hypotheses: [ntru]
conclusion: ds
class: unstated
model: rom
source: folklore
security-loss: ""
---

# NTRU ⇒ DS

[[ntru|NTRU]] implies [[digital-signature|DS]].

## Statement

Migrated verbatim from [[digital-signature]] § Lattice-based signatures:

> - **Falcon**: based on NTRU lattices; smaller signatures than Dilithium ($\sim 666$ bytes) but more complex to implement securely

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- No citation at all (Falcon spec / GPV-over-NTRU has no reference page).
- `[[ntru]]` exists as an assumption page but is not wikilinked.
- Concrete size claim ($\sim 666$ bytes) uncited.
- Model unstated on the page; Falcon's security is in the ROM (hash-and-sign), recorded here as 'rom' by inference — low certainty.
