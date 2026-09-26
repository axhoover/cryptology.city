---
type: reduction
status: draft
title: "Unkeyed DEPIR ⇒ DEPIR"
aliases: []
id: red-unkeyed-depir-to-depir
kind: implication
hypotheses: [unkeyed-depir]
conclusion: depir
class: fully-black-box
model: standard
source: folklore
security-loss: ""
---

# Unkeyed DEPIR ⇒ DEPIR

[[doubly-efficient-pir#unkeyed-depir|Unkeyed DEPIR]] implies [[doubly-efficient-pir|DEPIR]].

## Statement

The $\Setup$ of an unkeyed [[doubly-efficient-pir#unkeyed-depir|DEPIR]] scheme outputs $k = \bot$, so it is a public-key [[doubly-efficient-pir|DEPIR]] scheme verbatim, and a public-key DEPIR scheme is a secret-key DEPIR scheme, since a secret-key privacy adversary is a public-key privacy adversary that ignores $k$ — folklore.

## Notes

`class: fully-black-box`: The construction is the identity, so the hypothesis scheme is used only as an oracle, and any secret-key-privacy adversary runs unchanged as a public-key-privacy adversary.

- `depir`, `SK-DEPIR` and `PK-DEPIR` are aliases of `content/Primitives/doubly-efficient-pir.md` and `unkeyed-depir` is a variant anchor of the same page, so both endpoints resolve to one slug. The edge is a self-loop until the three notions have distinct nodes.
