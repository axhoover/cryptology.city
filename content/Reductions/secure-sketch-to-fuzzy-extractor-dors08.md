---
type: reduction
status: draft
title: Secure sketch ⇒ Fuzzy extractor
aliases: []
id: red-secure-sketch-to-fuzzy-extractor-dors08
kind: implication
hypotheses: [secure-sketch]
conclusion: fuzzy-extractor
class: free
model: standard
source:
  - "[[DORS08 - Fuzzy Extractors How to Generate Strong Keys from Biometrics and Other Noisy Data|DORS08]]"
via:
  - "[[leftover-hash-lemma|leftover hash lemma]]"
security-loss: ""
rationale:
  class: "The theorem is information-theoretic: the sketch's guarantee is an entropy bound, not a game against an adversary, so there is no hardness assumption for a black-box reduction to break."
---

# Secure sketch ⇒ Fuzzy extractor

## Statement

Let $(\mathsf{SS}, \mathsf{Rec})$ be an $(m, \tilde m, t)$-[[fuzzy-extractor#secure-sketches|secure sketch]] for a metric space $\calW$ whose elements are represented as $n$-bit strings, and let $\{h_x : \bits^n \to \bits^\ell\}_{x \in X}$ be a [[universal-hash-function#universal|universal]] hash family with $\ell \le \tilde m - 2\log(1/\varepsilon) + 2$. Then $\Gen(w)$, which samples $x \getsr X$ and outputs $R = h_x(w)$ and $P = (\mathsf{SS}(w), x)$, with $\mathsf{Rep}(w', (s, x)) = h_x(\mathsf{Rec}(w', s))$, is an $(m, \ell, t, \varepsilon)$-[[fuzzy-extractor|fuzzy extractor]] for $\calW$, by the [[leftover-hash-lemma#average-min-entropy|leftover hash lemma for average min-entropy]]; in particular the key can have length $\ell = \tilde m - 2\log(1/\varepsilon) + 2$ — [[DORS08 - Fuzzy Extractors How to Generate Strong Keys from Biometrics and Other Noisy Data|DORS08]].

## Sketch

$\mathsf{Rep}$ is correct because $\mathsf{Rec}(w', \mathsf{SS}(w)) = w$ whenever $\mathrm{dis}(w, w') \le t$. For security, $\tilde H_\infty(W \mid \mathsf{SS}(W)) \ge \tilde m$, so the leftover hash lemma with side information $\mathsf{SS}(W)$ bounds the statistical distance between $(h_x(W), x, \mathsf{SS}(W))$ and $(U_\ell, x, \mathsf{SS}(W))$ by $\tfrac12 \sqrt{2^{\ell - \tilde m}} \le \varepsilon$ — [[DORS08 - Fuzzy Extractors How to Generate Strong Keys from Biometrics and Other Noisy Data|DORS08]].

## Notes

- The same construction works with any average-case $(n, \tilde m, \ell, \varepsilon)$-strong extractor in place of the hash family; a worst-case $(n, \tilde m - \log(1/\delta), \ell, \varepsilon)$-strong extractor gives an $(m, \ell, t, \varepsilon + \delta)$-fuzzy extractor, and an average-case secure sketch gives an average-case fuzzy extractor — [[DORS08 - Fuzzy Extractors How to Generate Strong Keys from Biometrics and Other Noisy Data|DORS08]].
- A sketch whose output takes at most $2^\lambda$ values has entropy loss at most $\lambda$, so the construction gives an $(m, m - \lambda - 2\log(1/\varepsilon) + 2, t, \varepsilon)$-fuzzy extractor for every $m$ — [[DORS08 - Fuzzy Extractors How to Generate Strong Keys from Biometrics and Other Noisy Data|DORS08]].
