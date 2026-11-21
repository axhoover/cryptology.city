---
type: reference
status: stub
title: "GVW13"
source: https://eprint.iacr.org/2013/337
authors: Sergey Gorbunov, Vinod Vaikuntanathan, Hoeteck Wee
venue: STOC 2013
published: 2013
aliases:
  - GVW13
cryptobib_key: STOC:GorVaiWee13
---

# [GVW13] Attribute-based encryption for circuits

**Authors:** Sergey Gorbunov, Vinod Vaikuntanathan, Hoeteck Wee | **Venue:** STOC 2013 | [Source](https://eprint.iacr.org/2013/337)

## Abstract

In an attribute-based encryption (ABE) scheme, a ciphertext is associated with
an L-bit public index IND and a message m, and
a secret key
is associated with a
Boolean predicate P. The secret key allows to decrypt the ciphertext and learn m iff P(IND)=1. Moreover, the scheme should be secure against collusions of users, namely,
given secret keys for polynomially many predicates, an adversary
learns nothing about the message
if none of the secret keys can individually decrypt the ciphertext.

We present
attribute-based encryption schemes for circuits
of any arbitrary polynomial size, where the public parameters and
the ciphertext grow linearly with the depth of the circuit. Our construction
is secure under the standard learning with errors (LWE) assumption. Previous
constructions of attribute-based encryption were for Boolean formulas, captured
by the complexity class NC1.

In the course of our construction, we
present a new framework for constructing ABE schemes.
As a by-product of our framework, we obtain ABE schemes
for polynomial-size branching programs,
corresponding to the complexity class LOGSPACE, under
quantitatively better assumptions.
