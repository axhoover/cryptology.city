---
type: reduction
status: draft
title: DBDH ⇒ Selectively secure IBE (Boneh–Boyen)
aliases:
  - BB1 IBE
id: red-dbdh-to-ind-sid-cpa-bb04
kind: implication
hypotheses: [dbdh]
conclusion: ind-sid-cpa
class: fully-black-box
model: standard
source:
  - "[[BB04 - Efficient Selective-ID Secure Identity Based Encryption Without Random Oracles|BB04b]]"
security-loss: "none: the reduction answers every key query and embeds its tuple in the challenge"
rationale:
  class: "The scheme is one fixed construction over the pairing group, and the reduction runs the IBE adversary only as an oracle on parameters built from its DBDH tuple and the committed challenge identity."
---

# DBDH ⇒ Selectively secure IBE (Boneh–Boyen)

## Statement

If [[bilinear-map-assumptions#decisional-bdh|decisional BDH]] holds in a symmetric pairing group, there is an [[identity-based-encryption#ind-sid-cpa-security-selective|IND-sID-CPA-secure]] [[identity-based-encryption|IBE]] scheme in the standard model, with identities in $\ZZ_p$: the public parameters are $g, g_1 = g^{\alpha}, g_2, h$, the key for $\mathit{id}$ is $(g_2^{\alpha} (g_1^{\mathit{id}} h)^r, g^r)$, and a ciphertext is $(e(g_1, g_2)^s M, g^s, (g_1^{\mathit{id}} h)^s)$ — [[BB04 - Efficient Selective-ID Secure Identity Based Encryption Without Random Oracles|BB04b]].

## Sketch

Given the DBDH tuple $(g, g^a, g^b, g^c, T)$ and the committed identity $\mathit{id}^*$, the reduction sets $g_1 = g^a$, $g_2 = g^b$ and $h = g_1^{-\mathit{id}^*} g^{d}$ for a uniform $d$. For $\mathit{id} \ne \mathit{id}^*$, $g_1^{\mathit{id}} h = g_1^{\mathit{id} - \mathit{id}^*} g^d$ and a key can be computed without $g^{ab}$; for $\mathit{id}^*$ it is $g^d$, so the challenge $(T M_\beta, g^c, (g^c)^d)$ is a valid encryption exactly when $T = e(g,g)^{abc}$ — [[BB04 - Efficient Selective-ID Secure Identity Based Encryption Without Random Oracles|BB04b]].

## Notes

- Selective security over an identity space $\calI$ gives adaptive security with loss $|\calI|$ by guessing ([[ind-sid-cpa-security-selective-to-ind-id-cpa-security|selective ⇒ adaptive IBE]]) — [[BB04 - Efficient Selective-ID Secure Identity Based Encryption Without Random Oracles|BB04b]]; for exponentially many identities [[dbdh-to-ibe-wat05|Waters' scheme]] proves adaptive security directly — [[Wat05 - Efficient Identity-Based Encryption Without Random Oracles|Wat05]].
- Selectively secure IBE gives IND-CCA2-secure PKE: [[ind-sid-cpa-to-pke-cca2-security-chk04|IND-sID-CPA IBE ⇒ CCA2 PKE]] — [[CHK04 - Chosen-Ciphertext Security from Identity-Based Encryption|CHK04]].
