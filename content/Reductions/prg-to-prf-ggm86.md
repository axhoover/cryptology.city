---
type: reduction
status: draft
title: PRG ⇒ Compression-function PRF (GGM)
aliases:
  - GGM construction
id: red-prg-to-prf-ggm86
kind: implication
hypotheses: [prg]
conclusion: compression-function-prf
class: fully-black-box
model: standard
source:
  - "[[GGM86 - How to construct random functions|GGM86]]"
security-loss: "factor $q\\ell$ for $q$ queries on $\\ell$-bit inputs: a hybrid over the $\\ell$ tree levels, each step a hybrid over the at most $q$ nodes queried at that level; this is for the length-doubling $G$, and stretching a given PRG to $G$ adds its own loss"
rationale:
  class: "The construction calls the length-doubling PRG only as an oracle, once per input bit, and the hybrid reduction runs any PRF distinguisher only as an oracle to build a PRG distinguisher."
---

# PRG ⇒ Compression-function PRF (GGM)

## Statement

Let $n = n(\secpar)$ and $\ell = \ell(\secpar)$ be polynomially bounded and computable from $1^\secpar$ in polynomial time, with $\ell \ge n$. If $G : \bits^n \to \bits^{2n}$ is a length-doubling [[pseudorandom-generator|PRG]], written $G(s) = G_0(s) \| G_1(s)$ with $|G_0(s)| = |G_1(s)| = n$, then

$$
f(k, x_1 \cdots x_\ell) := G_{x_\ell}(G_{x_{\ell-1}}(\cdots G_{x_1}(k) \cdots)), \qquad f : \bits^n \times \bits^\ell \to \bits^n,
$$

is a [[pseudorandom-function#compression-function-prfs|compression-function PRF]] with $c := n$ and $b := \ell$: the PRF $\PRF = (\KeyGen, f)$ with key space and range $\bits^n$, domain $\bits^\ell$ and $\KeyGen(1^\secpar)$ outputting $k \getsr \bits^n$ is pseudorandom — [[GGM86 - How to construct random functions|GGM86]] for $\ell = n$, and by the same tree hybrid for every $\ell$ — standard. The seed length of a PRG is $\omega(\log \secpar)$: otherwise $2^{n(\secpar)} \le \secpar^C$ for a constant $C$ and infinitely many $\secpar$, and the efficient distinguisher that on those $\secpar$ tries every seed and accepts iff one maps to its input accepts every $G(s)$, but a uniform string of $\bits^{2n}$ only with probability at most $2^n/2^{2n} = 2^{-n}$, so its advantage is at least $1 - 2^{-n} \ge 1/2$ there — standard. So $c = n = \omega(\log \secpar)$ and $c \le b$, as a compression-function PRF requires. Any PRG can be [[pseudorandom-generator#pseudorandomness|stretched]] to a length-doubling $G$ — standard.

## Sketch

$f(k, \cdot)$ walks a binary tree of depth $\ell$ from the root $k$, keeping the left or right half of $G$'s output on each input bit. For $0 \le i \le \ell$, hybrid $H_i$ answers $x$ with $G_{x_\ell}(\cdots G_{x_{i+1}}(S_i(x_1 \cdots x_i)) \cdots)$, where $S_i$ gives each depth-$i$ prefix an independent uniform seed in $\bits^n$, sampled lazily on first use; $H_0$ is $f$ with $k = S_0(\varepsilon)$, and $H_\ell$ is a uniformly random function $\bits^\ell \to \bits^n$. $H_i$ and $H_{i+1}$ differ only in replacing $G(s)$, for the seeds $s$ of the at most $q$ depth-$i$ prefixes the queries reach, by uniform strings in $\bits^{2n}$; this is $q$ independent PRG instances, and an inner hybrid that switches them one at a time, in order of first use, costs one PRG distinguishing advantage per switch. A PRG distinguisher $\calB$ that picks the level $i < \ell$ and the switch $j \le q$ uniformly, plants its challenge there and simulates the rest with $G$, runs in the time of $\calA$ plus $O(q\ell)$ evaluations of $G$ and has $\Adv^{\mathrm{prf}}_{\PRF,\calA}(\secpar) \le q\ell \cdot \Adv^{\mathrm{prg}}_{G,\calB}(\secpar)$ for every $\calA$ making $q$ queries — standard.

```pseudocode
\begin{algorithm}
\algname{Algorithm}
\caption{$f(k, x_1 \cdots x_\ell)$}
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

- The hybrid does not use $\ell \ge n$: for $\ell = \omega(\log \secpar)$ with $\ell < n$, the same $f$ is a [[pseudorandom-function|PRF]] with key space and range $\bits^n$ and domain $\bits^\ell$, with the same bound, though not a compression-function PRF — standard.
