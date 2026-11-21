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

A hash proof system for a language $L \subset X$ is a family of keyed functions $H_k : X \to \Pi$ with a public projection $\alpha(k)$ that determines $H_k$ on $L$, so that $H_k(x)$ for $x \in L$ is computable from $\alpha(k)$ and a witness for $x$, while for $x \getsr X \setminus L$ the value $H_k(x)$ is statistically close to uniform given $x$ and $\alpha(k)$; the language comes from a subset membership problem in which elements of $L$ and of $X \setminus L$ are computationally indistinguishable — [[CS02 - Universal Hash Proofs and a Paradigm for Adaptive Chosen Ciphertext Secure Public-Key Encryption|CS02]].

## Syntax

A **subset membership problem** $\calM$ has, for each $\secpar$, an instance distribution $\calI_\secpar$ over instances $\Lambda$, each describing finite nonempty sets $L \subsetneq X$ and a witness relation $R_\Lambda$ with $L = \{x : \exists w, (x, w) \in R_\Lambda\}$, and efficient algorithms:

- an instance sampler $\mathsf{I}(1^\secpar) \to \Lambda$ whose output is within statistical distance $\delta_{\mathsf{I}}(\secpar)$ of $\calI_\secpar$,
- a subset sampler that, for every $\Lambda$ in the support of $\calI_\secpar$, outputs $(x, w) \in R_\Lambda$ with $x$ within statistical distance $\delta_L(\secpar)$ of uniform on $L$,
- an algorithm that decides, given $\Lambda$ and a bit string, whether the string encodes an element of $X$.

The **instance error** $\delta_{\mathsf{I}}$ and the **subset error** $\delta_L$ are negligible — [[CS02 - Universal Hash Proofs and a Paradigm for Adaptive Chosen Ciphertext Secure Public-Key Encryption|CS02]].

A **hash proof system** $\mathsf{HPS}$ for $\calM$ associates to each $\Lambda$ a projective hash family $\mathbf{H} = (H, \calK, X, L, \Pi, \calS, \alpha)$: a key space $\calK$, a projection space $\calS$, a finite group $\Pi$ with $|\Pi| \ge 2$, functions $H_k : X \to \Pi$ for $k \in \calK$ and a projection $\alpha : \calK \to \calS$, with efficient algorithms:

- $\KeyGen(\Lambda) \to k$, sampling $k$ uniformly from $\calK$,
- $\mathsf{Proj}(k) \to s$, computing $s = \alpha(k)$,
- $\mathsf{Priv}(k, x) \to \pi$, computing $\pi = H_k(x)$ for $x \in X$,
- $\mathsf{Pub}(s, x, w) \to \pi$, computing $\pi = H_k(x)$ for $(x, w) \in R_\Lambda$ and $s = \alpha(k)$.

## Properties

### Correctness

The family is **projective**: $\mathsf{Pub}(\alpha(k), x, w) = H_k(x)$ for all $k \in \calK$ and $(x, w) \in R_\Lambda$.

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

### Ideal families and approximation

The statistical properties below are stated for a projective hash family $\mathbf{H}^* = (H^*, \calK^*, X, L, \Pi, \calS, \alpha^*)$ on the same sets, an _ideal_ family whose keys need not be efficiently sampleable. For a projective hash family $\mathbf{H}$, let $F_{\mathbf{H}}$ be the distribution of the pair $(H_k, \alpha(k))$, a function $X \to \Pi$ together with a projection, for $k \getsr \calK$. $\mathbf{H}$ is a **$\delta$-approximation** of $\mathbf{H}^*$ if $F_{\mathbf{H}}$ and $F_{\mathbf{H}^*}$ are at statistical distance at most $\delta$.

A hash proof system for $\calM$ is **$\varepsilon$-smooth**, **$\varepsilon$-universal** or **$\varepsilon$-universal-2** if there are a negligible function $\delta_H(\secpar)$, its **key approximation error**, and for every $\Lambda$ in the support of $\calI_\secpar$ an ideal family $\mathbf{H}^*(\Lambda)$ with the property of that name below such that $\mathbf{H}(\Lambda)$ is a $\delta_H$-approximation of $\mathbf{H}^*(\Lambda)$ — [[CS02 - Universal Hash Proofs and a Paradigm for Adaptive Chosen Ciphertext Secure Public-Key Encryption|CS02]], Definition 7. With $\delta_H = 0$ the property holds for $\mathbf{H}(\Lambda)$ itself.

