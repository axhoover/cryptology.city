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
  succinct-extractable-pcs: "#succinct-extractability"
  fri: "#fri-fast-reed-solomon-iop-of-proximity"
  kzg-polynomial-commitment: "#kzg-kate-zaverucha-goldberg"
---

# Polynomial commitment scheme

A **polynomial commitment scheme** (PCS) allows a prover to commit to a polynomial $f \in \FF[X]$ of degree at most $d$, over a finite field $\FF$, and later prove evaluations $f(z) = y$ for any point $z$ queried by a verifier, without revealing $f$ itself. Polynomial commitments are the key bridge between [[arithmetization]] and proof systems: they allow a [[succinct-argument|SNARK]] to efficiently check that a prover's claimed polynomial satisfies the required constraints.

## Syntax

A polynomial commitment scheme is a tuple of efficient algorithms $(\Setup, \mathsf{Commit}, \Open, \Vrfy)$:

- $\Setup(1^\secpar, d) \to \mathsf{srs},$ produces a structured (or transparent) reference string for polynomials of degree $\le d$; it determines a finite field $\FF$ with $|\FF| \ge d + 1$, over which polynomials and points range.
- $\mathsf{Commit}(\mathsf{srs}, f) \to (C, \mathsf{aux}),$ commits to a polynomial $f \in \FF[X]$ of degree at most $d$, producing commitment $C$ and auxiliary data $\mathsf{aux}$ (kept by the prover).
- $\Open(\mathsf{srs}, C, z, y, \mathsf{aux}) \to \pi,$ produces an opening proof $\pi$ for the claim $f(z) = y$, for $z, y \in \FF$.
- $\Vrfy(\mathsf{srs}, C, z, y, \pi) \to \bits,$ verifies the claim $f(z) = y$ against commitment $C$.

The scheme is **succinct** if there is one polynomial $p$, fixed before $d$, such that $|C| \le p(\secpar, \log d)$ and $|\pi| \le p(\secpar, \log d)$ for every $d \le \poly(\secpar)$. A bound chosen after $d$ would admit the scheme that sends $f$ in the clear, whose $|C| = (d+1)\log|\FF|$ is polynomial in $\secpar$ for each such $d$ — standard.

## Properties

### Correctness

A PCS is **perfectly correct** if for all $\secpar$ and $d$, every $\mathsf{srs}$ output by $\Setup(1^\secpar, d)$, every $f \in \FF[X]$ of degree at most $d$, every $z \in \FF$ and $(C, \mathsf{aux}) \gets \mathsf{Commit}(\mathsf{srs}, f)$:
$$\Pr[\Vrfy(\mathsf{srs}, C, z, f(z), \Open(\mathsf{srs}, C, z, f(z), \mathsf{aux})) = 1] = 1.$$

### Evaluation binding

A PCS is **evaluation binding** if for all efficient $\calA$, the probability that $\calA(\mathsf{srs})$ outputs $(C, z, y, y', \pi, \pi')$ with $y \neq y'$, $\Vrfy(\mathsf{srs}, C, z, y, \pi) = 1$ and $\Vrfy(\mathsf{srs}, C, z, y', \pi') = 1$ is negligible, over $\mathsf{srs} \gets \Setup(1^\secpar, d)$ and the coins of $\calA$.

As an object, a PCS denotes a succinct, perfectly correct and evaluation-binding scheme, for every $d \le \poly(\secpar)$ given to $\Setup$.

### Extractability

A PCS is **extractable** if for all efficient $\calA$ there is an efficient extractor $\calE$ such that

$$
\Pr\!\left[\Vrfy(\mathsf{srs}, C, z, y, \pi) = 1 \wedge \left(\deg f > d \vee f(z) \neq y \vee C \neq C_{f,r}\right)\right]
$$

is negligible, over $\mathsf{srs} \gets \Setup(1^\secpar, d)$, $(C, z, y, \pi) \gets \calA(\mathsf{srs})$, and $(f, r) \gets \calE(\mathsf{srs})$ run on the random coins of $\calA$, where $C_{f,r}$ is the commitment output by $\mathsf{Commit}(\mathsf{srs}, f)$ on randomness $r$. For interactive evaluation, [[BFS20 - Transparent SNARKs from DARK Compilers|BFS20]] require the evaluation protocol to be an argument of knowledge of such $(f, r)$.

As an object, an extractable PCS denotes a PCS, as defined for the base object, that is extractable, for which, for one polynomial $p$ fixed before $d$, $\Vrfy$ runs in time at most $p(\secpar, \log d)$ for every $d \le \poly(\secpar)$, and whose field has $1/|\FF|$ negligible. A polynomial IOP's checks are Schwartz–Zippel tests with error about $d/|\FF|$, so over a field of size about $d$ they give no soundness — standard. KZG and the inner-product scheme work over $\ZZ_p$ for a group order $p$ of about $2^\secpar$ — standard.

### Succinct extractability

