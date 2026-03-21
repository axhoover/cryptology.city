---
aliases:
  - coNP
  - Co-nondeterministic polynomial-time
title: Co-nondeterministic polynomial-time
---
# Co-nondeterministic polynomial-time
The complement class of [[nondeterministic-polynomial-time|NP]]: a decision problem is in coNP if its complement (swapping "yes" and "no" answers) is in NP. Equivalently, coNP is the class of problems for which a "no" answer can be verified in polynomial time given an appropriate certificate.

See the complexity zoo entry [here](https://complexityzoo.net/Complexity_Zoo:C#conp).

## Known relationships
- $\classP \subseteq \classcoNP$, since P is closed under complement.
- If a problem is [[nondeterministic-polynomial-time|NP]]-complete, then it is in $\classcoNP$ if and only if $\classNP = \classcoNP$.
- $\classcoNP \subseteq \classAM$: this follows from the result of [[GS86 - Private Coins versus Public Coins in Interactive Proof Systems|GS86]] showing that coNP has Arthur-Merlin protocols.
- Integer factorization and discrete logarithm are both in $\classNP \cap \classcoNP$: there are short certificates for both "yes" and "no" answers. This is one reason these problems are considered unlikely to be NP-complete — an NP-complete problem in coNP would imply $\classNP = \classcoNP$.
- $\classcoNP \subseteq \classPSPACE$.

## Notable problems
- **Tautology**: given a Boolean formula, is every assignment satisfying? (The complement of SAT, which is NP-complete.)
- **Graph non-isomorphism**: are two graphs non-isomorphic? This problem is in coNP (and also in $\classSZK$ and $\classcoAM$).
- **Composite number**: given $n$, does $n$ have a non-trivial factor? This is in both NP and coNP (primality testing is in $\classP$ — TODO citation).
