---
type: reduction
status: draft
title: "Search LWE ⇒ Decision LWE"
aliases: []
id: red-search-lwe-to-decision-lwe
kind: implication
hypotheses: [search-lwe]
conclusion: decision-lwe
class: unstated
model: standard
source:
  - "[[Reg05 - On Lattices, Learning with Errors, Random Linear Codes, and Cryptography|Reg05]]"
security-loss: ""
---

# Search LWE ⇒ Decision LWE

[[learning-with-errors#search-lwe|Search LWE]] implies [[learning-with-errors#decision-lwe|Decision LWE]].

## Statement

If [[learning-with-errors#search-lwe|search LWE]] with parameters $(n, q, \chi)$ is hard for every polynomial number of samples, where $q$ is prime and $q = \poly(n)$, then [[learning-with-errors#decision-lwe|decision LWE]] with the same $(n, q, \chi)$ is hard for every polynomial number of samples: an efficient distinguisher between $(\mathbf{A}, \mathbf{A}\mathbf{s} + \mathbf{e})$ and $(\mathbf{A}, \mathbf{u})$ using $m$ samples yields an efficient algorithm that recovers $\mathbf{s}$ from $\poly(n, m)$ samples — [[Reg05 - On Lattices, Learning with Errors, Random Linear Codes, and Cryptography|Reg05]].

## Sketch

Recover $\mathbf{s}$ one coordinate at a time. To test the guess $\mathbf{s}_i = \ell$, map each sample $(\mathbf{a}, b)$ to $(\mathbf{a} + r\mathbf{u}_i,\; b + r\ell)$ for the $i$-th unit vector $\mathbf{u}_i$ and a fresh uniform $r \in \ZZ_q$: the new sample is $(\mathbf{a}', \langle \mathbf{a}', \mathbf{s}\rangle + e + r(\ell - \mathbf{s}_i))$, LWE-distributed when $\ell = \mathbf{s}_i$ and uniform otherwise, since $r(\ell - \mathbf{s}_i)$ is uniform for prime $q$. Running the distinguisher over all $nq$ pairs $(i, \ell)$ reads off $\mathbf{s}$, which is why $q$ must be polynomial; the random self-reduction $(\mathbf{a}, b) \mapsto (\mathbf{a}, b + \langle \mathbf{a}, \mathbf{t}\rangle)$ for uniform $\mathbf{t}$ first turns an average-case distinguisher into one that works for every $\mathbf{s}$.

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.

- Sample-preserving search-to-decision reductions: for a wide range of parameters, $m$ LWE samples are pseudorandom whenever search LWE is one-way for the same $m$ — [[MM11b - Pseudorandom Knapsacks and the Sample Complexity of LWE Search-to-Decision Reductions|MM11b]].
