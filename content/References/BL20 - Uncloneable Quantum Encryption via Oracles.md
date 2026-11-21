---
type: reference
status: stub
title: "BL20"
source: https://eprint.iacr.org/2019/257
authors: Anne Broadbent, Sébastien Lord
venue: TQC 2020
published: 2020
aliases:
  - BL20
bibtex: |
  @inproceedings{BL20,
    author    = {Anne Broadbent and S{\'e}bastien Lord},
    title     = {Uncloneable Quantum Encryption via Oracles},
    booktitle = {15th Conference on the Theory of Quantum Computation, Communication and Cryptography, {TQC} 2020},
    series    = {LIPIcs},
    year      = {2020},
    url       = {https://eprint.iacr.org/2019/257}
  }
---

# [BL20] Uncloneable Quantum Encryption via Oracles

**Authors:** Anne Broadbent, Sébastien Lord | **Venue:** TQC 2020 | [Source](https://eprint.iacr.org/2019/257)

## Abstract

Quantum information is well-known to achieve cryptographic feats that are unattainable using classical information alone. Here, we add to this repertoire by introducing a new cryptographic functionality called uncloneable encryption. This functionality allows the encryption of a classical message such that two collaborating but isolated adversaries are prevented from simultaneously recovering the message, even when the encryption key is revealed. Clearly, such functionality is unattainable using classical information alone.

We formally define uncloneable encryption, and show how to achieve it using Wiesner's conjugate coding, combined with a quantum-secure pseudorandom function (qPRF). Modelling the qPRF as an oracle, we show security by adapting techniques from the quantum one-way-to-hiding lemma, as well as using bounds from quantum monogamy-of-entanglement games.
