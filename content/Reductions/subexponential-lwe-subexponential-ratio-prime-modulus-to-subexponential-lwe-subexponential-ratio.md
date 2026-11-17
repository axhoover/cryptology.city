---
type: reduction
status: draft
title: "Sub-exponentially hard LWE over prime moduli ⇒ Sub-exponentially hard LWE at sub-exponential ratio"
aliases: []
id: red-subexponential-lwe-subexponential-ratio-prime-modulus-to-subexponential-lwe-subexponential-ratio
kind: implication
hypotheses: [subexponential-lwe-subexponential-ratio-prime-modulus]
conclusion: subexponential-lwe-subexponential-ratio
class: fully-black-box
model: standard
source: folklore
security-loss: "additive $m \\cdot 2^{-\\Omega(k)}$ for truncation and noise convolution; the size exponent halves"
rationale:
  class: "The reduction maps each instance by one fixed efficient transformation, padding the secret and adding Gaussian noise, and runs any distinguisher once as an oracle."
---

# Sub-exponentially hard LWE over prime moduli ⇒ Sub-exponentially hard LWE at sub-exponential ratio

## Statement

If [LWE over $\secpar$-bit prime moduli is sub-exponentially hard at sub-exponential ratio](learning-with-errors#sub-exponential-hardness-over-prime-moduli) with constant $\varepsilon$, then [LWE with sub-exponential modulus-to-noise ratio is sub-exponentially hard](learning-with-errors#sub-exponential-hardness-at-sub-exponential-ratio) with the same $\varepsilon$, at the modulus $q(n) := p(\secpar(n))$ for any sequence of $\secpar$-bit primes $p(\secpar)$, where $\secpar(n) := \lceil n^{\varepsilon} \rceil + \lceil 2.5 \log n \rceil + 4$; the width $q(n)/2^{n^{\varepsilon}}$ is then at least $8n^{2.5} \ge 2\sqrt{n}$ — folklore.

## Sketch

At each $\secpar$, apply the hypothesis with dimension $k$ the least $n$ with $\secpar(n) = \secpar$, noise parameter $\alpha := 2^{\lceil 2.5 \log k \rceil + 1}$ and bound $B := \alpha k$, which meet its constraints for large $\secpar$; every $n$ with $\secpar(n) = \secpar$ has $n \ge k$, the same $\lceil n^{\varepsilon} \rceil$ and $\lceil 2.5 \log n \rceil$ as $k$, and target width $w = q/2^{n^{\varepsilon}} \ge 4\alpha$. A dimension-$k$ instance becomes a dimension-$n$ one by appending $n - k$ uniform rows to the matrix with self-chosen secret coordinates and adding discrete Gaussian noise of parameter $\sqrt{w^2 - \alpha^2}$, which maps LWE samples to LWE samples of width $w$ up to statistical distance $m \cdot 2^{-\Omega(k)}$ (truncation at $B$, and convolution of discrete Gaussians above the smoothing parameter) and uniform samples to uniform ones. Since $n < 2^{1/\varepsilon} k$, adversaries of size $2^{n^{\delta/2}}$ fall under the hypothesis's bound $2^{k^{\delta}}$ for large $n$, so the conclusion holds with $\delta/2$.

## Notes

- A single dimension $k(\secpar)$ cannot equal every $n$: the hypothesis forces $k^{\varepsilon} \ge \secpar - O(\log \secpar)$, so the dimensions it covers are sparse, and the padding step reaches the others — folklore.
- For a target sample count $m(n)$, the hypothesis is applied with the largest $m(n)$ over the $n$ with $\secpar(n) = \secpar$, and the extra samples are dropped; at a $\secpar$ outside the range of $\secpar(\cdot)$ any admissible parameters, such as $k = \lceil \secpar^{1/\varepsilon} \rceil$ and $\alpha = B = 2\sqrt{k}$, serve — folklore.