For smoothness, a $\delta_H$-approximation of an $\varepsilon$-smooth family is itself $(\varepsilon + 2\delta_H)$-smooth — standard. For the pointwise bounds of universality and universal-2 this fails: enlarge the key space of an ideal $\varepsilon$-universal family by one key $k_{\mathrm{bad}}$ whose projection $s_{\mathrm{bad}}$ no other key has. Uniform keys then give a $1/(|\calK^*| + 1)$-approximation, yet given $s_{\mathrm{bad}}$ the value $H_{k_{\mathrm{bad}}}(x)$ is determined, so the enlarged family is not $\varepsilon'$-universal for any $\varepsilon' < 1$ — standard.

### Smoothness

A projective hash family $\mathbf{H}^*$ is $\varepsilon$-**smooth** if the distributions

$$
\left(x, \alpha^*(k), H^*_k(x)\right) \quad\text{and}\quad \left(x, \alpha^*(k), \pi\right), \qquad k \getsr \calK^*,\ x \getsr X \setminus L,\ \pi \getsr \Pi,
$$

are at statistical distance at most $\varepsilon$ — [[CS02 - Universal Hash Proofs and a Paradigm for Adaptive Chosen Ciphertext Secure Public-Key Encryption|CS02]]. As an object, a hash proof system denotes an $\varepsilon$-smooth hash proof system for a hard subset membership problem, with $\varepsilon$ negligible.

### Universality

A projective hash family $\mathbf{H}^*$ is $\varepsilon$-**universal** if for all $s \in \calS$, $x \in X \setminus L$ and $\pi \in \Pi$,

$$
\Pr_{k \getsr \calK^*}\!\left[H^*_k(x) = \pi \;\middle|\; \alpha^*(k) = s\right] \le \varepsilon,
$$

whenever $\alpha^*(k) = s$ has nonzero probability: for every $x \notin L$, $H^*_k(x)$ has min-entropy at least $\log(1/\varepsilon)$ given $\alpha^*(k)$ — [[CS02 - Universal Hash Proofs and a Paradigm for Adaptive Chosen Ciphertext Secure Public-Key Encryption|CS02]]. A _universal hash proof system_ is an $\varepsilon$-universal hash proof system for a hard subset membership problem, with $\varepsilon$ negligible. A $1/|\Pi|$-universal ideal family is $0$-smooth, since $H^*_k(x)$ is then uniform in $\Pi$ given $\alpha^*(k)$ for every $x \notin L$ — standard.

### Universal-2 hash proof systems

An _extended_ hash proof system takes a tag $e$ from a finite set $E$ as a second input, $H_k : X \times E \to \Pi$, with approximation defined as above for the functions on $X \times E$. A projective hash family $\mathbf{H}^*$ of this form is $\varepsilon$-**universal-2** if for all $s \in \calS$, all $x, x^* \in X$ and $e, e^* \in E$ with $x^* \notin L$ and $(x^*, e^*) \ne (x, e)$, and all $\pi, \pi^* \in \Pi$,

$$
\Pr_{k \getsr \calK^*}\!\left[H^*_k(x^*, e^*) = \pi^* \;\middle|\; H^*_k(x, e) = \pi \wedge \alpha^*(k) = s\right] \le \varepsilon,
$$

whenever the conditioning event has nonzero probability. A _universal-2 hash proof system_ for $\calM$ is a pair of a smooth hash proof system with values in $\Pi$ and an extended $\varepsilon$-universal-2 hash proof system with tag set $E = \Pi$ and values in some $\hat\Pi$, for the same hard subset membership problem, with $\varepsilon$ negligible; this pair is the input to the IND-CCA2 construction of [[CS02 - Universal Hash Proofs and a Paradigm for Adaptive Chosen Ciphertext Secure Public-Key Encryption|CS02]].

# Variations

## Smooth projective hashing for languages of ciphertexts

TODO: the smooth projective hashing notion of [[GL03 - A Framework for Password-Based Authenticated Key Exchange|GL03]], stated from the paper.

# Other results

