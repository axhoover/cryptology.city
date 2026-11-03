---
type: primitive
status: draft
aliases:
  - HPS
  - Hash proof system
  - Smooth projective hash function
  - SPHF
title: Hash proof system
id: hash-proof-system
variants:
  universal2-hash-proof-system: "#universal-2-hash-proof-systems"
  universal-hash-proof-system: "#universality"
---

# Hash proof system

A hash proof system for a language $L \subset X$ is a family of keyed functions $H_k : X \to \Pi$ with a public projection $\alpha(k)$ that determines $H_k$ on $L$, so that $H_k(x)$ for $x \in L$ is computable from $\alpha(k)$ and a witness for $x$, while for $x \in X \setminus L$ the value $H_k(x)$ is statistically close to uniform given $\alpha(k)$; the language comes from a subset membership problem in which elements of $L$ and of $X \setminus L$ are computationally indistinguishable — [[CS02 - Universal Hash Proofs and a Paradigm for Adaptive Chosen Ciphertext Secure Public-Key Encryption|CS02]].

## Syntax

A **subset membership problem** $\calM$ is an efficient instance generator $\mathsf{I}(1^\secpar) \to \Lambda$, where $\Lambda$ describes finite nonempty sets $L \subsetneq X$ and a witness relation $R_\Lambda$ with $L = \{x : \exists w, (x, w) \in R_\Lambda\}$, together with efficient algorithms that sample $(x, w) \in R_\Lambda$ with $x$ uniform in $L$, and sample $x$ uniform in $X \setminus L$.

A **hash proof system** $\mathsf{HPS}$ for $\calM$ associates to each $\Lambda$ a key space $\calK$, a projection space $\calS$, a group $\Pi$, functions $H_k : X \to \Pi$ for $k \in \calK$ and a projection $\alpha : \calK \to \calS$, with efficient algorithms:

- $\KeyGen(\Lambda) \to k$, sampling $k$ uniformly from $\calK$,
- $\mathsf{Proj}(k) \to s$, computing $s = \alpha(k)$,
- $\mathsf{Priv}(k, x) \to \pi$, computing $\pi = H_k(x)$ for $x \in X$,
- $\mathsf{Pub}(s, x, w) \to \pi$, computing $\pi = H_k(x)$ for $(x, w) \in R_\Lambda$ and $s = \alpha(k)$.

The family is **projective**: $\mathsf{Pub}(\alpha(k), x, w) = H_k(x)$ for all $k \in \calK$ and $(x, w) \in R_\Lambda$.

## Properties

### Hardness of the subset membership problem

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{smp}}_{\calM,\calA}(\secpar)$}
\begin{algorithmic}
\State $\Lambda \gets \mathsf{I}(1^\secpar)$; $b \getsr \bits$
\State $x_0 \getsr L$; $x_1 \getsr X \setminus L$
\State $b' \gets \calA(\Lambda, x_b)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

A subset membership problem $\calM$ is **hard** if for all efficient $\calA$,

$$
\Adv^{\mathrm{smp}}_{\calM,\calA}(\secpar) := \left|2\Pr\!\left[\Game^{\mathrm{smp}}_{\calM,\calA}(\secpar) = 1\right] - 1\right|
$$

is negligible — [[CS02 - Universal Hash Proofs and a Paradigm for Adaptive Chosen Ciphertext Secure Public-Key Encryption|CS02]].

### Smoothness

A hash proof system is $\varepsilon$-**smooth** if for every instance $\Lambda$ the distributions

$$
\left(x, \alpha(k), H_k(x)\right) \quad\text{and}\quad \left(x, \alpha(k), \pi\right), \qquad k \getsr \calK,\ x \getsr X \setminus L,\ \pi \getsr \Pi,
$$

are at statistical distance at most $\varepsilon$, and **smooth** if $\varepsilon$ is negligible in $\secpar$ — [[CS02 - Universal Hash Proofs and a Paradigm for Adaptive Chosen Ciphertext Secure Public-Key Encryption|CS02]].

### Universality

A hash proof system is $\varepsilon$-**universal** if for every instance $\Lambda$, all $s \in \calS$, $x \in X \setminus L$ and $\pi \in \Pi$,

$$
\Pr_{k \getsr \calK}\!\left[H_k(x) = \pi \;\middle|\; \alpha(k) = s\right] \le \varepsilon,
$$

whenever $\alpha(k) = s$ has nonzero probability: for every $x \notin L$, $H_k(x)$ has min-entropy at least $\log(1/\varepsilon)$ given $\alpha(k)$ — [[CS02 - Universal Hash Proofs and a Paradigm for Adaptive Chosen Ciphertext Secure Public-Key Encryption|CS02]]. A _universal hash proof system_ is an $\varepsilon$-universal hash proof system for a hard subset membership problem, with $\varepsilon$ negligible. For $\varepsilon = 1/|\Pi|$, $H_k(x)$ is uniform in $\Pi$ given $\alpha(k)$ for every $x \notin L$, so the system is $0$-smooth — standard.

### Universal-2 hash proof systems

An _extended_ hash proof system takes a tag $e$ from a finite set $E$ as a second input, $H_k : X \times E \to \Pi$. It is $\varepsilon$-**universal-2** if for all $s \in \calS$, all $x, x^* \in X$ and $e, e^* \in E$ with $x^* \notin L$ and $(x^*, e^*) \ne (x, e)$, and all $\pi, \pi^* \in \Pi$,

