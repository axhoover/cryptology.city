---
type: reduction
status: draft
title: "Multi-signatures with proofs of possession ⇒ Multi-signatures in the KOSK model"
aliases: []
id: red-multi-signature-pop-to-multi-signature-kosk
kind: implication
hypotheses: [multi-signature-pop]
conclusion: multi-signature-kosk
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction drops the proof-of-possession algorithms, and the reduction runs any KOSK forger as an oracle, registering each of its keys with a proof it computes from the key's coins."
---

# Multi-signatures with proofs of possession ⇒ Multi-signatures in the KOSK model

## Statement

If a [[multi-signature|multi-signature scheme]] with algorithms $(\PopProve, \PopVrfy)$ is unforgeable in the [[multi-signature#proof-of-possession-model|proof-of-possession model]], the scheme without them is unforgeable in the [[multi-signature#knowledge-of-secret-key-model|knowledge-of-secret-key model]], with the same advantage — folklore.

## Sketch

On a registration $\rho$ of the KOSK forger, the POP-model adversary computes $(\sk, \pk) = \KeyGen(\pp; \rho)$ and $\pi = \PopProve(\pp, \sk, \pk)$ and registers $(\pk, \pi)$, which $\PopVrfy$ accepts by correctness; it forwards the signing sessions and the forgery unchanged.
