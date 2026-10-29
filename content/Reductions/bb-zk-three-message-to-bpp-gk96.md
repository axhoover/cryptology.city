---
type: reduction
status: draft
title: "Three-message black-box ZK ⊆ BPP"
aliases: []
id: red-bb-zk-three-message-to-bpp-gk96
kind: inclusion
hypotheses: [bb-zk-three-message]
conclusion: bpp
class: free
model: standard
source:
  - "[[GK96 - On the Composition of Zero-Knowledge Proof Systems|GK96a]]"
security-loss: ""
---

# Three-message black-box ZK ⊆ BPP

## Statement

If a language $L$ has a [[computational-zero-knowledge#three-message-black-box-zero-knowledge|three-message interactive proof or argument with negligible soundness error that is black-box zero-knowledge]] — one expected-polynomial-time oracle machine $\Sim$ such that for every efficient $V^*$ and every $x \in L$, $\Sim^{V^*}(x)$ is computationally indistinguishable from the view of $V^*$ — then $L \in$ [[bounded-error-probabilistic-polynomial-time|BPP]]. This holds for private-coin and public-coin protocols alike — [[GK96 - On the Composition of Zero-Knowledge Proof Systems|GK96a]]. So no $\classNP$-complete language has such a protocol unless $\classNP \subseteq \classBPP$.

## Notes

- The converse inclusion is trivial: every language in $\classBPP$ has such a protocol, in which the verifier decides alone, so the class equals $\classBPP$ — standard.
- For arguments the bound is tight: four-message zero-knowledge arguments for $\classNP$ exist from any one-way function ([[owf-to-four-message-zk-argument-bjy97|OWF ⇒ Four-message ZK arguments for NP]]) — [[BJY97 - Round-Optimal Zero-Knowledge Arguments Based on any One-Way Function|BJY97]] — and with a fully black-box construction from injective one-way functions ([[injective-one-way-function-to-four-message-zk-argument-hv18|Injective OWF ⇒ Four-message ZK arguments for NP (fully black-box)]]) — [[HV18 - Round-Optimal Fully Black-Box Zero-Knowledge Arguments from One-Way Permutations|HV18]], [[KOS18 - Round Optimal Black-Box Commit-and-Prove|KOS18]]. For proofs, four messages put $L$ in coMA ([[bb-zk-four-message-proof-to-coma-kat08|Four-message black-box ZK proofs ⊆ coMA]]) — [[Kat08 - Which Languages Have 4-Round Zero-Knowledge Proofs|Kat08]] — and five messages suffice from claw-free permutations ([[claw-free-permutations-to-constant-round-zk-proof-gk96b|Claw-free permutations ⇒ Constant-round ZK proofs for NP (Goldreich–Kahan)]]) — [[GK96b - How to Construct Constant-Round Zero-Knowledge Proof Systems for NP|GK96b]].
- Non-black-box simulation gets around the bound: under the discrete-logarithm assumption and KEA3 in one prime-order group, $\classNP$ has three-message zero-knowledge arguments ([[prime-order-dlog-and-kea3-to-three-message-zk-argument-bp04|DLOG + KEA3 ⇒ Three-message ZK arguments for NP]]) — [[BP04 - The Knowledge-of-Exponent Assumptions and 3-Round Zero-Knowledge Protocols|BP04]], repairing [[HT98 - On the Existence of 3-Round Zero-Knowledge Protocols|HT98]].
- Under assumptions on program obfuscation, three-message private-coin zero-knowledge proofs for $\classNP$ do not exist even with non-black-box simulation — [[FGJ18 - On the Existence of Three Round Zero-Knowledge Proofs|FGJ18]].
