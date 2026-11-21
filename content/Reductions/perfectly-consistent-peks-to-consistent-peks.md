---
type: reduction
status: draft
title: "Perfectly consistent PEKS ⇒ Consistent PEKS"
aliases: []
id: red-perfectly-consistent-peks-to-consistent-peks
kind: implication
hypotheses: [perfectly-consistent-peks]
conclusion: consistent-peks
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on PEKS schemes, and the reduction forwards any adversary unchanged."
---

# Perfectly consistent PEKS ⇒ Consistent PEKS

## Statement

A [[public-key-encryption-with-keyword-search#perfect-consistency|perfectly consistent]] [[public-key-encryption-with-keyword-search|PEKS]] scheme, with the same algorithms, is [[public-key-encryption-with-keyword-search#consistency|computationally consistent]]: a consistency advantage of $0$ against every adversary is negligible against every efficient one — folklore.
