---
type: reduction
status: draft
title: "Linear SS ⇒ IT-PIR"
aliases: []
id: red-ss-to-it-pir-cgks98
kind: implication
hypotheses: [linear-secret-sharing-scheme]
conclusion: it-pir
class: unstated
model: standard
source:
  - "[[CGKS98 - Private information retrieval|CGKS98]]"
security-loss: ""
---

# Linear SS ⇒ IT-PIR

[[secret-sharing#linear-secret-sharing-schemes-lsss|Linear SS]] implies [[multi-server-private-information-retrieval|IT-PIR]] against non-colluding servers.

## Statement

For a database $D \in \bits^n$, the client secret-shares its index $i$: with two servers it picks a uniformly random $S \subseteq [n]$ and sends $S$ to one and $S \triangle \{i\}$ to the other — an additive $(2,2)$ [[secret-sharing|secret sharing]] of the characteristic vector of $i$ over $\FF_2$ — and each server returns the XOR of the database bits it indexes, so the XOR of the two answers is $D[i]$. Each server's view is a uniformly random subset independent of $i$, so privacy against each non-colluding server is perfect; this is information-theoretic two-server [[multi-server-private-information-retrieval|PIR]] with $O(n)$ communication. Arranging $D$ as a $d$-dimensional cube and sharing each coordinate separately gives $2^d$ servers with $O(n^{1/d})$ communication for constant $d$, and a covering-code argument lets two servers simulate the $d = 3$ scheme with $O(n^{1/3})$ communication — [[CGKS98 - Private information retrieval|CGKS98]].

## Sketch

Linearity keeps the answers short: a server holding a share $q$ of the characteristic vector $e_i$ returns $\langle q, D \rangle$, and linear reconstruction applied to the answers gives $\langle e_i, D \rangle = D[i]$; XOR sharing is the $\FF_2$ case.

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.

- Hypothesis changed from `ss` to `linear-secret-sharing-scheme`, with title and H1 to match: CGKS98 need the servers' answers to be linear in the database; linear-secret-sharing-scheme is a declared variant id on the secret-sharing page.
