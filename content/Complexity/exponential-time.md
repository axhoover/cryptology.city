---
aliases:
  - EXP
  - EXPTIME
  - Exponential time
title: Exponential time
---

# Exponential time

The class of decision problems solvable by a deterministic Turing machine in time $2^{\poly(n)}$, where $\poly(n)$ is some polynomial in the input length.

See the complexity zoo entry [here](https://complexityzoo.net/Complexity_Zoo:E#exp).

## Known relationships

- $\classPSPACE \subseteq \classEXP$: anything computable in polynomial space can be simulated in exponential time.
- $\classEXP \neq \classP$: this is one of the few known unconditional separations in complexity theory (by the time hierarchy theorem).
- If $\classPSPACE = \classEXP$, then $\classPSPACE \not\subseteq \classPpoly$ — TODO citation.

## Known relationships

- $\classP \subseteq \classNP \subseteq \classPSPACE \subseteq \classEXP$.

## Relevance to cryptography

The security parameter $\secpar$ in cryptographic definitions ensures that breaking a scheme requires super-polynomial (often near-exponential) time. A scheme that is broken in time $T(\secpar)$ is considered secure if $T(\secpar) \geq 2^{\secpar^\epsilon}$ for some $\epsilon > 0$ (sometimes stated as $T \geq 2^{\Omega(\secpar)}$). Concrete security bounds track where in the exponential regime a reduction places the hardness.
