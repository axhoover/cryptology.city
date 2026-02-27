---
aliases:
  - OWP
---
# One-way permutations (OWP)
A one-way permutation is a permutation which is easy to compute in one direction but. hard to invert. This is a type of [[One-way function]] with the extra condition 

## Definition
A *one-way permutation* is a family of efficiently computable permutations $\{\pi_{\lambda} : \mathcal{D} \to \mathcal{D}\}_{\lambda \in \mathbb{N}}$ and a distribution $X$ over $\mathcal{D}$, such that there is some negligible function $\nu$, where, for every $\lambda$ and  efficient algorithm $\mathcal{A}$: $$\Pr_{x\sim X}[\pi_{\lambda}(x') = \pi_{\lambda}(x) : x' \gets \mathcal{A}(1^{\lambda}, \pi_{\lambda}(x))] \le \nu(\lambda).$$

## Other results
- A OWP is trivially a [[One-way function]].
- A OWP cannot be constructed from an injective one-way function in a black-box way. — [[MM11 - On Black-Box Separations among Injective One-Way Functions|MM11]]