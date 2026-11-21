---
type: barrier
status: draft
title: "No fixed-construction reduction from RSA to CPA-secure PKE (textbook RSA)"
aliases:
  - Textbook RSA
id: bar-rsa-to-pke-cpa-security-textbook-rsa
hypotheses: [rsa]
conclusion: pke-cpa-security
class: fixed-construction
consequences:
  - kind: contradiction
    target: ""
    class: fixed-construction
strength: conditional
conditional-on: [rsa]
source: folklore
circumvented-by: [red-rsa-to-pke-rsa78]
rationale:
  strength: "The attack works for every generator of the RSA syntax, so the barrier assumes RSA hardness only because, without it, the implication for this construction holds vacuously."
  class: "The attack refutes only textbook RSA encryption; encrypting a hard-core bit of the RSA function is a CPA-secure construction from RSA."
---

# No fixed-construction reduction from RSA to CPA-secure PKE (textbook RSA)

## Statement

Let $\GrGen$ be any generator of the [[rsa-assumption|RSA]] syntax, outputting $(n, e, d)$ with $n = pq$ for distinct primes $p, q$ and $ed \equiv 1 \pmod{\phi(n)}$. Textbook RSA encryption, the scheme of [[RSA78 - A method for obtaining digital signatures and public-key cryptosystems|RSA78]], has $\pk = (n, e)$, $\sk = (n, d)$, message space $\ZZ_n$ with each element encoded in $\lceil \log_2 n \rceil$ bits, $\Enc(\pk, m) := m^e \bmod n$ and $\Dec(\sk, c) := c^d \bmod n$. It is perfectly correct, and for every $\GrGen$ it is not [[public-key-encryption#cpa-security|CPA-secure]]: the adversary that submits two distinct $m_0, m_1 \in \ZZ_n$, receives $c^*$ and outputs $b' := [c^* \ne m_0^e \bmod n]$ has advantage $1$ — folklore. For $m_0 = 0$ and $m_1 = 1$, $c^* = m_b$. In particular, if RSA is hard for $\GrGen$, textbook RSA over $\GrGen$ is a perfectly correct PKE scheme that is not CPA-secure, so this construction is no reduction from RSA to CPA-secure PKE, while encrypting a hard-core bit of the RSA function is ([[rsa-to-pke-rsa78|RSA ⇒ CPA-secure PKE]]).

## Sketch

Write $ed = 1 + k\phi(n)$ with $k \ge 0$. For every $m \in \ZZ_n$, $m^{ed} \equiv m \pmod{p}$, trivially if $p \mid m$ and by Fermat's little theorem otherwise, and likewise modulo $q$, so $m^{ed} \equiv m \pmod{n}$ by the Chinese remainder theorem. Hence $m \mapsto m^e \bmod n$ is a permutation of $\ZZ_n$ with inverse $c \mapsto c^d \bmod n$: for $b = 0$, $c^* = m_0^e \bmod n$ and $b' = 0$, and for $b = 1$, $c^* = m_1^e \bmod n \ne m_0^e \bmod n$ and $b' = 1$, so $\Pr[b' = b] = 1$ — standard. The same adversary breaks every [[public-key-encryption#cpa-security|PKE scheme]] with deterministic encryption that decrypts correctly under every key pair — standard.

## Notes

- Textbook RSA is also malleable: from $c = m^e \bmod n$ and any $m' \in \ZZ_n$, anyone computes $c \cdot m'^e \bmod n$, which decrypts to $m m' \bmod n$ — standard.
- The attack costs one exponentiation modulo $n$, whatever $n$ and $e$ are, and none for $(m_0, m_1) = (0, 1)$ — standard.
