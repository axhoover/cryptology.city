---
type: primitive
status: stub
aliases:
  - OWP
  - One-way permutation
  - One-way permutations
title: One-way permutations
id: owp
---

# One-way permutations

A one-way permutation is a permutation which is easy to compute in one direction but hard to invert.

## Properties

A _one-way permutation_ is a family of efficiently computable permutations $\{\pi_{\secpar} : \calD \to \calD\}_{\secpar \in \NN}$ and a distribution $X$ over $\calD$, such that for every efficient algorithm $\calA$ there is some negligible function $\nu$, where, for every $\secpar$: $$\Pr_{x\sim X}[\pi_{\secpar}(x') = \pi_{\secpar}(x) : x' \gets \calA(1^{\secpar}, \pi_{\secpar}(x))] \le \nu(\secpar).$$

# Other results

- [[owp-to-hash-function|OWP ⇒ OWF]] — folklore
- [[no-injective-owf-to-owp-mm11|No fully black-box construction of OWP from length-increasing injective OWF]] — [[MM11 - On Black-Box Separations among Injective One-Way Functions|MM11a]]

<!-- BEGIN GENERATED participates-in 230b4d59d0c4 -->

## Participates in

**Builds on One-way permutations**

- [[owp-to-hash-function|OWP ⇒ OWF]]
- [[owp-to-prg-yao82a-gl89|OWP ⇒ PRG (Blum–Micali–Yao)]]
- [[owp-to-statistically-hiding-commitment-novy98|OWP ⇒ Statistically hiding COM (NOVY)]]
- [[owp-to-uowhf-ny89|OWP ⇒ UOWHF (Naor–Yung)]]

**Barriers**

- [[no-injective-owf-to-owp-mm11|No fully-black-box reduction from length-increasing injective OWF to OWP]]
- [[no-owf-to-owp-rud88|No fully-black-box reduction from OWF to OWP]]
- [[no-owp-to-crhf-sim98|No relativizing reduction from OWP to CRHF]]
- [[no-owp-to-ke-ir89|No relativizing reduction from OWP to KE]]

<!-- END GENERATED participates-in -->
