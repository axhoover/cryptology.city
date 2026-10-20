---
type: primitive
status: stub
aliases:
  - iO
  - Indistinguishability Obfuscation
title: Indistinguishability Obfuscation
id: io
variants:
  virtual-black-box-obfuscation: "#virtual-black-box-obfuscation-vbb"
  differing-inputs-obfuscation: "#differing-inputs-obfuscation-dio"
  subexponential-io: "#sub-exponentially-secure-io"
  statistical-io: "#statistical-io"
---

# Indistinguishability Obfuscation

_Indistinguishability obfuscation (iO)_ is a form of program obfuscation in which the obfuscated programs for any two functionally equivalent circuits are computationally indistinguishable. It is considered a "universal" cryptographic primitive: combined with [[hash-function|one-way functions]], iO implies a vast number of cryptographic primitives. The first candidate construction was given by Garg, Gentry, Halevi, Raykova, Sahai, and Waters — [[GGHRSW13 - Candidate indistinguishability obfuscation and functional encryption for all circuits|GGHRSW13]]; the first construction from well-founded assumptions was given by Jain, Lin, and Sahai — [[JLS21 - Indistinguishability obfuscation from well-founded assumptions|JLS21]].

## Syntax

An _indistinguishability obfuscator_ $i\calO$ is an efficient randomized algorithm such that:

- $i\calO(1^\secpar, C) \to \tilde{C}$, takes a circuit $C$ and outputs an obfuscated circuit $\tilde{C}$,
- $\tilde{C}(x) = C(x)$ for all inputs $x$ (functionality preservation).

## Properties

### Correctness

For all $\secpar \in \NN$, circuits $C$, and inputs $x$: $i\calO(1^\secpar, C)(x) = C(x)$ with probability 1.

### Indistinguishability

For every polynomial $s$, every pair of circuit families $\{C_{0,\secpar}\}_{\secpar}, \{C_{1,\secpar}\}_{\secpar}$ with $|C_{0,\secpar}| = |C_{1,\secpar}| \le s(\secpar)$ and $C_{0,\secpar}(x) = C_{1,\secpar}(x)$ for all $x$, and all efficient adversaries $\calA$,

$$
\Adv^{i\calO}_{\calA}(\secpar) := \left|2\Pr\!\left[\calA(i\calO(1^\secpar, C_{b,\secpar})) = b\right] - 1\right|
$$

is negligible, where $b \getsr \bits$ — [[GGHRSW13 - Candidate indistinguishability obfuscation and functional encryption for all circuits|GGHRSW13]]. The circuits grow with $\secpar$: for one fixed pair, the obfuscator that outputs a canonical truth table once $\secpar$ exceeds the pair's truth-table size, and the circuit itself before, has advantage eventually $0$ yet hides nothing — standard.

# Variations

## Virtual black-box obfuscation (VBB)

A stronger notion requiring that anything an efficient adversary can compute from the obfuscated program could be computed by a simulator with only oracle access to the program. VBB obfuscation is **impossible** for general circuits — [[BGI+01 - On the (Im)possibility of Obfuscating Programs|BGI+01]].

## Sub-exponentially secure iO

iO is **sub-exponentially secure** if there is a constant $\varepsilon > 0$ such that every adversary of size $2^{\secpar^{\varepsilon}}$ has advantage at most $2^{-\secpar^{\varepsilon}}$ in the indistinguishability game. Trapdoor permutations from iO — [[BPW16 - Perfect Structure on the Edge of Chaos Trapdoor Permutations from Indistinguishability Obfuscation|BPW16]] — and fully homomorphic encryption without circular security — [[CLTV15 - Obfuscation of Probabilistic Circuits and Applications|CLTV15]] — assume it.

## Statistical iO

An efficient, perfectly correct obfuscator $i\calO$ is **statistically secure** if for all circuit families as in the indistinguishability game, the distributions $i\calO(1^\secpar, C_{0,\secpar})$ and $i\calO(1^\secpar, C_{1,\secpar})$ are within negligible statistical distance — [[GR07 - On Best-Possible Obfuscation|GR07]]. [[statistical-io-to-io|Statistical iO is iO]], but it does not exist even for 3-CNF formulas unless the polynomial hierarchy collapses to its second level ([[no-io-to-statistical-io-gr07|No reduction from iO to statistical iO]]) — [[GR07 - On Best-Possible Obfuscation|GR07]].

## Differing-inputs obfuscation (diO)

A differing-inputs obfuscator requires that for every efficient sampler of $(C_0, C_1, \mathit{aux})$ with $|C_0| = |C_1|$ such that no efficient algorithm given $(C_0, C_1, \mathit{aux})$ finds $x$ with $C_0(x) \ne C_1(x)$ except with negligible probability, $(C_0, C_1, \mathit{aux}, i\calO(1^\secpar, C_0))$ and $(C_0, C_1, \mathit{aux}, i\calO(1^\secpar, C_1))$ are computationally indistinguishable — [[BCP14 - On Extractability Obfuscation|BCP14]]. Functionally equivalent circuits have no differing input, so diO implies iO — standard. iO implies diO for circuit pairs that differ on polynomially many inputs — [[BCP14 - On Extractability Obfuscation|BCP14]] — and diO for general auxiliary input is implausible — [[GGHW14 - On the Implausibility of Differing-Inputs Obfuscation and Extractable Witness Encryption with Auxiliary Input|GGHW14]].

