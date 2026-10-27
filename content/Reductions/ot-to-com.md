---
type: reduction
status: draft
title: "Malicious OT ⇒ COM (Kilian)"
aliases: []
id: red-ot-to-com
kind: implication
hypotheses: [malicious-ot-security]
conclusion: com
class: fully-black-box
model: standard
source:
  - "[[Kil88 - Founding cryptography on oblivious transfer|Kil88]]"
  - "[[Can00 - Security and Composition of Multiparty Cryptographic Protocols|Can00]]"
security-loss: "statistical in the OT-hybrid model: hiding error at most $\\secpar \\cdot 2^{-n}$ and binding error $2^{-\\secpar}$; a real OT protocol adds its simulation advantage once per transfer, $n\\secpar$ transfers in all"
rationale:
  class: "The construction invokes OT only as an ideal functionality, hiding and binding hold statistically in the OT-hybrid model, and against a maliciously secure OT protocol the reduction runs any adversary against the composed commitment as an oracle to distinguish real from ideal OT."
---

# Malicious OT ⇒ COM (Kilian)

## Statement

Kilian's commitment, which is statistically hiding and statistically binding in the OT-hybrid model ([[ideal-ot-to-com-kil88|ideal OT ⇒ COM]]) — [[Kil88 - Founding cryptography on oblivious transfer|Kil88]], is a computationally hiding and computationally binding bit [[commitment-scheme|commitment]] when each call to the [[oblivious-transfer#ideal-ot-functionality|ideal OT functionality]] is run as a sequential execution of an OT protocol with [[oblivious-transfer#malicious-security|malicious security]], since sequential composition lets each ideal call be replaced by a real execution in turn — [[Can00 - Security and Composition of Multiparty Cryptographic Protocols|Can00]].

## Sketch

Replace the $n\secpar$ ideal calls by real executions one at a time. A corrupted receiver in the hiding game, or a corrupted committer in the binding game, is a malicious party of each OT execution, so each replacement changes the probability that the adversary wins by at most the OT protocol's simulation advantage, and the hybrid-model bounds hold against the resulting efficient adversary — standard.

## Notes

- Binding uses that a deviating committer cannot learn which bits arrived, and hiding that a deviating receiver cannot learn the bits it missed, so the argument needs malicious security; the semi-honest sender- and receiver-privacy games say nothing about deviating parties — standard. Semi-honest OT gives maliciously secure OT ([[ot-to-malicious-ot-security-hai08|OT ⇒ malicious OT]]) — [[Hai08 - Semi-honest to Malicious Oblivious Transfer - The Black-Box Way|Hai08]].
- The commitment is the first step of Kilian's proof that OT is complete for secure computation ([[ot-to-mpc-kil88|ideal OT ⇒ 2PC]]) — [[Kil88 - Founding cryptography on oblivious transfer|Kil88]].
