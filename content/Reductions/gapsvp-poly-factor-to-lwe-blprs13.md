---
type: reduction
status: draft
title: Polynomial-factor GapSVP ⇒ LWE (polynomial modulus)
aliases: []
id: red-gapsvp-poly-factor-to-lwe-blprs13
kind: implication
hypotheses: [gapsvp-poly-factor]
conclusion: lwe
class: fully-black-box
model: standard
source:
  - "[[BLPRS13 - Classical Hardness of Learning with Errors|BLPRS13]]"
security-loss: "polynomial"
rationale:
  class: "The classical worst-case algorithm calls an arbitrary average-case LWE distinguisher only as an oracle, for every distinguisher with noticeable advantage."
---

# Polynomial-factor GapSVP ⇒ LWE (polynomial modulus)

## Statement

Let $k \ge 2$ be even, $q := 2^{k/2}$ and $\alpha \in (0, 1)$ with $\alpha q \ge 2\sqrt{k}$ and $\alpha < 1/\omega(\sqrt{\log k})$, and let $\alpha' := \alpha \cdot \omega(\log k)$. Worst-case $\mathrm{GapSVP}_{\tilde{O}(k/\alpha)}$ in dimension $k$ reduces classically to search $\mathrm{LWE}_{k,q,\alpha}$, and search $\mathrm{LWE}_{k,q,\alpha}$ to decision $\mathrm{LWE}_{k,q,\alpha'}$ — [[BLPRS13 - Classical Hardness of Learning with Errors|BLPRS13]] (arXiv v1, Theorems 2.16 and 2.17, from Theorem 3.1 of [[Pei09 - Public-Key Cryptosystems from the Worst-Case Shortest Vector Problem|Pei09]] and Theorem 3.1 of [[MP12 - Trapdoors for Lattices Simpler Tighter Faster Smaller|MP12]]). A sample is $(\mathbf{a}, \langle \mathbf{a}, \mathbf{s} \rangle + e \bmod 1)$ with $\mathbf{a}$ uniform over $(q^{-1}\ZZ/\ZZ)^k$ and $e$ a continuous Gaussian of density proportional to $\exp(-\pi x^2/\alpha^2)$; $\mathrm{LWE}_{k,m,q,\alpha}$ is the decision problem with $m$ samples, and noise at most $\beta$ allows any parameter $\beta(\mathbf{s}) \le \beta$ — [[BLPRS13 - Classical Hardness of Learning with Errors|BLPRS13]] (arXiv v1, Definitions 2.11 and 2.14). This error is not the [[discrete-gaussian|discrete Gaussian]] $D_{\ZZ,\alpha q}$ of [[learning-with-errors|LWE]].

