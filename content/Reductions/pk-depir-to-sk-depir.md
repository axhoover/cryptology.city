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

A secret-key privacy adversary is a many-query public-key privacy adversary that ignores $k$. Single-query public-key privacy extends to polynomially many adaptive queries by a hybrid: the reduction embeds its challenge in a random query $j$ and itself answers earlier queries on their $i_1$ and later ones on their $i_0$, which needs only the public $k$. The public-key game fixes $(i_0, i_1)$ before $k$ is sampled, so the reduction also guesses query $j$'s pair in advance, losing a further factor of at most $n^2$.

## Notes

- Conversely, secret-key DEPIR and one-way functions give public-key DEPIR using an ideal form of obfuscation, instantiable heuristically with indistinguishability-obfuscation candidates or with stateless tamper-proof hardware — [[BIPW17 - Can We Access a Database Both Locally and Privately|BIPW17]].
