---
type: reference
status: stub
title: "KQST23"
source: https://arxiv.org/abs/2212.00879
authors: William Kretschmer, Luowen Qian, Makrand Sinha, Avishay Tal
venue: STOC 2023
published: 2023
aliases:
  - KQST23
cryptobib_key: STOC:KQST23
---

# [KQST23] Quantum Cryptography in Algorithmica

**Authors:** William Kretschmer, Luowen Qian, Makrand Sinha, Avishay Tal | **Venue:** STOC 2023 | [Source](https://arxiv.org/abs/2212.00879)

## Abstract

We construct a classical oracle relative to which $\classP = \classNP$ yet single-copy secure pseudorandom quantum states exist. In the language of Impagliazzo's five worlds, this is a construction of pseudorandom states in "Algorithmica," and hence shows that in a black-box setting, quantum cryptography based on pseudorandom states is possible even if one-way functions do not exist. As a consequence, we demonstrate that there exists a property of a cryptographic hash function that simultaneously (1) suffices to construct pseudorandom states, (2) holds for a random oracle, and (3) is independent of $\classP$ vs. $\classNP$ in the black-box setting. We also introduce a conjecture that would generalize our results to multi-copy secure pseudorandom states.

We build on the recent construction by Aaronson, Ingram, and Kretschmer (CCC 2022) of an oracle relative to which $\classP = \classNP$ but $\classBQP \neq \classQCMA$, based on hardness of the OR $\circ$ Forrelation problem. Our proof also introduces a new discretely-defined variant of the Forrelation distribution, for which we prove pseudorandomness against $\mathrm{AC}^0$ circuits. This variant may be of independent interest.
