---
type: reference
status: stub
title: "CS02"
source: https://eprint.iacr.org/2001/085
authors: Ronald Cramer, Victor Shoup
venue: EUROCRYPT 2002
published: 2002
aliases:
  - CS02
cryptobib_key: EC:CraSho02
---

# [CS02] Universal Hash Proofs and a Paradigm for Adaptive Chosen Ciphertext Secure Public-Key Encryption

**Authors:** Ronald Cramer, Victor Shoup | **Venue:** EUROCRYPT 2002 | [Source](https://eprint.iacr.org/2001/085)

## Abstract

We present several new and fairly practical public-key
encryption schemes and prove them secure against adaptive
chosen ciphertext attack. One scheme is based on
Paillier's Decision Composite Residuosity (DCR)
assumption, while another is based in the classical
Quadratic Residuosity (QR) assumption. The analysis is in
the standard cryptographic model, i.e., the security of
our schemes does not rely on the Random Oracle model.

We also introduce the notion of a universal hash
proof system. Essentially, this is a special kind of
non-interactive zero-knowledge proof system for an NP
language. We do not show that universal hash
proof systems exist for all NP languages, but we do
show how to construct very efficient universal hash
proof systems for a general class of group-theoretic
language membership problems.

Given an efficient universal hash proof system for a
language with certain natural cryptographic
indistinguishability properties, we show
how to construct an efficient public-key encryption
schemes secure against adaptive chosen ciphertext attack
in the standard model. Our construction only uses the
universal hash proof systemas a primitive: no other
primitives are required, although even more efficient
encryption schemes can be obtained by using hash
functions with appropriate collision-resistance
properties.

We show how to construct efficient universal hash proof
systems for languages related to the DCR and QR
assumptions. From these we get corresponding public-key
encryption schemes that are secure under these assumptions.
We also show that the Cramer-Shoup encryption scheme
(which up until now was the only practical
encryption scheme that could be proved secure against
adaptive chosen ciphertext attack under a reasonable
assumption, namely, the Decision Diffie-Hellman assumption)
is also a special case of our general theory.
