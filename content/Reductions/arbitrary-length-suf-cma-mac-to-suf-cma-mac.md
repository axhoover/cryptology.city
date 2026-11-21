---
type: reduction
status: draft
title: "Arbitrary-length SUF-CMA MAC ⇒ SUF-CMA MAC"
aliases: []
id: red-arbitrary-length-suf-cma-mac-to-suf-cma-mac
kind: implication
hypotheses: [arbitrary-length-suf-cma-mac]
conclusion: suf-cma-mac
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the scheme itself, and the reduction forwards the forger unchanged."
---

# Arbitrary-length SUF-CMA MAC ⇒ SUF-CMA MAC

## Statement

A [[message-authentication-code#strongly-unforgeable-macs-for-arbitrary-length-messages|strongly unforgeable MAC for arbitrary-length messages]] is a [[message-authentication-code#strong-unforgeability|strongly unforgeable]] [[message-authentication-code|MAC]], with the same algorithms, correctness error and forging advantage — folklore.
