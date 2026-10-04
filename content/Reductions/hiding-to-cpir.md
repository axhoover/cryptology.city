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

## Statement

Under the [[rsa-assumption#φ-hiding|Φ-hiding assumption]], introduced for this purpose, there is a single-server [[single-server-private-information-retrieval|PIR]] scheme with total communication polylogarithmic in the database size $n$ — [[CMS99 - Computationally Private Information Retrieval with Polylogarithmic Communication|CMS99]].

## Sketch

The client maps each index $j$ to a prime $p_j$ by a shared prime-sequence generator and sends a modulus $m$ with $p_i \mid \phi(m)$, which by Φ-hiding hides $p_i$, together with an $x \in \ZZ_m^*$ that is not a $p_i$-th residue. The server returns $x^Q \bmod m$ for $Q = \prod_j p_j^{b_j}$, where $b_j$ is the $j$-th database bit; knowing the factorization of $m$, the client tests whether the reply is a $p_i$-th residue, which holds iff $b_i = 1$.

## Notes

- A variant of Φ-hiding yields single-database PIR with constant communication rate — [[GR05 - Single-Database Private Information Retrieval with Constant Communication Rate|GR05]].
