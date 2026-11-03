---
type: glossary
status: draft
aliases:
  - Discrete Gaussian
  - Smoothing parameter
title: Discrete Gaussians and the smoothing parameter
id: discrete-gaussian
---

# Discrete Gaussians and the smoothing parameter

The discrete Gaussian $D_{\Lambda,s,\mathbf{c}}$ is the distribution on a lattice $\Lambda$ that gives each point mass proportional to the Gaussian function $\rho_{s,\mathbf{c}}$; above the smoothing parameter $\eta_\varepsilon(\Lambda)$ the lattice's discrete structure is invisible to a Gaussian of width $s$ — [[MR07 - Worst-Case to Average-Case Reductions Based on Gaussian Measures|MR07]]. The noise of [[learning-with-errors|LWE]], the short vectors of [[shortest-integer-solution|SIS]] and the preimages sampled with [[lattice-trapdoor|lattice trapdoors]] are discrete Gaussians.

## Definitions

For $s > 0$ and $\mathbf{c} \in \mathbb{R}^n$, let $\rho_{s,\mathbf{c}}(\mathbf{x}) := \exp(-\pi \|\mathbf{x} - \mathbf{c}\|^2 / s^2)$, with $\rho_s := \rho_{s,\mathbf{0}}$, and $\rho_{s,\mathbf{c}}(A) := \sum_{\mathbf{x} \in A} \rho_{s,\mathbf{c}}(\mathbf{x})$ for a countable set $A$. For a full-rank lattice $\Lambda \subset \mathbb{R}^n$, the **discrete Gaussian** is

$$
D_{\Lambda,s,\mathbf{c}}(\mathbf{x}) := \frac{\rho_{s,\mathbf{c}}(\mathbf{x})}{\rho_{s,\mathbf{c}}(\Lambda)} \qquad (\mathbf{x} \in \Lambda),
$$

and $D_{\Lambda + \mathbf{t},s,\mathbf{c}}$ on a coset is defined in the same way. The dual lattice is $\Lambda^* := \{\mathbf{y} \in \mathbb{R}^n : \langle \mathbf{x}, \mathbf{y} \rangle \in \ZZ \text{ for all } \mathbf{x} \in \Lambda\}$, and $\lambda_n(\Lambda)$ is the smallest $r$ such that $\Lambda$ contains $n$ linearly independent vectors of length at most $r$.

For $\varepsilon > 0$, the **smoothing parameter** is

$$
\eta_\varepsilon(\Lambda) := \min\left\{s > 0 : \rho_{1/s}(\Lambda^* \setminus \{\mathbf{0}\}) \le \varepsilon\right\}
$$

— [[MR07 - Worst-Case to Average-Case Reductions Based on Gaussian Measures|MR07]].

## Properties

- **Bound by $\lambda_n$.** For every $\varepsilon > 0$, $\eta_\varepsilon(\Lambda) \le \sqrt{\ln(2n(1 + 1/\varepsilon))/\pi} \cdot \lambda_n(\Lambda)$; in particular $\eta_\varepsilon(\ZZ^n) \le \sqrt{\ln(2n(1 + 1/\varepsilon))/\pi}$, which for a negligible $\varepsilon(n)$ can be taken $\omega(\sqrt{\log n})$ — [[MR07 - Worst-Case to Average-Case Reductions Based on Gaussian Measures|MR07]].
- **Smoothing.** For $s \ge \eta_\varepsilon(\Lambda)$ and every $\mathbf{c}$, a continuous Gaussian of width $s$ centered at $\mathbf{c}$, reduced modulo $\Lambda$, is within statistical distance $\varepsilon/2$ of the uniform distribution on $\mathbb{R}^n / \Lambda$ — [[MR07 - Worst-Case to Average-Case Reductions Based on Gaussian Measures|MR07]].
- **Tail bound.** For $\varepsilon \in (0, 1)$, $s \ge \eta_\varepsilon(\Lambda)$ and every $\mathbf{c}$, $\Pr_{\mathbf{x} \gets D_{\Lambda,s,\mathbf{c}}}\!\left[\|\mathbf{x} - \mathbf{c}\| > s\sqrt n\right] \le \frac{1 + \varepsilon}{1 - \varepsilon} \cdot 2^{-n}$, a consequence of Banaszczyk's transference lemma — [[MR07 - Worst-Case to Average-Case Reductions Based on Gaussian Measures|MR07]].
- **Sampling.** Given any basis $\mathbf{B}$ of $\Lambda$, a randomized variant of Babai's nearest-plane algorithm samples a distribution statistically close to $D_{\Lambda,s,\mathbf{c}}$ for every $s \ge \|\tilde{\mathbf{B}}\| \cdot \omega(\sqrt{\log n})$, where $\|\tilde{\mathbf{B}}\|$ is the length of the longest Gram–Schmidt vector of $\mathbf{B}$ — [[GPV08 - Trapdoors for hard lattices and new cryptographic constructions|GPV08]]. The sample reveals nothing about $\mathbf{B}$ beyond the lattice, which is what makes a short basis usable as a trapdoor.
- **Uniform syndromes.** Let $q$ be prime, $m \ge 2n\log q$ and $\mathbf{A} \getsr \ZZ_q^{n \times m}$. Except for an exponentially small fraction of $\mathbf{A}$, the lattice $\Lambda^\perp_q(\mathbf{A}) = \{\mathbf{e} \in \ZZ^m : \mathbf{A}\mathbf{e} \equiv \mathbf{0} \pmod q\}$ has $\eta_\varepsilon(\Lambda^\perp_q(\mathbf{A})) \le \omega(\sqrt{\log m})$ for some negligible $\varepsilon$, and for $s \ge \eta_\varepsilon(\Lambda^\perp_q(\mathbf{A}))$ the syndrome $\mathbf{A}\mathbf{e} \bmod q$ of $\mathbf{e} \gets D_{\ZZ^m,s}$ is within statistical distance $2\varepsilon$ of uniform on $\ZZ_q^n$ — [[GPV08 - Trapdoors for hard lattices and new cryptographic constructions|GPV08]].
