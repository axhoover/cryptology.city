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
  constant-round-zk-argument: "#constant-round-public-coin-zero-knowledge-arguments"
  honest-verifier-zero-knowledge: "#honest-verifier-zk-hvzk"
  witness-indistinguishable-proof: "#witness-indistinguishable-wi-proofs"
  zap: "#zaps"
  statistical-zk-argument: "#statistical-zero-knowledge-arguments"
  constant-round-zk-proof: "#constant-round-zero-knowledge-proofs"
  statistical-zap-argument: "#statistical-zap-arguments"
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

If $x \notin L$, then for all computationally unbounded $P^*$:
$$\Pr[V \text{ accepts in } \langle P^*(x), V(x) \rangle] \le \negl(\secpar).$$

If this holds only for efficient $P^*$, the system is an **argument system**.

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

Weaker than ZK: the verifier cannot distinguish which of multiple valid witnesses the prover used. WI proofs compose concurrently (unlike ZK proofs in general) and can be built without requiring any setup — [[FS90 - Witness Indistinguishable and Witness Hiding Protocols|FS90]].

## Zaps

A _zap_ is a two-message, public-coin witness-indistinguishable proof whose first message, a random string sent by the verifier, can be fixed once and reused for any number of statements — [[DN00 - Zaps and Their Applications|DN00]].

### Statistical zap arguments

A two-message public-coin argument for an $\classNP$-complete language whose first message is a uniformly random string $\rho$ sent by the verifier; unlike a zap, its soundness is computational and its witness indistinguishability statistical. Witness indistinguishability holds for every first message: for every $\rho$, every $x$ and witnesses $w_0, w_1$ for $x$, the prover's messages on $(\rho, x, w_0)$ and $(\rho, x, w_1)$ are statistically close. Soundness is computational and non-adaptive: for every false statement $x$ fixed before $\rho$ is sampled, every efficient prover makes the verifier accept with negligible probability. Statistical zap arguments were introduced by [[BFJKS20 - Statistical ZAP Arguments|BFJKS20]] and [[GJJM20 - Statistical Zaps and New Oblivious Transfer Protocols|GJJM20]]; this soundness notion is the one of [[BLNWW25 - A Hidden-Bits Approach to Statistical ZAPs from LWE|BLNWW25]], who construct them from LWE ([[quasi-polynomial-lwe-to-statistical-zap-argument-blnww25|Quasi-polynomially hard LWE ⇒ Statistical zap arguments]]).

## Argument systems

Proof systems with only computational (not information-theoretic) soundness. Enables much more efficient constructions; see [[non-interactive-zero-knowledge|NIZK]] and [[succinct-argument|SNARKs]].

### Constant-round public-coin zero-knowledge arguments

A zero-knowledge argument for an $\classNP$-complete language, and hence, by Levin reductions, for every language in $\classNP$, with a constant number of messages, public coins and negligible soundness error — [[Bar01 - How to Go Beyond the Black-Box Simulation Barrier|Bar01]]. Without the restriction every language in $\classBPP$ has one, in which the verifier decides alone — standard.

## Statistical zero-knowledge arguments

An argument system whose zero-knowledge property is statistical: the simulator's output is statistically close to the verifier's view, so the view leaks nothing about the witness even to an unbounded distinguisher, while soundness holds only against efficient provers — [[BCC88 - Minimum Disclosure Proofs of Knowledge|BCC88]].

## Constant-round zero-knowledge proofs

A zero-knowledge proof (with soundness against unbounded provers) for an $\classNP$-complete language, and hence, by Levin reductions, for every language in $\classNP$, with a constant number of messages and negligible soundness error — [[GK96b - How to Construct Constant-Round Zero-Knowledge Proof Systems for NP|GK96b]].

# Other results

