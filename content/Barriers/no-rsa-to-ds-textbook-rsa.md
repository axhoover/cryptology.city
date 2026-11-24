---
type: barrier
status: draft
title: "No fixed-construction reduction from RSA to DS (textbook RSA signatures)"
aliases:
  - Textbook RSA signatures
id: bar-rsa-to-ds-textbook-rsa
hypotheses: [rsa]
conclusion: ds
class: fixed-construction
consequences:
  - kind: contradiction
    target: ""
    class: fixed-construction
strength: conditional
conditional-on: [rsa]
source: folklore
circumvented-by: [red-rsa-to-ds-br96, red-rsa-to-ds-hw09]
rationale:
  strength: "The forgeries work for every generator of the RSA syntax, so the barrier assumes RSA hardness only because, without it, the implication for this construction holds vacuously."
  class: "The forgeries refute only textbook RSA signatures; RSA-PSS in the random-oracle model and the Hohenberger–Waters scheme in the standard model are signature schemes from RSA."
---

# No fixed-construction reduction from RSA to DS (textbook RSA signatures)

## Statement

Let $\GrGen$ be any generator of the [[rsa-assumption|RSA]] syntax, outputting $(n, e, d)$ with $n = pq$ for distinct primes $p, q$ and $ed \equiv 1 \pmod{\phi(n)}$. Textbook RSA signatures have $\vk = (n, e)$, $\sk = (n, d)$, message space $\ZZ_n^*$, $\Sign(\sk, m) := m^d \bmod n$ and $\Vrfy(\vk, m, \sigma) := [m, \sigma \in \ZZ_n^* \text{ and } \sigma^e \equiv m \pmod n]$. The scheme is perfectly correct, and for every $\GrGen$ it is not [[digital-signature#existential-unforgeability|EUF-CMA-unforgeable]] — folklore; both forgers below are given in [[GB08 - Lecture Notes on Cryptography|GB08]], Section 10.5.5:

- the forger that makes no signing query and outputs $(\sigma^e \bmod n, \sigma)$ for any $\sigma \in \ZZ_n^*$, such as $\sigma = 1$, has advantage $1$;
- signatures multiply, $(\sigma_1 \sigma_2)^e \equiv m_1 m_2 \pmod n$ whenever $\sigma_i^e \equiv m_i$, so for every target $m^* \in \ZZ_n^*$, when $\phi(n) \ge 3$, the forger that queries $m_1 \getsr \ZZ_n^* \setminus \{1, m^*\}$ and $m_2 := m^* m_1^{-1} \bmod n$ and outputs $(m^*, \sigma_1 \sigma_2 \bmod n)$ makes two signing queries and has advantage $1$.

In particular, if RSA is hard for $\GrGen$, textbook RSA over $\GrGen$ is a perfectly correct signature scheme that is not EUF-CMA-unforgeable, so this construction is no reduction from RSA to DS, while RSA-PSS in the [[random-oracle-model|random-oracle model]] is ([[rsa-to-ds-pss-br96|RSA ⇒ DS (RSA-PSS)]]).

## Sketch

For $m \in \ZZ_n^*$, $m^d \bmod n$ is a unit and $(m^d)^e = m^{1 + k\phi(n)} \equiv m \pmod n$ by Euler's theorem, where $ed = 1 + k\phi(n)$, so $\Vrfy(\vk, m, m^d \bmod n) = 1$. The first forger's pair verifies by construction, since $\sigma^e \bmod n$ is a unit, and its message was never queried. For the second, $m_1 \ne m^*$ by choice and $m_2 \ne m^*$ since $m_1 \ne 1$, so $m^*$ was never queried, and the unit $\sigma_1 \sigma_2 \bmod n$ satisfies $(\sigma_1 \sigma_2)^e \equiv m_1 m_2 \equiv m^* \pmod n$; $\ZZ_n^* \setminus \{1, m^*\}$ is non-empty since $\phi(n) \ge 3$, which fails only for $n = 6$.

## Notes

- One signing query suffices for a chosen target $m^* \in \ZZ_n^*$: query $m' := m^* r^e \bmod n$ for any $r \in \ZZ_n^* \setminus \{1\}$, which differs from $m^*$ since $x \mapsto x^e$ permutes $\ZZ_n^*$, and output $\sigma' r^{-1} \bmod n$ for the answer $\sigma' = (m^*)^d r \bmod n$ — standard.
- Besides sampling at most one element of $\ZZ_n^*$, each of these forgers costs at most one exponentiation, one inversion and two multiplications modulo $n$, whatever $n$ and $e$ are — standard.
- Full-domain hash signs $H(m)^d \bmod n$ for a random oracle $H$ onto $\ZZ_n^*$ instead, and is EUF-CMA-unforgeable in the random-oracle model if RSA is hard ([[rsa-to-tdp-rsa78|RSA ⇒ TDP]], [[tdp-to-ds-br93|TDP ⇒ DS (full-domain hash)]]) — [[BR93 - Random Oracles are Practical A Paradigm for Designing Efficient Protocols|BR93]].
