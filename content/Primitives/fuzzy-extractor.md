---
type: primitive
status: draft
aliases:
  - Fuzzy extractor
  - Secure sketch
title: Fuzzy extractor
id: fuzzy-extractor
variants:
  secure-sketch: "#secure-sketches"
  computational-fuzzy-extractor: "#computational-fuzzy-extractors"
---

# Fuzzy extractor

A fuzzy extractor derives from a noisy secret $w$, such as a biometric reading, a nearly uniform key $R$ and public helper data $P$, such that any reading $w'$ close to $w$ recovers $R$ from $P$, while $R$ stays close to uniform given $P$ whenever $w$ has enough min-entropy — [[DRS04 - Fuzzy Extractors How to Generate Strong Keys from Biometrics and Other Noisy Data|DRS04]], [[DORS08 - Fuzzy Extractors How to Generate Strong Keys from Biometrics and Other Noisy Data|DORS08]].

## Syntax

Let $(\calW, \mathrm{dis})$ be a metric space, such as $\FF_q^n$ with Hamming distance or the subsets of a universe with the size of the symmetric difference. A fuzzy extractor for $\calW$ with key length $\ell$ and error tolerance $t$ is a pair of algorithms $(\Gen, \mathsf{Rep})$:

- $\Gen(w) \to (R, P)$, a randomized algorithm that takes $w \in \calW$ and outputs a key $R \in \bits^\ell$ and a helper string $P$,
- $\mathsf{Rep}(w', P) \to R'$, a deterministic algorithm that takes $w' \in \calW$ and a helper string and outputs a key.

## Properties

### Correctness

For all $w, w' \in \calW$ with $\mathrm{dis}(w, w') \le t$, if $(R, P) \gets \Gen(w)$ then $\mathsf{Rep}(w', P) = R$ — [[DORS08 - Fuzzy Extractors How to Generate Strong Keys from Biometrics and Other Noisy Data|DORS08]].

### Security

A fuzzy extractor $(\Gen, \mathsf{Rep})$ is an $(m, \ell, t, \varepsilon)$-**fuzzy extractor** if for every distribution $W$ on $\calW$ with [[indistinguishability#statistical-distance|min-entropy]] $H_\infty(W) \ge m$ and every distinguisher $\calA$, of unbounded running time,

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{fe}}_{(\Gen, \mathsf{Rep}),W,\calA}$}
\begin{algorithmic}
\State $w \gets W$; $(R_0, P) \gets \Gen(w)$; $R_1 \getsr \bits^\ell$; $b \getsr \bits$
\State $b' \gets \calA(R_b, P)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

$$
\Adv^{\mathrm{fe}}_{(\Gen, \mathsf{Rep}),W,\calA} := \left|2\Pr\!\left[\Game^{\mathrm{fe}}_{(\Gen, \mathsf{Rep}),W,\calA} = 1\right] - 1\right| \le \varepsilon,
$$

equivalently, the statistical distance between $(R, P)$ and $(U_\ell, P)$ is at most $\varepsilon$ — [[DORS08 - Fuzzy Extractors How to Generate Strong Keys from Biometrics and Other Noisy Data|DORS08]].

# Variations

## Secure sketches

A secure sketch is a pair $(\mathsf{SS}, \mathsf{Rec})$ with $\mathsf{SS}$ randomized and $\mathsf{Rec}$ deterministic such that $\mathsf{Rec}(w', \mathsf{SS}(w)) = w$ whenever $\mathrm{dis}(w, w') \le t$; it is an $(m, \tilde m, t)$-secure sketch if for every $W$ with $H_\infty(W) \ge m$ the [[leftover-hash-lemma#average-min-entropy|average min-entropy]] satisfies $\tilde H_\infty(W \mid \mathsf{SS}(W)) \ge \tilde m$. The difference $m - \tilde m$ is its entropy loss — [[DORS08 - Fuzzy Extractors How to Generate Strong Keys from Biometrics and Other Noisy Data|DORS08]].

A secure sketch and a strong extractor for average min-entropy give a fuzzy extractor: $\Gen(w)$ outputs $P = (\mathsf{SS}(w), x)$ for a uniform seed $x$ and $R = \mathrm{Ext}(w; x)$, and $\mathsf{Rep}$ recovers $w$ with $\mathsf{Rec}$ and recomputes $R$. Instantiated with universal hashing, an $(m, \tilde m, t)$-secure sketch yields an $(m, \ell, t, \varepsilon)$-fuzzy extractor with $\ell = \tilde m - 2\log(1/\varepsilon) + 2$, by the [[leftover-hash-lemma|leftover hash lemma]] for average min-entropy — [[DORS08 - Fuzzy Extractors How to Generate Strong Keys from Biometrics and Other Noisy Data|DORS08]].

## Robust and reusable fuzzy extractors

A **robust** fuzzy extractor lets $\mathsf{Rep}$ detect, with high probability, a helper string modified by an adversary, which makes it usable for authentication over channels that the adversary controls — [[BDKOS05 - Secure Remote Authentication Using Biometric Data|BDKOS05]]. A **reusable** fuzzy extractor stays secure when $\Gen$ is run on several correlated readings of the same source; [[Boy04 - Reusable Cryptographic Fuzzy Extractors|Boy04]] defines reusability and shows that it does not hold for every fuzzy extractor.

## Computational fuzzy extractors

A **computational** fuzzy extractor for a family of sources on $\calW$ requires $(R, P)$ to be computationally indistinguishable from $(U_\ell, P)$ for every source $W$ in the family — [[FMR13 - Computational Fuzzy Extractors|FMR13]]. Secure sketches defined with computational entropy notions, conditional HILL entropy or unpredictability entropy, are still subject to the coding-theoretic lower bounds of information-theoretic sketches for high-entropy Hamming-metric sources; analyzed directly, a computational fuzzy extractor from [[learning-with-errors|LWE]] outputs a key as long as the source's entropy, which is impossible information-theoretically, for uniform and symbol-fixing sources — [[FMR13 - Computational Fuzzy Extractors|FMR13]].

# Other results

- **Code offset.** For a $q$-ary code $C$ of length $n$ with $q^k$ codewords that corrects $t$ errors, $\mathsf{SS}(w) = w - c$ for a uniform codeword $c \in C$, with $\mathsf{Rec}(w', s)$ decoding $w' - s$ to the nearest codeword $c'$ and outputting $s + c'$, is a secure sketch for the Hamming metric on $\FF_q^n$ with entropy loss at most $(n - k)\log q$ — [[DORS08 - Fuzzy Extractors How to Generate Strong Keys from Biometrics and Other Noisy Data|DORS08]]; for $q = 2$ it is the offset component of the fuzzy commitment of [[JW99 - A Fuzzy Commitment Scheme|JW99]], which also publishes a hash of $c$. For a linear code the sketch can be the syndrome of $w$, a deterministic function with the same entropy loss — [[DORS08 - Fuzzy Extractors How to Generate Strong Keys from Biometrics and Other Noisy Data|DORS08]].
- **Set difference.** For subsets of a universe of size $N$, the PinSketch construction from BCH codes has entropy loss at most $t \lceil \log(N + 1) \rceil$, independent of the size of the sets — [[DORS08 - Fuzzy Extractors How to Generate Strong Keys from Biometrics and Other Noisy Data|DORS08]].
