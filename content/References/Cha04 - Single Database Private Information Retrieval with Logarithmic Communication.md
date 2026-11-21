---
type: reference
status: stub
title: "Cha04"
source: https://eprint.iacr.org/2004/036
authors: Yan-Cheng Chang
venue: ACISP 2004
published: 2004
aliases:
  - Cha04
cryptobib_key: ACISP:Chang04
---

# [Cha04] Single Database Private Information Retrieval with Logarithmic Communication

**Authors:** Yan-Cheng Chang | **Venue:** ACISP 2004 | [Source](https://eprint.iacr.org/2004/036)

## Abstract

In this paper, we study the problem of single database private
information retrieval, and present schemes with only logarithmic
server-side communication complexity. Previously the best result
could only achieve polylogarithmic communication, and was based on
certain less well-studied assumptions in number theory
[CMS99]. On the contrary, our construction is based on
Paillier's cryptosystem [P99], which along with its variants
have drawn extensive studies in recent cryptographic researches
[PP99,G00,CGGN01,DJ01,CGG02,CNS02,ST02,GMMV03,KT03], and have
many important applications (e.g., the Cramer-Shoup CCA2
encryption scheme in the standard model [CS02]).

Actually, our schemes can be directly used to implement
$1$-out-of-$N$ _$\ell$-bit string_ oblivious transfer with
$O(\ell)$ sender-side communication complexity (against
semi-honest receivers and malicious senders). Note the sender-side
communication complexity is independent of $N$, the constant
hidden in the big-$O$ notation is in fact small, and $\ell$ is
unrestricted. Moreover, We also show a way to do communication
balancing between the sender-side and the receiver-side.

In addition, we show how to handle malicious receivers with small
communication overheads, which itself is a non-trivial result.
