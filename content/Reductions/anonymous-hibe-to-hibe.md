---
type: reduction
status: draft
title: "Anonymous HIBE ⇒ HIBE"
aliases: []
id: red-anonymous-hibe-to-hibe
kind: implication
hypotheses: [anonymous-hibe]
conclusion: hibe
class: fully-black-box
model: standard
source: folklore
security-loss: ""
---

# Anonymous HIBE ⇒ HIBE

[[hierarchical-identity-based-encryption#anonymous-hibe|Anonymous HIBE]] implies [[hierarchical-identity-based-encryption|HIBE]].

## Statement

An [[hierarchical-identity-based-encryption#anonymous-hibe|anonymous HIBE]] is a [[hierarchical-identity-based-encryption|HIBE]] whose ciphertexts hide the recipient identity vector $\vec{\mathit{id}}$ in addition to the payload. The scheme is unchanged, so every anonymous HIBE is a HIBE — folklore.

## Sketch

The construction is the identity. Anonymity is defined on top of payload indistinguishability, so a HIBE adversary is forwarded unchanged to the anonymous HIBE game.

## Notes

`class: fully-black-box`: the construction is the identity and the reduction forwards the adversary unchanged; both are fixed and oracle-only.

- `anonymous-hibe` has no page; it resolves as a variant (section anchor) of [[hierarchical-identity-based-encryption]].