- Zero-knowledge proofs were introduced together with a perfect zero-knowledge proof for the quadratic residuosity language $\{(N, a) : a \in \QR_N\}$, which needs no hardness assumption — [[GMR85 - The knowledge complexity of interactive proof-systems|GMR85]]
- [[hash-function-to-zkp-gmw91|OWF ⇒ ZKP]]
- Assuming secure probabilistic encryption, all languages in IP (= [[polynomial-space|PSPACE]]) have computational ZK proofs — [[BGG+90 - Everything Provable is Provable in Zero-Knowledge|BGG+90]]; one-way functions suffice, since they give statistically binding commitments — [[HILL99 - A Pseudorandom Generator from Any One-Way Function|HILL99]], [[Naor91 - Bit commitment using pseudorandomness|Naor91]]
- [[zkp-to-hash-function|ZKP ⇒ Auxiliary-input OWF]]
- Auxiliary-input zero knowledge is preserved under sequential composition — [[GO94 - Definitions and Properties of Zero-Knowledge Proof Systems|GO94]]; the original definition without auxiliary input is not, and zero knowledge is not closed under parallel composition — [[GK96 - On the Composition of Zero-Knowledge Proof Systems|GK96a]]
- [[fiat-shamir-and-honest-verifier-zk-hvzk-to-nizk|HVZK ⇒ NIZK (Fiat–Shamir)]]

<!-- BEGIN GENERATED participates-in f6fe4bce1add -->

## Participates in

**Builds on Zero-knowledge proof**

- [[fiat-shamir-and-honest-verifier-zk-hvzk-to-nizk|HVZK ⇒ NIZK (Fiat–Shamir)]] (via [[zero-knowledge-proof#honest-verifier-zk-hvzk|Honest-verifier ZK (HVZK)]])
- [[zkp-to-hash-function|ZKP ⇒ Auxiliary-input OWF]]

**Produces Zero-knowledge proof**

- [[bilinear-pairing-and-dlin-to-zap-gos06|Bilinear pairing + DLIN ⇒ Zaps (non-interactive)]] (via [[zero-knowledge-proof#zaps|Zaps]])
- [[claw-free-permutations-to-constant-round-zk-proof-gk96b|Claw-free permutations ⇒ Constant-round ZK proofs for NP (Goldreich–Kahan)]] (via [[zero-knowledge-proof#constant-round-zero-knowledge-proofs|Constant-round zero-knowledge proofs]])
- [[crhf-to-constant-round-zk-argument-bar01|CRHF ⇒ Constant-round ZK argument (Barak)]] (via [[zero-knowledge-proof#constant-round-public-coin-zero-knowledge-arguments|Constant-round public-coin zero-knowledge arguments]])
- [[hash-function-to-zkp-gmw91|OWF ⇒ ZKP]]
- [[io-to-statistical-zk-argument-kmnpry14|iO ⇒ Statistical ZK arguments for NP]] (via [[zero-knowledge-proof#statistical-zero-knowledge-arguments|Statistical zero-knowledge arguments]])
- [[nizk-to-zap-dn00|NIZK ⇒ Zaps (Dwork–Naor)]] (via [[zero-knowledge-proof#zaps|Zaps]])
- [[owf-to-statistical-zk-argument-nov06|OWF ⇒ Statistical ZK arguments for NP]] (via [[zero-knowledge-proof#statistical-zero-knowledge-arguments|Statistical zero-knowledge arguments]])
- [[owf-to-witness-indistinguishable-proof-fs90|OWF ⇒ Constant-round WI proofs for NP (Feige–Shamir)]] (via [[zero-knowledge-proof#witness-indistinguishable-wi-proofs|Witness-indistinguishable (WI) proofs]])
- [[quasi-polynomial-lwe-to-statistical-zap-argument-blnww25|Quasi-polynomially hard LWE ⇒ Statistical zap arguments]] (via [[zero-knowledge-proof#statistical-zap-arguments|Statistical zap arguments]])
- [[statistically-hiding-commitment-to-statistical-zk-argument-bcc88|Statistically hiding COM ⇒ Statistical ZK arguments for NP]] (via [[zero-knowledge-proof#statistical-zero-knowledge-arguments|Statistical zero-knowledge arguments]])

**Barriers**

- [[no-zkp-to-argument-systems|No reduction from ZKP to Argument systems]] — circumvented by [[crhf-to-constant-round-zk-argument-bar01|CRHF ⇒ Constant-round ZK argument (Barak)]]

<!-- END GENERATED participates-in -->
