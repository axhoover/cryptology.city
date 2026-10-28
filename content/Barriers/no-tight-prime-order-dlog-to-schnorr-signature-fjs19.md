---
type: barrier
status: draft
title: "No tight generic reduction from DLOG to Schnorr signatures"
aliases: []
id: bar-prime-order-dlog-to-schnorr-signature-fjs19
hypotheses: [prime-order-dlog]
conclusion: schnorr-signature
class: unstated
consequences:
  - kind: contradiction
    target: ""
    class: unstated
strength: conditional
conditional-on: [prime-order-dlog]
circumvented-by:
  - red-dlog-and-rom-to-schnorr-signatures-sch91
  - red-prime-order-dlog-to-schnorr-signature-fps20
source:
  - "[[FJS19 - On Tight Security Proofs for Schnorr Signatures|FJS19]]"
rationale:
  class: "FJS19 rule out tight generic reductions, those independent of the group's representation, and the vocabulary has neither a generic nor a tightness class."
  strength: "The meta-reduction turns any such reduction into a DLOG solver, so the barrier rules a reduction out exactly when DLOG is hard; no further assumption is used."
---

# No tight generic reduction from DLOG to Schnorr signatures

## Statement

There is no tight generic reduction from [[discrete-logarithm#dlog-in-prime-order-groups|DLOG]] to the security of [[digital-signature#schnorr-signatures|Schnorr signatures]] in the [[random-oracle-model|random-oracle model]] unless DLOG is easy, and the same holds for any natural non-interactive computational problem defined over the group, such as CDH or DDH. A reduction is generic if it does not depend on the representation of the group elements. The meta-reduction turns any such reduction into an efficient solver for the problem, without OMDL or any other further assumption — [[FJS19 - On Tight Security Proofs for Schnorr Signatures|FJS19]].

## Notes

- The same technique rules out every generic reduction, tight or not, from such problems to Schnorr signatures in the non-programmable random-oracle model — [[FJS19 - On Tight Security Proofs for Schnorr Signatures|FJS19]].
- Unlike the bounds of [[PV05 - Discrete-Log-Based Signatures May Not Be Equivalent to Discrete Log|PV05]] and [[Seu12 - On the Exact Security of Schnorr-Type Signatures in the Random Oracle Model|Seu12]] ([[no-tight-prime-order-dlog-to-schnorr-signature-seu12|barrier]]), this result does not rest on [[discrete-logarithm#one-more-discrete-logarithm|OMDL]] — [[FJS19 - On Tight Security Proofs for Schnorr Signatures|FJS19]].
- The journal version corrects the proof of the conference version [[FJS14 - On Tight Security Proofs for Schnorr Signatures|FJS14]] and states the result for non-interactive problems — [[FJS19 - On Tight Security Proofs for Schnorr Signatures|FJS19]].
- A tight reduction from DLOG exists for algebraic forgers in the algebraic group model ([[prime-order-dlog-to-schnorr-signature-fps20|DLOG ⇒ Schnorr signatures (tight, AGM)]]) — [[FPS20 - Blind Schnorr Signatures and Signed ElGamal Encryption in the Algebraic Group Model|FPS20]].
