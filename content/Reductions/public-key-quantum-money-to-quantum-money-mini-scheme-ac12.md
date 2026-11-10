---
type: reduction
status: draft
title: "Public-key QM ⇒ Mini-scheme"
aliases: []
id: red-public-key-quantum-money-to-quantum-money-mini-scheme-ac12
kind: implication
hypotheses: [pointwise-complete-public-key-quantum-money]
conclusion: quantum-money-mini-scheme
class: fully-black-box
model: quantum
source:
  - "[[AC12 - Quantum Money from Hidden Subspaces|AC12]]"
security-loss: "none: the counterfeiter against the public-key scheme is the mini-scheme counterfeiter itself, with the same success probability"
rationale:
  class: "The mini-scheme runs the public-key scheme's algorithms only as oracles, and the reduction hands the public key and one banknote to an arbitrary mini-scheme counterfeiter used only as an oracle."
  model: "The banknotes and the counterfeiters are quantum."
---

# Public-key QM ⇒ Mini-scheme

## Statement

Let $\mathsf{QM} = (\KeyGen, \mathsf{Mint}, \Vrfy)$ be a [pointwise $(1-\varepsilon)$-complete](quantum-money#pointwise-completeness) [[quantum-money#public-key-quantum-money|public-key quantum money scheme]], and let $\mathsf{MS}$ be the [[quantum-money#mini-schemes|mini-scheme]] whose $\mathsf{Mint}_{\mathsf{MS}}(1^\secpar)$ runs $(\sk, \pk) \gets \KeyGen(1^\secpar)$ and outputs the serial number $s := \pk$ with the money state $\rho \gets \mathsf{Mint}(\sk)$, and whose $\Vrfy_{\mathsf{MS}}(s, \sigma)$ accepts iff $\Vrfy(s, \sigma)$ does. If $\mathsf{QM}$ is [[quantum-money#unforgeability|unforgeable]], so is $\mathsf{MS}$, and $\mathsf{MS}$ is $(1-\varepsilon)$-correct, since every serial number $\pk$ and money state $\rho$ it can output is a key pair and a banknote of $\mathsf{QM}$ — [[AC12 - Quantum Money from Hidden Subspaces|AC12]].

## Sketch

A counterfeiter against $\mathsf{MS}$, run on $(\pk, \rho)$, is a counterfeiter against $\mathsf{QM}$ that receives $\pk$ and one banknote and outputs two registers, and it wins $\Game^{\mathrm{mini}}$ exactly when it wins $\Game^{\mathrm{qm}}$ with $t = 1$ — [[AC12 - Quantum Money from Hidden Subspaces|AC12]].

## Notes

- Conversely, a mini-scheme and a signature scheme unforgeable by quantum forgers give a public-key scheme ([[quantum-money-mini-scheme-and-ds-to-public-key-quantum-money-ac12|Mini-scheme + DS ⇒ Public-key QM]]) — [[AC12 - Quantum Money from Hidden Subspaces|AC12]].
