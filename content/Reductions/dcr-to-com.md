---
type: reduction
status: draft
title: "DCR ⇒ COM"
aliases: []
id: red-dcr-to-com
kind: implication
hypotheses: [dcr]
conclusion: com
class: unstated
model: standard
source: folklore
security-loss: ""
---

# DCR ⇒ COM

[[decisional-composite-residuosity|DCR]] implies [[commitment-scheme|COM]].

## Statement

[[decisional-composite-residuosity|DCR]] implies a non-interactive [[commitment-scheme|commitment scheme]] of either flavour, both of Paillier form $c = g^m \cdot r^n \bmod n^2$ with $m \in \ZZ_n$ and $r \getsr \ZZ_n^*$, opened by revealing $(m, r)$: perfectly binding and computationally hiding with $g = 1+n$, or perfectly hiding and computationally binding with $g$ a random $n$-th residue — folklore.

## Sketch

With $g = 1+n$ and $n$ a well-formed RSA modulus, $(m, r) \mapsto c$ is a bijection $\ZZ_n \times \ZZ_n^* \to \ZZ_{n^2}^*$, so binding is perfect; hiding is IND-CPA security of Paillier encryption under DCR [[Pai99 - Public-key cryptosystems based on composite degree residuosity classes|Pai99]].

With $g$ a random $n$-th residue (a CRS, or receiver-generated with a proof of residuosity), $c$ is a uniform $n$-th residue independent of $m$. Under a uniform $g$ binding is statistical, so a committer who opens $c$ two ways distinguishes $g$ from uniform; binding is computational under DCR.

## Notes

`class: unstated`: the hypothesis is an assumption rather than a primitive, so the RTV04 axes do not apply, and no source states a class.

- Commitment flavour is not part of the conclusion identifier.
