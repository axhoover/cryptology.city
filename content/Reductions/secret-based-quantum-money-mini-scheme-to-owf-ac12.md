---
type: reduction
status: draft
title: "Secret-based mini-scheme with classical serial numbers ⇒ OWF"
aliases: []
id: red-secret-based-quantum-money-mini-scheme-to-owf-ac12
kind: implication
hypotheses: [classical-serial-quantum-money-mini-scheme]
conclusion: quantum-secure-owf
class: fully-black-box
model: quantum
source:
  - "[[AC12 - Quantum Money from Hidden Subspaces|AC12]]"
security-loss: ""
rationale:
  class: "The function is the scheme's classical serial-number algorithm, called as an oracle, and the counterfeiter calls an arbitrary inverter once as an oracle on the challenge serial number and then runs the scheme's generation procedure on the returned string."
  model: "The inverter and the counterfeiter are quantum, so the function is one-way against efficient quantum adversaries."
---

# Secret-based mini-scheme with classical serial numbers ⇒ OWF

## Statement

Let $\mathsf{MS} = (\mathsf{Mint}, \Vrfy)$ be a [[quantum-money#secret-based-mini-schemes|secret-based mini-scheme]], whose $\mathsf{Mint}(1^\secpar)$ samples a uniform classical string $r$ and runs a generation algorithm on $r$, which outputs a banknote $(s_r, \rho_r)$ determined by $r$, with [[quantum-money#classical-serial-numbers|classical serial numbers]]: the scheme includes a deterministic classical polynomial-time algorithm $S$ with $S(r) = s_r$. If $\mathsf{MS}$ is [[quantum-money#mini-schemes|unforgeable]] and has completeness error at most $1/3$, then $S$ is [[hash-function#quantum-secure-one-wayness|one-way against efficient quantum adversaries]] — [[AC12 - Quantum Money from Hidden Subspaces|AC12]] (arXiv v3, Proposition 14).

## Sketch

A counterfeiter given $(s_r, \rho_r)$ that recovers $r$ from $s_r$ can mint further banknotes $(s_r, \rho_r)$ — [[AC12 - Quantum Money from Hidden Subspaces|AC12]]. Any $r'$ with $s_{r'} = s_r$ serves as well: the banknote minted from $r'$ has serial number $s_r$ and passes $\Vrfy(s_r, \cdot)$ with probability at least $2/3$, so two independent such banknotes break unforgeability — standard.

## Notes

- Rompel's signatures from a function one-way against quantum adversaries are secure against quantum forgers that submit one classical list of messages, since Rompel's reduction is black-box ([[post-quantum-owf-to-nonadaptive-post-quantum-ds-ac12|Quantum-secure OWF ⇒ Nonadaptive post-quantum DS]]) — [[AC12 - Quantum Money from Hidden Subspaces|AC12]] (arXiv v3, Theorem 2). Together with [[quantum-money-mini-scheme-and-ds-to-public-key-quantum-money-ac12|Mini-scheme + DS ⇒ Public-key QM]], they make a secure secret-based mini-scheme with classical serial numbers alone sufficient for public-key quantum money — [[AC12 - Quantum Money from Hidden Subspaces|AC12]] (arXiv v3, Proposition 17).
- $\mathsf{Mint}$ is a quantum algorithm, so a secret-based mini-scheme guarantees only that $r \mapsto s_r$ is computable in quantum polynomial time. [[AC12 - Quantum Money from Hidden Subspaces|AC12]] obtain the signatures above from a classical one-way function secure against quantum inverters, so that step applies when a classical polynomial-time algorithm computes $s_r$ from $r$, as in the oracle mini-scheme of [[AC12 - Quantum Money from Hidden Subspaces|AC12]], whose $\mathsf{Mint}$ reads $s_r$ off a classical oracle — [[AC12 - Quantum Money from Hidden Subspaces|AC12]].
