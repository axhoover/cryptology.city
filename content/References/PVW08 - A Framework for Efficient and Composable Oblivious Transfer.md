---
type: reference
status: stub
title: "PVW08"
source: https://eprint.iacr.org/2007/348
authors: Chris Peikert, Vinod Vaikuntanathan, Brent Waters
venue: CRYPTO 2008
published: 2008
aliases:
  - PVW08
cryptobib_key: C:PeiVaiWat08
---

# [PVW08] A Framework for Efficient and Composable Oblivious Transfer

**Authors:** Chris Peikert, Vinod Vaikuntanathan, Brent Waters | **Venue:** CRYPTO 2008 | [Source](https://eprint.iacr.org/2007/348)

## Abstract

We propose a simple and general framework for constructing oblivious
transfer (OT) protocols that are _efficient_, _universally
composable_, and _generally realizable_ from a variety of
standard number-theoretic assumptions, including the decisional
Diffie-Hellman assumption, the quadratic residuosity assumption, and
_worst-case_ lattice assumptions.

Our OT protocols are round-optimal (one message each way), quite
efficient in computation and communication, and can use a single
common string for an unbounded number of executions. Furthermore, the
protocols can provide _statistical_ security to either the sender
or receiver, simply by changing the distribution of the common string.
For certain instantiations of the protocol, even a common
_random_ string suffices.

Our key technical contribution is a simple abstraction that we call a
_dual-mode_ cryptosystem. We implement dual-mode cryptosystems
by taking a unified view of several cryptosystems that have what we
call “messy” public keys, whose defining property is that a
ciphertext encrypted under such a key carries _no information_
(statistically) about the encrypted message.

As a contribution of independent interest, we also provide a multi-bit
version of Regev's lattice-based cryptosystem (STOC 2005) whose time
and space efficiency are improved by a linear factor in the security
parameter $n$. The amortized encryption and decryption time is only
$\tilde{O}(n)$ bit operations per message bit, and the ciphertext
expansion can be made as small as a constant; the public key size and
underlying lattice assumption remain essentially the same.
