---
type: reference
status: stub
title: "AS16"
source: https://eprint.iacr.org/2015/752
authors: Gilad Asharov, Gil Segev
venue: TCC 2016-A
published: 2016
aliases:
  - AS16
cryptobib_key: TCC:AshSeg16
---

# [AS16] On Constructing One-Way Permutations from Indistinguishability Obfuscation

**Authors:** Gilad Asharov, Gil Segev | **Venue:** TCC 2016-A | [Source](https://eprint.iacr.org/2015/752)

## Abstract

We prove that there is no black-box construction of a one-way permutation family from a one-way function and an indistinguishability obfuscator for the class of all oracle-aided circuits, where the construction is "domain invariant" (i.e., where each permutation may have its own domain, but these domains are independent of the underlying building blocks).

Following the framework of Asharov and Segev (FOCS '15), by considering indistinguishability obfuscation for oracle-aided circuits we capture the common techniques that have been used so far in constructions based on indistinguishability obfuscation. These include, in particular, non-black-box techniques such as the punctured programming approach of Sahai and Waters (STOC '14) and its variants, as well as sub-exponential security assumptions. For example, we fully capture the construction of a trapdoor permutation family from a one-way function and an indistinguishability obfuscator due to Bitansky, Paneth and Wichs (TCC '16). Their construction is not domain invariant and our result shows that this, somewhat undesirable property, is unavoidable using the common techniques.

In fact, we observe that constructions which are not domain invariant circumvent all known negative results for constructing one-way permutations based on one-way functions, starting with Rudich's seminal work (PhD thesis '88). We revisit this classic and fundamental problem, and resolve this somewhat surprising gap by ruling out all such black-box constructions -- even those that are not domain invariant.
