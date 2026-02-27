---
title: "BGI15"
source: https://link.springer.com/chapter/10.1007/978-3-662-46803-6_12
authors: Elette Boyle, Niv Gilboa, Yuval Ishai
venue: Eurocrypt 2015
published: 2015-01-01
created: 2025-04-22
tags:
  - Eurocrypt
aliases:
  - BGI15
---
# [BGI15] Function Secret Sharing

**Authors:** Elette Boyle, Niv Gilboa, Yuval Ishai | **Venue:** Eurocrypt 2015 | [Source](https://link.springer.com/chapter/10.1007/978-3-662-46803-6_12)

## Abstract
Motivated by the goal of securely searching and updating distributed data, we introduce and study the notion of function secret sharing (FSS). This new notion is a natural generalization of distributed point functions (DPF), a primitive that was recently introduced by Gilboa and Ishai (Eurocrypt 2014). Given a positive integer $p \ge 2$ and a class $F$ of functions $f: \{0,1\}^n \to G$, where $G$ is an Abelian group, a $p$-party FSS scheme for $F$ allows one to split each $f \in F$ into $p$ succinctly described functions $f_i: \{0,1\}^n \to G$, $1 \le i \le p$, such that: (1) $\sum_{i=1}^p f_i = f$, and (2) any strict subset of the $f_i$ hides $f$. Thus, an FSS for $F$ can be thought of as method for succinctly performing an \"additive secret sharing\" of functions from $F$. The original definition of DPF coincides with a two-party FSS for the class of point functions, namely the class of functions that have a nonzero output on at most one input.

We present two types of results. First, we obtain efficiency improvements and extensions of the original DPF construction. Then, we initiate a systematic study of general FSS, providing some constructions and establishing relations with other cryptographic primitives. More concretely, we obtain the following main results:

* Improved DPF. We present an improved (two-party) DPF construction from a pseudorandom generator (PRG), reducing the length of the key describing each $f_i$ from $O(\lambda \cdot n \log_2 3)$ to $O(\lambda n)$, where $\lambda$ is the PRG seed length.
* Multi-party DPF. We present the first nontrivial construction of a $p$-party DPF for $p \ge 3$, obtaining a near-quadratic improvement over a naive construction that additively shares the truth-table of $f$. This construction too can be based on any PRG.
* FSS for simple functions. We present efficient PRG-based FSS constructions for natural function classes that extend point functions, including interval functions and partial matching functions.
* A study of general FSS. We show several relations between general FSS and other cryptographic primitives. These include a construction of general FSS via obfuscation, an indication for the implausibility of constructing general FSS from weak cryptographic assumptions such as the existence of one-way functions, a completeness result, and a relation with pseudorandom functions.

Research supported by the European Union’s Tenth Framework Programme (FP10/2010-2016) under grant agreement no. 259426 ERC-CaC. The first and third authors were additionally supported by ISF grants 1361/10 and 1709/14 and BSF grant 2012378.