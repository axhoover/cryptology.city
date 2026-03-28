---
aliases:
  - PP
  - Probabilistic polynomial-time
title: Probabilistic polynomial-time
---

# Probabilistic polynomial-time

The class of decision problems solvable by a probabilistic polynomial-time Turing machine that accepts with probability greater than 1/2 on "yes" inputs and at most 1/2 on "no" inputs (a majority-vote criterion). Unlike [[bounded-error-probabilistic-polynomial-time|BPP]], the gap between acceptance probabilities on "yes" and "no" instances can be as small as $2^{-\poly(n)}$, so the error cannot be amplified by repetition.

See the complexity zoo entry [here](https://complexityzoo.net/Complexity_Zoo:P#pp).

## Known relationships

- $\classBPP \subseteq \classPP \subseteq \classPSPACE$: BPP has a constant gap (and thus sits inside PP), and PP's computation can be simulated in polynomial space.
- $\classNP \subseteq \classPP$: given an NP machine, accept iff strictly more than half the nondeterministic paths lead to accepting, which is a PP criterion.
- $\classBQP \subseteq \classPP$: quantum polynomial-time is contained in PP — TODO citation (Adleman, DeMarrais, Huang 1997). This is the key relationship placing quantum computing within classical complexity.
- **Toda's theorem**: $\mathbf{PH} \subseteq \classP^{\classsharpP}$, the polynomial hierarchy is contained in polynomial time with a $\classsharpP$ oracle — TODO citation (Toda 1991). Since $\classsharpP \subseteq \classFP^{\classPP}$, this also implies $\mathbf{PH} \subseteq \classP^{\classPP}$.
- PP is closed under complement, union, and intersection — TODO citation (Beigel, Reingold, Spielman 1995).
