---
type: reduction
status: draft
title: "QR ⇒ TDH"
aliases: []
id: red-qr-to-tdh-dgi-19
kind: implication
hypotheses: [qr]
conclusion: tdh
class: unstated
model: standard
source:
  - "[[DGI+19 - Trapdoor Hash Functions and Their Applications|DGI+19]]"
security-loss: ""
---

# QR ⇒ TDH

## Statement

[[quadratic-residuosity|QR]] implies [[trapdoor-hash-function|trapdoor hash functions]] for the index predicates $f_i(x) = x_i$ with one-bit hints: the hash of $x$ hides $x$, an encoding key for $i$ hides $i$, and its trapdoor recovers $x_i$ from the hash and the hint, is wrong only with negligible probability, and otherwise fails detectably with probability at most $\tau + \negl(\secpar)$ for the construction's [[trapdoor-hash-function#correctness|error]] $\tau$ — [[DGI+19 - Trapdoor Hash Functions and Their Applications|DGI+19]].
