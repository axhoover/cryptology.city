---
title: "CGN98"
source: https://eprint.iacr.org/1998/003
authors: Benny Chor, Niv Gilboa, Moni Naor
venue: Theory of Cryptography Library
published: 1998-02-02
aliases:
  - CGN98
tags:
  - preprint

---
# [CGN98] Private Information Retrieval by Keywords

**Authors:** Benny Chor, Niv Gilboa, Moni Naor | **Venue:** Theory of Cryptography Library | [Source](https://eprint.iacr.org/1998/003)

## Abstract
Private information retrieval (PIR) schemes enable a user to access one or more servers that hold copies of a database and \textit{privately} retrieve parts of the $n$ bits of data stored in the database. This means that the queries give each individual database no partial information (in the information theoretic or computational sense) on the identity of the item retrieved by the user.

All known PIR schemes assume that the user knows the \textit{physical address} of the sought item. This is usually not the case when accessing a public database that is not managed by the user. Such databases are typically presented with keywords, which are then internally translated (at the database end) to physical addresses, using an appropriate search structure (for example, a hash table or a binary tree). In this note we describe a simple, modular way to privately access data by keywords. It combines \textit{any} conventional search structure with \textit{any} underlying PIR scheme (including single server schemes). The transformation requires no modification in the way that the search structure is maintained. Therefore the same database will support both private and regular (non private) searches.