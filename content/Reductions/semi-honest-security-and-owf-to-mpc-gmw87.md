---
type: reduction
status: draft
title: Semi-honest MPC + OWF ⇒ MPC (GMW compiler)
aliases:
  - GMW compiler
id: red-semi-honest-security-and-owf-to-mpc-gmw87
kind: implication
hypotheses: [semi-honest-security, owf]
conclusion: mpc
class: free
model: standard
source:
  - "[[GMW87 - How to play ANY mental game|GMW87]]"
security-loss: "polynomial"
rationale:
  class: "Each party proves in zero knowledge that its message is the protocol's next-message function applied to its committed input and coins, an NP statement about the semi-honest protocol's code."
---

# Semi-honest MPC + OWF ⇒ MPC (GMW compiler)

## Statement

If every functionality has a protocol secure against [[secure-multi-party-computation#privacy-semi-honest|semi-honest]] adversaries and [[hash-function#preimage-resistance-one-wayness|one-way functions]] exist, then every functionality has a protocol secure against [[secure-multi-party-computation#security-malicious|malicious]] adversaries corrupting any number of parties, with abort — [[GMW87 - How to play ANY mental game|GMW87]].

## Sketch

Each party commits to its input, the parties generate each party's random tape by coin tossing into the well, so that the party learns its tape and the others hold a commitment to it, and every message of the semi-honest protocol is accompanied by a [[hash-function-to-zkp-gmw91|zero-knowledge proof]] that it is consistent with the committed input, the committed tape and the messages so far. Commitments, coin tossing and zero-knowledge proofs for $\classNP$ all follow from one-way functions, and a malicious party is thereby forced to behave semi-honestly or be caught — [[Gol04 - Foundations of Cryptography Basic Applications|Gol04]].

## Notes

- Semi-honest protocols for every functionality follow from semi-honest [[oblivious-transfer|OT]] ([[ot-to-mpc-kil88|OT ⇒ MPC]]) — [[GMW87 - How to play ANY mental game|GMW87]] — and from trapdoor permutations, through [[enhanced-trapdoor-permutations-to-ot-gkm-00|enhanced TDP ⇒ OT]] — [[EGL85 - A randomized protocol for signing contracts|EGL85]].
- With a dishonest majority, fairness is out of reach: two-party coin flipping cannot be made fair — [[Cle86 - Limits on the security of coin flips when half the processors are faulty|Cle86]]. With an honest majority, the compiled protocol can be made to guarantee output delivery — [[GMW87 - How to play ANY mental game|GMW87]].
