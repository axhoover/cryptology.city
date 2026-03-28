---
aliases:
  - MPC
  - Secure computation
  - Multi-party computation
  - 2PC
  - Secure multi-party computation
title: Secure multi-party computation
---

# Secure multi-party computation

_Secure multi-party computation (MPC)_ allows $n$ parties, each holding a private input $x_i$, to jointly compute a function $f(x_1, \ldots, x_n)$ such that each party learns only its designated output and nothing else about the other parties' inputs. The fundamental question of whether this is possible was raised by Yao — [[Yao82 - Protocols for secure computations|Yao82]].

## Syntax

An $n$-party MPC protocol is a collection of $n$ interactive algorithms $(\Pi_1, \ldots, \Pi_n)$ where party $i$ runs $\Pi_i$ with input $x_i$ and random coins $r_i$. Security is formalized via the **real/ideal paradigm**: the real execution of $(\Pi_1, \ldots, \Pi_n)$ is indistinguishable from an ideal execution in which a trusted third party receives all inputs, computes $f$, and returns the outputs.

## Properties

### Correctness

All honest parties output the correct value $f(x_1, \ldots, x_n)$ with overwhelming probability.

### Privacy (semi-honest)

In the **semi-honest** (or _honest-but-curious_) model, corrupted parties follow the protocol faithfully but try to learn extra information. Privacy requires that the view of any subset of semi-honest corrupted parties is simulatable from their inputs and outputs alone.

### Security (malicious)

In the **malicious** model, corrupted parties may deviate arbitrarily from the protocol. Full security requires simulation-based security against any such adversary, typically with guaranteed output delivery or fairness conditions.

# Variations

## Two-party computation (2PC)

The special case $n = 2$ studied by Yao. Two-party protocols are typically built from [[oblivious-transfer|oblivious transfer]] (OT) and garbled circuits.

## Honest majority ($t < n/3$ or $t < n/2$)

When fewer than a threshold fraction of parties are corrupt, information-theoretic (unconditional) security is achievable. For $t < n/3$, perfect security against malicious adversaries is achievable; for $t < n/2$, statistical security is achievable with broadcast — [[BGW88 - Completeness theorems for non-cryptographic fault-tolerant distributed computation|BGW88]].

## Dishonest majority (threshold up to $n-1$)

With $n-1$ malicious parties, computational assumptions are necessary. [[oblivious-transfer|OT]] is sufficient and complete for this setting.

## MPC with preprocessing (SPDZ, etc.)

A correlated randomness or "preprocessing" phase generates reusable correlated randomness offline; the online phase is highly efficient. Preprocessing can be instantiated from [[oblivious-transfer|OT]] extension or homomorphic encryption.

## Universal composability (UC)

The [[universal-composability-framework|UC framework]] by Canetti provides a strong composable security notion for MPC — [[Can01 - Universally composable security a new paradigm for cryptographic protocols|Can01]].

# Other results

- MPC with perfect security for any function when fewer than $n/3$ parties are corrupt (no cryptographic assumptions) — [[BGW88 - Completeness theorems for non-cryptographic fault-tolerant distributed computation|BGW88]]
- MPC with computational security for any function from [[oblivious-transfer|OT]] — [[GMW87 - How to play ANY mental game|GMW87]], [[Yao82 - Protocols for secure computations|Yao82]]
- [[oblivious-transfer|OT]] is complete for (dishonest-majority) MPC — [[Kil88 - Founding cryptography on oblivious transfer|Kil88]]
- OT extension: $O(1)$ base OTs suffice to generate polynomially many OTs efficiently — [[IKNP03 - Extending Oblivious Transfers Efficiently|IKNP03]]
- MPC implies OT in a black-box way for certain non-trivial functionalities — [[BH26 - How to Steal Oblivious Transfer from Minicrypt|BH26]]
- [[commitment-scheme|COM]] is complete for two-party computation in the semi-honest model — [[GMW87 - How to play ANY mental game|GMW87]]
- Doubly-efficient RAM-MPC (computation sublinear in the database size) from [[learning-with-errors|LWE]] — [[LMW24 - Doubly Efficient Cryptography Commitments, Arguments and RAM MPC|LMW24]]
- Communication lower bounds for two-party differential privacy — [[HMST22 - On the Complexity of Two-Party Differential Privacy|HMST22]]
