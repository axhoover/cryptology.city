---
type: primitive
status: stub
aliases:
  - MPC
  - Secure computation
  - Multi-party computation
  - 2PC
  - Secure multi-party computation
title: Secure multi-party computation
id: mpc
variants:
  mpc-with-preprocessing: "#mpc-with-preprocessing-spdz-etc"
  two-party-computation: "#two-party-computation-2pc"
  honest-majority-t-lt-n-over-2: "#honest-majority-t-n2"
  honest-majority-t-lt-n-over-3: "#honest-majority-t-n3"
  semi-honest-security: "#privacy-semi-honest"
---

# Secure multi-party computation

_Secure multi-party computation (MPC)_ allows $n$ parties, each holding a private input $x_i$, to jointly compute a function $f(x_1, \ldots, x_n)$ such that each party learns only its designated output and nothing else about the other parties' inputs. The fundamental question of whether this is possible was raised by Yao — [[Yao82 - Protocols for secure computations|Yao82b]].

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

## Honest majority

When fewer than a threshold fraction of parties are corrupt, information-theoretic (unconditional) security is achievable.

### Honest majority ($t < n/3$)

For $t < n/3$, perfect security against malicious adversaries is achievable — [[BGW88 - Completeness theorems for non-cryptographic fault-tolerant distributed computation|BGW88]].

### Honest majority ($t < n/2$)

For $t < n/2$, statistical security against malicious adversaries is achievable with broadcast — [[RB89 - Verifiable Secret Sharing and Multiparty Protocols with Honest Majority|RB89]].

## Dishonest majority (threshold up to $n-1$)

With $n-1$ malicious parties, computational assumptions are necessary. [[oblivious-transfer|OT]] is sufficient and complete for this setting.

## MPC with preprocessing (SPDZ, etc.)

A correlated randomness or "preprocessing" phase generates reusable correlated randomness offline; the online phase is highly efficient. Preprocessing can be instantiated from [[oblivious-transfer|OT]] extension or homomorphic encryption.

## Universal composability (UC)

The [[universal-composability-framework|UC framework]] by Canetti provides a strong composable security notion for MPC — [[Can01 - Universally composable security a new paradigm for cryptographic protocols|Can01]].

# Other results

- [[honest-majority-t-n-3-or-t-n-2-to-mpc-bgw88|Honest majority ($t < n/3$) ⇒ MPC]]
- [[honest-majority-t-lt-n-over-2-to-mpc-rb89|Honest majority ($t < n/2$) ⇒ MPC]]
- [[ot-to-mpc-kil88|OT ⇒ MPC]]
- OT extension: $O(\secpar)$ base OTs suffice to generate polynomially many OTs efficiently — [[IKNP03 - Extending Oblivious Transfers Efficiently|IKNP03]]
- [[lwe-to-de-ram-mpc-lmw24|LWE ⇒ DE-RAM-MPC]]
- Communication lower bounds for two-party differential privacy — [[HMST22 - On the Complexity of Two-Party Differential Privacy|HMST22]]

<!-- BEGIN GENERATED participates-in 4eb144d9b50f -->

## Participates in

**Builds on Secure multi-party computation**

- [[honest-majority-t-lt-n-over-2-to-mpc-rb89|Honest majority ($t < n/2$) ⇒ MPC]] (via [[secure-multi-party-computation#honest-majority-t-n2|honest-majority-t-lt-n-over-2]])
- [[honest-majority-t-n-3-or-t-n-2-to-mpc-bgw88|Honest majority ($t < n/3$) ⇒ MPC]] (via [[secure-multi-party-computation#honest-majority-t-n3|honest-majority-t-lt-n-over-3]])

**Produces Secure multi-party computation**

- [[additively-homomorphic-encryption-to-mpc-with-preprocessing-bdoz11|Additively homomorphic encryption ⇒ MPC with preprocessing (BDOZ)]] (via [[secure-multi-party-computation#mpc-with-preprocessing-spdz-etc|mpc-with-preprocessing]])
- [[gc-and-ot-to-two-party-computation-2pc|GC + OT ⇒ Two-party computation (2PC)]] (via [[secure-multi-party-computation#two-party-computation-2pc|two-party-computation]])
- [[he-to-mpc-with-preprocessing-spdz-etc|SHE ⇒ MPC with preprocessing (SPDZ)]] (via [[secure-multi-party-computation#mpc-with-preprocessing-spdz-etc|mpc-with-preprocessing]])
- [[honest-majority-t-lt-n-over-2-to-mpc-rb89|Honest majority ($t < n/2$) ⇒ MPC]]
- [[honest-majority-t-n-3-or-t-n-2-to-mpc-bgw88|Honest majority ($t < n/3$) ⇒ MPC]]
- [[ot-extension-to-mpc-with-preprocessing-spdz-etc|OT Extension ⇒ MPC with preprocessing (SPDZ, etc.)]] (via [[secure-multi-party-computation#mpc-with-preprocessing-spdz-etc|mpc-with-preprocessing]])
- [[ot-to-mpc-kil88|OT ⇒ MPC]]

<!-- END GENERATED participates-in -->
