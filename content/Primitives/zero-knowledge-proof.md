---
aliases:
  - ZKP
  - ZK proof
  - Zero-knowledge proof
  - ZK
  - ZK proofs
  - Sigma protocol
title: Zero-knowledge proof
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

The interaction reveals nothing beyond $x \in L$. Formally, there exists an efficient **simulator** $\Sim$ such that for all $x \in L$, the distribution of $\Sim(x)$ is computationally (or statistically, or perfectly) indistinguishable from the real interaction transcript $\langle P(x, w), V^*(x) \rangle$ for any $V^*$.

# Variations

## Perfect / statistical / computational ZK

Depending on whether the simulator's output is identically distributed, statistically close, or only computationally indistinguishable from the real transcript.

## Honest-verifier ZK (HVZK)

Weaker form where the simulator only works against an honest verifier that picks challenges uniformly at random. Sufficient for many applications when combined with the Fiat-Shamir transform.

## Sigma protocols

A _sigma protocol_ ($\Sigma$-protocol) is a 3-message HVZK proof: (1) commitment $\alpha$ from prover; (2) random challenge $\beta$ from verifier; (3) response $\gamma$ from prover. Sigma protocols satisfy **special soundness** (two accepting transcripts with the same $\alpha$ but different $\beta$ yield a witness extractor) and HVZK. The Schnorr protocol for discrete log is the canonical example.

## Witness-indistinguishable (WI) proofs

Weaker than ZK: the verifier cannot distinguish which of multiple valid witnesses the prover used. WI proofs compose concurrently (unlike ZK proofs in general) and can be built without requiring any setup.

## Argument systems

Proof systems with only computational (not information-theoretic) soundness. Enables much more efficient constructions; see [[non-interactive-zero-knowledge|NIZK]] and [[succinct-argument|SNARKs]].

# Other results

- ZK proofs were introduced and shown for quadratic residuosity — [[GMR85 - The knowledge complexity of interactive proof-systems|GMR85]]
- All NP languages have computational ZK proofs assuming [[hash-function|OWF]] — [[GMW91 - Proofs that yield nothing but their validity or all languages in NP have zero-knowledge proof systems|GMW91]]
- All languages in IP (= [[polynomial-space|PSPACE]]) have statistical ZK proofs — [[BGG+90 - Everything Provable is Provable in Zero-Knowledge|BGG+90]]
- ZK proofs for NP imply OWF in the plain model — standard
- Sequential composition of ZK proofs preserves ZK; parallel composition may not — [[GK96 - On the Composition of Zero-Knowledge Proof Systems|GK96]]
- The Schnorr protocol is a sigma protocol for discrete log compiled to a [[digital-signature|digital signature]] via Fiat-Shamir — [[FS86 - How to Prove Yourself Practical Solutions to Identification and Signature Problems|FS86]]
- ZK proofs can be compiled to [[non-interactive-zero-knowledge|NIZK]] in the CRS model or the random oracle model — [[BFM88 - Non-interactive zero-knowledge and its applications|BFM88]], [[FS86 - How to Prove Yourself Practical Solutions to Identification and Signature Problems|FS86]]
