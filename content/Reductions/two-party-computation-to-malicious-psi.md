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
  class: "The PSI protocol is a 2PC protocol for the PSI functionality, used unchanged, and every adversary against it is an adversary against that protocol with the same simulator."
---

# 2PC ⇒ Malicious PSI

## Statement

Let $\ell$, $n_S$ and $n_R$ be polynomials in $\secpar$, and let $f_{\mathrm{PSI}}(X, Y) = (|Y|, (X \cap Y, |X|))$ over the universe $\bits^{\ell}$ with size bounds $n_S$ and $n_R$, each set encoded as a string of a fixed length and an input that encodes no admissible set replaced by $\emptyset$. A protocol that securely computes $f_{\mathrm{PSI}}$ with abort against a malicious adversary corrupting at most one party, which exists when [[secure-multi-party-computation#two-party-computation-2pc|2PC]] is achieved, is a [[private-set-intersection|PSI]] protocol with [[private-set-intersection#malicious-security|malicious security]] — folklore.

## Sketch

$f_{\mathrm{PSI}}$, with the replacement of inadmissible inputs, is computed by a circuit of size polynomial in $\ell$, $n_S$ and $n_R$, and malicious security of a PSI protocol is by definition security with abort for $f_{\mathrm{PSI}}$ — standard.

## Notes

- Run on a semi-honest 2PC protocol, the same construction gives [[private-set-intersection#semi-honest-security|semi-honest secure]] PSI ([[semi-honest-two-party-computation-to-psi|semi-honest 2PC ⇒ PSI]]) — folklore.
