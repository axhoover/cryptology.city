---
type: reduction
status: draft
title: "BDH ⇒ ABE"
aliases: []
id: red-bdh-to-abe-gpsw06
kind: implication
hypotheses: [bdh]
conclusion: abe
class: fully-black-box
model: standard
source:
  - "[[GPSW06 - Attribute-Based Encryption for Fine-Grained Access Control of Encrypted Data|GPSW06]]"
security-loss: ""
---

# BDH ⇒ ABE

Decisional [[bilinear-map-assumptions|BDH]] implies selectively secure key-policy [[attribute-based-encryption|ABE]].

## Statement

If decisional bilinear Diffie–Hellman ([[bilinear-map-assumptions|DBDH]]) holds, there is a key-policy [[attribute-based-encryption|ABE]] for monotone access structures (monotone Boolean formulas or LSSS) with selective IND-CPA security — [[GPSW06 - Attribute-Based Encryption for Fine-Grained Access Control of Encrypted Data|GPSW06]].

## Sketch

$\Setup$ publishes $e(g,g)^y$ and per-attribute elements $T_i = g^{t_i}$; a key for an access structure secret-shares $y$ over its leaves, and a ciphertext for attribute set $\gamma$ blinds the message by $e(g,g)^{ys}$ alongside $T_i^s$ for $i \in \gamma$. The selective reduction embeds a DBDH challenge $(g^a, g^b, g^c, Z)$ as $y = ab$, $s = c$, simulates keys for structures unsatisfied by the committed $\gamma^*$, and outputs the adversary's guess as its decision on $Z = e(g,g)^{abc}$.

## Notes

`class: fully-black-box`: One fixed construction in the bilinear group and one fixed selective-security reduction that embeds the DBDH challenge in the public parameters and challenge ciphertext, answers key queries using the committed target attribute set, and runs the ABE adversary once as an oracle. With an assumption as hypothesis, black-boxness refers to the treatment of the adversary; the proof has the standard fully-black-box shape.

- Ciphertext-policy ABE for monotone formulas with ciphertext size linear in the formula, selectively secure in the standard model; the most efficient construction is under decisional $q$-parallel BDHE, a less efficient one under DBDH — [[Wat11 - Ciphertext-Policy Attribute-Based Encryption from Subset Cover|Wat11]]
- DBDH is named in bare prose with no wikilink; the assumption lives on content/Assumptions/bilinear-map-assumptions.md, whose aliases include 'BDDH' but NOT 'DBDH', so the obvious wikilink would not resolve.
- SURPRISING WIKILINK TARGET: the reference filename says 'Ciphertext-Policy Attribute-Based Encryption from Subset Cover', but that reference page's own H1 and BibTeX title the paper 'Ciphertext-Policy Attribute-Based Encryption: An Expressive, Efficient, and Provably Secure Realization' (PKC 2011, eprint 2008/290). The filename appears to be wrong.
