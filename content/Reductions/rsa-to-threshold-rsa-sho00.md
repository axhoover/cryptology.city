---
type: reduction
status: draft
title: "RSA (safe-prime moduli) ⇒ Threshold RSA signatures (Shoup)"
aliases: []
id: red-rsa-to-threshold-rsa-sho00
kind: implication
hypotheses: [rsa-safe-primes]
conclusion: threshold-rsa
class: unstated
model: rom
source:
  - "[[Sho00 - Practical Threshold Signatures|Sho00]]"
via:
  - "[[fiat-shamir-heuristic|Fiat–Shamir]]"
security-loss: ""
rationale:
  model: "Both the full-domain hash and the hash of the non-interactive share-correctness proofs are modeled as random oracles."
---

# RSA (safe-prime moduli) ⇒ Threshold RSA signatures (Shoup)

## Statement

Let $N = pq$ for primes $p = 2p'+1$ and $q = 2q'+1$ with $p'$ and $q'$ prime, let the dealer choose the public exponent $e \gets R(1^\secpar, n, p', q')$, a prime greater than the number $n$ of parties, by an efficient rule $R$, and let $H$ hash messages into $\ZZ_N^*$. In [[threshold-signature#threshold-rsa|Shoup's threshold RSA scheme]] a trusted dealer shares the RSA signing exponent among the $n$ parties, and any $k$ honestly generated signature shares combine into the RSA full-domain-hash signature $y$ with $y^e = H(m) \bmod N$. Against a static adversary corrupting $t$ parties, with $k = t+1$ and $n - t \ge k$, the scheme is [[threshold-signature#unforgeability|unforgeable]] and [[threshold-signature#robustness|robust]] in the [[random-oracle-model|random-oracle model]] if [RSA is hard for $\GrGen_{R,\ell}$ for every polynomial $\ell$](rsa-assumption#rsa-with-safe-prime-moduli) — [[Sho00 - Practical Threshold Signatures|Sho00]].

## Notes

- Signature shares are generated and verified without interaction, and each share is at most a constant times the length of $N$ — [[Sho00 - Practical Threshold Signatures|Sho00]].
- Since $e$ is coprime to $\phi(N)$, the combined signature is the unique $e$-th root of $H(m)$ modulo $N$, so it does not depend on which $k$ parties produced it, and verifiers run plain RSA full-domain-hash verification — standard.
