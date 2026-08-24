---
type: barrier
status: draft
title: "No reduction from Fiat-Shamir to NIZK"
aliases: []
id: bar-fiat-shamir-to-nizk-gk03
hypotheses: [fiat-shamir]
conclusion: nizk
class: unstated
consequences:
  - kind: contradiction
    target: ""
    class: unstated
strength: unconditional
source:
  - "[[GK03 - On the (In)security of the Fiat-Shamir Paradigm|GK03]]"
---

# No reduction from Fiat-Shamir to NIZK

A reduction of class `unstated` from [[fiat-shamir-heuristic|Fiat-Shamir]] to [[non-interactive-zero-knowledge|NIZK]] would imply a contradiction.

## Statement

Migrated verbatim from [[non-interactive-zero-knowledge]] § Other results:

> - Fiat-Shamir compiles sigma protocols to NIZK in the ROM — [[FS86 - How to Prove Yourself Practical Solutions to Identification and Signature Problems|FS86]]; but is insecure for general interactive proofs — [[GK03 - On the (In)security of the Fiat-Shamir Paradigm|GK03]]

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- Second half of the same bullet: FS is insecure when applied to general interactive proofs. This is a barrier on the FS transform, not on NIZK itself; the conclusion object is awkward to type.
- GK03's result is about instantiating the random oracle with any concrete hash function (there exist proof systems whose FS transform is unsound); 'insecure for general interactive proofs' compresses this considerably. Report only.
