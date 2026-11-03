---
type: reduction
status: draft
title: "Φ-Hiding ⇒ cPIR"
aliases: []
id: red-hiding-to-cpir
kind: implication
hypotheses: [phi-hiding]
conclusion: polylog-cpir
class: unstated
model: standard
source:
  - "[[CMS99 - Computationally Private Information Retrieval with Polylogarithmic Communication|CMS99]]"
security-loss: ""
---

# Φ-Hiding ⇒ cPIR

## Statement

Under the [[rsa-assumption#φ-hiding|Φ-hiding assumption]], there is a one-round single-server [[single-server-private-information-retrieval|PIR]] scheme with [[single-server-private-information-retrieval#pir-with-polylogarithmic-communication|total communication polylogarithmic]] in the database size $n$ — [[CMS99 - Computationally Private Information Retrieval with Polylogarithmic Communication|CMS99]], which introduces the assumption.

## Sketch

The client maps each index $j$ to a prime $p_j$ by a shared prime-sequence generator and sends a modulus $m$ with $p_i \mid \phi(m)$, which by Φ-hiding hides $p_i$, together with an $x \in \ZZ_m^*$ that is not a $p_i$-th residue. The server returns $x^Q \bmod m$ for $Q = \prod_j p_j^{b_j}$, where $b_j$ is the $j$-th database bit; knowing the factorization of $m$, the client tests whether the reply is a $p_i$-th residue, which holds iff $b_i = 1$.

## Notes

- A simple variant of the Φ-hiding assumption gives single-database PIR with communication $O(k + d)$ for a $d$-bit block and security parameter $k \ge \log n$, hence constant rate on large blocks; the scheme is stated for general groups with hidden smooth subgroups — [[GR05 - Single-Database Private Information Retrieval with Constant Communication Rate|GR05]].
