---
type: reduction
status: draft
title: "MPC ⇒ OT"
aliases: []
id: red-mpc-to-ot-bh26
kind: implication
hypotheses: [mpc]
conclusion: ot
class: unstated
model: standard
source:
  - "[[BH26 - How to Steal Oblivious Transfer from Minicrypt|BH26]]"
security-loss: ""
---

# MPC ⇒ OT

[[secure-multi-party-computation|MPC]] implies [[oblivious-transfer|OT]].

## Statement

Migrated verbatim from [[secure-multi-party-computation]] § Other results:

> - MPC implies OT in a black-box way for certain non-trivial functionalities — [[BH26 - How to Steal Oblivious Transfer from Minicrypt|BH26]]

## Notes

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- 'for certain non-trivial functionalities' is an unquantified side condition the hyperedge cannot carry; the hypothesis is really 'MPC for a specific class of functionalities', not MPC in general.
- Together with line 61 this asserts an equivalence OT <=> MPC that the page never states as such.
- Sourcing pass (2026-09), **not fixed**: claim judged incorrect as stated — [[BH26 - How to Steal Oblivious Transfer from Minicrypt|BH26]] prove oblivious interactive hash functions ⇒ OT by a non-black-box reduction, so the hypothesis is not MPC and 'in a black-box way' contradicts the paper. MPC for every functionality gives OT trivially — folklore; OT from secure computation of one non-trivial functionality is the completeness line of Kilian (STOC 1991, STOC 2000) and Beimel–Malkin–Micali (CRYPTO 1999). See [[oihf-to-ot-bh26]].
