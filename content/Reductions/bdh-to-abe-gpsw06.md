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

`class: fully-black-box`: one fixed construction in the bilinear group and one fixed selective-security reduction (see Sketch) that runs the ABE adversary once as an oracle. With an assumption as hypothesis, black-boxness refers to the treatment of the adversary.

- Ciphertext-policy ABE for monotone formulas with ciphertext size linear in the formula, selectively secure in the standard model; the most efficient construction is under decisional $q$-parallel BDHE, a less efficient one under DBDH — [[Wat11 - Ciphertext-Policy Attribute-Based Encryption from Subset Cover|Wat11]]
- [[bilinear-map-assumptions]] has the alias BDDH but not DBDH, so DBDH is linked by display text only.
- The Wat11 reference filename says 'Ciphertext-Policy Attribute-Based Encryption from Subset Cover', but the paper (PKC 2011, eprint 2008/290) is titled 'Ciphertext-Policy Attribute-Based Encryption: An Expressive, Efficient, and Provably Secure Realization'; filenames are live URLs, so the link is kept.
