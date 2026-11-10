---
type: reference
status: stub
title: "GKK+12"
source: https://eprint.iacr.org/2011/482
authors: S. Dov Gordon, Jonathan Katz, Vladimir Kolesnikov, Fernando Krell, Tal Malkin, Mariana Raykova, Yevgeniy Vahlis
venue: CCS 2012
published: 2012
aliases:
  - GKK+12
cryptobib_key: CCS:GKKKMR12
---

# [GKK+12] Secure Two-Party Computation in Sublinear (Amortized) Time

**Authors:** S. Dov Gordon, Jonathan Katz, Vladimir Kolesnikov, Fernando Krell, Tal Malkin, Mariana Raykova, Yevgeniy Vahlis | **Venue:** CCS 2012 | [Source](https://eprint.iacr.org/2011/482)

## Abstract

Traditional approaches to secure computation begin by representing
the function $f$ being computed as a circuit. For any function $f$ that depends on each of its inputs, this implies a protocol with complexity at least linear in the input size. In fact, linear running time is inherent for secure computation of non-trivial functions, since each party must “touch” every bit of their input lest information about other party's input be leaked. This seems to rule out many interesting applications of secure computation in scenarios where at least one of the inputs is huge and sublinear-time algorithms can be utilized in the insecure setting; private database search is a prime example.

We present an approach to secure two-party computation that yields sublinear-time protocols, in an amortized sense, for functions that can be computed in sublinear time on a random access machine (RAM). Furthermore, a party whose input is “small” is required to maintain
only small state. We provide a generic protocol that achieves the claimed complexity, based on any oblivious RAM and any protocol for
secure two-party computation. We then present an optimized version of this protocol, where generic secure two-party computation is used only for evaluating a small number of simple operations.

# Notes

The abstract above is from the ePrint precursor, _Secure Computation with Sublinear Amortized Work_ (ePrint 2011/482; Gordon, Katz, Kolesnikov, Malkin, Raykova, Vahlis), not the CCS 2012 paper.
