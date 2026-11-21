---
type: reference
status: draft
title: "KSW08"
source: https://eprint.iacr.org/2007/404
authors: Jonathan Katz, Amit Sahai, Brent Waters
venue: Eurocrypt 2008
published: 2008-04-01
aliases:
  - KSW08
cryptobib_key: EC:KatSahWat08
---

# [KSW08] Predicate Encryption Supporting Disjunctions, Polynomial Equations, and Inner Products

**Authors:** Jonathan Katz, Amit Sahai, Brent Waters | **Venue:** Eurocrypt 2008 | [Source](https://eprint.iacr.org/2007/404)

## Abstract

Predicate encryption is a new paradigm generalizing, among other
things, identity-based encryption. In a predicate encryption scheme,
secret keys correspond to predicates and ciphertexts are associated
with attributes; the secret key SK_f corresponding to the predicate
f can be used to decrypt a ciphertext associated with attribute I if and only if f(I)=1. Constructions of such schemes are currently known for relatively few classes of predicates.

We construct such a scheme for predicates corresponding to the evaluation of inner products over N (for some large integer N).
This, in turn, enables constructions in which predicates correspond to the evaluation of disjunctions, polynomials, CNF/DNF formulae, or threshold predicates (among others). Besides serving as what we feel is a significant step forward in the theory of predicate encryption,
our results lead to a number of applications that are interesting in their own right.
