---
type: reference
status: stub
title: "ZLTS23"
source: https://eprint.iacr.org/2022/609
authors: Mingxun Zhou, Wei-Kai Lin, Yiannis Tselekounis, Elaine Shi
venue: Eurocrypt 2023
published: 2023
aliases:
  - ZLTS23
cryptobib_key: EC:ZLTS23
---

# [ZLTS23] Optimal Single-Server Private Information Retrieval

**Authors:** Mingxun Zhou, Wei-Kai Lin, Yiannis Tselekounis, Elaine Shi | **Venue:** Eurocrypt 2023 | [Source](https://eprint.iacr.org/2022/609)

## Abstract

We construct a single-server
pre-processing Private Information Retrieval
(PIR) scheme
with optimal bandwidth
and server computation (up to poly-logarithmic factors), assuming
hardness of the Learning With Errors (LWE) problem.
Our scheme achieves
amortized
$\widetilde{O}_{\lambda}(\sqrt{n})$
server and client computation and $\widetilde{O}_\lambda(1)$
bandwidth per query, completes in a single roundtrip, and requires
$\widetilde{O}_\lambda(\sqrt{n})$
client storage.
In particular, we achieve a significant
reduction in bandwidth over the
state-of-the-art scheme by Corrigan-Gibbs,
Henzinger, and Kogan (Eurocrypt'22):
their scheme requires as much as
$\widetilde{O}_{\lambda}(\sqrt{n})$
bandwidth per query, with comparable
computational and storage overhead as ours.
