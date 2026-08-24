---
type: reduction
status: stub
title: "$k$-out-of-$n$ OT ⇔ cPIR"
aliases: []
id: red-k-out-of-n-ot-to-cpir
kind: equivalence
hypotheses: [one-out-of-n-ot]
conclusion: cpir
class: unstated
model: standard
source: folklore
security-loss: ""
---

# $k$-out-of-$n$ OT ⇔ cPIR

[[oblivious-transfer#k-out-of-n-ot|$k$-out-of-$n$ OT]] is equivalent to [[single-server-private-information-retrieval|cPIR]].

## Statement

Migrated verbatim from [[oblivious-transfer]] § $k$-out-of-$n$ OT:

> The 1-out-of-$n$ variant is equivalent to single-server [[single-server-private-information-retrieval|PIR]] with data privacy ([[single-server-private-information-retrieval#Symmetric private information retrieval (Single-server)|SPIR]]).

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- No citation for an equivalence claim.
- Conclusion is really SPIR (single-server PIR _with data privacy_), a subsection of the PIR page, not plain PIR — the two wikilinks in the sentence point at the same page with and without an anchor, so the migrated object identity is ambiguous.
- Note content/Primitives/symmetric-private-information-retrieval-multi-server.md exists separately; this bullet points at the single-server anchor instead.
- Equivalence should be migrated as two reductions.
