---
type: reduction
status: draft
title: "Quantum-secure OWF ⇒ OWSG"
aliases: []
id: red-owf-to-pure-one-way-state-generator
kind: implication
hypotheses: [quantum-secure-owf]
conclusion: pure-one-way-state-generator
class: fully-black-box
model: quantum
source: folklore
security-loss: "none: the inverter's success probability equals the one-way state generator adversary's"
rationale:
  class: "The generator evaluates f only as an oracle, and the reduction hands t copies of its challenge to an arbitrary adversary used only as an oracle."
  model: "The adversary is quantum, so the function must be one-way against efficient quantum adversaries."
---

# Quantum-secure OWF ⇒ OWSG

## Statement

If $f$ is a [[hash-function#quantum-secure-one-wayness|one-way function against efficient quantum adversaries]], then $\KeyGen(1^\secpar) := k \getsr \bits^\secpar$, $\mathsf{StateGen}(k) := |f(k)\rangle$, and $\Vrfy(k', \sigma)$, which measures $\sigma$ in the computational basis and accepts iff the outcome is $f(k')$, form a perfectly correct [[one-way-state-generator#pure-owsgs|pure one-way state generator]] — folklore.

## Sketch

The copies $|f(k)\rangle^{\otimes t}$ are $t$ copies of the classical string $f(k)$, and $\Vrfy(k', |f(k)\rangle)$ accepts iff $f(k') = f(k)$; an adversary against the generator is therefore an inverter for $f$ with the same success probability.
