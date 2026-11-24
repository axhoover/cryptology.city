---
type: complexity-class
status: draft
aliases:
  - EXP
  - EXPTIME
  - Exponential time
title: Exponential time
id: exp
---

# Exponential time

The class of decision problems solvable by a deterministic Turing machine in time $2^{\poly(n)}$ on inputs of length $n$.

See the complexity zoo entry [here](https://complexityzoo.net/Complexity_Zoo:E#exp).

## Known relationships

- $\classP \subseteq \classNP \subseteq \classPSPACE \subseteq \classEXP$ ([[p-to-np|P ⊆ NP]], [[np-to-pspace|NP ⊆ PSPACE]], [[pspace-to-exp|PSPACE ⊆ EXP]]) — folklore.
- $\classEXP \neq \classP$ by the time hierarchy theorem — [[HS65 - On the Computational Complexity of Algorithms|HS65]].

## Relevance to cryptography

Security definitions quantify over adversaries running in time $\poly(\secpar)$; sub-exponential security extends the quantifier to time $2^{\secpar^\epsilon}$ for some constant $\epsilon > 0$, and exponential security to time $2^{\Omega(\secpar)}$ — standard.

<!-- BEGIN GENERATED participates-in 83c52f2ea173 -->

## Participates in

**Builds on Exponential time**

- [[exp-to-nexp|EXP ⊆ NEXP]]

**Produces Exponential time**

- [[pspace-to-exp|PSPACE ⊆ EXP]]

<!-- END GENERATED participates-in -->
