---
aliases:
  - P/poly
  - Non-uniform polynomial-time
title: P/poly
---
# P/poly
The class of decision problems solvable by polynomial-size Boolean circuits — equivalently, by a polynomial-time Turing machine with access to a polynomial-length _advice string_ that depends only on the input length (not on the particular input). Formally, a language $L \in \classPpoly$ if there exist polynomials $p, q$ and a polynomial-time algorithm $A$ such that for every input length $n$, there is an advice string $a_n \in \{0,1\}^{q(n)}$ with

$$
x \in L \iff A(x, a_n) = 1 \quad \text{for all } x \in \{0,1\}^n.
$$

P/poly is a _non-uniform_ class: the "algorithm" (circuit) can be different for each input length, and is not required to be uniformly generated.

See the complexity zoo entry [here](https://complexityzoo.net/Complexity_Zoo:P#ppoly).

## Known relationships
- $\classP \subseteq \classPpoly$: any uniform polynomial-time algorithm is also a polynomial-size circuit family.
- $\classBPP \subseteq \classPpoly$: under the standard derandomization assumption (that $\mathbf{E}$ requires exponential-size circuits), $\classBPP = \classP$. Unconditionally, by a probabilistic argument, BPP $\subseteq$ P/poly — the advice string encodes a fixed set of random coins that works for all inputs of a given length — TODO citation.
- **Karp-Lipton theorem**: if $\classNP \subseteq \classPpoly$, then the [[polynomial-time-hierarchy|polynomial hierarchy]] collapses to $\mathbf{\Sigma_2^P} = \mathbf{\Pi_2^P}$ — TODO citation. Informally, if NP problems had polynomial-size circuits, Arthur-Merlin protocols would collapse, pulling PH down with them.
- $\classPpoly$ contains undecidable languages: since circuit families need not be uniformly generated, a circuit family can solve the halting problem for all inputs up to length $n$.

## Relevance to cryptography
Non-uniform security is the standard model in modern cryptography. When we say a scheme is secure against all polynomial-time adversaries, we typically mean against all polynomial-size circuits (P/poly adversaries), not just uniform PPT algorithms. This matters because:
- Security reductions are often stated in the non-uniform setting.
- The existence of one-way functions implies $\classP \neq \classPpoly \cap \classNP$ in a certain oracle-relativized sense (one-way functions separate uniform and non-uniform worlds).
- PRG constructions that fool $\classPpoly$ are strictly stronger than those that fool only uniform algorithms.
