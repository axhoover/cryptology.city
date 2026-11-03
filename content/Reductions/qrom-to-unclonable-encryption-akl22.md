---
type: reduction
status: draft
title: "QROM ⇒ unclonable-indistinguishable UE"
aliases: []
id: red-qrom-to-unclonable-indistinguishable-encryption-akl22
kind: implication
hypotheses: [qrom]
conclusion: unclonable-indistinguishable-encryption
class: free
model: rom
source:
  - "[[AKL+22 - On the Feasibility of Unclonable Encryption, and More|AKL+22]]"
security-loss: ""
rationale:
  class: "The theorem holds for every cloning adversary making polynomially many quantum queries to the oracle, which is the free class scoped by the model."
  model: "The proof holds in the quantum random-oracle model, in which every party queries the random oracle in superposition, and the Statement names the quantum access."
---

# QROM ⇒ unclonable-indistinguishable UE

## Statement

In the [[random-oracle-model#quantum-random-oracle-model|quantum random-oracle model]], there is an [[unclonable-encryption#unclonable-indistinguishability|unclonable-indistinguishable]] encryption scheme, secure against every cloning adversary $(\calA, \calB, \calC)$ making polynomially many superposition queries to the oracle, with no computational assumption — [[AKL+22 - On the Feasibility of Unclonable Encryption, and More|AKL+22]].
