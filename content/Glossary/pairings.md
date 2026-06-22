---
aliases:
  - Bilinear pairing
  - Pairing
  - Weil pairing
  - Tate pairing
title: Pairings
---

# Pairings

A *bilinear pairing* is an efficiently computable, non-degenerate map $e : \GG_1 \times \GG_2 \to \GG_T$ between cyclic groups of prime order $l$, satisfying $e(aP, bQ) = e(P, Q)^{ab}$ for all $P \in \GG_1$, $Q \in \GG_2$, $a, b \in \ZZ$. In practice, pairings arise from the Weil pairing or Tate pairing on an elliptic curve $E(\FF_q)$, where the groups $\GG_1, \GG_2 \subset E(\FF_{q^k})$ are $l$-torsion subgroups and $k$ is the embedding degree.

## Types

Galbraith, Paterson, and Smart [[GPS06 - Pairings for Cryptographers|GPS06]] classify pairings into three types based on the availability of efficiently computable group homomorphisms. No type simultaneously achieves all four properties:

| Property | Type 1 | Type 2 | Type 3 |
|---|:---:|:---:|:---:|
| Efficient hash to $\GG_2$ | ✓ | ✗ | ✓ |
| Short $\GG_1$ representations | ✗ | ✓ | ✓ |
| Efficiently computable $\phi: \GG_2 \to \GG_1$ | ✓ | ✓ | ✗ |
| Poly-time parameter generation | ✗ | ✓ | ✓ |

**Type 1** ($\GG_1 = \GG_2$, symmetric). Implemented on supersingular curves. Hashing to $\GG_2 = \GG_1$ is trivial, and the identity serves as a computable homomorphism. The embedding degree $k$ is small and fixed for known supersingular constructions, so the security level is bounded and polynomial-time parameter generation for arbitrary $\secpar$ is infeasible. Elements of $\GG_1$ cannot be made shorter than elements of $\GG_2$.

**Type 2** ($\GG_1 \ne \GG_2$, with $\phi: \GG_2 \to \GG_1$ efficiently computable). Implemented on ordinary curves; the trace map serves as $\phi$. Supports short $\GG_1$ representations and polynomial-time parameter generation. No efficient hash to $\GG_2$ is known, because $\GG_2$ is an eigenspace of the Frobenius endomorphism.

**Type 3** ($\GG_1 \ne \GG_2$, no efficiently computable homomorphism in either direction). Implemented on ordinary curves with $\GG_2$ the trace-zero subgroup. Supports efficient hash to $\GG_2$, short $\GG_1$ representations, and polynomial-time parameter generation. No efficiently computable $\phi: \GG_2 \to \GG_1$ (or $\GG_1 \to \GG_2$) exists, as far as is known.

## Efficiency

Pairing-based systems scale like RSA rather than ECC. Achieving $\kappa$ bits of security requires $\GG_T \subset \FF_{q^k}^*$ to be of RSA-modulus size, so any operation involving pairing outputs is bounded by arithmetic in that large extension field. At 256-bit security, this corresponds to a roughly 15 000-bit field — [[GPS06 - Pairings for Cryptographers|GPS06]].

Type 3 is the only type offering acceptable efficiency and parameter flexibility at high security levels. The trade-off is the absence of a $\GG_2 \to \GG_1$ homomorphism: security proofs for several published pairing-based schemes assume such a map, and those proofs do not carry through when the scheme is instantiated with Type 3 pairings — [[GPS06 - Pairings for Cryptographers|GPS06]].

## Standard instantiations

*Citations for specific curve families (BN curves, BLS12-381, MNT curves) should be added here with appropriate references.*
