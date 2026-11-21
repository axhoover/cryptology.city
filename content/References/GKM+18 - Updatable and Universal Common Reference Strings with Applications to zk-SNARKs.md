---
type: reference
status: stub
title: "GKM+18"
source: https://eprint.iacr.org/2018/280
authors: Jens Groth, Markulf Kohlweiss, Mary Maller, Sarah Meiklejohn, Ian Miers
venue: CRYPTO 2018
published: 2018
aliases:
  - "GKM+18"
cryptobib_key: C:GKMMM18
---

# [GKM+18] Updatable and Universal Common Reference Strings with Applications to zk-SNARKs

**Authors:** Jens Groth, Markulf Kohlweiss, Mary Maller, Sarah Meiklejohn, Ian Miers | **Venue:** CRYPTO 2018 | [Source](https://eprint.iacr.org/2018/280)

## Abstract

By design, existing (pre-processing)
zk-SNARKs embed a secret trapdoor in a relation-dependent common reference strings (CRS). The trapdoor is exploited
by a (hypothetical) simulator to prove the scheme is zero knowledge, and the secret-dependent
structure facilitates a linear-size CRS and linear-time prover computation.
If known by a real party, however, the trapdoor can be used to subvert the
security of the system. The structured CRS that makes zk-SNARKs practical
also makes deploying zk-SNARKS problematic, as it is difficult to argue why the
trapdoor would not be available to the entity responsible for generating the
CRS. Moreover, for pre-processing zk-SNARKs a new trusted CRS needs to be
computed every time the relation is changed.

In this paper, we address both issues by proposing a model where a number of users can update a universal CRS. The updatable CRS model guarantees security if at least one of the users updating the CRS is honest.
We provide both a negative result, by showing that
zk-SNARKs with private secret-dependent polynomials in the CRS cannot be
updatable, and a positive result by constructing a zk-SNARK based on a CRS consisting only of secret-dependent monomials.
The CRS is of
quadratic size, is updatable, and is universal in the sense that it can be specialized into one or more relation-dependent
CRS of linear size with linear-time prover computation.
