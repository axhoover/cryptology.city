---
type: reduction
status: stub
title: "Unkeyed DEPIR ⇒ DEPIR"
aliases: []
id: red-unkeyed-depir-to-depir
kind: implication
hypotheses: [unkeyed-depir]
conclusion: depir
class: unstated
model: standard
source: folklore
security-loss: ""
---

# Unkeyed DEPIR ⇒ DEPIR

[[doubly-efficient-pir#unkeyed-depir|Unkeyed DEPIR]] implies [[doubly-efficient-pir|DEPIR]].

## Statement

Migrated verbatim from [[doubly-efficient-pir]] § Doubly-efficient PIR:

> The three main variants of DEPIR are: secret-key, public-key, and unkeyed. Note that any unkeyed DEPIR is trivially a PK-DEPIR which is trivially an SK-DEPIR. The latter keyed variants of DEPIR were introduced by [[BIPW17 - Can We Access a Database Both Locally and Privately|BIPW17]].

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- NODE COLLAPSE: unkeyed-depir has no page and pk-depir is an ALIAS of content/Primitives/doubly-efficient-pir.md, so hypothesis and conclusion resolve to the same slug — this edge becomes a self-loop.
- 'trivially' is asserted with no argument and no citation; BIPW17 in the same sentence covers only the introduction of the keyed variants.
- COMPOSITE CHAIN in one sentence: unkeyed => PK-DEPIR => SK-DEPIR. Must be split into two reductions.
- None of the three variants has its own page; DEPIR, SK-DEPIR and PK-DEPIR are all aliases of this single page, so all three nodes collapse to one slug in the current wiki.
- 'trivially' asserted with no argument and no citation (the BIPW17 citation in the same sentence covers only the introduction of the keyed variants).
