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

## Statement

Let $q = \poly(n)$ be prime. If [[learning-with-errors#search-lwe|search LWE]] with parameters $(n, q, \chi)$ is hard for every polynomial number of samples, then [[learning-with-errors#decision-lwe|decision LWE]] with the same $(n, q, \chi)$ is hard for every polynomial number of samples: an efficient distinguisher between $(\mathbf{A}, \mathbf{A}\mathbf{s} + \mathbf{e})$ and $(\mathbf{A}, \mathbf{u})$ using $m$ samples yields an efficient algorithm that recovers $\mathbf{s}$ from $\poly(n, m)$ samples — [[Reg05 - On Lattices, Learning with Errors, Random Linear Codes, and Cryptography|Reg05]]. Sample-preserving search-to-decision reductions hold for a wide range of parameters: $m$ LWE samples are pseudorandom whenever search LWE is hard for the same $m$ — [[MM11b - Pseudorandom Knapsacks and the Sample Complexity of LWE Search-to-Decision Reductions|MM11b]].

## Sketch

To test the guess $s_i = \ell$, map each sample $(\mathbf{a}, b)$ to $(\mathbf{a} + r\mathbf{1}_i,\; b + r\ell)$ for the $i$-th unit vector $\mathbf{1}_i$ and fresh uniform $r \in \ZZ_q$; the result is $(\mathbf{a}', \langle \mathbf{a}', \mathbf{s}\rangle + e + r(\ell - s_i))$, LWE-distributed if $\ell = s_i$ and uniform otherwise, since $q$ is prime. Running the distinguisher on all $nq$ pairs $(i, \ell)$, polynomially many because $q = \poly(n)$, reads off $\mathbf{s}$. Beforehand, the self-reduction $(\mathbf{a}, b) \mapsto (\mathbf{a}, b + \langle \mathbf{a}, \mathbf{t}\rangle)$ for uniform $\mathbf{t}$ turns a distinguisher for uniform $\mathbf{s}$ into one that works for every $\mathbf{s}$.

## Notes

- The converse holds for every modulus, given an error distribution with efficiently recognizable support and enough samples — folklore; see [[decision-lwe-to-search-lwe|Decision LWE ⇒ Search LWE]].
