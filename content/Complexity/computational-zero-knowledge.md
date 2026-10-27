---
type: complexity-class
status: draft
aliases:
  - CZK
  - Computational zero-knowledge
title: Computational zero-knowledge
id: czk
variants:
  czk-worst-case-hardness: "#worst-case-hardness"
  czk-hardness: "#average-case-hardness"
  aux-input-zk-two-message: "#two-message-auxiliary-input-zero-knowledge"
  bb-zk-three-message: "#three-message-black-box-zero-knowledge"
  bb-zk-constant-round-public-coin: "#constant-round-public-coin-black-box-zero-knowledge"
  bb-zk-public-coin-parallel-repetition: "#public-coin-black-box-zero-knowledge-under-parallel-repetition"
  bb-zk-four-message-proof: "#four-message-black-box-zero-knowledge-proofs"
  bb-zk-strict-polynomial-simulation: "#strict-polynomial-time-black-box-simulation"
  bb-concurrent-zk-few-rounds: "#black-box-concurrent-zero-knowledge-in-few-rounds"
  honest-verifier-czk: "#honest-verifier-czk"
---

# Computational zero-knowledge

Same as [[statistical-zero-knowledge|SZK]], except that now the two distributions are merely required to be _computationally indistinguishable_ by any [[bounded-error-probabilistic-polynomial-time|BPP]] algorithm; they don't have to be statistically close. The "two distributions" are

1. the distribution over the verifier's view of their interaction with the prover, conditioned on the verifier's random coins, and
2. the distribution over views that the verifier can _simulate_ without the prover's help.

