---
type: reference
status: stub
title: "BGI+01"
source: https://eprint.iacr.org/2001/069
authors: Boaz Barak, Oded Goldreich, Russell Impagliazzo, Steven Rudich, Amit Sahai, Salil P. Vadhan, Ke Yang
venue: CRYPTO 2001
published: 2001
aliases:
  - BGI+01
cryptobib_key: C:BGIRSV01
---

# [BGI+01] On the (Im)possibility of Obfuscating Programs

**Authors:** Boaz Barak, Oded Goldreich, Russell Impagliazzo, Steven Rudich, Amit Sahai, Salil P. Vadhan, Ke Yang | **Venue:** CRYPTO 2001 | [Source](https://eprint.iacr.org/2001/069)

## Abstract

Informally, an _obfuscator_ $O$ is an (efficient,
probabilistic) “compiler” that takes as input a program (or
circuit) $P$ and produces a new program $O(P)$ that has the
same functionality as $P$ yet is “unintelligible” in some sense.
Obfuscators, if they exist, would have a wide variety of
cryptographic and complexity-theoretic applications, ranging from
software protection to homomorphic encryption to
complexity-theoretic analogues of Rice's theorem. Most of these
applications are based on an interpretation of the
“unintelligibility” condition in obfuscation as meaning that
$O(P)$ is a “virtual black box,” in the sense that anything
one can efficiently compute given $O(P)$, one could also
efficiently compute given oracle access to $P$.

In this work, we initiate a theoretical investigation of
obfuscation. Our main result is that, even under very
weak formalizations of the above intuition, obfuscation
is impossible. We prove this by constructing a family of
functions $F$ that are _inherently unobfuscatable_ in the following sense: there is a
property $\pi : F \rightarrow \{0,1\}$ such that (a) given _any program_ that computes a function $f\in F$, the
value $\pi(f)$ can be efficiently computed, yet (b) given
_oracle access_ to a (randomly selected) function
$f\in F$, no efficient algorithm can compute $\pi(f)$
much better than random guessing.

We extend our impossibility result in a number of ways, including
even obfuscators that (a) are not necessarily computable in
polynomial time, (b) only _approximately_ preserve the
functionality, and (c) only need to work for very restricted
models of computation ($TC^0$). We also rule out several
potential applications of obfuscators, by constructing
“unobfuscatable” signature schemes, encryption schemes, and
pseudorandom function families.
