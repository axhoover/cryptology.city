---
type: reduction
status: stub
title: "ZKP ⇒ Hash function"
aliases: []
id: red-zkp-to-hash-function
kind: implication
hypotheses: [zkp]
conclusion: hash-function
class: unstated
model: standard
source: folklore
security-loss: ""
---

# ZKP ⇒ Hash function

[[zero-knowledge-proof|ZKP]] implies [[hash-function|Hash function]].

## Statement

Migrated verbatim from [[zero-knowledge-proof]] § Other results:

> - ZK proofs for NP imply OWF in the plain model — standard

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- FOLKLORE LABEL MISAPPLIED: this is an attributable theorem (Ostrovsky-Wigderson, OW93: non-trivial ZK implies one-way functions; also OW93/Ost91), not folklore. The CLAUDE.md folklore exception explicitly excludes results that have a canonical citation.
- The precise statement needs 'ZK proofs for a language outside BPP' (or hard-on-average), not 'ZK proofs for NP' — and the conclusion in OW93 is one-way functions only under the auxiliary-input/average-case-hardness refinement. Reported as a precision concern.
- Together with line 72 this asserts an equivalence OWF <=> ZK-for-NP that the page never states as such.
- Conclusion node is again hash-function.md (the OWF/CRHF conflation).