# Other results

- [[mmap-to-io-gghrsw13|MMap + Leveled FHE ⇒ iO]] (candidate)
- [[ddh-and-lpn-and-lwe-and-nc1-prg-to-io-jls21|Sub-exponential SXDH + LWE + LPN + NC0-PRG ⇒ iO]]
- [[hash-function-and-io-to-pke-sw14|OWF + iO ⇒ PKE]]
- [[hash-function-and-io-to-fe-sw14|OWF + iO ⇒ FE]]
- [[hash-function-and-io-to-nizk-sw14|OWF + iO ⇒ Non-adaptively sound NIZK argument]]
- [[hash-function-and-io-to-deniable-encryption-sw14|OWF + iO ⇒ Deniable encryption]]
- iO together with one-way functions (or close variants of them) also yields injective trapdoor functions, CCA-secure PKE and oblivious transfer — [[SW14 - How to Use Indistinguishability Obfuscation Deniable Encryption, and More|SW14]]
- [[fe-to-io|FE ⇒ iO]]
- VBB obfuscation is impossible for general circuits — [[BGI+01 - On the (Im)possibility of Obfuscating Programs|BGI+01]]; efficient iO is best-possible obfuscation: it leaks no more than any other circuit of comparable size computing the same function — [[GR07 - On Best-Possible Obfuscation|GR07]]

<!-- BEGIN GENERATED participates-in 17f7847cfb0f -->

## Participates in

**Builds on Indistinguishability Obfuscation**

- [[differing-inputs-obfuscation-dio-to-io|Differing-inputs obfuscation (diO) ⇒ iO]] (via [[indistinguishability-obfuscation#differing-inputs-obfuscation-dio|Differing-inputs obfuscation (diO)]])
- [[hash-function-and-io-to-deniable-encryption-sw14|OWF + iO ⇒ Deniable encryption]]
- [[hash-function-and-io-to-ds-sw14|OWF + iO ⇒ DS]]
- [[hash-function-and-io-to-fe-sw14|OWF + iO ⇒ FE]]
- [[hash-function-and-io-to-nizk-sw14|OWF + iO ⇒ Non-adaptively sound NIZK argument]]
- [[hash-function-and-io-to-pke-sw14|OWF + iO ⇒ PKE]]
- [[io-and-np-not-in-io-bpp-to-owf-kmnpry14|iO + NP ⊄ io-BPP ⇒ OWF]]
- [[io-and-owf-to-multi-party-nike-bz14|iO + OWF ⇒ Multiparty NIKE (Boneh–Zhandry)]]
- [[io-and-owp-to-cls-hardness-hy17|iO + OWP ⇒ CLS hardness]]
- [[io-and-owp-to-ppad-hardness-gps16|iO + OWP ⇒ PPAD hardness]]
- [[io-to-witness-encryption|iO ⇒ Witness encryption]]
- [[statistical-io-to-io|Statistical iO ⇒ iO]] (via [[indistinguishability-obfuscation#statistical-io|Statistical iO]])
- [[subclasses-to-hash-function|Sub-exponential OWF + iO ⇒ PPAD hardness]] (via [[indistinguishability-obfuscation#sub-exponentially-secure-io|Sub-exponentially secure iO]])
- [[subexponential-io-and-owf-to-tdp-bpw16|Sub-exponential iO + Sub-exponential OWF ⇒ TDP (Bitansky–Paneth–Wichs)]] (via [[indistinguishability-obfuscation#sub-exponentially-secure-io|Sub-exponentially secure iO]])
- [[subexponential-io-and-rerandomizable-encryption-to-he-cltv15|Sub-exponential iO + Rerandomizable encryption ⇒ Compact FHE (CLTV)]] (via [[indistinguishability-obfuscation#sub-exponentially-secure-io|Sub-exponentially secure iO]])
- [[subexponential-io-to-io|Sub-exponentially secure iO ⇒ iO]] (via [[indistinguishability-obfuscation#sub-exponentially-secure-io|Sub-exponentially secure iO]])

**Produces Indistinguishability Obfuscation**

- [[ddh-and-lpn-and-lwe-and-nc1-prg-to-io-jls21|Sub-exponential SXDH + LWE + LPN + NC0-PRG ⇒ iO]]
- [[differing-inputs-obfuscation-dio-to-io|Differing-inputs obfuscation (diO) ⇒ iO]]
- [[fe-to-io|FE ⇒ iO]]
- [[mmap-to-io-gghrsw13|MMap + Leveled FHE ⇒ iO]]
- [[statistical-io-to-io|Statistical iO ⇒ iO]]
- [[subexponential-io-to-io|Sub-exponentially secure iO ⇒ iO]]

**Barriers**

- [[no-io-and-owf-to-owp-as16|No fully-black-box reduction from iO + OWF to domain-invariant OWP]]
- [[no-io-and-owp-to-crhf-as15|No fully-black-box reduction from iO + OWP to CRHF]]
- [[no-io-to-statistical-io-gr07|No reduction from iO to statistical iO]]

<!-- END GENERATED participates-in -->
