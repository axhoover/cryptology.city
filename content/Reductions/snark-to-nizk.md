---
type: reduction
status: stub
title: "SNARK ⇒ NIZK"
aliases: []
id: red-snark-to-nizk
kind: implication
hypotheses: [snark]
conclusion: nizk
class: unstated
model: standard
source: folklore
security-loss: ""
---

# SNARK ⇒ NIZK

[[succinct-argument|SNARK]] implies [[non-interactive-zero-knowledge|NIZK]].

## Statement

Migrated verbatim from [[non-interactive-zero-knowledge]] § zk-SNARK:

> ## zk-SNARK
>
> A **Succinct Non-interactive ARgument of Knowledge (zk-SNARK)** is a NIZK argument with the additional properties that:
>
> - The proof $\pi$ is short (polylogarithmic in the circuit size)
> - Verification is fast (polylogarithmic in the statement size)
> - The prover has knowledge soundness (a witness can be extracted)
>
> See [[succinct-argument|SNARKs]] for more detail.

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Definitional containment (a zk-SNARK is a NIZK argument with extra properties) rather than a stated reduction; recorded because it is a Variations-section 'implies'.
- No citation for the succinctness/knowledge-soundness properties listed.
- SUSPECT: 'Verification is fast (polylogarithmic in the statement size)' - SNARK verification is polylogarithmic in the _circuit/witness_ size but necessarily at least linear in the statement length. Report only; do not fix.
