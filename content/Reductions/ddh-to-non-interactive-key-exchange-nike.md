---
type: reduction
status: draft
title: "DDH ⇒ Non-interactive key exchange (NIKE)"
aliases: []
id: red-ddh-to-non-interactive-key-exchange-nike
kind: implication
hypotheses: [ddh]
conclusion: non-interactive-key-exchange
class: fully-black-box
model: standard
source:
  - "[[DH76 - New Directions in Cryptography|DH76]]"
security-loss: "tight for one honest pair: the DDH instance is forwarded unchanged"
rationale:
  class: "The construction uses only the group generator, and the fixed reduction embeds the DDH challenge as the two public keys and the shared key and runs the adversary once as an oracle."
---

# DDH ⇒ Non-interactive key exchange (NIKE)

## Statement

Diffie–Hellman is a [[key-exchange#non-interactive-key-exchange-nike|NIKE]] — [[DH76 - New Directions in Cryptography|DH76]]: over $(\GG, g, p) \gets \GrGen(1^\secpar)$, party $i$ samples $x_i \getsr [p]$ and publishes $\pk_i = g^{x_i}$, and parties $i$ and $j$ each compute $k_{ij} = \pk_j^{x_i} = \pk_i^{x_j} = g^{x_i x_j}$. If [[decisional-diffie-hellman|DDH]] is hard for $\GrGen$, then for honestly generated keys $k_{ij}$ is indistinguishable from uniform given $(\pk_i, \pk_j)$ — folklore.

## Sketch

$(\pk_i, \pk_j, k_{ij}) = (g^{x_i}, g^{x_j}, g^{x_i x_j})$ is a DDH tuple, so the reduction sets $(\pk_i, \pk_j, k_{ij}) := (X, Y, Z)$ from its DDH challenge, and a distinguisher for $k_{ij}$ is a DDH distinguisher.

## Notes

- DH76 predates the DDH assumption: the protocol is DH76's, and its security under DDH is immediate from the definition — folklore.
- The statement covers one pair of honestly generated keys; NIKE security models with adversarially registered public keys are formalized in [[FHKP13 - Non-Interactive Key Exchange|FHKP13]].
