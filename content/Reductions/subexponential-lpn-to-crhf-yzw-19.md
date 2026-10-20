---
type: reduction
status: draft
title: "Subexponential LPN ⇒ CRHF"
aliases: []
id: red-subexponential-lpn-to-crhf-yzw-19
kind: implication
hypotheses: [subexponential-lpn]
conclusion: crhf
class: unstated
model: standard
source:
  - "[[YZW+19 - Collision Resistant Hashing from Sub-exponential Learning Parity with Noise|YZW+19]]"
security-loss: "a factor $2^{O(w)}$ for input weight $w$: a collision finder with success $\\delta$ gives an LPN distinguisher with advantage at least $\\frac{\\delta}{2}(1-2\\varepsilon)^{2w}$"
---

# Subexponential LPN ⇒ CRHF

## Statement

If constant-noise [[learning-parity-with-noise|LPN]] is $2^{k^{1/2+\delta}}$-hard for a constant $\delta > 0$ ([[learning-parity-with-noise#subexponential-lpn|subexponential LPN]] with exponent above $1/2$) or $2^{\Omega(k/\log k)}$-hard given $\poly(k)$ samples, then [[hash-function#collision-resistance|collision-resistant hash functions]] exist, via the binary shortest-vector problem — [[YZW+19 - Collision Resistant Hashing from Sub-exponential Learning Parity with Noise|YZW+19]].

## Sketch

The hash is $h_{\mathbf{A}}(\mathbf{x}) = \mathbf{A}^{\top}\mathbf{x}$ for a uniform $\mathbf{A} \in \FF_2^{m \times k}$, on regular inputs $\mathbf{x} \in \FF_2^m$ with a single one in each of $w$ blocks of length $m/w$, described by $w \log(m/w)$ bits and so compressing once that exceeds $k$. A collision $\mathbf{x} \ne \mathbf{x}'$ gives a nonzero $\mathbf{z} = \mathbf{x} + \mathbf{x}'$ of weight at most $2w$ with $\mathbf{A}^{\top}\mathbf{z} = \mathbf{0}$, a binary-SVP solution, and then $\mathbf{z}^{\top}(\mathbf{A}\mathbf{s} + \mathbf{e}) = \mathbf{z}^{\top}\mathbf{e}$ is $0$ with probability at least $\frac{1}{2}\left(1 + (1-2\varepsilon)^{2w}\right)$ on LPN samples of noise rate $\varepsilon$, against $\frac{1}{2}$ on uniform ones.

## Notes

- LPN at noise rate $1/\sqrt{k}$ that is $2^{\Omega(\sqrt{k}/\log k)}$-hard given $\poly(k)$ samples also implies collision-resistant hash functions — [[YZW+19 - Collision Resistant Hashing from Sub-exponential Learning Parity with Noise|YZW+19]].
- The hash functions have constant, or even polylogarithmic, shrinkage and are computed by polynomial-size depth-3 circuits of NOT, unbounded fan-in AND and XOR gates — [[YZW+19 - Collision Resistant Hashing from Sub-exponential Learning Parity with Noise|YZW+19]].
