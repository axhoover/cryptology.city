---
type: reference
status: draft
title: "IK03"
source: https://eprint.iacr.org/2002/180
authors: Tetsu Iwata, Kaoru Kurosawa
venue: FSE 2003
published: 2003
aliases:
  - IK03
cryptobib_key: FSE:IwaKur03
---

# [IK03] OMAC: One-Key CBC MAC

**Authors:** Tetsu Iwata, Kaoru Kurosawa | **Venue:** FSE 2003 | [Source](https://eprint.iacr.org/2002/180)

## Abstract

In this paper, we present One-key CBC MAC (OMAC) and prove its security for arbitrary length messages. OMAC takes only one key, $K$ ($k$ bits) of a block cipher $E$. Previously, XCBC requires three keys, $(k+2n)$ bits in total, and TMAC requires two keys, $(k+n)$ bits in total, where $n$ denotes the block length of $E$. The saving of the key length makes the security proof of OMAC substantially harder than those of XCBC and TMAC.
