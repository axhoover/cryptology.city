---
type: reduction
status: draft
title: "Hash function ⇒ Hash-based signatures"
aliases: []
id: red-hash-function-to-hash-based-signatures-lam79
kind: implication
hypotheses: [hash-function]
conclusion: one-time-signature
class: fully-black-box
model: standard
source:
  - "[[Lam79 - Constructing digital signatures from a one way function|Lam79]]"
security-loss: ""
---

# Hash function ⇒ Hash-based signatures

[[hash-function|Hash function]] implies one-time [[digital-signature#hash-based-signatures|hash-based signatures]].

## Statement

A [[hash-function|one-way function]] implies one-time [[digital-signature#hash-based-signatures|digital signatures]] (Lamport's scheme): for $\ell$-bit messages the signing key is $2\ell$ uniform preimages $x_{i,b}$, the verification key is their images $y_{i,b} = \hash(k, x_{i,b})$, and the signature on $m$ reveals $(x_{i,m_i})_{i \le \ell}$; a key pair signs one message — [[Lam79 - Constructing digital signatures from a one way function|Lam79]].

## Sketch

A forgery on $\hat{m} \ne m$ must reveal a preimage of some $y_{i,1-m_i}$ not opened by the signature on $m$. The reduction plants its one-wayness challenge at a uniformly random slot among the $2\ell$, aborts if the single signing query opens that slot, answers it with the remaining preimages, and inverts $\hash(k, \cdot)$ whenever the forgery opens the planted slot — a factor-$2\ell$ loss.

```pseudocode
\begin{algorithm}
\algname{Algorithm}
\caption{$\KeyGen(1^\secpar)$}
\begin{algorithmic}
\State $k \getsr \calK$
\For{$i = 1, \dots, \ell$ and $b \in \bits$}
\State $x_{i,b} \getsr \calD$; $y_{i,b} \gets \hash(k, x_{i,b})$
\EndFor
\Return $(\sk, \vk) := \big((x_{i,b})_{i,b},\ (k, (y_{i,b})_{i,b})\big)$
\end{algorithmic}
\end{algorithm}

\begin{algorithm}
\algname{Algorithm}
\caption{$\Sign(\sk, m \in \bits^\ell)$}
\begin{algorithmic}
\Return $\sigma := (x_{1,m_1}, \dots, x_{\ell,m_\ell})$
\end{algorithmic}
\end{algorithm}

\begin{algorithm}
\algname{Algorithm}
\caption{$\Vrfy(\vk, m, \sigma)$}
\begin{algorithmic}
\Return $[\hash(k, \sigma_i) = y_{i,m_i} \text{ for all } i \in \{1,\dots,\ell\}]$
\end{algorithmic}
\end{algorithm}
```

## Notes

`class: fully-black-box`: Key generation and verification evaluate the one-way function only as an oracle; the reduction runs any forger once as an oracle, planting its inversion challenge at a random key slot and answering the single signing query with the remaining preimages — the RTV04 fully-black-box shape.

- The Winternitz variant signs several message bits per hash chain, trading $\hash$ evaluations for signature size — [[Mer89 - A Certified Digital Signature|Mer89]].
- Suspected error on [[digital-signature]] (reported, not fixed): its 'sign one bit per hash chain' describes Winternitz; Lamport publishes two images per message bit and reveals one preimage per bit, with no chains.
- Suspected error on [[digital-signature]] (reported, not fixed): Lamport signatures are $O(\secpar \cdot |m|)$ bits for an $|m|$-bit message ($O(\secpar^2)$ with hashed messages), not $O(\secpar)$.
