---
type: reference
status: draft
title: "RS04"
source: https://eprint.iacr.org/2004/035
authors: Phillip Rogaway, Thomas Shrimpton
venue: FSE 2004
published: 2004
aliases:
  - RS04
cryptobib_key: FSE:RogShr04
---

# [RS04] Cryptographic Hash-Function Basics: Definitions, Implications, and Separations for Preimage Resistance, Second-Preimage Resistance, and Collision Resistance

**Authors:** Phillip Rogaway, Thomas Shrimpton | **Venue:** FSE 2004 | [Source](https://eprint.iacr.org/2004/035)

## Abstract

We consider basic notions of security for cryptographic hash
functions: collision resistance, preimage resistance, and
second-preimage resistance. We give seven different definitions
that correspond to these three underlying ideas, and then we work out
all of the implications and separations among these seven definitions
within the concrete-security, provable-security framework. Because
our results are concrete, we can show two types of implications,
"conventional" and "provisional", where the strength of the latter depends on the amount of compression achieved by the hash function. We also distinguish two types of separations, "conditional" and "unconditional". When constructing counterexamples for our separations, we are careful to preserve specified hash-function domains and ranges; this rules out some pathological counterexamples and makes the separations more meaningful in practice.

Four of our definitions are standard while three appear to be new;
some of our relations and separations have appeared, others have not. Here we give a modern treatment that acts to catalog, in one place and with carefully-considered nomenclature, the most basic security notions for cryptographic hash functions.

# Notes

- The ePrint version (revised July 16, 2009) corrects the FSE 2004 paper and the 2004 full version: it withdraws the claim that ePre implies Pre, proves the separation as Theorem 15, renumbers "Separations, part 3" from Theorem 15 to Theorem 16, and notes that some counterexamples in the proof of that theorem are buggy (footnote 4). The 2004 full version is at https://web.cs.ucdavis.edu/~rogaway/papers/relates.pdf.
