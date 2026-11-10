---
type: reference
status: stub
title: "HK07"
source: https://eprint.iacr.org/2007/288
authors: Dennis Hofheinz, Eike Kiltz
venue: CRYPTO 2007
published: 2007
aliases:
  - HK07
cryptobib_key: C:HofKil07
---

# [HK07] Secure Hybrid Encryption from Weakened Key Encapsulation

**Authors:** Dennis Hofheinz, Eike Kiltz | **Venue:** CRYPTO 2007 | [Source](https://eprint.iacr.org/2007/288)

## Abstract

We put forward a new paradigm for building hybrid encryption schemes
from constrained chosen-ciphertext secure (CCCA) key-encapsulation mechanisms (KEMs) plus authenticated symmetric encryption. Constrained chosen-ciphertext security is a new security notion for KEMs that we propose. CCCA has less demanding security requirements than standard chosen-ciphertext (CCA) security (since it requires the adversary to have a certain plaintext-knowledge when making a decapsulation query) yet we can prove that CCCA is sufficient for secure hybrid encryption.

Our notion is not only useful to express the Kurosawa-Desmedt public-key encryption scheme and its generalizations to hash-proof systems in an abstract KEM/DEM security framework. It also has a very constructive appeal, which we demonstrate with a new encryption scheme
whose security relies on a class of intractability assumptions that we show (in the generic group model) strictly weaker than the Decision Diffie-Hellman (DDH) assumption. This appears to be the first practical public-key encryption scheme in the literature from an
algebraic assumption strictly weaker than DDH.