See the complexity zoo entry [here](https://complexityzoo.net/Complexity_Zoo:C#czk).

## Notable problems

- [[hash-function-to-czk|OWF ⇒ CZK]]

## Known relationships

- Unlike [[statistical-zero-knowledge|SZK]], it is not known if CZK is closed under complement
- CZK is now known to share other properties with [[statistical-zero-knowledge|SZK]]: the verifier may as well be honest ([[honest-verifier-czk-to-czk-vad06|HVCZK = CZK]]) and may as well show their coins, and CZK is closed under unions — [[Vad06 - An Unconditional Study of Computational Zero Knowledge|Vad06]]
- Assuming [[hash-function|OWFs]] exist, CZK contains [[nondeterministic-polynomial-time|NP]] — [[GMW91 - Proofs that yield nothing but their validity or all languages in NP have zero-knowledge proof systems|GMW91]]
  - Under the same assumption, $\classIP \subseteq \classCZK$, so $\classCZK = \classIP = \classPSPACE$ — [[BGG+90 - Everything Provable is Provable in Zero-Knowledge|BGG+90]], [[Sha90 - IP = PSPACE|Sha90]]; unconditionally only $\classCZK \subseteq \classIP$ is known — folklore
- Contains [[statistical-zero-knowledge|SZK]] — folklore

## Limits of zero-knowledge

- **OWFs are necessary for non-trivial CZK**: if a language outside BPP has a CZK proof system, then auxiliary-input one-way functions exist ([[zkp-to-hash-function|CZK ⊄ BPP ⇒ Auxiliary-input OWF]]); if the language is hard on average over a samplable distribution, one-way functions exist ([[czk-hardness-to-owf-ow93|Average-case-hard CZK ⇒ OWF]]) — [[OW93 - One-way functions are essential for non-trivial zero-knowledge|OW93]]
  - Informally: any ZK proof that convinces a verifier of something hard must "hide" information in a computationally meaningful way, which requires a one-way function
- **Few-round black-box zero knowledge exists only for $\classBPP$**. With negligible soundness error, every language with a three-message black-box zero-knowledge proof or argument, private-coin or public-coin, lies in $\classBPP$ ([[bb-zk-three-message-to-bpp-gk96|Three-message black-box ZK ⊆ BPP]]), and so does every language with a constant-round public-coin one ([[bb-zk-constant-round-public-coin-to-bpp-gk96|Constant-round public-coin black-box ZK ⊆ BPP]]) — [[GK96 - On the Composition of Zero-Knowledge Proof Systems|GK96a]]
  - Beyond three rounds the public-coin restriction is necessary: five-round private-coin black-box ZK proofs for NP exist assuming claw-free functions — [[GK96b - How to Construct Constant-Round Zero-Knowledge Proof Systems for NP|GK96b]]. Four messages do not suffice for proofs: a language with a four-message black-box zero-knowledge proof with negligible soundness error lies in coMA ([[bb-zk-four-message-proof-to-coma-kat08|Four-message black-box ZK proofs ⊆ coMA]]) — [[Kat08 - Which Languages Have 4-Round Zero-Knowledge Proofs|Kat08]]
  - Two-message auxiliary-input zero knowledge with negligible soundness error exists only for languages in $\classBPP$, whatever the simulator ([[aux-input-zk-two-message-to-bpp-go94|Two-message auxiliary-input ZK ⊆ BPP]]) — [[GO94 - Definitions and Properties of Zero-Knowledge Proof Systems|GO94]]
  - For a language outside $\classBPP$ and negligible soundness error, a constant-round black-box simulator must run in expected rather than strict polynomial time ([[bb-zk-strict-polynomial-simulation-to-bpp-bl02|Constant-round black-box ZK with strict polynomial-time simulation ⊆ BPP]]) — [[BL02 - Strict Polynomial-Time in Simulation and Extraction|BL02]]
  - Under assumptions on program obfuscation, three-message private-coin zero-knowledge proofs for $\classNP$ do not exist even with non-black-box simulation — [[FGJ18 - On the Existence of Three Round Zero-Knowledge Proofs|FGJ18]]
- **Parallel composition breaks ZK**: repeating a ZK protocol in parallel to reduce soundness error may destroy the zero-knowledge property — [[GK96 - On the Composition of Zero-Knowledge Proof Systems|GK96a]]. A public-coin protocol whose parallel repetitions are all black-box zero-knowledge exists only for languages in $\classBPP$ ([[bb-zk-public-coin-parallel-repetition-to-bpp-ptw09|Public-coin black-box ZK under parallel repetition ⊆ BPP]]) — [[PTW09 - On the Composition of Public-Coin Zero-Knowledge Protocols|PTW09]]
- **Concurrent black-box ZK needs almost logarithmically many rounds**: a language outside $\classBPP$ has no black-box concurrent zero-knowledge proof or argument with $o(\log n / \log\log n)$ rounds ([[bb-concurrent-zk-few-rounds-to-bpp-ckpr01|Few-round black-box concurrent ZK ⊆ BPP]]) — [[CKPR01 - Black-Box Concurrent Zero-Knowledge Requires Omega(log n) Rounds|CKPR01]]

## Restricted zero-knowledge classes

A protocol is _auxiliary-input zero-knowledge_ if for every efficient $V^*$ there is an efficient $\Sim$ such that for every $x \in L$, witness $w$ and auxiliary input $z$, $\Sim(x, z)$ is indistinguishable by non-uniform distinguishers from the view of $V^*(x, z)$ interacting with $P(x, w)$. It is _black-box zero-knowledge_ if one expected-polynomial-time oracle machine $\Sim$ serves every verifier: for every efficient $V^*$ and every $x \in L$, $\Sim^{V^*}(x)$ is computationally indistinguishable from the view of $V^*$ — [[GO94 - Definitions and Properties of Zero-Knowledge Proof Systems|GO94]]. Each class below is a class of languages, admits interactive proofs or arguments (soundness against efficient provers only) unless it says proofs, and requires negligible soundness error. Each contains $\classBPP$, whose languages have such protocols in which the verifier decides alone — standard.

### Two-message auxiliary-input zero knowledge

The languages $L$ with a two-message interactive proof or argument (the verifier sends one message and the prover answers) with negligible soundness error that is auxiliary-input zero-knowledge — [[GO94 - Definitions and Properties of Zero-Knowledge Proof Systems|GO94]].

### Three-message black-box zero knowledge

The languages with a three-message interactive proof or argument, private-coin or public-coin, with negligible soundness error that is black-box zero-knowledge — [[GK96 - On the Composition of Zero-Knowledge Proof Systems|GK96a]].

### Constant-round public-coin black-box zero knowledge

The languages with a public-coin interactive proof or argument with a constant number of messages and negligible soundness error that is black-box zero-knowledge — [[GK96 - On the Composition of Zero-Knowledge Proof Systems|GK96a]].

### Public-coin black-box zero knowledge under parallel repetition

The languages with a public-coin interactive proof or argument with negligible soundness error whose $p(n)$-fold parallel repetition is black-box zero-knowledge for every polynomial $p$ — [[PTW09 - On the Composition of Public-Coin Zero-Knowledge Protocols|PTW09]].

### Four-message black-box zero-knowledge proofs

The languages with a four-message interactive proof, sound against unbounded provers, with negligible soundness error and possibly imperfect completeness, that is computational black-box zero-knowledge — [[Kat08 - Which Languages Have 4-Round Zero-Knowledge Proofs|Kat08]].

### Strict polynomial-time black-box simulation

The languages with a constant-round interactive proof or argument with negligible soundness error that is zero-knowledge with a black-box simulator running in strict, rather than expected, polynomial time — [[BL02 - Strict Polynomial-Time in Simulation and Extraction|BL02]]. Negligible soundness error matters: one execution of the 3-coloring protocol of [[GMW91 - Proofs that yield nothing but their validity or all languages in NP have zero-knowledge proof systems|GMW91]], whose soundness error is $1 - 1/|E|$, has a strict polynomial-time black-box simulator that guesses the challenged edge $n|E|$ times — standard.

### Black-box concurrent zero knowledge in few rounds

The languages with a $k(n)$-round interactive proof or argument with negligible soundness error, $k(n) = o(\log n / \log\log n)$, that is black-box concurrent zero-knowledge. One expected-polynomial-time oracle machine simulates the joint view of every efficient verifier that runs polynomially many sessions with independent prover instances on common input $x$, interleaving and scheduling their messages adaptively — [[CKPR01 - Black-Box Concurrent Zero-Knowledge Requires Omega(log n) Rounds|CKPR01]].

## Honest-verifier CZK

$\mathbf{HVCZK}$ is the class of languages with an interactive proof that is computational zero-knowledge against the honest verifier only: an efficient $\Sim$ outputs, for every $x \in L$, a distribution computationally indistinguishable from the view of the verifier that follows the protocol — [[Vad06 - An Unconditional Study of Computational Zero Knowledge|Vad06]].

## Worst-case hardness

$\classCZK \not\subseteq \classBPP$ if some language $L \in \classCZK$ is not in $\classBPP$: for every PPT algorithm $\calA$ there is an $x$ with $\Pr[\calA(x) = L(x)] < 2/3$ — standard.

## Average-case hardness

$\classCZK$ is **hard on average** if there are a language $L \in \classCZK$ and a PPT sampler $D$ such that for all efficient $\calA$,

$$
\Pr_{x \gets D(1^n)}\!\left[\calA(x) = L(x)\right] \le \frac{1}{2} + \negl(n),
$$

the probability also over the coins of $\calA$ — standard.

<!-- BEGIN GENERATED participates-in c2740c1e0771 -->

## Participates in

**Builds on Computational zero-knowledge**

- [[aux-input-zk-two-message-to-bpp-go94|Two-message auxiliary-input ZK ⊆ BPP]] (via [[computational-zero-knowledge#two-message-auxiliary-input-zero-knowledge|Two-message auxiliary-input zero knowledge]])
- [[bb-concurrent-zk-few-rounds-to-bpp-ckpr01|Few-round black-box concurrent ZK ⊆ BPP]] (via [[computational-zero-knowledge#black-box-concurrent-zero-knowledge-in-few-rounds|Black-box concurrent zero knowledge in few rounds]])
- [[bb-zk-constant-round-public-coin-to-bpp-gk96|Constant-round public-coin black-box ZK ⊆ BPP]] (via [[computational-zero-knowledge#constant-round-public-coin-black-box-zero-knowledge|Constant-round public-coin black-box zero knowledge]])
- [[bb-zk-four-message-proof-to-coma-kat08|Four-message black-box ZK proofs ⊆ coMA]] (via [[computational-zero-knowledge#four-message-black-box-zero-knowledge-proofs|Four-message black-box zero-knowledge proofs]])
- [[bb-zk-public-coin-parallel-repetition-to-bpp-ptw09|Public-coin black-box ZK under parallel repetition ⊆ BPP]] (via [[computational-zero-knowledge#public-coin-black-box-zero-knowledge-under-parallel-repetition|Public-coin black-box zero knowledge under parallel repetition]])
- [[bb-zk-strict-polynomial-simulation-to-bpp-bl02|Constant-round black-box ZK with strict polynomial-time simulation ⊆ BPP]] (via [[computational-zero-knowledge#strict-polynomial-time-black-box-simulation|Strict polynomial-time black-box simulation]])
- [[bb-zk-three-message-to-bpp-gk96|Three-message black-box ZK ⊆ BPP]] (via [[computational-zero-knowledge#three-message-black-box-zero-knowledge|Three-message black-box zero knowledge]])
- [[czk-hardness-to-czk-worst-case-hardness|Average-case-hard CZK ⇒ CZK ⊄ BPP]] (via [[computational-zero-knowledge#average-case-hardness|Average-case hardness]])
- [[czk-hardness-to-owf-ow93|Average-case-hard CZK ⇒ OWF]] (via [[computational-zero-knowledge#average-case-hardness|Average-case hardness]])
- [[czk-to-ip|CZK ⊆ IP]]
- [[honest-verifier-czk-to-czk-vad06|HVCZK = CZK]] (via [[computational-zero-knowledge#honest-verifier-czk|Honest-verifier CZK]])
- [[zkp-to-hash-function|CZK ⊄ BPP ⇒ Auxiliary-input OWF]] (via [[computational-zero-knowledge#worst-case-hardness|Worst-case hardness]])

**Produces Computational zero-knowledge**

- [[czk-hardness-to-czk-worst-case-hardness|Average-case-hard CZK ⇒ CZK ⊄ BPP]] (via [[computational-zero-knowledge#worst-case-hardness|Worst-case hardness]])
- [[czk-to-ip-bgg-90|OWF + IP ⇒ CZK]]
- [[hash-function-to-czk|OWF ⇒ CZK]]
- [[honest-verifier-czk-to-czk-vad06|HVCZK = CZK]]
- [[szk-to-czk|SZK ⊆ CZK]]

<!-- END GENERATED participates-in -->
