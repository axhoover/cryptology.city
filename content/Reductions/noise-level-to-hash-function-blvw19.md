---
type: reduction
status: draft
title: "Low-noise LPN ⇒ CRHF"
aliases: []
id: red-noise-level-to-hash-function-blvw19
kind: implication
hypotheses: [lpn-low-noise]
conclusion: crhf
class: unstated
model: standard
source:
  - "[[BLVW19 - Worst-Case Hardness for LPN and Cryptographic Hashing via Code Smoothing|BLVW19]]"
security-loss: "a factor $k^{O(1)}$: a collision finder with success $\\delta$ gives an LPN distinguisher with advantage at least $\\frac{\\delta}{2}(1-2\\varepsilon)^{2w} = \\delta \\cdot k^{-O(1)}$"
---

# Low-noise LPN ⇒ CRHF

## Statement

If [[learning-parity-with-noise#low-noise-lpn|low-noise LPN]] is hard at noise rate $\varepsilon = \log^2(k)/k$, then [[hash-function#collision-resistance|collision-resistant hash functions]] exist — [[BLVW19 - Worst-Case Hardness for LPN and Cryptographic Hashing via Code Smoothing|BLVW19]].

## Sketch

The key is a uniform $\mathbf{A} \in \FF_2^{m \times k}$ with $m = \poly(k)$, and $h_{\mathbf{A}}(\mathbf{x}) = \mathbf{A}^\top\mathbf{x} \in \FF_2^k$ on inputs $\mathbf{x} \in \FF_2^m$ of Hamming weight at most $w = O(k/\log k)$, which compresses once $w \log(m/w) > k$. A collision $\mathbf{x} \ne \mathbf{x}'$ gives a nonzero $\mathbf{z} = \mathbf{x} + \mathbf{x}'$ of weight at most $2w$ with $\mathbf{A}^\top\mathbf{z} = \mathbf{0}$, so for $\mathbf{v} = \mathbf{A}\mathbf{s} + \mathbf{e}$ the bit $\langle \mathbf{z}, \mathbf{v} \rangle = \langle \mathbf{z}, \mathbf{e} \rangle$ is $0$ with probability $\frac{1}{2} + \frac{1}{2}(1 - 2\varepsilon)^{|\mathbf{z}|} \ge \frac{1}{2} + k^{-O(1)}$ at $\varepsilon = \log^2(k)/k$, while for uniform $\mathbf{v}$ it is uniform.

## Notes

- LPN at this noise rate lies in $\classBPP^{\classSZK}$ — [[BLVW19 - Worst-Case Hardness for LPN and Cryptographic Hashing via Code Smoothing|BLVW19]].
- Sub-exponentially hard constant-noise LPN also gives collision-resistant hash functions ([[subexponential-lpn-to-crhf-yzw-19|Subexponential LPN ⇒ CRHF]]) — [[YZW+19 - Collision Resistant Hashing from Sub-exponential Learning Parity with Noise|YZW+19]].
