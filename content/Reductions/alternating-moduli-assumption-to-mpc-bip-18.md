---
type: reduction
status: stub
title: "Alternating moduli assumption ⇒ MPC"
aliases: []
id: red-alternating-moduli-assumption-to-mpc-bip-18
kind: implication
hypotheses: [alternating-moduli-assumption]
conclusion: mpc
class: unstated
model: standard
source:
  - "[[BIP+18 - Exploring Crypto Dark Matter New Simple PRF Candidates and Their Applications|BIP+18]]"
security-loss: ""
---

# Alternating moduli assumption ⇒ MPC

[[alternating-moduli|Alternating moduli assumption]] implies [[secure-multi-party-computation|MPC]].

## Statement

Migrated verbatim from [[alternating-moduli]] § Known Results:

> - Mixed-moduli PRFs → applications in MPC with low-communication preprocessing, leakage-resilient PRFs, and more — [[BIP+18 - Exploring Crypto Dark Matter New Simple PRF Candidates and Their Applications|BIP+18]]

## Notes

`class: unstated`: no citing page says which notion of reduction is meant.
Recording a class the wiki does not state would add a claim.

Recorded during migration and **not fixed** — these are claims about the
source text, not changes to it:

- The conclusion identifier secure-multi-party-computation drops the qualifier 'with low-communication preprocessing'; MPC exists from OT regardless, so as recorded this edge asserts something far weaker and already-known.
- The real hypothesis is the concrete BIP+18 PRF candidate, not the assumption node alternating-moduli; the model cannot distinguish 'assumption holds' from 'this construction is efficient'.
- This is an efficiency/application claim, not an existence reduction.
- Bullet bundles several conclusions (MPC with low-communication preprocessing, leakage-resilient PRFs, and more) — must be split.
- The trailing and more is untypable.
- leakage-resilient-prf has no page.
- Sourcing pass (2026-09), **not fixed**: claim judged incorrect as stated — honest-majority MPC exists unconditionally [[BGW88 - Completeness theorems for non-cryptographic fault-tolerant distributed computation|BGW88]], and dishonest-majority MPC requires OT, which is not known from AM hardness (a weak-PRF assumption). The migrated bullet records an efficiency property of the concrete [[BIP+18 - Exploring Crypto Dark Matter New Simple PRF Candidates and Their Applications|BIP+18]] candidates (low-round, low-communication distributed evaluation with honest majority or preprocessing), an application note for the assumption page, not an existence edge. See [[alternating-moduli]].
