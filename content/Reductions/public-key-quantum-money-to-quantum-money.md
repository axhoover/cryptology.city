---
type: reduction
status: draft
title: "Public-key QM ⇒ QM"
aliases: []
id: red-public-key-quantum-money-to-quantum-money
kind: implication
hypotheses: [public-key-quantum-money]
conclusion: quantum-money
class: fully-black-box
model: quantum
source: folklore
security-loss: "none: a private-key counterfeiter is a public-key counterfeiter that ignores pk, with the same advantage"
rationale:
  class: "The construction runs the public-key scheme's algorithms unchanged, and the reduction forwards any counterfeiter unchanged."
  model: "The banknotes and the counterfeiters are quantum."
---

# Public-key QM ⇒ QM

## Statement

A correct and unforgeable [[quantum-money#public-key-quantum-money|public-key quantum money scheme]] $(\KeyGen, \mathsf{Mint}, \Vrfy)$ gives the private-key [[quantum-money|quantum money scheme]] whose $\KeyGen'(1^\secpar)$ runs $(\sk, \pk) \gets \KeyGen(1^\secpar)$ and outputs the classical key $\sk' := (\sk, \pk)$, with $\mathsf{Mint}'(\sk') := \mathsf{Mint}(\sk)$ and $\Vrfy'(\sk', \sigma) := \Vrfy(\pk, \sigma)$. Correctness is unchanged. A counterfeiter in $\Game^{\mathrm{qm}}$ against the private-key scheme is a public-key counterfeiter that ignores $\pk$, so for all efficient quantum $\calA$ and all polynomials $t$ the two advantages are equal — folklore.

## Notes

- [[AC12 - Quantum Money from Hidden Subspaces|AC12]] (arXiv v3, Definition 11) define a private-key scheme as a public-key scheme whose counterfeiter does not receive the public key.
