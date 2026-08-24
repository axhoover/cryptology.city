---
type: reduction
status: stub
title: "BPP ⊆ P/poly"
aliases: []
id: red-bpp-to-p-poly
kind: inclusion
hypotheses: [bpp]
conclusion: ppoly
class: free
model: standard
source: folklore
security-loss: ""
---

# BPP ⊆ P/poly

[[bounded-error-probabilistic-polynomial-time|BPP]] is contained in [[p-poly|P/poly]].

## Statement

Migrated verbatim from [[bounded-error-probabilistic-polynomial-time]] § Known relationships:

> - $\classBPP \subseteq \classPpoly$: for any BPP machine, a majority-vote argument shows that a fixed random string works for all inputs of a given length; that string serves as the advice — TODO citation.

Migrated verbatim from [[p-poly]] § Known relationships:

> - $\classBPP \subseteq \classPpoly$: under the standard derandomization assumption (that $\mathbf{E}$ requires exponential-size circuits), $\classBPP = \classP$. Unconditionally, by a probabilistic argument, BPP $\subseteq$ P/poly — the advice string encodes a fixed set of random coins that works for all inputs of a given length — TODO citation.

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

`class: free` because a containment between complexity classes is proved
by any argument at all; the reduction-class axis does not discriminate
here, and `unstated` would wrongly suggest the information is missing.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Explicit 'TODO citation' on the page: no source (Adleman 1978 is the standard one).
- Duplicates content/Complexity/p-poly.md:25, which states the same inclusion with a different (also TODO-marked) justification.
- Explicit 'TODO citation' (Adleman 1978).
- Duplicates bounded-error-probabilistic-polynomial-time.md:25, which gives the same inclusion with a different justification and also a TODO citation.
