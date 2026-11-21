---
type: reference
status: stub
title: "GMNO18"
source: https://eprint.iacr.org/2018/275
authors: Rosario Gennaro, Michele Minelli, Anca Nitulescu, Michele Orrù
venue: ACM CCS 2018
published: 2018
aliases:
  - GMNO18
cryptobib_key: CCS:GMNO18
---

# [GMNO18] Lattice-Based zk-SNARKs from Square Span Programs

**Authors:** Rosario Gennaro, Michele Minelli, Anca Nitulescu, Michele Orrù | **Venue:** ACM CCS 2018 | [Source](https://eprint.iacr.org/2018/275)

## Abstract

Zero-knowledge SNARKs (zk-SNARKs) are non-interactive proof systems with short (i.e., independent of
the size of the witness) and efficiently verifiable proofs.
They elegantly resolve the juxtaposition of individual privacy and public trust, by providing an efficient way of demonstrating knowledge of secret information without actually revealing it.
To this day, zk-SNARKs are widely deployed all over the planet and are used to
keep alive a system worth billion of euros, namely the cryptocurrency Zcash. However, all current SNARKs
implementations rely on so-called pre-quantum assumptions and, for this reason, are not expected to withstand cryptanalitic efforts over the next few decades.

In this work, we introduce a new zk-SNARK that can be instantiated from
lattice-based assumptions, and which is thus believed to be post-quantum secure.
We provide a generalization in the spirit of Gennaro et al. (Eurocrypt'13)
to the SNARK of Danezis et al. (Asiacrypt'14) that is based on Square Span Programs (SSP) and relies on weaker
computational assumptions.
We focus on designated-verifier proofs and propose a protocol in which a proof
consists of just 5 LWE encodings.
We provide a concrete choice of parameters, showing that our construction is
practically instantiable.
