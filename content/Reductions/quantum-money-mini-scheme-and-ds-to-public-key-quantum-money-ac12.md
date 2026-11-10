---
type: reduction
status: draft
title: "Mini-scheme + DS ⇒ Public-key QM"
aliases: []
id: red-quantum-money-mini-scheme-and-ds-to-public-key-quantum-money-ac12
kind: implication
hypotheses: [quantum-money-mini-scheme, ds]
conclusion: public-key-quantum-money
class: fully-black-box
model: quantum
source:
  - "[[AC12 - Quantum Money from Hidden Subspaces|AC12]]"
security-loss: ""
rationale:
  class: "The construction calls the mini-scheme and the signature scheme only as oracles, and the reduction runs any counterfeiter once as an oracle, either as a forger that outputs the serial number and signature of a uniformly chosen output banknote or as a mini-scheme counterfeiter that signs under a key pair it samples and outputs the money states of two uniformly chosen outputs."
  model: "The banknotes and the counterfeiters are quantum, so the signature scheme must be unforgeable against quantum forgers."
---

# Mini-scheme + DS ⇒ Public-key QM

## Statement

Let $\mathsf{MS} = (\mathsf{Mint}_{\mathsf{MS}}, \Vrfy_{\mathsf{MS}})$ be a [[quantum-money#mini-schemes|quantum money mini-scheme]] and $\DS = (\KeyGen, \Sign, \Vrfy_{\DS})$ a [[digital-signature|signature scheme]]. The standard construction is the [[quantum-money#public-key-quantum-money|public-key quantum money scheme]] $\mathsf{QM}$ whose key generation is that of $\DS$, $(\sk, \pk) := (\sk, \vk) \gets \KeyGen(1^\secpar)$; $\mathsf{Mint}(\sk)$ runs $(s, \rho) \gets \mathsf{Mint}_{\mathsf{MS}}(1^\secpar)$ and outputs the banknote $(s, \Sign(\sk, s), \rho)$; and $\Vrfy(\pk, (s, w, \sigma))$ accepts iff $\Vrfy_{\DS}(\pk, s, w)$ and $\Vrfy_{\mathsf{MS}}(s, \sigma)$ both accept. If $\mathsf{MS}$ is unforgeable and $\DS$ is unforgeable against efficient quantum forgers that submit one classical list of messages to the signing oracle, then $\mathsf{QM}$ is [[quantum-money#unforgeability|unforgeable]] — [[AC12 - Quantum Money from Hidden Subspaces|AC12]]. In particular, it suffices that $\DS$ is [[digital-signature#existential-unforgeability|EUF-CMA]] against efficient quantum adversaries making classical signing queries. If $\mathsf{MS}$ is $(1-\varepsilon_1)$-correct and $\DS$ is $(1-\varepsilon_2)$-correct, $\mathsf{QM}$ is $(1-\varepsilon_1-\varepsilon_2)$-correct, by a union bound over its two verifiers — standard.

## Sketch

Let a counterfeiter receive $q$ banknotes and output more than $q$ valid ones. If a valid output carries a serial number outside the $q$ given ones, a forger that mints the $q$ banknotes itself, with one list of signing queries for their serial numbers, and outputs the serial number and signature of a uniformly chosen output breaks $\DS$. Otherwise two valid outputs share a given serial number, by pigeonhole, and a mini-scheme counterfeiter that places its challenge at a uniformly chosen one of the $q$ positions, signs all $q$ serial numbers under a key pair it samples, and outputs the money states of two uniformly chosen outputs breaks $\mathsf{MS}$ — [[AC12 - Quantum Money from Hidden Subspaces|AC12]].

## Notes

- The construction, without a security proof, is from [[LAF+10 - Breaking and Making Quantum Money Toward a New Quantum Cryptographic Protocol|LAF+10]] and [[FGH+12 - Quantum Money from Knots|FGH+12]] — [[AC12 - Quantum Money from Hidden Subspaces|AC12]].
- Conversely, an unforgeable public-key scheme yields an unforgeable mini-scheme, whose serial number is a fresh public key and whose money state is one banknote minted under it — [[AC12 - Quantum Money from Hidden Subspaces|AC12]].
- A mini-scheme is secret-based if $\mathsf{Mint}_{\mathsf{MS}}$ samples a uniform classical string $r$ and outputs a banknote $(s_r, \rho_r)$ determined by $r$. For a secure secret-based mini-scheme, $r \mapsto s_r$ is one-way against quantum adversaries, so signatures from one-way functions ([[hash-function-to-ds|OWF ⇒ DS]]), secure against quantum forgers making classical queries, make the mini-scheme alone sufficient for public-key quantum money — [[AC12 - Quantum Money from Hidden Subspaces|AC12]].
