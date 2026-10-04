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
rationale:
  model: "The scheme uses no idealised oracle, only public generators whose discrete-logarithm relation the dealer does not know and a broadcast channel for the commitments."
---

# DLOG ⇒ Verifiable secret sharing (VSS)

## Statement

Let $g, h$ generate a group $\GG$ of prime order $q$, with $\log_g h$ unknown to the dealer. To share $s \in \ZZ_q$ among $n$ parties with threshold $k$, the dealer picks a degree-$(k-1)$ Shamir polynomial $f(X) = \sum_j a_j X^j$ with $f(0) = s$ and a random polynomial $f'(X) = \sum_j b_j X^j$ of the same degree, broadcasts the Pedersen commitments $E_j = g^{a_j} h^{b_j}$ to their coefficients, and sends party $i$ its share $(f(i), f'(i))$ privately. Each party checks its share against the commitments without interacting with the others. This is a non-interactive [[secret-sharing#verifiable-secret-sharing-vss|verifiable secret sharing]] scheme: fewer than $k$ parties get no Shannon information about $s$, and every $k$ parties holding accepted shares reconstruct the same secret unless the dealer can compute $\log_g h$, so verifiability holds if [[discrete-logarithm|DLOG]] is hard in $\GG$ — [[Ped91 - Non-Interactive and Information-Theoretic Secure Verifiable Secret Sharing|Ped91]].

## Sketch

Party $i$ accepts iff $g^{f(i)} h^{f'(i)} = \prod_{j=0}^{k-1} E_j^{\,i^j}$. Because the $b_j$ are uniform, the commitments together with any $k-1$ shares have a distribution independent of $s$. Two sets of $k$ accepted shares interpolating different secrets give two openings $(s, t) \ne (s', t')$ of $E_0$, hence $\log_g h = (s - s')/(t' - t) \bmod q$.

## Notes

- Commitments to the individual shares alone do not let a party check that all shares lie on one polynomial of degree $k-1$; the check above uses the homomorphism of the commitments to the coefficients — folklore.
