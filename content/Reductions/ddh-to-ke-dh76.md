---
type: reduction
status: draft
title: "DDH ⇒ KE"
aliases: []
id: red-ddh-to-ke-dh76
kind: implication
hypotheses: [ddh]
conclusion: ke
class: fully-black-box
model: standard
source:
  - "[[DH76 - New Directions in Cryptography|DH76]]"
security-loss: "tight: the DDH instance is forwarded unchanged"
---

# DDH ⇒ KE

[[decisional-diffie-hellman|DDH]] implies [[key-exchange|KE]].

## Statement

The Diffie–Hellman protocol over $(\GG, g, p) \gets \GrGen(1^\secpar)$: $A$ sends $X = g^a$ and $B$ sends $Y = g^b$ for $a, b \getsr [p]$; both output $k = g^{ab}$. If [[decisional-diffie-hellman|DDH]] is hard for $\GrGen$, then $k$ is computationally indistinguishable from uniform in $\GG$ given the transcript $(X, Y)$ (the DDH definition restated), so the protocol is a [[key-exchange|KE]] secure against passive adversaries — [[DH76 - New Directions in Cryptography|DH76]].

## Sketch

A distinguisher between $(g^a, g^b, g^{ab})$ and $(g^a, g^b, u)$ for $u \getsr \GG$ is verbatim a DDH distinguisher.

## Notes

`class: fully-black-box`: The construction uses only the group generator and group operations. Against a passive eavesdropper the pair (transcript, key) is a DDH tuple, so the fixed reduction forwards the DDH challenge $(X, Y, Z)$ as transcript $(X, Y)$ with candidate key $Z$ and runs the eavesdropper once as an oracle.

- DH76 predates the DDH assumption; the citation attaches to the protocol, and the DDH-based security statement is a later formalization, immediate from the definition.
