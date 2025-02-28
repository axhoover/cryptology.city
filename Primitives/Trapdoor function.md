---
aliases:
  - TDF
permalink: TDF
---
# Trapdoor function (TDF)
A trapdoor function (TDF) is a function (or family of functions) which is easy to compute but hard to invert (like a [[One-way function|OWF]]), but is in fact easy to invert if given the *trapdoor*. Trapdoor functions are associated with Impagliazzo's "Cryptomania" world.  Their existence implies many different public-key cryptography primitives.

## Definition
A *trapdoor function* with respect to a trapdoor space $\mathcal{T}$ consists of two families of efficiently computable functions $\{f_{\lambda} : \mathcal{D} \to \mathcal{R}\}_{\lambda \in \mathbb{N}}$, $\{f^{-1}_{\lambda} : \mathcal{T}\times\mathcal{R} \to \mathcal{D}\}_{\lambda\in \mathbb{N}}$, and a distribution $(X,T)$ over $\mathcal{D}\times \mathcal{T}$, such that:
- The function is *one-way*: there is some negligible function $\nu$, where, for every $\lambda$ and  efficient algorithm $\mathcal{A}$: $$\Pr_{(x,t)\sim (X,T)}[f_{\lambda}(x') = f_{\lambda}(x) : x' \gets \mathcal{A}(1^{\lambda}, f_{\lambda}(x))] \le \nu(\lambda).$$
- And the function *easy to invert* given the trapdoor: there is some negligible function $\nu$, where, for every $\lambda$, $$\Pr_{(x,t)\sim (X,T)}[f^{-1}_{\lambda}(t,f_\lambda(x)) = x] \ge 1- \nu(\lambda).$$

### Variations
TODO: Enhanced trapdoor functions


## Other results
- Trapdoor functions imply the existence of [[Public key encryption]]
- Enhanced trapdoor functions imply the existence of [[Oblivious Transfer]]
