---
type: reference
status: stub
title: "AF07"
source: https://eprint.iacr.org/2006/423
authors: Masayuki Abe, Serge Fehr
venue: TCC 2007
published: 2007
aliases:
  - AF07
cryptobib_key: TCC:AbeFeh07
---

# [AF07] Perfect NIZK with Adaptive Soundness

**Authors:** Masayuki Abe, Serge Fehr | **Venue:** TCC 2007 | [Source](https://eprint.iacr.org/2006/423)

## Abstract

This paper presents a very simple and efficient adaptively-sound perfect NIZK argument system for any NP-language. In contrust to recently proposed schemes by Groth, Ostrovsky and Sahai, our scheme does not pose any restriction on the statements to be proven. Besides, it enjoys a number of desirable properties: it allows to re-use the common reference string (CRS), it can handle
arithmetic circuits, and the CRS can be set-up very efficiently
without the need for an honest party.

We then show an application of our techniques in constructing efficient NIZK schemes for proving arithmetic relations among committed secrets, whereas previous methods required expensive generic NP-reductions.

The security of the proposed schemes is based on a strong non-standard assumption, an extended version of the so-called Knowledge-of-Exponent Assumption (KEA) over bilinear groups. We give some justification for using such an assumption by showing that the commonly-used approach for proving NIZK arguments sound does not allow for adaptively-sound statistical NIZK arguments
(unless NP is in P/poly). Furthermore, we show that the assumption used in our construction holds with respect to generic adversaries that do not exploit the specific representation of the group elements. We also discuss how to avoid the non-standard
assumption in a pre-processing model.
