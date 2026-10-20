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
security-loss: "tight up to a factor 2: one run of the selective adversary, whose advantage is at most twice the DBDH advantage"
rationale:
  class: "The construction uses the bilinear group only through group operations and the pairing, and the selective-security reduction runs the ABE adversary once as an oracle against a DBDH challenge."
---

# BDH ⇒ ABE

## Statement

If decisional bilinear Diffie–Hellman ([[bilinear-map-assumptions|DBDH]]) holds, there is a key-policy [[attribute-based-encryption|ABE]] for monotone access structures (monotone Boolean formulas or LSSS) that is [[attribute-based-encryption#selective-security|selectively]] [[attribute-based-encryption#kp-abe-ind-cpa-security|KP-IND-CPA-secure]]: the adversary commits to the challenge attribute set before $\Setup$ runs — [[GPSW06 - Attribute-Based Encryption for Fine-Grained Access Control of Encrypted Data|GPSW06]].

## Sketch

$\Setup$ publishes $e(g,g)^y$ and per-attribute elements $T_i = g^{t_i}$; a key for an access structure secret-shares $y$ over its leaves, and a ciphertext for attribute set $\gamma$ blinds the message by $e(g,g)^{ys}$ alongside $T_i^s$ for $i \in \gamma$. The selective reduction embeds a DBDH challenge $(g^a, g^b, g^c, Z)$ as $y = ab$, $s = c$, simulates keys for structures unsatisfied by the committed $\gamma^*$, and outputs the adversary's guess as its decision on $Z = e(g,g)^{abc}$.

## Notes

- The ciphertext-policy counterpart, selectively secure CP-ABE for monotone formulas in the standard model, has ciphertext size linear in the formula under decisional $q$-parallel BDHE; a less efficient scheme rests on DBDH — [[Wat11 - Ciphertext-Policy Attribute-Based Encryption from Subset Cover|Wat11]].
- In the small-universe construction a ciphertext for attribute set $\gamma$ is one element of $\GG_T$ and $|\gamma|$ elements of $\GG$, a key has one element of $\GG$ per leaf of its access structure, and the public parameters have one element of $\GG$ per attribute of the universe and one of $\GG_T$ — [[GPSW06 - Attribute-Based Encryption for Fine-Grained Access Control of Encrypted Data|GPSW06]].