$$
\Pr_{k \getsr \calK}\!\left[H_k(x^*, e^*) = \pi^* \;\middle|\; H_k(x, e) = \pi \wedge \alpha(k) = s\right] \le \varepsilon,
$$

whenever the conditioning event has nonzero probability: $H_k$ at one point outside $L$ stays unpredictable given $\alpha(k)$ and its value at any other point. A _universal-2 hash proof system_ for $\calM$ is a pair of a smooth hash proof system and an extended $\varepsilon$-universal-2 hash proof system for the same hard subset membership problem, with $\varepsilon$ negligible — [[CS02 - Universal Hash Proofs and a Paradigm for Adaptive Chosen Ciphertext Secure Public-Key Encryption|CS02]].

# Variations

## Smooth projective hashing for languages of ciphertexts

Smooth projective hash functions for languages such as "ciphertexts of a given message under a given public key" give [[password-authenticated-key-exchange|password-based authenticated key exchange]] in the common reference string model: [[GL03 - A Framework for Password-Based Authenticated Key Exchange|GL03]] build it from non-malleable commitments, one-time signatures and smooth projective hash functions, abstracting the DDH-based protocol of Katz, Ostrovsky and Yung, and instantiate it under DDH, quadratic residuosity and $N$-residuosity.

# Other results

- Every smooth hash proof system for a hard subset membership problem gives IND-CPA-secure PKE, and every universal-2 hash proof system gives IND-CCA2-secure PKE without random oracles: [[hash-proof-system-to-pke-cpa-security-cs02|HPS ⇒ CPA-secure PKE]], [[universal2-hash-proof-system-to-pke-cca2-security-cs02|Universal-2 HPS ⇒ CCA-secure PKE]].
- Universal-2 hash proof systems exist under DDH, DCR and quadratic residuosity, and the [[ddh-and-uowhf-to-pke-cca2-security-cs98|Cramer–Shoup cryptosystem]] is a special case of the paradigm: [[prime-order-ddh-to-universal2-hash-proof-system-cs02|DDH ⇒ Universal-2 HPS]], [[dcr-safe-primes-to-universal2-hash-proof-system-cs02|DCR ⇒ Universal-2 HPS]]; the QR-based system is also in [[CS02 - Universal Hash Proofs and a Paradigm for Adaptive Chosen Ciphertext Secure Public-Key Encryption|CS02]].
- Every $\varepsilon$-universal hash proof system gives [[leakage-resilient-public-key-encryption|leakage-resilient PKE]] tolerating $\log(1/\varepsilon) - m - \omega(\log \secpar)$ bits of leakage on the secret key for $m$-bit messages, under no assumption beyond those of the hash proof system and with the same efficiency ([[universal-hash-proof-system-to-leakage-resilient-pke-ns09|Universal HPS ⇒ LR-PKE]]); a new DDH- and $d$-Linear-based hash proof system tolerates leakage of $L(1 - o(1))$ bits for $L$ the secret-key length ([[prime-order-ddh-to-leakage-resilient-pke-ns09|DDH ⇒ LR-PKE]]) — [[NS09 - Public-Key Cryptosystems Resilient to Key Leakage|NS09]].
- A modification of smooth projective hashing whose smoothness holds for maliciously chosen hash families gives two-message [[oblivious-transfer|oblivious transfer]], abstracting the DDH-based protocols of Naor–Pinkas and Aiello–Ishai–Reingold, with new instantiations under $N$-th residuosity and under quadratic residuosity together with the extended Riemann hypothesis — [[HK12 - Smooth Projective Hashing and Two-Message Oblivious Transfer|HK12]].

<!-- BEGIN GENERATED participates-in cc82c461d721 -->

## Participates in

**Builds on Hash proof system**

- [[hash-proof-system-to-pke-cpa-security-cs02|HPS ⇒ CPA-secure PKE]]
- [[universal-hash-proof-system-to-leakage-resilient-pke-ns09|Universal HPS ⇒ LR-PKE]] (via [[hash-proof-system#universality|Universality]])
- [[universal2-hash-proof-system-to-hash-proof-system|Universal-2 HPS ⇒ HPS]] (via [[hash-proof-system#universal-2-hash-proof-systems|Universal-2 hash proof systems]])
- [[universal2-hash-proof-system-to-pke-cca2-security-cs02|Universal-2 HPS ⇒ CCA-secure PKE]] (via [[hash-proof-system#universal-2-hash-proof-systems|Universal-2 hash proof systems]])

**Produces Hash proof system**

- [[dcr-safe-primes-to-universal2-hash-proof-system-cs02|DCR ⇒ Universal-2 HPS]] (via [[hash-proof-system#universal-2-hash-proof-systems|Universal-2 hash proof systems]])
- [[prime-order-ddh-to-universal2-hash-proof-system-cs02|DDH ⇒ Universal-2 HPS]] (via [[hash-proof-system#universal-2-hash-proof-systems|Universal-2 hash proof systems]])
- [[universal2-hash-proof-system-to-hash-proof-system|Universal-2 HPS ⇒ HPS]]

<!-- END GENERATED participates-in -->
