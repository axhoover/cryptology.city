---
aliases:
  - OWF
  - OWFs
permalink: OWF
---
# One-way function (OWF)
A one-way function (OWF) is a function (or family of functions) which is easy to compute but hard to invert. One-way functions are associated with Impagliazzo's "Minicrypt" world.  They are generally considered the minimal primitive for interesting cryptography to exist (at least in a classical world).

## Definition
A *one-way function* is a family of efficiently computable functions $\{f_{\lambda} : \mathcal{D} \to \mathcal{R}\}_{\lambda \in \mathbb{N}}$ and a distribution $X$ over $\mathcal{D}$, such that there is some negligible function $\nu$, where, for every $\lambda$ and  efficient algorithm $\mathcal{A}$: $$\Pr_{x\sim X}[f_{\lambda}(x') = f_{\lambda}(x) : x' \gets \mathcal{A}(1^{\lambda}, f_{\lambda}(x))] \le \nu(\lambda).$$
### Variations
- TODO — fine-grained one-way functions

## Other results
- If OWF exist, then many "Minicrypt" primitives exist:
	- [[Symmetric key encryption]]
	- [[Pseudorandom function]]
	- [[Pseudorandom permutation]]
	- [[Message authentication code]]
	- [[Digital signature]]
- OWF exist if a [[One-way permutation]] or [[Collision-resistant hash function]] exist

### Candidate One-way functions
- Multiplication
- [[Discrete logarithm]] for certain group families