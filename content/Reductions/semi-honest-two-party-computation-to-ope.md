---
type: reduction
status: draft
title: "Semi-honest 2PC ⇒ OPE"
aliases: []
id: red-semi-honest-two-party-computation-to-ope
kind: implication
hypotheses: [semi-honest-two-party-computation]
conclusion: ope
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The OPE protocol is the general protocol run on the OPE functionality, and every attack on it is an attack on that protocol."
---

# Semi-honest 2PC ⇒ OPE

## Statement

A protocol that securely computes every polynomial-time two-party functionality against semi-honest adversaries ([[secure-multi-party-computation#semi-honest-two-party-computation|semi-honest 2PC]]) is, run on $f_{\mathrm{OPE}}(P, \alpha) = (\bot, P(\alpha))$ with $P$ given by its $d + 1$ coefficients, a [[oblivious-polynomial-evaluation#semi-honest-security|semi-honest secure]] [[oblivious-polynomial-evaluation|OPE]] for every finite field $\FF$ with $\poly(\secpar)$-bit elements and efficient operations and every polynomial degree bound $d$ — folklore.

## Sketch

$P(\alpha)$ is computed from the coefficients and $\alpha$ by $d$ multiplications and $d$ additions in $\FF$ (Horner's rule), so $f_{\mathrm{OPE}}$ is computed by a polynomial-size circuit and the general protocol applies to it; for each corrupted party the OPE semi-honest game is the semi-honest 2PC game for $f_{\mathrm{OPE}}$ — standard.

## Notes

- Run on a protocol secure with abort against a malicious adversary corrupting one party ([[secure-multi-party-computation#two-party-computation-2pc|2PC]]), the same construction gives [[oblivious-polynomial-evaluation#malicious-security|OPE with malicious security]] ([[two-party-computation-to-malicious-ope|2PC ⇒ malicious OPE]]) — folklore.
- Semi-honest [[oblivious-transfer|OT]] gives semi-honest secure computation of every functionality ([[ot-to-semi-honest-security-gmw87|semi-honest OT ⇒ semi-honest MPC]]) — [[GMW87 - How to play ANY mental game|GMW87]], [[Gol04 - Foundations of Cryptography Basic Applications|Gol04]] — and conversely semi-honest OPE gives semi-honest OT ([[ope-to-ot|OPE ⇒ OT]]) — folklore.
