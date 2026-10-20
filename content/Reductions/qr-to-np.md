---
type: reduction
status: draft
title: "QR ∈ NP"
aliases: []
id: red-qr-to-np
kind: inclusion
hypotheses: [qr]
conclusion: np
class: free
model: standard
source: folklore
security-loss: ""
---

# QR ∈ NP

## Statement

The [[quadratic-residuosity|quadratic residuosity]] language $\{(N, x) : N \text{ odd},\ x \in \QR_N\}$ is in [[nondeterministic-polynomial-time|NP]]: a square root $w$ of $x$ is a witness, checked by $\gcd(x, N) = 1$ and $w^2 \equiv x \pmod N$ — folklore.

## Notes

- The complement is in $\classNP$ as well, with a divisor of $N$ of Jacobi symbol $-1$ as witness: [[qr-to-conp|QR ∈ coNP]] — folklore.
