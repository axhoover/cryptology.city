---
type: reference
status: stub
title: "MRH04"
source: https://eprint.iacr.org/2003/161
authors: Ueli Maurer, Renato Renner, Clemens Holenstein
venue: TCC 2004
published: 2004
aliases:
  - MRH04
cryptobib_key: TCC:MauRenHol04
---

# [MRH04] Indifferentiability, Impossibility Results on Reductions, and Applications to the Random Oracle Methodology

**Authors:** Ueli Maurer, Renato Renner, Clemens Holenstein | **Venue:** TCC 2004 | [Source](https://eprint.iacr.org/2003/161)

## Abstract

The goals of this paper are three-fold. First we introduce and
motivate a generalization of the fundamental concept of the
indistinguishability of two systems, called indifferentiability.
This immediately leads to a generalization of the related notion of
reducibility of one system to another.

Second, we prove that indifferentiability is the necessary and
sufficient condition on two systems S and T such that the security
of any cryptosystem using T as a component is not affected when T is
substituted by S. In contrast to indistinguishability,
indifferentiability is applicable in settings where a possible
adversary is assumed to have access to additional information about
the internal state of the involved systems, for instance the public
parameter selecting a member from a family of hash functions.

Third, we state an easily verifiable criterion for a system U not to
be reducible (according to our generalized definition) to another
system V and, as an application, prove that a random oracle is not
reducible to a weaker primitive, called asynchronous beacon, and
also that an asynchronous beacon is not reducible to a finite-length
random string. Each of these irreducibility results alone implies
the main theorem of Canetti, Goldreich and Halevi stating that there
exist cryptosystems that are secure in the random oracle model but
for which replacing the random oracle by any implementation leads to
an insecure cryptosystem.
