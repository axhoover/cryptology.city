---
type: reference
status: stub
title: "FS12"
source: https://eprint.iacr.org/2010/648
authors: Dario Fiore, Dominique Schröder
venue: TCC 2012
published: 2012
aliases:
  - FS12
cryptobib_key: TCC:FioSch12
---

# [FS12] Uniqueness Is a Different Story: Impossibility of Verifiable Random Functions from Trapdoor Permutations

**Authors:** Dario Fiore, Dominique Schröder | **Venue:** TCC 2012 | [Source](https://eprint.iacr.org/2010/648)

## Abstract

Verifiable random functions (VRFs), firstly proposed by Micali, Rabin, and
Vadhan (FOCS 99), are pseudorandom functions with the additional property that
the owner of the seed $\mathsf{vsk}$ can issue publicly-verifiable proofs for the
statements “$f({\mathsf{vsk}},x)=y$”, for any input $x$. Moreover, the output of
VRFs is guaranteed to be unique, which means that $y=f({\mathsf{vsk}},x)$ is the only
image that can be proven to map to $x$. Due to their properties, VRFs are a
fascinating primitive that have found several theoretical and practical
applications. However, despite their popularity, constructing VRFs seems to be
a challenging task. Indeed only a few constructions based on specific
number-theoretic problems are known and basing a scheme on a general
assumption is still an open problem. Towards this direction, Brakerski,
Goldwasser, Rothblum, and Vaikuntanathan (TCC 2009) recently showed that
verifiable random functions cannot be constructed from one-way permutations in
a black-box way.

In this paper we put forward the study of the relationship between VRFs and
well-established cryptographic primitives. As our main result, we prove that
VRFs cannot be based on the existence of trapdoor permutations (TDPs) in a
black-box manner.

Our result sheds light on the nature of VRFs and can be considered
interesting for at least two reasons:

- First, given the separation result of Brakerski _et al._, one may
  think as though VRFs would naturally belong to the “public-key world”, and
  thus it is interesting to figure out their relationship with other public-key
  primitives. In this sense, our result shows that VRFs are much stronger
  because we imply separations of VRFs from most of the primitives in this
  world: basically everything that is implied by TDPs is strictly weaker. These
  primitives include e.g., public-key encryption (even CCA secure), oblivious
  transfer, and key-agreement.

- Second, the notion of VRFs is closely related to other two primitives: weak
  verifiable random functions (weak-VRFs) and verifiable pseudorandom generators
  (VPRGs). Weak-VRFs, defined by Brakerski _et al._, are a relaxation of
  VRFs in which the pseudorandomness holds only with respect to random inputs.
  VPRGs, introduced by Dwork and Naor (FOCS 2000), are pseudorandom generators
  that allow the owner of the seed to prove the correctness of subsets of the
  generated bits. It is well known that “regular” PRFs can be constructed
  from pseudorandom generators and from weak-PRFs in a black-box way. It was
  thus an open problem (already recognized by Dwork and Naor in their paper)
  whether similar approaches could be applicable to the “verifiable” analogous
  of such primitives. Since weak-VRFs and VPRGs are implied by TDPs, we give a
  negative answer to this problem showing that the case of verifiable random
  functions is essentially different.
