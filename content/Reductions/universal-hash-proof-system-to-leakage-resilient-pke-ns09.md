---
type: reduction
status: draft
title: "Universal HPS ⇒ LR-PKE"
aliases: []
id: red-universal-hash-proof-system-to-leakage-resilient-pke-ns09
kind: implication
hypotheses: [universal-hash-proof-system]
conclusion: leakage-resilient-pke
class: fully-black-box
model: standard
source:
  - "[[NS09 - Public-Key Cryptosystems Resilient to Key Leakage|NS09]]"
via:
  - "[[leftover-hash-lemma|leftover hash lemma]]"
security-loss: ""
rationale:
  class: "The scheme calls the hash proof system's algorithms and a fixed extractor only as oracles, and the reduction runs any adversary once as an oracle, answering its leakage queries with the hash key it samples itself."
---

# Universal HPS ⇒ LR-PKE

## Statement

Let $\mathsf{HPS}$ be an $\varepsilon$-[[hash-proof-system#universality|universal]] [[hash-proof-system|hash proof system]] with [[hash-proof-system#ideal-families-and-approximation|key approximation error]] $\delta_H$ for a hard subset membership problem $\calM$, with hash values in $\Pi$, and let $\mathsf{Ext} : \Pi \times \bits^d \to \bits^m$ be a pairwise-independent hash function indexed by its seed $\sigma \in \bits^d$, an average-case strong randomness extractor by the [[leftover-hash-lemma#average-min-entropy|average-case leftover hash lemma]] — [[DORS08 - Fuzzy Extractors How to Generate Strong Keys from Biometrics and Other Noisy Data|DORS08]]. The scheme below, with message space $\bits^m$, is [$\ell$-leakage-resilient](leakage-resilient-public-key-encryption#leakage-resilient-cpa-security) for

$$
\ell \le \log(1/(\varepsilon + 2\delta_H)) - m - \omega(\log \secpar),
$$

with no assumption beyond the hardness of $\calM$, and its efficiency is that of $\mathsf{HPS}$. For $\delta_H = 0$ this is the bound $\ell \le \log(1/\varepsilon) - m - \omega(\log \secpar)$ of [[NS09 - Public-Key Cryptosystems Resilient to Key Leakage|NS09]]; for $\delta_H > 0$ the same argument applies with the average guessing probability below — standard.

```pseudocode
\begin{algorithm}
\algname{Algorithm}
\caption{Leakage-resilient encryption from a hash proof system}
\begin{algorithmic}
\State $\KeyGen(1^\secpar)$: $\Lambda \gets \mathsf{I}(1^\secpar)$; $k \gets \mathsf{HPS}.\KeyGen(\Lambda)$; $s := \mathsf{Proj}(k)$; $\pk := (\Lambda, s)$; $\sk := k$
\State $\Enc(\pk, M)$: sample $(x, w)$ with the sampler of $\calM$; $\sigma \getsr \bits^d$; $\pi := \mathsf{Pub}(s, x, w)$
\Return $(x, \sigma, \mathsf{Ext}(\pi, \sigma) \oplus M)$
\State $\Dec(\sk, (x, \sigma, \psi))$:
\Return $\psi \oplus \mathsf{Ext}(\mathsf{Priv}(k, x), \sigma)$
\end{algorithmic}
\end{algorithm}
```

## Sketch

Projectivity lets the reduction, which holds $k$ and so answers every leakage query, compute the challenge mask from $\mathsf{Priv}(k, x)$; replacing the sampled $x$ by $x \getsr L$ costs the subset error $\delta_L$ on instances in the support of the instance distribution, the others having probability at most $\delta_{\mathsf{I}}$, and replacing $x \getsr L$ by $x \getsr X \setminus L$ costs the subset-membership advantage. For $x \notin L$ and an instance in the support of the instance distribution, the probability of predicting $H_k(x)$ from $\alpha(k)$, averaged over $\alpha(k)$, is at most $\varepsilon$ for the ideal family and so at most $\varepsilon + 2\delta_H$ for $\mathbf{H}$; so $H_k(x)$ has average min-entropy at least $\log(1/(\varepsilon + 2\delta_H))$ given $\pk$, and $\ell$ bits of leakage on $k$ lower it by at most $\ell$, so by the leftover hash lemma $\mathsf{Ext}(H_k(x), \sigma)$ is statistically close to uniform given $\calA$'s view when $\log(1/(\varepsilon + 2\delta_H)) - \ell - m = \omega(\log \secpar)$.

## Notes

- Without leakage, a smooth hash proof system gives CPA-secure encryption with the mask $\pi$ itself: [[hash-proof-system-to-pke-cpa-security-cs02|HPS ⇒ CPA-secure PKE]] — [[CS02 - Universal Hash Proofs and a Paradigm for Adaptive Chosen Ciphertext Secure Public-Key Encryption|CS02]].
- Known hash proof systems instantiate the construction under [[decisional-diffie-hellman|DDH]] and its [$d$-Linear](bilinear-map-assumptions#k-linear-assumption) variants, [[quadratic-residuosity|quadratic residuosity]] and [[decisional-composite-residuosity|DCR]] — [[NS09 - Public-Key Cryptosystems Resilient to Key Leakage|NS09]]. A new hash proof system raises the leakage to a $1 - o(1)$ fraction of the secret key: [[prime-order-ddh-to-leakage-resilient-pke-ns09|DDH ⇒ LR-PKE]], [$d$-Linear ⇒ LR-PKE](k-linear-assumption-to-leakage-resilient-pke-ns09) — [[NS09 - Public-Key Cryptosystems Resilient to Key Leakage|NS09]].
