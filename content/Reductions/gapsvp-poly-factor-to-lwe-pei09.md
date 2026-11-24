---
type: reduction
status: draft
title: Polynomial-factor GapSVP ⇒ LWE (exponential modulus)
aliases: []
id: red-gapsvp-poly-factor-to-lwe-pei09
kind: implication
hypotheses: [gapsvp-poly-factor]
conclusion: lwe
class: fully-black-box
model: standard
source:
  - "[[Pei09 - Public-Key Cryptosystems from the Worst-Case Shortest Vector Problem|Pei09]]"
  - "[[MP12 - Trapdoors for Lattices Simpler Tighter Faster Smaller|MP12]]"
security-loss: "polynomial: the worst-case algorithm runs in polynomial time given any LWE distinguisher of noticeable advantage as an oracle"
rationale:
  class: "The classical worst-case algorithm calls an arbitrary average-case LWE distinguisher only as an oracle, through the search-to-decision and discretization steps, for every distinguisher with noticeable advantage."
---

# Polynomial-factor GapSVP ⇒ LWE (exponential modulus)

## Statement

Let $n, q \ge 1$ be integers and $\alpha \in (0, 1)$ with $\alpha q \ge 2\sqrt{n}$ and $q \ge 2^{n/2}$. There is a classical reduction from worst-case $\mathrm{GapSVP}_{\tilde{O}(n/\alpha)}$ on $n$-dimensional lattices to search $\mathrm{LWE}_{n,q,\alpha}$ — [[Pei09 - Public-Key Cryptosystems from the Worst-Case Shortest Vector Problem|Pei09]] (Theorem 3.1, as restated by [[BLPRS13 - Classical Hardness of Learning with Errors|BLPRS13]], arXiv v1, Theorem 2.16). Here a sample of $A_{q,\mathbf{s},D_\alpha}$ is $(\mathbf{a}, \langle \mathbf{a}, \mathbf{s} \rangle + e \bmod 1)$ with $\mathbf{a}$ uniform over $(q^{-1}\ZZ/\ZZ)^n$, $\mathbf{s} \in \ZZ_q^n$ and $e$ drawn from the continuous Gaussian $D_\alpha$ of density proportional to $\exp(-\pi x^2/\alpha^2)$, and $\mathrm{LWE}_{n,q,\alpha}$ allows arbitrarily many samples — [[BLPRS13 - Classical Hardness of Learning with Errors|BLPRS13]] (arXiv v1, §2.3). If moreover $q$ is a power of $2$ and $1/q < \alpha < 1/\omega(\sqrt{\log n})$, search $\mathrm{LWE}_{n,q,\alpha}$ reduces to decision $\mathrm{LWE}_{n,q,\alpha'}$ for $\alpha' = \alpha \cdot \omega(\log n)$ — [[MP12 - Trapdoors for Lattices Simpler Tighter Faster Smaller|MP12]] (Theorem 3.1, in the special case stated by [[BLPRS13 - Classical Hardness of Learning with Errors|BLPRS13]], arXiv v1, Theorem 2.17). This error is not the [[discrete-gaussian|discrete Gaussian]] $D_{\ZZ,\alpha q}$ of [[learning-with-errors|LWE]].

Let $\delta := 2^{-n}$ and $\sigma := \sqrt{\ln(2(1 + 1/\delta))/\pi}$, so that $\sigma \ge \eta_\delta(\ZZ)$ — [[BLPRS13 - Classical Hardness of Learning with Errors|BLPRS13]] (arXiv v1, Lemma 2.5) — and $\sigma < \sqrt{n}$, and let $\alpha'' := \sqrt{\alpha'^2 + \sigma^2/q^2}$. Map a sample $(\mathbf{a}, b)$ to $(q\mathbf{a}, qb + y \bmod q)$ with $y \gets D_{\ZZ - qb, \sigma}$, which is sampled exactly in polynomial time since $\sigma \ge \sqrt{\ln 6/\pi}$ — [[BLPRS13 - Classical Hardness of Learning with Errors|BLPRS13]] (arXiv v1, Lemma 2.3). On a sample of $A_{q,\mathbf{s},D_{\alpha'}}$, $qb = \langle q\mathbf{a}, \mathbf{s} \rangle + x \bmod q$ with $x := qe$ a continuous Gaussian of parameter $\alpha' q$, so $\ZZ - qb = \ZZ - x$ and the map outputs, within statistical distance $8\delta$, an LWE sample $(q\mathbf{a}, \langle q\mathbf{a}, \mathbf{s} \rangle + e' \bmod q)$ with $e' \gets D_{\ZZ,\alpha'' q}$ — [[BLPRS13 - Classical Hardness of Learning with Errors|BLPRS13]] (arXiv v1, Lemma 2.10). It takes uniform samples to uniform ones — standard. A distinguisher with advantage $\zeta$ for decision LWE with $(n, q, D_{\ZZ,\alpha'' q}, m)$ is thus one with advantage at least $\zeta - 8m\delta$ for decision $\mathrm{LWE}_{n,q,\alpha'}$.

Hence, if [[shortest-vector-problem#polynomial-factors|GapSVP is hard for polynomial factors]], [[learning-with-errors|LWE]] holds with $n := \secpar$, $q := 2^{\lceil n/2 \rceil}$ and error $D_{\ZZ,\alpha'' q}$, where $\alpha := n^{-2}$ and $\alpha' := \alpha \log^2 n$: Theorem 2.16 applies since $\alpha q \ge 2\sqrt{n}$, Theorem 2.17 since $1/q < \alpha < 1/\omega(\sqrt{\log n})$ and $\log^2 n = \omega(\log n)$, the factor $\tilde{O}(n/\alpha) = \tilde{O}(n^3)$ is at most $n^4$, and $\alpha'' q \ge \alpha q \ge 2\sqrt{n}$ with $\alpha'' \le \alpha' + \sigma/q < 2\alpha' \le 1/n$, all for large $n$ — standard.

## Notes

- Together, Theorems 2.16 and 2.17 of [[BLPRS13 - Classical Hardness of Learning with Errors|BLPRS13]] make LWE in dimension $k$ with modulus $2^{k/2}$, $k$ even, classically as hard as $k$-dimensional lattice problems, the starting point of the polynomial-modulus reduction — [[BLPRS13 - Classical Hardness of Learning with Errors|BLPRS13]] (arXiv v1, §4).
- For moduli down to $q \ge n/\alpha$, search LWE is as hard as a variant of GapSVP with an extra parameter $\zeta$, $\zeta$-to-$\gamma$-GapSVP, which is equivalent to standard GapSVP for $\zeta \ge 2^{n/2}$ — [[Pei09 - Public-Key Cryptosystems from the Worst-Case Shortest Vector Problem|Pei09]].
- Polynomial moduli are reached classically at the cost of dimension ([[gapsvp-poly-factor-to-lwe-blprs13|Polynomial-factor GapSVP ⇒ LWE (polynomial modulus)]]) — [[BLPRS13 - Classical Hardness of Learning with Errors|BLPRS13]]; quantumly, without that loss ([[gapsvp-to-lwe-reg05|GapSVP ⇒ LWE]]) — [[Reg05 - On Lattices, Learning with Errors, Random Linear Codes, and Cryptography|Reg05]].
