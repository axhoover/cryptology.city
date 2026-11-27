---
type: complexity-class
status: stub
aliases:
  - PH
  - Polynomial-Time Hierarchy
  - Polynomial Hierarchy
title: Polynomial Hierarchy
id: ph
---

# Polynomial Hierarchy

The union $\mathbf{PH} = \bigcup_{k \ge 0} \mathbf{\Sigma_k^P}$, where $\mathbf{\Sigma_k^P}$ is the class of decision problems $S$ for which there are a polynomial $p$ and a polynomial-time algorithm $V$ such that $x \in S$ if and only if

$$
\exists y_1 \in \bits^{p(|x|)}\; \forall y_2 \in \bits^{p(|x|)} \cdots\; Q_k y_k \in \bits^{p(|x|)} : V(x, y_1, \ldots, y_k) = 1,
$$

the $k$ quantifiers alternating, so that $Q_k$ is $\exists$ for odd $k$ and $\forall$ for even $k$ — [[Gol08 - Computational Complexity A Conceptual Perspective|Gol08]]; the hierarchy was introduced in [[Sto76 - The Polynomial-Time Hierarchy|Sto76]]. $\mathbf{\Sigma_k^P}$ is the $k$th level of the hierarchy and $\mathbf{\Pi_k^P}$ is the class of complements of problems in $\mathbf{\Sigma_k^P}$, so $\mathbf{\Sigma_0^P} = \classP$, $\mathbf{\Sigma_1^P} = \classNP$ and $\mathbf{\Pi_1^P} = \classcoNP$ ([[polynomial-time|P]], [[nondeterministic-polynomial-time|NP]], [[co-nondeterministic-polynomial-time|coNP]]).

See the complexity zoo entry [here](https://complexityzoo.net/Complexity_Zoo:P#ph).

## Notable problems

- For every $k \ge 1$, deciding whether a quantified Boolean formula with at most $k$ alternating blocks of quantifiers, the first existential, is true is $\mathbf{\Sigma_k^P}$-complete under polynomial-time many-one reductions — [[Gol08 - Computational Complexity A Conceptual Perspective|Gol08]].

## Known relationships

- For every $k \ge 1$, $\mathbf{\Sigma_{k+1}^P} = \classNP^{\mathbf{\Sigma_k^P}}$ and $\mathbf{\Sigma_k^P} \cup \mathbf{\Pi_k^P} \subseteq \classP^{\mathbf{\Sigma_k^P}} \subseteq \mathbf{\Sigma_{k+1}^P} \cap \mathbf{\Pi_{k+1}^P}$ — [[Gol08 - Computational Complexity A Conceptual Perspective|Gol08]].
- $\mathbf{PH} \subseteq \classPSPACE$ ([[polynomial-space|PSPACE]]) — [[Gol08 - Computational Complexity A Conceptual Perspective|Gol08]]. $\mathbf{PH} \subseteq \classP^{\classsharpP}$ ([[sharp-p|#P]]) — [[Tod91 - PP is as Hard as the Polynomial-Time Hierarchy|Tod91]].
- For every $k \ge 1$, if $\mathbf{\Sigma_k^P} = \mathbf{\Pi_k^P}$ then $\mathbf{PH} = \mathbf{\Sigma_k^P}$: the hierarchy **collapses** to its $k$th level — [[Gol08 - Computational Complexity A Conceptual Perspective|Gol08]].
- If $\classNP \subseteq \classPpoly$ ([[p-poly|P/poly]]), then $\mathbf{\Sigma_2^P} = \mathbf{\Pi_2^P}$ and the hierarchy collapses to its second level — [[KL80 - Some Connections between Nonuniform and Uniform Complexity Classes|KL80]].
- If $\classcoNP \subseteq \classAM$ ([[arthur-merlin|AM]]), then [[no-conp-to-am-bm88|the hierarchy collapses to its second level]] — [[BHZ87 - Does co-NP Have Short Interactive Proofs|BHZ87]].
- $\classBPP \subseteq \mathbf{\Sigma_2^P} \cap \mathbf{\Pi_2^P}$ ([[bounded-error-probabilistic-polynomial-time|BPP]]) — [[Lau83 - BPP and the Polynomial Hierarchy|Lau83]].
- There is an oracle relative to which $\classBQP \not\subseteq \mathbf{PH}$ ([[no-bqp-to-np|No relativizing reduction from BQP to NP]]) — [[RT19 - Oracle Separation of BQP and PH|RT19]].
