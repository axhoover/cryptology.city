---
type: reduction
status: draft
title: OWP ⇒ PRG (Blum–Micali–Yao)
aliases:
  - Blum–Micali–Yao generator
  - BMY generator
id: red-owp-to-prg-yao82a-gl89
kind: implication
hypotheses: [owp]
conclusion: prg
class: fully-black-box
model: standard
source:
  - "[[Yao82a - Theory and Applications of Trapdoor Functions|Yao82a]]"
  - "[[GL89 - A Hard-Core Predicate for All One-Way Functions|GL89]]"
security-loss: "a factor ℓ (the output length) from the hybrid argument, plus the polynomial loss of Goldreich–Levin decoding"
rationale:
  class: "The generator evaluates the permutation only as an oracle, and the reduction turns any distinguisher, used only as an oracle, into a predictor for the inner-product bit and then, by Goldreich–Levin decoding, into an inverter."
---

# OWP ⇒ PRG (Blum–Micali–Yao)

## Statement

Every [[one-way-permutation|one-way permutation]] $\pi$ on $\bits^n$ yields a [[pseudorandom-generator|PRG]] of any polynomial stretch — [[Yao82a - Theory and Applications of Trapdoor Functions|Yao82a]]. With the [[GL89 - A Hard-Core Predicate for All One-Way Functions|GL89]] hard-core predicate $b(x, r) := \langle x, r \rangle \bmod 2$, the generator

$$
G(x, r) := \bigl(b(x, r),\ b(\pi(x), r),\ \ldots,\ b(\pi^{\ell-1}(x), r),\ \pi^{\ell}(x),\ r\bigr)
$$

maps $2n$ bits to $2n + \ell$ bits and is pseudorandom for every polynomial $\ell = \ell(n)$ — [[GL89 - A Hard-Core Predicate for All One-Way Functions|GL89]].

## Sketch

$b$ is hard-core for $(x, r) \mapsto (\pi(x), r)$, so $(\pi(x), r, b(x, r))$ is pseudorandom, which is the case $\ell = 1$. Since $\pi$ permutes $\bits^n$, each $\pi^{i}(x)$ is uniform, and a hybrid argument over the $\ell$ output bits, read in reverse order, turns a distinguisher with advantage $\varepsilon$ into a predictor of $b$ with advantage $\varepsilon/\ell$, which GL89 decoding turns into an inverter for $\pi$ — standard.

```pseudocode
\begin{algorithm}
\algname{Algorithm}
\caption{$G(x, r)$}
\begin{algorithmic}
\State $s \gets x$
\For{$i = 1, \ldots, \ell$}
\State $\sigma_i \gets \langle s, r \rangle \bmod 2$; $s \gets \pi(s)$
\EndFor
\Return $(\sigma_1, \ldots, \sigma_\ell, s, r)$
\end{algorithmic}
\end{algorithm}
```

## Notes

- Efficiency: one evaluation of $\pi$ per output bit. If no circuit of size $S$ inverts $\pi$ with probability above $1/S$, the inner products of $x$ with $\Theta(\log S)$ independent strings are simultaneously hard-core, so each evaluation can yield $\Theta(\log S)$ output bits — standard. No fully-black-box construction does better: a generator that stretches its seed by $k$ bits must query such a permutation at $\Omega(k / \log S)$ points — [[GT00 - Lower Bounds on the Efficiency of Generic Cryptographic Constructions|GT00]].
- For the discrete-logarithm permutation, with the half-interval predicate as the hard-core bit, the construction is the [[dlog-to-prg-bm84|Blum–Micali generator]] — [[BM84 - How to Generate Cryptographically Strong Sequences of Pseudo-Random Bits|BM84]].
- For one-way functions that are not permutations, the iteration fails because $f^{i}(x)$ need not be uniform; [[owf-to-prg-hill99|OWF ⇒ PRG]] instead builds a false-entropy generator from $f$, pairwise-independent hashing of $x$ and the GL89 bit, and extracts its pseudoentropy by further hashing — [[HILL99 - A Pseudorandom Generator from Any One-Way Function|HILL99]].
