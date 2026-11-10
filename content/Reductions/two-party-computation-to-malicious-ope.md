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

For every finite field $\FF$ with $\poly(\secpar)$-bit elements and efficient operations and every polynomial degree bound $d$, let $f_{\mathrm{OPE}}(P, \alpha) = (\bot, P(\alpha))$, with $P$ given by its $d + 1$ coefficients and an input that encodes no element of $\FF^{d+1}$, respectively of $\FF$, replaced by the zero polynomial, respectively by $0$. A protocol that securely computes $f_{\mathrm{OPE}}$ with abort against a malicious adversary corrupting one party, which exists when [[secure-multi-party-computation#two-party-computation-2pc|2PC]] is achieved, is an [[oblivious-polynomial-evaluation|OPE]] with [[oblivious-polynomial-evaluation#malicious-security|malicious security]] — folklore.

## Sketch

$f_{\mathrm{OPE}}$, with the replacement of inadmissible inputs, is computed by a polynomial-size circuit, and the coefficient encoding admits only polynomials of degree at most $d$, so malicious security of the OPE is security with abort of the general protocol for $f_{\mathrm{OPE}}$ — standard.

## Notes

- Run on a [[secure-multi-party-computation#semi-honest-two-party-computation|semi-honest 2PC]] protocol, the same construction gives [[oblivious-polynomial-evaluation#semi-honest-security|semi-honest secure]] OPE ([[semi-honest-two-party-computation-to-ope|semi-honest 2PC ⇒ OPE]]) — folklore.
