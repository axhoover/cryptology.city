---
aliases:
  - PCS
  - Polynomial commitment
  - KZG
  - KZG commitment
  - Polynomial commitment scheme
title: Polynomial commitment scheme
---

# Polynomial commitment scheme

A **polynomial commitment scheme** (PCS) allows a prover to commit to a polynomial $f \in \FF_p[X]_{\le d}$ (of degree at most $d$) and later prove evaluations $f(z) = y$ for any point $z$ queried by a verifier, without revealing $f$ itself. Polynomial commitments are the key bridge between [[arithmetization]] and proof systems: they allow a [[succinct-argument|SNARK]] to efficiently check that a prover's claimed polynomial satisfies the required constraints.

## Syntax

A polynomial commitment scheme is a tuple of efficient algorithms $(\Setup, \mathsf{Commit}, \mathsf{Open}, \Vrfy)$:

- $\Setup(1^\secpar, d) \to \mathsf{srs},$ produces a structured (or transparent) reference string for polynomials of degree $\le d$.
- $\mathsf{Commit}(\mathsf{srs}, f) \to (C, \mathsf{aux}),$ commits to a polynomial $f$, producing commitment $C$ and auxiliary data $\mathsf{aux}$ (kept by the prover).
- $\mathsf{Open}(\mathsf{srs}, C, z, y, \mathsf{aux}) \to \pi,$ produces an opening proof $\pi$ for the claim $f(z) = y$.
- $\Vrfy(\mathsf{srs}, C, z, y, \pi) \to \{0, 1\},$ verifies the claim $f(z) = y$ against commitment $C$.

## Properties

### Correctness

For all polynomials $f$, all $z \in \FF_p$, and $(C, \mathsf{aux}) \gets \mathsf{Commit}(\mathsf{srs}, f)$:
$$\Pr[\Vrfy(\mathsf{srs}, C, z, f(z), \mathsf{Open}(\mathsf{srs}, C, z, f(z), \mathsf{aux})) = 1] = 1.$$

### Evaluation binding

For all efficient $\calA$: it is infeasible to produce $C, z, y \neq y', \pi, \pi'$ such that both $\Vrfy(\mathsf{srs}, C, z, y, \pi) = 1$ and $\Vrfy(\mathsf{srs}, C, z, y', \pi') = 1$.

### Hiding (optional)

The commitment $C$ reveals no information about $f$ beyond its degree and any opened evaluations.

# Variations

## KZG (Kate-Zaverucha-Goldberg)

The KZG scheme commits to $f$ as $C = g^{f(\tau)}$ in a bilinear group, where $\tau$ is a secret known only during trusted setup. An opening proof for $f(z) = y$ is the single group element $\pi = g^{(f(\tau) - y)/(\tau - z)}$ (the "quotient polynomial" evaluated at $\tau$). Verification checks $e(C / g^y, g) = e(\pi, g^\tau / g^z)$ using the pairing.

- **Proof size**: $O(1)$ (one group element)
- **Verification time**: $O(1)$ (two pairings)
- **Setup**: Trusted; requires a structured reference string $(g, g^\tau, \ldots, g^{\tau^d})$
- **Security**: $q$-Strong Diffie-Hellman assumption in a bilinear group
- **Reference**: [[KZG10 - Constant-size commitments to polynomials and their applications|KZG10]]

Used in: Plonk, Marlin, KZG-based zkRollups, Ethereum EIP-4844.

## FRI (Fast Reed-Solomon IOP of Proximity)

FRI is a transparent (no trusted setup) polynomial commitment that works by repeatedly halving the degree of a Reed-Solomon codeword via a random folding step. It is the core component of [[succinct-argument|STARKs]].

- **Proof size**: $O(\log^2 d)$
- **Verification time**: $O(\log^2 d)$
- **Setup**: Transparent (public-coin; only a hash function needed)
- **Security**: Collision-resistant hash functions; post-quantum secure
- **Reference**: [[BBHR18 - Scalable, transparent, and post-quantum secure computational integrity|BBHR18]]

## Inner Product Argument (IPA / Bulletproofs)

A transparent polynomial commitment based on Pedersen commitments and a recursive inner-product argument. No trusted setup; no pairings needed.

- **Proof size**: $O(\log d)$
- **Verification time**: $O(d)$ (linear, but no pairing)
- **Setup**: Transparent
- **Security**: Discrete logarithm assumption

# Other results

- KZG is the polynomial commitment underlying most practical pairing-based SNARKs (Groth16, Plonk, Marlin) — [[KZG10 - Constant-size commitments to polynomials and their applications|KZG10]], [[Gro16 - On the Size of Pairing-based Non-interactive Arguments|Gro16]]
- FRI-based polynomial commitments give the only known transparent SNARKs with sublinear proof size — [[BBHR18 - Scalable, transparent, and post-quantum secure computational integrity|BBHR18]]
- Any polynomial commitment with $O(1)$ proof size implies the existence of a succinct NIZK for NP — standard
- Multi-point and batched opening protocols (e.g., FK20) allow proving many evaluations simultaneously with constant overhead — standard
- Polynomial commitments are equivalent to vector commitments with position-binding under certain reductions — standard
