---
type: reduction
status: draft
title: "Φ-Hiding ⇒ cPIR"
aliases: []
id: red-hiding-to-cpir
kind: implication
hypotheses: [phi-hiding]
conclusion: cpir
class: unstated
model: standard
source:
  - "[[CMS99 - Computationally Private Information Retrieval with Polylogarithmic Communication|CMS99]]"
security-loss: ""
---

# Φ-Hiding ⇒ cPIR

[[rsa-assumption#-hiding|Φ-Hiding]] implies [[single-server-private-information-retrieval|cPIR]].

## Statement

Under the [[rsa-assumption#-hiding|Φ-hiding]] assumption, introduced in the same work, there is a single-server [[single-server-private-information-retrieval|cPIR]] scheme with total communication polylogarithmic in the database size $n$ [[CMS99 - Computationally Private Information Retrieval with Polylogarithmic Communication|CMS99]].

## Sketch

The client derives a prime $p_i$ from index $i$ via a shared prime-sequence generator, sends a modulus $m$ with $p_i \mid \phi(m)$ — which by Φ-hiding hides $p_i$ — and a $p_i$-th non-residue $x \in \ZZ_m^*$. The server returns $x^e \bmod m$ for $e = \prod_j p_j^{b_j}$; knowing the factorization of $m$, the client tests whether the reply is a $p_i$-th residue, which holds iff $b_i = 1$.

## Notes

`class: unstated`: [[CMS99 - Computationally Private Information Retrieval with Polylogarithmic Communication|CMS99]] state no reduction notion, and the hypothesis is a hardness assumption rather than a primitive, so the RTV04 axes do not apply.

- A variant of Φ-hiding yields single-database PIR with constant communication rate — [[GR05 - Single-Database Private Information Retrieval with Constant Communication Rate|GR05]].
