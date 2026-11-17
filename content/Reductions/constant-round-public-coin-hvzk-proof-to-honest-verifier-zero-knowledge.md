---
type: reduction
status: draft
title: "Constant-round public-coin HVZK proof ⇒ HVZK"
aliases: []
id: red-constant-round-public-coin-hvzk-proof-to-honest-verifier-zero-knowledge
kind: implication
hypotheses: [constant-round-public-coin-hvzk-proof]
conclusion: honest-verifier-zero-knowledge
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity map on proof systems, and the protocol and every adversary are forwarded unchanged."
---

# Constant-round public-coin HVZK proof ⇒ HVZK

## Statement

A [[zero-knowledge-proof#constant-round-public-coin-hvzk-proofs|constant-round public-coin HVZK proof]] for an $\classNP$-complete language is an interactive proof for that language with negligible soundness error that is [[zero-knowledge-proof#honest-verifier-zk-hvzk|honest-verifier zero-knowledge]], with the same prover, verifier and simulator — folklore.
