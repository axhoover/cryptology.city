---
type: reduction
status: stub
title: "RP ⊆ BPP"
aliases: []
id: red-rp-to-bpp
kind: inclusion
hypotheses: [rp]
conclusion: bpp
class: free
model: standard
source: folklore
security-loss: ""
---

# RP ⊆ BPP

[[randomized-polynomial-time|RP]] is contained in [[bounded-error-probabilistic-polynomial-time|BPP]].

## Statement

Migrated verbatim from [[bounded-error-probabilistic-polynomial-time]] § Known relationships:

> - $\classP \subseteq \classZPP \subseteq \classRP \subseteq \classBPP$: deterministic algorithms are a special case of Las Vegas, which are a special case of one-sided error, which are a special case of two-sided error.

Migrated verbatim from [[randomized-polynomial-time]] § Known relationships:

> - $\classP \subseteq \classRP \subseteq \classBPP$: RP is a "one-sided" restriction of BPP (which allows two-sided error).

Migrated verbatim from [[zero-error-probabilistic-polynomial-time]] § Known relationships:

> - $\classP \subseteq \classZPP \subseteq \classRP \subseteq \classBPP$.

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

- Uncited and unlabelled folklore.
- The single prose justification on the bullet covers all three links at once, so no per-link justification survives the split.
- As literally stated the containment needs amplification: RP's 1/2 acceptance must be boosted past BPP's 2/3 threshold, which the one-line gloss elides.
- Duplicates the RP-to-BPP sub-edge of record Complexity/randomized-polynomial-time:23; migration must dedupe.
- Uncited; the amplification step is elided here as it is there.
