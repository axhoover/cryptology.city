---
type: reduction
status: stub
title: "DPF ⇒ Multi-point functions"
aliases: []
id: red-dpf-to-multi-point-functions
kind: implication
hypotheses: [dpf]
conclusion: multi-point-function-secret-sharing
class: unstated
model: standard
source: folklore
security-loss: ""
---

# DPF ⇒ Multi-point functions

[[distributed-point-function|DPF]] implies [[distributed-point-function#multi-point-functions|Multi-point functions]].

## Statement

Migrated verbatim from [[distributed-point-function]] § Multi-point functions:

> Distributes a function that is non-zero on multiple points. Can be built by composing multiple DPFs.

## Notes

`source: folklore`: the claim carried no citation on the page it was
migrated from, and none was invented.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- No citation.
- Conclusion has no page or slug.
- 'composing multiple DPFs' is the naive $t$-fold construction with key size $t$ times larger; efficient MPFSS (batch codes / cuckoo hashing) is a different construction. The bullet is too vague to type precisely.
