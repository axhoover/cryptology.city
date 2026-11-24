---
type: reference
status: draft
title: "BP18"
source: https://eprint.iacr.org/2018/526
authors: Daniel J. Bernstein, Edoardo Persichetti
venue: preprint
published: 2018
aliases:
  - BP18
cryptobib_key: EPRINT:BerPer18
---

# [BP18] Towards KEM Unification

**Authors:** Daniel J. Bernstein, Edoardo Persichetti | **Venue:** preprint | [Source](https://eprint.iacr.org/2018/526)

## Abstract

This paper highlights a particular construction of a correct KEM without failures and without ciphertext expansion from any correct deterministic PKE, and presents a simple tight proof of ROM IND-CCA2 security for the KEM assuming merely OW-CPA security for the PKE. Compared to previous proofs, this proof is simpler, and is also factored into smaller pieces that can be audited independently. In particular, this paper introduces the notion of “IND-Hash” security and shows that this allows a new separation between checking encryptions and randomizing decapsulations. The KEM is easy to implement in constant time, given a constant-time implementation of the PKE.
