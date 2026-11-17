---
type: reduction
status: draft
title: "SSS-NIZK for NP ⇒ SSS-NIZK"
aliases: []
id: red-statistically-simulation-sound-nizk-for-np-to-statistically-simulation-sound-nizk
kind: implication
hypotheses: [statistically-simulation-sound-nizk-for-np]
conclusion: statistically-simulation-sound-nizk
class: fully-black-box
model: standard
source: folklore
security-loss: "none"
rationale:
  class: "The construction is the identity on the proof system and simulator for one fixed NP relation, and the reductions forward any adversary unchanged."
---

# SSS-NIZK for NP ⇒ SSS-NIZK

## Statement

An [[non-interactive-zero-knowledge#statistically-simulation-sound-nizk-for-np|SSS-NIZK for NP]] is, restricted to any one $\classNP$ relation $R$, an [[non-interactive-zero-knowledge#statistically-simulation-sound-nizk-sss-nizk|SSS-NIZK]] for $R$, with the same simulator $(\Sim_1, \Sim_2)$, whose first stage $\Sim_1(1^\secpar, x)$ receives the statement, and the same statistical simulation-soundness game — folklore.

## Notes

- For a relation whose language is in $\classP$, an empty reference string, an empty proof and a verifier that decides the language form an SSS-NIZK with no assumption — standard.
