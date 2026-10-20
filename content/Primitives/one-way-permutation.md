---
type: primitive
status: stub
aliases:
  - OWP
  - One-way permutation
  - One-way permutations
title: One-way permutations
id: owp
---

# One-way permutations

A one-way permutation is an efficiently computable, length-preserving permutation of each $\bits^n$ that no efficient adversary inverts on a uniform input, except with negligible probability.

## Syntax

A one-way permutation is a deterministic polynomial-time algorithm computing $\pi : \bits^* \to \bits^*$ such that for every $n$, the restriction $\pi_n : \bits^n \to \bits^n$ is a permutation.

## Properties

### One-wayness

```pseudocode
\begin{algorithm}
\algname{Game}
\caption{$\Game^{\mathrm{owp}}_{\pi,\calA}(\secpar)$}
\begin{algorithmic}
\State $x \getsr \bits^\secpar$
\State $\hat{x} \gets \calA(1^\secpar, \pi_\secpar(x))$
\Return $[\hat{x} = x]$
\end{algorithmic}
\end{algorithm}
```

A permutation $\pi$ is **one-way** if for all efficient $\calA$,

$$
\Adv^{\mathrm{owp}}_{\pi,\calA}(\secpar) := \Pr\!\left[\Game^{\mathrm{owp}}_{\pi,\calA}(\secpar) = 1\right]
$$

is negligible — [[Gol01 - Foundations of Cryptography Basic Tools|Gol01]]. Hardness is on a uniform input over all of $\bits^\secpar$: for a one-way $\pi$, the permutation of $\bits^{2n}$ mapping $0^n \| u$ to $0^n \| \pi_n(u)$ and fixing every other input is hard to invert on $0^n \| U_n$, yet it is the identity on a $1 - 2^{-n}$ fraction of its domain, so it is not one-way — standard.

# Other results

- [[owp-to-hash-function|OWP ⇒ OWF]] — folklore
- [[no-injective-owf-to-owp-mm11|No fully black-box construction of OWP from length-increasing injective OWF]] — [[MM11 - On Black-Box Separations among Injective One-Way Functions|MM11a]]

<!-- BEGIN GENERATED participates-in a23499b1829a -->

## Participates in

**Builds on One-way permutations**

- [[owp-to-hash-function|OWP ⇒ OWF]]
- [[owp-to-prg-yao82a-gl89|OWP ⇒ PRG (Blum–Micali–Yao)]]
- [[owp-to-statistically-hiding-commitment-novy98|OWP ⇒ Statistically hiding COM (NOVY)]]
- [[owp-to-uowhf-ny89|OWP ⇒ UOWHF (Naor–Yung)]]

**Barriers**

- [[no-injective-owf-to-owp-mm11|No fully-black-box reduction from length-increasing injective OWF to OWP]]
- [[no-io-and-owf-to-owp-as16|No fully-black-box reduction from iO + OWF to domain-invariant OWP]]
- [[no-io-and-owp-to-crhf-as15|No fully-black-box reduction from iO + OWP to CRHF]]
- [[no-owf-to-owp-rud88|No fully-black-box reduction from OWF to OWP]]
- [[no-owp-to-crhf-sim98|No relativizing reduction from OWP to CRHF]]
- [[no-owp-to-ke-ir89|No relativizing reduction from OWP to KE]]

<!-- END GENERATED participates-in -->
