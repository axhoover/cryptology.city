---
type: reduction
status: draft
title: NIZK proofs with a common random string ⇒ NIZK
aliases: []
id: red-common-random-string-nizk-proof-to-nizk
kind: implication
hypotheses: [common-random-string-nizk-proof]
conclusion: nizk
class: fully-black-box
model: crs
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the proof system, and every adversary against it is an adversary against the given proof system."
  model: "The reference string is uniformly random, a special case of a common reference string."
---

# NIZK proofs with a common random string ⇒ NIZK

## Statement

A [[non-interactive-zero-knowledge#nizk-proofs-in-the-common-random-string-model|NIZK proof in the common random string model]] is a [[non-interactive-zero-knowledge|NIZK]] proof system whose reference string happens to be uniform, so it meets every requirement of the general notion — folklore.
