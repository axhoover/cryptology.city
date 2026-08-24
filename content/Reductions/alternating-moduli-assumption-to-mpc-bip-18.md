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