An extractable PCS is **succinct** if a polynomial $p$, fixed with the scheme, bounds the commitment size, the evaluation-proof size and the running time of $\Vrfy$ by $p(\secpar + \log d)$. For an interactive evaluation protocol, $p$ bounds its communication and the verifier's running time. The bound holds for the DARK commitment, whose evaluation proofs and verification time are logarithmic in the number of coefficients — [[BFS20 - Transparent SNARKs from DARK Compilers|BFS20]], and for KZG, whose commitments and opening proofs are single group elements checked with two pairings — [[KZG10 - Constant-size commitments to polynomials and their applications|KZG10]].

### Hiding (optional)

The commitment $C$ reveals no information about $f$ beyond its degree and any opened evaluations.

# Variations

## KZG (Kate-Zaverucha-Goldberg)

The KZG scheme commits to $f$ as $C = g^{f(\tau)}$ in a bilinear group, where $\tau$ is a secret known only during trusted setup. An opening proof for $f(z) = y$ is the single group element $\pi = g^{(f(\tau) - y)/(\tau - z)}$ (the "quotient polynomial" evaluated at $\tau$). Verification checks $e(C / g^y, g) = e(\pi, g^\tau / g^z)$ using the pairing.

- **Proof size**: $O(1)$ (one group element)
- **Verification time**: $O(1)$ (two pairings)
- **Setup**: Trusted; requires a structured reference string $(g, g^\tau, \ldots, g^{\tau^d})$
- **Security**: $q$-Strong Diffie-Hellman assumption in a bilinear group ([[bilinear-pairing-and-q-sdh-to-pcs-kzg10|Bilinear pairing + q-SDH ⇒ PCS]])
- **Reference**: [[KZG10 - Constant-size commitments to polynomials and their applications|KZG10]]

Used in: Plonk, Marlin, KZG-based zkRollups, Ethereum EIP-4844.

## FRI (Fast Reed-Solomon IOP of Proximity)

FRI is an interactive oracle proof of proximity to Reed-Solomon codes that repeatedly halves the degree of a codeword by a random folding step — [[BBHR18b - Fast Reed-Solomon Interactive Oracle Proofs of Proximity|BBHR18b]]. Combined with Merkle-tree commitments, it yields a transparent (no trusted setup) list polynomial commitment scheme — [[KPV22 - RedShift Transparent SNARKs from List Polynomial Commitments|KPV22]]. It is the core component of [[succinct-argument|STARKs]].

- **Proof size**: $O(\log^2 d)$
- **Verification time**: $O(\log^2 d)$
- **Setup**: Transparent (public-coin; only a hash function needed)
- **Security**: Collision-resistant hash functions; post-quantum secure
- **Reference**: [[BBHR18 - Scalable, transparent, and post-quantum secure computational integrity|BBHR18a]]

## Inner Product Argument (IPA / Bulletproofs)

A transparent polynomial commitment based on Pedersen commitments and a recursive inner-product argument. No trusted setup; no pairings needed.

- **Proof size**: $O(\log d)$
- **Verification time**: $O(d)$ (linear, but no pairing)
- **Setup**: Transparent
- **Security**: Discrete logarithm assumption ([[dlog-to-pcs|DLOG ⇒ PCS]])

# Other results

- [[pcs-to-snark|Extractable PCS ⇒ SNARK]]
- FRI-based polynomial commitments give transparent SNARKs with sublinear proof size — [[BBHR18 - Scalable, transparent, and post-quantum secure computational integrity|BBHR18a]]
- Multi-point and batched opening protocols (e.g., FK20) allow proving many evaluations simultaneously with constant overhead — standard
- [[pcs-to-vector-commitments|PCS ⇒ Vector commitments]]

<!-- BEGIN GENERATED participates-in 08a2e7a36791 -->

## Participates in

**Builds on Polynomial commitment scheme**

- [[extractable-pcs-to-pcs|Extractable PCS ⇒ PCS]] (via [[polynomial-commitment#extractability|Extractability]])
- [[pcs-to-snark|Extractable PCS ⇒ SNARK]] (via [[polynomial-commitment#succinct-extractability|Succinct extractability]])
- [[pcs-to-vector-commitments|PCS ⇒ Vector commitments]]
- [[succinct-extractable-pcs-to-extractable-pcs|Succinct extractable PCS ⇒ Extractable PCS]] (via [[polynomial-commitment#succinct-extractability|Succinct extractability]])

**Produces Polynomial commitment scheme**

- [[bilinear-pairing-and-q-sdh-to-pcs-kzg10|Bilinear pairing + q-SDH ⇒ PCS]]
- [[dlog-to-pcs|DLOG ⇒ PCS]]
- [[extractable-pcs-to-pcs|Extractable PCS ⇒ PCS]]
- [[hash-function-to-pcs-bbhr18|ROM ⇒ PCS (FRI)]]
- [[succinct-extractable-pcs-to-extractable-pcs|Succinct extractable PCS ⇒ Extractable PCS]] (via [[polynomial-commitment#extractability|Extractability]])

<!-- END GENERATED participates-in -->
