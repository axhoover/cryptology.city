---
type: reduction
status: draft
title: "OMDL ⇒ MuSig2"
aliases: []
id: red-omdl-to-musig2-nrs21
kind: implication
hypotheses: [omdl]
conclusion: musig2
class: fully-black-box
model: rom
source:
  - "[[NRS21 - MuSig2 Simple Two-Round Schnorr Multi-signatures|NRS21]]"
security-loss: ""
rationale:
  class: "The scheme is fixed, and the random-oracle proof answers signing sessions with its discrete-logarithm oracle and runs the forger only as an oracle, forking it."
  model: "The reduction programs the random oracles and rewinds the forger."
---

# OMDL ⇒ MuSig2

## Statement

[[multi-signature#musig2|MuSig2]] is a two-round Schnorr multi-signature with key aggregation whose signatures are [[digital-signature#schnorr-signatures|Schnorr signatures]], with the key included in the hash, under the aggregate key. With $\nu = 4$ nonces per signer it is unforgeable in the plain public-key model, against concurrent signing sessions, in the [[random-oracle-model|random-oracle model]] if an algebraic variant of [[discrete-logarithm#one-more-discrete-logarithm|OMDL]], implied by OMDL, is hard — [[NRS21 - MuSig2 Simple Two-Round Schnorr Multi-signatures|NRS21]]. The more efficient variant with $\nu = 2$ is proved secure under the same assumption in the combination of the [[algebraic-group-model|algebraic group model]] and the random-oracle model — [[NRS21 - MuSig2 Simple Two-Round Schnorr Multi-signatures|NRS21]].

## Notes

- Signing takes two rounds, of which the first can be run before the message is known, and each signer's cost is close to that of a plain Schnorr signature — [[NRS21 - MuSig2 Simple Two-Round Schnorr Multi-signatures|NRS21]].
- Two-round MuSig, with a single nonce per signer, has no algebraic reduction from DLOG or OMDL if OMDL is hard ([[no-omdl-to-two-round-musig-def19|barrier]]) — [[DEF+19 - On the Security of Two-Round Multi-Signatures|DEF+19]].
