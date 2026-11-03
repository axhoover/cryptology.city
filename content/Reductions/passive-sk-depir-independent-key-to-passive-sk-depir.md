---
type: reduction
status: draft
title: "Passive-server SK-DEPIR with a database-independent key ⇒ Passive-server SK-DEPIR"
aliases: []
id: red-passive-sk-depir-independent-key-to-passive-sk-depir
kind: implication
hypotheses: [passive-sk-depir-independent-key]
conclusion: passive-sk-depir
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the scheme, and the reduction forwards any secret-key privacy adversary unchanged."
---

# Passive-server SK-DEPIR with a database-independent key ⇒ Passive-server SK-DEPIR

## Statement

A [[doubly-efficient-pir#passive-server-sk-depir-with-a-database-independent-key|passive-server SK-DEPIR scheme with a database-independent key]] is a [[doubly-efficient-pir#passive-server-sk-depir|passive-server SK-DEPIR]] scheme, with the same secret-key privacy advantage: its $\KeyGen(1^\secpar)$ is a key generation that ignores $n$ and uses the client's key as the encoding key, and its query-time bound $p(\secpar) \cdot n^c$, $c < 1$, implies the doubly-efficient bound $p(\secpar)^{2/(1-c)} + n^{(1+c)/2}$ — folklore.
