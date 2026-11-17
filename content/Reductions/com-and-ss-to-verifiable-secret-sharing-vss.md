---
type: reduction
status: draft
title: "DLOG + secure channels ⇒ Verifiable secret sharing (VSS)"
aliases: []
id: red-dlog-to-verifiable-secret-sharing-vss-ped91
kind: implication
hypotheses: [prime-order-dlog, secure-channels]
conclusion: verifiable-secret-sharing
class: unstated
model: crs
source:
  - "[[Ped91 - Non-Interactive and Information-Theoretic Secure Verifiable Secret Sharing|Ped91b]]"
security-loss: "none: hiding is perfect, and two sets of accepted shares interpolating different secrets yield $\\log_g h$"
rationale:
  model: "The public generator $h$ must be chosen so that no party, the dealer included, knows $\\log_g h$: a dealer that knows it can open its commitments to inconsistent shares, so $h$ is a common reference string from a trusted setup rather than the dealer's choice."
---

# DLOG + secure channels ⇒ Verifiable secret sharing (VSS)

## Statement

Let $g, h$ generate a group $\GG$ of prime order $q$, with $h$ fixed in a setup so that $\log_g h$ is known to no party, the dealer included. The dealer and the $n$ parties communicate over pairwise [[interactive-protocol#secure-channels|secure channels]] and a [[interactive-protocol#broadcast-channel|broadcast channel]]. To share $s \in \ZZ_q$ among $n$ parties with threshold $k$, the dealer picks a degree-$(k-1)$ Shamir polynomial $f(X) = \sum_j a_j X^j$ with $f(0) = s$ and a random polynomial $f'(X) = \sum_j b_j X^j$ of the same degree, broadcasts the Pedersen commitments $E_j = g^{a_j} h^{b_j}$ to their coefficients, and sends party $i$ its share $(f(i), f'(i))$ over the secure channel to $i$. Each party checks its share against the commitments without interacting with the others. This is a non-interactive [[secret-sharing#verifiable-secret-sharing-vss|verifiable secret sharing]] scheme: fewer than $k$ parties get no Shannon information about $s$, and every $k$ parties holding accepted shares reconstruct the same secret unless the dealer can compute $\log_g h$, so verifiability holds if [[discrete-logarithm#dlog-in-prime-order-groups|DLOG]] is hard in $\GG$ — [[Ped91 - Non-Interactive and Information-Theoretic Secure Verifiable Secret Sharing|Ped91b]].

## Sketch

Party $i$ accepts iff $g^{f(i)} h^{f'(i)} = \prod_{j=0}^{k-1} E_j^{\,i^j}$. Because the $b_j$ are uniform, the commitments together with any $k-1$ shares have a distribution independent of $s$. Two sets of $k$ accepted shares interpolating different secrets give two openings $(s, t) \ne (s', t')$ of $E_0$, hence $\log_g h = (s - s')/(t' - t) \bmod q$.

## Notes

- The setup of $h$ cannot be left to the dealer. A dealer that knows $d = \log_g h$ can publish $E_j = g^{e_j}$ for any $e_j$, pick arbitrary shares $s_i$, and set $t_i = (\sum_j e_j i^j - s_i)/d \bmod q$, so that every check $g^{s_i} h^{t_i} = \prod_j E_j^{\,i^j}$ passes. For $q = 101$, $k = 2$, $d = 17$, $e = (23, 41)$ and $(s_1, s_2, s_3) = (5, 77, 12)$, all three shares are accepted, while the pairs $\{1,2\}$, $\{1,3\}$ and $\{2,3\}$ reconstruct $34$, $52$ and $5$ — standard.
- Privacy needs the secure channels: an eavesdropper on $k$ of the point-to-point messages learns $k$ shares and hence $s$ — standard.
- Commitments to the individual shares alone do not let a party check that all shares lie on one polynomial of degree $k-1$; the check above uses the homomorphism of the commitments to the coefficients — folklore.
