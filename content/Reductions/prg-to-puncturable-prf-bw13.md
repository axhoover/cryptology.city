---
type: reduction
status: draft
title: "PRG ⇒ puncturable PRF"
aliases: []
id: red-prg-to-puncturable-prf-bw13
kind: implication
hypotheses: [prg]
conclusion: puncturable-prf
class: fully-black-box
model: standard
source:
  - "[[BW13 - Constrained Pseudorandom Functions and Their Applications|BW13]]"
  - "[[KPTZ13 - Delegatable Pseudorandom Functions and Applications|KPTZ13]]"
  - "[[BGI14 - Functional Signatures and Pseudorandom Functions|BGI14]]"
security-loss: "a factor 2n for input length n: n PRG hybrids, one per level of the path to $x^*$, from each of the real and ideal worlds to the world where the sibling seeds and the challenge are independent and uniform"
rationale:
  class: "The GGM construction calls the length-doubling PRG only as an oracle, and the reduction embeds its PRG challenge at one level of the path to the punctured point, running the adversary once as an oracle."
---

# PRG ⇒ puncturable PRF

## Statement

If a length-doubling [[pseudorandom-generator|PRG]] $G = (G_0, G_1) : \bits^\secpar \to \bits^{2\secpar}$ exists, the GGM function $\Eval(k, x) = G_{x_n}(\cdots G_{x_1}(k)\cdots)$ with $k \getsr \bits^\secpar$, on $\calD = \bits^n$ for $n = n(\secpar) \le \poly(\secpar)$, is a [[pseudorandom-function#puncturable-prfs|puncturable PRF]] with selective security: the key punctured at $x^*$ is $k_{x^*} = \left(x^*, (G_{\bar x^*_j}(p_{j-1}))_{j \in [n]}\right)$, where $p_0 = k$ and $p_j = G_{x^*_j}(p_{j-1})$: the point $x^*$ together with the seeds of the $n$ siblings of the nodes on the path from the root to $x^*$, from which every $\Eval(k, x)$ with $x \ne x^*$ is computed by descending from the sibling where $x$ leaves the path — [[BW13 - Constrained Pseudorandom Functions and Their Applications|BW13]], [[KPTZ13 - Delegatable Pseudorandom Functions and Applications|KPTZ13]], [[BGI14 - Functional Signatures and Pseudorandom Functions|BGI14]].

## Sketch

Replace, level by level along the path to $x^*$, the pair of children of the current path node by a uniform pair; each step is one PRG hybrid. After $n$ steps the $n$ sibling seeds and $\Eval(k, x^*)$ are independent uniform seeds; the same $n$ steps, with $\Eval(k, x^*)$ replaced by an independent uniform value throughout, take the ideal world there too.

## Notes

- The three papers introduced puncturable (more generally constrained) PRFs independently; [[BW13 - Constrained Pseudorandom Functions and Their Applications|BW13]] also give constrained PRFs for circuit predicates from multilinear maps.
- The construction is [[prg-to-prf-ggm86|PRG ⇒ PRF (GGM)]] — [[GGM86 - How to construct random functions|GGM86]] — with the punctured key added; with [[owf-to-prg-hill99|OWF ⇒ PRG]] — [[HILL99 - A Pseudorandom Generator from Any One-Way Function|HILL99]] — puncturable PRFs follow from one-way functions.
