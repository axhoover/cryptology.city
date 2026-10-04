---
type: reduction
status: draft
title: "OWF ⇒ Secret-Key PIR (SK-PIR)"
aliases: []
id: red-hash-function-to-secret-key-pir-sk-pir-bm26
kind: implication
hypotheses: [owf]
conclusion: secret-key-pir
class: unstated
model: standard
source:
  - "[[BM26 - Secret-Key PIR from One-Way Functions|BM26]]"
security-loss: ""
---

# OWF ⇒ Secret-Key PIR (SK-PIR)

## Statement

If [[hash-function#preimage-resistance-one-wayness|one-way functions]] exist, there is a [[single-server-private-information-retrieval#secret-key-pir-sk-pir|secret-key PIR]] scheme for size-$N$ databases with online communication $\tilde{O}(\sqrt{N})$ per query and, more generally, for all $N_c, N_s$ with $N_c \cdot N_s = N$, one with client-to-server communication $\tilde{O}(N_c)$ and server-to-client communication $N_s$ — [[BM26 - Secret-Key PIR from One-Way Functions|BM26]].

## Notes

- Under [[learning-parity-with-noise#high-noise-lpn|high-noise LPN]], communication drops to $O(N^{\varepsilon})$ for every constant $\varepsilon > 0$ — [[CIMR25 - Secret-Key PIR from Random Linear Codes|CIMR25]] ([[lpn-to-secret-key-pir-sk-pir-cimr25|High-noise LPN ⇒ Secret-Key PIR (SK-PIR)]]).
- Without the secret-key preprocessing, non-trivial single-server PIR implies [[oblivious-transfer|OT]] — [[DMO00 - Single Database Private Information Retrieval Implies Oblivious Transfer|DMO00]] ([[cpir-to-ot-dmo00|cPIR ⇒ OT]]).
