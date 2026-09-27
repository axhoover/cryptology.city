---
type: primitive
status: stub
aliases:
  - ZKP
  - ZK proof
  - Zero-knowledge proof
  - ZK
  - ZK proofs
  - Sigma protocol
title: Zero-knowledge proof
id: zkp
variants:
  constant-round-zk-argument: "#argument-systems"
  honest-verifier-zero-knowledge: "#honest-verifier-zk-hvzk"
---

# Zero-knowledge proof

A _zero-knowledge proof_ is an interactive protocol between a prover $P$ and a verifier $V$ in which $P$ convinces $V$ that a statement $x$ belongs to a language $L$ without revealing anything beyond the fact that $x \in L$. Introduced by Goldwasser, Micali, and Rackoff — [[GMR85 - The knowledge complexity of interactive proof-systems|GMR85]].

## Syntax

A zero-knowledge proof system for a language $L \subseteq \bits^*$ is an interactive protocol $(P, V)$ where:

- $P$ receives as input $(x, w)$ where $w$ is a witness for $x \in L$
- $V$ receives input $x$ and outputs $\mathrm{accept}$ or $\mathrm{reject}$
- The transcript of the interaction is a sequence of messages $(\alpha_1, \beta_1, \ldots, \alpha_k, \beta_k)$

## Properties

### Completeness

If $x \in L$ and $P$ follows the protocol honestly, then $V$ accepts with probability 1 (or $1 - \negl(\secpar)$ for statistical completeness).

### Soundness

If $x \notin L$, then for all efficient (or unbounded, for statistical soundness) $P^*$:
$$\Pr[V \text{ accepts in } \langle P^*(x), V(x) \rangle] \le \negl(\secpar).$$

A proof system with computationally sound soundness is called an **argument system**.

### Knowledge soundness (Proof of knowledge)

A stronger notion: there exists an efficient **extractor** $E$ such that if $P^*$ convinces $V$ with non-negligible probability, then $E^{P^*}(x)$ outputs a valid witness $w$ for $x \in L$ with non-negligible probability.

### Zero-knowledge

The interaction reveals nothing beyond $x \in L$. Formally, for every efficient verifier $V^*$ there exists an efficient **simulator** $\Sim$ such that for all $x \in L$, the distribution of $\Sim(x)$ is computationally (or statistically, or perfectly) indistinguishable from the view of $V^*$ in the real interaction $\langle P(x, w), V^*(x) \rangle$ — [[GMR85 - The knowledge complexity of interactive proof-systems|GMR85]].

# Variations

## Perfect / statistical / computational ZK

Depending on whether the simulator's output is identically distributed, statistically close, or only computationally indistinguishable from the real transcript.

## Honest-verifier ZK (HVZK)

Weaker form where the simulator only works against an honest verifier that picks challenges uniformly at random. Sufficient for many applications when combined with the Fiat-Shamir transform.

## Sigma protocols

A _sigma protocol_ ($\Sigma$-protocol) is a 3-message HVZK proof: (1) commitment $\alpha$ from prover; (2) random challenge $\beta$ from verifier; (3) response $\gamma$ from prover. Sigma protocols satisfy **special soundness** (two accepting transcripts with the same $\alpha$ but different $\beta$ yield a witness extractor) and HVZK. The Schnorr protocol for the [[discrete-logarithm|discrete-logarithm]] relation is the canonical example — [[Sch91 - Efficient signature generation by smart cards|Sch91]]; its special soundness and perfect HVZK hold in every prime-order group, with no hardness assumption — standard.

## Witness-indistinguishable (WI) proofs

Weaker than ZK: the verifier cannot distinguish which of multiple valid witnesses the prover used. WI proofs compose concurrently (unlike ZK proofs in general) and can be built without requiring any setup.

## Argument systems

Proof systems with only computational (not information-theoretic) soundness. Enables much more efficient constructions; see [[non-interactive-zero-knowledge|NIZK]] and [[succinct-argument|SNARKs]].

# Other results

- Zero-knowledge proofs were introduced together with a perfect zero-knowledge proof for the quadratic residuosity language $\{(N, a) : a \in \QR_N\}$, which needs no hardness assumption — [[GMR85 - The knowledge complexity of interactive proof-systems|GMR85]]
- [[hash-function-to-zkp-gmw91|Hash function ⇒ ZKP]]
- Assuming secure probabilistic encryption, all languages in IP (= [[polynomial-space|PSPACE]]) have computational ZK proofs — [[BGG+90 - Everything Provable is Provable in Zero-Knowledge|BGG+90]]; one-way functions suffice, since they give statistically binding commitments — [[HILL99 - A Pseudorandom Generator from Any One-Way Function|HILL99]], [[Naor91 - Bit commitment using pseudorandomness|Naor91]]
- [[zkp-to-hash-function|ZKP ⇒ Hash function]]
- Sequential composition of ZK proofs preserves ZK; parallel composition may not — [[GK96 - On the Composition of Zero-Knowledge Proof Systems|GK96]]
- [[fiat-shamir-and-honest-verifier-zk-hvzk-to-nizk|HVZK ⇒ NIZK (Fiat–Shamir)]]

<!-- BEGIN GENERATED participates-in 7993ab43c9a5 -->

## Participates in

**Builds on Zero-knowledge proof**

- [[zkp-to-hash-function|ZKP ⇒ Auxiliary-input OWF]]

**Produces Zero-knowledge proof**

- [[hash-function-to-zkp-gmw91|OWF ⇒ ZKP]]

**Barriers**

- [[no-zkp-to-argument-systems|No reduction from ZKP to Argument systems]]

<!-- END GENERATED participates-in -->
