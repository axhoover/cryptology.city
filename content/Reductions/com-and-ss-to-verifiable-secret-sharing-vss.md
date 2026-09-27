---
type: reduction
status: draft
title: "DLOG ⇒ Verifiable secret sharing (VSS)"
aliases: []
id: red-dlog-to-verifiable-secret-sharing-vss-ped91
kind: implication
hypotheses: [dlog]
conclusion: verifiable-secret-sharing
class: unstated
model: standard
source:
  - "[[Ped91 - Non-Interactive and Information-Theoretic Secure Verifiable Secret Sharing|Ped91]]"
security-loss: ""
---

# DLOG ⇒ Verifiable secret sharing (VSS)

[[discrete-logarithm|DLOG]] implies non-interactive [[secret-sharing#verifiable-secret-sharing-vss|verifiable secret sharing (VSS)]].

## Statement

Let $g, h$ generate a prime-order group $\GG$, with $\log_g h$ unknown to the dealer. The dealer broadcasts Pedersen commitments $g^{a_j} h^{b_j}$ to the coefficients of a degree-$(k-1)$ Shamir polynomial $f$ with $f(0) = s$ and of a random polynomial $f'$. Each of the $n$ parties checks its private share $(f(i), f'(i))$ against the commitments without interacting with the others. Fewer than $k$ parties get no Shannon information about $s$, and every $k$ parties holding accepted shares reconstruct the same secret unless the dealer can compute $\log_g h$; verifiability therefore holds if [[discrete-logarithm|DLOG]] is hard — [[Ped91 - Non-Interactive and Information-Theoretic Secure Verifiable Secret Sharing|Ped91]].

## Notes

`class: unstated`: the source does not state which notion of reduction is meant.

`model: standard`: the scheme needs public $g, h$ whose discrete-log relation the dealer does not know, and a broadcast channel for the commitments. The single-valued model field records neither.

- This file used to record "COM + SS ⇒ VSS", migrated from a definitional gloss. Commitments to the shares alone do not let the parties check that the shares lie on one polynomial. The consistency check comes from committing homomorphically to the polynomial's coefficients, as above. The slug keeps the old hypotheses because filenames are live URLs.
