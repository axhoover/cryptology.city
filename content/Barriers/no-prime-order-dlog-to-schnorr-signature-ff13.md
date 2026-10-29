---
type: barrier
status: draft
title: "No single-instance reduction from DLOG to Schnorr signatures in the non-programmable ROM"
aliases: []
id: bar-prime-order-dlog-to-schnorr-signature-ff13
hypotheses: [prime-order-dlog]
conclusion: schnorr-signature
class: unstated
consequences:
  - kind: contradiction
    target: ""
    class: unstated
strength: conditional
conditional-on: [omdl]
circumvented-by:
  - red-dlog-and-rom-to-schnorr-signatures-sch91
  - red-prime-order-dlog-to-schnorr-signature-fps20
source:
  - "[[FF13 - Limitations of the Meta-reduction Technique The Case of Schnorr Signatures|FF13]]"
rationale:
  class: "FF13 rule out single-instance reductions, which may compute arbitrarily but reset a single forger instance, and the vocabulary has no such class."
  strength: "FF13's meta-reduction yields an OMDL solver, so the barrier rests on OMDL being hard."
---

# No single-instance reduction from DLOG to Schnorr signatures in the non-programmable ROM

## Statement

If [[discrete-logarithm#one-more-discrete-logarithm|OMDL]] is hard, no single-instance reduction proves the unforgeability of [[digital-signature#schnorr-signatures|Schnorr signatures]] from [[discrete-logarithm#dlog-in-prime-order-groups|DLOG]] in the non-programmable random-oracle model, in which the random oracle is external: the reduction may observe the forger's queries but cannot program the answers — [[FF13 - Limitations of the Meta-reduction Technique The Case of Schnorr Signatures|FF13]]. A single-instance reduction may perform arbitrary computation but runs only one instance of the forger, which it may reset.

## Notes

- A meta-reduction ruling out reductions that run several forger instances would itself yield an attack on the strong unforgeability of Schnorr signatures, a meta-meta-reduction, so the technique is unlikely to extend beyond single-instance reductions — [[FF13 - Limitations of the Meta-reduction Technique The Case of Schnorr Signatures|FF13]].
- Every generic reduction from DLOG to Schnorr signatures in the non-programmable random-oracle model is ruled out unless DLOG is easy, without OMDL — [[FJS19 - On Tight Security Proofs for Schnorr Signatures|FJS19]].
- The forking-lemma reduction programs the random oracle, which is outside the non-programmable model ([[dlog-and-rom-to-schnorr-signatures-sch91|DLOG ⇒ Schnorr signatures]]) — [[PS96 - Security Proofs for Signature Schemes|PS96]].
