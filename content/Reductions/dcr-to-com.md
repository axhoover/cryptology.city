---
type: reduction
status: draft
title: "DCR ⇒ COM"
aliases: []
id: red-dcr-to-com
kind: implication
hypotheses: [dcr]
conclusion: com
class: fully-black-box
model: standard
source: folklore
security-loss: ""
rationale:
  class: "No source states a class; each flavour is one fixed Paillier-form construction, and each reduction runs the adversary once as an oracle, the hiding adversary on a Paillier challenge ciphertext or the committer on a DCR challenge planted as g."
---

# DCR ⇒ COM

## Statement

[[decisional-composite-residuosity|DCR]] implies a non-interactive [[commitment-scheme|commitment scheme]] of either flavour, both of Paillier form: for a well-formed RSA modulus $n$ and a base $g \in \ZZ_{n^2}^*$ in the public parameters, a commitment to $m \in \ZZ_n$ is $c = g^m \cdot r^n \bmod n^2$ for $r \getsr \ZZ_n^*$, opened by revealing $(m, r)$. With $g = 1+n$ it is perfectly binding and computationally hiding; with $g$ a random $n$-th residue it is perfectly hiding and computationally binding — folklore.

## Sketch

With $g = 1+n$, $(m, r) \mapsto c$ is a bijection $\ZZ_n \times \ZZ_n^* \to \ZZ_{n^2}^*$, so binding is perfect, and hiding is IND-CPA security of Paillier encryption under DCR ([[Pai99 - Public-key cryptosystems based on composite degree residuosity classes|Pai99]]). With $g$ a random $n$-th residue, $c$ is a uniform $n$-th residue independent of $m$; under a uniform $g$ binding is statistical, so a committer that opens one $c$ two ways distinguishes the DCR challenge $g$ from uniform.

## Notes

- In the perfectly hiding flavour, $g$ is a common reference string, or is chosen by the receiver with a proof that it is an $n$-th residue — folklore.
