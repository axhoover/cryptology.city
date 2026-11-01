---
type: reduction
status: draft
title: "cPIR with total communication below n ⇒ OT"
aliases: []
id: red-cpir-to-ot-dmo00
kind: implication
hypotheses: [total-nontrivial-cpir]
conclusion: ot
class: unstated
model: standard
source:
  - "[[DMO00 - Single Database Private Information Retrieval Implies Oblivious Transfer|DMO00]]"
security-loss: ""
---

# cPIR with total communication below n ⇒ OT

## Statement

Any single-server [[single-server-private-information-retrieval|PIR]] [[single-server-private-information-retrieval#pir-with-total-communication-below-n|with total communication]] $c(n) < n$ on an $n$-bit database, non-trivial in DMO00's sense, implies [[oblivious-transfer|OT]] with communication $c(n) \cdot \poly(\secpar)$ — [[DMO00 - Single Database Private Information Retrieval Implies Oblivious Transfer|DMO00]]. Such PIR is therefore complete for secure two-party and multi-party computation — [[DMO00 - Single Database Private Information Retrieval Implies Oblivious Transfer|DMO00]].

## Notes

- The result is strong evidence that one-way functions are necessary but not sufficient for non-trivial PIR, the latter by composition with [[IR89 - Limits on the provable consequences of one-way permutations|IR89]], which rules out relativizing constructions of key agreement from one-way permutations — [[DMO00 - Single Database Private Information Retrieval Implies Oblivious Transfer|DMO00]].
