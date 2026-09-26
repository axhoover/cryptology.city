---
type: reduction
status: draft
title: PRG ⇒ PRF (GGM)
aliases:
  - GGM construction
id: red-prg-to-prf-ggm86
kind: implication
hypotheses: [prg]
conclusion: prf
class: fully-black-box
model: standard
source:
  - "[[GGM86 - How to construct random functions|GGM86]]"
security-loss: ""
---

# PRG ⇒ PRF (GGM)

A length-doubling [[pseudorandom-generator|PRG]] implies a
[[pseudorandom-function|PRF]], by the GGM binary-tree construction.

## Statement

A length-doubling [[pseudorandom-generator|PRG]] $G : \bits^n \to \bits^{2n}$ yields a [[pseudorandom-function|PRF]] with key space and range $\bits^n$ and domain $\bits^\ell$: $\KeyGen(1^\secpar)$ outputs $k \getsr \bits^n$ and, writing $G(s) = G_0(s) \| G_1(s)$, $\Eval(k, x_1 \cdots x_\ell) := G_{x_\ell}(G_{x_{\ell-1}}(\cdots G_{x_1}(k) \cdots))$ — [[GGM86 - How to construct random functions|GGM86]].

## Sketch

The construction walks a binary tree of depth $\ell$: start from $k$ and, on bit $x_i$, keep the left or right half of $G$'s output. A hybrid over the $\ell$ tree levels reduces any $q$-query PRF distinguisher to a PRG distinguisher with a factor $q\ell$ loss — standard.

```pseudocode
\begin{algorithm}
\algname{Algorithm}
\caption{$\Eval(k, x_1 \cdots x_\ell)$}
\begin{algorithmic}
\State $y \gets k$
\Comment{$G(s) = G_0(s) \,\|\, G_1(s)$ with $|G_0(s)| = |G_1(s)| = |s|$}
\For{$i = 1, \ldots, \ell$}
\State $y \gets G_{x_i}(y)$
\EndFor
\Return $y$
\end{algorithmic}
\end{algorithm}
```

## Notes

`class: fully-black-box`: The construction invokes the length-doubling PRG only as an oracle (one call per input bit); the security proof is a hybrid argument over the tree levels whose reduction runs any PRF distinguisher as an oracle to build a PRG distinguisher. [[black-box-separations|Black-Box Separations]] uses this construction as its worked example of the notion.
