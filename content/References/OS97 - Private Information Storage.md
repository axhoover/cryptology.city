---
type: reference
status: stub
title: "OS97"
source: https://eprint.iacr.org/1996/005
authors: Rafail Ostrovsky, Victor Shoup
venue: STOC 1997
published: 1997
aliases:
  - OS97
cryptobib_key: STOC:OstSho97
---

# [OS97] Private Information Storage

**Authors:** Rafail Ostrovsky, Victor Shoup | **Venue:** STOC 1997 | [Source](https://eprint.iacr.org/1996/005)

## Abstract

We consider the setting of hiding information through the use of
multiple databases that do not interact with one another. Previously,
in this setting solutions for retrieval of data in the efficient
manner were given, where a user achieves this by interacting with all
the databases. We consider the case of both writing and
reading. While the case of reading was well studied before, the case
of writing was previously completely open. In this paper, we show how
to implement both read and write operations. As in the previous
papers, we measure, as a function of k and n the amount of
communication required between a user and all the databases for a
single read/write operation, and achieve efficient read/write schemes.
Moreover, we show a general reduction from reading database scheme to
reading and writing database scheme, with the following guarantees:
for any k, given a retrieval only k-database scheme with communication
complexity R(k,n) we show a (k+1) reading and writing database scheme
with total communication complexity O(R(k,n) \* (log n)^{O(1)}). It
should be stressed that prior to the current paper no trivial
(i.e. sub-linear) bounds for private information storage were known.
