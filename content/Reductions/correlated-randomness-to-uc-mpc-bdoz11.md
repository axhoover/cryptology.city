---
type: reduction
status: draft
title: "Correlated randomness ⇒ UC MPC (BDOZ online phase)"
aliases: []
id: red-correlated-randomness-to-uc-mpc-bdoz11
kind: implication
hypotheses: [correlated-randomness]
conclusion: uc-mpc
class: free
model: standard
source:
  - "[[BDOZ11 - Semi-homomorphic Encryption and Multiparty Computation|BDOZ11]]"
security-loss: ""
rationale:
  class: "The online phase is statistically secure given the dealer's authenticated shares and triples, with no hardness assumption for a black-box reduction to break."
---

# Correlated randomness ⇒ UC MPC (BDOZ online phase)

## Statement

Given a trusted dealer of [[interactive-protocol#correlated-randomness|correlated randomness]] that hands the parties additive shares of random values and of multiplication triples over $\FF_{p^k}$, each share authenticated towards every other party by a pairwise information-theoretic MAC, the BDOZ online phase evaluates any arithmetic circuit over $\FF_{p^k}$ and UC-securely realizes the functionality with abort against an active adversary corrupting up to $n - 1$ of the $n$ parties ([[secure-multi-party-computation#universal-composability-uc|UC MPC]]); the parties only exchange additive shares and check information-theoretic MACs — [[BDOZ11 - Semi-homomorphic Encryption and Multiparty Computation|BDOZ11]]. Security is therefore statistical, with a MAC-forgery error that is negligible when $|\FF_{p^k}|$ is exponential in $\secpar$ — standard.

## Sketch

A value $x$ is held as additive shares $x_i$, and $P_j$ holds a key $(\alpha_j, \beta_{j,i})$ for $P_i$'s share, which carries the tag $\alpha_j x_i + \beta_{j,i}$. Additions and multiplications by public constants are local; a multiplication consumes one dealt triple $([a], [b], [c])$ with $c = ab$: the parties open $d = x - a$ and $e = y - b$, each opened share checked against its tags, and set $[xy] = [c] + d[b] + e[a] + de$. A corrupted party that changes an opened share must forge a tag, which succeeds with probability $1/|\FF_{p^k}|$ — standard.

## Notes

- One triple and two openings per multiplication gate — standard.
- The pairwise MACs make the online phase's total computation and communication quadratic in $n$; the SPDZ online phase, with a single global MAC key, makes them linear in $n$ and is also unconditionally secure — [[DPSZ12 - Multiparty Computation from Somewhat Homomorphic Encryption|DPSZ12]].
- BDOZ11's preprocessing produces the triples from semi-homomorphic encryption ([[additively-homomorphic-encryption-to-mpc-with-preprocessing-bdoz11|Additively homomorphic encryption ⇒ MPC with preprocessing (BDOZ)]]) — [[BDOZ11 - Semi-homomorphic Encryption and Multiparty Computation|BDOZ11]].
- With correlated randomness every multiparty functionality can be realized, with perfect security against semi-honest parties or statistical security against malicious parties, by a protocol in which each party communicates a number of bits linear in its input length, using an exponential amount of correlated randomness. Finite sender–receiver functionalities have perfectly secure protocols against malicious parties, which is impossible in general for functionalities with outputs to both parties — [[IKM+13 - On the Power of Correlated Randomness in Secure Computation|IKM+13]].
