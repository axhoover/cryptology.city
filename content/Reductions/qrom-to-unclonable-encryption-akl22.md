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
  model: "The proof holds in the quantum random-oracle model, against quantum cloning adversaries that query the random oracle in superposition, and the Statement names the quantum access."
---

# QROM ⇒ unclonable-indistinguishable UE

## Statement

In the [[random-oracle-model#quantum-random-oracle-model|quantum random-oracle model]], there is an [[unclonable-encryption#unclonable-indistinguishability|unclonable-indistinguishable]] encryption scheme, with no computational assumption: it is secure against every cloning adversary $(\calA, \calB, \calC)$ making polynomially many superposition queries to the oracle, where $\calA$ may query the oracle both before choosing the messages $m_0, m_1$ and after receiving the ciphertext, and $\calB$ and $\calC$ after receiving the key — [[AKL+22 - On the Feasibility of Unclonable Encryption, and More|AKL+22]] (Definition 2.10, Section 5).
