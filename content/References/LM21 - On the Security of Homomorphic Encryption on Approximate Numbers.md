---
type: reference
status: stub
title: "LM21"
source: https://eprint.iacr.org/2020/1533
authors: Baiyu Li, Daniele Micciancio
venue: EUROCRYPT 2021
published: 2021
aliases:
  - LM21
cryptobib_key: EC:LiMic21
---

# [LM21] On the Security of Homomorphic Encryption on Approximate Numbers

**Authors:** Baiyu Li, Daniele Micciancio | **Venue:** EUROCRYPT 2021 | [Source](https://eprint.iacr.org/2020/1533)

## Abstract

We present passive attacks against CKKS, the homomorphic encryption
scheme for arithmetic on approximate numbers presented at
Asiacrypt 2017. The attack is both theoretically efficient
(running in expected polynomial time)
and very practical, leading to complete key recovery with high probability
and very modest running times.
We implemented and tested the attack against major open source
homomorphic encryption libraries, including HEAAN, SEAL, HElib and
PALISADE, and when computing several functions that often arise in applications of the
CKKS scheme to machine learning on encrypted data, like mean and variance computations, and
approximation of logistic and exponential functions using their Maclaurin series.

The attack shows that the traditional formulation of IND-CPA security
(or indistinguishability against chosen plaintext attacks)
achieved by CKKS does not adequately capture security against passive
adversaries when applied to approximate encryption schemes,
and that a different, stronger definition is required to evaluate
the security of such schemes.

We provide a solid theoretical basis for the security evaluation of homomorphic
encryption on approximate numbers (against passive attacks)
by proposing new definitions, that
naturally extend the traditional notion of INDCPA security to the approximate
computation setting.
We propose both indistinguishability-based and simulation-based variants,
as well as restricted versions of the definitions that limit the order and number
of adversarial queries (as may be enforced by some applications).
We prove implications and separations among different definitional variants,
and discuss possible modifications to CKKS that may serve as a countermeasure to our
attacks.
