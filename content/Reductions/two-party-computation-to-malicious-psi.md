---
type: reduction
status: draft
title: "2PC ⇒ Malicious PSI"
aliases: []
id: red-two-party-computation-to-malicious-psi
kind: implication
hypotheses: [two-party-computation]
conclusion: malicious-psi
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The PSI protocol is the general protocol run on the PSI functionality, and its simulators are those of the general protocol."
---

# 2PC ⇒ Malicious PSI

## Statement

A protocol that securely computes every polynomial-time two-party functionality with abort against a malicious adversary corrupting one party ([[secure-multi-party-computation#two-party-computation-2pc|2PC]]) is, run on $f_{\mathrm{PSI}}(X, Y) = (|Y|, (X \cap Y, |X|))$ with each set encoded as a string of a fixed length and an input that encodes no admissible set replaced by $\emptyset$, a [[private-set-intersection|PSI]] protocol with [[private-set-intersection#malicious-security|malicious security]] for every universe $\bits^{\ell}$ and size bounds $n_S$ and $n_R$, where $\ell$, $n_S$ and $n_R$ are polynomials in $\secpar$ — folklore.

## Sketch

$f_{\mathrm{PSI}}$, with the replacement of inadmissible inputs, is computed by a circuit of size polynomial in $\ell$, $n_S$ and $n_R$, and malicious security of a PSI protocol is by definition security with abort for $f_{\mathrm{PSI}}$ — standard.

## Notes

- Run on a semi-honest 2PC protocol, the same construction gives [[private-set-intersection#semi-honest-security|semi-honest secure]] PSI ([[semi-honest-two-party-computation-to-psi|semi-honest 2PC ⇒ PSI]]) — folklore.
