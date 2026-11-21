---
type: reference
status: stub
title: "CKM21"
source: https://eprint.iacr.org/2021/1375
authors: Elizabeth Crites, Chelsea Komlo, Mary Maller
venue: preprint
published: 2021
aliases:
  - CKM21
cryptobib_key: EPRINT:CriKomMal21
---

# [CKM21] How to Prove Schnorr Assuming Schnorr: Security of Multi- and Threshold Signatures

**Authors:** Elizabeth Crites, Chelsea Komlo, Mary Maller | **Venue:** preprint | [Source](https://eprint.iacr.org/2021/1375)

## Abstract

This work investigates efficient multi-party signature schemes in the discrete logarithm setting. We focus on a concurrent model, in which an arbitrary number of signing sessions may occur in parallel. Our primary contributions are: (1) a modular framework for proving the security of Schnorr multisignature and threshold signature schemes, (2) an optimization of the two-round threshold signature scheme $\mathsf{FROST}$ that we call $\mathsf{FROST2}$, and (3) the application of our framework to prove the security of $\mathsf{FROST2}$ as well as a range of other multi-party schemes.

We begin by demonstrating that our framework is applicable to multisignatures. We prove the security of a variant of the two-round $\mathsf{MuSig2}$ scheme with proofs of possession and a three-round multisignature $\mathsf{SimpleMuSig}$. We introduce a novel three-round threshold signature $\mathsf{SimpleTSig}$ and propose an optimization to the two-round $\mathsf{FROST}$ threshold scheme that we call $\mathsf{FROST2}$. $\mathsf{FROST2}$ reduces the number of scalar multiplications required during signing from linear in the number of signers to constant. We apply our framework to prove the security of $\mathsf{FROST2}$ under the one-more discrete logarithm assumption and $\mathsf{SimpleTSig}$ under the discrete logarithm assumption in the programmable random oracle model.
