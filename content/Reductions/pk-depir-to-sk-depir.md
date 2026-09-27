---
type: reduction
status: draft
title: "PK-DEPIR ⇒ SK-DEPIR"
aliases: []
id: red-pk-depir-to-sk-depir
kind: implication
hypotheses: [pk-depir]
conclusion: sk-depir
class: fully-black-box
model: standard
source: folklore
security-loss: ""
---

# PK-DEPIR ⇒ SK-DEPIR

[[doubly-efficient-pir#public-key-depir|Public-key DEPIR]] implies [[doubly-efficient-pir#secret-key-depir|secret-key DEPIR]].

## Statement

A [[doubly-efficient-pir#public-key-depir|public-key DEPIR]] scheme is a [[doubly-efficient-pir#secret-key-depir|secret-key DEPIR]] scheme verbatim: a secret-key privacy adversary is a many-query public-key privacy adversary that ignores $k$, and public-key privacy extends from one query to polynomially many by a hybrid argument — standard.

## Notes

`class: fully-black-box`: The construction is the identity, so the hypothesis scheme is used only as an oracle, and the hybrid reduction runs any secret-key-privacy adversary as an oracle, answering all but one of its queries itself from the public $k$.

- The step before it, unkeyed DEPIR ⇒ PK-DEPIR, is [[unkeyed-depir-to-depir]].
