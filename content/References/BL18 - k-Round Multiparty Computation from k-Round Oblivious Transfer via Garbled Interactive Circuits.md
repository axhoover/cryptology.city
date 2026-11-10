---
type: reference
status: stub
title: "BL18"
source: https://eprint.iacr.org/2017/1125
authors: Fabrice Benhamouda, Huijia Lin
venue: EUROCRYPT 2018
published: 2018
aliases:
  - BL18
cryptobib_key: EC:BenLin18
---

# [BL18] k-Round Multiparty Computation from k-Round Oblivious Transfer via Garbled Interactive Circuits

**Authors:** Fabrice Benhamouda, Huijia Lin | **Venue:** EUROCRYPT 2018 | [Source](https://eprint.iacr.org/2017/1125)

## Abstract

We present new constructions of round-efficient, or even round-optimal, Multi-Party Computation (MPC) protocols from Oblivious Transfer (OT) protocols. Our constructions establish a tight connection between MPC and OT: In the setting of semi-honest security, for any $k \ge 2$, $k$-round semi-honest OT is necessary and complete for $k$-round semi-honest MPC. In the round-optimal case of $k = 2$, we obtain 2-round semi-honest MPC from 2-round semi-honest OT, resolving the round complexity of semi-honest MPC assuming weak and necessary assumption. In comparison, previous 2-round constructions rely on either the heavy machinery of indistinguishability obfuscation or witness encryption, or the algebraic structure of bilinear pairing groups. More generally, for an arbitrary number of rounds $k$, all previous constructions of $k$-round semi-honest MPC require at least OT with $k'$ rounds for $k' \le \lfloor k/2 \rfloor$.

In the setting of malicious security, we show: For any $k \ge 5$, $k$-round malicious OT is necessary and complete for $k$-round malicious MPC. In fact, OT satisfying a weaker notion of delayed-semi-malicious security suffices. In the common reference string model, for any $k \ge 2$, we obtain $k$-round malicious Universal Composable (UC) protocols from any $k$-round semi-malicious OT and non-interactive zero-knowledge. Previous 5-round protocols in the plain model, and 2-round protocols in the common reference string model all require algebraic assumptions such as DDH or LWE.

At the core of our constructions is a new framework for garbling interactive circuits. Roughly speaking, it allows for garbling interactive machines that participates in interactions of a special form. The garbled machine can emulate the original interactions receiving messages sent in the clear (without being encoded using secrets), and reveals only the transcript of the interactions, provided that the transcript is computationally uniquely defined. We show that garbled interactive circuits for the purpose of constructing MPC can be implemented using OT. Along the way, we also propose a new primitive of witness selector that strengthens witness encryption, and a new notion of zero-knowledge functional commitments.
