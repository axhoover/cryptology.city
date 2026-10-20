---
type: reduction
status: draft
title: Polynomial-factor GapSVP ⇒ LWE (exponential modulus)
aliases: []
id: red-gapsvp-poly-factor-to-lwe-pei09
kind: implication
hypotheses: [gapsvp-poly-factor]
conclusion: lwe
class: fully-black-box
model: standard
source:
  - "[[Pei09 - Public-Key Cryptosystems from the Worst-Case Shortest Vector Problem|Pei09]]"
security-loss: ""
rationale:
  class: "The classical worst-case algorithm calls an arbitrary average-case LWE solver only as an oracle, for every solver with noticeable success probability."
---

# Polynomial-factor GapSVP ⇒ LWE (exponential modulus)

## Statement

There is a classical probabilistic polynomial-time reduction from worst-case $\mathrm{GapSVP}_\gamma$ on $n$-dimensional lattices, $\gamma = \tilde{O}(n/\alpha)$, to search [[learning-with-errors|LWE]] in dimension $n$ with Gaussian error rate $\alpha$ and modulus $q \ge 2^{n/2}$; for $q$ a product of distinct primes of size $\poly(n)$, search and decision LWE are equivalent, so decision LWE is as hard — [[Pei09 - Public-Key Cryptosystems from the Worst-Case Shortest Vector Problem|Pei09]]. Hence if [[shortest-vector-problem#polynomial-factors|GapSVP is hard for polynomial factors]], LWE is hard for every inverse-polynomial $\alpha$ at such moduli.

## Notes

- For moduli down to $q \ge n/\alpha$, search LWE is as hard as a variant of GapSVP with an extra parameter $\zeta$, $\zeta$-to-$\gamma$-GapSVP, which is equivalent to standard GapSVP for $\zeta \ge 2^{n/2}$ — [[Pei09 - Public-Key Cryptosystems from the Worst-Case Shortest Vector Problem|Pei09]].
- Polynomial moduli are reached classically at the cost of dimension ([[gapsvp-poly-factor-to-lwe-blprs13|Polynomial-factor GapSVP ⇒ LWE (polynomial modulus)]]) — [[BLPRS13 - Classical Hardness of Learning with Errors|BLPRS13]]; quantumly, without that loss ([[gapsvp-to-lwe-reg05|GapSVP ⇒ LWE]]) — [[Reg05 - On Lattices, Learning with Errors, Random Linear Codes, and Cryptography|Reg05]].
