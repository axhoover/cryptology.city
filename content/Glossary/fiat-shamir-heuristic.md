---
aliases:
  - Fiat-Shamir
  - Fiat-Shamir Heuristic
title: Fiat-Shamir Heuristic
---

# Fiat-Shamir Heuristic

The **Fiat-Shamir heuristic** is a general method for converting a public-coin interactive proof (specifically, a **Sigma protocol** / $\Sigma$-protocol) into a non-interactive proof or signature scheme by replacing the verifier's random challenge with a cryptographic hash of the prover's commitment. Introduced in — [[FS86 - How to Prove Yourself Practical Solutions to Identification and Signature Problems|FS86]].

## Sigma protocols

A **$\Sigma$-protocol** for a relation $R = \{(x, w)\}$ (where $x$ is the statement and $w$ is the witness) is a three-message public-coin protocol:

1. **Commitment**: the prover $P(x, w)$ sends a commitment $a$
2. **Challenge**: the verifier $V(x)$ sends a uniformly random challenge $e \getsr \{0,1\}^\secpar$
3. **Response**: the prover sends a response $z$; the verifier accepts or rejects based on $(x, a, e, z)$

A $\Sigma$-protocol must satisfy:

- **Completeness**: an honest prover with a valid witness always convinces the verifier
- **Special soundness**: given two accepting transcripts $(a, e, z)$ and $(a, e', z')$ with the same commitment but different challenges $e \neq e'$, one can efficiently extract a witness $w$
- **Honest-verifier zero-knowledge (HVZK)**: there is a simulator that, given only $x$ and $e$, produces a transcript $(a, e, z)$ indistinguishable from a real interaction

## The transform

The **Fiat-Shamir transform** makes a $\Sigma$-protocol non-interactive by replacing the verifier's random challenge with $e = H(\mathbf{x}, a)$, where $H$ is a hash function modeled as a [[random-oracle-model|random oracle]]:

$$
\pi = (a,\, z) \quad \text{where} \quad e = H(x, a), \quad z = P.\mathsf{Respond}(x, w, a, e)
$$

Verification checks whether the fixed challenge $e = H(x, a)$ yields an accepting transcript $(a, e, z)$.

For signatures, the message $m$ is included in the hash: $e = H(x, a, m)$.

## Security

In the [[random-oracle-model|random oracle model (ROM)]], the Fiat-Shamir transform produces:

- **Non-interactive zero-knowledge (NIZK)** proofs: secure against any adversary that treats $H$ as a random oracle
- **Signatures** (when applied to an identification protocol): existentially unforgeable under chosen-message attacks (EUF-CMA) — [[FS86 - How to Prove Yourself Practical Solutions to Identification and Signature Problems|FS86]]
  - Example: applying Fiat-Shamir to the Schnorr identification protocol yields **Schnorr signatures**

## Limitations

- **Insecure in the standard model**: for certain $\Sigma$-protocols and hash functions, the Fiat-Shamir transform does not produce a secure scheme when $H$ is an explicit function rather than a random oracle. There exist artificial protocols for which the transform fails for any explicit hash function
- **Non-black-box techniques**: some proof systems (e.g., SNARKs) use Fiat-Shamir in non-standard ways that require careful analysis beyond the classical $\Sigma$-protocol setting
