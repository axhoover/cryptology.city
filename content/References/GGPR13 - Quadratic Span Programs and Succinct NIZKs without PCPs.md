---
type: reference
status: stub
title: "GGPR13"
source: https://eprint.iacr.org/2012/215
authors: Rosario Gennaro, Craig Gentry, Bryan Parno, Mariana Raykova
venue: EUROCRYPT 2013
published: 2013
aliases:
  - GGPR13
cryptobib_key: EC:GGPR13
---

# [GGPR13] Quadratic Span Programs and Succinct NIZKs without PCPs

**Authors:** Rosario Gennaro, Craig Gentry, Bryan Parno, Mariana Raykova | **Venue:** EUROCRYPT 2013 | [Source](https://eprint.iacr.org/2012/215)

## Abstract

We introduce a new characterization of the NP complexity class, called Quadratic Span Programs (QSPs), which is a natural extension of span programs defined by Karchmer and Wigderson. Our main motivation is the construction of succinct arguments of NP-statements that are quick to construct and verify. QSPs seem well-suited for this task, perhaps even better than Probabilistically Checkable Proofs (PCPs).

In 2010, Groth constructed a NIZK argument in the common reference string (CRS) model for Circuit-SAT consisting of only 42 elements in a bilinear group. Interestingly, his argument does not (explicitly) use PCPs. But his scheme has some disadvantages -- namely, the CRS size and prover computation are both quadratic in the circuit size. In 2011, Lipmaa reduced the CRS size to quasi-linear, but with prover computation still quadratic.

Using QSPs we construct a NIZK argument in the CRS model for Circuit-SAT consisting of just 7 group elements. The CRS size is linear in the circuit size, and prover computation is quasi-linear, making our scheme seemingly quite practical. (The prover only needs to do a linear number of group operations; the quasi-linear computation is a multipoint evaluation and interpolation.)

Our results are complementary to those of Valiant (TCC 2008) and Bitansky et al. (2012), who use "bootstrapping" (recursive composition) of arguments to reduce CRS size and prover and verifier computation. QSPs also provide a crisp mathematical abstraction of some of the techniques underlying Groth's and Lipmaa's constructions.
