---
type: reference
status: stub
title: "Bro15"
source: https://eprint.iacr.org/2015/509
authors: Daniel R. L. Brown
venue: preprint
published: 2015
aliases:
  - Bro15
cryptobib_key: EPRINT:Brown15c
---

# [Bro15] A Flaw in a Theorem About Schnorr Signatures

**Authors:** Daniel R. L. Brown | **Venue:** preprint | [Source](https://eprint.iacr.org/2015/509)

## Abstract

An alleged theorem of Neven, Smart and Warinschi (NSW) about the
security of Schnorr signatures seems to have a flaw described in
this report.

Schnorr signatures require representation of an element in a
discrete logarithm group as a hashable bit string. This report
describes a defective bit string representation of elliptic curve
points. Schnorr signatures are insecure when used with this
defective representation. Nevertheless, the defective
representation meets all the conditions of the NSW theorem.

Of course, a natural representation of an elliptic curve group
element would not suffer from this major defect. So, the NSW
theorem can probably be fixed.
