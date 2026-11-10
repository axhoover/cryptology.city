---
type: folklore
status: draft
aliases:
  - LHL
  - Leftover hash lemma
title: Leftover hash lemma
id: leftover-hash-lemma
---

# Leftover hash lemma

A family $\calH$ of functions $\bits^n \to \bits^m$ is **2-universal** ([[universal-hash-function#universal|universal]]) if for all distinct $x, x' \in \bits^n$, $\Pr_{h \getsr \calH}\!\left[h(x) = h(x')\right] \le 2^{-m}$ — [[CW79 - Universal Classes of Hash Functions|CW79]]. A random variable $X$ on $\bits^n$ has **min-entropy** $H_\infty(X) := -\log \max_x \Pr[X = x]$, and $\Delta$ denotes statistical distance.

Let $\calH$ be a 2-universal family of functions $\bits^n \to \bits^m$ and $X$ a random variable on $\bits^n$ with $H_\infty(X) \ge k$. For $h \getsr \calH$ independent of $X$ and $U_m$ uniform on $\bits^m$ independent of $h$,

$$
\Delta\big((h, h(X)),\ (h, U_m)\big) \le \tfrac12 \sqrt{2^{m-k}}
$$

— [[ILL89 - Pseudo-random Generation from One-way Functions|ILL89]], [[HILL99 - A Pseudorandom Generator from Any One-Way Function|HILL99]]. In particular, $m \le k - 2\log(1/\varepsilon)$ gives distance at most $\varepsilon/2$.

## Proof

For a random variable $Z$ on a finite set $\Omega$ with independent copy $Z'$, write $\mathrm{CP}(Z) := \Pr[Z = Z']$. By Cauchy–Schwarz,

$$
\Delta(Z, U_\Omega) = \tfrac12 \sum_{\omega \in \Omega} \left|\Pr[Z = \omega] - \tfrac{1}{|\Omega|}\right| \le \tfrac12 \sqrt{|\Omega| \sum_{\omega \in \Omega} \left(\Pr[Z = \omega] - \tfrac{1}{|\Omega|}\right)^2} = \tfrac12 \sqrt{|\Omega|\,\mathrm{CP}(Z) - 1}.
$$

Take $Z = (h, h(X))$ on $\Omega = \calH \times \bits^m$, with $\calH$ identified with its index set, and an independent copy $(h', X')$. Then $\Pr[X = X'] \le \max_x \Pr[X = x] \le 2^{-k}$, distinct inputs collide under $h$ with probability at most $2^{-m}$, and so

$$
\mathrm{CP}(Z) = \Pr[h = h'] \cdot \Pr\!\left[h(X) = h(X')\right] \le \frac{2^{-k} + 2^{-m}}{|\calH|}.
$$

Hence $|\Omega|\,\mathrm{CP}(Z) - 1 \le 2^{m-k}$, and $(h, U_m)$ is uniform on $\Omega$ — standard.

The proof uses $H_\infty(X) \ge k$ only through $\Pr[X = X'] \le 2^{-k}$, so the bound holds whenever the collision entropy $-\log \Pr[X = X']$ is at least $k$. For a family of functions into a finite set $\calR$ with collision probability at most $1/|\calR|$ on distinct inputs, the same argument gives $\tfrac12 \sqrt{|\calR| \cdot 2^{-k}}$ — standard.

## 2-universal families

Every [[universal-hash-function#strongly-universal|pairwise-independent]] family is 2-universal — standard. The linear maps $x \mapsto \mathbf{A}x$ for $\mathbf{A} \getsr \FF_2^{m \times n}$ form a 2-universal family, since $\Pr[\mathbf{A}(x - x') = 0] = 2^{-m}$ for $x \ne x'$ — [[CW79 - Universal Classes of Hash Functions|CW79]].

## Average min-entropy

For a pair of random variables $(X, Z)$, the **average min-entropy** of $X$ given $Z$ is

$$
\tilde H_\infty(X \mid Z) := -\log \mathbb{E}_{z \gets Z}\!\left[\max_x \Pr[X = x \mid Z = z]\right].
$$

If $Z$ takes at most $2^\ell$ values, then $\tilde H_\infty(X \mid Z) \ge H_\infty(X) - \ell$, since $\sum_z \max_x \Pr[X = x, Z = z] \le 2^\ell \max_x \Pr[X = x]$ — [[DORS08 - Fuzzy Extractors How to Generate Strong Keys from Biometrics and Other Noisy Data|DORS08]].

For every 2-universal family $\calH$ of functions $\bits^n \to \bits^m$ and every pair $(X, Z)$ with $X$ on $\bits^n$ and $\tilde H_\infty(X \mid Z) \ge k$, with $h \getsr \calH$ independent of $(X, Z)$ and $U_m$ uniform and independent of $(h, Z)$,

$$
\Delta\big((h, h(X), Z),\ (h, U_m, Z)\big) \le \tfrac12 \sqrt{2^{m-k}},
$$

so $m \le k - 2\log(1/\varepsilon) + 2$ gives distance at most $\varepsilon$ — [[DORS08 - Fuzzy Extractors How to Generate Strong Keys from Biometrics and Other Noisy Data|DORS08]]. Conditioned on $Z = z$, the lemma bounds the distance by $\tfrac12 \sqrt{2^m \max_x \Pr[X = x \mid Z = z]}$; averaging over $z$ and applying Jensen's inequality to the concave $\sqrt{\cdot}$ gives the bound.

<!-- BEGIN GENERATED participates-in 27097de92b85 -->

## Participates in

**Used via Leftover hash lemma**

- [[crhf-to-statistically-hiding-commitment-dpp97|CRHF ⇒ Statistically hiding COM]]
- [[lossy-trapdoor-function-to-ot-pw08|Lossy TDF ⇒ OT]]
- [[lossy-trapdoor-functions-to-pke|Lossy trapdoor functions ⇒ IND-CCA PKE]]
- [[lwe-to-hibe-selective-security-chkp10|LWE ⇒ Selectively secure HIBE (bonsai trees)]]
- [[lwe-to-leveled-fully-homomorphic-encryption-bgv12|LWE with sub-exponential ratio ⇒ Leveled FHE (BGV12)]]
- [[lwe-to-leveled-fully-homomorphic-encryption-bv14|LWE with polynomial ratio ⇒ Leveled FHE (BV14)]]
- [[lwe-to-pke-reg05|LWE ⇒ PKE]]
- [[owf-to-prg-hill99|OWF ⇒ PRG]]
- [[secure-sketch-to-fuzzy-extractor-dors08|Secure sketch ⇒ Fuzzy extractor]]
- [[circular-security-and-lwe-to-he|LWE at sub-exponential and polynomial ratios ⇒ Bootstrappable SHE (BV11)]]
- [[universal-hash-proof-system-to-leakage-resilient-pke-ns09|Universal HPS ⇒ LR-PKE]]

<!-- END GENERATED participates-in -->
