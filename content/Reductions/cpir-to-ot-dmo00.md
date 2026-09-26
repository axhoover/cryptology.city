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

Non-trivial [[single-server-private-information-retrieval|cPIR]] implies [[oblivious-transfer|OT]].

## Statement

Any non-trivial single-server [[single-server-private-information-retrieval|PIR]], with total communication $c(n) < n$ on an $n$-bit database, implies [[oblivious-transfer|OT]] with communication $c(n) \cdot \poly(\secpar)$ [[DMO00 - Single Database Private Information Retrieval Implies Oblivious Transfer|DMO00]]. Non-trivial single-server PIR is therefore complete for secure two-party and multi-party computation [[DMO00 - Single Database Private Information Retrieval Implies Oblivious Transfer|DMO00]].

## Notes

`class: unstated`: the full text could not be checked, so how the OT construction uses the PIR and how the reduction uses the adversary are unconfirmed. The abstract's corollary that one-way functions are necessary but not sufficient for non-trivial PIR composes the result with [[IR89 - Limits on the provable consequences of one-way permutations|IR89]], which presupposes a relativizing reduction; `fully-black-box` is plausible but unverified.

- The hypothesis slug `cpir` drops the load-bearing qualifier non-trivial ($c(n) < n$); the Statement keeps it.
