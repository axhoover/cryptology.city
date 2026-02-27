---
title: "BHMW21"
source: https://eprint.iacr.org/2021/1113
authors: Elette Boyle, Justin Holmgren, Fermi Ma, Mor Weiss
venue: preprint
published: 2021-09-03
created: 2025-02-17
aliases:
  - BHMW21
tags:
  - preprint

---
# [BHMW21] On the Security of Doubly Efficient PIR

**Authors:** Elette Boyle, Justin Holmgren, Fermi Ma, Mor Weiss | **Venue:** preprint | [Source](https://eprint.iacr.org/2021/1113)

## Abstract
Doubly Efficient Private Information Retrieval (DEPIR) enables queries to an externally held database while hiding the identity of the queried indices, strengthening standard Private Information Retrieval (Chor, Goldreich, Kushilevitz, Sudan FOCS'95) with an efficiency requirement that the computational demands of both client and server are sublinear in the database size.
The first DEPIR candidate constructions were recently put forth, based on a new type of assumption relating to indistinguishability of moderate-degree polynomials from random functions when given permuted versions of their evaluation graphs (Boyle, Ishai, Pass,
Wootters TCC'17 and Canetti, Holmgren, Richelson TCC'17).
To aid in the cryptanalytic study of this new assumption, the work of (BIPW TCC'17) put forth a simpler ``toy conjecture'' variant.

In this note, we present an attack that provably breaks the BIPW TCC'17 toy conjecture.
The attack identifies a natural embedding of permuted samples into a higher-dimensional linear space for which permuted polynomial samples will be rank deficient.
We note, however, that our attack does not apply to the real assumption underlying the constructions, and thus the candidates still stand. We discuss extensions of the attack and present an alternative ``new toy conjecture'' for future study.

Similar results were independently obtained by (Blackwell and Wootters, ArXiv'21).