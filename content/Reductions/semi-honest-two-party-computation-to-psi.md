---
type: reduction
status: draft
title: "Semi-honest 2PC ⇒ PSI"
aliases: []
id: red-semi-honest-two-party-computation-to-psi
kind: implication
hypotheses: [semi-honest-two-party-computation]
conclusion: psi
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The PSI protocol is the general protocol run on the PSI functionality, and every attack on it is an attack on that protocol."
---

# Semi-honest 2PC ⇒ PSI

## Statement

A protocol that securely computes $f_{\mathrm{PSI}}(X, Y) = (|Y|, (X \cap Y, |X|))$ against semi-honest adversaries, with each set encoded as a string of a fixed length, which exists when [[secure-multi-party-computation#semi-honest-two-party-computation|semi-honest 2PC]] is achieved, is a [[private-set-intersection#semi-honest-security|semi-honest secure]] [[private-set-intersection|PSI]] protocol for every universe $\bits^{\ell}$ and size bounds $n_S$ and $n_R$, where $\ell$, $n_S$ and $n_R$ are polynomials in $\secpar$ — folklore.

## Sketch

$f_{\mathrm{PSI}}$ is computed by a circuit of size polynomial in $\ell$, $n_S$ and $n_R$, so the general protocol applies to it, and for each corrupted party the PSI semi-honest game is the semi-honest 2PC game for $f_{\mathrm{PSI}}$ — standard.

## Notes

- Run on a protocol secure with abort against a malicious adversary corrupting one party ([[secure-multi-party-computation#two-party-computation-2pc|2PC]]), and with an input that encodes no admissible set replaced by $\emptyset$, the same construction gives [[private-set-intersection#malicious-security|PSI with malicious security]] ([[two-party-computation-to-malicious-psi|2PC ⇒ malicious PSI]]) — folklore.
- Semi-honest [[oblivious-transfer|OT]] gives semi-honest secure computation of every functionality ([[ot-to-semi-honest-security-gmw87|semi-honest OT ⇒ semi-honest MPC]]) — [[GMW87 - How to play ANY mental game|GMW87]], [[Gol04 - Foundations of Cryptography Basic Applications|Gol04]] — and conversely semi-honest PSI gives semi-honest OT ([[psi-to-ot|PSI ⇒ OT]]) — folklore.
