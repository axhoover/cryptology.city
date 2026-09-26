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
---

# SIVP ⇒ LWE

Worst-case quantum hardness of [[shortest-independent-vectors-problem|SIVP]] implies average-case hardness of [[learning-with-errors|LWE]].

## Statement

For $\alpha q > 2\sqrt{n}$, an efficient algorithm solving [[learning-with-errors|LWE]] in dimension $n$ with modulus $q$ and Gaussian error parameter $\alpha$ on a noticeable fraction of instances yields an efficient quantum algorithm approximating worst-case [[shortest-independent-vectors-problem|SIVP]] on $n$-dimensional lattices to within $\tilde{O}(n/\alpha)$ — [[Reg05 - On Lattices, Learning with Errors, Random Linear Codes, and Cryptography|Reg05]]; for decision LWE the modulus must be prime and $\poly(n)$. Hence if SIVP is hard in the worst case for efficient quantum algorithms, search and decision LWE are hard on average.

## Sketch

Given discrete Gaussian samples of parameter $r$ from the input lattice $L$, the LWE oracle solves bounded-distance decoding on the dual $L^*$ to within distance $\alpha q/(\sqrt{2}\,r)$; a quantum step turns this BDD solver into a sampler of discrete Gaussians over $L$ with parameter $r\sqrt{n}/(\alpha q)$. Iterating shrinks the parameter to $\sqrt{2n}\,\eta_\varepsilon(L)/\alpha$, where polynomially many samples contain $n$ linearly independent vectors of length $\tilde{O}(n/\alpha) \cdot \lambda_n(L)$.

## Notes

`class: fully-black-box`: Worst-case-to-average-case oracle reduction: the quantum reduction invokes an arbitrary average-case LWE solver only as an oracle inside its iterative step and works for every solver with noticeable success probability. No construction component; on the assumption-to-assumption reading this is the fully-black-box shape, as recorded on the sibling [[gapsvp-to-lwe-reg05|GapSVP ⇒ LWE]].

`model: quantum`: The LWE oracle is used classically, to solve bounded-distance decoding on the dual lattice, but the step converting that BDD solver into narrower discrete-Gaussian samples is a quantum algorithm.
