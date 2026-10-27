---
type: glossary
status: stub
aliases:
  - Sorting circuit
  - Sorting circuits
title: Sorting circuits
id: sorting-circuits
variants:
  small-sorting-circuits: "#small-sorting-circuits"
unlisted: true
---

# Sorting circuits

A sorting circuit for $n$ words of $w$ bits is a Boolean circuit with $n w$ inputs and $n w$ outputs that outputs its $n$ input words in non-decreasing order. The sorting network of [[AKS83 - An 0(n log n) sorting network|AKS83]] has $O(n \log n)$ comparators; with $O(w)$ gates per comparator it gives sorting circuits of size $O(n \cdot w \cdot \log n)$ — standard.

## Small sorting circuits

**Small sorting circuits** exist if for every word-size function $w(n) \in \Omega(\log n) \cap n^{o(1)}$ there are Boolean circuits of size $o(n \cdot w \cdot \log n)$, computable in time polynomial in $n w$, that sort $n$ words of $w$ bits. The requirement asks to beat the AKS83 bound by a superconstant factor. Whether such circuits exist is open. Proving that, for some such $w$, no circuits of size $o(n \cdot w \cdot \log n)$ sort $n$ words of $w$ bits would be a superlinear lower bound on Boolean circuit size, and none is known for any explicit function — standard.

<!-- BEGIN GENERATED participates-in a1778d4cf731 -->

## Participates in

**Builds on Sorting circuits**

- [[small-sorting-circuits-to-sublogarithmic-offline-oram-bn16|Small sorting circuits ⇒ sublogarithmic-overhead offline ORAM]] (via [[sorting-circuits#small-sorting-circuits|Small sorting circuits]])

<!-- END GENERATED participates-in -->
