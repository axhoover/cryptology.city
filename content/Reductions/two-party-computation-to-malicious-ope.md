---
type: reduction
status: draft
title: "2PC ⇒ Malicious OPE"
aliases: []
id: red-two-party-computation-to-malicious-oblivious-polynomial-evaluation
kind: implication
hypotheses: [two-party-computation]
conclusion: malicious-oblivious-polynomial-evaluation
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The OPE protocol is the general protocol run on the OPE functionality, and its simulators are those of the general protocol."
---

# 2PC ⇒ Malicious OPE

## Statement

A protocol that securely computes every polynomial-time two-party functionality with abort against a malicious adversary corrupting one party ([[secure-multi-party-computation#two-party-computation-2pc|2PC]]) is, run on $f_{\mathrm{OPE}}(P, \alpha) = (\bot, P(\alpha))$ with $P$ given by its $d + 1$ coefficients, an [[oblivious-polynomial-evaluation|OPE]] with [[oblivious-polynomial-evaluation#malicious-security|malicious security]] for every finite field $\FF$ with $\poly(\secpar)$-bit elements and efficient operations and every polynomial degree bound $d$ — folklore.

## Sketch

$f_{\mathrm{OPE}}$ is computed by a polynomial-size circuit, and the coefficient encoding admits only polynomials of degree at most $d$, so malicious security of the OPE is security with abort of the general protocol for $f_{\mathrm{OPE}}$ — standard.

## Notes

- Run on a semi-honest 2PC protocol, the same construction gives [[oblivious-polynomial-evaluation#semi-honest-security|semi-honest secure]] OPE ([[semi-honest-two-party-computation-to-ope|semi-honest 2PC ⇒ OPE]]) — folklore.
