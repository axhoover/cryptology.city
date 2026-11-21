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

A **polynomial commitment scheme** (PCS) allows a prover to commit to a polynomial $f \in \FF[X]$ of degree at most $d$, over a finite field $\FF$, and later prove evaluations $f(z) = y$ for any point $z$ queried by a verifier, without revealing $f$ itself. Polynomial commitments are the key bridge between [[arithmetization]] and proof systems: they allow a [[succinct-argument|SNARK]] to efficiently check that a prover's claimed polynomial satisfies the required constraints.

## Syntax

A polynomial commitment scheme is a tuple of efficient algorithms $(\Setup, \mathsf{Commit}, \Open, \Vrfy)$:

- $\Setup(1^\secpar, d) \to \mathsf{srs},$ produces a structured (or transparent) reference string for polynomials of degree $\le d$; it determines a finite field $\FF$ with $|\FF| \ge d + 1$, over which polynomials and points range.
- $\mathsf{Commit}(\mathsf{srs}, f) \to (C, \mathsf{aux}),$ commits to a polynomial $f \in \FF[X]$ of degree at most $d$, producing commitment $C$ and auxiliary data $\mathsf{aux}$ (kept by the prover).
- $\Open(\mathsf{srs}, C, z, y, \mathsf{aux}) \to \pi,$ produces an opening proof $\pi$ for the claim $f(z) = y$, for $z, y \in \FF$.
- $\Vrfy(\mathsf{srs}, C, z, y, \pi) \to \bits,$ a deterministic algorithm verifying the claim $f(z) = y$ against commitment $C$.

The scheme is **succinct** if there is one polynomial $p$, fixed before $d$, such that $|C| \le p(\secpar, \log d)$ and $|\pi| \le p(\secpar, \log d)$ for every $d \le \poly(\secpar)$. A bound chosen after $d$ would admit the scheme that sends $f$ in the clear, whose $|C| = (d+1)\log|\FF|$ is polynomial in $\secpar$ for each such $d$ — standard.

## Properties

### Correctness

A PCS is **perfectly correct** if for all $\secpar$ and $d$, every $\mathsf{srs}$ output by $\Setup(1^\secpar, d)$, every $f \in \FF[X]$ of degree at most $d$, every $z \in \FF$ and $(C, \mathsf{aux}) \gets \mathsf{Commit}(\mathsf{srs}, f)$:
$$\Pr[\Vrfy(\mathsf{srs}, C, z, f(z), \Open(\mathsf{srs}, C, z, f(z), \mathsf{aux})) = 1] = 1.$$

### Evaluation binding

A PCS is **evaluation binding** if for all efficient $\calA$, the probability that $\calA(\mathsf{srs})$ outputs $(C, z, y, y', \pi, \pi')$ with $y \neq y'$, $\Vrfy(\mathsf{srs}, C, z, y, \pi) = 1$ and $\Vrfy(\mathsf{srs}, C, z, y', \pi') = 1$ is negligible, over $\mathsf{srs} \gets \Setup(1^\secpar, d)$ and the coins of $\calA$.

As an object, a PCS denotes a succinct, perfectly correct and evaluation-binding scheme, for every $d \le \poly(\secpar)$ given to $\Setup$.

### Extractability

