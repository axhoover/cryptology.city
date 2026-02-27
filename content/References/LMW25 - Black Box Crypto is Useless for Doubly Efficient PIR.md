---
title: "LMW25"
source: https://eprint.iacr.org/2025/552
authors: Wei-Kai Lin, Ethan Mook, Daniel Wichs
venue: Eurocrypt 2025
published: 2025-03-25
aliases:
  - LMW25
tags:
  - Eurocrypt

---
# [LMW25] Black Box Crypto is Useless for Doubly Efficient PIR

**Authors:** Wei-Kai Lin, Ethan Mook, Daniel Wichs | **Venue:** Eurocrypt 2025 | [Source](https://eprint.iacr.org/2025/552)

## Abstract
A (single server) private information retrieval (PIR) allows a client to read data from a public database held on a remote server, without revealing to the server which locations she is reading. In a doubly efficient PIR (DEPIR), the database is first preprocessed offline into a data structure, which then allows the server to answer any client query efficiently in sub-linear online time. Constructing DEPIR is a notoriously difficult problem, and this difficulty even extends to a weaker notion secret-key DEPIR (SK-DEPIR), where the database is preprocessed using secret randomness and the client is given a secret key for making queries. We currently only have constructions of SK-DEPIR from the Ring LWE assumption or from non-standard code-based assumptions.

We show that the black-box use of essentially all generic cryptographic primitives (e.g., key agreement, oblivious transfer, indistinguishability obfuscation, etc.), including idealized primitives (e.g., random oracles, generic multilinear groups, virtual black-box obfuscation, etc.) is essentially useless for constructing SK-DEPIR. In particular, in any such SK-DEPIR construction, we can replace all black-box use of these primitives with just a black-box use of one-way functions. While we conjecture that SK-DEPIR cannot be constructed using black-box one-way functions alone, we are unable to show this in its full generality. However, we do show this for 2-round schemes with a passive server that simply outputs requested locations in the preprocessed data structure, which is the format of all known schemes. Overall, this shows that the black-box use of essentially all crypto primitives is insufficient for constructing 2-round passive-server SK-DEPIR, and does not provide any benefit beyond black-box one-way functions for constructing general SK-DEPIR.