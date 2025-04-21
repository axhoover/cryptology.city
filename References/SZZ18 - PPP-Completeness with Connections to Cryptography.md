---
title: PPP-Completeness with Connections to Cryptography
source: https://eprint.iacr.org/2018/778
authors: Katerina Sotiraki, Manolis Zampetakis, Giorgos Zirdelis
venue: FOCS 2018
published: 2018-08-31
aliases:
  - SZZ18
---
# PPP-Completeness with Connections to Cryptography
URL: https://eprint.iacr.org/2018/778
Authors: Katerina Sotiraki, Manolis Zampetakis, Giorgos Zirdelis

## Abstract
Polynomial Pigeonhole Principle (PPP) is an important subclass of TFNP with profound connections to the complexity of the fundamental cryptographic primitives: collision-resistant hash functions and one-way permutations. In contrast to most of the other subclasses of TFNP, no complete problem is known for PPP. Our work identifies the first PPP-complete problem without any circuit or Turing Machine given explicitly in the input, and thus we answer a longstanding open question from [[Papadimitriou94 - On the complexity of the parity argument and other inefficient proofs of existence|Papadimitriou94]] Specifically, we show that constrained-SIS (cSIS), a generalized version of the well-known Short Integer Solution problem (SIS) from lattice-based cryptography, is PPP-complete.

In order to give intuition behind our reduction for constrained-SIS, we identify another PPP-complete problem with a circuit in the input but closely related to lattice problems. We call this problem  BLICHFELDT and it is  the computational problem associated with Blichfeldt's fundamental theorem in the theory of lattices.

Building on the inherent connection of PPP with collision-resistant hash functions, we use our completeness result to construct the first natural hash function family that captures the hardness of all collision-resistant hash functions in a worst-case sense, i.e. it is natural and universal in the worst-case. The close resemblance of our hash function family with SIS, leads us to the first candidate collision-resistant hash function that is both natural and universal in an average-case sense.

Finally, our results enrich our understanding of the connections between PPP, lattice problems and other concrete cryptographic assumptions, such as the discrete logarithm problem over general groups.