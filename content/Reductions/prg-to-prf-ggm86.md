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
rationale:
  class: "The construction calls the length-doubling PRG only as an oracle, once per input bit, and the hybrid reduction runs any PRF distinguisher only as an oracle to build a PRG distinguisher."
---

# PRG ⇒ PRF (GGM)

## Statement

If $G : \bits^n \to \bits^{2n}$ is a length-doubling [[pseudorandom-generator|PRG]], written $G(s) = G_0(s) \| G_1(s)$ with $|G_0(s)| = |G_1(s)| = n$, then the following is a [[pseudorandom-function|PRF]] with key space and range $\bits^n$ and domain $\bits^\ell$: $\KeyGen(1^\secpar)$ outputs $k \getsr \bits^n$, and $\Eval(k, x_1 \cdots x_\ell) := G_{x_\ell}(G_{x_{\ell-1}}(\cdots G_{x_1}(k) \cdots))$ — [[GGM86 - How to construct random functions|GGM86]].

## Sketch

$\Eval$ walks a binary tree of depth $\ell$ from the root $k$, keeping the left or right half of $G$'s output on each input bit. A hybrid over the $\ell$ tree levels reduces any $q$-query PRF distinguisher to a PRG distinguisher with a factor $q\ell$ loss — standard.

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
