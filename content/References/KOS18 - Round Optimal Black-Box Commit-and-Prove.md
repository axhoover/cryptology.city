---
type: reference
status: stub
title: "KOS18"
source: https://eprint.iacr.org/2018/921
authors: Dakshita Khurana, Rafail Ostrovsky, Akshayaram Srinivasan
venue: TCC 2018
published: 2018
aliases:
  - KOS18
cryptobib_key: TCC:KhuOstSri18
---

# [KOS18] Round Optimal Black-Box Commit-and-Prove

**Authors:** Dakshita Khurana, Rafail Ostrovsky, Akshayaram Srinivasan | **Venue:** TCC 2018 | [Source](https://eprint.iacr.org/2018/921)

## Abstract

Motivatedbytheoreticalandpracticalconsiderations,anim- portant line of research is to design secure computation protocols that only make black-box use of cryptography. An important component in nearly all the black-box secure computation constructions is a black- box commit-and-prove protocol. A commit-and-prove protocol allows a prover to commit to a value and prove a statement about this value while guaranteeing that the committed value remains hidden. A black- box commit-and-prove protocol implements this functionality while only making black-box use of cryptography.
In this paper, we build several tools that enable constructions of round- optimal, black-box commit and prove protocols. In particular, assuming injective one-way functions, we design the first round-optimal, black- box commit-and-prove arguments of knowledge satisfying strong privacy against malicious verifiers, namely:
– Zero-knowledge in four rounds and,
– Witness indistinguishability in three rounds.
Prior to our work, the best known black-box protocols achieving commit- and-prove required more rounds.
We additionally ensure that our protocols can be used, if needed, in the delayed-input setting, where the statement to be proven is decided only towards the end of the interaction. We also observe simple applications of our protocols towards achieving black-box four-round constructions of extractable and equivocal commitments.
We believe that our protocols will provide a useful tool enabling several new constructions and easy round-efficient conversions from non-black- box to black-box protocols in the future.
