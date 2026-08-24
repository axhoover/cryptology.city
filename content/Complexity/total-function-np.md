---
type: complexity-class
status: draft
aliases:
  - TFNP
  - Total function NP
title: Total function NP
id: tfnp
variants:
  ppad-hardness: "#subclasses"
---

# Total function NP

The class of total search problems in FNP — search problems where a solution is _guaranteed to exist_ for every input but may be hard to find. Formally, a problem is in TFNP if there is a polynomial-time verifier $V$ such that:

1. For every input $x$, there exists a witness $w$ with $V(x, w) = 1$ (totality).
2. The witness $w$ has length polynomial in $|x|$.

Totality means the problem cannot be NP-complete (unless NP = coNP), since NP-completeness requires instances with no solution. This makes TFNP a natural home for problems believed to be hard but not NP-hard.

See the complexity zoo entry [here](https://complexityzoo.net/Complexity_Zoo:T#tfnp).

## Subclasses

TFNP contains several important subclasses defined by the combinatorial principle guaranteeing existence of a solution:

- [[subclasses-to-hash-function|Subclasses ⇒ Hash function]]
- **PPP** (Polynomial Pigeonhole Principle): contains the problem of finding a collision in a function $f : \bits^n \to \bits^n$ (pigeonhole guarantees one exists). Integer factorization is in PPP — TODO citation.
- **PPA** (Polynomial Parity Argument): related to graph parity arguments. Discrete logarithm over groups of unknown order has connections to PPA — TODO citation.
- **PLS** (Polynomial Local Search): finding local optima. Contains many optimization problems.

## Known relationships

- $\classP \subseteq \classFP \subseteq \classTFNP \subseteq \mathbf{FNP}$.
- TFNP problems are unlikely to be NP-hard, since NP-hardness would require instances with no solution, contradicting totality (unless NP = coNP).

## Relevance to cryptography

Integer factorization and discrete logarithm — the two most historically important hard problems in cryptography — are both in TFNP, formalizing the intuition that they are "hard search problems with guaranteed solutions." Recent work has used TFNP subclass hardness (especially PPAD) as a basis for constructing cryptographic primitives from weaker or more structured assumptions.
