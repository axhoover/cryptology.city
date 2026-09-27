---
type: reduction
status: draft
title: "Unkeyed DEPIR ⇒ PK-DEPIR"
aliases: []
id: red-unkeyed-depir-to-depir
kind: implication
hypotheses: [unkeyed-depir]
conclusion: pk-depir
class: fully-black-box
model: standard
source: folklore
security-loss: ""
---

# Unkeyed DEPIR ⇒ PK-DEPIR

[[doubly-efficient-pir#unkeyed-depir|Unkeyed DEPIR]] implies [[doubly-efficient-pir#public-key-depir|public-key DEPIR]].

## Statement

The $\Setup$ of an unkeyed [[doubly-efficient-pir#unkeyed-depir|DEPIR]] scheme outputs $k = \bot$, so it is a [[doubly-efficient-pir#public-key-depir|public-key DEPIR]] scheme verbatim: with $k = \bot$, the public-key privacy game is the unkeyed one — folklore.

## Notes

`class: fully-black-box`: The construction is the identity, so the hypothesis scheme is used only as an oracle, and any public-key-privacy adversary runs unchanged as an unkeyed-privacy adversary, with $k = \bot$.

- The further step PK-DEPIR ⇒ SK-DEPIR is [[pk-depir-to-sk-depir]].
