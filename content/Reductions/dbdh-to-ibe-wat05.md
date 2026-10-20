---
type: reduction
status: draft
title: DBDH ⇒ IBE (Waters, standard model)
aliases:
  - Waters IBE
id: red-dbdh-to-ibe-wat05
kind: implication
hypotheses: [dbdh]
conclusion: ind-id-cpa
class: fully-black-box
model: standard
source:
  - "[[Wat05 - Efficient Identity-Based Encryption Without Random Oracles|Wat05]]"
security-loss: "a factor O(n q) in advantage for n-bit identities and q key queries, from the chance that the partition answers every key query and embeds the challenge; the artificial abort adds running time polynomial in nq/ε"
rationale:
  class: "The scheme is one fixed construction over the pairing group, and the reduction runs the IBE adversary only as an oracle on parameters built from its DBDH tuple."
---

# DBDH ⇒ IBE (Waters, standard model)

## Statement

If [[bilinear-map-assumptions#decisional-bdh|decisional BDH]] holds in a symmetric pairing group, there is an [[identity-based-encryption#ind-id-cpa-security|IND-ID-CPA-secure]] [[identity-based-encryption|IBE]] scheme in the standard model: for $n$-bit identities the public parameters are $g, g_1 = g^{\alpha}, g_2, u'$ and $u_1, \ldots, u_n$, the key for $v$ is $(g_2^{\alpha} (u' \prod_{i : v_i = 1} u_i)^r, g^r)$, and a ciphertext is $(e(g_1, g_2)^t M, g^t, (u' \prod_{i : v_i = 1} u_i)^t)$ — [[Wat05 - Efficient Identity-Based Encryption Without Random Oracles|Wat05]].

## Sketch

The reduction chooses $u'$ and the $u_i$ so that $u' \prod_{i : v_i = 1} u_i = g_2^{F(v)} g^{J(v)}$ for functions $F, J$ it knows. It can answer key queries on identities with $F(v) \ne 0 \bmod p$ and can embed its challenge only where $F(v^*) = 0$; choosing $F$ at random from a small range makes this split occur with probability about $1/(nq)$ — [[Wat05 - Efficient Identity-Based Encryption Without Random Oracles|Wat05]].

## Notes

- Efficiency: the public parameters have $n + 4$ group elements, keys two and ciphertexts two plus one target-group element; decryption costs two pairings — [[Wat05 - Efficient Identity-Based Encryption Without Random Oracles|Wat05]].
- With selective security, where the challenge identity is fixed before setup, a scheme with constant-size parameters follows from the same assumption: [[dbdh-to-ind-sid-cpa-bb04|DBDH ⇒ selectively secure IBE]] — [[BB04 - Efficient Selective-ID Secure Identity Based Encryption Without Random Oracles|BB04]].
- In the random-oracle model, computational BDH suffices: [[bdh-to-ibe-bf01|BDH ⇒ IBE]] — [[BF01 - Identity-Based Encryption from the Weil Pairing|BF01]].
