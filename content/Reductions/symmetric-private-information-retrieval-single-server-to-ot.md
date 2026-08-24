---
type: reduction
status: stub
title: "Symmetric private information retrieval (Single-server) ⇔ OT"
aliases: []
id: red-symmetric-private-information-retrieval-single-server-to-ot
kind: equivalence
hypotheses: [single-server-symmetric-pir]
conclusion: ot
class: unstated
model: standard
source: folklore
security-loss: ""
---

# Symmetric private information retrieval (Single-server) ⇔ OT

[[single-server-private-information-retrieval#symmetric-private-information-retrieval-single-server|Symmetric private information retrieval (Single-server)]] is equivalent to [[oblivious-transfer|OT]].

## Statement

Migrated verbatim from [[single-server-private-information-retrieval]]:

> Single-server SPIR is equivalent to $1$-out-of-$n$ [[OT]] with an additional efficiency requirement.

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- MISSING CITATION for an equivalence claim.
- 'with an additional efficiency requirement' means the two objects are NOT literally equivalent (SPIR = OT with sublinear communication); the qualifier makes the edge un-typeable without a quantitative field.
- `[[OT]]` is a bare alias wikilink rather than the `[[oblivious-transfer|OT]]` form used elsewhere on the page.
