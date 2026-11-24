---
type: reduction
status: draft
title: "Quantum polynomial-factor SIVP ⇒ LWE"
aliases: []
id: red-sivp-to-lwe-reg05
kind: implication
hypotheses: [sivp-poly-factor-quantum]
conclusion: lwe
class: fully-black-box
model: quantum
source:
  - "[[Reg05 - On Lattices, Learning with Errors, Random Linear Codes, and Cryptography|Reg05]]"
security-loss: "polynomial"
rationale:
  class: "The quantum reduction invokes an arbitrary average-case LWE solver only as an oracle inside its iterative step and works for every solver with noticeable success probability."
  model: "The LWE oracle is used classically to solve bounded-distance decoding, but the step converting that decoder into narrower discrete-Gaussian samples is a quantum algorithm."
---

# Quantum polynomial-factor SIVP ⇒ LWE

## Statement

Let $q = q(n)$ be an integer and $\alpha = \alpha(n) \in (0, 1)$ with $\alpha q > 2\sqrt{n}$. An oracle that solves continuous LWE with modulus $q$ and error $\Psi_\alpha$, given polynomially many samples, yields an efficient quantum algorithm approximating worst-case [[shortest-independent-vectors-problem|SIVP]] on $n$-dimensional lattices to within $\tilde{O}(n/\alpha)$ — [[Reg05 - On Lattices, Learning with Errors, Random Linear Codes, and Cryptography|Reg05]] (arXiv v1, Theorem 3.1 and Lemma 3.17). Here $\Psi_\alpha$ is the normal distribution of standard deviation $\alpha/\sqrt{2\pi}$ reduced modulo $1$, a sample of $A_{\mathbf{s},\Psi_\alpha}$ is $(\mathbf{a}, \langle \mathbf{a}, \mathbf{s} \rangle/q + e \bmod 1)$ with $\mathbf{a} \getsr \ZZ_q^n$ and $e \gets \Psi_\alpha$, and solving means outputting $\mathbf{s}$ with probability exponentially close to $1$ for every $\mathbf{s} \in \ZZ_q^n$. Theorem 1.1 of [[Reg05 - On Lattices, Learning with Errors, Random Linear Codes, and Cryptography|Reg05]] states the result for the rounding $\bar{\Psi}_\alpha$ of $\Psi_\alpha$ to $\ZZ_q$. Neither error is the [[discrete-gaussian|discrete Gaussian]] $D_{\ZZ,\alpha q}$ of [[learning-with-errors|LWE]].

To reach a discrete Gaussian, let $\delta := 2^{-n}$ and $\sigma := \sqrt{\ln(2(1 + 1/\delta))/\pi}$, so that $\sigma \ge \eta_\delta(\ZZ)$ — [[BLPRS13 - Classical Hardness of Learning with Errors|BLPRS13]] (arXiv v1, Lemma 2.5) — and $\sigma < \sqrt{n}$, and let $\alpha' := \sqrt{\alpha^2 + \sigma^2/q^2}$. Map a sample $(\mathbf{a}, b)$ with $b \in \mathbb{R}/\ZZ$ to $(\mathbf{a}, qb + y \bmod q)$ with $y \gets D_{\ZZ - qb, \sigma}$. On a sample of $A_{\mathbf{s},\Psi_\alpha}$, write $e = \tilde{e} \bmod 1$ for a real normal variable $\tilde{e}$, so that $x := q\tilde{e}$ is a continuous Gaussian of width $\alpha q$. Since $\langle \mathbf{a}, \mathbf{s} \rangle$ is an integer, $\ZZ - qb = \ZZ - x$ and $qb + y \equiv \langle \mathbf{a}, \mathbf{s} \rangle + (x + y) \pmod q$, so the map takes each sample of $A_{\mathbf{s},\Psi_\alpha}$ to within statistical distance $8\delta$ of an LWE sample $(\mathbf{a}, \langle \mathbf{a}, \mathbf{s} \rangle + e' \bmod q)$ with $e' \gets D_{\ZZ,\alpha' q}$ — [[BLPRS13 - Classical Hardness of Learning with Errors|BLPRS13]] (arXiv v1, Lemma 2.10). It takes uniform samples to uniform ones — standard. For prime $q \le \poly(n)$, Lemmas 4.1 and 4.2 of [[Reg05 - On Lattices, Learning with Errors, Random Linear Codes, and Cryptography|Reg05]] hold for every distribution $\chi$ on $\ZZ_q$. At $\chi = D_{\ZZ,\alpha' q}$ they turn a distinguisher for decision LWE with parameters $(n, q, D_{\ZZ,\alpha' q}, m)$ of non-negligible advantage into an algorithm that, for every $\mathbf{s}$, outputs $\mathbf{s}$ from polynomially many samples of $A_{\mathbf{s},\chi}$ with probability exponentially close to $1$. Run on polynomially many mapped samples, which are jointly within statistical distance $\poly(n) \cdot 2^{-n}$ of samples of $A_{\mathbf{s},\chi}$, it still outputs $\mathbf{s}$ with probability exponentially close to $1$, so it solves continuous LWE with error $\Psi_\alpha$, the oracle of Theorem 3.1.

Hence, if [[shortest-independent-vectors-problem#polynomial-factors-against-quantum-algorithms|SIVP is quantumly hard for polynomial factors]], then for every prime $q \le \poly(n)$ and every $\alpha \in [1/\poly(n), 1)$ with $\alpha q > 2\sqrt{n}$, decision LWE is hard for $(n, q, D_{\ZZ,\alpha' q}, m)$ for every $m = \poly(n)$. Since $\sigma < \sqrt{n} < \alpha q/2$, $\alpha' q > \alpha q > 2\sqrt{n}$ and $\alpha' < 2\alpha$. For example, $n := \secpar$, $\alpha := 1/(2n)$ and $q$ the least prime in $[8n^2, 16n^2]$, which is computable in time $\poly(n)$, give $\alpha q \ge 4n > 2\sqrt{n}$ and $\alpha' < 1/n$, so [[learning-with-errors|LWE]] holds with error $D_{\ZZ,\alpha' q}$ — standard.

## Sketch

Given discrete Gaussian samples of parameter $r$ over the input lattice $L$, the LWE oracle solves bounded-distance decoding on the dual $L^*$ to within distance $\alpha q/(\sqrt{2}\,r)$, and a quantum step turns this decoder into a sampler of discrete Gaussians over $L$ with parameter $r\sqrt{n}/(\alpha q) < r/2$. Iterating shrinks the parameter to $\sqrt{2n}\,\eta_\varepsilon(L)/\alpha$, where polynomially many samples contain $n$ linearly independent vectors of length $\tilde{O}(n/\alpha) \cdot \lambda_n(L)$.
