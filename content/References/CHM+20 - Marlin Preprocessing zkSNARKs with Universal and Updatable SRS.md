---
type: reference
status: stub
title: "CHM+20"
source: https://eprint.iacr.org/2019/1047
authors: Alessandro Chiesa, Yuncong Hu, Mary Maller, Pratyush Mishra, Psi Vesely, Nicholas P. Ward
venue: EUROCRYPT 2020
published: 2020
aliases:
  - CHM+20
cryptobib_key: EC:CHMMVW20
---

# [CHM+20] Marlin: Preprocessing zkSNARKs with Universal and Updatable SRS

**Authors:** Alessandro Chiesa, Yuncong Hu, Mary Maller, Pratyush Mishra, Psi Vesely, Nicholas P. Ward | **Venue:** EUROCRYPT 2020 | [Source](https://eprint.iacr.org/2019/1047)

## Abstract

We present a methodology to construct preprocessing zkSNARKs where the structured reference string (SRS) is universal and updatable. This exploits a novel use of _holography_ [Babai et al., STOC 1991], where fast verification is achieved provided the statement being checked is given in encoded form.

We use our methodology to obtain a preprocessing zkSNARK where the SRS has linear size and arguments have constant size. Our construction improves on Sonic [Maller et al., CCS 2019], the prior state of the art in this setting, in all efficiency parameters: proving is an order of magnitude faster and verification is thrice as fast, even with smaller SRS size and argument size. Our construction is most efficient when instantiated in the algebraic group model (also used by Sonic), but we also demonstrate how to realize it under concrete knowledge assumptions. We implement and evaluate our construction.

The core of our preprocessing zkSNARK is an efficient _algebraic holographic proof_ (AHP) for rank-1 constraint satisfiability (R1CS) that achieves linear proof length and constant query complexity.
