---
type: reference
status: stub
title: "KRR17"
source: https://eprint.iacr.org/2016/303
authors: Yael Tauman Kalai, Guy N. Rothblum, Ron D. Rothblum
venue: CRYPTO 2017
published: 2017
aliases:
  - KRR17
cryptobib_key: C:KalRotRot17
---

# [KRR17] From Obfuscation to the Security of Fiat-Shamir for Proofs

**Authors:** Yael Tauman Kalai, Guy N. Rothblum, Ron D. Rothblum | **Venue:** CRYPTO 2017 | [Source](https://eprint.iacr.org/2016/303)

## Abstract

The Fiat-Shamir paradigm [CRYPTO'86] is a heuristic for converting
three-round identification schemes into signature schemes, and more
generally, for collapsing rounds in constant-round public-coin
interactive protocols. This heuristic is very popular both in theory
and in practice, and its security has been the focus of extensive
study.

In particular, this paradigm was shown to be secure in the so-called
Random Oracle Model. However, in the plain model, mainly negative
results were shown. In particular, this heuristic was shown to be
insecure when applied to computationally sound proofs (also known as
arguments). Moreover, recently it was shown that even in the
restricted setting where the heuristic is applied to interactive
proofs (as opposed to arguments), its soundness cannot be proven via a
black-box reduction to any so-called falsifiable assumption.

In this work, we give a positive result for the security of this
paradigm in the plain model. Specifically, we construct a hash
function for which the Fiat Shamir paradigm is secure when applied to
proofs (as opposed to arguments), assuming the existence of a
sub-exponentially secure indistinguishability obfuscator, the
existence of an exponentially secure input-hiding obfuscator for the
class of multi-bit point functions, and the existence of a
sub-exponentially secure one-way function.

While the hash function we construct is far from practical, we believe
that this is a first step towards instantiations that are both more
efficient and provably secure. In addition, we show that this result
resolves a long-lasting open problem in the study of zero-knowledge
proofs: It implies that there does not exist a public-coin
constant-round zero-knowledge proof with negligible soundness (under
the assumptions stated above).
