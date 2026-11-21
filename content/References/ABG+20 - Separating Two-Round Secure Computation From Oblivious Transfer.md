---
type: reference
status: stub
title: "ABG+20"
source: https://eprint.iacr.org/2020/116
authors: Benny Applebaum, Zvika Brakerski, Sanjam Garg, Yuval Ishai, Akshayaram Srinivasan
venue: ITCS 2020
published: 2020
aliases:
  - ABG+20
cryptobib_key: ITCS:ABGIS20
---

# [ABG+20] Separating Two-Round Secure Computation From Oblivious Transfer

**Authors:** Benny Applebaum, Zvika Brakerski, Sanjam Garg, Yuval Ishai, Akshayaram Srinivasan | **Venue:** ITCS 2020 | [Source](https://eprint.iacr.org/2020/116)

## Abstract

We consider the question of minimizing the round complexity of protocols for secure multiparty computation (MPC) with security against an arbitrary number of semi-honest parties. Very recently, Garg and Srinivasan (Eurocrypt 2018) and Benhamouda and Lin (Eurocrypt 2018) constructed such 2-round MPC protocols from minimal assumptions. This was done by showing _a round preserving reduction_ to the task of secure _2-party_ computation of the oblivious transfer functionality (OT). These constructions made a novel non-black-box use of the underlying OT protocol. The question remained whether this can be done by only making black-box use of 2-round OT. This is of theoretical and potentially also practical value as black-box use of primitives tends to lead to more efficient constructions.

Our main result proves that such a black-box construction is impossible, namely that non-black-box use of OT is necessary. As a corollary, a similar separation holds when starting with any 2-party functionality other than OT.

As a secondary contribution, we prove several additional results that further clarify the landscape of black-box MPC with minimal interaction. In particular, we complement the separation from 2-party functionalities by presenting a complete 4-party functionality, give evidence for the difficulty of ruling out a complete 3-party functionality and for the difficulty of ruling out black-box constructions of 3-round MPC from 2-round OT, and separate a relaxed “non-compact” variant of 2-party _secret sharing_ from 2-round OT.
