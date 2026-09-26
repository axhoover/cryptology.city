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
source: folklore
security-loss: "tight for one honest pair: the DDH instance is forwarded unchanged"
---

# DDH ⇒ Non-interactive key exchange (NIKE)

[[decisional-diffie-hellman|DDH]] implies [[key-exchange#non-interactive-key-exchange-nike|Non-interactive key exchange (NIKE)]].

## Statement

Diffie–Hellman ([[DH76 - New Directions in Cryptography|DH76]]) is a [[key-exchange#non-interactive-key-exchange-nike|NIKE]]: over $(\GG, g, p) \gets \GrGen(1^\secpar)$, party $i$ samples $x_i \getsr [p]$ and publishes $\pk_i = g^{x_i}$; parties $i$ and $j$ each compute $k_{ij} = \pk_j^{x_i} = \pk_i^{x_j} = g^{x_i x_j}$. For honestly generated keys, indistinguishability of $k_{ij}$ from uniform given $(\pk_i, \pk_j)$ is the [[decisional-diffie-hellman|DDH]] game verbatim — folklore.

## Sketch

$(\pk_i, \pk_j, k_{ij})$ is a DDH tuple, so a distinguisher for $k_{ij}$ is a DDH distinguisher.

## Notes

`class: fully-black-box`: Fixed construction from the group generator; the fixed reduction sets $(\pk_i, \pk_j, k_{ij}) := (X, Y, Z)$ from the DDH challenge and runs the adversary once as an oracle.

- Formal NIKE security models, including adversarially registered keys — [[FHKP13 - Non-Interactive Key Exchange|FHKP13]]