Let $m \ge n \ge 1$ be integers, $\varepsilon, \xi \in (0, 1/2)$ and $\delta > 0$ with $n \ge (k + 1)k/2 + 2\log_2(1/\delta)$ and $\alpha' \ge \sqrt{\ln(2n(1 + 1/\varepsilon))/\pi}/q$, let $1 \le q' \le q$, and let $\beta := (10n\alpha'^2 + (4n/(\pi q'^2))\ln(2n(1 + 1/\xi)))^{1/2}$. There are three reductions from decision $\mathrm{LWE}_{k,m,q,\alpha'}$ to decision LWE in dimension $n$ with modulus $q'$, $m$ samples, secret uniform over $\{0,1\}^n$ and noise at most $\beta$, such that for every algorithm with advantage $\zeta$ for the latter, one of them gives advantage at least $(\zeta - \delta)/(3m) - 41\varepsilon/2 - 2^{-k-1} - 14\xi m$ for the former — [[BLPRS13 - Classical Hardness of Learning with Errors|BLPRS13]] (arXiv v1, Theorem 4.1 with Corollary 3.2, §4). An algorithm with advantage $\varepsilon_1$ for uniform secrets at noise exactly $\beta$ gives one with advantage $1/3$ at every noise at most $\beta$, with sample count and running time $\poly(m, 1/\varepsilon_1, n, \log q')$ — [[BLPRS13 - Classical Hardness of Learning with Errors|BLPRS13]] (arXiv v1, Lemma 2.15) — and adding $\langle \mathbf{a}, \mathbf{t} \rangle$ for uniform $\mathbf{t}$ turns binary-secret samples into uniform-secret samples with the same noise, and uniform samples into uniform ones — standard.

Let $\sigma := \sqrt{\ln(2(1 + 2^n))/\pi}$, so that $\sigma \ge \eta_{2^{-n}}(\ZZ)$ — [[BLPRS13 - Classical Hardness of Learning with Errors|BLPRS13]] (arXiv v1, Lemma 2.5) — and $\sigma < \sqrt{n}$, and let $\beta'' := \sqrt{\beta^2 + \sigma^2/q'^2}$. Mapping $(\mathbf{a}, b)$ to $(q'\mathbf{a}, q'b + y \bmod q')$ with $y \gets D_{\ZZ - q'b, \sigma}$, which is sampled exactly in polynomial time since $\sigma \ge \sqrt{\ln 6/\pi}$ — [[BLPRS13 - Classical Hardness of Learning with Errors|BLPRS13]] (arXiv v1, Lemma 2.3) — takes a sample with noise exactly $\beta$ to within statistical distance $8 \cdot 2^{-n}$ of an LWE sample $(q'\mathbf{a}, \langle q'\mathbf{a}, \mathbf{s} \rangle + e' \bmod q')$ with $e' \gets D_{\ZZ,\beta'' q'}$ — [[BLPRS13 - Classical Hardness of Learning with Errors|BLPRS13]] (arXiv v1, Lemma 2.10) — and uniform samples to uniform ones — standard. A distinguisher with advantage $\zeta$ for decision LWE with $(n, q', D_{\ZZ,\beta'' q'}, m)$ thus has advantage at least $\zeta - 8m2^{-n}$ at noise exactly $\beta$.

Hence, if [[shortest-vector-problem#polynomial-factors|GapSVP is hard for polynomial factors]], [[learning-with-errors|LWE]] holds with $k := 2\secpar$, $n := k(k+5)/2$, $q' := k^4$ and error $D_{\ZZ,\beta'' q'}$, taking $\alpha := k^{-2}$, $\alpha' := \alpha\log^2 k$ and $\delta = \varepsilon = \xi := 2^{-k}$. Then $n = (k+1)k/2 + 2\log_2(1/\delta)$, so the GapSVP dimension is $k = \Theta(\sqrt{n})$; for large $k$, $q' \le q$, the factor $\tilde{O}(k/\alpha) = \tilde{O}(k^3)$ is at most $k^4$, $\sqrt{5}\log^2 k/k \le \beta \le 4\log^2 k/k$ since $k^2/2 \le n \le k^2$, so $\beta'' q' \ge \beta q' \ge 2\sqrt{n}$ and $\beta'' \le \beta + \sigma/q' \le n^{-1/4}$; and every loss in advantage above is negligible or a factor $\poly(\secpar)$ — standard.

## Notes

- Informally, solving $n$-dimensional LWE with $\poly(n)$ modulus implies an equally efficient solution to a worst-case lattice problem in dimension $\sqrt{n}$, and the modulus $q'$ can be taken almost as small as $\sqrt{n}$ — [[BLPRS13 - Classical Hardness of Learning with Errors|BLPRS13]] (arXiv v1, Theorem 1.1 and §4).
- The quadratic loss in dimension is inherited from [[Pei09 - Public-Key Cryptosystems from the Worst-Case Shortest Vector Problem|Pei09]]: by modulus–dimension switching, $n$-dimensional LWE with modulus $2^n$ is essentially as hard as $n^2$-dimensional LWE with polynomial modulus, and so, by Regev's quantum reduction, as hard as $n^2$-dimensional lattice problems — [[BLPRS13 - Classical Hardness of Learning with Errors|BLPRS13]] (arXiv v1, §1).
- Regev's quantum reduction reaches polynomial modulus without the dimension loss ([[gapsvp-to-lwe-reg05|GapSVP ⇒ LWE]]) — [[Reg05 - On Lattices, Learning with Errors, Random Linear Codes, and Cryptography|Reg05]].
