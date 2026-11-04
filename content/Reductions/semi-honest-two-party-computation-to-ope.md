---
type: reduction
status: draft
title: "Semi-honest 2PC ⇒ OPE"
aliases: []
id: red-semi-honest-two-party-computation-to-oblivious-polynomial-evaluation
kind: implication
hypotheses: [semi-honest-two-party-computation]
conclusion: oblivious-polynomial-evaluation
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The OPE protocol is the semi-honest 2PC protocol for the OPE functionality, and every attack on it is an attack on that protocol."
---

# Semi-honest 2PC ⇒ OPE

## Statement

For every finite field $\FF$ with $\poly(\secpar)$-bit elements and efficient operations and every polynomial degree bound $d$, a protocol that securely computes $f_{\mathrm{OPE}}(P, \alpha) = (\bot, P(\alpha))$ against semi-honest adversaries, with $P$ given by its $d + 1$ coefficients, is a [[oblivious-polynomial-evaluation#semi-honest-security|semi-honest secure]] [[oblivious-polynomial-evaluation|OPE]]; such a protocol exists when [[secure-multi-party-computation#semi-honest-two-party-computation|semi-honest 2PC]] is achieved — folklore.

## Sketch

$P(\alpha)$ is computed from the coefficients and $\alpha$ by $d$ multiplications and $d$ additions in $\FF$ (Horner's rule), so $f_{\mathrm{OPE}}$ is computed by a polynomial-size circuit and has a protocol secure against semi-honest adversaries; for each corrupted party the OPE semi-honest game is the semi-honest 2PC game for $f_{\mathrm{OPE}}$ — standard.

## Notes

- With the protocol for $f_{\mathrm{OPE}}$ secure with abort against a malicious adversary corrupting one party ([[secure-multi-party-computation#two-party-computation-2pc|2PC]]), the same construction gives [[oblivious-polynomial-evaluation#malicious-security|OPE with malicious security]] ([[two-party-computation-to-malicious-ope|2PC ⇒ malicious OPE]]) — folklore.
- Semi-honest [[oblivious-transfer|OT]] gives semi-honest secure computation of every functionality ([[ot-to-semi-honest-security-gmw87|semi-honest OT ⇒ semi-honest MPC]]) — [[GMW87 - How to play ANY mental game|GMW87]], [[Gol04 - Foundations of Cryptography Basic Applications|Gol04]] — and conversely semi-honest OPE gives semi-honest OT ([[ope-to-ot|OPE ⇒ OT]]) — folklore.
