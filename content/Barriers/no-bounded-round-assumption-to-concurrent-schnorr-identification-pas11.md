---
type: barrier
status: draft
title: "No fully-black-box reduction from bounded-round assumptions to Schnorr identification under concurrent attack"
aliases: []
id: bar-bounded-round-assumption-to-concurrent-schnorr-identification-pas11
hypotheses: [bounded-round-assumption]
conclusion: concurrent-schnorr-identification
class: fully-black-box
consequences:
  - kind: contradiction
    target: ""
    class: fully-black-box
strength: unconditional
source:
  - "[[Pas11 - Limits of Provable Security from Standard Assumptions|Pas11]]"
rationale:
  class: "Pas11 rule out every reduction that uses the impersonator only as an oracle, which contains the fully-black-box reductions."
  strength: "The theorem concludes that the assumption is false, and no further assumption is used."
---

# No fully-black-box reduction from bounded-round assumptions to Schnorr identification under concurrent attack

## Statement

If a Turing reduction, which uses the adversary only as an oracle, proves the [[identification-scheme#schnorr-identification-protocol|Schnorr identification protocol]] sequentially witness hiding from an intractability assumption whose possibly unbounded challenger interacts with the adversary in an a priori fixed polynomial number of rounds ([[falsifiable-assumptions#bounded-round-assumptions|bounded-round assumptions]]), then the assumption is false — [[Pas11 - Limits of Provable Security from Standard Assumptions|Pas11]]. The theorem rules out such reductions for every constant-round, sequentially witness-hiding, special-sound protocol for a unique-witness relation, and the Schnorr protocol is one. Security against impersonation under [[identification-scheme#schnorr-identification-under-concurrent-attack|concurrent attack]] implies sequential witness hiding, since an adversary that computes the witness after sequential sessions can then run the honest prover — standard; so such reductions to it are ruled out too.

## Notes

- Under [[discrete-logarithm#one-more-discrete-logarithm|OMDL]], which is not a bounded-round assumption, the protocol is secure under concurrent attack ([[omdl-to-concurrent-schnorr-identification-bp02|OMDL ⇒ Schnorr identification under concurrent attack]]) — [[BP02 - GQ and Schnorr Identification Schemes Proofs of Security against Impersonation under Active and Concurrent Attacks|BP02]].
- Security against passive impersonation holds under DLOG, a 2-round assumption ([[dlog-to-schnorr-signatures-sch91|DLOG ⇒ Schnorr identification protocol]]) — [[Sch91 - Efficient signature generation by smart cards|Sch91]].
