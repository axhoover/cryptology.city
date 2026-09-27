---
type: primitive
status: stub
aliases:
  - PCS
  - Polynomial commitment
  - KZG
  - KZG commitment
  - Polynomial commitment scheme
title: Polynomial commitment scheme
id: pcs
variants:
  extractable-pcs: "#extractability"
  fri: "#fri-fast-reed-solomon-iop-of-proximity"
  kzg-polynomial-commitment: "#kzg-kate-zaverucha-goldberg"
---

# Polynomial commitment scheme

A **polynomial commitment scheme** (PCS) allows a prover to commit to a polynomial $f \in \FF_p[X]_{\le d}$ (of degree at most $d$) and later prove evaluations $f(z) = y$ for any point $z$ queried by a verifier, without revealing $f$ itself. Polynomial commitments are the key bridge between [[arithmetization]] and proof systems: they allow a [[succinct-argument|SNARK]] to efficiently check that a prover's claimed polynomial satisfies the required constraints.

## Syntax

A polynomial commitment scheme is a tuple of efficient algorithms $(\Setup, \mathsf{Commit}, \Open, \Vrfy)$:

- $\Setup(1^\secpar, d) \to \mathsf{srs},$ produces a structured (or transparent) reference string for polynomials of degree $\le d$.
- $\mathsf{Commit}(\mathsf{srs}, f) \to (C, \mathsf{aux}),$ commits to a polynomial $f$, producing commitment $C$ and auxiliary data $\mathsf{aux}$ (kept by the prover).
- $\Open(\mathsf{srs}, C, z, y, \mathsf{aux}) \to \pi,$ produces an opening proof $\pi$ for the claim $f(z) = y$.
- $\Vrfy(\mathsf{srs}, C, z, y, \pi) \to \bits,$ verifies the claim $f(z) = y$ against commitment $C$.

## Properties

### Correctness

For all polynomials $f$, all $z \in \FF_p$, and $(C, \mathsf{aux}) \gets \mathsf{Commit}(\mathsf{srs}, f)$:
$$\Pr[\Vrfy(\mathsf{srs}, C, z, f(z), \Open(\mathsf{srs}, C, z, f(z), \mathsf{aux})) = 1] = 1.$$

### Evaluation binding

For all efficient $\calA$: it is infeasible to produce $C, z, y \neq y', \pi, \pi'$ such that both $\Vrfy(\mathsf{srs}, C, z, y, \pi) = 1$ and $\Vrfy(\mathsf{srs}, C, z, y', \pi') = 1$.

### Extractability

A PCS is **extractable** if for all efficient $\calA$ there is an efficient extractor $\calE$ such that

$$
\Pr\!\left[\Vrfy(\mathsf{srs}, C, z, y, \pi) = 1 \wedge \left(\deg f > d \vee f(z) \neq y \vee C \neq C_{f,r}\right)\right]
$$

is negligible, over $\mathsf{srs} \gets \Setup(1^\secpar, d)$, $(C, z, y, \pi) \gets \calA(\mathsf{srs})$, and $(f, r) \gets \calE(\mathsf{srs})$ run on the random coins of $\calA$, where $C_{f,r}$ is the commitment output by $\mathsf{Commit}(\mathsf{srs}, f)$ on randomness $r$. For interactive evaluation, [[BFS20 - Transparent SNARKs from DARK Compilers|BFS20]] require the evaluation protocol to be an argument of knowledge of such $(f, r)$.

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

FRI is an interactive oracle proof of proximity to Reed-Solomon codes that repeatedly halves the degree of a codeword by a random folding step (Ben-Sasson, Bentov, Horesh, Riabzev, ICALP 2018). Combined with Merkle-tree commitments, it yields a transparent (no trusted setup) list polynomial commitment scheme — [[KPV22 - RedShift Transparent SNARKs from List Polynomial Commitments|KPV22]]. It is the core component of [[succinct-argument|STARKs]].

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

- [[pcs-to-snark|Extractable PCS ⇒ SNARK]]
- FRI-based polynomial commitments give transparent SNARKs with sublinear proof size — [[BBHR18 - Scalable, transparent, and post-quantum secure computational integrity|BBHR18]]
- Multi-point and batched opening protocols (e.g., FK20) allow proving many evaluations simultaneously with constant overhead — standard
- [[pcs-to-vector-commitments|PCS ⇒ Vector commitments]]

<!-- BEGIN GENERATED participates-in 3eefd62e2e48 -->

## Participates in

**Builds on Polynomial commitment scheme**

- [[pcs-to-vector-commitments|PCS ⇒ Vector commitments]]

**Produces Polynomial commitment scheme**

- [[bilinear-pairing-and-q-sdh-to-pcs-kzg10|Bilinear pairing + q-SDH ⇒ PCS]]
- [[dlog-to-pcs|DLOG ⇒ PCS]]
- [[hash-function-to-pcs-bbhr18|CRHF ⇒ PCS]]

<!-- END GENERATED participates-in -->
