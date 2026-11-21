---
type: reduction
status: draft
title: "Strong RSA ⇒ RSA"
aliases: []
id: red-strong-rsa-to-rsa
kind: implication
hypotheses: [strong-rsa]
conclusion: rsa
class: fully-black-box
model: standard
source: folklore
security-loss: "tight: one oracle call, advantage preserved"
rationale:
  class: "The fixed reduction calls the RSA inverter once as an oracle on the strong-RSA instance and never uses its code."
---

# Strong RSA ⇒ RSA

## Statement

If [[rsa-assumption#strong-rsa|strong RSA]] is hard for $\GrGen$, then [[rsa-assumption|RSA]] is hard for the generator $\GrGen'$ that runs $(n, e, d) \gets \GrGen(1^\secpar)$, factors $n$ from $(e, d)$ with the standard randomized algorithm, and outputs $(n, e', d')$ for a uniform prime $e' \in (n, 2n)$ and $d' \equiv e'^{-1} \pmod{\phi(n)}$ — folklore. Each trial of the factoring algorithm succeeds with probability at least $1/2$, and primes have density about $1/\ln n$ in $(n, 2n)$ by the prime number theorem, so $\GrGen'$ runs in expected polynomial time; $e'$ is a prime exceeding $\phi(n)$, hence coprime to it — standard.

## Sketch

On a strong-RSA challenge $(n, y)$, sample a uniform prime $e' \in (n, 2n)$, run the RSA inverter on $(n, e', y)$, and output its answer $\hat{x}$ together with $e'$. The modulus $n$ is distributed as under $\GrGen'$, $e'$ depends on $n$ alone, and $y$ is uniform in $\ZZ_n^*$, as $x^{e'} \bmod n$ is for uniform $x \in \ZZ_n^*$; so the inverter sees a correctly distributed RSA instance for $\GrGen'$, and whenever it succeeds, $(\hat{x}, e')$ with $\hat{x}^{e'} \equiv y \pmod{n}$ and $e' > 1$ is a strong-RSA solution.

## Notes

- When the exponent $e$ of $\GrGen$ can be sampled efficiently given $n$ from its conditional distribution under $\GrGen$, as for a fixed $e$, the reduction that samples $e$ that way in place of $e'$ shows that RSA is hard for $\GrGen$ itself — folklore.
- Whether RSA hardness implies strong-RSA hardness is open — folklore.
