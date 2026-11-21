---
type: reference
status: stub
title: "BGI14"
source: https://eprint.iacr.org/2013/401
authors: Elette Boyle, Shafi Goldwasser, Ioana Ivan
venue: PKC 2014
published: 2014
aliases:
  - BGI14
cryptobib_key: PKC:BoyGolIva14
---

# [BGI14] Functional Signatures and Pseudorandom Functions

**Authors:** Elette Boyle, Shafi Goldwasser, Ioana Ivan | **Venue:** PKC 2014 | [Source](https://eprint.iacr.org/2013/401)

## Abstract

In this paper, we introduce two new cryptographic primitives: _functional digital signatures_ and _functional pseudorandom functions_.

In a functional signature scheme, in addition to a master signing key that can be used to sign any message, there are _signing keys for a function_ $f$, which allow one to sign any message in the range of $f$. As a special case, this implies the ability to generate keys for predicates $P$, which allow one to sign any message $m$, for which $P(m) = 1$.

We show applications of functional signatures to constructing succinct non-interactive arguments and delegation schemes. We give several general constructions for this primitive based on different computational hardness assumptions, and describe the trade-offs between them in terms of the assumptions they require and the size of the signatures.

In a functional pseudorandom function, in addition to a master secret key that can be used to evaluate the pseudorandom function $F$ on any point in the domain, there are additional _secret keys for a function_ $f$, which allow one to evaluate $F$ on any $y$ for which there exists an $x$ such that $f(x)=y$. As a special case, this implies _pseudorandom functions with selective access_, where one can delegate the ability to evaluate the pseudorandom function on inputs $y$ for which a predicate $P(y)=1$ holds.
We define and provide a sample construction of a functional pseudorandom function family for prefix-fixing functions.
