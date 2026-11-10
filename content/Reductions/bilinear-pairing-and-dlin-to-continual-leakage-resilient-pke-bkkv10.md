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

If the [[decisional-diffie-hellman#dlin|decisional linear assumption]] holds in [[pairings|bilinear groups]], there is a public-key encryption scheme resilient to [[leakage-resilient-public-key-encryption#continual-memory-leakage|continual memory leakage]]: the secret key is refreshed between periods while $\pk$ stays fixed, and the scheme remains CPA-secure when the adversary learns up to a $(1/2 - o(1))$ fraction of the secret key in every period and $O(\log \secpar)$ bits during each update, with no bound on the total leakage — [[BKKV10 - Overcoming the Hole in the Bucket Public-Key Cryptography Resilient to Continual Memory Leakage|BKKV10]].

## Notes

- Under [[decisional-diffie-hellman#sxdh-symmetric-external-diffie-hellman|SXDH]] the leakage rate per period rises to $1 - o(1)$, and relying on subexponential hardness each update may leak $\secpar^{\epsilon}$ bits, for some constant $\epsilon > 0$, in place of $O(\log \secpar)$ — [[BKKV10 - Overcoming the Hole in the Bucket Public-Key Cryptography Resilient to Continual Memory Leakage|BKKV10]].
- The same paper constructs [[identity-based-encryption|identity-based encryption]] and [[digital-signature|signature]] schemes resilient to continual memory leakage — [[BKKV10 - Overcoming the Hole in the Bucket Public-Key Cryptography Resilient to Continual Memory Leakage|BKKV10]].
- [[DHLW10 - Cryptography against Continuous Memory Attacks|DHLW10]] construct continual-leakage-resilient one-way relations, [[digital-signature|signatures]], [[identification-scheme|identification schemes]] and [[key-exchange#authenticated-key-exchange-ake|authenticated key agreement]] under the [$K$-Linear assumption](bilinear-map-assumptions#k-linear-assumption) in bilinear groups.
- Without updates, the bounded-leakage notion is met: [[continual-leakage-resilient-pke-to-leakage-resilient-pke|CLR-PKE ⇒ LR-PKE]] — folklore.
