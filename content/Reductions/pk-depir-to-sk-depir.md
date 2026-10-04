---
type: reduction
status: draft
title: "PK-DEPIR ⇒ SK-DEPIR"
aliases: []
id: red-pk-depir-to-sk-depir
kind: implication
hypotheses: [pk-depir]
conclusion: sk-depir
class: fully-black-box
model: standard
source: folklore
security-loss: ""
rationale:
  class: "The construction is the identity, and the hybrid reduction runs any secret-key privacy adversary only as an oracle, answering all but one of its queries itself from the public key."
---

# PK-DEPIR ⇒ SK-DEPIR

## Statement

Every [[doubly-efficient-pir#public-key-depir|public-key DEPIR]] scheme is, unchanged, a [[doubly-efficient-pir#secret-key-depir|secret-key DEPIR]] scheme — folklore.

## Sketch

A secret-key privacy adversary is a many-query public-key privacy adversary that ignores $k$. Since queries are generated from the public $k$ alone, single-query public-key privacy extends to polynomially many adaptive queries by a hybrid that switches one query at a time from $i_0$ to $i_1$ and answers the others itself; the public-key game fixes $(i_0, i_1)$ before $k$ is sampled, so the reduction guesses the switched pair, losing a further factor of at most $n^2$.

## Notes

- Conversely, secret-key DEPIR gives public-key DEPIR using an ideal form of obfuscation, instantiable heuristically with indistinguishability-obfuscation candidates or with stateless tamper-proof hardware — [[BIPW17 - Can We Access a Database Both Locally and Privately|BIPW17]].
