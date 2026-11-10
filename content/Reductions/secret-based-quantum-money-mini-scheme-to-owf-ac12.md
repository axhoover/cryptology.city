---
type: reduction
status: draft
title: "Secret-based mini-scheme ⇒ OWF"
aliases: []
id: red-secret-based-quantum-money-mini-scheme-to-owf-ac12
kind: implication
hypotheses: [secret-based-quantum-money-mini-scheme]
conclusion: owf
class: fully-black-box
model: quantum
source:
  - "[[AC12 - Quantum Money from Hidden Subspaces|AC12]]"
security-loss: ""
rationale:
  class: "The function runs the mini-scheme's minting procedure on its input and keeps the serial number, and the counterfeiter calls an arbitrary inverter once as an oracle on the challenge serial number and then mints from the string it returns."
  model: "The inverter and the counterfeiter are quantum, so the function is one-way against efficient quantum adversaries."
---

# Secret-based mini-scheme ⇒ OWF

## Statement

Let $\mathsf{MS} = (\mathsf{Mint}, \Vrfy)$ be a [[quantum-money#secret-based-mini-schemes|secret-based mini-scheme]], whose $\mathsf{Mint}(1^\secpar)$ samples a uniform classical string $r$ and then generates a banknote $(s_r, \rho_r)$ determined by $r$. If $\mathsf{MS}$ is [[quantum-money#mini-schemes|unforgeable]] and has completeness error at most $1/3$, then $r \mapsto s_r$ is a [[hash-function#preimage-resistance-one-wayness|one-way function]] against efficient quantum adversaries — [[AC12 - Quantum Money from Hidden Subspaces|AC12]].

## Sketch

A counterfeiter given $(s_r, \rho_r)$ that recovers $r$ from $s_r$ can mint further banknotes $(s_r, \rho_r)$ — [[AC12 - Quantum Money from Hidden Subspaces|AC12]]. Any $r'$ with $s_{r'} = s_r$ serves as well: the banknote minted from $r'$ has serial number $s_r$ and passes $\Vrfy(s_r, \cdot)$ with probability at least $2/3$, so two independent such banknotes break unforgeability — standard.

## Notes

- Signatures from one-way functions ([[hash-function-to-ds|OWF ⇒ DS]]), secure against quantum forgers making classical signing queries, together with [[quantum-money-mini-scheme-and-ds-to-public-key-quantum-money-ac12|Mini-scheme + DS ⇒ Public-key QM]], make a secure secret-based mini-scheme alone sufficient for public-key quantum money — [[AC12 - Quantum Money from Hidden Subspaces|AC12]].
