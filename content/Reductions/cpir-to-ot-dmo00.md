---
type: reduction
status: draft
title: "cPIR ⇒ OT"
aliases: []
id: red-cpir-to-ot-dmo00
kind: implication
hypotheses: [cpir]
conclusion: ot
class: unstated
model: standard
source:
  - "[[DMO00 - Single Database Private Information Retrieval Implies Oblivious Transfer|DMO00]]"
security-loss: ""
---

# cPIR ⇒ OT

## Statement

Any non-trivial single-server [[single-server-private-information-retrieval|PIR]], with total communication $c(n) < n$ on an $n$-bit database, implies [[oblivious-transfer|OT]] with communication $c(n) \cdot \poly(\secpar)$ — [[DMO00 - Single Database Private Information Retrieval Implies Oblivious Transfer|DMO00]]. Non-trivial single-server PIR is therefore complete for secure two-party and multi-party computation — [[DMO00 - Single Database Private Information Retrieval Implies Oblivious Transfer|DMO00]].

## Notes

- Composed with [[IR89 - Limits on the provable consequences of one-way permutations|IR89]], which rules out relativizing constructions of key agreement from one-way permutations, the result is strong evidence that one-way functions are necessary but not sufficient for non-trivial PIR — [[DMO00 - Single Database Private Information Retrieval Implies Oblivious Transfer|DMO00]].
