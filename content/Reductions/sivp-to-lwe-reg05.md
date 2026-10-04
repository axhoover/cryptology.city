---
type: reduction
status: draft
title: "SIVP ⇒ LWE"
aliases: []
id: red-sivp-to-lwe-reg05
kind: implication
hypotheses: [sivp]
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

# SIVP ⇒ LWE

## Statement

For $\alpha q > 2\sqrt{n}$, an efficient algorithm solving [[learning-with-errors|LWE]] in dimension $n$ with modulus $q$ and Gaussian error parameter $\alpha$ on a noticeable fraction of instances yields an efficient quantum algorithm approximating worst-case [[shortest-independent-vectors-problem|SIVP]] on $n$-dimensional lattices to within $\tilde{O}(n/\alpha)$ — [[Reg05 - On Lattices, Learning with Errors, Random Linear Codes, and Cryptography|Reg05]]; for decision LWE the modulus must be prime and $\poly(n)$. Hence if SIVP is hard in the worst case for efficient quantum algorithms, search and decision LWE are hard on average.

## Sketch

Given discrete Gaussian samples of parameter $r$ over the input lattice $L$, the LWE oracle solves bounded-distance decoding on the dual $L^*$ to within distance $\alpha q/(\sqrt{2}\,r)$, and a quantum step turns this decoder into a sampler of discrete Gaussians over $L$ with parameter $r\sqrt{n}/(\alpha q) < r/2$. Iterating shrinks the parameter to $\sqrt{2n}\,\eta_\varepsilon(L)/\alpha$, where polynomially many samples contain $n$ linearly independent vectors of length $\tilde{O}(n/\alpha) \cdot \lambda_n(L)$.
