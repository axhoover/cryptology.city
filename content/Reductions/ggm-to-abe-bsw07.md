---
type: reduction
status: draft
title: "Bilinear pairing ⇒ CP-ABE"
aliases: []
id: red-bilinear-pairing-to-cp-abe-adaptive-security-bsw07
kind: implication
hypotheses: [bilinear-pairing]
conclusion: cp-abe-adaptive-security
class: free
model: generic-group
source:
  - "[[BSW07 - Ciphertext-Policy Attribute-Based Encryption|BSW07]]"
security-loss: ""
rationale:
  class: "BSW07 bound the advantage of every generic adversary, so the result holds for all algorithms in the model rather than through a reduction to a hardness assumption."
  model: "The proof bounds adversaries that are generic in the bilinear group, with the hash from attribute strings to the group also modeled as a random oracle."
---

# Bilinear pairing ⇒ CP-ABE

## Statement

In a [[pairings|bilinear group]], the Bethencourt–Sahai–Waters scheme is a ciphertext-policy [[attribute-based-encryption|ABE]] whose policies are monotone trees of threshold gates over attributes, which are arbitrary strings hashed into the group. It is [[attribute-based-encryption#cp-abe-ind-cpa-security|CP-IND-CPA-secure]] against adversaries that are generic in the bilinear group, with the hash modeled as a random oracle — [[BSW07 - Ciphertext-Policy Attribute-Based Encryption|BSW07]].

## Sketch

The scheme masks the message by $e(g,g)^{\alpha s}$ and secret-shares $s$ down the access tree, each leaf $y$ carrying $g^{q_y(0)}$ and $H(\mathrm{att}(y))^{q_y(0)}$ for its share $q_y(0)$; a key for an attribute set $S$ is $D = g^{(\alpha + r)/\beta}$ together with $g^{r} H(j)^{r_j}$ and $g^{r_j}$ for each $j \in S$, under one fresh $r$. Pairing $D$ with $h^s = g^{\beta s}$ gives $e(g,g)^{(\alpha + r)s}$ and leaf pairings give $e(g,g)^{r q_y(0)}$; the generic group analysis shows that $e(g,g)^{rs}$ can be cancelled only by interpolating such leaf terms of a single key whose attributes satisfy the tree, so colluding users cannot pool their attributes.

## Notes

- A ciphertext under an access tree with leaf set $Y$ consists of $2|Y| + 1$ source-group elements and one target-group element, a key for $S$ of $2|S| + 1$ source-group elements, and decryption costs two pairings per leaf used to satisfy the tree plus one — [[BSW07 - Ciphertext-Policy Attribute-Based Encryption|BSW07]].
- Selectively secure CP-ABE for monotone formulas exists in the standard model under the non-interactive decisional $q$-parallel BDHE assumption, and less efficiently under DBDH — [[Wat11 - Ciphertext-Policy Attribute-Based Encryption from Subset Cover|Wat11]].
