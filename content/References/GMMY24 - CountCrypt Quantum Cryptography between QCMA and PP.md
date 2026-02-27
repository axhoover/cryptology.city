---
title: "GMMY24"
source: https://eprint.iacr.org/2024/1707
authors: Eli Goldin, Tomoyuki Morimae, Saachi Mutreja, Takashi Yamakawa
venue: preprint
published: 2024-10-18
aliases:
  - GMMY24
tags:
  - preprint

---
# [GMMY24] CountCrypt: Quantum Cryptography between QCMA and PP

**Authors:** Eli Goldin, Tomoyuki Morimae, Saachi Mutreja, Takashi Yamakawa | **Venue:** preprint | [Source](https://eprint.iacr.org/2024/1707)

## Abstract
We construct a quantum oracle relative to which $\mathbf{BQP}=\mathbf{QCMA}$ but quantum-computation-classical-communication (QCCC) key exchange, QCCC commitments, and two-round quantum key distribution exist. We also construct an oracle relative to which $\mathbf{BQP}=\mathbf{QMA}$, but quantum lightning (a stronger variant of quantum money) exists. This extends previous work by Kretschmer [Kretschmer, TQC22], which showed that there is a quantum oracle relative to which $\mathbf{BQP}=\mathbf{QMA}$ but pseudorandom state generators (a quantum variant of pseudorandom generators) exist.

We also show that QCCC key exchange, QCCC commitments, and two-round quantum key distribution can all be used to build one-way puzzles. One-way puzzles are a version of "quantum samplable" one-wayness and are an intermediate primitive between pseudorandom state generators and EFI pairs, the minimal quantum primitive. In particular, one-way puzzles cannot exist if $\mathbf{BQP}=\mathbf{PP}$.

Our results together imply that aside from pseudorandom state generators, there is a large class of quantum cryptographic primitives which can exist even if $\mathbf{BQP}=\mathbf{QCMA}$, but are broken if $\mathbf{BQP}=\mathbf{PP}$. Furthermore, one-way puzzles are a minimal primitive for this class. We denote this class "CountCrypt".