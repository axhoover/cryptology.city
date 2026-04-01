---
aliases:
  - iO
  - Indistinguishability Obfuscation
title: Indistinguishability Obfuscation
---

# Indistinguishability Obfuscation

_Indistinguishability obfuscation (iO)_ is a form of program obfuscation in which the obfuscated programs for any two functionally equivalent circuits are computationally indistinguishable. It is considered a "universal" cryptographic primitive: combined with [[hash-function|one-way functions]], iO implies a vast number of cryptographic primitives. The first candidate construction was given by Garg, Gentry, Halevi, Raykova, Sahai, and Waters — [[GGHRSW13 - Candidate indistinguishability obfuscation and functional encryption for all circuits|GGHRSW13]]; the first construction from well-founded assumptions was given by Jain, Lin, and Sahai — [[JLS21 - Indistinguishability obfuscation from well-founded assumptions|JLS21]].

## Syntax

An _indistinguishability obfuscator_ $i\mathcal{O}$ is an efficient randomized algorithm such that:

- $i\mathcal{O}(1^\secpar, C) \to \tilde{C}$, takes a circuit $C$ and outputs an obfuscated circuit $\tilde{C}$,
- $\tilde{C}(x) = C(x)$ for all inputs $x$ (functionality preservation).

## Properties

### Correctness

For all $\secpar \in \NN$, circuits $C$, and inputs $x$: $i\mathcal{O}(1^\secpar, C)(x) = C(x)$ with probability 1.

### Indistinguishability

For all pairs of circuits $C_0, C_1$ of the same size that compute the same function (i.e., $C_0(x) = C_1(x)$ for all $x$), and all efficient adversaries $\calA$:

$$
\Adv^{i\mathcal{O}}_{\calA}(\secpar) := \left|2\Pr\!\left[\calA(i\mathcal{O}(1^\secpar, C_b)) = b\right] - 1\right|
$$

is negligible, where $b \getsr \bits$.

# Variations

## Virtual black-box obfuscation (VBB)

A stronger notion requiring that anything an efficient adversary can compute from the obfuscated program could be computed by a simulator with only oracle access to the program. VBB obfuscation is **impossible** for general circuits — standard (Barak et al. 2001).

## Differing-inputs obfuscation (diO)

An intermediate notion between iO and VBB, which requires indistinguishability for pairs of circuits that are hard to distinguish on any input. Known to be equivalent to iO under certain conditions.

# Other results

- First iO candidate construction (based on multilinear maps) — [[GGHRSW13 - Candidate indistinguishability obfuscation and functional encryption for all circuits|GGHRSW13]]
- First iO from well-founded assumptions: sub-exponential [[learning-with-errors|LWE]], [[learning-parity-with-noise|LPN]], pseudorandom generators in $\mathrm{NC}^1$, and [[decisional-diffie-hellman|DDH]] — [[JLS21 - Indistinguishability obfuscation from well-founded assumptions|JLS21]]
- iO + [[hash-function|OWF]] → [[public-key-encryption|PKE]] — [[SW14 - How to Use Indistinguishability Obfuscation Deniable Encryption, and More|SW14]]
- iO + OWF → functional encryption for all circuits — [[GGHRSW13 - Candidate indistinguishability obfuscation and functional encryption for all circuits|GGHRSW13]], [[SW14 - How to Use Indistinguishability Obfuscation Deniable Encryption, and More|SW14]]
- iO + OWF → [[non-interactive-zero-knowledge|NIZK]] in the plain model (no CRS) — [[SW14 - How to Use Indistinguishability Obfuscation Deniable Encryption, and More|SW14]]
- iO + OWF → deniable encryption, lossy functions, and many other primitives — [[SW14 - How to Use Indistinguishability Obfuscation Deniable Encryption, and More|SW14]]
- iO is implied by functional encryption for $\mathrm{P}/\mathrm{poly}$ (circuits of any polynomial size) in a strong sense — standard
- VBB obfuscation is impossible for general circuits; iO is believed to be the "best possible" general obfuscation — standard
