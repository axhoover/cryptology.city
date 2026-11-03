---
type: reduction
status: draft
title: "Semi-honest 2PC + PRF ⇒ OPRF"
aliases: []
id: red-semi-honest-two-party-computation-and-prf-to-oprf
kind: implication
hypotheses: [semi-honest-two-party-computation, prf]
conclusion: oprf
class: free
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The protocol is the general protocol run on a circuit computing the PRF, so it uses the PRF's code."
---

# Semi-honest 2PC + PRF ⇒ OPRF

## Statement

Let $\PRF = (\KeyGen, \Eval)$ be a [[pseudorandom-function|PRF]] and $\Pi$ a protocol that securely computes the functionality $f_\PRF(k, x) = (\bot, \Eval(k, x))$ against semi-honest adversaries, which exists when [[secure-multi-party-computation#semi-honest-two-party-computation|semi-honest 2PC]] is achieved. Then $(\PRF, \Pi)$ is a [[oblivious-prf#semi-honest-security|semi-honest secure]] [[oblivious-prf|OPRF]] — folklore.

## Sketch

$\Eval$ is efficient, so $f_\PRF$ is computed by a polynomial-size circuit and has a protocol; for each corrupted party, the OPRF's semi-honest security game is the semi-honest 2PC game for $f_\PRF$, and pseudorandomness is the hypothesis on $\PRF$ — standard.

## Notes

- With $\Pi$ secure with abort against a malicious adversary corrupting one party ([[secure-multi-party-computation#two-party-computation-2pc|2PC]]), the same construction gives an [[oblivious-prf#malicious-security|OPRF with malicious security]] ([[two-party-computation-and-prf-to-malicious-oprf|2PC + PRF ⇒ malicious OPRF]]) — folklore.
- Conversely, a semi-honest secure OPRF whose domain contains two distinct points and whose range is a finite group with at least two elements gives semi-honest [[oblivious-transfer|OT]] ([[oprf-to-ot|OPRF ⇒ OT]]) — folklore — and semi-honest OT gives semi-honest secure computation of every functionality ([[ot-to-semi-honest-security-gmw87|semi-honest OT ⇒ semi-honest MPC]]) — [[GMW87 - How to play ANY mental game|GMW87]], [[Gol04 - Foundations of Cryptography Basic Applications|Gol04]].
