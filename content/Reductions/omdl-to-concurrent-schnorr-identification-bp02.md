---
type: reduction
status: draft
title: "OMDL ⇒ Schnorr identification under concurrent attack"
aliases: []
id: red-omdl-to-concurrent-schnorr-identification-bp02
kind: implication
hypotheses: [omdl]
conclusion: concurrent-schnorr-identification
class: fully-black-box
model: standard
source:
  - "[[BP02 - GQ and Schnorr Identification Schemes Proofs of Security against Impersonation under Active and Concurrent Attacks|BP02]]"
security-loss: "impersonation advantage $\\varepsilon$ yields OMDL advantage at least $(\\varepsilon - 1/|C|)^2$"
rationale:
  class: "The protocol is fixed and uses only the group operation, and the reduction answers prover sessions with its discrete-logarithm oracle and runs the impersonator only as an oracle, rewinding it to extract the secret key."
---

# OMDL ⇒ Schnorr identification under concurrent attack

## Statement

The [[identification-scheme#schnorr-identification-under-concurrent-attack|Schnorr identification protocol]] is secure against impersonation under active and concurrent attack if [[discrete-logarithm#one-more-discrete-logarithm|OMDL]] is hard for the prime-order group generator. In such an attack the adversary first runs arbitrarily many interleaved sessions, acting as the verifier, with honest provers holding $x = \log_g X$, and then tries to make an honest verifier accept. For every efficient impersonator with advantage $\varepsilon$ there is an efficient OMDL adversary with advantage at least $(\varepsilon - 1/|C|)^2$, where $C$ is the challenge space — [[BP02 - GQ and Schnorr Identification Schemes Proofs of Security against Impersonation under Active and Concurrent Attacks|BP02]].

## Sketch

The reduction takes $X$ and the session commitments $R_1, \ldots, R_n$ from the OMDL challenges, and answers each session challenge $e_i$ with $z_i = \log_g(R_i X^{e_i})$ from the DL oracle. It then rewinds the impersonation phase to get two accepting transcripts with a common commitment (Reset Lemma), which give $x = \log_g X$, and outputs $\log_g R_i = z_i - e_i x$ for every $i$: $n + 1$ logarithms from $n$ oracle queries.

## Notes

- Under plain [[discrete-logarithm#dlog-in-prime-order-groups|DLOG]], the protocol is secure against passive impersonation ([[dlog-to-schnorr-signatures-sch91|DLOG ⇒ Schnorr identification protocol]]) — [[Sch91 - Efficient signature generation by smart cards|Sch91]].
- No Turing reduction proves the protocol secure under concurrent attack from an assumption with an a priori bounded number of rounds unless that assumption is false ([[no-bounded-round-assumption-to-concurrent-schnorr-identification-pas11|barrier]]) — [[Pas11 - Limits of Provable Security from Standard Assumptions|Pas11]].
- The [[identification-scheme#okamoto-identification-protocol|Okamoto identification protocol]] is secure against active impersonation under plain DLOG ([[prime-order-dlog-to-okamoto-identification-protocol-oka92|DLOG ⇒ Okamoto identification protocol]]) — [[Oka92 - Provably Secure and Practical Identification Schemes and Corresponding Signature Schemes|Oka92]].
