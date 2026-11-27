---
type: reference
status: draft
title: "SS21"
source: https://eprint.iacr.org/2021/745
authors: Gili Schul-Ganz, Gil Segev
venue: ITC 2021
published: 2021
aliases:
  - SS21
cryptobib_key: ITC:SchSeg21
---

# [SS21] Generic-Group Identity-Based Encryption: A Tight Impossibility Result

**Authors:** Gili Schul-Ganz, Gil Segev | **Venue:** ITC 2021 | [Source](https://eprint.iacr.org/2021/745)

## Abstract

Following the pioneering work of Boneh and Franklin (CRYPTO '01), the challenge of constructing an identity-based encryption scheme based on the Diffie-Hellman assumption remained unresolved for more than 15 years. Evidence supporting this lack of success was provided by Papakonstantinou, Rackoff and Vahlis (ePrint '12), who ruled out the existence of generic-group identity-based encryption schemes supporting an identity space of sufficiently large polynomial size. Nevertheless, the breakthrough result of Döttling and Garg (CRYPTO '17) settled this long-standing challenge via a non-generic construction.

We prove a tight impossibility result for generic-group identity-based encryption, ruling out the existence of any non-trivial construction: We show that any scheme whose public parameters include $n_{\sf pp}$ group elements may support at most $n_{\sf pp}$ identities. This threshold is trivially met by any generic-group public-key encryption scheme whose public keys consist of a single group element (e.g., ElGamal encryption).

In the context of algebraic constructions, generic realizations are often both conceptually simpler and more efficient than non-generic ones. Thus, identifying exact thresholds for the limitations of generic groups is not only of theoretical significance but may in fact have practical implications when considering concrete security parameters.
