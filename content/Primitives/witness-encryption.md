---
type: primitive
status: draft
aliases:
  - WE
  - Witness encryption
title: Witness encryption
id: witness-encryption
---

# Witness encryption

Witness encryption for an $\classNP$ relation $\calR$ encrypts a message under a statement $x$, so that anyone holding a witness $w$ with $(x, w) \in \calR$ can decrypt, while for a false statement the ciphertext hides the message — [[GGSW13 - Witness encryption and its applications|GGSW13]].

## Syntax

A witness encryption scheme for an $\classNP$ relation $\calR$ with language $L$ is a pair of efficient algorithms $(\Enc, \Dec)$:

- $\Enc(1^\secpar, x, m) \to c$, a randomized algorithm taking a statement $x$ and a message $m \in \bits$,
- $\Dec(c, w) \to m$ or $\bot$, a deterministic algorithm taking a ciphertext and a candidate witness.

## Properties

### Correctness

For all $\secpar$, all $(x, w) \in \calR$ and all $m \in \bits$, $\Pr\!\left[\Dec(\Enc(1^\secpar, x, m), w) = m\right] \ge 1 - \negl(\secpar)$ over the coins of $\Enc$.

### Soundness security

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{we}}_{\calA}(\secpar, x)$}
\begin{algorithmic}
\Comment{The statement $x \notin L$ is fixed in advance}
\State $b \getsr \bits$
\State $c \gets \Enc(1^\secpar, x, b)$
\State $b' \gets \calA(1^\secpar, x, c)$
\Return $[b' = b]$
\end{algorithmic}
\end{algorithm}
```

A witness encryption scheme is **sound-secure** if for all efficient $\calA$ and every sequence $(x_\secpar)_{\secpar \in \NN}$ with $x_\secpar \notin L$ and $|x_\secpar| \le \poly(\secpar)$,

$$
\Adv^{\mathrm{we}}_{\calA}(\secpar, x) := \left|2\Pr\!\left[\Game^{\mathrm{we}}_{\calA}(\secpar, x) = 1\right] - 1\right|
$$

is negligible — [[GGSW13 - Witness encryption and its applications|GGSW13]]. The challenger cannot in general decide whether $x \notin L$, so $x$ is fixed by the quantifier rather than chosen by $\calA$.

# Variations

## Extractable witness encryption

A stronger notion requires, for every statement $x$, that any efficient adversary distinguishing encryptions of $0$ and $1$ under $x$ with non-negligible advantage yields an efficient extractor that outputs a witness for $x$ with non-negligible probability — [[GKPVZ13 - How to Run Turing Machines on Encrypted Data|GKPVZ13]]. With auxiliary input, extractable witness encryption conflicts with plausible special-purpose obfuscation — [[GGHW14 - On the Implausibility of Differing-Inputs Obfuscation and Extractable Witness Encryption with Auxiliary Input|GGHW14]].

# Other results

- Combined with standard primitives, witness encryption gives PKE, IBE and attribute-based encryption — [[GGSW13 - Witness encryption and its applications|GGSW13]].

<!-- BEGIN GENERATED participates-in decdaa1bf8b4 -->

## Participates in

**Builds on Witness encryption**

- [[witness-encryption-and-prg-to-pke-ggsw13|WE + PRG ⇒ PKE (GGSW)]]

**Produces Witness encryption**

- [[io-to-witness-encryption|iO ⇒ Witness encryption]]
- [[multilinear-maps-to-witness-encryption-ggsw13|Multilinear No-Exact-Cover ⇒ Witness encryption (GGSW)]]

<!-- END GENERATED participates-in -->
