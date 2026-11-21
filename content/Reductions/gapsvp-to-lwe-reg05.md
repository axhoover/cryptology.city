---
type: reduction
status: draft
title: "Quantum polynomial-factor GapSVP ⇒ LWE"
aliases: []
id: red-gapsvp-to-lwe-reg05
kind: implication
hypotheses: [gapsvp-poly-factor-quantum]
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

# Quantum polynomial-factor GapSVP ⇒ LWE

## Statement

Let $q = q(n)$ be an integer and $\alpha = \alpha(n) \in (0, 1)$ with $\alpha q > 2\sqrt{n}$. An oracle that solves continuous LWE with modulus $q$ and error $\Psi_\alpha$, given polynomially many samples, yields an efficient quantum algorithm for worst-case $\mathrm{GapSVP}_{O(n/\alpha)}$ on $n$-dimensional lattices — [[Reg05 - On Lattices, Learning with Errors, Random Linear Codes, and Cryptography|Reg05]] (arXiv v1, Theorem 3.1 and Lemma 3.20). Here $\Psi_\alpha$ is the normal distribution of standard deviation $\alpha/\sqrt{2\pi}$ reduced modulo $1$, a sample of $A_{\mathbf{s},\Psi_\alpha}$ is $(\mathbf{a}, \langle \mathbf{a}, \mathbf{s} \rangle/q + e \bmod 1)$ with $\mathbf{a} \getsr \ZZ_q^n$ and $e \gets \Psi_\alpha$, and solving means outputting $\mathbf{s}$ with probability exponentially close to $1$ for every $\mathbf{s} \in \ZZ_q^n$ — [[Reg05 - On Lattices, Learning with Errors, Random Linear Codes, and Cryptography|Reg05]]. This error is not the [[discrete-gaussian|discrete Gaussian]] $D_{\ZZ,\alpha q}$ of [[learning-with-errors|LWE]].

Let $\sigma := \sqrt{\ln(2(1 + 2^n))/\pi}$, so that $\sigma \ge \eta_{2^{-n}}(\ZZ)$ — [[BLPRS13 - Classical Hardness of Learning with Errors|BLPRS13]] (arXiv v1, Lemma 2.5) — and $\sigma < \sqrt{n}$, and let $\alpha' := \sqrt{\alpha^2 + \sigma^2/q^2}$. Mapping each sample $(\mathbf{a}, b)$ to $(\mathbf{a}, qb + y \bmod q)$ with $y \gets D_{\ZZ - qb, \sigma}$ takes a sample of $A_{\mathbf{s},\Psi_\alpha}$ to within statistical distance $8 \cdot 2^{-n}$ of a sample $(\mathbf{a}, \langle \mathbf{a}, \mathbf{s} \rangle + e' \bmod q)$ with $e' \gets D_{\ZZ,\alpha' q}$ — [[BLPRS13 - Classical Hardness of Learning with Errors|BLPRS13]] (arXiv v1, Lemma 2.10) — and uniform samples to uniform ones — standard. For prime $q \le \poly(n)$, Lemmas 4.1 and 4.2 of [[Reg05 - On Lattices, Learning with Errors, Random Linear Codes, and Cryptography|Reg05]], which hold for every distribution $\chi$ on $\ZZ_q$, turn a distinguisher of non-negligible advantage for decision LWE with parameters $(n, q, D_{\ZZ,\alpha' q}, m)$ into an algorithm that, for every $\mathbf{s}$, outputs $\mathbf{s}$ from polynomially many samples of $A_{\mathbf{s},D_{\ZZ,\alpha' q}}$ with probability exponentially close to $1$. Run on mapped samples, which are jointly within statistical distance $\poly(n) \cdot 2^{-n}$ of those, it solves continuous LWE with error $\Psi_\alpha$; the argument is the one in [[sivp-to-lwe-reg05|Quantum polynomial-factor SIVP ⇒ LWE]].

Hence, if [[shortest-vector-problem#polynomial-factors-against-quantum-algorithms|GapSVP is quantumly hard for polynomial factors]], then for every prime $q \le \poly(n)$ and every $\alpha \in [1/\poly(n), 1)$ with $\alpha q > 2\sqrt{n}$, decision LWE is hard for $(n, q, D_{\ZZ,\alpha' q}, m)$ for every $m = \poly(n)$, where $\alpha' q > \alpha q > 2\sqrt{n}$ and $\alpha' < 2\alpha$ since $\sigma < \sqrt{n} < \alpha q/2$. For example, $n := \secpar$, $\alpha := 1/(2n)$ and $q$ the least prime in $[8n^2, 16n^2]$ give $\alpha q \ge 4n > 2\sqrt{n}$ and $\alpha' < 1/n$, so [[learning-with-errors|LWE]] holds with error $D_{\ZZ,\alpha' q}$ — standard.

## Sketch

Given discrete Gaussian samples of parameter $r$ over a lattice $L$, the LWE oracle solves bounded-distance decoding on the dual $L^*$ to within distance $\alpha q/(\sqrt{2}\,r)$, and a quantum step turns this decoder into a sampler of discrete Gaussians over $L$ with parameter $r\sqrt{n}/(\alpha q) < r/2$. Iterating yields a sampler at parameter $\sqrt{2n}\,\eta_\varepsilon(L)/\alpha$ for every lattice $L$, and such a sampler approximates GapSVP to within $O(n/\alpha)$ — [[Reg05 - On Lattices, Learning with Errors, Random Linear Codes, and Cryptography|Reg05]] (Lemma 3.20).

## Notes

- A classical reduction from worst-case GapSVP holds for exponential modulus $q \ge 2^{n/2}$ — [[Pei09 - Public-Key Cryptosystems from the Worst-Case Shortest Vector Problem|Pei09]].
- With polynomial modulus, LWE in dimension $n$ is classically as hard as worst-case GapSVP in dimension $\Theta(\sqrt{n})$, via modulus–dimension switching — [[BLPRS13 - Classical Hardness of Learning with Errors|BLPRS13]].
