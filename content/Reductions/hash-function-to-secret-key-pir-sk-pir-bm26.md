---
type: reduction
status: draft
title: "Hash function ⇒ Secret-Key PIR (SK-PIR)"
aliases: []
id: red-hash-function-to-secret-key-pir-sk-pir-bm26
kind: implication
hypotheses: [hash-function]
conclusion: secret-key-pir
class: unstated
model: standard
source:
  - "[[BM26 - Secret-Key PIR from One-Way Functions|BM26]]"
security-loss: ""
---

# Hash function ⇒ Secret-Key PIR (SK-PIR)

[[hash-function|Hash function]] implies [[single-server-private-information-retrieval#secret-key-pir-sk-pir|Secret-Key PIR (SK-PIR)]].

## Statement

[[hash-function|One-way functions]] imply [[single-server-private-information-retrieval#secret-key-pir-sk-pir|secret-key PIR]] with online communication $\tilde{O}(\sqrt{N})$ per query on a size-$N$ database; more generally, for all $N_c, N_s$ with $N_c \cdot N_s = N$, client-to-server communication $\tilde{O}(N_c)$ and server-to-client communication $N_s$ — [[BM26 - Secret-Key PIR from One-Way Functions|BM26]].

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.

- `secret-key-pir` is a variant section of single-server-private-information-retrieval, not its own page.
