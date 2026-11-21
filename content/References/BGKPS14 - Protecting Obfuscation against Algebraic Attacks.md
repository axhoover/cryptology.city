---
type: reference
status: stub
title: "BGKPS14"
source: https://eprint.iacr.org/2013/631
authors: Boaz Barak, Sanjam Garg, Yael Tauman Kalai, Omer Paneth, Amit Sahai
venue: EUROCRYPT 2014
published: 2014
aliases:
  - BGKPS14
cryptobib_key: EC:BGKPS14
---

# [BGKPS14] Protecting Obfuscation against Algebraic Attacks

**Authors:** Boaz Barak, Sanjam Garg, Yael Tauman Kalai, Omer Paneth, Amit Sahai | **Venue:** EUROCRYPT 2014 | [Source](https://eprint.iacr.org/2013/631)

## Abstract

Recently, Garg, Gentry, Halevi, Raykova, Sahai, and Waters (FOCS 2013) constructed a general-purpose obfuscating compiler for NC1 circuits. We describe a simplified variant of this compiler, and prove that it is a virtual black box obfuscator in a generic multilinear map model. This improves on Brakerski and Rothblum (eprint 2013) who gave such a result under a strengthening of the Exponential Time Hypothesis. We remove this assumption, and thus resolve an open question of Garg et al. As shown by Garg et al., a compiler for NC1 circuits can be bootstrapped to a compiler for all polynomial-sized circuits under the learning with errors (LWE) hardness assumption.

Our result shows that there is a candidate obfuscator that cannot be broken by algebraic attacks, hence reducing the task of creating secure obfuscators in the plain model to obtaining sufficiently strong security guarantees on candidate instantiations of multilinear maps.
