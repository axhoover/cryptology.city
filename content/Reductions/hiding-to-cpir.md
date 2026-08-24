---
type: reduction
status: stub
title: "Φ-Hiding ⇒ cPIR"
aliases: []
id: red-hiding-to-cpir
kind: implication
hypotheses: [phi-hiding]
conclusion: cpir
class: unstated
model: standard
source: folklore
security-loss: ""
---

# Φ-Hiding ⇒ cPIR

[[rsa-assumption#-hiding|Φ-Hiding]] implies [[single-server-private-information-retrieval|cPIR]].

## Statement

Migrated verbatim from [[rsa-assumption]] § Φ-Hiding:

> The **Φ-hiding assumption** states that, given $n$ and a prime $e$, it is hard to determine whether $e \mid \phi(n)$. This is related to RSA hardness and is used in some private information retrieval constructions.

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- No citation (Cachin-Micali-Stadler).
- content/Primitives/single-server-private-information-retrieval.md exists but "private information retrieval" is plain text with no wikilink; CLAUDE.md also names \PIR as a required macro.
- "some private information retrieval constructions" leaves the target class vague.