Extractability is the property a polynomial-IOP compiler needs: the committed polynomials can be extracted round by round, each before the verifier's next challenge and before any evaluation point is chosen — [[CHM+20 - Marlin Preprocessing zkSNARKs with Universal and Updatable SRS|CHM+20]] (Definition 6.2). For a degree bound $d = d(\secpar)$, a number of rounds $k = k(\secpar)$, an adversary $\calA$ with coins $\omega$ and an extractor $\calE$:

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{ext}}_{\mathsf{PCS},\calA,\calE,k}(\secpar)$}
\begin{algorithmic}
\State $\mathsf{srs} \gets \Setup(1^\secpar, d(\secpar))$; $\omega \getsr \bits^{*}$
\For{$i = 1, \ldots, k$}
\State $(C_{i,1}, \ldots, C_{i,t_i}) \gets \calA(\mathsf{srs}, \rho_1, \ldots, \rho_{i-1}; \omega)$
\State $(f_{i,1}, \ldots, f_{i,t_i}) \gets \calE(\mathsf{srs}, \rho_1, \ldots, \rho_{i-1}, \omega)$
\Comment{extracted before $\rho_i$ is sampled}
\State $\rho_i \getsr \FF$
\EndFor
\State $(j_u, l_u, z_u, y_u, \pi_u)_{u \in [q]} \gets \calA(\mathsf{srs}, \rho_1, \ldots, \rho_k; \omega)$
\Return $\big[\exists u : \Vrfy(\mathsf{srs}, C_{j_u,l_u}, z_u, y_u, \pi_u) = 1 \wedge (\deg f_{j_u,l_u} > d \vee f_{j_u,l_u}(z_u) \ne y_u)\big]$
\end{algorithmic}
\end{algorithm}
```

A PCS is **extractable** if for every $d = d(\secpar) \le \poly(\secpar)$, every polynomial $k = k(\secpar)$ and every efficient $\calA$ there is an efficient $\calE$ such that $\Pr\!\left[\Game^{\mathrm{ext}}_{\mathsf{PCS},\calA,\calE,k}(\secpar) = 1\right]$ is negligible. The order matters: an extractor run once on a single claim after $\calA$ has output its point $z$ may return a different polynomial for each $z$, which fixes no single polynomial oracle for a later verifier query — [[CHM+20 - Marlin Preprocessing zkSNARKs with Universal and Updatable SRS|CHM+20]] (§2.2). The DARK commitment of [[BFS20 - Transparent SNARKs from DARK Compilers|BFS20]] proves evaluations with an interactive argument, whose analogous requirement is witness-extended emulation of the evaluation protocol (BFS20, Theorem 4); it lies outside this syntax and is not registered as an instance.

As an object, an extractable PCS denotes a PCS, as defined for the base object, that is extractable, for which, for one polynomial $p$ fixed before $d$, $\Vrfy$ runs in time at most $p(\secpar, \log d)$ for every $d \le \poly(\secpar)$, and whose field has $1/|\FF|$ negligible. A polynomial IOP's checks are Schwartz–Zippel tests with error about $d/|\FF|$, so over a field of size about $d$ they give no soundness — standard. KZG and the inner-product scheme work over $\ZZ_p$ for a group order $p$ of about $2^\secpar$ — standard.

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

Used in: Plonk — [[GWC19 - PLONK Permutations over Lagrange-bases for Oecumenical Noninteractive arguments of Knowledge|GWC19]]; Marlin — [[CHM+20 - Marlin Preprocessing zkSNARKs with Universal and Updatable SRS|CHM+20]].

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

<!-- BEGIN GENERATED participates-in 6ee29de7d180 -->

## Participates in

**Builds on Polynomial commitment scheme**

- [[extractable-pcs-to-pcs|Extractable PCS ⇒ PCS]] (via [[polynomial-commitment#extractability|Extractability]])
- [[pcs-to-snark|Extractable PCS ⇒ SNARK]] (via [[polynomial-commitment#extractability|Extractability]])
- [[pcs-to-vector-commitments|PCS ⇒ Vector commitments]]

**Produces Polynomial commitment scheme**

- [[bilinear-pairing-and-q-sdh-to-pcs-kzg10|Bilinear pairing + q-SDH ⇒ PCS]]
- [[dlog-to-pcs|DLOG ⇒ PCS]]
- [[extractable-pcs-to-pcs|Extractable PCS ⇒ PCS]]
- [[hash-function-to-pcs-bbhr18|ROM ⇒ PCS (FRI)]]

<!-- END GENERATED participates-in -->