- Every smooth hash proof system for a hard subset membership problem gives [[public-key-encryption#cpa-security|IND-CPA-secure]] [[public-key-encryption|PKE]], and every universal-2 hash proof system gives [[public-key-encryption#cca-security|IND-CCA2-secure]] PKE without random oracles: [[hash-proof-system-to-pke-cpa-security-cs02|HPS ⇒ CPA-secure PKE]], [[universal2-hash-proof-system-to-pke-cca2-security-cs02|Universal-2 HPS ⇒ CCA-secure PKE]] — [[CS02 - Universal Hash Proofs and a Paradigm for Adaptive Chosen Ciphertext Secure Public-Key Encryption|CS02]].
- Universal-2 hash proof systems exist under [[decisional-diffie-hellman#ddh-in-prime-order-groups-with-decidable-membership|DDH in prime-order groups with decidable membership]], [[decisional-composite-residuosity#dcr-with-safe-prime-moduli|DCR for safe-prime moduli]] and [[quadratic-residuosity|quadratic residuosity]], and the [[ddh-and-uowhf-to-pke-cca2-security-cs98|Cramer–Shoup cryptosystem]] is a special case of the paradigm: [[prime-order-ddh-to-universal2-hash-proof-system-cs02|DDH ⇒ Universal-2 HPS]], [[dcr-safe-primes-to-universal2-hash-proof-system-cs02|DCR (safe-prime moduli) ⇒ Universal-2 HPS]] — [[CS02 - Universal Hash Proofs and a Paradigm for Adaptive Chosen Ciphertext Secure Public-Key Encryption|CS02]].
- Smooth projective hash functions for languages of ciphertexts of a given message under a given public key give [[password-authenticated-key-exchange|password-based authenticated key exchange]] in the common reference string model, built from non-malleable [[commitment-scheme|commitments]], [[digital-signature#one-time-signatures|one-time signatures]] and smooth projective hash functions, abstracting the DDH-based protocol of [[KOY01 - Efficient Password-Authenticated Key Exchange Using Human-Memorable Passwords|KOY01]] ([[ddh-to-pake-koy01|DDH ⇒ PAKE]]) and instantiated under DDH, quadratic residuosity and $N$-th residuosity — [[GL03 - A Framework for Password-Based Authenticated Key Exchange|GL03]].
- Every $\varepsilon$-universal hash proof system with key approximation error $\delta_H = 0$ for a hard subset membership problem gives [[leakage-resilient-public-key-encryption|leakage-resilient PKE]] tolerating $\log(1/\varepsilon) - m - \omega(\log \secpar)$ bits of leakage on the secret key for $m$-bit messages, under no assumption beyond the hardness of the subset membership problem and with the same efficiency ([[universal-hash-proof-system-to-leakage-resilient-pke-ns09|Universal HPS ⇒ LR-PKE]]); the scheme this construction gives from a new hash proof system based on DDH, or on any of the [$d$-Linear assumptions](bilinear-map-assumptions#k-linear-assumption), tolerates leakage of a $1 - o(1)$ fraction of its secret key ([[prime-order-ddh-to-leakage-resilient-pke-ns09|DDH ⇒ LR-PKE]], [$d$-Linear ⇒ LR-PKE](k-linear-assumption-to-leakage-resilient-pke-ns09)) — [[NS09 - Public-Key Cryptosystems Resilient to Key Leakage|NS09]]. With $\delta_H > 0$ the same argument tolerates $\log(1/(\varepsilon + 2\delta_H)) - m - \omega(\log \secpar)$ bits, since for every $x \notin L$ the probability of predicting $H_k(x)$ from $\alpha(k)$, averaged over $\alpha(k)$, is then at most $\varepsilon + 2\delta_H$ — standard.
- A modification of smooth projective hashing whose smoothness holds for maliciously chosen hash families gives two-message [[oblivious-transfer|oblivious transfer]], abstracting the DDH-based protocols of [[NP01 - Efficient Oblivious Transfer Protocols|NP01]] and [[AIR01 - Priced Oblivious Transfer How to Sell Digital Goods|AIR01]], with new instantiations under $N$-th residuosity and under quadratic residuosity together with the extended Riemann hypothesis — [[HK12 - Smooth Projective Hashing and Two-Message Oblivious Transfer|HK12]].

<!-- BEGIN GENERATED participates-in 57d5fe1b23d0 -->

## Participates in

**Builds on Hash proof system**

- [[hash-proof-system-to-pke-cpa-security-cs02|HPS ⇒ CPA-secure PKE]]
- [[universal-hash-proof-system-to-leakage-resilient-pke-ns09|Universal HPS ⇒ LR-PKE]] (via [[hash-proof-system#universality|Universality]])
- [[universal2-hash-proof-system-to-hash-proof-system|Universal-2 HPS ⇒ HPS]] (via [[hash-proof-system#universal-2-hash-proof-systems|Universal-2 hash proof systems]])
- [[universal2-hash-proof-system-to-pke-cca2-security-cs02|Universal-2 HPS ⇒ CCA-secure PKE]] (via [[hash-proof-system#universal-2-hash-proof-systems|Universal-2 hash proof systems]])

**Produces Hash proof system**

- [[dcr-safe-primes-to-universal2-hash-proof-system-cs02|DCR (safe-prime moduli) ⇒ Universal-2 HPS]] (via [[hash-proof-system#universal-2-hash-proof-systems|Universal-2 hash proof systems]])
- [[prime-order-ddh-to-universal2-hash-proof-system-cs02|DDH ⇒ Universal-2 HPS]] (via [[hash-proof-system#universal-2-hash-proof-systems|Universal-2 hash proof systems]])
- [[universal2-hash-proof-system-to-hash-proof-system|Universal-2 HPS ⇒ HPS]]

<!-- END GENERATED participates-in -->
