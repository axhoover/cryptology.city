---
type: complexity-class
status: draft
aliases:
  - P/poly
  - Non-uniform polynomial-time
title: P/poly
id: ppoly
---

# P/poly

The class of decision problems solvable by polynomial-size Boolean circuits — equivalently, by a polynomial-time Turing machine with access to a polynomial-length _advice string_ that depends only on the input length (not on the particular input). Formally, a language $L \in \classPpoly$ if there exist polynomials $p, q$ and a polynomial-time algorithm $A$ such that for every input length $n$, there is an advice string $a_n \in \bits^{q(n)}$ with

$$
x \in L \iff A(x, a_n) = 1 \quad \text{for all } x \in \bits^n.
$$

P/poly is a _non-uniform_ class: the "algorithm" (circuit) can be different for each input length, and is not required to be uniformly generated.

See the complexity zoo entry [here](https://complexityzoo.net/Complexity_Zoo:P#ppoly).

## Known relationships

- $\classP \subseteq \classPpoly$: any uniform polynomial-time algorithm is also a polynomial-size circuit family.
- $\classBPP \subseteq \classPpoly$: after amplification, one fixed string of random coins is correct on all inputs of a given length, and serves as the advice — [[Adl78 - Two theorems on random polynomial time|Adl78]] ($\classRP$ case), [[BG81 - Relative to a random oracle A, P^A != NP^A != co-NP^A with probability 1|BG81]] ($\classBPP$); see [[bpp-to-p-poly]]. If $\mathbf{E} = \mathbf{DTIME}(2^{O(n)})$ has a function that requires exponential-size circuits, then $\classBPP = \classP$ — [[IW97 - P = BPP if E Requires Exponential Circuits Derandomizing the XOR Lemma|IW97]].
- **Karp-Lipton theorem**: if $\classNP \subseteq \classPpoly$, then the [[polynomial-time-hierarchy|polynomial hierarchy]] collapses to $\mathbf{\Sigma_2^P} = \mathbf{\Pi_2^P}$ — [[KL80 - Some Connections between Nonuniform and Uniform Complexity Classes|KL80]]. Proof idea: for a $\Pi_2$ statement $\forall y\, \exists z\, \phi(x,y,z)$, existentially guess a polynomial-size circuit $C$ that outputs a witness $z$ whenever one exists (it exists by self-reducibility of SAT), then universally check $\phi(x, y, C(x,y))$.
- $\classPpoly$ contains undecidable languages: every unary language is in $\classPpoly$ (one advice bit per input length), including the unary encoding of the halting problem — folklore.

## Relevance to cryptography

A [[uniform-and-non-uniform-adversaries|non-uniform adversary]] is a family of polynomial-size circuits, one for each security parameter, the model of computation that defines $\classPpoly$; a uniform adversary is a $\PPT$ machine. Pages on this site write _for all efficient $\calA$_ without fixing the reading, and a page that needs one of the two states it ([[uniform-and-non-uniform-adversaries#which-notion-this-site-uses|which notion this site uses]]).

- Security against all non-uniform adversaries implies security against all uniform ones: a circuit of size polynomial in the running time of a $\PPT$ machine simulates it at each security parameter — standard.
- A uniform reduction that uses the adversary only as an oracle proves a theorem under both readings; one that hard-wires information depending on the adversary, such as its best coins or the most useful index of a [[hybrid-argument|hybrid argument]], proves only the non-uniform reading, from non-uniform hardness of the assumption — standard.
- One-way functions secure against non-uniform adversaries imply $\classNP \not\subseteq \classPpoly$: if $\classNP \subseteq \classPpoly$, circuits deciding whether an image has a preimage with a given prefix invert every polynomial-time computable function bit by bit — folklore.

<!-- BEGIN GENERATED participates-in cde6fbbdc1db -->

## Participates in

**Produces P/poly**

- [[bpp-to-p-poly|BPP ⊆ P/poly]]
- [[p-to-p-poly|P ⊆ P/poly]]

<!-- END GENERATED participates-in -->
