---
type: reduction
status: draft
title: "Bilinear pairing + DLIN ⇒ CLR-PKE"
aliases: []
id: red-bilinear-pairing-and-dlin-to-continual-leakage-resilient-pke-bkkv10
kind: implication
hypotheses: [bilinear-pairing, decisional-linear]
conclusion: continual-leakage-resilient-pke
class: unstated
model: standard
source:
  - "[[BKKV10 - Overcoming the Hole in the Bucket Public-Key Cryptography Resilient to Continual Memory Leakage|BKKV10]]"
security-loss: ""
---

# Bilinear pairing + DLIN ⇒ CLR-PKE

## Statement

If the [[decisional-diffie-hellman#dlin|decisional linear assumption]] holds in [[pairings|bilinear groups]], there is a public-key encryption scheme resilient to [continual memory leakage](leakage-resilient-public-key-encryption#continual-memory-leakage): the secret key is refreshed between periods while $\pk$ stays fixed, and the scheme remains CPA-secure when the adversary learns a constant fraction of the secret key in every period, with no bound on the total leakage — [[BKKV10 - Overcoming the Hole in the Bucket Public-Key Cryptography Resilient to Continual Memory Leakage|BKKV10]]. The same paper constructs identity-based encryption and signature schemes in this model.

## Notes

- [[DHLW10 - Cryptography against Continuous Memory Attacks|DHLW10]] construct continual-leakage-resilient one-way relations, signatures, identification schemes and authenticated key agreement under the [$K$-Linear assumption](bilinear-map-assumptions#k-linear-assumption) in bilinear groups.
- Without updates, the bounded-leakage notion is met: [[continual-leakage-resilient-pke-to-leakage-resilient-pke|CLR-PKE ⇒ LR-PKE]] — folklore.
