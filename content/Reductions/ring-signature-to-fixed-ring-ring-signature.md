---
type: reduction
status: draft
title: "Ring signatures ⇒ Ring signatures with fixed-ring unforgeability"
aliases: []
id: red-ring-signature-to-fixed-ring-ring-signature
kind: implication
hypotheses: [ring-signature]
conclusion: fixed-ring-ring-signature
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on schemes, and the reduction runs any fixed-ring forger as an insider-corruption forger that corrupts no one and uses only the ring of all honest keys."
---

# Ring signatures ⇒ Ring signatures with fixed-ring unforgeability

## Statement

A [[ring-signature|ring signature scheme]] that is [[ring-signature#unforgeability-with-respect-to-insider-corruption|unforgeable with respect to insider corruption]] is [[ring-signature#fixed-ring-unforgeability|unforgeable against fixed-ring attacks]], with the same advantage, so a ring signature scheme, that is, one that is correct, [[ring-signature#anonymity-against-full-key-exposure|anonymous against full key exposure]] and unforgeable with respect to insider corruption in the sense of [[BKM06 - Ring Signatures Stronger Definitions, and Constructions Without Random Oracles|BKM06]], is a ring signature scheme with fixed-ring unforgeability, the scheme itself and so its correctness and anonymity being unchanged — folklore.
