---
type: reduction
status: draft
title: "GapSVP ⇒ LWE"
aliases: []
id: red-gapsvp-to-lwe-reg05
kind: implication
hypotheses: [gapsvp]
conclusion: lwe
class: fully-black-box
model: quantum
source:
  - "[[Reg05 - On Lattices, Learning with Errors, Random Linear Codes, and Cryptography|Reg05]]"
security-loss: ""
rationale:
  class: "The quantum reduction invokes an arbitrary average-case LWE solver only as an oracle inside its iterative step and works for every solver with noticeable success probability."
  model: "The LWE oracle is used classically to solve bounded-distance decoding, but the step converting that decoder into narrower discrete-Gaussian samples is a quantum algorithm."
---

# GapSVP ⇒ LWE

## Statement

For $\alpha q > 2\sqrt{n}$, an efficient algorithm solving [[learning-with-errors|LWE]] in dimension $n$ with modulus $q$ and Gaussian error parameter $\alpha$ on a noticeable fraction of instances yields an efficient quantum algorithm approximating worst-case [[shortest-vector-problem|GapSVP]] on $n$-dimensional lattices to within $\tilde{O}(n/\alpha)$ — [[Reg05 - On Lattices, Learning with Errors, Random Linear Codes, and Cryptography|Reg05]]; for decision LWE the modulus must be prime and $\poly(n)$. Hence if GapSVP is hard in the worst case for efficient quantum algorithms, search and decision LWE are hard on average.

## Sketch

Given discrete Gaussian samples of parameter $r$ over a lattice $L$, the LWE oracle solves bounded-distance decoding on the dual $L^*$ to within distance $\alpha q/(\sqrt{2}\,r)$, and a quantum step turns this decoder into a sampler of discrete Gaussians over $L$ with parameter $r\sqrt{n}/(\alpha q) < r/2$. Iterating yields a sampler at parameter $\sqrt{2n}\,\eta_\varepsilon(L)/\alpha$ for every lattice $L$, and such a sampler approximates GapSVP to within $\tilde{O}(n/\alpha)$.

## Notes

- A classical reduction from worst-case GapSVP holds for exponential modulus $q \ge 2^{n/2}$ — [[Pei09 - Public-Key Cryptosystems from the Worst-Case Shortest Vector Problem|Pei09]].
- With polynomial modulus, LWE in dimension $n$ is classically as hard as worst-case GapSVP in dimension $\Theta(\sqrt{n})$, via modulus–dimension switching — [[BLPRS13 - Classical Hardness of Learning with Errors|BLPRS13]].
