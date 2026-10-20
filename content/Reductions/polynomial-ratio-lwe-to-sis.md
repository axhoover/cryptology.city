---
type: reduction
status: draft
title: LWE with polynomial ratio ⇒ SIS
aliases: []
id: red-polynomial-ratio-lwe-to-sis
kind: implication
hypotheses: [polynomial-ratio-lwe]
conclusion: sis
class: fully-black-box
model: standard
source: folklore
security-loss: "Constant factor: $\\Adv^{\\mathrm{lwe}} \\ge 0.4 \\cdot \\Adv^{\\mathrm{sis}}$ for prime $q \\ge 75$, with one call to the SIS solver."
rationale:
  class: "The LWE distinguisher runs an arbitrary SIS solver once as an oracle on the transposed LWE matrix and tests one inner product, for every solver."
---

# LWE with polynomial ratio ⇒ SIS

## Statement

Let $q$ be prime, $\chi$ the discrete Gaussian over $\ZZ$ of width $\alpha q$, and $\beta \le 1/(4\alpha)$ with $\beta < q$. If decision [[learning-with-errors|LWE]] is hard for $(n, q, \chi, m)$, then [[shortest-integer-solution|SIS]] is hard for $(n, m, q, \beta)$, with a constant-factor loss — folklore. Under [[learning-with-errors#lwe-with-polynomial-modulus-to-noise-ratio|LWE with polynomial modulus-to-noise ratio]] this gives SIS in the regime $m > n \log q$, $\sqrt{m} \le \beta < q$: take $\alpha = 1/n$, a prime $q \in [2n^{1.5}, 4n^{1.5}]$ (so $\alpha q \ge 2\sqrt{n}$), $m = \lceil 3n \log q \rceil$ and $\beta = \sqrt{m}$, which is at most $n/4 = 1/(4\alpha)$ for all large $n$; more generally $\alpha = n^{-c}$ with $\sqrt{m} \le \beta \le n^c/4$.

## Sketch

Given $(\mathbf{A}, \mathbf{u})$ with $\mathbf{A} \in \ZZ_q^{m \times n}$, run the SIS solver on $\mathbf{A}^{\top}$, which is uniform in $\ZZ_q^{n \times m}$, and output "LWE" iff it returns $\mathbf{z}$ with $\mathbf{A}^{\top}\mathbf{z} \equiv \mathbf{0}$, $0 < \|\mathbf{z}\| \le \beta$ and $\langle \mathbf{z}, \mathbf{u} \rangle \bmod q \in (-q/4, q/4)$. For $\mathbf{u} = \mathbf{A}\mathbf{s} + \mathbf{e}$, $\langle \mathbf{z}, \mathbf{u} \rangle \equiv \langle \mathbf{z}, \mathbf{e} \rangle$ is subgaussian with parameter $\|\mathbf{z}\| \alpha q \le q/4$, so it leaves $(-q/4, q/4)$ with probability at most $2e^{-\pi} < 0.09$; for uniform $\mathbf{u}$ it is uniform modulo $q$, since $\mathbf{z} \not\equiv \mathbf{0}$ and $q$ is prime, and lands in the interval with probability at most $1/2 + 1/q$.

## Notes

- Composed with [[sis-to-hash-function-ajt96|SIS ⇒ CRHF]] at the same $(n, m, q, \beta)$, LWE with polynomial modulus-to-noise ratio gives collision-resistant hashing keyed by a uniform matrix — standard.
