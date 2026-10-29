---
type: reduction
status: draft
title: "Multi-signatures in the plain public-key model ⇒ Multi-signatures in the KOSK model"
aliases: []
id: red-multi-signature-to-multi-signature-kosk
kind: implication
hypotheses: [multi-signature]
conclusion: multi-signature-kosk
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on schemes, and the reduction runs any KOSK forger as an oracle, answering its registrations itself."
---

# Multi-signatures in the plain public-key model ⇒ Multi-signatures in the KOSK model

## Statement

A [[multi-signature|multi-signature scheme]] unforgeable in the plain public-key model is unforgeable in the [[multi-signature#knowledge-of-secret-key-model|knowledge-of-secret-key model]], with the same advantage — folklore.

## Sketch

A plain-model adversary runs the KOSK forger, answers each registration $\rho$ itself by computing $\KeyGen(\pp; \rho)$ and recording the key, forwards the signing sessions on registered key multisets, and outputs the forgery.
