---
type: primitive
status: stub
aliases:
  - SS
  - Secret sharing
  - Shamir secret sharing
  - Threshold secret sharing
title: Secret sharing
id: ss
variants:
  verifiable-secret-sharing: "#verifiable-secret-sharing-vss"
  linear-secret-sharing-scheme: "#linear-secret-sharing-schemes-lsss"
---

# Secret sharing

A _$(t, n)$-secret sharing scheme_ allows a dealer to split a secret $s$ among $n$ parties such that any $t$ or more parties can reconstruct $s$ exactly, while any set of fewer than $t$ parties learns nothing about $s$. Introduced independently by Shamir and Blakley — [[Sha79 - How to share a secret|Sha79]], [[Bla79 - Safeguarding cryptographic keys|Bla79]].

## Syntax

A $(t, n)$-secret sharing scheme over a secret space $\calS$ is a pair of efficient functions:

- $\Share(s) \to (s_1, \ldots, s_n),$ a randomized algorithm that distributes the secret $s \in \calS$ into $n$ shares $s_i \in \calS_i,$
- $\Recon(T, \{s_i\}_{i \in T}) \to s \text{ or } \bot,$ a deterministic reconstruction algorithm for any set $T \subseteq [n]$ with $|T| \ge t.$

## Properties

### Correctness

For any $s \in \calS$, any set $T \subseteq [n]$ with $|T| \ge t$, and $(s_1, \ldots, s_n) \gets \Share(s)$:
$$\Pr\!\left[\Recon(T, \{s_i\}_{i \in T}) = s\right] = 1.$$

### Privacy

For any set $T \subseteq [n]$ with $|T| < t$ and any two secrets $s_0, s_1 \in \calS$:
$$\left\{(s_i)_{i \in T} : (s_1, \ldots, s_n) \gets \Share(s_0)\right\} = \left\{(s_i)_{i \in T} : (s_1, \ldots, s_n) \gets \Share(s_1)\right\}.$$

This is **perfect privacy**: no information about $s$ leaks from any $t - 1$ shares, even to computationally unbounded adversaries.

# Variations

## Shamir secret sharing

The canonical construction works over a prime field $\FF_p$. The dealer samples a random polynomial $f \in \FF_p[X]$ of degree $t - 1$ with $f(0) = s$, and gives party $i$ the share $s_i = f(i)$. Reconstruction uses polynomial interpolation (e.g., Lagrange's formula) on any $t$ points.

## Blakley's geometric construction

The dealer fixes a point $P \in \FF_p^t$ representing the secret, and gives each party a random hyperplane in $\FF_p^t$ passing through $P$. Any $t$ hyperplanes uniquely determine their intersection — [[Bla79 - Safeguarding cryptographic keys|Bla79]].

## Computational secret sharing

Relaxes perfect privacy to computational indistinguishability. Allows secret sharing below the information-theoretic threshold (e.g., $(1, n)$-sharing, i.e., encryption).

## Verifiable secret sharing (VSS)

A secret sharing scheme augmented with commitments so that parties can verify their shares are consistent, even against a malicious dealer. Used in [[secure-multi-party-computation|MPC]] and distributed key generation.

## Linear secret sharing schemes (LSSS)

A secret sharing scheme is linear if the shares are linear functions of the secret and randomness. Equivalent to monotone span programs over $\FF$.

# Other results

- $(t, n)$-threshold secret sharing exists information-theoretically for all $1 \le t \le n$ — [[Sha79 - How to share a secret|Sha79]], [[Bla79 - Safeguarding cryptographic keys|Bla79]]
- Secret sharing is information-theoretically achievable; no computational hardness assumption required
- [[ss-to-it-pir-cgks98|SS ⇒ IT-PIR]]
- [[verifiable-secret-sharing-vss-to-mpc-bgw88|Verifiable secret sharing (VSS) ⇒ MPC]]
- [[linear-secret-sharing-schemes-lsss-to-msp|Linear secret sharing schemes (LSSS) ⇔ MSP]]
- Monotone-span-program size lower bounds survive amortization: a lower bound proved for a program sharing one secret still applies, per secret, when the same program is reused to share several secrets at once — [[Kha26 - Rank Measures and Exponential Lower Bounds for Multilinear Secret Sharing|Kha26]]
- There exist access structures on $n$ parties for which every perfect multilinear scheme, over every finite field, requires shares of total size $2^{\Omega(n)}$ times the secret size — matching the known $2^{O(n)}$ upper bound and settling [Beimel, ePrint 2025/518, Question 10.4] — [[Kha26 - Rank Measures and Exponential Lower Bounds for Multilinear Secret Sharing|Kha26]]

<!-- BEGIN GENERATED participates-in 173a79eddc53 -->

## Participates in

**Builds on Secret sharing**

- [[com-and-ss-to-verifiable-secret-sharing-vss|COM + SS ⇒ Verifiable secret sharing (VSS)]]
- [[ss-to-it-pir-cgks98|SS ⇒ IT-PIR]]

<!-- END GENERATED participates-in -->
